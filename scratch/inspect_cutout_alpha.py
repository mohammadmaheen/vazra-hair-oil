from PIL import Image

bottle = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png')
print("Bottle cutout size:", bottle.size)

# Let's inspect the alpha values across horizontal slice at y=500:
row = [bottle.getpixel((x, 500))[3] for x in range(bottle.width)]
print("Alpha > 0 span:", min(x for x, a in enumerate(row) if a > 10), "to", max(x for x, a in enumerate(row) if a > 10))
print("First 15 alpha values:", row[:15])
print("Last 15 alpha values:", row[-15:])
