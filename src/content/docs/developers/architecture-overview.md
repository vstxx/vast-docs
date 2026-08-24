---
title: "Architecture Overview"
description: "A public conceptual overview of Vast’s interface, web-content, session, and storage boundaries."
---

Vast is an Electron desktop browser shell around Chromium page rendering and a React application interface.

<div class="architecture-map" role="img" aria-label="Vast interface connects through an isolated application boundary to the main process, which owns local data, browser sessions and operating-system capabilities. Sandboxed web content connects separately to websites and services.">
  <div class="architecture-map__node"><strong>Vast interface</strong><span>Tabs, workspaces, Settings and local tools</span></div>
  <span class="architecture-map__arrow" aria-hidden="true">→</span>
  <div class="architecture-map__node"><strong>Application boundary</strong><span>Context-isolated, narrow and unavailable to normal websites</span></div>
  <span class="architecture-map__arrow" aria-hidden="true">→</span>
  <div class="architecture-map__branches">
    <div class="architecture-map__node"><strong>Local profile</strong><span>Vast-owned data and feature state</span></div>
    <div class="architecture-map__node"><strong>Browser sessions</strong><span>Workspace identity and network route</span></div>
    <div class="architecture-map__node"><strong>OS capabilities</strong><span>Dialogs and explicitly requested local actions</span></div>
  </div>
</div>

## Main process

The main process owns privileged application behavior such as windows, browser sessions, storage boundaries, downloads, native dialogs, data migration, optional local services, and operations that should not be directly available to web content.

## Application boundary

The application renderer communicates with privileged functionality through a narrow, context-isolated bridge.

Normal websites do not receive that application bridge.

## Renderer

The renderer contains the visible Vast interface: browser chrome, tabs, workspaces, Settings, New Tab, local tools, extension UI, and internal `vast://` pages.

## Web content

Websites run as untrusted web content in sandboxed browser views. A site loaded in a Vast tab is not treated as part of the Vast application simply because it is displayed inside the same window.

## Sessions and workspaces

Workspace identity settings decide whether a browser session is isolated and persistent, temporary, or shared for compatibility. Proxy routing is attached to the workspace identity rather than being only a cosmetic workspace property.

## Shared model

Shared TypeScript definitions describe persisted browser state and contracts for tabs, groups, workspaces, permissions, notes, downloads, macros, network devices, extension metadata, optional feature state, and user settings.

## Storage boundary

Vast-owned profile data is accessed through the application boundary rather than allowing normal websites to read or write arbitrary browser files.

## Optional local runtimes

Some Labs features have their own local runtime or OS capability. They remain separate from ordinary website privilege. Displaying a local tool inside Vast does not automatically grant that tool unrestricted access to the browser.

## Security note

This diagram is deliberately conceptual. Detailed privileged-channel names, signing logic, service topology, key material, anti-abuse controls, and private deployment mechanics are outside the scope of public documentation.
