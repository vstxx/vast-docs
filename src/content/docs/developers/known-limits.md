---
title: "Known Limits"
description: "Current limitations for platforms, storage, reader behavior, automation, extensions, and portability."
---

Some capabilities are intentionally conservative in the current release.

## Platform support

Windows x64 is the actively tested packaging target. macOS and Linux build targets exist but are not release-supported at the same level.

## Storage

The current primary Vast-owned application state uses JSON-based storage. More advanced database-backed storage may appear later, but should not be assumed today.

## Reader mode

Reader/focus behavior is not a full semantic article extraction engine in the current release.

## Automation

Some automatic trigger types are visible in the macro model but remain inactive in the current safe mode.

## Spoofing

Fingerprint and identity spoofing is best-effort and cannot guarantee that every script observes a perfectly uniform environment.

## Extensions

Extension compatibility varies. Some Chrome APIs or complex extension assumptions may be partially supported or unsupported. The Chrome Web Store can be browsed inside Vast and extensions installed with **Install in Vast** or a pasted listing URL. Manifest V2 extensions that block web requests stay installed but are not loaded on the current browser engine. Extensions do not run in private/ephemeral sessions. Password-manager evidence covers smoke tests only.

## Password portability

OS-backed encryption may prevent encrypted credentials from working after moving a profile to another machine or operating-system account.

## Website sessions

Cookies and browser session state are included in normal profile handling where possible, but website authentication sessions are not guaranteed to survive migration across computers.

## Experimental features

Labs features may change faster than the stable browsing surface. Their UI, storage model, or compatibility behavior can change between releases.

## Distribution and update limits in 0.5.5

The direct Windows release is intentionally unsigned. Store certification and availability are separate from GitHub publication. The direct standalone updater does not update Microsoft Store/MSIX or Portable installations.

The installed 0.4.2 automatic updater can fail during the next-start installer handoff. Its legacy feed stays pinned to 0.4.2; install 0.5.5 manually once to receive future automatic updates through the new feed. Direct and Store installations have separate default profile roots.

An update installs only after every Vast process has closed; otherwise it waits for the next start and changes nothing. 0.5.4 was withdrawn on the day it was published: after its automatic update, Vast could keep running without showing a window. If that happened, restart Windows or end Vast in Task Manager, then open Vast; it updates to 0.5.5.

Extensions, including Adblocker for Vast, do not run in private or temporary workspaces. A private download's saved file can remain on disk even though its history is not persisted. Retrying a download cannot restore expired authentication or a destroyed temporary session.

Smart Unload targets are best-effort. Discarded tabs reload when opened; do not rely on them to preserve unsaved website state.
