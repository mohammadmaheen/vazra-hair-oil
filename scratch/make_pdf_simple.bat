@echo off
set "TMP_PROFILE=%~dp0edge_profile"
if not exist "%TMP_PROFILE%" mkdir "%TMP_PROFILE%"

echo Using isolated profile: "%TMP_PROFILE%"
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu --no-first-run --no-default-browser-check --user-data-dir="%TMP_PROFILE%" --print-to-pdf="%~dp0..\Yellows_Page_Presentation.pdf" "%~dp0..\yellows_page_presentation.html"

echo Exit code: %ERRORLEVEL%
dir "%~dp0..\Yellows_Page_Presentation.pdf"
