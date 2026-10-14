import os
from PIL import Image, ImageDraw, ImageFilter

def test_feathered_inpaint():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    b_scaled = bottle.resize((256, 860), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2034 - bw // 2 # 1906
    pos_y = 920 - bh       # 60

    clean_canvas = orig.copy()

    # Inpainting without any hard boundaries:
    # 1. Clean the left edge (x: 1894..1912, y: 150..915):
    for y in range(150, 915):
        sample_pixels = [orig.getpixel((sx, y)) for sx in range(1884, 1894)]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(1894, 1912):
            # Smooth ease-in gradient from x=1894 to 1902
            cur = orig.getpixel((tx, y))
            alpha = min(1.0, (tx - 1894) / 8.0)
            r = int(cur[0] * (1 - alpha) + avg_r * alpha)
            g = int(cur[1] * (1 - alpha) + avg_g * alpha)
            b = int(cur[2] * (1 - alpha) + avg_b * alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # 2. Clean the right edge (x: 2150..2174, y: 150..915):
    for y in range(150, 915):
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

    # 3. Clean top old cap (x: 1960..2105, y: 55..215):
    for y in range(55, 215):
        p_left = orig.getpixel((1948, y))
        p_right = orig.getpixel((2118, y))
        for tx in range(1960, 2105):
            t_alpha = (tx - 1960) / 145.0
            r = int(p_left[0] * (1 - t_alpha) + p_right[0] * t_alpha)
            g = int(p_left[1] * (1 - t_alpha) + p_right[1] * t_alpha)
            b = int(p_left[2] * (1 - t_alpha) + p_right[2] * t_alpha)
            clean_canvas.putpixel((tx, y), (r, g, b, 255))

    # Now smooth ONLY the inpaint bands with a small 1.5 radius blur:
    # Band 1: left edge (1892..1912, 140..915)
    b1 = clean_canvas.crop((1890, 140, 1915, 915)).filter(ImageFilter.GaussianBlur(radius=1.5))
    clean_canvas.paste(b1, (1890, 140))

    # Band 2: right edge (2148..2175, 140..915)
    b2 = clean_canvas.crop((2148, 140, 2175, 915)).filter(ImageFilter.GaussianBlur(radius=1.5))
    clean_canvas.paste(b2, (2148, 140))

    # Band 3: top cap (1955..2110, 50..215)
    b3 = clean_canvas.crop((1955, 50, 2110, 215)).filter(ImageFilter.GaussianBlur(radius=1.5))
    clean_canvas.paste(b3, (1955, 50))

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
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_feathered_check.jpg', quality=98)
    print("Feathered check zoom saved!")

if __name__ == '__main__':
    test_feathered_inpaint()
