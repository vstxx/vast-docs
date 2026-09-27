---
title: "Installation & Updates"
description: "Install Vast 0.3.0 on Windows and choose the correct update path for installer, Portable, and Microsoft Store."
---

## Current release

Vast **0.3.0** is the current direct Windows x64 release, published on **12 September 2026**. The previous direct release is 0.2.7. Read the [complete changelog](/releases/0-3-0/).

| Package | Use it for | Updates |
| --- | --- | --- |
| [Windows installer](https://github.com/vstxx/vast-public/releases/download/v0.3.0/Vast-Setup-0.3.0.exe) | A normal installed copy of Vast | Built-in background updates, or the direct standalone updater |
| [Portable](https://github.com/vstxx/vast-public/releases/download/v0.3.0/Vast-0.3.0-Portable.exe) | A separate portable copy | Download the newer Portable executable; close the old copy before replacing it |
| [Microsoft Store](https://apps.microsoft.com/detail/9MTWRJCKMDTX) | A Store-managed installation | Microsoft Store only |

The Store has a separate review and rollout. Its available version can lag the direct release; check the Store listing and your installed version. A development MSIX is not a Store submission or an official public package.

Windows x64 is the tested release target. macOS and Linux build targets do not imply equivalent release support.

:::caution[Unsigned direct binaries]
The installer, Portable, and standalone updater are intentionally not Authenticode-signed. Windows displays **Unknown publisher**, and SmartScreen may warn. Download only from Vast's official site or its public GitHub release and compare published checksums before running. This is separate from Microsoft Store signing and certification.
:::

## Install and choose defaults

Run the installer and choose the installation directory. Application files and your profile are separate; changing the installation directory does not move the profile.

Use **Settings → Search → Set browser as default** to open Windows default-app selection. The installer also makes Vast available in **Open with** for PDFs. It does not silently replace your chosen PDF default.

## Background updates for installed direct copies

Eligible packaged direct installations check for updates shortly after startup. When an update is available, Vast downloads it in the background and verifies it before preparing installation for the next launch.

Close Vast normally and reopen it to apply a prepared update. An external helper waits for the old browser process before installing. Windows may require an elevation prompt for protected installation locations. If the handoff cannot start, Vast keeps the current version available; failed attempts are bounded rather than retried indefinitely.

The installation and profile are matched when preparing an update, including custom installation and data paths. Portable, renamed executables, unpacked copies, development builds, and Store installations do not use this normal installed-browser automatic path. Read the update status in Settings when automatic updates are unavailable.

## Standalone updater

The [Vast 0.3.0 standalone updater](https://github.com/vstxx/vast-public/releases/download/v0.3.0/VastUpdater-0.3.0.exe) downloads the public update manifest and verifies the update ZIP before replacing an existing direct installation's runtime. It is not a fresh-install package.

Close Vast and use the updater for an existing direct installation. If installation detection fails, review the log and the updater's explicit installation-path option instead of pointing it at a profile directory.

**Do not use this executable for Microsoft Store/MSIX or Portable.** A Store package must be updated by Microsoft Store. The standalone executable does not provide a Store migration or a dedicated MSIX-detection guarantee.

A 404 for the version's public manifest means that release URL is unavailable. A private release candidate is not a public update feed. See [Troubleshooting](/developers/troubleshooting/).

## Portable updates

Close the portable browser, back up important data, and replace its executable with the new official Portable build. Keep its existing portable data directory. Do not run the installed-browser updater against the temporary extracted runtime of a portable executable.

Portable data can still contain OS-encrypted credentials and cookies that will not decrypt under another Windows account or on another computer.

## Profile data and channel changes

Installed direct and Store builds normally use %APPDATA%\Vast; a custom data root selected in Settings takes precedence after restart. Portable builds use their separate portable location. Use **Settings → Data → Open data folder** to identify the profile actually in use.

Normal updates preserve profile data. Back up important data before a channel switch, close every Vast instance, and confirm the active profile after opening the other installation. Sharing a default path is not a guarantee that encrypted website sessions survive every migration or downgrade. See [Data, Backup & Migration](/privacy/data-backup-and-migration/).

## Verify a download

The [release assets](https://github.com/vstxx/vast-public/releases/tag/v0.3.0) include SHA-256/SHA-512 lists, source provenance, update metadata, and FFmpeg corresponding source.

For example, compute a local installer hash in PowerShell:

~~~powershell
Get-FileHash .\Vast-Setup-0.3.0.exe -Algorithm SHA256
~~~

Compare it with the matching installer entry in [SHA256SUMS.txt](https://github.com/vstxx/vast-public/releases/download/v0.3.0/SHA256SUMS.txt). Do not run a file with a mismatching hash. The [full update ZIP](https://github.com/vstxx/vast-public/releases/download/v0.3.0/Vast-0.3.0-update.zip) is an updater payload, not an MSIX package.
