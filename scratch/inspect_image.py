from PIL import Image
import os

source_path = r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790072842457.jpg"
out_dir = r"c:\Users\MD maheen\Documents\hi\public\images"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(source_path)
w, h = img.size
print(f"Source image dimensions: {w}x{h}")
