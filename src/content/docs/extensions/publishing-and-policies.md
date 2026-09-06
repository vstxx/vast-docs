---
title: "Publishing & policies"
description: "Publisher Terms, data disclosures, package review, reporting, and ownership in the Vast Extensions Hub."
---

The Vast Extensions Hub is the publisher-facing catalog and release service at [extensions.vastbrowser.com](https://extensions.vastbrowser.com). Vast Browser reads its public catalog, while publishers use the same service to create listings, upload releases, and respond to review.

## Publisher Terms

Publishing is fail-closed until the verified legal operator and legal contact are configured. The Hub does not substitute placeholder operator information.

Before a publisher can create a listing, upload a package, or submit a release, the publisher must accept the current versioned Publisher Terms. The Hub records the terms version, SHA-256 hash, and acceptance timestamp. At every release submission, the publisher separately reconfirms the current ownership, disclosure, and safety warranty.

Publishers retain ownership of their extensions and submitted materials. They grant Vast a non-exclusive operational license only as needed to host, store, scan, validate, review, sign, distribute, update, display, and preserve already-published copies, backups, audit records, and security evidence.

The authoritative current text is available from the Hub's [Publisher Terms](https://extensions.vastbrowser.com/legal/publisher-terms). Related documents:

* [Privacy Notice](https://extensions.vastbrowser.com/legal/privacy)
* [Copyright/IP Notice](https://extensions.vastbrowser.com/legal/copyright)
* [Platform Terms](https://extensions.vastbrowser.com/legal/platform-terms)
* [Publishing Policy](https://extensions.vastbrowser.com/legal/publishing-policy)

## Listing disclosures

Every listing declares one of two data-practice modes:

* **Local processing only** — no data is transmitted to or processed by an external service.
* **External processing or transmission** — the listing names the remote services, explains their use, and provides an HTTPS publisher privacy-policy URL.

These declarations appear on the public extension details page. They do not expand the permissions granted by Vast.

## Package review

The `.vext` pipeline validates archive size and expansion limits, duplicate and case-colliding entries, Windows-reserved names and characters, traversal and special files, stable identities, referenced files (including declared background pages), Manifest V2 or Manifest V3 (a Manifest V2 submission additionally requires a strict local-only `content_security_policy`, and network-provider submissions must carry the full `vast_network` permission set), permissions, and strict Chrome match patterns.

JavaScript receives an AST-based policy review. `eval`, `Function` constructors, string timers, remote module/worker/script loading, and WebAssembly are prohibited, including indirect invocation forms such as `(0, eval)(...)`. Very large single-line, encoded, minified, or obfuscated sources are marked for manual review. Approval revalidates and signs the exact package before publication. Reviewers cannot approve their own releases; the only exception is an account holding the administrator role, whose self-approval is labelled separately and recorded with a distinct audit action before the package is re-validated and signed.

## Report an extension

Every public details page links to **Report extension**. Categories cover copyright/IP, malware, illegal functionality, privacy abuse, impersonation, and other violations. Reports are bounded, validated, rate-limited, and reviewed by a person. A report never automatically delists an extension.

Review status, decisions, publisher notification, reasons, and preserved evidence are auditable. Do not put passwords, session tokens, private school data, or unrelated personal data in a report.

## Copyright scope

The MIT License applies to Vast-owned source where the repository says so. Publisher extensions, bundled libraries, names, icons, screenshots, and other third-party materials remain the property of their respective owners and follow their own licenses and terms.
