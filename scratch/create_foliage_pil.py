from PIL import Image

img = Image.open(r"c:\Users\MD maheen\Documents\hi\public\images\hero-left-foliage.jpg").convert("RGBA")
width, height = img.size
new_data = []

for y in range(height):
    for x in range(width):
        r, g, b, a = img.getpixel((x, y))
        # Check if cream background
        is_cream = (r > 215 and g > 220 and b > 210 and abs(r - g) < 30)
        # Keep left foliage within x < 300
        if is_cream or x > 280:
            new_data.append((r, g, b, 0))
        else:
            new_data.append((r, g, b, 255))

img.putdata(new_data)
img.save(r"c:\Users\MD maheen\Documents\hi\public\images\foliage-left.png", "PNG")
print("Pure PIL transparent foliage PNG created!")
