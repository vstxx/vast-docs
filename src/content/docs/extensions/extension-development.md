---
title: "Extension Development"
description: "Build, test, and package polished Chrome-compatible, Vast-native, and hybrid extensions."
---

Vast supports Chrome-compatible extensions, Vast-specific integrations, and hybrid extensions. This guide covers the public development model, a complete native starter, testing, and release preparation.

## Development workflow

1. Open **Extensions** in Vast and turn on **Developer mode**.
2. Select **Load unpacked** and choose the directory containing `manifest.json`.
3. Grant only the permissions needed for the feature you are testing.
4. After editing the manifest, background module, or a local UI page, select **Reload** on the extension card.
5. Check the compatibility badge, native runtime state, and any error shown on the card before testing the feature again.

Keep a small test profile with representative normal tabs. Native tab access excludes private and ephemeral workspaces by design.

## Extension types

### Chrome-compatible

Uses the supported Chrome extension runtime and standard Chrome permissions, host permissions, content scripts, and extension surfaces. Vast accepts Manifest V2 and Manifest V3 packages. A Manifest V2 package requires an explicit string `content_security_policy` limited to `'self'`/`'none'` sources with `object-src 'none'`. A successful install does not guarantee that every Chrome API used by the package is supported.

### Vast Native

Uses the permission-scoped Vast Native API. A native extension declares a local JavaScript background module and may provide local popup, options, or sidebar pages.

### Hybrid

Combines a Chrome-compatible layer with approved Vast Native capabilities. Keep standard Chrome and website permissions in their normal manifest fields; put only Vast-specific permissions in `vast.permissions`.

## Network provider extensions

A content-blocking extension can intercept web requests through an opt-in network-provider bridge. Declare a top-level `"vast_network": 1` field together with:

* Manifest V2 with a persistent background page;
* the `webRequest` and `webRequestBlocking` Chrome permissions;
* host permissions covering both the page URL and the request URLs you want to filter.

A qualifying background page is injected with `vastExtensionCapabilities = { network: 1 }` and answers a fixed `vastWebRequest.handle(json)` entry point with JSON request events. Vast calls providers only for requests from its own HTTP(S) web views in the same session, only after its built-in privacy checks have run, and only when both the page URL and the request URL match the declared host permissions. Private workspaces, internal pages, and non-HTTP(S) traffic are never sent to providers.

Decisions are limited to `cancel`, a bounded `redirectURL` (supported data MIME families or same-origin rewrites), or a response `csp`. Provider callbacks have a 500 ms deadline and requests fail open — a slow or crashed provider never breaks page loading. Vast evaluates no provider-supplied code; the bridge exchanges JSON only.

:::note[Version]
Network-provider support ships with Vast `0.2.7`. Older builds show a compatibility error instead of installing the extension. [Adblocker for Vast](/extensions/adblocker-for-vast/) is the reference implementation.
:::

## Start a native extension

A useful starter separates the long-lived background module from its optional UI pages:

```text
reading-helper/
├── manifest.json
├── background.js
├── popup.html
├── options.html
├── sidebar.html
└── assets/
    └── icon.svg
```

Vast Native API version 1 is declared in the `vast` section of `manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Reading Helper",
  "version": "1.0.0",
  "description": "Save the active page to a local reading list.",
  "icons": { "128": "assets/icon.svg" },
  "vast": {
    "api_version": 1,
    "background": "background.js",
    "popup": "popup.html",
    "options": "options.html",
    "permissions": [
      "vast.storage",
      "vast.tabs.read",
      "vast.toolbar",
      "vast.sidebar",
      "vast.commands",
      "vast.contextMenus",
      "vast.notifications"
    ]
  }
}
```

`vast.background` is required for a native extension and must point to a local `.js` or `.mjs` file. `vast.popup` and `vast.options` are optional local `.html` or `.htm` pages. Paths may not escape the extension directory.

### Build the background module

The `vast` global is available in the background module. The following example creates several native entry points and routes them through one action:

```js
const ACTION_ID = 'save-current-page';

async function saveActivePage(source) {
  const [tab] = await vast.tabs.query({ active: true });
  if (!tab) return;

  const stored = await vast.storage.local.get({
    readingList: [],
  });
  const readingList = Array.isArray(stored.readingList)
    ? stored.readingList
    : [];

  const nextItem = {
    title: tab.title,
    url: tab.url,
    savedAt: new Date().toISOString(),
    source,
  };

  await vast.storage.local.set({
    readingList: [nextItem, ...readingList].slice(0, 100),
  });

  await vast.toolbar.update(ACTION_ID, { badge: 'Saved' });
  await vast.notifications.create({
    title: 'Reading Helper',
    message: `Saved “${tab.title}”.`,
  });
}

await vast.toolbar.create({
  id: ACTION_ID,
  title: 'Save current page',
  icon: 'assets/icon.svg',
});

await vast.sidebar.create({
  id: 'reading-list',
  title: 'Reading list',
  icon: 'assets/icon.svg',
  page: 'sidebar.html',
});

const command = await vast.commands.register({
  id: ACTION_ID,
  title: 'Save current page',
  shortcut: 'Ctrl+Shift+S',
});

if (!command.shortcutAccepted) {
  console.warn(command.warning);
}

await vast.contextMenus.create({
  id: ACTION_ID,
  title: 'Save page to Reading Helper',
});

vast.toolbar.onClicked.addListener(({ id }) => {
  if (id === ACTION_ID) {
    void saveActivePage('toolbar').catch(console.error);
  }
});

vast.commands.onCommand.addListener(({ id }) => {
  if (id === ACTION_ID) {
    void saveActivePage('command').catch(console.error);
  }
});

vast.contextMenus.onClicked.addListener(({ menuItemId }) => {
  if (menuItemId === ACTION_ID) {
    void saveActivePage('context-menu').catch(console.error);
  }
});
```

Use stable IDs for contributions. Check `shortcutAccepted` instead of assuming a requested shortcut was registered; Vast reserves important browser shortcuts such as the address bar, new tab, close tab, and command palette shortcuts.

## Native API version 1

The same bounded API is available to the native background module and authorized native UI pages.

| Namespace | Methods | Events | Permission |
| --- | --- | --- | --- |
| `runtime` | `getManifest`, `getExtensionInfo`, `getPlatformInfo` | — | None |
| `storage.local` | `get`, `set`, `remove`, `clear` | — | `vast.storage` |
| `tabs` | `query`, `get` | `onActivated`, `onCreated`, `onUpdated`, `onRemoved` | `vast.tabs.read` |
| `tabs` | `create`, `update`, `reload`, `close`, `activate` | — | `vast.tabs.write` |
| `theme` | `apply`, `clear` | — | `vast.theme` |
| `toolbar` | `create`, `update`, `remove` | `onClicked` | `vast.toolbar` |
| `sidebar` | `create`, `remove` | — | `vast.sidebar` |
| `commands` | `register`, `remove` | `onCommand` | `vast.commands` |
| `contextMenus` | `create`, `remove` | `onClicked` | `vast.contextMenus` |
| `notifications` | `create` | — | `vast.notifications` |

An event supports `addListener(callback)` and `removeListener(callback)`. Keep a reference to the callback if it may need to be removed while the extension is running.

### Runtime and platform information

Use runtime queries for diagnostics and compatibility decisions rather than parsing user-agent strings:

```js
const extension = await vast.runtime.getExtensionInfo();
const platform = await vast.runtime.getPlatformInfo();

console.info({
  extensionId: extension.id,
  extensionVersion: extension.version,
  apiVersion: extension.apiVersion,
  vastVersion: platform.vastVersion,
  chromiumVersion: platform.chromiumVersion,
});
```

### Tab access

Tab methods operate on normal `http` and `https` tabs. URLs containing embedded credentials are rejected. `tabs.query()` can filter by `active` and `workspaceId`; returned tabs contain `id`, `title`, `url`, `active`, and an optional `workspaceId`.

Use `vast.tabs.read` for observation and `vast.tabs.write` only when the extension changes tab state. A read-only extension should not request the write permission as a convenience.

### Theme tokens

`theme.apply()` accepts a validated subset of appearance tokens, including accent and tint colors, corner radius, glass and blur intensity, borders, shadows, gradients, panel and chrome opacity, and saturation. Apply a coherent token set and always provide a way to call `theme.clear()`.

Do not try to inject CSS into Vast chrome. The theme API is the supported boundary and keeps themes compatible with light, dark, and future browser UI changes.

## Popup, options, and sidebar UI

Native popup, options, and sidebar pages are sandboxed local documents. They can use the authorized `vast` API and share the extension's `storage.local` data, which makes storage the clean handoff between a background action and its UI.

Design each surface for its actual container:

* keep a popup compact and keyboard operable;
* let a sidebar adapt to a narrow, resizable column;
* use an options page for settings that need more explanation or space;
* include explicit empty, loading, success, and error states;
* use system fonts and sufficient contrast instead of assuming the user's theme.

The sandbox has no Node.js globals, Electron APIs, raw IPC, webviews, or unrestricted network access. New windows and navigation away from the extension origin are blocked. Bundle required scripts, styles, and assets with the extension; use the documented Vast API for browser actions.

## Runtime limits and errors

The native boundary validates every call. Build error handling into user-triggered actions and keep payloads small.

| Boundary | Current API v1 behavior |
| --- | --- |
| Arguments | Must be JSON-serializable; at most 8 arguments and 256 KB per call |
| Concurrency | At most 32 in-flight API calls per extension |
| Local storage | 5 MB per extension; values must be finite, JSON-compatible data |
| Tab URLs | `http` and `https` only, up to 4,096 characters, without embedded credentials |
| Notifications | Title up to 100 characters, message up to 1,000 characters, at most 10 per minute |
| Runtime lifecycle | Can stop on disable, reload, update, shutdown, or an unrecoverable runtime error |

Prefer a small queue or `Promise.all()` over unbounded asynchronous loops. Wrap user-facing actions so a rejected permission, stale tab ID, reserved shortcut, or invalid input produces a useful state instead of an unhandled rejection.

```js
async function runAction(action) {
  try {
    await action();
  } catch (error) {
    console.error('Reading Helper action failed', error);
  }
}
```

## Permissions and updates

Treat the permission layers separately:

1. **Chrome and website access** — standard browser permissions and host patterns used by the Chrome-compatible layer.
2. **Vast permissions** — individually reviewed access to supported native capabilities.

A native extension does not receive every capability by default. Requested permissions are visible to the user and can be granted or revoked individually. If an update requests additional access, Vast can hold it for review while the installed version remains active.

Design features so that optional permissions fail independently. For example, a reading list can continue to open from its sidebar when notification access is revoked.

## Test and debug

Before packaging a release, test all of these states:

* first install with no permissions approved;
* each required permission granted and revoked independently;
* background reload after a source change;
* disable, enable, and browser restart;
* empty storage and an existing storage schema;
* light and dark browser themes;
* narrow popup and sidebar widths at 100% and 200% zoom;
* missing active tab, a tab closed during an async action, and a rejected API call;
* an update that keeps the same permissions and one that requests additional access.

The extension card is the first debugging surface. Resolve manifest validation and compatibility errors before debugging feature code, then check the native runtime state. Keep console messages concise and never log stored user content, tokens, or browsing data.

## Package and publish

Vast can inspect a local `.vext` package before installation and show its requested access and publisher or trust information. A local package is not automatically equivalent to a verified catalog release.

From a Vast source checkout, create a validated package with:

```powershell
npm run extension:pack -- .\reading-helper --out .\dist\reading-helper-1.0.0.vext
```

The packer validates the manifest, excludes unsafe filesystem structures, and writes the package outside the extension source directory. For a managed listing, pass the extension and publisher identities supplied by the publisher workflow:

```powershell
npm run extension:pack -- .\reading-helper `
  --out .\dist\reading-helper-1.0.0.vext `
  --extension-id <extension-id> `
  --publisher-id <publisher-id>
```

Use a stable extension ID across releases and increment the manifest version for every uploaded build. In Vast Extensions, create the listing, upload the `.vext` release, add an icon and representative screenshots, verify the permission summary, and submit the release for review.

## Production checklist

Before shipping:

* request the narrowest permission set and explain every high-impact permission;
* keep all native integration on the documented API v1 surface;
* handle partial Chrome compatibility and rejected native calls;
* keep popup, options, and sidebar assets local and accessible;
* cap stored collections and migrate stored data deliberately;
* avoid noisy notifications and reserved shortcuts;
* test disable, reload, update, permission revocation, and browser restart;
* verify the final package contents, version, extension ID, and publisher ID;
* never depend on private workspaces, undocumented channels, or internal Vast implementation details.

Catalog and publisher workflows can evolve independently of the browser runtime. Build against the documented permission surface and re-test on the Vast version you declare as supported.
