import asyncio
from flask import Flask, request, jsonify
from flask_cors import CORS
from gradio_client import Client
from levizr import llm
from llms import *
import json
import base64
import aiohttp
import re
from requirements import *
import logging
from datetime import datetime

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Set up advanced logging system
logging.basicConfig(
    filename="server.log",
    level=logging.DEBUG,
    format="%(asctime)s - %(levelname)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)

# Suppress specific debug logs from pymongo
logging.getLogger("pymongo").setLevel(logging.WARNING)  # Adjust as needed (INFO, WARNING, ERROR)

# Additional suppression for aiohttp or other noisy modules
logging.getLogger("aiohttp").setLevel(logging.WARNING)

# Initialize Gradio client
global client
client = None

# Initialize Title Generator
TitleGenerator = llm.ChatBot(
    model="meta-llama/Llama-3.3-70B-Instruct-Turbo",
    systemMessages="""
    You are an image title generator. Your work is to generate titles according to the given image prompt.

    **Response Requirements**:
    - Format your response strictly as a JSON object.
    - Follow this structure:
    - These are some categories ["""+categories+"""]

      {
        "title": "Generated title",
        "categorie": "choose from given categories",
        "tags": "[list of relevant tags]"
      }
    Ensure the title is creative and relevant to the user's query.
    Important Notes:

    Do not include any additional text, comments, or explanations outside the JSON object.
    Any deviation from the specified format may result in errors in the system.
    Example Output:

    {
        "title": "Enchanted Forest at Dawn",
        "categorie": "FantasyAndMythology",
        "tags": "[Mysetry, Tree, Forest, Magic]"
    }

    Always ensure your response is accurate, creative, and strictly adheres to the required format.
    """
)

# Function to extract URL from the response text
def get_url_from_text(text):
    """Extracts the URL from a response text."""
    url_pattern = r'!\[.*?\]\((.*?)\)'
    url_match = re.search(url_pattern, text)
    return url_match.group(1) if url_match else None
# Generate extra details from prompt
async def generate_extra_details(prompt):
    # Use the TitleGenerator to generate a category
    response = await asyncio.to_thread(TitleGenerator.send_message,prompt)
    # Extract the category from the response
    response = json.loads(response)
    return response
# Asynchronous function to generate a free image from a prompt
async def generate_free_image_async(prompt):
    """Generates a free image using an external API."""
    try:
        async with aiohttp.ClientSession() as session:
            data = {
                "messages": [
                    {"id": "unique-id", "content": prompt, "role": "user"}
                ],
                "agentMode": {
                    "mode": True,
                    "id": "ImageGenerationLV45LJp",
                    "name": "Image Generation"
                },
                "maxTokens": 1024
            }
            async with session.post(
                "https://api.blackbox.ai/api/chat",
                json=data,
                headers={"Content-Type": "application/json"}
            ) as response:
                if response.status == 200:
                    text = await response.text()
                    logging.info("Free image generated successfully.")
                    url = ftp_upload(image_location=get_url_from_text(text), remote_path=f"./images/", offline=False)
                    return url
                else:
                    logging.error(f"Failed to generate free image. Status code: {response.status}")
                    return None
    except Exception as e:
        logging.exception(f"Error generating free image: {str(e)}")
        return None

# Function to generate a premium image using Gradio client
def generate_premium_image_async(prompt):
    """Generates a premium image using Gradio client."""
    global client
    try:
        if client is None:
            client = Client("takarajordan/CineDiffusion")
        result = client.predict(
            prompt=prompt,
            aspect_ratio="2.39:1 (Modern Widescreen)",
            width=2048,
            seed=0,
            randomize_seed=True,
            num_inference_steps=4,
            api_name="/infer"
        )
        image_path = change_image_format(str(result[0]))  # Local file path to the generated image
        url = ftp_upload(image_location=image_path, remote_path=f"./images/")
        logging.info("Premium image generated successfully.")
        return url
    except Exception as e:
        logging.exception(f"Error generating premium image: {str(e)}")
        return None

# Function to save image info to MongoDB
def save_image_info_to_db(image_data):
    """Save image information to the MongoDB collection."""
    try:
        result = collection.insert_one(image_data)
        logging.info(f"Image data saved successfully with ID: {result.inserted_id}")
    except Exception as e:
        logging.exception(f"Error saving image data to DB: {e}")

# Route to generate an image
@app.route("/generate-image", methods=["POST"])
async def generate_image():
    """Endpoint to generate an image based on user input."""
    data = request.json
    if not data or "prompt" not in data or "type" not in data or "is_improove_prompt" not in data or "creator" not in data:
        logging.warning("Invalid request payload received.")
        return jsonify({"error": "Invalid request, 'prompt', 'type', and 'is_improove_prompt' are required"}), 400

    prompt = data["prompt"]
    style = data.get("style", "default")
    image_type = data["type"].lower()
    is_improove_prompt = data["is_improove_prompt"]
    creator = data["creator"]
    title = None
    categorie = None
    tags = None
    if is_improove_prompt:
        # Initialize generator
        generator = llms_map.get(style, {}).get("llm")
        if not generator:
            logging.warning(f"Unsupported style: {style}")
            return jsonify({"error": f"Style '{style}' is not supported"}), 400
        # Improve prompt logic
        retry_count = 3
        while retry_count > 0:
            try:
                res = await asyncio.to_thread(generator.send_message, prompt)
                res = json.loads(res)
                title = res["title"]
                prompt = res.get("prompt", prompt)
                categorie = res.get("categorie", None)
                tags = res.get("tags", None)
                break
            except Exception as e:
                retry_count -= 1
                logging.error(f"Prompt improvement failed: {str(e)}")
                if retry_count == 0:
                    return jsonify({"error": f"Some Error "}), 500
    else:
        res = await generate_extra_details(prompt)
        title = res["title"]
        categorie = res.get("categorie", None)
        tags = res.get("tags", None)

    # Image generation
    image_info = {
        "title": title,
        "prompt": prompt,
        "style": style,
        "img_type": image_type,
        "categorie": categorie,
        "creator": creator,
        "tags": tags,
        "file_type": "unknown",
        "is_improove_prompt": is_improove_prompt,
        "timestamp": datetime.utcnow()
    }

    if image_type == "free":
        image_url = await generate_free_image_async(prompt)
        if image_url:
            image_info["image_url"] = image_url
            image_info["file_type"] = urlparse(image_url).path.split(".")[-1]
            await asyncio.to_thread(save_image_info_to_db, image_info)
            return jsonify({"image_url": image_url, "image_type": image_type, "title": title, "prompt": prompt})
        else:
            logging.error("Failed to generate free image.")
            return jsonify({"error": "Failed to generate free image"}), 500

    elif image_type == "premium":
        image_url = generate_premium_image_async(prompt)
        if image_url:
            image_info["image_url"] = image_url
            image_info["file_type"] = urlparse(image_url).path.split(".")[-1]
            await asyncio.to_thread(save_image_info_to_db, image_info)
            return jsonify({"image_url": image_url, "image_type": image_type, "title": title, "prompt": prompt})
        else:
            logging.error("Failed to generate premium image.")
            return jsonify({"error": "Failed to generate premium image"}), 500

    else:
        logging.warning("Invalid image type received.")
        return jsonify({"error": "Invalid type, use 'free' or 'premium'"}), 400

# Start the app using ASGI server
if __name__ == "__main__":
    logging.info("Starting Flask app on port 8000.")
    app.run(port=8000, threaded=True)
