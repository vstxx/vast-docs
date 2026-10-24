---
title: "Appearance Reference"
description: "Reference Vast’s themes, colors, effects, density, layout, side panel, Visual Profiles, and startup presentation controls."
---

Vast's appearance controls are intentionally granular. They let you tune the browser shell without changing website content unless a setting explicitly says it affects websites.

| Setting                     | What it changes                                                                                                       | Why you might use it                   |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Layout                      | Horizontal, Vertical, or experimental Purist chrome                                                                   | Match tab density and workflow         |
| Theme                       | Dark, Dim, Light, or System                                                                                           | Overall UI luminance                   |
| Accent color                | Primary highlight, including the UI highlight color                                                                   | Personal identity / visibility         |
| Secondary accent            | Supporting highlight                                                                                                  | More nuanced gradients and states      |
| Background tint             | Main chrome background tone                                                                                           | Reduce pure-black/gray feel            |
| Surface tint                | Panels and elevated surfaces                                                                                          | Separate content layers                |
| Force dark mode on websites | Best-effort website darkening                                                                                         | Dark workflow on sites without a theme |
| Animations                  | General motion                                                                                                        | Preference/performance/accessibility   |
| Opening animation           | Startup visual                                                                                                        | Cosmetic startup experience            |
| Opening sound               | Startup sound volume                                                                                                  | Cosmetic audio feedback                |
| Bookmarks bar               | Bar visibility                                                                                                        | Persistent quick access                |
| New-Tab-only bookmarks bar  | Restrict bar to New Tab                                                                                               | Keep websites visually cleaner         |
| Clean toolbar icons         | Removes button surfaces and slightly enlarges main toolbar icons                                                      | A lighter toolbar                      |
| Sidebar density             | Comfortable or Compact spacing for tabs and workspaces in the vertical sidebar                                        | Trade space for readability            |
| Side panel mode             | Automatic, Beside the page, or Pinned over page                                                                       | Control panel/page competition         |
| Side panel width            | Side panel width, 304–520 px                                                                                          | Fit notes/history content              |
| Side panel labels           | Section names in a side panel at least 440 px wide                                                                    | Reduce visual noise                    |
| Corner radius               | UI roundness                                                                                                          | Change geometric character             |
| Background blur             | Blur of the page behind Settings, the command palette, and dialogs                                                    | Focus on the dialog in front           |
| Transparency                | How see-through floating surfaces are: side panel, menus, popovers, notifications, dialogs, Settings, command palette | Balance page visibility and legibility |
| Frost                       | How frosted see-through surfaces are; no effect at 0 transparency                                                     | Increase/decrease the glass treatment  |
| Glow                        | Accent light around panels                                                                                            | Emphasis around active elements        |
| Borders                     | Surface outlines                                                                                                      | Improve separation on similar tones    |
| Shadow depth                | Elevation under floating surfaces                                                                                     | Improve layer distinction              |
| Gradients                   | Color blends in the canvas atmosphere                                                                                 | Reduce or emphasize color transitions  |
| Panel opacity               | Dark theme: surface tint in internal-page panels and the address bar                                                  | Tune dark panels                       |
| Saturation                  | Color intensity of glass surfaces, 80–145%                                                                            | Muted vs. vivid appearance             |

The sidebar and toolbars stay solid; Transparency and Frost apply only to surfaces that float over pages. Reduced transparency makes floating surfaces solid, and Frost turns off in low-effects mode.

The side panel holds notes, bookmarks, and history. Its visibility button is beside the address bar. Beside the page, it is docked; pinned, it floats over the page and can be dragged. Its position is saved locally. Automatic pins it over the page in windows narrower than 1300 px.

## Visual Profiles

**Settings → Appearance → Visual profiles** saves the whole Appearance page as a named profile you can switch between and share. A profile covers theme, layout, colors, effects, density, side panel options, startup presentation, the bookmarks bar, and the New Tab background. It never includes tabs, history, passwords, or other browser data.

- **Save current** stores the current look under a name (up to 48 characters). **Vast default** is always listed.
- **Apply** switches to a profile; **Undo** returns to the previous look. If you change Appearance after applying a profile, it shows **Unsaved changes** with an **Update** button.
- Each profile's menu has **Revert changes**, **Update with current look**, **Rename**, **Export**, and **Delete**.
- **Export** writes a `.vastvisual` file and **Import** reads one. Files are checked before anything is applied and are limited to 6 MB.
- A custom New Tab image travels with the profile as a PNG or JPEG of up to 4 MB.

## Accessibility and compatibility

Visual customization should never be required to access a browser action. Reduced-motion and reduced-transparency preferences take priority over decorative effects where supported.

Website force-dark behavior can occasionally produce poor contrast or broken site styling. Disable it for compatibility when needed.

## Global corner radius in 0.3.0

**Corner radius** ranges from **6 to 36 px** (default **26 px**). It sets one base value with proportional rounding for small controls, cards, panels, and dialogs. Tabs, menus, Settings, internal pages, notifications, PDF controls, follow that value; not every element uses the same literal pixel radius.

The setting is retained for startup and window creation. Real circles, status dots, decorative radial shapes, print layout, and intentional square docked edges keep their structural geometry. It does not round arbitrary website content.

Settings use lighter glow and shadow treatment in 0.3.0, especially in Dim. Notes and side surfaces follow the selected theme. Radius changes update the browser's styling without reloading website tabs.
