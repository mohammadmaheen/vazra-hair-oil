import shutil
import os

brain_dir = r"C:\Users\MD maheen\.gemini\antigravity\brain\ae0e4e02-1cb4-4bd7-9d96-7d676112862c"
dest_dir = r"c:\Users\MD maheen\Documents\hi\public\images"
os.makedirs(dest_dir, exist_ok=True)

file_map = {
    "vazra_original_oil_1790247667629.jpg": "prod-original-hd.jpg",
    "vazra_antihairfall_oil_1790247692603.jpg": "prod-antihairfall-hd.jpg",
    "vazra_scalpcare_oil_1790247719919.jpg": "prod-scalpcare-hd.jpg",
    "vazra_onion_oil_1790247749064.jpg": "prod-onion-hd.jpg",
    "amla_natural_dish_1790247778618.jpg": "ing-amla-hd.jpg",
    "bhringraj_natural_dish_1790247807244.jpg": "ing-bhringraj-hd.jpg",
    "hibiscus_natural_dish_1790247840292.jpg": "ing-hibiscus-hd.jpg",
    "coconut_natural_dish_1790247873995.jpg": "ing-coconut-hd.jpg",
    "methi_natural_dish_1790247910103.jpg": "ing-methi-hd.jpg",
    "curry_leaves_dish_1790247944960.jpg": "ing-curryleaves-hd.jpg",
}

for src_name, dest_name in file_map.items():
    src_file = os.path.join(brain_dir, src_name)
    dest_file = os.path.join(dest_dir, dest_name)
    if os.path.exists(src_file):
        shutil.copy2(src_file, dest_file)
        print(f"Copied {src_name} -> {dest_name}")
    else:
        print(f"Missing {src_file}")
