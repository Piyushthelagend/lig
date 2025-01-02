import random
import string
import threading
import json
# Characters to be included in the encoder_map
ALL_CHARACTERS = (
    string.ascii_uppercase  # Uppercase letters
    + string.ascii_lowercase  # Lowercase letters
    + string.digits  # Digits
    + "!@#$%^&*()-_=+[]{};:,.<>?/\\|`~ "  # Symbols and whitespace
    + "₹"  # Additional custom character
)

# Function to generate a random mapping for each character
def generate_random_mapping():
    return "".join(random.choices(
        string.ascii_letters + string.digits + "!@#$%^&*()-_=+[]{};:,.<>?/\\|`~",
        k=random.randint(2, 6)  # Random length between 2 and 6
    ))

# Function to generate a new encoder map
def generate_new_encoder_map():
    return {char: generate_random_mapping() for char in ALL_CHARACTERS}

# Global encoder_map
encoder_map = generate_new_encoder_map()

# Function to update the encoder_map every 4 hours


# Function to update the encoder_map every 4 hours
def update_encoder_map():
    global encoder_map
    encoder_map = generate_new_encoder_map()
    print("Encoder map updated!")
    for key, value in list(encoder_map.items())[:5]:  # Display the first 5 mappings
        print(f"{key}: {value}")
    print("...")  # Indicate more mappings exist

    # Write the map to a file in JSON format
    with open("map.json", "w", encoding="utf-8") as f:
        json.dump(encoder_map, f, ensure_ascii=False, indent=4)

    # Schedule the next update in 4 hours
    threading.Timer(4 * 60 * 60, update_encoder_map).start()


# Start the first update cycle
update_encoder_map()

# Example usage: Encoding and Decoding
def encode(text):
    """Encodes the given text using the current encoder_map."""
    return "₹".join(encoder_map.get(char, char) for char in text)

def decode(encoded_text):
    """Decodes the given encoded text using the reverse of the current encoder_map."""
    reverse_encoder_map = {v: k for k, v in encoder_map.items()}
    return "".join(reverse_encoder_map.get(chunk, chunk) for chunk in encoded_text.split("₹"))

if __name__ == "__main__":
    import time
    text = "Hello, World! ₹500 😎"
    print("Original text:", text)

    # Encode the text
    encoded_text = encode(text)
    print("Encoded text:", encoded_text)

    # Decode the text
    decoded_text = decode(encoded_text)
    print("Decoded text:", decoded_text)

    # Confirm successful encoding/decoding
    print("Match:", decoded_text == text)

    # Keep the program running
    try:
        while True:
            time.sleep(5)
    except KeyboardInterrupt:
        print("Exiting program.")
        exit()
