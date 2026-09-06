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

Extension compatibility varies. Some Chrome APIs or complex extension assumptions may be partially supported or unsupported.

## Password portability

OS-backed encryption may prevent encrypted credentials from working after moving a profile to another machine or operating-system account.

## Website sessions

Cookies and browser session state are included in normal profile handling where possible, but website authentication sessions are not guaranteed to survive migration across computers.

## Experimental features

Labs features may change faster than the stable browsing surface. Their UI, storage model, or compatibility behavior can change between releases.
