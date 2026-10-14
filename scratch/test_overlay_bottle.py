import os
from PIL import Image, ImageDraw, ImageFilter

def test_overlay():
    desk = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    cutout = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\test_bottle_cutout.png').convert('RGBA')

    # Old bottle in desk was:
    # Top of cap: y ~ 165
    # Bottom of base: y ~ 920
    # Center X: ~ 2030
    # Total old bottle height: 920 - 165 = 755 px
    # Old bottle width: 1910 to 2150 = 240 px

    # Let's see cutout size: (233, 819)
    # If we scale cutout to height 755:
    target_h = 755
    target_w = int(cutout.width * (target_h / cutout.height))
    print(f"Scaled bottle size: {target_w}x{target_h}")

    resized_bottle = cutout.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Let's test placing at center_x = 2030, y = 165
    pos_x = 2030 - target_w // 2
    pos_y = 165

    print(f"Placing bottle at x={pos_x}, y={pos_y}")

    # Crop the desk area before overlay
    crop_before = desk.crop((1850, 120, 2220, 960))
    crop_before.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\before_overlay.jpg')

    # Overlay onto a copy of desk
    desk_copy = desk.copy()
    desk_copy.paste(resized_bottle, (pos_x, pos_y), resized_bottle)

    crop_after = desk_copy.crop((1850, 120, 2220, 960))
    crop_after.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\after_overlay.jpg')

    print("Saved before_overlay.jpg and after_overlay.jpg")

if __name__ == '__main__':
    test_overlay()
