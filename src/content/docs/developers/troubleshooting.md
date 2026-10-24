---
title: "Troubleshooting"
description: "Resolve common startup, browsing, data, extension, Labs, media, network, and update problems."
---

## A site is broken after changing privacy settings

Temporarily test the site with stricter controls relaxed one at a time: the content-blocking extension’s per-site setting, third-party cookie policy, fingerprinting mode, WebRTC policy, or force-dark website styling. Prefer a narrow site exception over globally weakening a protection that works elsewhere.

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

Review the individual feature switch in Settings. Fresh onboarding selects individual Labs, but migrated choices and the fail-closed generic fallback can differ. Global `labs.enabled` does not gate individual features. Some controls also require Experimental features or Developer Mode instead of Labs.

## Network Devices finds nothing

Confirm the feature is enabled, trigger a scan manually, allow the OS firewall prompt if appropriate, and check that you are on the same local network as the device. Active probing is off by default and should not be required for every device type.

## The built-in Password Manager is missing

It is retired in 0.5.0, including `vast://passwords`. Use an external extension and its own unlock or recovery flow. Bitwarden, Proton Pass, and iCloud Passwords have smoke-test evidence only. See [Password Manager (retired)](/labs/password-manager/).

## An extension does not work fully

Open Extensions and review its compatibility badge, runtime state, website permissions, Vast permissions, and update state. Partial compatibility usually means the extension expects an API or environment Vast does not fully provide. A Manifest V2 extension that blocks web requests stays installed but is not loaded on the current browser engine; its card says so. Use its Manifest V3 version if one exists.

## A custom shortcut does not work

Reset it to the default, then test a different key combination. The operating system or another application can intercept global combinations.

## A backup imports but logins are missing

Browser cookies and encrypted credentials can be machine/account-bound. A successful profile import validates the archive; it does not guarantee cross-machine decryption or server-side session validity.

## Reporting a bug

Include the Vast version, platform, clear reproduction steps, expected behavior, actual behavior, and the least-sensitive diagnostic information needed to reproduce the issue. Security vulnerabilities should use the project's private reporting path rather than a normal public issue.

## A downloaded file is missing from the side panel

Confirm you are running the current direct release, 0.5.5. The download fixes introduced in 0.3.0 cover workspaces created early at startup and recover active records after an interface reload. Inspect the Downloads panel and the chosen filesystem location separately. Temporary-session records are not durable history, and clearing a record does not delete its file.

## Retry fails for a signed-in download

Return to the original workspace, verify that the website is still signed in, and request a fresh download link. An expired URL or destroyed private session cannot be repaired by switching to another workspace's cookies.

## The standalone updater returns 404

The updater needs its version's public GitHub manifest and ZIP. A private candidate is not a public update feed. Check the [official release](https://github.com/vstxx/vast-public/releases/tag/v0.5.5), network access, and the URL shown in its log. A pre-publication `stable-v2.yml` 404 should clear after restarting against the public release. Do not replace a failed download with a file from an untrusted mirror.

## I installed Vast from Microsoft Store

Use Microsoft Store to check for updates. The standalone direct updater cannot update an MSIX installation. A newer GitHub version can be available before Store certification completes.

## A prepared update does not install

Close every instance of that Vast installation normally, reopen it, and review any Windows prompt. Check the update status in Settings and preserve the log if the problem repeats. Portable, unpacked, and renamed copies do not use the normal installed-browser automatic update path. Avoid repeated manual changes to application files while Vast is running.

If Vast shows **Update could not finish**, another Vast process was still running, so the installer waited and changed nothing. Close every Vast window, check Task Manager for a leftover **Vast** process (end it, or restart Windows), then open Vast again to retry.

## Vast does not appear after an update

This affected 0.5.4, which was withdrawn: after its automatic update, Vast could keep running without a window, and opening it again did nothing. Restart Windows, or end **Vast** in Task Manager, then open Vast. It updates to 0.5.5, which always shows its window after an update.

## Purist or a menu does not respond

Confirm you are running the current direct release, 0.5.5. Try Ctrl/Cmd+L and test the Horizontal layout to isolate the issue. Report the layout, display scaling, window size, and exact control. The relevant Purist hit-testing and More Tabs/context-menu fixes were introduced in 0.3.0.
