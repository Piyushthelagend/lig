import threading
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64

# 16-byte key (must match in JavaScript)
key = b"1234567890123456"

def encode(data: str) -> str:
    """
    Encrypts the input data using AES-CBC mode and returns the base64-encoded ciphertext.
    """
    cipher = AES.new(key, AES.MODE_CBC)  # Create AES cipher in CBC mode
    iv = cipher.iv  # Initialization vector (16 bytes)
    ciphertext = cipher.encrypt(pad(data.encode('utf-8'), AES.block_size))  # Encrypt padded data
    
    # Combine IV and ciphertext, then encode in base64
    encoded = base64.b64encode(iv + ciphertext).decode()
    print("Encoded:", encoded)
    return encoded

# Example usage
plaintext = "Hello, world!"
encrypted = encode(plaintext)


# Encoder and decoder maps
encoder_map = {
    "A": "@", "B": "8", "C": "(", "D": ")", "E": "3", "F": "#", "G": "965y", "H": "*",
    "I": "!", "J": ";", "K": ">", "L": "1", "M": "0", "N": "^", "O": "%", "P": "?",
    "Q": "Q56gt", "R": "2", "S": "$", "T": "7", "U": "urt65", "V": "n84", "W": "&", "X": "xrd56",
    "Y": "ygtr5", "Z": "z5gt5", "a": "45", "b": "6h", "c": "c6", "d": "$y", "e": "muy", "f6": "fu",
    "g": "g4", "h": "hg6", "i": "1y", "j": "j7", "k": "kh", "l": "!6", "m": "Mj", "n": "n6",
    "o": "0h", "p": "p5", "q": "qh", "r": "#t", "s": "56", "t": "7h", "u": "uh", "v": "76*(&)",
    "w": "yw", "x": "xn", "y": "y76", "z": "zfh", "0": ")5", "1": "!8", "2": "Z9", "3": "E-",
    "4": "A6", "5": "S3", "6": "64", "7": "T5", "8": "B5", "9": "g7", "!": "5i", "@": "ah",
    "#": "rfh", "$": "dt6", "%": "o6hg", "^": "n6u", "&": "w667", "*": "h6yh", "(": "Chhhh",
    ")": "D6u", "-": "_yt", "_": "-r", "=": "+6", "+": "=g", "[": "{7", "]": "}hg", "{": "[y5",
    "}": "]u", ";": "6:", ":": ";u", "'": "\"", "\"": "'", "<": ",u", ">": ".tu", ",": "<",
    ".": ">", "?": "/", "/": "?678", "~": "`", "`": "~", "|": "\\", "\\": "|", " ": "04", "₹": "76k76"
}

reverse_encoder_map = {v: k for k, v in encoder_map.items()}

# Function to update encoder_map from the file
def update_map():
    global encoder_map
    with open("./server/map.json", "r") as f:
        encoder_map = json.load(f)
    print("Map updated!")

# Schedule map updates every 4 hours
# threadin g.Timer(4 * 60 * 60, update_map).start()

# Mirror chunks of the string
def mirror_chunks(data: str, separator: str = "₹") -> str:
    """
    Reverse the chunks of the input string separated by the specified separator.
    """
    chunks = data.split(separator)
    return separator.join(reversed(chunks))

# Encoding function
def _encode(data: str) -> str:
    """
    Encode the input string using the encoder_map.
    """
    return "₹".join(encoder_map.get(char, char) for char in data)

# Decoding function
def decode(data: str) -> str:
    """
    Decode the input string using the reverse_encoder_map.
    """
    return "".join(reverse_encoder_map.get(chunk, chunk) for chunk in data.split("₹"))

# Test the encoding-decoding process
def test_encoding(text: str):
    """
    Test the full encoding, mirroring, and decoding process.
    """
    print("Original:", text)

    # Encode the text
    encoded_text = _encode(text)
    print("Encoded:", encoded_text)

    # Mirror the encoded text
    mirrored_encoded_text = mirror_chunks(encoded_text)
    print("Mirrored Encoded:", mirrored_encoded_text)

    # Decode to restore original
    restored_text = decode(mirror_chunks(mirrored_encoded_text))
    print("Restored:", restored_text)

    # Verify the result
    if restored_text == text:
        print("Test Passed! The process is lossless.")
    else:
        print("Test Failed! The process is lossy.")

# Run a test
text = "You need ₹500 rupees to buy this thing!"
test_encoding(text)
