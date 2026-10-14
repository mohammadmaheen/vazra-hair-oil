from PIL import Image

def inspect_original_bottle():
    # Let's load the canvas before our test
    # Note: public/images/hero-unified-canvas-hd.jpg was NOT overwritten in composite_new_bottle.py
    # because we saved to scratch/test_canvas_with_new_bottle.jpg!
    orig = Image.open('public/images/hero-unified-canvas-hd.jpg')

    # Let's crop the exact area of the old bottle in original: x=1850..2220, y=100..950
    orig_crop = orig.crop((1850, 100, 2220, 950))
    orig_crop.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\orig_bottle_crop.jpg')
    print("Original bottle crop saved!")

if __name__ == '__main__':
    inspect_original_bottle()
