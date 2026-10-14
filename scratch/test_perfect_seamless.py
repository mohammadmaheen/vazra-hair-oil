import os
from PIL import Image, ImageDraw, ImageFilter

def test_perfect_seamless():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Scaled new bottle
    # Sizing:
    target_h = 824
    target_w = int(bottle.width * (target_h / bottle.height)) # 237 px
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size
    print(f"Scaled bottle: {bw}x{bh}")

    # Center bottle at x = 2030, base sits at y = 920
    pos_x = 2030 - bw // 2 # 1912
    pos_y = 920 - bh       # 96
    print(f"Bottle placed at: x={pos_x}..{pos_x+bw}, y={pos_y}..{pos_y+bh}")

    # Erase old bottle cleanly:
    # Old bottle span: x = 1895 to 2165, y = 95 to 922
    # We will extend the background horizontally:
    # From the left: sample strip x=1885..1896
    # From the right: sample strip x=2164..2175
    # Smoothly bridge across the center.
    clean_canvas = orig.copy()
    
    # We'll create an inpaint layer
    inpaint_layer = orig.crop((1880, 85, 2180, 935)).copy()
    iw, ih = inpaint_layer.size

    # Inpaint: for each row y in inpaint_layer
    # The old bottle is inside relative x: 15 to 285
    left_strip = inpaint_layer.crop((0, 0, 20, ih)).resize((150, ih), Image.Resampling.BILINEAR)
    right_strip = inpaint_layer.crop((iw - 20, 0, iw, ih)).resize((150, ih), Image.Resampling.BILINEAR)

    # Blend left and right strips across the middle
    blend = Image.new('RGBA', (iw, ih))
    blend.paste(left_strip, (0, 0))
    # Alpha gradient for right strip
    alpha_grad = Image.new('L', (150, ih))
    for gx in range(150):
        a = int(255 * (gx / 149.0))
        for gy in range(ih):
            alpha_grad.putpixel((gx, gy), a)

    blend.paste(right_strip, (iw - 150, 0), alpha_grad)
    blend = blend.filter(ImageFilter.GaussianBlur(radius=6))

    # Mask for replacing ONLY the old bottle:
    # relative x: 15 to 285, with 12px feather
    mask = Image.new('L', (iw, ih), 0)
    mdraw = ImageDraw.Draw(mask)
    # Old bottle area
    mdraw.rectangle([(18, 12), (iw - 18, ih - 15)], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=10))

    inpaint_layer.paste(blend, (0, 0), mask)

    # Paste inpaint layer onto canvas
    clean_canvas.paste(inpaint_layer, (1880, 85))

    # Contact shadow on stone table
    shadow = Image.new('RGBA', (bw + 70, 40), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 6), (bw + 55, 34)], fill=(18, 14, 10, 195))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 35, 920 - 18), shadow)

    # Paste new bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom
    zoom = clean_canvas.crop((1800, 60, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_perfect_check.jpg', quality=95)
    print("Perfect check zoom saved!")

if __name__ == '__main__':
    test_perfect_seamless()
