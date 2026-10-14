from PIL import Image

desk = Image.open('public/images/hero-unified-canvas-hd.jpg')
top_crop = desk.crop((1850, 40, 2220, 250))
top_crop.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\desk_top_above_bottle.jpg')
print("Top crop saved!")
