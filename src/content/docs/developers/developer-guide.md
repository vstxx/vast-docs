---
title: "Developer Guide"
description: "Set up, build, test, and contribute to the Vast desktop application."
---

Vast's public source surface is organized as an Electron application with a React/TypeScript browser shell and explicitly separated privileged boundaries.

## Prerequisites

For normal application development you need Node.js/npm versions compatible with the lockfile and CI. Python 3 is used for media-runtime work and related asset verification. Windows packaging/updater integration work additionally depends on the Windows build environment used by the project.

## Install

```bash
npm ci
```

Optional subprojects have their own locked dependencies. Install them only when working on that subsystem rather than treating every optional runtime as a requirement for ordinary UI development.

## Run

```bash
npm run dev
```

## Build

Create the application build without producing a platform installer:

```bash
npm run build
```

## Baseline validation

For changes that touch the normal application surface, the baseline includes:

```bash
npm run lint
npm test
npm run audit:ci
npm run updater:stage
npm run release:audit
npm run build
```

Use the browser-shell/application test suite for Electron integration changes:

```bash
npm run test:app
```

Subsystems such as the updater, extensions, optional local runtimes, or release packaging have additional targeted checks.

## Source layout

```
src/
  renderer/  React application shell and Vast-owned UI
  shared/    Shared data models, constants and feature policy
resources/   Bundled feature assets and optional local runtimes
scripts/     Build, validation, packaging and maintenance tools
tests/       Unit, renderer, browser-shell and integration tests
```

## Development principles

Changes should be focused, testable, and consistent with the local-first product model.

A strong pull request:

* explains the user-visible change;
* explains privacy/security impact where relevant;
* includes tests or a concrete reason they are unnecessary;
* updates documentation when behavior, storage, dependencies, or release obligations change;
* avoids unrelated refactors and formatting churn.

## Security-sensitive work

Treat navigation, web-content isolation, storage boundaries, privileged APIs, browser sessions, updater behavior, password handling, extension permissions, local device discovery, and optional local runtimes as security-sensitive code.

Document the trust boundary in code review, but do not put secrets, private keys, certificates, production tokens, personal profiles, customer data, generated release packages, or private operational details into the repository.

## Public source

Public source snapshots are distributed through the Vast public repository. Development documentation should distinguish public source behavior from private deployment/operations configuration and should never require private infrastructure knowledge to understand ordinary browser code.

## Related documentation

Read **Architecture Overview** for the public trust model and **Extension Development** for the extension model.

## Targeting the 0.3.0 release

Use the public v0.3.0 tag when reproducing this release rather than a moving branch. The published source provenance identifies the original build commit. Public snapshots omit private operational material; not every protected release workflow can run in an unauthenticated fork.

For changes to radius, downloads, or menus, run the corresponding regression checks from the source package as well as application tests. Build/package sizes and performance claims must be measured; passing a source-level test alone does not verify an installed Windows package.
