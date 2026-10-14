---
title: "Vast Labs"
description: "Enable optional experimental tools and understand their feature gates and data behavior."
---

Vast Labs contains experimental features with individual controls and a narrower compatibility envelope than normal browsing.

Fresh onboarding selects individual Labs through `DEFAULT_DATA.settings.labs`. The generic `DEFAULT_SETTINGS.labs` fallback remains fail closed. The global `labs.enabled` field does not gate individual features: review each feature switch in Settings rather than assuming a master switch controls availability.

Turning a Labs feature off hides and blocks it, but does not automatically delete its local data.

## Video & Audio

A local media utility for editing, converting, recording, and downloading video or audio. It runs as a bundled local service and is presented inside Vast.

## Network Devices

Discovers devices on your local network. It can identify cast targets, audio devices, TVs, routers, printers, NAS systems, computers, smart-home devices, and local web panels.

Discovery is user-triggered. Active probing is separately disabled by default.

## Automation

Creates local macros from a limited set of visible browser actions. The current automation model is deliberately constrained and does not provide arbitrary shell execution or arbitrary page-script injection.

## Password Manager (retired)

The built-in vault and `vast://passwords` are retired in 0.5.0. See [external password-manager guidance](/labs/password-manager/).

## Advanced Diagnostics

Shows deeper local runtime and site-data information for troubleshooting.

## Spoofing tools

Best-effort controls for user agent, languages, timezone, Do Not Track, hardware-exposed values, WebGL identity, and fixed geolocation.

These controls are experimental and should not be treated as perfect anonymity tools.
