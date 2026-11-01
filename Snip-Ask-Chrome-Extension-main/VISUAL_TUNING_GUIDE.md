# Beginner's Visual Tuning Guide

This guide changes only how Snip & Ask looks. It does not change the AI model, API key, capture, or message code. Make one change at a time, save, then reload the unpacked extension at `chrome://extensions` and refresh the webpage you are testing.

## The two visual areas

| What you see | File to edit | Main setting |
| --- | --- | --- |
| Floating response window or Chrome side panel | `src/content/chat/floating-chat-ui.js` | `applyOpacity()` and the ambient CSS inside `createWindow()` |
| Red/orange rectangle drawn while snipping | `src/content/snip-selection.js` | `createSelectionBox()` |
| Small extension popup opened from Chrome's toolbar | `src/popup/popup.css` | final `body` and `body:hover` rules |
| Shared faint text, borders, surfaces, and accent colors in the injected chat | `src/content/design-system.js` | `tokens.color`, `tokens.border`, and `tokens.shadow` |

## Change the floating chat opacity

Open `src/content/chat/floating-chat-ui.js` and search for `const normalized = '0.08';` inside `applyOpacity()`.

```js
const normalized = '0.08';
```

This is the resting opacity. Use a number between `0` and `1`:

- `0.05` = 5%, extremely faint
- `0.08` = 8%, current resting value
- `0.20` = 20%, current hover value
- `0.50` = 50%, much easier to read
- `1` = fully opaque

Then search for `this.container.style.opacity = '0.20';`. That is the hover value. Change the two values together if you want a different resting/hover combination. For example, 5% when idle and 15% on hover:

```js
const normalized = '0.05';
this.container.addEventListener('mouseenter', () => { this.container.style.opacity = '0.15'; });
this.container.addEventListener('mouseleave', () => { this.container.style.opacity = '0.05'; });
```

## Change the toolbar popup's black background and opacity

Open `src/popup/popup.css` and go to the final `body` rule. It deliberately appears near the end of the file so it wins over older styles above it.

```css
body { background: rgba(12, 12, 12, 0.06) !important; }
body:hover { background: rgba(12, 12, 12, 0.10) !important; }
```

The final number in `rgba(12, 12, 12, 0.06)` is the black background's opacity. Change it to `0` for no black fill, `0.03` for an almost invisible fill, or `0.10` for a slightly darker fill. The popup deliberately keeps `opacity: 1` so its labels and buttons remain readable; only its background changes on hover.

## Change the orange selection rectangle

Open `src/content/snip-selection.js` and search for `createSelectionBox`. The two lines below control the rectangle shown while dragging a capture area:

```js
border: 1px solid rgba(245, 80, 54, 0.05);
background-color: rgba(245, 80, 54, 0.05);
```

The final `0.05` is 5% opacity. The first line changes the outline; the second changes the coloured fill.

- To make only the fill disappear, set the second final value to `0`.
- To make only the outline more visible, change the first final value to `0.15`.
- To use a neutral grey instead of orange, replace `245, 80, 54` with `120, 120, 120` in both lines.
- To make the outline thicker, change `1px` to `2px`.

## Change all injected-chat text contrast

Open `src/content/design-system.js` and find `text: 'rgba(120, 120, 120, 0.05)'` within `tokens.color`. The related entries are `text`, `textStrong`, `textSoft`, `textMuted`, and `textSubtle`.

Use the last value to change readability. For example, change all five from `0.05` to `0.12` to make the text more noticeable without restoring a conventional high-contrast interface. Keep all five similar if you want every message type to remain equally quiet.

The values named `accent`, `accentHover`, and `accentSoft` control the old orange emphasis. They are already neutral grey; adjust their final alpha value if buttons or icons should be more or less visible.

## Change selection readability

In `src/content/chat/floating-chat-ui.js`, search for `:host ::selection`. In `src/popup/popup.css`, search for `body ::selection`.

```css
color: rgba(255, 255, 255, 0.95);
background: rgba(90, 90, 90, 0.92);
```

These values apply only while you drag-select text. Lower `0.95` and `0.92` for a fainter selected state; raise them toward `1` for the clearest temporary reading state.

## Remove or restore visual containers

In `src/content/design-system.js`, `tokens.shadow` is set to `none`, and all `tokens.border` entries are `none`. Restore a subtle border by changing a value such as:

```js
default: '1px solid rgba(120, 120, 120, 0.08)'
```

To restore a barely visible shadow, use:

```js
overlay: '0 4px 12px rgba(0, 0, 0, 0.08)'
```

## If a change does not appear

1. Save the file.
2. Open `chrome://extensions`.
3. Click the reload icon on the unpacked Snip & Ask extension.
4. Reload the webpage itself. The injected chat script is added when the page loads.
5. Close and reopen the toolbar popup if you edited `popup.css`.

If you make a mistake, use your editor's Undo, save, reload the extension, and test again. No API keys or stored conversations need to be deleted to adjust these visual values.
