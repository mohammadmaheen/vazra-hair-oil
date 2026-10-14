from PIL import Image

orig = Image.open('public/images/hero-unified-canvas-hd.jpg')

# Let's inspect columns across y=500 in orig:
# Old bottle center was ~2030
# Let's see the colors from x=1870 to 1920:
print("Left edge at y=500:")
for x in range(1880, 1915, 2):
    print(f"x={x}:", orig.getpixel((x, 500)))

print("\nRight edge at y=500:")
for x in range(2145, 2185, 2):
    print(f"x={x}:", orig.getpixel((x, 500)))
