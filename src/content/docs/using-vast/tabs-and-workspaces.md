---
title: "Tabs & Workspaces"
description: "Manage tabs, groups, split view, workspace identities, private contexts, and network routes."
---

Tabs and workspaces are the center of Vast. A workspace is not just a visual group: it can carry its own browsing identity and routing policy.

## Tabs

Vast supports:

* normal tabs;
* pinned tabs;
* tab groups;
* tab reordering;
* recently closed tabs;
* duplicate tab;
* mute state;
* per-tab zoom;
* split view;
* sleeping and discarded tabs;
* crash state and recovery.

## Tab lifecycle

A tab can be active, sleeping, discarded, or crashed.

**Sleeping** reduces background activity while keeping the tab recoverable. **Discarded** releases more memory and reloads when revisited. Vast can apply these transitions automatically based on inactivity and memory settings.

Pinned tabs can optionally be kept awake.

## Smart Unload

Smart Unload lets you inspect memory-related tab state and manually sleep or discard inactive tabs. Automatic thresholds are configurable in Advanced settings.

The memory target is best-effort, not a guaranteed process-wide RAM ceiling.

## Split view

Split view displays two tabs side by side. It is useful for research, comparison, writing, dashboards, and any workflow where switching tabs repeatedly is slower than viewing both at once.

## Workspaces

Each workspace has:

* a name;
* icon and color;
* its own active tab;
* an optional private flag;
* a session identity policy;
* a network route policy.

## Workspace identity modes

**Isolated and persistent** keeps a dedicated persistent browser session for that workspace.

**Temporary** uses an ephemeral browsing session intended for disposable or private work. Temporary workspace state is not treated the same way as a normal restorable session.

**Shared legacy session** uses a common session context for compatibility.

## Workspace network routing

Each workspace can use:

* the system proxy;
* a direct connection;
* a custom fixed proxy.

Custom proxy and bypass rules apply to that workspace identity rather than globally to every workspace.

## Deleting a workspace

Vast can require confirmation before workspace deletion. This is recommended because deleting a workspace affects its tab organization and associated local state.

## More Tabs and restored sessions

When tabs no longer fit, open **More Tabs** to search by title or address, inspect tab state, switch to a result, or close an individual tab. In 0.3.0 its menu is placed above page content without colliding with neighboring browser controls.

Inactive restored tabs can remain discarded until visited, avoiding loading every saved page at startup. A discarded page reloads when activated; its unsaved in-page state may not survive. Keep important work saved and configure pinned-tab protection where appropriate.

Downloads retain their originating workspace identity. See [History & Downloads](/using-vast/history-and-downloads/) for retries, authentication, and temporary-session history.
