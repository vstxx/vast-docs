---
title: "Password Manager (retired)"
description: "The built-in vault is retired in 0.5.0; use external extensions with limited compatibility evidence."
---

The built-in Password Manager and `vast://passwords` are **retired in Vast 0.5.0**. There is no current native-vault setting, unlock flow, CSV tool, password generator, save prompt, or native autofill workflow. This URL remains available to explain the change.

## External password managers

Use [Extensions](/extensions/extensions/) for Bitwarden, Proton Pass, or iCloud Passwords. Bitwarden and Proton Pass retain their upstream extension identities; iCloud Passwords comes from Apple's upstream package.

The release evidence covers smoke tests only. It does not certify every website, vault workflow, browser integration, or platform configuration. Check the extension's requirements and test your own sign-in workflow. Extensions are unavailable in private and ephemeral workspaces.

## Existing data

Back up your existing profile before upgrading. Keeping historical files in a profile or backup does not make the retired vault accessible in 0.5.0. Do not rely on importing a full backup to recover a working native password manager. Use the recovery/export options available in the older version before upgrading, and keep any plaintext export secure. See [Data, Backup & Migration](/privacy/data-backup-and-migration/).
