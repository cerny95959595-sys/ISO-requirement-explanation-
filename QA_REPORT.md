# ISO Atlas Professional 2026 — QA report

Build date: **2026-08-05**  
Application version: **3.0.0**  
Data status: **2026-08-05**

## 1. Database validation

- **289** unique requirement/guidance/sector records:
  - ISO 9001: **59**
  - ISO 14001: **35**
  - ISO 45001: **40**
  - ISO 50001: **32**
  - ISO 19011: **30**
  - ISO 31000: **27**
  - IATF 16949: **66**
- **3,468** unique audit questions.
- Four audit lenses for every record:
  - internal audit;
  - customer/second-party audit;
  - supplier audit;
  - certification/ISO audit.
- Three questions per lens and record.
- Complete EN/CZ/DE layers for mandatory record and audit-question fields.
- **16** process areas.
- **34** glossary entries.
- **18** assistant rule sets.
- No duplicate requirement IDs.
- No duplicate audit-question IDs.
- No orphaned audit questions.
- Requirements CSV data rows: **289**.
- Audit-question CSV data rows: **3,468**.

## 2. Static code and package checks

Passed checks:

- `app.js` JavaScript syntax.
- `ui-pro.js` JavaScript syntax.
- `sw.js` JavaScript syntax.
- `manifest.webmanifest` valid JSON.
- `requirements-data.json` valid JSON.
- All referenced application-shell files present.
- Required PWA icons present:
  - 32 × 32;
  - 180 × 180;
  - 192 × 192;
  - 512 × 512;
  - 512 × 512 maskable.
- Service-worker cache version aligned to application version 3.0.0.
- GitHub Pages package places `index.html` in the ZIP root.

## 3. Automated interface verification

The compiled standalone application was exercised in headless Chromium with:

- desktop viewport: **1440 × 1000**;
- touch/mobile viewport: **390 × 844**.

All planned automated assertions passed, with **0 uncaught JavaScript errors** and **0 browser-console errors**.

Verified flows included:

- initial application rendering and data statistics;
- rendering all seven standard/module cards;
- EN, CZ and DE switching;
- desktop and mobile responsive layout without horizontal page overflow;
- rendering and searching all 289 records;
- filtering by standard, process and module type;
- requirement detail with all four audit lenses;
- internal/customer/supplier/certification audit setup;
- balanced generation of a supplier audit checklist;
- assessment and evidence entry;
- Smart Audit Assistant clause matching;
- structured draft finding and completeness check;
- creation of a focused audit from assistant matches;
- quiz generation and answer processing;
- topic/process matrix with seven modules and sixteen processes;
- mobile bottom navigation and mobile assistant rendering.

## 4. Smart Audit Assistant controls

Verified controls:

- the assistant operates locally from deterministic rules, keywords, process mapping and selected risk indicators;
- no cloud AI endpoint or external API key is required;
- entered observations are not transmitted by the application;
- output is explicitly labelled as decision support rather than a certification decision;
- the user is instructed to verify the applicable criterion and classification;
- analysis can be copied, exported or converted to a focused audit.

## 5. Copyright and professional controls

The application states that:

- content consists of independent paraphrases, implementation guidance and original questions;
- copyrighted normative wording is not reproduced;
- ISO 19011 and ISO 31000 are guidance rather than certifiable requirements;
- IATF use requires current authorized publications, sanctioned interpretations, FAQs, certification rules and customer-specific requirements;
- licensed official documents remain necessary for audit and certification decisions;
- ISO 9001 Edition 6 is treated as transition watch until the final licensed edition is published and incorporated through controlled review.

## 6. Deployment acceptance checks retained

The following checks depend on the final GitHub Pages environment and physical device:

1. Confirm the final HTTPS URL opens without a 404 error.
2. Install from Safari on the intended iPhone model.
3. Reopen from the Home Screen icon.
4. Confirm offline operation after one full online load.
5. Confirm the update prompt after deploying a future cache version.
6. Confirm local export/import on the intended browser.
7. Review database content against the organization’s licensed standards and current customer-specific requirements before treating it as controlled audit criteria.
8. Confirm any company mobile-device-management restrictions.

The automated browser environment did not permit ordinary local URL navigation, so the complete standalone bundle was used for UI execution while package structure and application-shell availability were verified separately.
