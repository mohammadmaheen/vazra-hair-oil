const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const htmlPath = "file:///c:/Users/MD%20maheen/Documents/hi/yellows_page_presentation.html";
const pdfPath = path.resolve(__dirname, '..', 'Yellows_Page_Presentation.pdf');

console.log("Target PDF:", pdfPath);

const args = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--run-all-compositor-stages-before-draw',
  '--virtual-time-budget=10000',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  htmlPath
];

const res = spawnSync(edgePath, args, { stdio: 'pipe', encoding: 'utf-8' });

console.log("Status:", res.status);
if (res.stdout) console.log("Stdout:", res.stdout);
if (res.stderr) console.log("Stderr:", res.stderr);

if (fs.existsSync(pdfPath)) {
  const stats = fs.statSync(pdfPath);
  console.log(`SUCCESS! Generated PDF: ${pdfPath} (${stats.size} bytes)`);
} else {
  console.log("PDF was not created. Trying alternative headless flag...");
  const altRes = spawnSync(edgePath, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=10000',
    '--no-pdf-header-footer',
    `--print-to-pdf=${pdfPath}`,
    htmlPath
  ], { stdio: 'pipe', encoding: 'utf-8' });
  
  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`SUCCESS (alt)! Generated PDF: ${pdfPath} (${stats.size} bytes)`);
  } else {
    console.log("Alt Status:", altRes.status);
    console.log("Alt Stderr:", altRes.stderr);
  }
}
