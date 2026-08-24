---
title: "Spoofing Tools"
description: "Configure the Labs-gated, best-effort browser identity and location controls."
---

Spoofing is an experimental Vast Labs feature for adjusting selected browser-exposed identity values.

:::caution
Spoofing is **best-effort**, not an anonymity guarantee. Websites can combine many signals, timing observations, account state, network address, behavior, and server-side data that these controls do not change.
:::

## Browser profile

Built-in profiles include:

* Chrome on Windows
* Chrome on macOS
* Firefox on Windows
* Safari on macOS
* Custom user agent

## Exposed values

The tool can configure:

* preferred languages;
* timezone;
* Do Not Track;
* custom user agent;
* reported CPU-core count;
* reported device memory;
* maximum touch points;
* WebGL vendor;
* WebGL renderer.

## Location

Location spoofing can be off or set to fixed coordinates with an accuracy value.

A fixed browser geolocation value does not change your network IP address and therefore does not make network geolocation disappear.

## Reset

**Reset spoofing** restores the feature's default profile values.

A convenience Warsaw profile exists in the current settings surface for quickly applying a coherent local test identity.

## When to use it

Useful cases include privacy experimentation, QA, locale testing, compatibility testing, and comparing site behavior under different exposed profiles.

Do not rely on it to impersonate a trusted device or bypass a service's security controls.
