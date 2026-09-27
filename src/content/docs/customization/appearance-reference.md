---
title: "Appearance Reference"
description: "Reference Vast’s themes, colors, effects, density, layout, side panel, and startup presentation controls."
---

Vast's appearance controls are intentionally granular. They let you tune the browser shell without changing website content unless a setting explicitly says it affects websites.

| Setting                     | What it changes                                     | Why you might use it                   |
| --------------------------- | --------------------------------------------------- | -------------------------------------- |
| Layout                      | Horizontal, Vertical, or experimental Purist chrome | Match tab density and workflow         |
| Theme                       | Dark, Dim, Light, or System                         | Overall UI luminance                   |
| Accent color                | Primary highlight                                   | Personal identity / visibility         |
| Secondary accent            | Supporting highlight                                | More nuanced gradients and states      |
| Background tint             | Main chrome background tone                         | Reduce pure-black/gray feel            |
| Surface tint                | Panels and elevated surfaces                        | Separate content layers                |
| Background style            | Graphite, Midnight, Aurora, Violet, Carbon, Frost   | Base visual character                  |
| Sidebar density             | Comfortable or Compact                              | Trade space for readability            |
| Sidebar mode                | Auto, Docked, Overlay                               | Control panel/page competition         |
| Sidebar width               | Panel width                                         | Fit notes/history content              |
| Sidebar labels              | Show/hide labels                                    | Reduce visual noise                    |
| Corner radius               | UI roundness                                        | Change geometric character             |
| Glassiness                  | Translucent surface effect                          | Increase/decrease glass treatment      |
| Blur                        | Backdrop blur                                       | Legibility over translucent surfaces   |
| Glow                        | Highlight bloom                                     | Emphasis around active elements        |
| Borders                     | Surface outlines                                    | Improve separation on similar tones    |
| Shadow depth                | Elevation                                           | Improve layer distinction              |
| Gradients                   | Gradient strength                                   | Reduce or emphasize color transitions  |
| Panel opacity               | Side/local panel opacity                            | Balance page visibility and legibility |
| Chrome opacity              | Main browser UI opacity                             | Tune transparency                      |
| Saturation                  | UI color intensity                                  | Muted vs. vivid appearance             |
| Animations                  | General motion                                      | Preference/performance/accessibility   |
| Opening animation           | Startup visual                                      | Cosmetic startup experience            |
| Opening sound               | Startup sound volume                                | Cosmetic audio feedback                |
| Bookmarks bar               | Bar visibility                                      | Persistent quick access                |
| New-Tab-only bookmarks bar  | Restrict bar to New Tab                             | Keep websites visually cleaner         |
| Force dark mode on websites | Best-effort website darkening                       | Dark workflow on sites without a theme |

## Accessibility and compatibility

Visual customization should never be required to access a browser action. Reduced-motion and reduced-transparency preferences take priority over decorative effects where supported.

Website force-dark behavior can occasionally produce poor contrast or broken site styling. Disable it for compatibility when needed.

## Global corner radius in 0.3.0

**Corner radius** ranges from **6 to 36 px** (default **26 px**). It sets one base value with proportional rounding for small controls, cards, panels, and dialogs. Tabs, menus, Settings, internal pages, notifications, PDF controls, and autofill surfaces follow that value; not every element uses the same literal pixel radius.

The setting is retained for startup and window creation. Real circles, status dots, decorative radial shapes, print layout, and intentional square docked edges keep their structural geometry. It does not round arbitrary website content.

Settings use lighter glow and shadow treatment in 0.3.0, especially in Dim. Notes and side surfaces follow the selected theme. Radius changes update the browser's styling without reloading website tabs.
