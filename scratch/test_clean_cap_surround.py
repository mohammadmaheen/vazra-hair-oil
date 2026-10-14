import os
from PIL import Image, ImageDraw, ImageFilter

def test_clean_cap_surround():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    target_w = 268
    target_h = 860
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2033 - bw // 2 # 1899
    pos_y = 920 - bh       # 60

    clean_canvas = orig.copy()

    # The background at y=80..250 is the smooth sage-green arch wall.
    # The new bottle cap spans x: 1960..2105, y: 60..200.
    # The new bottle golden oil shoulder spans x: 1910..2155, y: 200..270.
    # So the region that needs to be clean arch wall is:
    # Left: x = 1895 to 1962, y = 80 to 240
    # Right: x = 2105 to 2170, y = 80 to 240
    # Center (above cap): x = 1960 to 2105, y = 60 to 100

    # Let's paint the clean sage-green arch wall across x=1895..2170 for y=70..240:
    for y in range(70, 245):
        # Sample left wall color
        sample_l = [orig.getpixel((sx, y)) for sx in range(1875, 1892)]
        l_r = sum(p[0] for p in sample_l) // len(sample_l)
        l_g = sum(p[1] for p in sample_l) // len(sample_l)
        l_b = sum(p[2] for p in sample_l) // len(sample_l)

        # Sample right wall color
        sample_r = [orig.getpixel((sx, y)) for sx in range(2172, 2190)]
        r_r = sum(p[0] for p in sample_r) // len(sample_r)
        r_g = sum(p[1] for p in sample_r) // len(sample_r)
        r_b = sum(p[2] for p in sample_r) // len(sample_r)

        span = 2170 - 1895
        for tx in range(1895, 2170):
            t = (tx - 1895) / float(span)
            blend_r = int(l_r * (1 - t) + r_r * t)
            blend_g = int(l_g * (1 - t) + r_g * t)
            blend_b = int(l_b * (1 - t) + r_b * t)

            # Feather at left edge (1895..1902)
            cur = orig.getpixel((tx, y))
            if tx < 1902:
                w = (tx - 1895) / 7.0
                clean_canvas.putpixel((tx, y), (
                    int(cur[0] * (1 - w) + blend_r * w),
                    int(cur[1] * (1 - w) + blend_g * w),
                    int(cur[2] * (1 - w) + blend_b * w),
                    255
                ))
            # Feather at right edge (2163..2170)
            elif tx > 2163:
                w = (2170 - tx) / 7.0
                clean_canvas.putpixel((tx, y), (
                    int(cur[0] * (1 - w) + blend_r * w),
                    int(cur[1] * (1 - w) + blend_g * w),
                    int(cur[2] * (1 - w) + blend_b * w),
                    255
                ))
            else:
                clean_canvas.putpixel((tx, y), (blend_r, blend_g, blend_b, 255))

    # Apply soft blur to the painted wall area (1895..2170, 70..245)
    wall_crop = clean_canvas.crop((1895, 70, 2170, 245)).filter(ImageFilter.GaussianBlur(radius=2.0))
    clean_canvas.paste(wall_crop, (1895, 70))

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
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_clean_cap.jpg', quality=98)
    print("Clean cap zoom saved!")

if __name__ == '__main__':
    test_clean_cap_surround()
