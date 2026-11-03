@echo off
setlocal

rem Uso: build_tizen.bat [perfil_de_firma]
rem Sin perfil se usa el perfil de certificado activo de Tizen Studio.

set "ROOT=%~dp0"
set "APP_DIR=%ROOT%app.Tizen.test_RetroFlashJS_001"
set "OUT_DIR=%ROOT%dist"
set "PROFILE=%~1"

rem El CLI de Tizen no admite espacios en las rutas, asi que se compila una copia en una carpeta sin espacios.
set "STAGE=%TEMP%\retroflash_tizen_build"
if not "%STAGE: =%"=="%STAGE%" set "STAGE=%SystemDrive%\retroflash_tizen_build"

if not exist "%APP_DIR%\config.xml" (
    echo ERROR: No se encontro config.xml en "%APP_DIR%".
    pause
    exit /b 1
)

where tizen >nul 2>nul
if errorlevel 1 (
    if exist "C:\tizen-studio\tools\ide\bin\tizen.bat" (
        set "PATH=C:\tizen-studio\tools\ide\bin;%PATH%"
    ) else (
        echo ERROR: No se encontro el CLI de Tizen. Anade tizen-studio\tools\ide\bin al PATH.
        pause
        exit /b 1
    )
)

if not exist "%OUT_DIR%" mkdir "%OUT_DIR%"

if exist "%STAGE%" rmdir /s /q "%STAGE%"
robocopy "%APP_DIR%" "%STAGE%" /e /njh /njs /nfl /ndl /xd .settings .buildResult .sign >nul
if errorlevel 8 (
    echo ERROR: Fallo la copia de la app a "%STAGE%".
    pause
    exit /b 1
)

call tizen build-web -- "%STAGE%"
if errorlevel 1 (
    echo ERROR: Fallo la compilacion de la app.
    pause
    exit /b 1
)

if defined PROFILE (
    call tizen package -t wgt -s "%PROFILE%" -- "%STAGE%\.buildResult"
) else (
    call tizen package -t wgt -- "%STAGE%\.buildResult"
)
if errorlevel 1 (
    echo ERROR: Fallo el empaquetado o la firma de la app.
    pause
    exit /b 1
)

if not exist "%STAGE%\.buildResult\*.wgt" (
    echo ERROR: No se genero ningun archivo .wgt.
    pause
    exit /b 1
)

copy /y "%STAGE%\.buildResult\*.wgt" "%OUT_DIR%\" >nul
rmdir /s /q "%STAGE%"

echo.
echo App empaquetada correctamente en "%OUT_DIR%".
pause
endlocal
