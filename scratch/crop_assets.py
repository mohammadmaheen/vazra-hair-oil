from PIL import Image
import os

source_path = r"C:/Users/MD maheen/.gemini/antigravity/brain/ae0e4e02-1cb4-4bd7-9d96-7d676112862c/.user_uploaded/media_1790072842457.jpg"
out_dir = r"c:\Users\MD maheen\Documents\hi\public\images"
os.makedirs(out_dir, exist_ok=True)

img = Image.open(source_path)
W, H = img.size

# 1. Hero Lady & Bottle Right Graphic
# The lady and bottle occupy roughly x: 250 to 682, y: 65 to 330
hero_lady = img.crop((250, 65, 680, 330))
hero_lady.save(os.path.join(out_dir, "hero-lady-showcase.jpg"), quality=95)

# Full Hero section for background reference if needed
full_hero = img.crop((0, 65, 682, 335))
full_hero.save(os.path.join(out_dir, "hero-banner-full.jpg"), quality=95)

# 2. Extract 6 Ingredients
# Finding exact row: y is between 370 and 445
# We can crop the whole ingredient row or each circular plate
ingredients_strip = img.crop((40, 370, 640, 440))
ingredients_strip.save(os.path.join(out_dir, "ingredients-strip.jpg"), quality=95)

# Crop individual ingredients:
# Total width 600 across 6 items => ~100px each
coords = [
    ("amla", 85, 375, 148, 435),
    ("bhringraj", 175, 375, 238, 435),
    ("hibiscus", 265, 375, 328, 435),
    ("coconut", 355, 375, 418, 435),
    ("methi", 442, 375, 505, 435),
    ("curry-leaves", 530, 375, 595, 435),
]
for name, x1, y1, x2, y2 in coords:
    crop_item = img.crop((x1, y1, x2, y2))
    crop_item.save(os.path.join(out_dir, f"ingredient-{name}.jpg"), quality=95)

# 3. Extract Products & Tradition Card
# Products row is from y: 515 to 680
products_row = img.crop((20, 515, 665, 685))
products_row.save(os.path.join(out_dir, "products-row.jpg"), quality=95)

# Crop 4 individual bottles:
prod_coords = [
    ("original", 20, 520, 150, 680),
    ("antihairfall", 150, 520, 280, 680),
    ("scalpcare", 280, 520, 410, 680),
    ("onion", 410, 520, 540, 680),
    ("tradition-card", 545, 520, 665, 680),
]
for name, x1, y1, x2, y2 in prod_coords:
    crop_p = img.crop((x1, y1, x2, y2))
    crop_p.save(os.path.join(out_dir, f"product-{name}.jpg"), quality=95)

# 4. Review Avatars
# Review avatars are in row y: 770 to 825
rev_coords = [
    ("sana", 50, 770, 95, 815),
    ("rohit", 250, 770, 295, 815),
    ("priya", 440, 770, 485, 815),
]
for name, x1, y1, x2, y2 in rev_coords:
    crop_r = img.crop((x1, y1, x2, y2))
    crop_r.save(os.path.join(out_dir, f"avatar-{name}.jpg"), quality=95)

# 5. Join Family Banner & Callout Script
join_banner = img.crop((0, 830, 682, 880))
join_banner.save(os.path.join(out_dir, "join-family-banner.jpg"), quality=95)

# 6. Footer Leaves Graphic
footer_leaves = img.crop((510, 890, 650, 960))
footer_leaves.save(os.path.join(out_dir, "footer-leaves.jpg"), quality=95)

print("All assets successfully cropped and extracted from the reference image!")
