@echo off
setlocal

set "ROOT=%~dp0"
set "APP_DIR=%ROOT%app.WebOS.test_RetroFlashJS_001"
set "OUT_DIR=%ROOT%dist"

if not exist "%APP_DIR%\appinfo.json" (
    echo ERROR: No se encontro appinfo.json en "%APP_DIR%".
    pause
    exit /b 1
)

if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

call ares-package "%APP_DIR%" --outdir "%OUT_DIR%"
if errorlevel 1 (
    echo ERROR: Fallo el empaquetado de la app.
    pause
    exit /b 1
)

echo.
echo App empaquetada correctamente en "%OUT_DIR%".
pause
endlocal
