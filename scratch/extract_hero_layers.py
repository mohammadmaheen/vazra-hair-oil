from PIL import Image

img = Image.open(r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790247431875.jpg")

# 1. Full Hero from x:0 to 682, y:65 to 335
full_hero = img.crop((0, 65, 682, 335))
# 2x upscale with Lanczos
full_hero_2x = full_hero.resize((full_hero.width * 2, full_hero.height * 2), Image.Resampling.LANCZOS)
full_hero_2x.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-exact-full.jpg", quality=98)

# 2. Left side leaves (from x:0 to 240, y:65 to 335)
left_leaves = img.crop((0, 65, 230, 335))
left_leaves_2x = left_leaves.resize((left_leaves.width * 2, left_leaves.height * 2), Image.Resampling.LANCZOS)
left_leaves_2x.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-left-foliage.jpg", quality=98)

# 3. Right side from x:230 to 682, y:65 to 335
right_hero = img.crop((230, 65, 682, 335))
right_hero_2x = right_hero.resize((right_hero.width * 2, right_hero.height * 2), Image.Resampling.LANCZOS)
right_hero_2x.save(r"c:\Users\MD maheen\Documents\hi\public\images\hero-right-complete.jpg", quality=98)

print("Hero layers extracted!")
