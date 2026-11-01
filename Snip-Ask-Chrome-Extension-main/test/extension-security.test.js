import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { CONTENT_SCRIPT_FILES } from '../src/background/core/content-script-files.js';

test('manifest grants the extension access to ordinary web pages', async () => {
    const manifestText = await readFile(new URL('../manifest.json', import.meta.url), 'utf8');
    const manifest = JSON.parse(manifestText);
    assert.ok(manifest.host_permissions.includes('<all_urls>'));
    assert.equal('optional_host_permissions' in manifest, false);
});

test('DOMPurify loads before markdown rendering utilities', () => {
    const purifier = CONTENT_SCRIPT_FILES.indexOf('lib/purify.min.js');
    const renderer = CONTENT_SCRIPT_FILES.indexOf('src/content/utils.js');
    assert.ok(purifier >= 0);
    assert.ok(purifier < renderer);
});

test('sidepanel loads DOMPurify before markdown rendering utilities', async () => {
    const html = await readFile(new URL('../src/sidepanel/sidepanel.html', import.meta.url), 'utf8');
    const purifier = html.indexOf('lib/purify.min.js');
    const renderer = html.indexOf('../content/utils.js');
    assert.ok(purifier >= 0, 'sidepanel.html must load lib/purify.min.js');
    assert.ok(renderer >= 0, 'sidepanel.html must load src/content/utils.js');
    assert.ok(purifier < renderer, 'DOMPurify must load before utils.js in sidepanel.html');
});
