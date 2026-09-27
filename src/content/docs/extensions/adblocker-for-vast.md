---
title: "Adblocker for Vast"
description: "Optional first-party content blocker installed from the Vast Extensions catalog with fully local filter matching."
---

Adblocker for Vast is an optional content-blocking extension. It is not built into the browser: it installs from the Vast Extensions catalog through the same review, signing, and update flow as any other extension, and removing it removes its engine, lists, and data completely.

Install it from **Extensions** in Vast (Explore view), or browse the [Extensions catalog](https://extensions.vastbrowser.com/explore?category=privacy) on the web. It requires a Vast build with extension network-provider support — `0.2.7` or newer, including the current `0.3.0` release. Older builds show an explicit compatibility error instead of installing it.

In 0.3.0 the former native ad-block engine and its Settings controls are removed. Install this extension if you want filter-list and cosmetic blocking. It is not installed automatically by a browser upgrade, and old native lists or allowlists do not automatically migrate into its configuration.

## What it does

* Filters network requests (ads, trackers) and applies cosmetic filtering that hides page elements left behind by blocked requests.
* Runs after Vast's built-in privacy protections — the browser's own blocking always takes precedence.
* Keeps counters of blocked requests per persistent workspace.

The filter engine, compiled caches, and statistics are stored in the extension's own local storage. Nothing is uploaded.

## Filter lists

Lists download only from four fixed HTTPS sources, at most once per day, and only for lists you have enabled:

* EasyList (enabled by default)
* EasyPrivacy (enabled by default)
* uBlock Origin filters
* Fanboy's Cookie Notices

Bundled offline copies work from the first launch. A failed or interrupted list update keeps the previously working filters. Custom list URLs are not supported.

## Settings

The extension's options page provides:

* global and per-site enable/disable, including subdomains;
* a cosmetic-filtering toggle;
* custom filters and an allowlist with import/export;
* an element picker with preview and confirmation before an element is hidden;
* blocked-request counters.

## Privacy

Matching happens entirely on your device. The only network requests the extension makes are downloads of your enabled filter lists from the sources above — list publishers can see ordinary connection metadata for those downloads. Browsing history, page contents, request data, statistics, analytics identifiers, and telemetry are never transmitted.

The listing is declared as local processing only, and the extension cannot declare remote processing services under that policy.

## Behavior notes

* Activation is asynchronous: pages whose resources loaded before the extension was ready should be reloaded once, and CSP-level changes also require a reload.
* Private and ephemeral workspaces never load extensions, so they are not filtered.
* Requests without an owned page identity — including some background service-worker traffic — bypass extension filtering.
* Browser-level blocks and blocks from other extensions are not included in this extension's counters.

## Limitations

* No tracker-category breakdown; counters are plain totals.
* Page scriptlets, non-native procedural selectors, and response-body rewriting are unsupported. Unsupported custom rules fail individually without disabling working filters.
