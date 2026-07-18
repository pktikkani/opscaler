# STATUS — OpScaler

**What this is:** Public marketing site for OpScaler, a small senior AI studio for founders
(multi-page Next.js 16.2 site + Resend contact form).

**Current state:** Actively maintained on `main`. Recent work is a 2026 repositioning: reframed
as a small senior AI studio organized around AI disciplines, new "Inference Log" page, cost/perf
case study reworked, tagline changed to "Design it. Prove it. Ship it.", all 16 Dependabot vulns
patched, dark-mode stat visibility fixed. Deploys Vercel-style.

**What works:**
- All marketing pages render (home, about, services, case studies + [slug], process, contact, inference-log).
- Contact form emails via Resend when `RESEND_API_KEY` is set.
- `npm run build` succeeds (used as the smoke check — see AGENTS.md).

**What's broken / rough:**
- No automated tests (build is the only gate).
- README is stale: documents `NEXT_PUBLIC_WEB3FORMS_KEY` but the code uses Resend + `RESEND_API_KEY` (ledger R1).
- `src/app/inference-log/page.tsx` (457 lines) is over the standard limit (grandfathered).

**Next 3 steps:**
1. Fix the stale README env-var section (web3forms → Resend `RESEND_API_KEY`).
2. When next editing `inference-log/page.tsx`, extract sections into components to ratchet below 457.
3. Add a test for `/api/contact` (missing key → 500, missing fields → 4xx).

_Last updated: 2026-07-18 by claude (brownfield onboarding)_
