# ISO Atlas Professional 2026

**Version 3.0.0 — build and data status: 2026-08-05**

ISO Atlas Professional is a responsive, offline-ready audit and learning application for iPhone, Android, Windows and macOS. The complete user interface, database and audit support are available in **English, Czech and German**.

## Included standards and modules

| Module | Reference basis in this build | Type | Records |
|---|---|---:|---:|
| ISO 9001 | ISO 9001:2015 + Amd 1:2024; separate Edition 6 transition watch | Certifiable management-system standard | 59 |
| ISO 14001 | ISO 14001:2026 | Certifiable management-system standard | 35 |
| ISO 45001 | ISO 45001:2018 + Amd 1:2024; revision watch | Certifiable management-system standard | 40 |
| ISO 50001 | ISO 50001:2018 + Amd 1:2024 | Certifiable management-system standard | 32 |
| ISO 19011 | ISO 19011:2026 | Auditing guidance; not certifiable | 30 |
| ISO 31000 | ISO 31000:2018; revision watch | Risk-management guidance; not certifiable | 27 |
| IATF 16949 | IATF 16949:2016 plus a current-publication watch | Automotive sector supplement | 66 |
| **Total** |  | **7 modules** | **289** |

The database contains **3,468 original audit questions** across four audit lenses: internal, customer/second-party, supplier and certification/ISO. It also includes 16 process areas, 34 glossary terms and 18 offline assistant rule sets.

## Main functions

- Full-text requirement search across EN/CZ/DE content.
- Filters by standard, chapter, process, priority, module type, 2026 change and bookmark.
- Requirement detail with original paraphrase, practical explanation, implementation guidance, examples of objective evidence, common weaknesses and four audit-question lenses.
- Audit setup for internal, customer, supplier and certification audits.
- Balanced checklist generation across selected standards, processes and chapters.
- Assessment states: conformity, opportunity for improvement, minor nonconformity, major nonconformity, not applicable and not assessed.
- Evidence, finding, action, owner and due-date fields for each audit item.
- CSV, JSON and print/PDF audit outputs.
- Knowledge tests with immediate explanation after every answer.
- Cross-standard topic and process matrix.
- Transition and revision watch with official source links.
- Local links to internal procedures, templates and evidence.
- Local backup and restore.
- Home-screen installation and offline use through PWA technology.

## Smart Audit Assistant

The built-in assistant is an **offline, deterministic, rule-based decision-support tool**. It can:

1. analyze an observation and recorded evidence;
2. match relevant standards, clauses, processes and risk indicators;
3. rank potentially relevant criteria;
4. prepare a structured draft containing criterion, condition, possible gap, possible consequence and suggested classification;
5. suggest objective evidence and follow-up questions;
6. create a focused audit checklist from the selected matches;
7. copy or export the analysis.

It does **not** use a cloud generative-AI service, does not transmit the entered observation and does not make certification decisions. A competent auditor must confirm the applicable criterion, sufficiency of evidence, classification and wording.

## Privacy and multi-user limitation

The application has no server database, user accounts or cloud synchronization. Audit records, assistant history, bookmarks, links and test progress are stored in the local browser storage of the current device.

When hosted from a **public GitHub Pages repository**:

- the application code and built-in educational database are public;
- locally entered audit notes are not automatically uploaded to GitHub;
- anyone with access to the same browser profile or an exported file may see local data;
- clearing browser data can remove local records unless they were exported.

Do not place confidential internal procedures, customer information, complaints, FMEA files, personal data, credentials or API keys in the public repository. A controlled shared company deployment requires SharePoint/Azure/internal hosting with company authentication and a suitable data store.

## Copyright and professional limitation

This is an independent educational and audit-preparation tool. It is not affiliated with or endorsed by ISO or IATF. The database contains original paraphrases, implementation guidance and original questions; it does not reproduce the copyrighted normative wording.

For actual audits, conformity assessments and certification decisions, use:

- licensed official editions of the applicable standards;
- current amendments, sanctioned interpretations, FAQs and certification-scheme rules;
- applicable legislation and permits;
- current customer-specific requirements;
- the organization’s controlled documented information;
- competent professional judgement.

## Deployment

Upload the **contents of this folder** to the root of an HTTPS static site. `index.html` must be in the repository root. Detailed GitHub Pages and iPhone instructions are in `INSTALLATION_CZ.md`.

## Updating

Replace all deployed application files together. Version 3.0.0 uses service-worker cache `iso-atlas-professional-3.0.0`. After deployment, close and reopen an installed PWA; the application will offer a refresh when the new worker is ready. Local audit data is stored separately and is normally retained, but an export before a major update is recommended.
