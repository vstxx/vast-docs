---
title: "Network Devices"
description: "Run user-triggered discovery on local networks and manage saved device metadata."
---

Network Devices is a Vast Labs feature for local-network discovery.

## What it can discover

Vast can classify devices such as:

* Chromecast-style devices;
* AirPlay or audio endpoints;
* TVs;
* routers;
* printers;
* NAS systems;
* computers;
* smart-home devices;
* unknown devices with discoverable services.

## Discovery sources

Passive discovery can use local protocols such as mDNS and SSDP plus local network metadata. Active probing is a separate option and is disabled by default.

## User control

A scan only runs when you trigger it. Enabling the feature does not automatically begin scanning.

On Windows, the operating system firewall may ask for local-network permission the first time discovery runs.

## Device details

Vast can display names, aliases, addresses, manufacturer/model information, discovered services, possible web panels, source confidence, notes, favorites, and pinned state.

## Local web panels

If a device advertises a local web interface, Vast can open it as a normal browser tab after confirmation.

Local device panels may use HTTP or weak device-side security. Treat them as third-party interfaces.

## Scope

Network Devices is intended for private and link-local networks. It is not a public-internet scanner and is not designed for authentication attempts, brute force, or security testing.
