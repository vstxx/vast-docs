---
title: "Data, Backup & Migration"
description: "Move the Vast data directory, create restore points, and export or import full Vast backups."
---

Vast stores its primary browser profile locally and keeps application installation files separate from user data.

## Default data directory

On a standard installed Windows profile, the default data root is normally:

```
%APPDATA%\Vast
```

A custom data root selected in Settings becomes the authoritative Vast/Chromium profile location after restart.

## What the profile can contain

The local profile includes Vast-owned state such as:

* workspaces, tabs, groups, pinned state, and active-tab state;
* bookmarks and folders;
* history and Recently Closed state;
* download metadata;
* Notes;
* Reading List;
* Quick Links and todos;
* site memory and UI preferences;
* Automation macros and logs;
* Session Timeline snapshots;
* recent/favorite Command Palette state;
* Settings and Labs choices;
* shortcuts;
* permission decisions;
* reader/focus preferences;
* spoofing preferences;
* optional local-feature state.

The same root also contains Chromium profile state where applicable, including cookies, Local Storage, IndexedDB, Session Storage, service workers, session data, and related browser state.

Sensitive local features can use separate files within the same profile boundary. Password secrets are OS-encrypted where supported.

## Open data folder

**Settings → Data → Open data folder** opens the current profile location in the system file manager.

Avoid manually editing live browser databases or state files while Vast is running.

## Change Vast data directory

When you choose another data directory, Vast:

1. asks for a target folder;
2. rejects unsafe locations such as filesystem roots, protected Windows directories, the active application installation directory, or locations inside the current data root;
3. creates a backup;
4. copies relevant profile data while skipping disposable caches;
5. records the new profile root;
6. restarts into it.

The previous data directory is left in place rather than being silently deleted.

## Full `.vastbackup` export

**Export all Vast data** creates a ZIP-formatted `.vastbackup` archive. A normal export contains:

* a machine-readable manifest with product/format metadata, checksums, included/excluded sections, and warnings;
* a human-readable migration note;
* exportable profile data.

The backup can include Vast state, local feature data, the encrypted password-vault file, and browser-profile state where present.

Disposable data such as ordinary browser caches, shader/GPU caches, crash scratch data, updater scratch data, and temporary folders is intentionally excluded.

## Full import

Import performs validation before switching profiles. Vast creates a pre-import backup of the current profile and imports into a separate data root rather than trying to destructively replace locked Chromium files in place.

The old profile remains available for rollback/recovery.

## Restore points

Vast can create local JSON restore points for Vast-owned state in addition to full `.vastbackup` migration archives. These serve different purposes: a restore point is lightweight state recovery; a full export is profile migration/backup.

## Password portability

The password vault uses operating-system-backed encryption where available. A backup can contain the encrypted vault, but encrypted secrets may not decrypt under another Windows account or on another machine.

Use Password Manager's explicit CSV export only when you intentionally need plaintext portability. Treat that CSV as a secret.

## Website-session portability

Cookies and browser session files can be backed up, but a website's login session is not guaranteed to survive a move. Browser encryption, server-side invalidation, device binding, or account security can all make a copied session unusable.

## What an update does not mean

Updating the Vast application is separate from moving/clearing your profile. Normal updater behavior is designed to preserve profile data rather than replace it with application files.
