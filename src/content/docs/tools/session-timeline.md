---
title: Session Timeline
description: Save, filter, inspect, and restore local workspace snapshots without losing the current state.
---

Session Timeline keeps a local history of workspace tab sets. Open it from the Command Palette, Settings, or `vast://session-timeline`.

## Snapshot types

Vast can record snapshots:

- when you save one manually;
- before a workspace switch;
- immediately before another snapshot is restored.

Each entry records the workspace, its captured tabs, pinned and internal-page counts, the trigger, and the capture time.

## Find a snapshot

Search by page title, URL, snapshot title, or workspace name. You can also filter by workspace and capture trigger.

Snapshots remain in the local Vast profile and do not create a cloud history.

## Restore safely

Restoring a snapshot replaces the target workspace's current tab set with the captured one. Vast creates a safety snapshot first, so the state you are replacing remains available in the timeline.

Review the listed tabs before restoring. A snapshot remembers browser context, but it cannot guarantee that every website session or remote page state will still be valid.

Delete individual snapshots when you no longer need them.
