from PIL import Image

def inspect_seams():
    # Let's inspect the transition between the background and clean patch
    # Patch was x: 1890..2170, y: 140..935
    desk = Image.open(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\test_canvas_with_new_bottle.jpg')

    # Crop the left border of patch: x=1860..1920, y=140..935
    left_seam = desk.crop((1860, 140, 1930, 935))
    left_seam.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\left_seam.jpg')

    # Crop the right border of patch: x=2140..2200, y=140..935
    right_seam = desk.crop((2140, 140, 2200, 935))
    right_seam.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\right_seam.jpg')

    # Crop top seam: x=1890..2170, y=110..170
    top_seam = desk.crop((1890, 110, 2170, 170))
    top_seam.save(r'C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c\scratch\top_seam.jpg')

    print("Seam crops saved for inspection!")

if __name__ == '__main__':
    inspect_seams()
