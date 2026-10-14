import os
from PIL import Image, ImageDraw, ImageFilter

def extract_bottle():
    up_path = r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\.user_uploaded\media_1791638306287_9e89c6eb.jpg'
    up = Image.open(up_path).convert('RGBA')
    W, H = up.size

    # The bottle geometry in uploaded image (682x1024):
    # Cap:
    # Top of gold cap: y = 74
    # Cap left edge: x = 287
    # Cap right edge: x = 425
    # Cap base / hinge groove: y = 195..200
    #
    # Neck / Shoulder:
    # Golden transparent shoulder widens from x=287..425 at y=200 down to x=243..474 at y=265
    #
    # Cylinder Body:
    # Left edge: x = 243
    # Right edge: x = 474
    # Runs straight vertically from y = 265 to y = 855
    #
    # Base:
    # Bottom glass rim curves down from y=855 to y=890
    # Center of base bottom reaches approx y=890
    # Bottom rounded corners from x=243 to 255 and x=462 to 474

    # Let's create an accurate polygon mask for the entire bottle:
    mask = Image.new('L', (W, H), 0)
    draw = ImageDraw.Draw(mask)

    # Build bottle contour points:
    points = []

    # 1. Cap top edge (slight rounded bevel on gold cap)
    # Top-left corner of cap: (288, 77)
    # Top-right corner of cap: (424, 77)
    points.append((288, 76))
    points.append((292, 74))
    points.append((420, 74))
    points.append((424, 76))

    # 2. Cap right side
    points.append((425, 80))
    points.append((425, 195))

    # 3. Shoulder right curve from (425, 195) to (474, 265)
    # The shoulder is a smooth concave-convex glass taper:
    for t in range(1, 21):
        frac = t / 20.0
        # Smooth S-curve transition
        # y from 195 to 265
        sy = 195 + frac * 70
        # x curves out from 425 to 474
        sx = 425 + (474 - 425) * (0.5 - 0.5 * ((1 - frac)**2 - frac**2)) # smooth interpolation
        points.append((sx, sy))

    # 4. Right side of cylinder
    points.append((474, 265))
    points.append((474, 855))

    # 5. Bottom-right rounded corner
    # curves from (474, 855) down to (465, 885) and then across bottom to (250, 885)
    points.append((473, 865))
    points.append((470, 876))
    points.append((464, 885))
    points.append((455, 889))
    points.append((440, 891))
    points.append((357, 892)) # center bottom
    points.append((275, 891))
    points.append((260, 889))
    points.append((251, 885))
    points.append((245, 876))
    points.append((242, 865))

    # 6. Left side of cylinder
    points.append((242, 855))
    points.append((242, 265))

    # 7. Shoulder left curve from (242, 265) to (287, 195)
    for t in range(20, 0, -1):
        frac = t / 20.0
        sy = 195 + frac * 70
        sx = 287 - (287 - 242) * (0.5 - 0.5 * ((1 - frac)**2 - frac**2))
        points.append((sx, sy))

    # 8. Cap left side
    points.append((287, 195))
    points.append((287, 80))

    draw.polygon(points, fill=255)

    # Let's crop the bottle with this mask
    bottle_rgba = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    bottle_rgba.paste(up, (0, 0), mask)

    # Crop to bounding box
    bbox = mask.getbbox()
    print("Mask Bbox:", bbox)
    bottle_cropped = bottle_rgba.crop(bbox)
    bottle_cropped.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\test_bottle_cutout.png')
    print("Saved test bottle cutout, size:", bottle_cropped.size)

if __name__ == '__main__':
    extract_bottle()
