# Permanent Image Repository (assets_master/images)

This directory is the **permanent master archive** for all image assets used across the **VAZRA Hair Oil** website.

## Why this exists:
- Preserves all authentic product renders, botannical imagery, hero banners, and photography permanently in Git.
- Never gets wiped, cleared, or overwritten during deployments, Vite builds, or repository cleanup.
- Synchronized automatically to both `public/images/` and `dist/images/` via `npm run sync-images` (and automatically during `npm run dev` and `npm run build`).

## Directory Structure:
- `botanical/`: High-resolution botanical ingredients (Amla, Bhringraj, Shikakai, Neem, etc.)
- `bottle-*.png`: Product size bottles (100ml, 200ml, 500ml, 1000ml, combo)
- `hero-*.jpg`: High-definition hero showcases and canvases
- `how-to-use-*.jpg`: Step-by-step 4-stage ritual photos
- `ceo-founder-*.jpg`: Authenticated founder portrait
