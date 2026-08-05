# ISO Requirements & Audit Atlas 2026

Responsive, offline-ready trilingual application for **English, Czech and German**. It supports learning and audit preparation for:

- ISO 9001:2015 + Amendment 1:2024, with a clearly separated non-normative Edition 6 transition watch;
- ISO 14001:2026;
- ISO 45001:2018 + Amendment 1:2024, with revision watch;
- ISO 50001:2018 + Amendment 1:2024.

Build date: **2026-08-05**  
Application version: **2.0.0**  
Clause-level database records: **166**  
Built-in audit questions: **1494**

## Functions

- trilingual clause-level requirement database and practical explanations;
- typical implementation evidence and common weaknesses;
- customer, internal and ISO/certification audit-question lenses;
- editable audit checklists with conformity/OFI/minor/major/N/A ratings;
- local notes, findings, actions, owners and due dates;
- CSV, JSON and print/PDF audit outputs;
- knowledge quizzes;
- integrated four-standard matrix;
- transition-watch module and official source register;
- local procedure/template/evidence links;
- complete local backup and restore;
- responsive PWA for iPhone, Android, Windows and macOS;
- offline operation after the first hosted load.

## Important legal and professional limitation

This is an independent educational and audit-preparation application. It contains **original paraphrases and implementation guidance**, not the copyrighted normative wording of ISO standards. It is not affiliated with or endorsed by ISO. Use licensed official standards, applicable accreditation rules, legal requirements, customer-specific requirements and competent professional judgement for conformity or certification decisions.

## Privacy

The static application stores audit records, notes, bookmarks and quiz progress in the browser's local storage. It does not transmit them. If the package is hosted on public GitHub Pages, the application code and the built-in database are public. Do not embed confidential company information in the repository. For controlled internal use, deploy it to SharePoint/Azure/internal hosting with company authentication.

## Deployment

Upload the **contents** of this folder to the root of a static HTTPS site. For GitHub Pages use a separate public repository such as `iso-audit-atlas`, then enable Pages from `main / (root)`.
