from PIL import Image, ImageDraw, ImageFilter

def refine_and_preview():
    cutout = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\test_bottle_cutout.png')
    cw, ch = cutout.size

    # Preview on white background
    white_bg = Image.new('RGBA', (cw + 40, ch + 40), (255, 255, 255, 255))
    white_bg.paste(cutout, (20, 20), cutout)
    white_bg.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\preview_white.jpg')

    # Preview on dark background
    dark_bg = Image.new('RGBA', (cw + 40, ch + 40), (30, 45, 35, 255))
    dark_bg.paste(cutout, (20, 20), cutout)
    dark_bg.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\preview_dark.jpg')

    print("Saved preview_white.jpg and preview_dark.jpg")

if __name__ == '__main__':
    refine_and_preview()
