---
title: "Automation"
description: "Create bounded, local macros from supported visible browser actions."
---

Automation is a Vast Labs feature for local browser workflows.

## Macro actions

Current visible actions include:

* open a URL in a new tab;
* open a Vast internal page;
* switch workspace;
* create a note;
* open a side panel;
* save a session snapshot;
* close duplicate tabs;
* hibernate inactive tabs;
* toggle Focus Mode.

The underlying macro model also supports a small set of related local browser actions, but it is intentionally not a general-purpose scripting environment.

## Triggers

The editor exposes Manual, Command Palette, Startup, Workspace Opened, New Tab Opened, and Timed trigger types.

In the current safe mode, automatic triggers shown as inactive do not execute automatically.

## Running a macro

A macro can be run normally or as a dry run. Sensitive contexts require explicit approval.

Each run has action-count and runtime limits.

## Safety model

Automation is designed around visible, auditable browser actions. It does not provide arbitrary shell commands, silent form submission, hidden password entry, arbitrary JavaScript injection, or silent downloads.

If a future Vast release expands those boundaries, it should be documented as a separate capability rather than silently changing the meaning of existing macros.
