export const CONTENT_SCRIPT_FILES = [
    'lib/katex.min.js',
    'lib/purify.min.js',
    'src/content/utils.js',
    'src/content/design-system.js',
    'src/content/ui-helpers.js',
    'src/content/chat/message-utils.js',
    'src/content/chat/render-utils.js',
    'src/content/chat/stream-renderer.js',
    'src/content/chat/image-modal.js',
    'src/content/chat/regeneration.js',
    'src/content/chat/compare.js',
    'src/content/chat/session-state.js',
    'src/content/window-manager.js',
    'src/content/popup-window-sync.js',
    'src/content/snip-selection.js',
    'src/content/chat/floating-chat-ui.js',
    'src/content/content.js'
];

export function isRestrictedPage(url) {
    // `<all_urls>` grants access to normal web pages (including Google and
    // Google Forms). These are the browser-owned schemes Chrome never lets an
    // extension inject into, regardless of manifest permissions.
    return !url || /^(chrome|chrome-extension|chrome-untrusted|devtools|edge|about):/i.test(url) ||
        url.startsWith("https://chrome.google.com/webstore");
}
