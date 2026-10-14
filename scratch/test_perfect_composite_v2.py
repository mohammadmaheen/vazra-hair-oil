import os
from PIL import Image, ImageDraw, ImageFilter

def create_masterpiece_composite():
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Target size of the new bottle:
    # Width = 245 px, Height = 852 px
    target_w = 246
    target_h = int(bottle.height * (target_w / bottle.width)) # ~855 px
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size
    print(f"Scaled new bottle size: {bw}x{bh}")

    # Center bottle at x = 2030, base sits on stone table at y = 920
    pos_x = 2030 - bw // 2 # 1907
    pos_y = 920 - bh       # 65

    # Look at old bottle bounds:
    # Left: 1905, Right: 2155
    # Since new bottle is x: 1907 to 2153:
    # It covers x: 1907 to 2153!
    # The old bottle was x: 1905 to 2155 (only 2 pixels difference on each side!).
    # And at the top: old cap was at y: 100..200, width: 1980..2090.
    # The new gold cap is at y: 65..190, width: 1968..2100!
    # The new gold cap is WIDER than the old cap neck!

    # To guarantee 100% clean background behind the new bottle:
    # Let's clean ONLY the old bottle area:
    clean_canvas = orig.copy()

    # Erase the old bottle inside x: 1895..2165, y: 80..925
    # We do a seamless content-aware blend:
    patch = orig.crop((1870, 60, 2190, 935))
    pw, ph = patch.size

    # Inpaint old bottle inside patch:
    # Left background strip (x: 0..35): foliage and wall
    # Right background strip (x: pw-35..pw): foliage and wall
    left_sample = patch.crop((0, 0, 35, ph)).resize((pw // 2 + 20, ph), Image.Resampling.BILINEAR)
    right_sample = patch.crop((pw - 35, 0, pw, ph)).resize((pw // 2 + 20, ph), Image.Resampling.BILINEAR)

    inpaint_bg = Image.new('RGBA', (pw, ph))
    inpaint_bg.paste(left_sample, (0, 0))

    grad = Image.new('L', (pw // 2 + 20, ph))
    gw = pw // 2 + 20
    for gx in range(gw):
        val = int(255 * (gx / float(gw - 1)))
        for gy in range(ph):
            grad.putpixel((gx, gy), val)

    inpaint_bg.paste(right_sample, (pw - gw, 0), grad)
    inpaint_bg = inpaint_bg.filter(ImageFilter.GaussianBlur(radius=8))

    # Mask for old bottle area: x: 25 to pw-25, y: 15 to ph-15
    mask = Image.new('L', (pw, ph), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rectangle([(25, 20), (pw - 25, ph - 20)], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=10))

    patch.paste(inpaint_bg, (0, 0), mask)
    clean_canvas.paste(patch, (1870, 60))

    # Add realistic contact shadow on the stone table underneath the bottle
    shadow = Image.new('RGBA', (bw + 60, 45), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    sdraw.ellipse([(15, 8), (bw + 45, 36)], fill=(18, 14, 10, 210))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=6))
    clean_canvas.paste(shadow, (pos_x - 30, 920 - 20), shadow)

    # Paste new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom check
    zoom = clean_canvas.crop((1800, 40, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_masterpiece_check.jpg', quality=98)
    print("Masterpiece zoom saved!")

if __name__ == '__main__':
    create_masterpiece_composite()
