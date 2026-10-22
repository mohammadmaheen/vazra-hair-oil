const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, '../assets_master/images');
const publicDir = path.resolve(__dirname, '../public/images');
const distDir = path.resolve(__dirname, '../dist/images');

function copyRecursiveSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Sync master images to public/images
console.log('🔄 Syncing assets_master/images -> public/images...');
copyRecursiveSync(srcDir, publicDir);

// 2. If dist exists, sync master images directly to dist/images
if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
  console.log('🔄 Syncing assets_master/images -> dist/images...');
  copyRecursiveSync(srcDir, distDir);

  // Ensure .nojekyll is present in dist
  const nojekyllSrc = path.resolve(__dirname, '../public/.nojekyll');
  const nojekyllDest = path.resolve(__dirname, '../dist/.nojekyll');
  if (fs.existsSync(nojekyllSrc)) {
    fs.copyFileSync(nojekyllSrc, nojekyllDest);
  }
}

console.log('✅ Image asset synchronization complete. All images are preserved.');
