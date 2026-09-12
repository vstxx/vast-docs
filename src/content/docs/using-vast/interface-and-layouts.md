---
title: "Interface & Layouts"
description: "Understand Horizontal, Vertical, and Purist layouts, plus side panel and appearance behavior."
---

Vast separates the browsing engine from the surrounding browser chrome. The page renderer stays Chromium-based while the visible browser interface can be rearranged extensively.

## Horizontal layout

The default layout uses a familiar top-oriented browser chrome. Tabs, navigation, address controls, bookmarks, workspace controls, and window actions are arranged across the top.

It is the safest choice if you want Vast to feel close to a conventional browser while keeping Vast-specific tools.

## Vertical layout

Vertical mode moves tab organization into a sidebar-style layout. It is better for large tab counts, named groups, pinned tabs, and users who prefer reading titles rather than squeezing many tabs into a narrow strip.

## Purist layout

Purist is experimental and only appears while **Experimental features** is enabled.

It turns the browser chrome into a floating Topbar Island over the page. The island stays compact until you interact with navigation, change tabs, load a page, or focus the address bar. It then expands and collapses again when idle.

Disabling Experimental features while Purist is active returns Vast to Horizontal automatically.

## Appearance controls

Settings exposes detailed visual tuning, including:

* dark, dim, light, and system themes;
* primary and secondary accent colors;
* background and surface tints;
* graphite, midnight, aurora, violet, carbon, and frost background styles;
* corner radius;
* glass, blur, glow, border, shadow, gradient, opacity, and saturation intensity;
* compact or comfortable density;
* animations and opening animation;
* opening sound volume;
* optional force-dark behavior for websites.

These settings affect the browser interface. Website rendering remains controlled by the site and Chromium unless you explicitly enable website darkening.

## Side panel

The side panel can show local Notes, Bookmarks, History, Downloads, and Reading List. Depending on layout and settings it can behave automatically, dock to the window, or overlay the page.

You can also change its width and whether labels are shown.

## Bookmarks bar

The bookmarks bar can be always visible, hidden, or shown only on New Tab.

## Reduced effects

Vast respects reduced-motion and reduced-transparency behavior. Visual effects should degrade without removing the underlying controls.

## Changes in 0.3.0

Purist's address bar and embedded navigation buttons now respond correctly to pointer input. Use Ctrl/Cmd+L to focus the omnibar from the keyboard. Purist remains experimental.

Corner radius now controls rounded Vast-owned surfaces consistently, including menus and autofill; Settings and Notes use calmer effects and consistent Dim backgrounds. See [Appearance Reference](/customization/appearance-reference/).
