from PIL import Image

def inspect_contours():
    up = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\.user_uploaded\media_1791638306287_9e89c6eb.jpg')
    
    # Let's inspect cap top across x from 280 to 430
    # For each x, find the first y from top that is the cap
    cap_top_ys = {}
    for x in range(285, 430, 2):
        for y in range(60, 100):
            r, g, b = up.getpixel((x, y))
            # Background is beige: r ~ 200..230, g ~ 180..210, b ~ 150..180
            # Cap gold is darker/more saturated or different:
            # Let's check when luminance drops or color shifts
            # Background color around (350, 60):
            bg_r, bg_g, bg_b = up.getpixel((x, 60))
            diff = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
            if diff > 40:
                cap_top_ys[x] = y
                break
    print("Cap top y values across x (min, max):", min(cap_top_ys.values()), max(cap_top_ys.values()))
    print("Cap left x:", min(cap_top_ys.keys()), "Cap right x:", max(cap_top_ys.keys()))

    # Shoulder right edge: from y=195 to 265
    shoulder_right_xs = {}
    for y in range(195, 270, 2):
        for x in range(485, 420, -1):
            r, g, b = up.getpixel((x, y))
            bg_r, bg_g, bg_b = up.getpixel((485, y))
            diff = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
            if diff > 45:
                shoulder_right_xs[y] = x
                break
    print("Shoulder right xs (y=195 to 265):", [(y, shoulder_right_xs.get(y)) for y in range(195, 270, 10)])

    # Shoulder left edge: from y=195 to 265
    shoulder_left_xs = {}
    for y in range(195, 270, 2):
        for x in range(230, 290):
            r, g, b = up.getpixel((x, y))
            bg_r, bg_g, bg_b = up.getpixel((230, y))
            diff = abs(r - bg_r) + abs(g - bg_g) + abs(b - bg_b)
            if diff > 45:
                shoulder_left_xs[y] = x
                break
    print("Shoulder left xs (y=195 to 265):", [(y, shoulder_left_xs.get(y)) for y in range(195, 270, 10)])

if __name__ == '__main__':
    inspect_contours()
