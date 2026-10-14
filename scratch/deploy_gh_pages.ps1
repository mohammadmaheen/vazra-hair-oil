# Get GitHub OAuth token from Windows Credential Manager
$p = New-Object System.Diagnostics.Process
$p.StartInfo.FileName = "git"
$p.StartInfo.Arguments = "credential fill"
$p.StartInfo.RedirectStandardInput = $true
$p.StartInfo.RedirectStandardOutput = $true
$p.StartInfo.UseShellExecute = $false
$p.Start() | Out-Null
$p.StandardInput.WriteLine("protocol=https`nhost=github.com`n`n")
$out = $p.StandardOutput.ReadToEnd()
$p.WaitForExit()
$passLine = $out -split "`n" | Where-Object { $_ -like "password=*" }
$token = $passLine.Substring(9).Trim()

$repoUrlWithAuth = "https://x-access-token:${token}@github.com/mohammadmaheen/vazra-hair-oil.git"

Write-Output "Preparing main source repository..."
git init
git config user.name "Mohammad maheen"
git config user.email "maheenmjy@gmail.com"

# Check if .gitignore exists
if (-not (Test-Path ".gitignore")) {
    Set-Content -Path ".gitignore" -Value "node_modules`n.env`n.DS_Store"
}

git add -A
git commit -m "Vazra Hair Oil - Luxury Landing Page with new custom bottle"
git branch -M main
git remote remove origin -ErrorAction SilentlyContinue
git remote add origin $repoUrlWithAuth
Write-Output "Pushing main branch..."
git push -u origin main --force

Write-Output "Preparing gh-pages branch from dist folder..."
$distPath = "c:\Users\MD maheen\Documents\hi\dist"
git -C $distPath init
git -C $distPath config user.name "Mohammad maheen"
git -C $distPath config user.email "maheenmjy@gmail.com"

# Create .nojekyll in dist so GitHub Pages does not ignore underscore files
New-Item -ItemType File -Force -Path "$distPath\.nojekyll" | Out-Null

git -C $distPath add -A
git -C $distPath commit -m "Deploy to GitHub Pages"
git -C $distPath branch -M gh-pages
git -C $distPath remote remove origin -ErrorAction SilentlyContinue
git -C $distPath remote add origin $repoUrlWithAuth
Write-Output "Pushing gh-pages branch..."
git -C $distPath push -u origin gh-pages --force

Write-Output "Configuring GitHub Pages via API..."
$headers = @{
    "Authorization" = "Bearer $token"
    "User-Agent" = "Vazra-Deployer"
    "Accept" = "application/vnd.github.v3+json"
}

try {
    $body = @{
        source = @{
            branch = "gh-pages"
            path = "/"
        }
    } | ConvertTo-Json
    $pagesRes = Invoke-RestMethod -Uri "https://api.github.com/repos/mohammadmaheen/vazra-hair-oil/pages" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    Write-Output "GitHub Pages enabled! URL: $($pagesRes.html_url)"
} catch {
    Write-Output "Pages config notice: $($_.Exception.Message)"
    # Check current pages info
    try {
        $pInfo = Invoke-RestMethod -Uri "https://api.github.com/repos/mohammadmaheen/vazra-hair-oil/pages" -Headers $headers
        Write-Output "Existing GitHub Pages URL: $($pInfo.html_url)"
    } catch {
        Write-Output "Could not query pages API directly."
    }
}

Write-Output "DEPLOYMENT PUSH COMPLETED SUCCESSFULLY!"
