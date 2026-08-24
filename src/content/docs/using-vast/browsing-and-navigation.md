---
title: "Browsing & Navigation"
description: "Use the address bar, search shortcuts, navigation controls, zoom, printing, and site information."
---

Vast keeps normal browser navigation familiar while adding workspace-aware and command-driven controls around it.

## Address bar

The address bar accepts both URLs and search queries. If the input resolves to a safe web address, Vast navigates directly. Otherwise it sends the text to the selected search engine.

Use `Ctrl/Cmd+L` to focus the address bar from anywhere in the browser.

### Search-engine shortcuts

Prefix a query with a supported shortcut to route it directly:

| Shortcut | Engine       |
| -------- | ------------ |
| `g`      | Google       |
| `d`      | DuckDuckGo   |
| `b`      | Brave Search |
| `p`      | Perplexity   |
| `yt`     | YouTube      |
| `w`      | Wikipedia    |

Your normal default search engine is configured separately in Settings.

## Back, forward, and reload

Use the browser controls or:

* `Alt+Left` — Back
* `Alt+Right` — Forward
* `Ctrl/Cmd+R` — Reload

Developer Mode adds deeper reload options for the active webview and the Vast application chrome. Those are troubleshooting tools, not everyday refresh controls.

## Find in page

`Ctrl/Cmd+F` opens page search for the active tab.

## Zoom

Vast keeps zoom on the tab/site experience and provides the conventional shortcuts:

* `Ctrl/Cmd+Plus` — Zoom in
* `Ctrl/Cmd+Minus` — Zoom out
* `Ctrl/Cmd+0` — Reset zoom

## Print

`Ctrl/Cmd+P` prints the current page. PDF documents use the internal PDF viewer's own print capability and respect document permissions.

## Copy page information

The Command Palette can copy the current URL or current page title without selecting text in the page.

## Opening links

Normal `http` and `https` links open as web content. Links that request another application can be gated by **External link confirmation** in Security settings.

Vast deliberately restricts unsafe or privileged navigation schemes from normal page loads. The exact enforcement internals are not part of the public documentation.

## Site information

Site information can expose practical information such as the current origin, security state, locally observed storage, permissions, and Vast's local blocking counts for that site.

## Focus Mode

Focus Mode reduces surrounding interface distraction while keeping the active page usable. It can also be toggled by supported Automation macros.

## Reader behavior

The current reader/focus feature is a reversible reading-oriented presentation layer. It is **not** a full semantic article extraction engine, so complex pages may retain more of their original structure than dedicated article-extraction readers.
