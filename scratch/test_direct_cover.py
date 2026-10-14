import os
from PIL import Image, ImageDraw, ImageFilter

def test_direct_cover():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Old bottle bounds in canvas:
    # Left: 1900, Right: 2166. Width = 266. Center = 2033.
    # Base sits at y = 920.
    # Height of bottle: let's test 860 with width 268!
    target_w = 268
    target_h = 860
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2033 - bw // 2 # 1899
    pos_y = 920 - bh       # 60
    print(f"Direct cover: pos_x={pos_x}..{pos_x+bw}, pos_y={pos_y}..{pos_y+bh}")

    clean_canvas = orig.copy()

    # Add contact shadow underneath base
    shadow = Image.new('RGBA', (bw + 70, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 55, 36)], fill=(18, 14, 10, 220))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # Paste new bottle directly
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_direct_cover.jpg', quality=98)
    print("Direct cover zoom saved!")

if __name__ == '__main__':
    test_direct_cover()
