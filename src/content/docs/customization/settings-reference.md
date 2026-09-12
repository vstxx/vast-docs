---
title: "Settings Reference"
description: "A high-level map of the current Vast Settings surface and feature-gated sections."
---

This is the complete high-level map of the current Settings surface. Labs-gated sections appear only when the required feature is enabled.

## Appearance

| Setting                            | Purpose                                      |
| ---------------------------------- | -------------------------------------------- |
| Layout                             | Horizontal, Vertical, or experimental Purist |
| Theme                              | Dark, Dim, Light, System                     |
| Force dark mode on websites        | Best-effort dark styling for web content     |
| Background                         | Base chrome visual style                     |
| Accent color                       | Primary interface highlight                  |
| Secondary accent                   | Supporting highlight                         |
| Background tint                    | Main background tone                         |
| Surface tint                       | Panel/surface tone                           |
| Sidebar density                    | Comfortable or compact spacing               |
| Sidebar mode                       | Auto, docked, overlay                        |
| Sidebar width                      | Side-panel width                             |
| Sidebar labels                     | Show/hide labels                             |
| Corner radius                      | Interface roundness                          |
| Glassiness                         | Translucency effect strength                 |
| Blur                               | Backdrop blur strength                       |
| Glow                               | Highlight bloom                              |
| Borders                            | Surface outline strength                     |
| Shadow depth                       | Elevation strength                           |
| Gradients                          | Gradient intensity                           |
| Panel opacity                      | Side/local panel opacity                     |
| Chrome opacity                     | Browser-chrome opacity                       |
| Saturation                         | Interface color intensity                    |
| Animations                         | General motion                               |
| Opening animation                  | Startup animation                            |
| Opening sound                      | Startup audio volume                         |
| Bookmarks bar                      | Bar visibility                               |
| Show bookmarks bar only on New Tab | Restrict bar to New Tab                      |

## Advanced

| Setting                                | Purpose                                             |
| -------------------------------------- | --------------------------------------------------- |
| Compact UI density                     | Tighten general controls                            |
| Memory target (best effort)            | Resource-management target                          |
| Hibernate after minutes                | When inactive tabs enter sleep                      |
| Discard after minutes                  | When inactive tabs can unload more aggressively     |
| Keep pinned tabs awake                 | Exempt pinned tabs from normal inactivity unloading |
| Confirm before closing many tabs       | Bulk-close guardrail                                |
| Confirm before deleting workspace      | Workspace-deletion guardrail                        |
| Show advanced More actions             | Reveal deeper browser actions                       |
| Show internal pages in Command Palette | Include `vast://` destinations in search            |
| Experimental features                  | Enable experimental UI such as Purist               |
| Developer Mode                         | Enable development/troubleshooting controls         |
| Enable Vast Labs                       | Reveal opt-in Labs features                         |

## Labs

Individual switches exist for Video & Audio, Network Devices, Automation, Password Manager, Advanced Diagnostics, and Spoofing tools.

## Network

| Setting                       | Purpose                                            |
| ----------------------------- | -------------------------------------------------- |
| Enable Network Devices        | Enable local discovery capability                  |
| Allow local scans             | Remember scan confirmation preference              |
| Passive mDNS / SSDP discovery | Use passive local discovery                        |
| Active local probing          | Allow optional local host/service probes           |
| Remember devices              | Persist discovered-device metadata                 |
| Show raw metadata             | Expose deeper discovery details                    |
| Probe timeout                 | Per-probe waiting limit                            |
| Probe concurrency             | Parallel probing level                             |
| Include VPN adapters          | Include eligible VPN interfaces in discovery scope |
| Open Network Devices          | Navigate to the device inventory                   |
| Clear network cache           | Forget cached discovery state                      |

## Developer

Developer Mode, tab DevTools, active-webview reload, application-chrome reload, debug-report copying, Diagnostics access, diagnostic copying, and runtime version information for Vast, Electron, Chromium, and Node.

## Privacy

Built-in common-tracker blocking, tracking-parameter cleaning, optional affiliate-parameter removal, third-party cookie blocking, cookie/login exceptions, fingerprinting protection and exceptions, WebRTC policy and exceptions, leak-test shortcut, fake history, clear-on-exit, temporary-workspace default, history disable, Recently Closed disable, page-text capture disable, favicon disable, and site-data clearing.

The native ad-block engine and its filter-list controls were removed in 0.3.0. Configure filter lists, custom ad-block rules, and ad-block allowlists in the optional [Adblocker for Vast](/extensions/adblocker-for-vast/) extension. The privacy page groups normal controls in two columns and longer exception inputs below; narrower windows use the available width.

## Spoofing

Enable switch, browser profile, languages, timezone, Do Not Track, custom user agent, CPU cores, device memory, touch points, WebGL vendor, WebGL renderer, location mode, latitude, longitude, accuracy, reset, and the convenience Warsaw profile.

## Security

HTTPS-only mode, external-link confirmation, dangerous-download warnings, always-confirm-autofill, reset security settings, and permission defaults for camera, microphone, location, notifications, clipboard, and fullscreen.

## Site Data

Diagnostics/Site Data entry point, cached-site-data clearing, global permission defaults, per-site overrides, and revoke controls.

## Search

Default search engine, startup behavior, New Tab mode, compact dashboard cards, individual New Tab sections, restore previous session, hibernate inactive tabs, and default-browser integration.

## Automation

Automation page entry point, macro status/count, first-run convenience actions, and the local visible-action model.

## Workspaces

Create, rename, customize, delete, session identity, network route, proxy URL, and proxy bypass rules.

## Shortcuts

Edit the keyboard map or reset all shortcuts.

## Data

Active Vast data directory, open folder, change directory, clear history, Session Timeline, Password Manager entry point, full `.vastbackup` export/import, local JSON restore point, and backup/migration status reporting.
