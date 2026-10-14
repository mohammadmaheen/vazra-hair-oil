from PIL import Image, ImageDraw, ImageFilter

def test_clean_backdrop():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')

    # Old bottle bounds in canvas:
    # x: 1880 to 2180, y: 80 to 930
    crop_w = 300
    crop_h = 850
    zone = orig.crop((1880, 80, 2180, 930))

    # Let's inspect the backdrop by inpainting the bottle out:
    # Top part (y: 80..260): It's just the arch wall. Arch wall is smooth green/beige.
    # Mid part (y: 260..860): Left has foliage (x < 1900), Right has foliage (x > 2170).
    # Bottom part (y: 860..930): It's the stone slab. Stone slab is horizontal.

    clean_zone = zone.copy()

    # 1. Top wall inpaint (y: 0..200):
    # Sample from (10, 0, 40, 200) and (260, 0, 290, 200)
    wall_left = zone.crop((0, 0, 30, 200)).resize((160, 200), Image.Resampling.BILINEAR)
    wall_right = zone.crop((270, 0, 300, 200)).resize((160, 200), Image.Resampling.BILINEAR)
    wall_blend = Image.blend(wall_left, wall_right, 0.5).filter(ImageFilter.GaussianBlur(radius=5))
    clean_zone.paste(wall_blend, (70, 0))

    # 2. Mid backdrop inpaint (y: 200..780):
    # Left foliage is at x: 0..40, Right foliage is at x: 260..300
    mid_left = zone.crop((0, 200, 35, 780)).resize((170, 580), Image.Resampling.BILINEAR)
    mid_right = zone.crop((265, 200, 300, 780)).resize((170, 580), Image.Resampling.BILINEAR)
    mid_blend = Image.blend(mid_left, mid_right, 0.5).filter(ImageFilter.GaussianBlur(radius=10))
    clean_zone.paste(mid_blend, (65, 200))

    # 3. Stone slab inpaint (y: 780..850):
    # Stone texture runs horizontally from left to right!
    stone_left = zone.crop((0, 780, 40, 850)).resize((160, 70), Image.Resampling.BILINEAR)
    stone_right = zone.crop((260, 780, 300, 850)).resize((160, 70), Image.Resampling.BILINEAR)
    stone_blend = Image.blend(stone_left, stone_right, 0.5).filter(ImageFilter.GaussianBlur(radius=3))
    clean_zone.paste(stone_blend, (70, 780))

    # Feather the blend to remove any hard edges inside clean_zone
    clean_zone = clean_zone.filter(ImageFilter.GaussianBlur(radius=4))

    # Now mask clean_zone so only the old bottle area (relative x: 20..280, y: 15..835) is replaced
    mask = Image.new('L', (crop_w, crop_h), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rectangle([(25, 15), (275, 835)], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=12))

    orig_cleaned = orig.copy()
    orig_cleaned.paste(clean_zone, (1880, 80), mask)

    # Save cleaned backdrop without bottle
    cleaned_view = orig_cleaned.crop((1800, 60, 2260, 980))
    cleaned_view.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\cleaned_backdrop.jpg')
    print("Cleaned backdrop saved!")

if __name__ == '__main__':
    test_clean_backdrop()
