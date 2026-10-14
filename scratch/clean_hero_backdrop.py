from PIL import Image, ImageFilter

source = Image.open(r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790253499303.jpg")

# Hero bounding box in source image
# y from 65 to 335, x from 0 to 682
hero = source.crop((0, 65, 682, 335)).convert("RGBA")
W, H = hero.size

# In the hero:
# The leaves are on the left: x from 0 to 45 (and top-left branch x:0 to 120, y:0 to 40)
# The text is roughly in x: 45 to 270, y: 15 to 260
# The arch & lady start at x: 270 to 682
# Let's inspect the background color around x=280:
# It's a soft vertical gradient from light sage (#f4f7f2) at top to cream (#fafbf7) at bottom

# Let's create a clean background by interpolating the background color
clean_hero = hero.copy()

# Sample the background column at x=280 for each y
bg_column = [hero.getpixel((280, y)) for y in range(H)]

# Replace the text area (x: 45 to 270, y: 15 to H) with the clean background
# But preserve the top-left leaves branch (y < 45 and x < 100) and left leaves (x < 35)
for y in range(H):
    bg_color = hero.getpixel((280, min(y, H - 1)))
    for x in range(35, 275):
        # Don't overwrite the top-left leaves
        if y < 35 and x < 90:
            continue
        # Soft blend at the edges
        if x < 55:
            # blend from original to bg_color
            t = (x - 35) / 20.0
            orig = hero.getpixel((x, y))
            r = int(orig[0] * (1 - t) + bg_color[0] * t)
            g = int(orig[1] * (1 - t) + bg_color[1] * t)
            b = int(orig[2] * (1 - t) + bg_color[2] * t)
            clean_hero.putpixel((x, y), (r, g, b, 255))
        elif x > 260:
            # blend from bg_color to original
            t = (x - 260) / 15.0
            orig = hero.getpixel((x, y))
            r = int(bg_color[0] * (1 - t) + orig[0] * t)
            g = int(bg_color[1] * (1 - t) + orig[1] * t)
            b = int(bg_color[2] * (1 - t) + orig[2] * t)
            clean_hero.putpixel((x, y), (r, g, b, 255))
        else:
            clean_hero.putpixel((x, y), bg_color)

# Upscale 2x with Lanczos for ultra crisp rendering
clean_hero_2x = clean_hero.resize((W * 2, H * 2), Image.Resampling.LANCZOS)
clean_hero_2x.convert("RGB").save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-clean-backdrop.jpg", "JPEG", quality=98)

print("Clean text-free hero backdrop successfully generated!")
