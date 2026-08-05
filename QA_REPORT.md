# ISO Requirements & Audit Atlas 2026 — QA report

Build date: **2026-08-05**  
Application version: **2.0.0**

## Database validation

- **166** unique clause-level requirement records
  - ISO 9001: **59**
  - ISO 14001: **35**
  - ISO 45001: **40**
  - ISO 50001: **32**
- **1,494** unique audit questions
- **3** complete language layers: English, Czech and German
- Every requirement record contains:
  - title;
  - original paraphrase of the requirement;
  - practical explanation;
  - typical evidence;
  - common pitfalls;
  - three internal-audit questions;
  - three customer-audit questions;
  - three ISO/certification-audit questions.
- No duplicate requirement IDs
- No duplicate audit-question IDs
- No orphaned audit questions
- No missing mandatory EN/CZ/DE fields
- Requirements CSV: **166** data rows
- Audit-question CSV: **1,494** data rows

## Automated interface verification

The application was exercised in headless Chromium using the compiled standalone bundle in two viewports:

- Desktop: **1440 × 1000**
- Touch/mobile: **390 × 844**

**48 of 48 automated assertions passed.**

Verified flows:

- Initial rendering without uncaught JavaScript errors
- No browser console errors
- No horizontal page overflow in the tested desktop and mobile views
- EN → DE → CZ language switching
- Rendering all 166 requirements
- Full-text requirement filtering
- Requirement-detail modal and content sections
- Audit-checklist generation with 10 sampled questions
- Audit assessment persistence in local state
- Knowledge-test generation with four answer options
- Immediate answer feedback and next-question navigation
- Integrated four-standard matrix
- Glossary
- Official-source register
- Settings view

## Package and PWA checks

- `app.js` JavaScript syntax: passed
- `sw.js` JavaScript syntax: passed
- `manifest.webmanifest`: valid JSON
- `requirements-data.json`: valid JSON
- All service-worker shell assets returned HTTP 200 from a local static server
- Appropriate static-server MIME types were returned for HTML, CSS, JavaScript, JSON, manifest, CSV and PNG files
- Icon dimensions verified:
  - 32 × 32
  - 180 × 180
  - 192 × 192
  - 512 × 512
  - 512 × 512 maskable
- ZIP structure places `index.html` in the root

## Professional and copyright controls

- The application states that its content is an independent paraphrase and implementation guide, not normative ISO text.
- The application directs users to licensed official standards for certification and conformity decisions.
- The ISO 9001 Edition 6 module is identified as non-normative transition readiness until the final standard is officially published and licensed.
- Public GitHub Pages confidentiality limitations are displayed in the application and installation guide.

## Remaining acceptance checks after deployment

The following checks depend on the final hosting environment and physical device and therefore remain a brief deployment acceptance test:

1. Open the final GitHub Pages HTTPS address on the intended iPhone model.
2. Add the app to the Home Screen and reopen it from the icon.
3. Confirm offline operation after one complete online load.
4. Confirm that an app update refreshes the service-worker cache.
5. Confirm organizational mobile-device-management restrictions, if applicable.
6. Perform a content review against the organization’s licensed copies of the applicable ISO standards before using the database as controlled audit criteria.

The automated test environment blocked direct Chromium navigation by administrator policy, so UI testing used the complete standalone bundle while static HTTP serving and asset availability were verified separately. This limitation does not affect the generated deployment files, but it is why the physical hosted-PWA check is explicitly retained above.
