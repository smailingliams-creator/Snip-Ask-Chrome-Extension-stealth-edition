# Fixing Ollama in Snip & Ask

## What caused your error

Ollama is working on your computer at `http://localhost:11434`. It currently has this model installed:

```text
gemma3:1b
```

The extension was trying to use `gemma3:4b`, which is a different model. Ollama correctly returned HTTP 404 because that model is not installed. This is a model-name mismatch, not a failed Ollama server and not an API-key problem.

## Fastest fix: use your installed model

1. Open `chrome://extensions` in Chrome.
2. Click the reload icon on the unpacked Snip & Ask extension.
3. Close and reopen the extension popup.
4. Enable **Ollama** in Settings > Providers if it is not already enabled.
5. In the main model picker, select **Gemma 3 1B** (or **Ollama Gemma 3 1B** in the compact chat picker).
6. In API Keys, set the Ollama URL to `http://localhost:11434`.
7. Snip or ask a short question to test it.

## Alternative: install the originally selected 4B model

Use this only if you specifically want the 4B model and have enough RAM/storage. Open a normal Windows terminal and run:

```powershell
ollama pull gemma3:4b
```

Then leave **Gemma 3 4B** selected in the extension. Confirm installed models at any time with:

```powershell
ollama list
```

## Connection and CORS checks

The extension requests `<all_urls>` access, which includes `localhost`; for the normal extension background request, no permissive `OLLAMA_ORIGINS="*"` setting should be needed. If you still receive a message specifically saying that Ollama rejected the extension origin, set a restricted origin rather than allowing every origin:

1. Go to `chrome://extensions` and turn on Developer mode.
2. Copy the ID of your unpacked Snip & Ask extension.
3. Stop Ollama completely (including its background process).
4. Either run `ollama_enable_disable\setup-ollama.bat` and paste that ID when prompted, or open **Command Prompt** and run the following, replacing `YOUR_EXTENSION_ID` with the copied ID:

```bat
setx OLLAMA_ORIGINS "chrome-extension://YOUR_EXTENSION_ID"
```

5. Start Ollama again and retry the extension.

For a temporary diagnostic test only, `setx OLLAMA_ORIGINS "*"` allows every website origin to reach Ollama. Do not leave that broad setting enabled if you can use the extension-specific origin above.

## What the code changed

- `src/background/models/models-config.js` now includes `ollama:gemma3:1b` in both model pickers.
- `src/background/ai/streaming.js` now reads Ollama's JSON error response instead of converting every failure into “connection failed.”
- `src/background/ai/providers/ollama.js` now distinguishes missing models, unreachable Ollama, CORS failures, and other server errors. A missing model tells you the exact `ollama pull` command to run.

## If it still fails

1. Run `ollama list` and make sure the exact model name selected in Snip & Ask appears there.
2. Open `http://localhost:11434/api/tags` in a browser; it should return JSON listing your models.
3. Ensure the extension URL is exactly `http://localhost:11434`—not HTTPS and not a URL with an extra path.
4. Reload the unpacked extension and refresh the webpage before retesting.
