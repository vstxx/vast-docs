---
title: "Versioning"
description: "How Vast Browser version numbers work across regular releases and the Microsoft Store."
---

Vast Browser uses a three-part version number:

`X.Y.Z`

Each number represents the scale of the changes included in a release.

## First number — major release

The first number represents a major Vast release.

It changes only when an update is large enough to represent a major new release of the browser — for example, a significant overall update with major changes, new functionality, or substantial improvements across Vast.

Example:

`0.2.7 → 1.0.0`

A change to the first number represents the largest type of Vast update.

## Second number — substantial update

The second number represents a significant update that is smaller than a full major release.

These releases can introduce multiple new features, meaningful changes to existing functionality, larger UI or UX improvements, and other substantial improvements.

Example:

`0.2.7 → 0.3.0`

## Third number — small update

The third number represents smaller releases.

These updates can include a few new features, smaller improvements, bug fixes, hotfixes, stability fixes, or other minor changes.

Example:

`0.2.7 → 0.2.8`

## Microsoft Store versions

Microsoft Store builds use a four-part version number:

`X.Y.Z.W`

The first three numbers have the same meaning as the normal Vast version.

The fourth number exists only for Microsoft Store packaging and release purposes. It is not part of the meaningful Vast Browser version and should generally be ignored.

For example:

`0.2.7.0`

and

`0.2.7.4`

both belong to Vast Browser version `0.2.7`.

When referring to a Vast release publicly, use the normal three-part version whenever possible.
