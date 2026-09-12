---
title: "PDF Viewer"
description: "Open local and authenticated web PDF documents in Vast’s internal viewer with search, navigation, display, print, and download controls."
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

## Open a local or authenticated PDF

Open a local PDF with **Open with → Vast** in Windows, or drop a local PDF onto the address bar. The installer registers Vast as an available handler without changing your existing PDF default. Selecting a default is a separate Windows action.

For a PDF reached from a signed-in website, open it in the workspace where you are signed in. Vast loads the document using that session's authentication context and can recognize PDF responses whose URL does not end in .pdf. An expired link or a response containing a login page cannot be rendered as a PDF; sign in again or request a new link.

Saving a PDF uses Vast's download handling. The viewer's controls follow the current theme and global corner radius.
