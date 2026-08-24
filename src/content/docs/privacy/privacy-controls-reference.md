---
title: "Privacy Controls Reference"
description: "A practical reference for blocking, cookie, fingerprinting, WebRTC, history, and clear-on-exit controls."
---

This page explains the purpose and trade-offs of every major user-facing privacy control.

## Blocking

| Control                  | Purpose                                      | Compatibility note                                |
| ------------------------ | -------------------------------------------- | ------------------------------------------------- |
| Block common trackers    | Stops recognized tracking requests           | Some analytics-dependent site functions can break |
| Ad blocker               | Blocks advertising requests/content patterns | Publisher sites may detect blockers               |
| Standard mode            | Strong default balance                       | Recommended baseline                              |
| Strict mode              | More aggressive blocking                     | Higher breakage risk                              |
| Custom mode              | Uses your selected categories/rules          | Quality depends on configuration                  |
| EasyList                 | General ad rules                             | Broad web coverage                                |
| EasyPrivacy              | Privacy/tracker rules                        | Can affect embedded services                      |
| Peter Lowe's list        | Additional ad/tracker host rules             | Complements larger lists                          |
| Malware list             | Blocks known malicious destinations/patterns | Not a substitute for endpoint security            |
| Polish Annoyance Filters | Optional Polish nuisance filtering           | Off by default                                    |
| Auto-update lists        | Refreshes filter data                        | Recommended unless troubleshooting                |
| Custom rules             | User-authored blocking/exceptions            | Incorrect syntax can overblock                    |
| Allowlist                | Bypasses blocking for selected domains       | Use narrowly                                      |

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
