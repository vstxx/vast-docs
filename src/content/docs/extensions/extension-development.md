---
title: "Extension Development"
description: "Build and test unpacked Vast extensions against the public compatibility and permission model."
---

Vast supports Chrome-compatible extensions, Vast-specific integrations, and hybrid extensions. This page documents the public development model without exposing private browser internals.

## Development workflow

Enable **Developer Mode** in Vast, then use the Extensions page to work with unpacked development extensions. Developer actions can expose reload controls and installation-path details that are hidden in normal use.

## Extension types

### Chrome-compatible

Uses the supported Chrome extension runtime and declared website/browser permissions.

### Vast Native

Uses Vast-specific integration capabilities with an explicit Vast permission model.

### Hybrid

Combines Chrome-compatible extension behavior with approved Vast integration permissions.

## Manifest for a Vast-native extension

Vast Native API version 1 is declared in a `vast` section of `manifest.json`. A native extension also declares a local JavaScript module as its background entry point.

```json
{
  "manifest_version": 3,
  "name": "Reading Helper",
  "version": "1.0.0",
  "vast": {
    "api_version": 1,
    "background": "background.js",
    "permissions": ["vast.storage", "vast.tabs.read"]
  }
}
```

Chrome permissions and host permissions stay in their standard manifest fields. Put only Vast-specific permissions in `vast.permissions`.

## Native API version 1

The public API is available to the native background module through these namespaces:

| Namespace | Capability | Required permission |
| --- | --- | --- |
| `runtime` | Read manifest, extension, platform, and version information | None |
| `storage.local` | Get, set, remove, or clear local extension data | `vast.storage` |
| `tabs` | Query normal web tabs and subscribe to tab events | `vast.tabs.read` |
| `tabs` | Create, navigate, reload, activate, or close normal web tabs | `vast.tabs.write` |
| `theme` | Apply or clear a validated theme overlay | `vast.theme` |
| `toolbar` | Create, update, and remove toolbar actions | `vast.toolbar` |
| `sidebar` | Add or remove a sandboxed side-panel page | `vast.sidebar` |
| `commands` | Register commands and receive command events | `vast.commands` |
| `contextMenus` | Add page-menu actions and receive click events | `vast.contextMenus` |
| `notifications` | Show a bounded notification in Vast | `vast.notifications` |

Tab access covers normal web tabs; it does not expose private or ephemeral workspace sessions. Contributions and inputs are validated and bounded by Vast, so extensions should handle rejected values and unavailable shortcuts.

### Minimal background module

```js
const info = await vast.runtime.getExtensionInfo();
const tabs = await vast.tabs.query({ active: true });

await vast.storage.local.set({
  lastActiveUrl: tabs[0]?.url ?? null,
  recordedBy: info.name,
});
```

This example requires `vast.storage` and `vast.tabs.read`. Request `vast.tabs.write` only if the extension actually changes tab state.

## Compatibility status

Vast reports extension compatibility as **Good**, **Partial**, or **Unsupported configuration**. Do not assume that successful installation means every Chrome extension API used by the package exists or behaves identically.

## Permissions

Treat two permission layers separately:

1. **Chrome / website access** — browser permissions and host permissions declared by the extension.
2. **Vast permissions** — explicitly reviewed access to supported Vast integration capabilities.

A Vast integration does not receive all native capabilities by default. Requested permissions are visible to the user and can be granted or revoked individually.

## Updates and permission escalation

If an update requests additional access, Vast can hold the update for user review while the installed version remains active. Extension updates should therefore avoid unnecessary permission expansion.

## Local packages

Vast can inspect a local extension package before installation and present requested access and publisher/trust information. A local package is not automatically equivalent to a verified catalog package.

## Design guidance

Extensions should:

* request the narrowest permissions they need;
* handle partial compatibility cleanly;
* avoid assuming access to private workspace sessions;
* never depend on undocumented privileged channels;
* disclose meaningful website access;
* tolerate being disabled, reloaded, or updated;
* treat temporary/private contexts as restricted unless explicitly supported.

## Publishing

Catalog/publisher workflows can evolve independently of the browser runtime. Build extensions against the documented public permission surface rather than implementation details found by inspecting internal application code.
