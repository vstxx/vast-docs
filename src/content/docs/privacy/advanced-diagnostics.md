---
title: "Advanced Diagnostics"
description: "Use the Labs-gated local diagnostics and site-data inspection surface."
---

Advanced Diagnostics is a Vast Labs troubleshooting surface. It exists to answer practical questions about the local browser runtime and site state without requiring users to inspect profile files manually.

## What it is for

Use diagnostics when you need to understand:

* which Vast, Chromium, Electron, or runtime version is active;
* which URL/tab is currently relevant to a problem;
* whether local site data or permissions are contributing to an issue;
* whether an optional feature is available or misconfigured;
* what information should be included in a reproducible bug report.

## Developer actions

When Developer Mode is enabled, Settings can expose actions such as opening tab DevTools, reloading the active webview, reloading the Vast application chrome, copying a debug report, and opening/copying diagnostics.

## Privacy

A diagnostic report can contain environment and current-state information. Review copied diagnostic text before posting it publicly, especially if the problem involves a private URL, local path, account session, or device-specific data.

## Security boundary

This documentation intentionally describes the troubleshooting surface, not the internal privileged channels or security-sensitive implementation used to gather it.
