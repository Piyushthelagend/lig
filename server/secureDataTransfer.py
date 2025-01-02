from Crypto.Cipher import AES
import base64
import json

# Key and Cipher setup
key = b"1234567890123456"  # 16-byte key
cipher = AES.new(key, AES.MODE_EAX)
nonce = cipher.nonce

# Read JSON data from the file
with open("./server/map.json", "r") as f:
    data = json.load(f)

# Serialize data to string and encode as bytes
data_bytes = json.dumps(data).encode('utf-8')

# Encrypt data and generate tag
ciphertext, tag = cipher.encrypt_and_digest(data_bytes)

# Share the ciphertext and nonce (base64 encoded)
encoded = base64.b64encode(nonce + ciphertext).decode()
print("Encoded:", encoded)
