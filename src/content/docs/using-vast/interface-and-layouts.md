---
title: "Interface & Layouts"
description: "Understand Horizontal, Vertical, and Purist layouts, plus side panel and appearance behavior."
---

Vast separates the browsing engine from the surrounding browser chrome. The page renderer stays Chromium-based while the visible browser interface can be rearranged extensively.

## Horizontal layout

The default layout uses a familiar top-oriented browser chrome. Tabs, navigation, address controls, bookmarks, workspace controls, and window actions are arranged across the top.

It is the safest choice if you want Vast to feel close to a conventional browser while keeping Vast-specific tools. Every tab stays in the strip, which scrolls once tabs reach their minimum width; see [Tabs & Workspaces](/using-vast/tabs-and-workspaces/).

## Vertical layout

Vertical mode moves tab organization into a sidebar-style layout. It is better for large tab counts, named groups, pinned tabs, and users who prefer reading titles rather than squeezing many tabs into a narrow strip. Collapsed, the sidebar shows workspaces, tabs, and the New workspace and New tab buttons as uniform compact tiles.

## Purist layout

Purist is experimental and only appears while **Experimental features** is enabled.

It turns the browser chrome into a floating Topbar Island over the page. The island stays compact until you interact with navigation, change tabs, load a page, or focus the address bar. It then expands and collapses again when idle.

Disabling Experimental features while Purist is active returns Vast to Horizontal automatically.

## Appearance controls

Settings exposes detailed visual tuning, including:

* dark, dim, light, and system themes;
* primary and secondary accent colors;
* background and surface tints;
* corner radius;
* background blur behind dialogs, plus transparency and frost for surfaces that float over pages;
* glow, border, shadow, gradient, panel opacity, and saturation intensity;
* compact or comfortable density;
* animations and opening animation;
* opening sound volume;
* optional force-dark behavior for websites;
* Visual Profiles, which save, share, and switch the whole Appearance page.

These settings affect the browser interface. Website rendering remains controlled by the site and Chromium unless you explicitly enable website darkening.

## Side panel

The side panel can show local Notes, Bookmarks, History, Downloads, and Reading List. Toggle visibility using the button beside the address bar or Ctrl/Cmd+B. Unpinned, it docks beside the page. Use the pin control beside its title to keep it over the page; the pinned side panel can be dragged and its position is saved. The vertical layout's tab list is called the sidebar.

You can also change its width and whether labels are shown.

## Bookmarks bar

The bookmarks bar can be always visible, hidden, or shown only on New Tab.

## Fullscreen

Press plain **F11** to toggle browser fullscreen from the browser interface or website content. This browser command is separate from a website's fullscreen permission.

## Reduced effects

Vast respects reduced-motion and reduced-transparency behavior. Visual effects should degrade without removing the underlying controls.

## Changes in 0.3.0

Purist's address bar and embedded navigation buttons now respond correctly to pointer input. Use Ctrl/Cmd+L to focus the omnibar from the keyboard. Purist remains experimental.

Corner radius now controls rounded Vast-owned surfaces consistently, including menus; Settings and Notes use calmer effects and consistent Dim backgrounds. See [Appearance Reference](/customization/appearance-reference/).
