---
title: "Video & Audio"
description: "Use Vast’s optional local media workspace for supported editing, conversion, recording, and download tasks."
---

Video & Audio is a Vast Labs media utility for local media workflows.

It can provide tools for editing, converting, recording, downloading, and processing video or audio through a bundled local runtime.

## Starting the tool

When opened, Vast checks the local runtime state. You can start the backend, stop it, refresh status, and in development-oriented contexts repair dependencies when supported.

Public packaged builds are expected to include the required runtime components rather than downloading them silently at first use.

## Storage

Jobs and media-tool metadata are stored under Vast's local data area.

## Isolation

The Video & Audio interface runs separately from normal web pages and does not receive general browser privileged access simply because it is displayed inside Vast.

## Logs

The page can show recent local backend log output to help diagnose startup or processing failures.
