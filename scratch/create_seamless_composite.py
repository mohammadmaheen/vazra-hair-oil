import os
from PIL import Image, ImageDraw, ImageFilter

def create_seamless_composite():
    # Load original master canvas
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg').convert('RGBA')
    bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png').convert('RGBA')

    # Old bottle bounds in canvas (2560x1595):
    # Center X: 2030
    # Base Y: 918
    # Top Y: 102
    # Old bottle cylinder left: 1906, right: 2154 (width ~ 248)

    # Let's scale new bottle to match:
    # We want new bottle to sit with base at 918, height = 818 px
    target_h = 820
    target_w = int(bottle.width * (target_h / bottle.height)) # approx 248 px
    b_scaled = bottle.resize((target_w, target_h), Image.Resampling.LANCZOS)
    bw, bh = b_scaled.size
    print(f"Scaled new bottle: {bw}x{bh}")

    pos_x = 2030 - bw // 2
    pos_y = 918 - bh
    print(f"Placing new bottle at pos_x={pos_x}, pos_y={pos_y}")

    # Now let's cleanly remove the old bottle without touching ANY external foliage:
    # We create an inpaint mask ONLY covering the old bottle body and cap.
    # Old bottle polygon:
    # Cap: x from 1970 to 2090, y from 98 to 210
    # Shoulder/Body: x from 1904 to 2156, y from 210 to 918
    clean_canvas = orig.copy()

    # For the background behind the old bottle, we can sample the warm neutral tones
    # and soft foliage from the background right behind it.
    # Notice that x < 1900 has the green arch & warm wall, and x > 2160 has the same warm wall.
    # Let's inpaint ONLY inside the old bottle region (x: 1910..2150, y: 100..918):
    inpaint_mask = Image.new('L', orig.size, 0)
    idraw = ImageDraw.Draw(inpaint_mask)

    # Old cap polygon
    idraw.rectangle([(1965, 96), (2095, 215)], fill=255)
    # Old body polygon
    idraw.rectangle([(1905, 210), (2155, 918)], fill=255)

    # Feather the inpaint mask edges slightly
    inpaint_mask = inpaint_mask.filter(ImageFilter.GaussianBlur(radius=8))

    # Generate smooth backdrop filler:
    # We take a column-averaged strip from the warm background and fill
    bg_sample = orig.crop((2165, 100, 2220, 920)).resize((260, 820), Image.Resampling.BILINEAR)
    bg_sample = bg_sample.filter(ImageFilter.GaussianBlur(radius=15))

    # Paste background sample only through inpaint mask
    clean_canvas.paste(bg_sample, (1900, 100), inpaint_mask.crop((1900, 100, 2160, 920)))

    # Now add realistic contact shadow underneath the base of the new bottle:
    shadow = Image.new('RGBA', (bw + 60, 40), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(shadow)
    # Soft warm contact shadow on stone
    sdraw.ellipse([(15, 6), (bw + 45, 32)], fill=(20, 16, 12, 180))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5))
    clean_canvas.paste(shadow, (pos_x - 30, 918 - 18), shadow)

    # Paste new ultra-sharp bottle
    clean_canvas.paste(b_scaled, (pos_x, pos_y), b_scaled)

    # Save zoom preview for inspection
    zoom = clean_canvas.crop((1800, 60, 2260, 980))
    zoom.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\zoom_seamless_check.jpg', quality=95)
    print("Seamless composite check saved!")

if __name__ == '__main__':
    create_seamless_composite()
