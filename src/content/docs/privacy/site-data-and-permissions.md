---
title: "Site Data & Permissions"
description: "Inspect site data, set permission defaults, manage per-site overrides, and clear local website data."
---

Vast lets you review and control site-level storage and permissions without exposing raw internal browser files.

## Permission types

Configurable permission categories include:

* Camera
* Microphone
* Location
* Notifications
* Clipboard
* Fullscreen

Global defaults can be Ask, Always allow, or Block where appropriate.

## Permission prompts

With a permission set to Ask, a site that requests it gets Vast's prompt. Sites that check first, before requesting, see that permission as not yet decided rather than blocked, as they would in Chrome. This is what lets calling apps such as Google Meet, Zoom, and Microsoft Teams ask for the camera and microphone. A permission you have blocked stays blocked.

**Allow once** lasts for the visit: the site sees your camera and microphone, including their names, and is not asked again until you leave the site or close the tab.

## Per-site overrides

A website can receive a specific Allow or Block override. Overrides are associated with the site origin and can also be workspace-aware.

Use **Revoke** to remove a saved override and return to the global policy.

## Site information

Vast can show a site's origin, security state, storage counts, service workers, permissions, and local blocking statistics.

## Workspace storage

Site cookies and storage follow the workspace partition: distinct persistent storage for an isolated persistent workspace, nonpersistent storage for a private/ephemeral workspace, and common default storage for shared workspaces. Bookmarks and history are browser-level state. Confirm the intended workspace before clearing site data; signing out of one isolated session does not imply that every other partition was cleared.

## Clearing data

You can clear site data globally or configure selected domains to be cleared on close.

Clearing site data can sign you out of websites and remove locally cached application state.
