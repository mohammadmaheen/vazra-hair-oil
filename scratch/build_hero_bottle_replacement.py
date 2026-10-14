import os
from PIL import Image, ImageDraw, ImageFilter

def extract_high_precision_bottle():
    up_path = r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\.user_uploaded\media_1791638306287_9e89c6eb.jpg'
    up = Image.open(up_path).convert('RGBA')
    W, H = up.size

    # We will build an ultra-smooth, 4x supersampled mask to ensure zero aliasing or fringe.
    scale = 4
    SW, SH = W * scale, H * scale
    mask_hi = Image.new('L', (SW, SH), 0)
    draw = ImageDraw.Draw(mask_hi)

    # Coordinates in 1x scale:
    # Cap:
    # Left: 287, Right: 425
    # Top: 74 with subtle rounded bevel at corners (288, 77) to (424, 77)
    # Bottom of cap / neck seam: 195
    #
    # Shoulder:
    # Curves from (287, 195) to (243, 265) on left,
    # and from (425, 195) to (474, 265) on right.
    #
    # Cylinder:
    # Left: 243, Right: 474
    # Runs from 265 to 855
    #
    # Base:
    # Curves smoothly down from 855 to 890 at center

    points = []

    # 1. Cap top edge
    points.append((288.5 * scale, 76.5 * scale))
    points.append((292.0 * scale, 74.0 * scale))
    points.append((420.0 * scale, 74.0 * scale))
    points.append((423.5 * scale, 76.5 * scale))

    # 2. Cap right side
    points.append((425.0 * scale, 80.0 * scale))
    points.append((425.0 * scale, 195.0 * scale))

    # 3. Shoulder right curve
    # Points from inspection:
    # (195, 430), (205, 434), (215, 449), (225, 465), (235, 471), (245, 473), (255, 473.5), (265, 474)
    shoulder_right = [
        (425.0, 195.0),
        (428.0, 200.0),
        (434.0, 206.0),
        (442.0, 212.0),
        (450.0, 217.0),
        (458.0, 222.0),
        (465.0, 227.0),
        (470.0, 235.0),
        (472.5, 245.0),
        (473.5, 255.0),
        (474.0, 265.0)
    ]
    for px, py in shoulder_right[1:]:
        points.append((px * scale, py * scale))

    # 4. Right side of cylinder
    points.append((474.0 * scale, 855.0 * scale))

    # 5. Base right curve
    base_right = [
        (473.5, 863.0),
        (471.5, 871.0),
        (467.5, 878.0),
        (460.0, 884.0),
        (448.0, 888.5),
        (430.0, 891.0),
        (358.5, 892.0), # center bottom
        (287.0, 891.0),
        (269.0, 888.5),
        (257.0, 884.0),
        (249.5, 878.0),
        (245.5, 871.0),
        (243.5, 863.0)
    ]
    for px, py in base_right:
        points.append((px * scale, py * scale))

    # 6. Left side of cylinder
    points.append((243.0 * scale, 855.0 * scale))
    points.append((243.0 * scale, 265.0 * scale))

    # 7. Shoulder left curve
    shoulder_left = [
        (243.5, 255.0),
        (244.5, 245.0),
        (247.0, 235.0),
        (252.0, 227.0),
        (259.0, 222.0),
        (267.0, 217.0),
        (275.0, 212.0),
        (283.0, 206.0),
        (286.0, 200.0),
        (287.0, 195.0)
    ]
    for px, py in shoulder_left:
        points.append((px * scale, py * scale))

    # 8. Cap left side
    points.append((287.0 * scale, 80.0 * scale))

    # Fill polygon
    draw.polygon(points, fill=255)

    # Downsample mask to 1x with smooth anti-aliased edge
    mask = mask_hi.resize((W, H), Image.Resampling.LANCZOS)

    # Soft edge feather (0.8 px)
    mask = mask.filter(ImageFilter.GaussianBlur(radius=0.6))

    # Create RGBA bottle cutout
    bottle_rgba = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    bottle_rgba.paste(up, (0, 0), mask)

    # Crop to bounding box
    bbox = mask.getbbox()
    bottle_cutout = bottle_rgba.crop(bbox)
    out_path = r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png'
    bottle_cutout.save(out_path)
    print(f"Extracted perfect bottle cutout: {bottle_cutout.size} -> {out_path}")
    return bottle_cutout

if __name__ == '__main__':
    extract_high_precision_bottle()
