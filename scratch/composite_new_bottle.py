import os
from PIL import Image, ImageDraw, ImageFilter

def composite_new_bottle():
    desk = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Old bottle region in desk:
    # x: 1900 to 2160, y: 150 to 930
    # Center X: 2030, Base Y: 920

    # Let's clean the old bottle:
    old_patch = desk.crop((1890, 140, 2170, 935))
    clean_patch = old_patch.filter(ImageFilter.GaussianBlur(radius=25))

    # Paste clean patch over old bottle
    desk.paste(clean_patch, (1890, 140))

    # Sizing:
    target_h = 790
    target_w = int(bottle.width * (target_h / bottle.height))
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size
    print(f"Scaled bottle size: {bw}x{bh}")

    # Position:
    pos_x = 2030 - bw // 2
    pos_y = 920 - bh
    print(f"Placing bottle at pos_x={pos_x}, pos_y={pos_y}")

    # Add realistic contact shadow underneath the base on the stone slab
    shadow = Image.new('RGBA', (bw + 60, 40), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 45, 30)], fill=(25, 20, 15, 160))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=6))
    desk.paste(shadow, (pos_x - 30, 920 - 18), shadow)

    # Paste new bottle
    desk.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom crop for inspection
    zoom = desk.crop((1800, 80, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_new_bottle_desk.jpg', quality=95)

    # Save full desktop canvas test
    desk.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\test_canvas_with_new_bottle.jpg', quality=95)
    print("Desktop composite test complete!")

if __name__ == '__main__':
    composite_new_bottle()
