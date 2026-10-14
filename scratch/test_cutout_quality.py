from PIL import Image

def test_cutout_quality():
    cutout = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\vazra_bottle_perfect_cutout.png')
    cw, ch = cutout.size

    # White preview
    white = Image.new('RGBA', (cw + 40, ch + 40), (255, 255, 255, 255))
    white.paste(cutout, (20, 20), cutout)
    white.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\check_white.jpg')

    # Dark preview
    dark = Image.new('RGBA', (cw + 40, ch + 40), (20, 30, 20, 255))
    dark.paste(cutout, (20, 20), cutout)
    dark.convert('RGB').save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\check_dark.jpg')

    print("Quality checks saved!")

if __name__ == '__main__':
    test_cutout_quality()
