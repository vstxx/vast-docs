---
title: "PDF Viewer"
description: "Open public PDF documents in Vast’s internal viewer with search, navigation, display, print, and download controls."
---

Vast includes an internal PDF viewer instead of depending entirely on the website's embedded viewer.

## Viewer controls

The viewer supports:

* page navigation;
* search;
* zoom presets and custom scale behavior;
* fit width and fit page;
* rotation;
* vertical, horizontal, wrapped, and single-page scrolling;
* spread modes;
* thumbnails;
* document outline;
* document metadata;
* copying when the document permits it;
* printing when the document permits it;
* downloading the PDF;
* opening supported external links.

## Password-protected documents

If a PDF requires a password, the viewer can request it through the PDF runtime.

## Document permissions

Vast respects document-level copy and print restrictions exposed by the PDF engine.

## Safety limits

Vast validates PDF input before rendering and applies bounded loading behavior. The exact internal validation pipeline is intentionally not documented here.
