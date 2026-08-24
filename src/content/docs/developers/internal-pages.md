---
title: "Internal Pages"
description: "Reference the user-facing vast:// pages and the feature gates that control them."
---

Vast uses `vast://` routes for browser-owned pages. They are part of the application UI, not ordinary websites.

| Route                     | Purpose                        | Availability                       |
| ------------------------- | ------------------------------ | ---------------------------------- |
| `vast://newtab`           | New Tab                        | Always                             |
| `vast://notes`            | Full-page local notebook       | Always                             |
| `vast://extensions`       | Extension manager/catalog      | Always                             |
| `vast://pdf`              | Internal PDF viewer            | When viewing supported PDF content |
| `vast://session-timeline` | Workspace snapshot history     | Always                             |
| `vast://site-data`        | Site-data view                 | Relevant settings/tools            |
| `vast://avidae`           | Video & Audio                  | Labs                               |
| `vast://passwords`        | Password Manager               | Labs                               |
| `vast://automation`       | Macro editor                   | Labs                               |
| `vast://network`          | Network Devices                | Labs                               |
| `vast://diagnostics`      | Advanced diagnostics/site data | Labs                               |

Advanced settings can control whether internal pages appear as Command Palette destinations.

:::note
An internal route is not a promise that a gated feature is enabled. Vast checks feature availability separately and blocks disabled Labs surfaces.
:::
