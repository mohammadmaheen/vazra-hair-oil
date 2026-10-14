import os
from PIL import Image, ImageDraw, ImageFilter

def apply_final_hero_bottle():
    print("Loading master desktop canvas and bottle cutout...")
    desk_path = 'public/images/hero-unified-canvas-hd.jpg'
    mob_path = 'public/images/hero-mobile-hd.jpg'
    cutout_path = r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png'

    desk = Image.open(desk_path).convert('RGBA')
    bottle = Image.open(cutout_path).convert('RGBA')

    # Scaled new bottle:
    # Width = 268 px, Height = 860 px
    # Cap reaches y = 60, Base rests at y = 920 on the stone table
    target_w = 268
    target_h = 860
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size

    pos_x = 2033 - bw // 2 # 1899
    pos_y = 920 - bh       # 60
    print(f"Compositing bottle: {bw}x{bh} at x={pos_x}, y={pos_y}")

    clean_canvas = desk.copy()

    # 1. Seamlessly clean the arch wall background around the cap and shoulder:
    # y = 70 to 245 across x = 1895 to 2170
    for y in range(70, 245):
        sample_l = [desk.getpixel((sx, y)) for sx in range(1875, 1892)]
        l_r = sum(p[0] for p in sample_l) // len(sample_l)
        l_g = sum(p[1] for p in sample_l) // len(sample_l)
        l_b = sum(p[2] for p in sample_l) // len(sample_l)

        sample_r = [desk.getpixel((sx, y)) for sx in range(2172, 2190)]
        r_r = sum(p[0] for p in sample_r) // len(sample_r)
        r_g = sum(p[1] for p in sample_r) // len(sample_r)
        r_b = sum(p[2] for p in sample_r) // len(sample_r)

        span = 2170 - 1895
        for tx in range(1895, 2170):
            t = (tx - 1895) / float(span)
            blend_r = int(l_r * (1 - t) + r_r * t)
            blend_g = int(l_g * (1 - t) + r_g * t)
            blend_b = int(l_b * (1 - t) + r_b * t)

            cur = desk.getpixel((tx, y))
            if tx < 1902:
                w = (tx - 1895) / 7.0
                clean_canvas.putpixel((tx, y), (
                    int(cur[0] * (1 - w) + blend_r * w),
                    int(cur[1] * (1 - w) + blend_g * w),
                    int(cur[2] * (1 - w) + blend_b * w),
                    255
                ))
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

    # Soft blur on painted wall area
    wall_crop = clean_canvas.crop((1895, 70, 2170, 245)).filter(ImageFilter.GaussianBlur(radius=2.0))
    clean_canvas.paste(wall_crop, (1895, 70))

    # 2. Add realistic contact shadow underneath the bottle base on the stone table:
    shadow = Image.new('RGBA', (bw + 70, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 55, 36)], fill=(18, 14, 10, 220))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # 3. Paste the new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # 4. Save updated master desktop canvas
    clean_canvas.convert('RGB').save(desk_path, quality=98)
    print(f"Successfully updated master desktop canvas: {desk_path}")

    # 5. Crop and update synchronized mobile canvas (top 964px)
    mob_canvas = clean_canvas.crop((0, 0, desk.width, 964))
    mob_canvas.convert('RGB').save(mob_path, quality=98)
    print(f"Successfully updated synchronized mobile canvas: {mob_path}")

    # Also save verification zoom
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\final_applied_zoom.jpg', quality=98)
    print("Final applied zoom saved for verification!")

if __name__ == '__main__':
    apply_final_hero_bottle()
