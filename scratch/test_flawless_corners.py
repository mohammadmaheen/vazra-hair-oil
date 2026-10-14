import os
from PIL import Image, ImageDraw, ImageFilter

def test_flawless_corners():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    target_w = 268
    target_h = 860
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2033 - bw // 2 # 1899
    pos_y = 920 - bh       # 60

    clean_canvas = orig.copy()

    # The background at y=170..245 is the smooth sage-green arch wall.
    # Left corner to clean: x = 1898 to 1916, y = 175 to 245
    # We sample the clean arch wall at x = 1880..1895:
    for y in range(175, 248):
        sample_l = [orig.getpixel((sx, y)) for sx in range(1882, 1894)]
        l_r = sum(p[0] for p in sample_l) // len(sample_l)
        l_g = sum(p[1] for p in sample_l) // len(sample_l)
        l_b = sum(p[2] for p in sample_l) // len(sample_l)
        for tx in range(1896, 1918):
            cur = orig.getpixel((tx, y))
            alpha = min(1.0, (tx - 1896) / 6.0)
            r = int(cur[0] * (1 - alpha) + l_r * alpha)
            g = int(cur[1] * (1 - alpha) + l_g * alpha)
            b = int(cur[2] * (1 - alpha) + l_b * alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # Right corner to clean: x = 2150 to 2168, y = 175 to 245
    # We sample the clean arch wall at x = 2170..2185:
    for y in range(175, 248):
        sample_r = [orig.getpixel((sx, y)) for sx in range(2172, 2185)]
        r_r = sum(p[0] for p in sample_r) // len(sample_r)
        r_g = sum(p[1] for p in sample_r) // len(sample_r)
        r_b = sum(p[2] for p in sample_r) // len(sample_r)
        for tx in range(2148, 2170):
            cur = orig.getpixel((tx, y))
            alpha = min(1.0, (2170 - tx) / 6.0)
            r = int(cur[0] * (1 - alpha) + r_r * alpha)
            g = int(cur[1] * (1 - alpha) + r_g * alpha)
            b = int(cur[2] * (1 - alpha) + r_b * alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # Contact shadow on stone table
    shadow = Image.new('RGBA', (bw + 70, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 55, 36)], fill=(18, 14, 10, 220))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # Paste new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_flawless.jpg', quality=98)
    print("Flawless zoom saved!")

if __name__ == '__main__':
    test_flawless_corners()
