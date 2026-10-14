import os
from PIL import Image, ImageDraw, ImageFilter

def test_final_perfection():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Scaled bottle:
    # Width = 256 px, Height = 860 px
    # Cap reaches y ~ 60, base rests at y ~ 920
    b_scaled = bottle.resize((256, 860), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size
    print(f"Scaled bottle: {bw}x{bh}")

    # Center at x = 2034:
    pos_x = 2034 - bw // 2 # 1906
    pos_y = 920 - bh       # 60
    print(f"Bottle placed: x={pos_x}..{pos_x+bw}, y={pos_y}..{pos_y+bh}")

    clean_canvas = orig.copy()

    # Now let's cleanly erase the old glass edges from the canvas:
    # Left old glass: x = 1898 to 1908
    # Right old glass: x = 2154 to 2170
    # Top old cap: x = 1970 to 2095, y = 90 to 210

    # 1. Clean the left edge (x: 1896..1910, y: 150..915):
    # We sample the lush green foliage from x: 1880..1896 and extend it into x: 1896..1915
    for y in range(150, 915):
        # Sample average color of foliage at x = 1888..1895
        sample_pixels = [orig.getpixel((sx, y)) for sx in range(1886, 1896)]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(1896, 1912):
            # Soft blend
            weight = (tx - 1896) / 16.0
            cur = orig.getpixel((tx, y))
            r = int(cur[0] * (1 - weight*0.8) + avg_r * weight*0.8)
            g = int(cur[1] * (1 - weight*0.8) + avg_g * weight*0.8)
            b = int(cur[2] * (1 - weight*0.8) + avg_b * weight*0.8)
            clean_canvas.putpixel((tx, y), (avg_r, avg_g, avg_b, 255))

    # 2. Clean the right edge (x: 2152..2172, y: 150..915):
    # Sample foliage & purple flower from x: 2172..2185 and extend into x: 2150..2172
    for y in range(150, 915):
        sample_pixels = [orig.getpixel((sx, y)) for sx in range(2172, 2182)]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(2150, 2172):
            clean_canvas.putpixel((tx, y), (avg_r, avg_g, avg_b, 255))

    # 3. Clean the top old cap (x: 1965..2100, y: 60..210):
    # Sample the smooth arch wall above and to sides
    for y in range(60, 210):
        sample_pixels = [orig.getpixel((sx, y)) for sx in [1950, 1955, 2110, 2115]]
        avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
        avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
        avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
        for tx in range(1960, 2105):
            clean_canvas.putpixel((tx, y), (avg_r, avg_g, avg_b, 255))

    # Apply light blur only to the inpainted region
    inpaint_crop = clean_canvas.crop((1890, 50, 2180, 920)).filter(ImageFilter.GaussianBlur(radius=3))
    clean_canvas.paste(inpaint_crop, (1890, 50))

    # Add realistic contact shadow underneath the new bottle base on stone
    shadow = Image.new('RGBA', (bw + 70, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 55, 36)], fill=(18, 14, 10, 215))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # Paste new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom check
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_final_perfection.jpg', quality=98)
    print("Final perfection zoom saved!")

if __name__ == '__main__':
    test_final_perfection()
