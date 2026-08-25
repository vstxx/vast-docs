---
title: "Installation & Updates"
description: "Supported platforms, release packages, profile locations, updates, and release authenticity."
---

## Supported release target

Windows x64 is Vast's actively tested packaged release target. The project contains build targets for macOS and Linux, but those platforms are not release-supported at the same level in the current beta.

## Windows packages

Vast can be packaged as:

* a normal Windows installer;
* a portable Windows build.

The installer allows the application installation directory to be changed. Application files and user profile data are separate: changing where Vast is installed does not automatically move your browser profile.

## Current public beta

Vast `0.2.5` Public Beta was published for Windows x64 on 25 August 2026.

* [Download the installer](https://github.com/vstxx/vast-public/releases/download/v0.2.5/Vast-Setup-0.2.5.exe)
* [Download the portable build](https://github.com/vstxx/vast-public/releases/download/v0.2.5/Vast-0.2.5-Portable.exe)
* [Open the complete release and verification files](https://github.com/vstxx/vast-public/releases/tag/v0.2.5)

:::caution[Unsigned public beta]
This release is intentionally not Authenticode-signed. Windows displays **Unknown publisher**, and SmartScreen may warn. Download it only from the Vast website or the `vstxx/vast-public` release, then compare its hash with the published `SHA256SUMS.txt` or `SHA512SUMS.txt` before running it.
:::

## User data location

On a standard installed Windows profile, Vast normally uses Electron's application-data location, typically:

```
%APPDATA%\Vast
```

If you choose a custom data directory from Settings, Vast uses the selected profile root after validation and restart.

## Updating Vast

Vast's update path treats application runtime files and browser-profile data separately. Before an update restart, persistent browser sessions are asked to flush relevant local browser state.

Normal update handling is not intended to delete your profile. Important local data is protected by backup/recovery behavior around update operations.

:::caution
An application update is not the same operation as **Clear cookies/site data on exit**. An updater restart should not be interpreted as a user-requested privacy cleanup.
:::

## Release authenticity

Use official Vast release artifacts. Do not assume that a locally built executable, fork, repackaged installer, or third-party mirror has the same release verification, dependency set, or security posture as the published Vast build.

The public release includes checksums, exact-source metadata, updater metadata, dependency provenance, and FFmpeg corresponding source. The absence of an Authenticode signature in `0.2.5` is intentional and is recorded in the release metadata; it must not be mistaken for a signed release.

## Portable builds

Portable application packaging does not automatically mean every piece of browser state is portable between Windows accounts or machines. Credentials and website sessions may rely on OS-backed encryption; see **Data, Backup & Migration**.
