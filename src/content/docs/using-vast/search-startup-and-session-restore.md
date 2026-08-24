---
title: "Search, Startup & Session Restore"
description: "Configure the default search engine, startup destination, New Tab behavior, and session restoration."
---

## Default search engine

Vast includes built-in definitions for Google, DuckDuckGo, Brave Search, Perplexity, YouTube, and Wikipedia. One engine is selected as the normal default while shortcut prefixes can route individual queries elsewhere.

## Startup behavior

The settings model supports three startup intents:

* **Restore** — continue the previous browsing context where eligible;
* **New tab** — start from a fresh Vast tab;
* **Home** — start from the configured/default home-oriented behavior.

**Restore previous session** is also exposed as an explicit session preference because restoring normal persistent tabs and choosing a startup surface are related but distinct behaviors.

## What does not restore

Temporary/ephemeral browsing contexts are intentionally treated differently from persistent workspaces. Do not expect a private temporary workspace to behave like a normal saved session after restart.

## Tab hibernation

**Hibernate inactive tabs** reduces background resource use. Advanced settings determine when inactive tabs sleep or are discarded.

## New Tab behavior

New Tab can be Search, Vast dashboard, or Blank. Dashboard cards are separately configurable so changing your startup behavior does not require changing your New Tab layout.
