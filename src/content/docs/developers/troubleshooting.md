---
title: "Troubleshooting"
description: "Resolve common startup, browsing, data, extension, Labs, media, network, and update problems."
---

## A site is broken after changing privacy settings

Temporarily test the site with stricter controls relaxed one at a time: ad blocking mode, third-party cookie policy, fingerprinting mode, WebRTC policy, or force-dark website styling. Prefer a narrow site exception over globally weakening a protection that works elsewhere.

## A website will not stay signed in

Check:

1. whether the workspace is Temporary;
2. third-party cookie blocking;
3. cookie/login exceptions;
4. clear-on-close rules;
5. clear-cookies-on-exit behavior;
6. whether you migrated the profile to another OS account or machine.

## A tab keeps reloading when I return to it

It may have been discarded to release memory. Review the memory target, hibernate timer, discard timer, and **Keep pinned tabs awake** setting.

## A Labs page is missing

Enable **Advanced → Enable Vast Labs**, then enable the individual feature in the Labs section. Some controls also require Experimental features or Developer Mode instead of Labs.

## Network Devices finds nothing

Confirm the feature is enabled, trigger a scan manually, allow the OS firewall prompt if appropriate, and check that you are on the same local network as the device. Active probing is off by default and should not be required for every device type.

## Password Manager is empty after launch

The vault starts locked. Unlock it first. If encryption is unavailable or the profile was moved across machines/accounts, review the portability notes in **Password Manager** and **Data, Backup & Migration**.

## An extension does not work fully

Open Extensions and review its compatibility badge, runtime state, website permissions, Vast permissions, and update state. Partial compatibility usually means the extension expects an API or environment Vast does not fully provide.

## A custom shortcut does not work

Reset it to the default, then test a different key combination. The operating system or another application can intercept global combinations.

## A backup imports but logins are missing

Browser cookies and encrypted credentials can be machine/account-bound. A successful profile import validates the archive; it does not guarantee cross-machine decryption or server-side session validity.

## Reporting a bug

Include the Vast version, platform, clear reproduction steps, expected behavior, actual behavior, and the least-sensitive diagnostic information needed to reproduce the issue. Security vulnerabilities should use the project's private reporting path rather than a normal public issue.
