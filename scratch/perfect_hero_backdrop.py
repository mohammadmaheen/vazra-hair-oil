from PIL import Image, ImageFilter

source = Image.open(r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790253499303.jpg")

hero = source.crop((0, 65, 682, 335)).convert("RGBA")
W, H = hero.size

# We want:
# Right side (x >= 260): The lady, arches, bottle, flowers (100% untouched)
# Left side background (x < 260): Clean soft gradient from #eef2eb (top) to #fcfbf7 (bottom)
# Left foliage (x < 45): The real leaves from the image
# Top-left leaves (x < 110, y < 45): The real leaves branch from the image

clean = Image.new("RGBA", (W, H))

# Top color: (238, 242, 235) -> #eef2eb
# Bottom color: (252, 251, 247) -> #fcfbf7
top_c = (238, 242, 235)
bot_c = (252, 251, 247)

for y in range(H):
    t = y / (H - 1.0)
    bg_r = int(top_c[0] * (1 - t) + bot_c[0] * t)
    bg_g = int(top_c[1] * (1 - t) + bot_c[1] * t)
    bg_b = int(top_c[2] * (1 - t) + bot_c[2] * t)
    
    for x in range(W):
        if x >= 280:
            # Untouched original right composition
            clean.putpixel((x, y), hero.getpixel((x, y)))
        elif x >= 240:
            # Smooth blend between gradient and right side
            orig = hero.getpixel((x, y))
            blend = (x - 240) / 40.0
            r = int(bg_r * (1 - blend) + orig[0] * blend)
            g = int(bg_g * (1 - blend) + orig[1] * blend)
            b = int(bg_b * (1 - blend) + orig[2] * blend)
            clean.putpixel((x, y), (r, g, b, 255))
        else:
            # Check if this pixel is part of the leaves on the left
            is_leaf = False
            if x < 40:
                orig = hero.getpixel((x, y))
                # Leaves are distinctly green/darker than background
                if orig[1] < 210 or (orig[1] - orig[0] > 15):
                    is_leaf = True
            elif x < 100 and y < 40:
                orig = hero.getpixel((x, y))
                if orig[1] < 210 or (orig[1] - orig[0] > 15):
                    is_leaf = True
            
            if is_leaf:
                clean.putpixel((x, y), hero.getpixel((x, y)))
            else:
                clean.putpixel((x, y), (bg_r, bg_g, bg_b, 255))

# 2x upscale with Lanczos
clean_2x = clean.resize((W * 2, H * 2), Image.Resampling.LANCZOS)
clean_2x.convert("RGB").save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-clean-backdrop.jpg", "JPEG", quality=98)

print("Pristine smooth hero backdrop created!")
