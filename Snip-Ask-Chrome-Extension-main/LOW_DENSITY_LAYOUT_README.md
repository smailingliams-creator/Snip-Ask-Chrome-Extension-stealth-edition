# Snip & Ask — Low-Density Layout

This package keeps the extension's AI providers, API calls, storage, capture flow, and message handling unchanged. Only its presentation layers have been refactored into a passive ambient display.

## What changed

1. The injected chat panel starts at 8% opacity and transitions to 20% only while the pointer is inside its bounds.
2. Panel surfaces, borders, shadows, accent colors, and padded control containers are transparent or neutral.
3. Chat response text uses an extremely low-contrast token palette. Drag-select any text to reveal it with the high-contrast selection color.
4. The global loading overlay and in-chat thinking dots/text are not rendered. Requests still run normally and the in-chat Stop control remains wired to the existing cancel handler.
5. The injected header no longer adds a Snip & Ask icon. The popup's visible branding and version copy have also been removed, and popup controls use the neutral compact treatment.

## Save the extension folder

1. Keep the entire extracted folder together. Do not move individual files out of it.
2. The folder to load is the one containing `manifest.json`:

   `C:\Users\Muqtadir\Desktop\ai_start_up\Snip-Ask-Chrome-Extension-main\Snip-Ask-Chrome-Extension-main`

3. If you make additional edits, save them normally in that same folder. Do not zip the folder before loading it into Chrome.

## Load it in Google Chrome

1. Open Google Chrome.
2. Enter `chrome://extensions` in the address bar and press Enter.
3. Turn on **Developer mode** using the toggle in the upper-right corner.
4. Click **Load unpacked**.
5. In the folder picker, select the folder listed above — specifically the folder that contains `manifest.json` — and click **Select Folder**.
6. Confirm that **Snip & Ask - AI Screen Assistant** appears in the extensions list without a red **Errors** button.
7. Optionally pin it from Chrome's Extensions (puzzle-piece) menu, then open it once to configure any required API key or model.
8. Reload a normal webpage, invoke the extension's existing snip action, and verify that the resulting chat is at its quiet 8% baseline. Hover directly over the chat panel to verify its 20% hover state; drag-select response text to verify readable selection contrast.

## Website access

The extension requests access to ordinary websites through `<all_urls>`, including Google Search and Google Forms. After reloading this unpacked build, Chrome will show the updated access request; accept it before testing. Chrome itself still prevents every extension from injecting into protected browser-owned pages such as `chrome://`, `edge://`, `devtools://`, extension pages, and the Chrome Web Store.

## Safe updates and recovery

1. After changing source files, return to `chrome://extensions` and click the extension's reload icon.
2. Reload the webpage where the content script is running before testing again.
3. If Chrome shows an error, expand **Errors** and confirm the selected folder still contains `manifest.json`. Use **Remove** only for this locally loaded copy, then repeat **Load unpacked** with the same folder; this does not alter the source files.
4. Do not install this unpacked copy alongside an identical production installation if you need to distinguish settings or behavior; disable the other copy first.
