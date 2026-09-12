---
title: "Privacy Controls Reference"
description: "A practical reference for blocking, cookie, fingerprinting, WebRTC, history, and clear-on-exit controls."
---

This page explains the purpose and trade-offs of every major user-facing privacy control.

## Blocking in 0.3.0

**Block common trackers** remains a built-in browser setting. Test compatibility when a website depends on a blocked request.

The old native Ad blocker, Standard/Strict/Custom ad-block modes, list switches, custom filter rules, refresh action, and ad-block allowlist are no longer browser settings. Install [Adblocker for Vast](/extensions/adblocker-for-vast/) for filter-list and cosmetic blocking and manage those options in the extension.

The extension does not run in private or temporary workspaces. Browser cookie, fingerprinting, WebRTC, and tracking-parameter controls remain available independently.

## URL cleaning

**Clean tracking parameters** removes common campaign/tracking query parameters while opening links.

**Also remove affiliate parameters** is separate because referral parameters may support a creator, publisher, or partner and removing them changes attribution.

## Cookies

**Block third-party cookies** restricts cross-site cookie behavior.

**Cookie/login exceptions** preserve required behavior for selected domains.

**Clear site data on close** targets configured domains.

**Clear cookies/site data on exit** is broader and can sign you out across sites.

## Fingerprinting

* **Standard** targets commonly abused fingerprinting surfaces while prioritizing compatibility.
* **Strict** applies stronger, stable per-site protections.
* **Maximum** aims for a more uniform exposed profile and has the greatest compatibility risk.

Domain exceptions exist because authentication, conferencing, graphics, and anti-fraud systems can depend on browser-exposed characteristics.

## WebRTC

* **Public interface only** limits network-interface exposure while retaining common calling functionality.
* **Default** favors compatibility.
* **Disabled** prevents WebRTC functionality entirely.

Vast ships with compatibility-oriented exceptions for common real-time communication services. You can review or change exceptions locally.

## Local traces

* **Disable history globally** — stop normal history recording.
* **Disable recently closed tabs** — stop maintaining the reopen list.
* **Disable page text capture** — prevent local page-text capture used by relevant local features.
* **Disable favicons** — stop storing/displaying site icons where that setting applies.
* **Make new workspaces temporary by default** — start new workspaces with ephemeral-session behavior.

## Fake browsing history

Fake history is an optional local-noise experiment, off by default. It does not hide network traffic, website logs, operating-system records, or actual history from an attacker that has another data source. Use it only if you understand that narrow purpose.
