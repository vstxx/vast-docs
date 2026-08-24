---
title: "Privacy & Security"
description: "Understand Vast’s local-first data model, browser isolation, workspace identities, and security controls."
---

Vast is local-first and does not collect browsing telemetry.

Core browsing data remains on your device unless you explicitly use a feature that sends data elsewhere, such as visiting a website, using a network service, or exporting data yourself.

## Tracking and ad blocking

Vast supports:

* common tracker blocking;
* ad blocking;
* Standard, Strict, and Custom modes;
* EasyList;
* EasyPrivacy;
* Peter Lowe's list;
* a malware-oriented URL list;
* optional Polish annoyance filters;
* automatic filter updates;
* custom block rules;
* domain allowlists.

## Link cleaning

Vast can remove common tracking parameters from links while opening them. Affiliate parameter removal is a separate option because it can change referral attribution.

## Cookies

Vast can block third-party cookies, define cookie/login exceptions, clear selected site data on close, and clear broader cookies/site data on exit.

## Fingerprinting protection

Modes include Standard, Strict, and Maximum. Exceptions can be defined per domain.

Fingerprinting resistance is best-effort. No browser can promise that all websites see an identical fingerprint in every context.

## WebRTC privacy

Policies include:

* Public interface only
* Default compatibility
* Disabled

Exceptions can be created for sites that need full WebRTC behavior.

## History and local traces

Privacy controls can disable:

* browsing history;
* recently closed tabs;
* page text capture;
* favicons.

Vast can also use a temporary workspace by default for newly created workspaces.

## HTTPS-only mode

HTTPS-only mode prefers or requires secure connections where supported. Some legacy or local sites may need exceptions or may not work with strict HTTPS behavior.

## External protocol confirmation

Vast can ask before opening links that hand off to other applications.

## Download warnings

Potentially dangerous downloads can trigger additional warnings.

## Autofill confirmation

Password autofill can be configured to always require user confirmation.

## Security boundaries

Web content is isolated from Vast's privileged application APIs. Vast also restricts unsafe navigation and privileged browser behaviors. Implementation details that would meaningfully expose the attack surface are intentionally omitted from public documentation.
