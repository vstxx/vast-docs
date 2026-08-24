---
title: "History & Downloads"
description: "Understand local history, Recently Closed, download controls, and safety status."
---

## History

Vast history records local visit information so pages can be found again through History, New Tab, and the Command Palette.

A history entry can include:

* title;
* URL;
* favicon;
* visit count;
* last-visited time;
* optional workspace association.

### Disable history

**Privacy → Disable history globally** stops normal browsing-history recording. This is separate from temporary-workspace behavior and from clearing history that already exists.

### Clear history

History can be cleared from Settings or the Command Palette.

### Fake browsing history

Vast includes an optional privacy experiment that can add decoy-style local history noise. It is off by default. Do not treat it as a substitute for disabling history or as a guarantee against external observation.

## Recently Closed

Recently Closed exists separately from full history so you can recover accidentally closed tabs. It can be disabled independently in Privacy settings.

## Downloads

The Downloads surface tracks active and completed downloads. A download record can include filename, source URL, MIME type, save path, progress, total size, transfer state, checksum, and locally determined safety status where available.

Possible states include progressing, completed, cancelled, and interrupted. Supported downloads can also expose pause/resume and open/show-in-folder actions.

### Dangerous download warnings

Security settings can warn before or around potentially dangerous downloads. A warning is not a guarantee that an unflagged file is safe; source reputation and file behavior still matter.

### Download metadata vs. downloaded files

The Downloads list is profile metadata. The actual downloaded file lives at the filesystem location you selected. Clearing Vast's history or metadata does not imply deletion of the downloaded file itself.
