---
title: "Feature Availability"
description: "Distinguish stable, experimental, Labs-gated, developer-only, and platform-dependent behavior."
---

Vast deliberately distinguishes stable features from opt-in and experimental surfaces.

:::note[Source verification]
This reference describes Vast Browser `0.5.0`. Feature gates and defaults can change in later releases; extension compatibility also depends on the particular extension.
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
| Video & Audio                               | Labs         | Review the individual switch for Video & Audio        |
| Network Devices                             | Labs         | Review the individual switch for Network Devices      |
| Automation                                  | Labs         | Review the individual switch for Automation           |
| Built-in Password Manager | Retired | Use an external extension |
| Advanced Diagnostics                        | Labs         | Review the individual switch for Advanced Diagnostics |
| Spoofing tools                              | Labs         | Review the individual switch for Spoofing             |
| Purist layout                               | Experimental | Enable Experimental features                |
| Deeper developer actions                    | Developer    | Enable Developer Mode                       |
| Experimental themes                         | Coming soon  | Not active in the current build             |

Native ad-block filter lists and Cat Addon are not available in 0.5.0. Content blocking beyond the built-in common-tracker policy is provided by an installed extension. Store and Portable update behavior differs from installed direct builds; see [Installation & Updates](/get-started/installation-and-updates/).

## What a Labs switch means

Fresh onboarding selects individual Labs through `DEFAULT_DATA`; the generic `DEFAULT_SETTINGS` fallback is fail closed. Global `labs.enabled` is not the effective gate. Each feature uses its own switch.

Turning a feature off hides and blocks it but does not automatically erase its local data.

## Why Vast does this

Experimental controls often have a narrower compatibility envelope, more complex local dependencies, or a higher support burden than normal browsing. Individual controls make feature status visible and let users disable features they do not need.
