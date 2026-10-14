@echo off
set "EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE%" (
  set "EDGE=C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

set "OUT=%~dp0..\Yellows_Page_Presentation.pdf"
set "SRC=%~dp0..\yellows_page_presentation.html"

echo Using Edge at: "%EDGE%"
echo Source HTML: "%SRC%"
echo Output PDF: "%OUT%"

"%EDGE%" --headless --disable-gpu --run-all-compositor-stages-before-draw --virtual-time-budget=6000 --no-pdf-header-footer --print-to-pdf="%OUT%" "%SRC%"

echo Edge exited with: %ERRORLEVEL%
if exist "%OUT%" (
  echo SUCCESS_PDF_CREATED
  dir "%OUT%"
) else (
  echo FAILED_PDF_NOT_FOUND
)
