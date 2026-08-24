---
title: "Cat Addon"
description: "Enable or disable Vast’s optional local animated companion and understand its behavior."
---

Cat Addon is an optional visual feature that adds an animated cat to Vast's own browser chrome. It is cosmetic: enabling it does not change website permissions, browsing identity, network behavior, or privacy settings.

## What the cat reacts to

The animation system is event-driven rather than a video loop. Depending on what is happening in Vast, the cat can use different scenes around the address bar, tabs, bookmarks bar, sidebar, New Tab controls, or the edge of the window.

Current scene types include:

* peeking around the address bar;
* paw interactions with browser chrome;
* running along the tab area;
* climbing onto the tab strip;
* reacting when a tab closes;
* reacting to a new tab;
* patrolling the toolbar;
* edge-to-edge zoomies;
* napping around the tab area;
* sneaking in from the sidebar edge;
* bookmark-bar reactions;
* ambient idle/rest scenes.

## Hidden text reactions

When Cat Addon is enabled, a few intentionally playful address/search inputs have dedicated reactions:

* `meow`
* `pspsps`
* `:3`
* `vast cat`

These are local UI easter eggs. They do not change where a normal search is sent unless you submit the search normally.

## Reduced motion

Cat Addon follows Vast's motion policy. With reduced motion, long travel/climb sequences are replaced by shorter, simpler poses rather than ignoring the accessibility preference.

## Window and layout awareness

Scenes adapt to the active Vast layout and available window area. The cat anchors itself to Vast-owned controls instead of modifying the DOM of the website you are viewing.

## Performance and behavior

The scheduler uses discrete events and ambient scenes rather than continuously running every animation. The add-on is designed as optional decoration; if you prefer a completely static browser shell, leave it disabled.
