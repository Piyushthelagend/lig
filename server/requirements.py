import os
import logging
import requests
from io import BytesIO
from ftplib import FTP
from urllib.parse import urlparse
from pymongo import MongoClient
from PIL import Image

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("server.log"),  # Logs to a file
        logging.StreamHandler()  # Logs to the console
    ]
)

# Suppress specific debug logs from pymongo
logging.getLogger("pymongo").setLevel(logging.WARNING)  # Adjust as needed (INFO, WARNING, ERROR)

# Additional suppression for aiohttp or other noisy modules
logging.getLogger("aiohttp").setLevel(logging.WARNING)

# Advanced debugger example:
logging.debug("Debugger initialized. Starting the script.")

def change_image_format(input_path: str, format: str = "PNG") -> str:
    """Convert the format of an image file and save it.

    Args:
        input_path (str): Path to the input image file.
        format (str): Desired format (default is PNG).

    Returns:
        str: Path to the converted image.
    """
    current_format = input_path.split(".")[-1]
    output_path = input_path.replace(f".{current_format}", f".{format.lower()}")
    try:
        with Image.open(input_path) as img:
            img.save(output_path, format.upper())
            os.remove(input_path)
        logging.info(f"Image successfully converted to {output_path}")
        return output_path
    except Exception as e:
        logging.error(f"Image conversion error: {e}")
        return None

def validate_ftp_credentials(ftp_host=None, ftp_user=None, ftp_pass=None,):
    # Check and retrieve missing values from environment variables
    match (ftp_host, ftp_user, ftp_pass):
        case (None, None, None):
            ftp_host = os.getenv("FTP_SERVER")
            ftp_user = os.getenv("FTP_USERNAME")
            ftp_pass = os.getenv("FTP_PASSWORD")
        case (None, _, _):
            ftp_host = os.getenv("FTP_SERVER")
        case (_, None, _):
            ftp_user = os.getenv("FTP_USERNAME")
        case (_, _, None):
            ftp_pass = os.getenv("FTP_PASSWORD")
    
    # If any are still missing, raise an error
    if not ftp_host or not ftp_user or not ftp_pass:
        raise ValueError("FTP credentials are incomplete. Please provide all required fields.")
    
    return ftp_host, ftp_user, ftp_pass


def ftp_upload(image_location: str, remote_path: str,ftp_host="ftpupload.net", ftp_user="ezyro_37388136", ftp_pass="Piyush@123k",  offline=True) -> str:
    """Upload an image to an FTP server.

    Args:
        image_location (str): Local file path or image URL.
        remote_path (str): Path on the FTP server.
        ftp_host (str): FTP server host.
        ftp_user (str): FTP username.
        ftp_pass (str): FTP password.
        offline (bool): True if the image is a local file, False for a URL.

    Returns:
        str: URL of the uploaded image.
    """

  
    validate_ftp_credentials(ftp_host,ftp_user,ftp_pass)


    if remote_path.startswith("./"):
        remote_path = remote_path[2:]

    try:
        ftp = FTP(ftp_host)
        ftp.login(ftp_user, ftp_pass)
        logging.info("Connected to FTP server.")

        def create_directories(path):
            parts = path.split('/')
            for part in parts:
                if part:
                    try:
                        ftp.cwd(part)
                    except Exception:
                        logging.debug(f"Creating directory: {part}")
                        ftp.mkd(part)
                        ftp.cwd(part)


        if offline and os.path.isfile(image_location):
            extDir = image_location.replace("\\","/").split("/")[-2]
            real_path = f"{remote_path}{extDir}"
            remote_path = os.path.join("./htdocs", remote_path, extDir).replace("\\", "/")
            logging.debug(f"Resolved remote path: {remote_path}")

            file_name = os.path.basename(image_location)
            create_directories(remote_path)
            with open(image_location, 'rb') as image_data:
                ftp.storbinary(f'STOR {file_name}', image_data)
            show = f"http://levizrapis.unaux.com/{real_path}/{file_name}"
            logging.info(f"File uploaded successfully to '{show}'")
            return show
        elif not offline:
            extDir = os.path.basename(image_location).replace(".jpg", "")
            real_path = f"{remote_path}{extDir}"
            remote_path = os.path.join("./htdocs", remote_path, extDir).replace("\\", "/")
            logging.debug(f"Resolved remote path: {remote_path}")

            response = requests.get(image_location)
            response.raise_for_status()
            image_data = BytesIO(response.content)
            file_name = os.path.basename(urlparse(image_location).path)
            create_directories(remote_path)
            ftp.storbinary(f'STOR {file_name}', image_data)
            show = f"http://levizrapis.unaux.com/{real_path}/{file_name}"
            logging.info(f"URL image uploaded successfully to '{show}'")
            return show
        else:
            logging.error("Invalid image path or URL.")
            return None
    except requests.exceptions.RequestException as e:
        logging.error(f"Request error during FTP upload: {e}")
        return None
    except Exception as e:
        logging.error(f"FTP upload error: {e}")
        return None
    finally:
        ftp.quit()
        logging.debug("FTP connection closed.")

def initialize_mongo_client():
    """Initialize MongoDB client."""
    try:
        client = MongoClient("mongodb://localhost:27017/")
        logging.info("Connected to MongoDB.")
        return client
    except Exception as e:
        logging.critical(f"MongoDB connection error: {e}")
        return None

# Initialize MongoDB
mongo_client = initialize_mongo_client()
if mongo_client:
    db = mongo_client['lig_db']
    collection = db['gen_images']
    logging.debug("MongoDB database and collection initialized.")
else:
    logging.warning("MongoDB client could not be initialized.")
