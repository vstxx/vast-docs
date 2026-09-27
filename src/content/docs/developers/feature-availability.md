---
title: "Feature Availability"
description: "Distinguish stable, experimental, Labs-gated, developer-only, and platform-dependent behavior."
---

Vast deliberately distinguishes stable features from opt-in and experimental surfaces.

:::note[Source verification]
This reference was checked against the published Vast Browser `0.3.0` source and release. Feature gates and defaults can change in later releases.
:::

| Feature                                     | Status       | How it becomes available                    |
| ------------------------------------------- | ------------ | ------------------------------------------- |
| Web browsing and navigation                 | Available    | Always                                      |
| Tabs, groups, pinned tabs, split view       | Available    | Always                                      |
| Workspaces                                  | Available    | Always                                      |
| Multiple workspaces                         | Available    | Always                                      |
| Notes / Advanced Notes                      | Available    | Always                                      |
| Bookmarks, History, Downloads, Reading List | Available    | Always                                      |
| Session Timeline                            | Available    | Always                                      |
| Advanced import/export                      | Available    | Always                                      |
| Extensions                                  | Available    | Open Extensions                             |
| Extension network providers (content blocking) | Available from `0.2.7` | Install a network-provider extension such as Adblocker for Vast |
| Video & Audio                               | Labs         | Enable Vast Labs, then Video & Audio        |
| Network Devices                             | Labs         | Enable Vast Labs, then Network Devices      |
| Automation                                  | Labs         | Enable Vast Labs, then Automation           |
| Password Manager                            | Labs         | Enable Vast Labs, then Password Manager     |
| Advanced Diagnostics                        | Labs         | Enable Vast Labs, then Advanced Diagnostics |
| Spoofing tools                              | Labs         | Enable Vast Labs, then Spoofing             |
| Purist layout                               | Experimental | Enable Experimental features                |
| Deeper developer actions                    | Developer    | Enable Developer Mode                       |
| Experimental themes                         | Coming soon  | Not active in the current build             |

Native ad-block filter lists and Cat Addon are not available in 0.3.0. Content blocking beyond the built-in common-tracker policy is provided by an installed extension. Store and Portable update behavior differs from installed direct builds; see [Installation & Updates](/get-started/installation-and-updates/).

## What a Labs switch means

The master **Enable Vast Labs** switch reveals the Labs section. A feature still needs its own local switch before it becomes usable.

Turning a feature off hides and blocks it but does not automatically erase its local data.

## Why Vast does this

Experimental controls often have a narrower compatibility envelope, more complex local dependencies, or a higher support burden than normal browsing. Explicit gating prevents a fresh profile from feeling like a development console and makes feature status visible instead of implicit.
