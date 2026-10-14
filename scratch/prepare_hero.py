from PIL import Image

img = Image.open(r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790247431875.jpg")
W, H = img.size

# Let's crop the hero section right side from x: 230 to 682, y: 68 to 335
hero_right = img.crop((230, 68, 682, 335))
# Resize by 2x with high quality Lanczos for ultra crisp display on modern retina/HD screens
hero_right_hd = hero_right.resize((hero_right.width * 2, hero_right.height * 2), Image.Resampling.LANCZOS)
hero_right_hd.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-lady-clean.jpg", quality=98)

# Also let's inspect the entire hero banner (from 0 to 682, 68 to 335)
hero_full = img.crop((0, 68, 682, 335))
hero_full_hd = hero_full.resize((hero_full.width * 2, hero_full.height * 2), Image.Resampling.LANCZOS)
hero_full_hd.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-full-bg.jpg", quality=98)

print("Hero images extracted and upscaled successfully!")
