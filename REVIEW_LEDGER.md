# Review Ledger

Every review appends here. **Before reviewing: read this ledger, verify open items,
close what's fixed, only THEN add new findings with fresh ids.**

| id | date | reviewer | finding | severity | status |
|----|------|----------|---------|----------|--------|
| R1 | 2026-07-18 | claude | README documents the contact form as web3forms (`NEXT_PUBLIC_WEB3FORMS_KEY`), but the code uses Resend via `/api/contact` reading `RESEND_API_KEY`. Stale docs → a deployer sets the wrong env var and the form silently 500s. | med | open |
| R2 | 2026-07-18 | claude | No automated tests; the only gate is `npm run build`. The `/api/contact` branches (missing key, missing fields) are untested. | low | open |
| R3 | 2026-07-18 | claude | `src/app/inference-log/page.tsx` (457 LOC) is over the 400 limit (grandfathered). | low | open |
