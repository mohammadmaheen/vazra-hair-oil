from PIL import Image
import shutil
import os

brain_dir = r"C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c"
img_dir = r"c:\Users\MD maheen\Documents\hi\public\images"

# 1. Copy the full-fill generated Amla and Bhringraj
shutil.copy2(
    os.path.join(brain_dir, "amla_full_fill_1790250613011.jpg"),
    os.path.join(img_dir, "ing-amla-fill.jpg")
)
shutil.copy2(
    os.path.join(brain_dir, "bhringraj_full_fill_1790250657628.jpg"),
    os.path.join(img_dir, "ing-bhringraj-fill.jpg")
)

# 2. Crop into the center of Hibiscus to remove the dish rim completely
hib = Image.open(os.path.join(img_dir, "ing-hibiscus-hd.jpg"))
w, h = hib.size
# Crop inner 65% (center-focused)
cx, cy = w // 2, h // 2
crop_r = int(min(w, h) * 0.34)
hib_fill = hib.crop((cx - crop_r, cy - crop_r, cx + crop_r, cy + crop_r))
hib_fill.resize((800, 800), Image.Resampling.LANCZOS).save(os.path.join(img_dir, "ing-hibiscus-fill.jpg"), quality=95)

# 3. Crop into the center of Coconut to remove the dish rim completely
coc = Image.open(os.path.join(img_dir, "ing-coconut-hd.jpg"))
w, h = coc.size
cx, cy = w // 2, h // 2
crop_r = int(min(w, h) * 0.38)
coc_fill = coc.crop((cx - crop_r, cy - crop_r, cx + crop_r, cy + crop_r))
coc_fill.resize((800, 800), Image.Resampling.LANCZOS).save(os.path.join(img_dir, "ing-coconut-fill.jpg"), quality=95)

# 4. Crop into the center of Methi to remove the dish rim completely
meth = Image.open(os.path.join(img_dir, "ing-methi-hd.jpg"))
w, h = meth.size
cx, cy = w // 2, h // 2
crop_r = int(min(w, h) * 0.34)
meth_fill = meth.crop((cx - crop_r, cy - crop_r, cx + crop_r, cy + crop_r))
meth_fill.resize((800, 800), Image.Resampling.LANCZOS).save(os.path.join(img_dir, "ing-methi-fill.jpg"), quality=95)

# 5. Crop into the center of Curry Leaves to remove the dish rim completely
curry = Image.open(os.path.join(img_dir, "ing-curryleaves-hd.jpg"))
w, h = curry.size
cx, cy = w // 2, h // 2
crop_r = int(min(w, h) * 0.38)
curry_fill = curry.crop((cx - crop_r, cy - crop_r, cx + crop_r, cy + crop_r))
curry_fill.resize((800, 800), Image.Resampling.LANCZOS).save(os.path.join(img_dir, "ing-curryleaves-fill.jpg"), quality=95)

print("All ingredients cropped to 100% full-fill without any dishes!")
