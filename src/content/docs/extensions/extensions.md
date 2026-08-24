---
title: "Extensions"
description: "Install and manage Chrome-compatible, Vast-native, and hybrid extensions with separate permissions."
---

Vast supports an extension subsystem for Chrome-compatible website extensions and Vast-specific integrations.

Open it from the Command Palette or `vast://extensions`.

The Extensions page separates **Explore** (the Vast Extensions catalog) from **Installed** extensions. You can review an extension's source, compatibility, access, version, and current state before acting on it.

## Sources

Extensions can come from:

* Vast Extensions catalog;
* a local Vast extension package;
* an unpacked developer extension.

## Compatibility

Each extension can be marked as:

* Good compatibility
* Partial compatibility
* Unsupported configuration

Compatibility depends on the APIs and permissions the extension expects.

## Runtime types

An extension can use:

* Chrome-compatible runtime behavior;
* Vast Native integration;
* a hybrid of both.

## Permissions

Website permissions and Vast permissions are shown separately. Vast-specific integration permissions require explicit review and can be granted or revoked individually.

Updates that request additional access require approval before replacing the active version.

Vast excludes extensions from private and ephemeral workspace sessions. This restriction is part of workspace isolation, not a per-extension toggle.

## Developer Mode

Developer Mode enables development-oriented actions such as loading or reloading unpacked extensions and viewing additional installation details.

Do not use Developer Mode for extensions you do not trust.

## Private workspaces

Extensions are unavailable in private and ephemeral workspace contexts to preserve isolation.
