---
title: "Versioning"
description: "How Vast Browser version numbers work across regular releases and Microsoft Store builds."
---

Vast uses a three-part version number for normal releases:

```
X.Y.Z
```

Each part indicates the scale of the release.

## Major releases

The first number identifies a major Vast release.

It changes when an update represents a major new release of the browser, with substantial changes across the product, major new functionality, or a significant overall revision.

Example:

```
0.2.7 -> 1.0.0
```

A change to the first number represents the largest release level used by Vast.

## Substantial updates

The second number identifies a significant update within the current major release.

These releases can include multiple new features, larger changes to existing functionality, UI or UX changes, and other substantial improvements.

Example:

```
0.2.7 -> 0.3.0
```

## Small updates

The third number identifies a smaller update.

These releases can include a small number of new features, minor changes, bug fixes, hotfixes, stability improvements, and similar maintenance work.

Example:

```
0.2.7 -> 0.2.8
```

## Microsoft Store versions

Microsoft Store packages use a four-part version number:

```
X.Y.Z.W
```

The Store identity version is configured separately from the three-part browser version. It is not derived by adding components or incrementing the product version.

For Store submissions, Vast uses a four-part package version with a final component of `0`. Each new package version must exceed the highest version already consumed by Partner Center, including previously uploaded packages. A Store package version does not describe the scale of browser changes.

For the 0.3.0 release preparation:

```
Browser product version: 0.3.0
Previous browser release: 0.2.7
Prepared Store package version: 1.2.9.0
```

When referring to a Vast release in documentation, release notes, or other public material, use the three-part version unless the exact Microsoft Store package version is specifically relevant.

The package number may need to increase before submission if Partner Center has already used it. Store review and rollout are separate from the direct GitHub release; a published browser version does not imply that its Store update is available yet. See [Installation & Updates](/get-started/installation-and-updates/).
