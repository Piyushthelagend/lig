import base64
import pyperclip
# Specify the path to your GIF file
gif_path = "c:/Users/LENOVO/Pictures/Camera Roll/ai-loader-opt.gif"

# Read and encode the file in Base64
with open(gif_path, "rb") as gif_file:
    base64_string = base64.b64encode(gif_file.read()).decode("utf-8")

# Print the data URI
bash64_string = f"data:image/gif;base64,{base64_string}"
pyperclip.copy(bash64_string)