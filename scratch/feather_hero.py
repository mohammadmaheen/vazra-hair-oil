from PIL import Image

source = Image.open(r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790247431875.jpg")

# 1. Left Vine/Leaves: x from 0 to 140, y from 65 to 335
left_crop = source.crop((0, 65, 140, 335)).convert("RGBA")
w_l, h_l = left_crop.size

# Soft horizontal gradient fade on the right side of the left foliage (fade from x=80 to x=140)
for x in range(w_l):
    for y in range(h_l):
        r, g, b, a = left_crop.getpixel((x, y))
        # If past x=70, gradually fade to 0
        if x > 70:
            fade = max(0.0, min(1.0, (w_l - x) / (w_l - 70)))
            new_a = int(a * fade)
            left_crop.putpixel((x, y), (r, g, b, new_a))

# Upscale 2x
left_crop_2x = left_crop.resize((w_l * 2, h_l * 2), Image.Resampling.LANCZOS)
left_crop_2x.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-left-leaves-feathered.png", "PNG")

# 2. Right Lady & Bottle: x from 220 to 682, y from 65 to 335
right_crop = source.crop((220, 65, 682, 335)).convert("RGBA")
w_r, h_r = right_crop.size

# Soft horizontal gradient fade on the left edge (fade from x=0 to x=60)
for x in range(w_r):
    for y in range(h_r):
        r, g, b, a = right_crop.getpixel((x, y))
        if x < 60:
            fade = max(0.0, min(1.0, x / 60.0))
            new_a = int(a * fade)
            right_crop.putpixel((x, y), (r, g, b, new_a))

right_crop_2x = right_crop.resize((w_r * 2, h_r * 2), Image.Resampling.LANCZOS)
right_crop_2x.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-right-feathered.png", "PNG")

print("Soft-feathered hero foliage and right composition created successfully!")
