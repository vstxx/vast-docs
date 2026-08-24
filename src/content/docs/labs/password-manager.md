---
title: "Password Manager"
description: "Use Vast’s Labs-gated local password vault, CSV tools, password generation, and autofill controls."
---

Password Manager is a Vast Labs feature for local credential storage and same-site autofill.

## Vault behavior

The vault starts locked and must be explicitly unlocked for the current Vast session.

It can lock again after inactivity, system lock, suspend, or session expiration.

## Saved login data

A login can contain:

* website origin;
* title;
* username;
* encrypted password;
* notes;
* favicon;
* autofill policy.

## Save and update prompts

Vast can detect completed sign-ins and ask before saving or updating a credential. You can suppress prompts for a site and later re-enable them.

## Autofill

Matching credentials are offered for the same site. Autofill is user-controlled and can be configured to require confirmation.

## Password generation

The built-in generator creates randomized passwords using letters, digits, and symbols.

## Health check

The local health check can flag obvious weak, reused, and duplicate credentials.

## Clipboard behavior

Copying a password places it in the clipboard temporarily. Treat clipboard contents as sensitive while another application can read them.

## CSV import and export

CSV import is manual. CSV export is plaintext by nature; protect exported files carefully and delete them when no longer needed.

## Encryption

Credential secrets are protected using operating-system-backed encryption where available. Portability across another machine or OS account is therefore not guaranteed.
