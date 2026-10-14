import os
from PIL import Image, ImageDraw, ImageFilter

def test_clean_shoulder():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    b_scaled = bottle.resize((256, 860), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2034 - bw // 2 # 1906
    pos_y = 920 - bh       # 60

    clean_canvas = orig.copy()

    # 1. Clean the left edge (x: 1894..1912, y: 220..915):
    for y in range(220, 915):
        sample_pixels = [orig.getpixel((sx, y)) for sx in range(1884, 1894)]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(1894, 1912):
            alpha = min(1.0, (tx - 1894) / 8.0)
            cur = orig.getpixel((tx, y))
            r = int(cur[0] * (1 - alpha) + avg_r * alpha)
            g = int(cur[1] * (1 - alpha) + avg_g * alpha)
            b = int(cur[2] * (1 - alpha) + avg_b * alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # 2. Clean the right edge (x: 2150..2174, y: 220..915):
    for y in range(220, 915):
        sample_pixels = [orig.getpixel((sx, y)) for sx in range(2174, 2184)]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(2150, 2174):
            cur = orig.getpixel((tx, y))
            alpha = min(1.0, (2174 - tx) / 8.0)
            r = int(cur[0] * (1 - alpha) + avg_r * alpha)
            g = int(cur[1] * (1 - alpha) + avg_g * alpha)
            b = int(cur[2] * (1 - alpha) + avg_b * alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # 3. Clean the ENTIRE top region and old shoulder (x: 1910..2160, y: 45..260):
    # This covers the old pump cap, neck, and square glass shoulders!
    # Background here is the sage-green smooth wall of the arch.
    # We sample the wall from x=1880..1905 on left and x=2165..2190 on right:
    for y in range(45, 260):
        # Sample left wall color (outside old bottle)
        left_p = [orig.getpixel((sx, y)) for sx in range(1885, 1900)]
        l_r = sum(p[0] for p in left_p) // len(left_p)
        l_g = sum(p[1] for p in left_p) // len(left_p)
        l_b = sum(p[2] for p in left_p) // len(left_p)

        # Sample right wall color
        right_p = [orig.getpixel((sx, y)) for sx in range(2165, 2180)]
        r_r = sum(p[0] for p in right_p) // len(right_p)
        r_g = sum(p[1] for p in right_p) // len(right_p)
        r_b = sum(p[2] for p in right_p) // len(right_p)

        span = 2160 - 1905
        for tx in range(1905, 2160):
            t = (tx - 1905) / float(span)
            blend_r = int(l_r * (1 - t) + r_r * t)
            blend_g = int(l_g * (1 - t) + r_g * t)
            blend_b = int(l_b * (1 - t) + r_b * t)

            # Feather transition at left boundary (1905..1912) and right (2152..2160)
            cur = orig.getpixel((tx, y))
            if tx < 1912:
                w = (tx - 1905) / 7.0
                f_r = int(cur[0] * (1 - w) + blend_r * w)
                f_g = int(cur[1] * (1 - w) + blend_g * w)
                f_b = int(cur[2] * (1 - w) + blend_b * w)
                clean_canvas.putpixel((tx, y), (f_r, f_g, f_b, 255))
            elif tx > 2152:
                w = (2160 - tx) / 8.0
                f_r = int(cur[0] * (1 - w) + blend_r * w)
                f_g = int(cur[1] * (1 - w) + blend_g * w)
                f_b = int(cur[2] * (1 - w) + blend_b * w)
                clean_canvas.putpixel((tx, y), (f_r, f_g, f_b, 255))
            else:
                clean_canvas.putpixel((tx, y), (blend_r, blend_g, blend_b, 255))

    # Apply soft blur to top inpaint band (1900..2165, 45..260) with radius 2.0
    top_band = clean_canvas.crop((1900, 45, 2165, 260)).filter(ImageFilter.GaussianBlur(radius=2.0))
    clean_canvas.paste(top_band, (1900, 45))

    # Contact shadow on stone
    shadow = Image.new('RGBA', (bw + 70, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 55, 36)], fill=(18, 14, 10, 215))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # Paste new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_clean_shoulder.jpg', quality=98)
    print("Clean shoulder zoom saved!")

if __name__ == '__main__':
    test_clean_shoulder()
