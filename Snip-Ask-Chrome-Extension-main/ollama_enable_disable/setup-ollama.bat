@echo off
title Snip & Ask - Enable Offline Mode
echo.
echo [OPT-IN] Enabling Offline AI Support...
echo.
echo This will allow your Snip ^& Ask extension to communicate with local Ollama.
echo.

echo Find the extension ID at chrome://extensions with Developer mode enabled.
set /p "EXTENSION_ID=Paste the Snip & Ask extension ID here: "

if "%EXTENSION_ID%"=="" (
    echo.
    echo [STOPPED] No extension ID was provided. No system setting was changed.
    pause
    exit /b 1
)

setx OLLAMA_ORIGINS "chrome-extension://%EXTENSION_ID%"

echo.
echo [DONE] Configuration saved.
echo Please RESTART Ollama for changes to take effect.
echo.
pause
