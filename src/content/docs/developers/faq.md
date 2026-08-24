---
title: "FAQ"
description: "Answers to common questions about local data, workspaces, proxies, extensions, passwords, and Labs."
---

## Does Vast sync my browsing data to an account?

No built-in cloud sync is part of the current documented product surface. Core Vast browser data is local-first.

## Does Vast collect browsing telemetry?

No. Vast does not collect browsing history, URLs, searches, tabs, or similar browsing telemetry as product analytics.

## Can I use different logins in different workspaces?

Yes. Use isolated persistent workspaces to keep separate browser sessions.

## Can a workspace use its own proxy?

Yes. A workspace can use the system route, direct connection, or a custom fixed proxy.

## Is Private Workspace the same as deleting all traces?

No browser should make that promise. Temporary workspaces reduce persistence inside Vast, but websites, networks, the operating system, downloads, and external services can still observe activity.

## Can I move my Vast profile?

Yes. Use Settings → Data to change the data directory or create a full `.vastbackup` export.

## Are extensions supported?

Yes, with compatibility varying by extension. Vast can also support Vast-specific extension permissions.

## Can Vast store passwords?

Yes, through the Password Manager Labs feature. Password secrets are stored locally using OS-backed encryption where available.

## Does Automation run arbitrary scripts?

No. Current macros are constrained to a limited set of visible browser actions.

## Can Network Devices scan the internet?

No. It is designed for local/private network discovery, not public-IP scanning.

## Why is a feature missing?

Check whether Vast Labs, the individual feature switch, Experimental features, or Developer Mode is required. Some entries are deliberately hidden until their parent capability is enabled.
