# OpScaler — agent operating guide

Public marketing site for OpScaler, a small senior **AI studio for founders** (multi-page
Next.js 16.2 site + a Resend-backed contact form).

## Run / test / build

- Install: `npm install` (Node 20+).
- Dev: `npm run dev` (http://localhost:3000).
- Test: `npm test` (node:test, `tests/*.test.mjs` — team data only so far).
- Build (also the smoke check): `npm run build`.
- Lint: `npm run lint`. Discipline gate: `python3 scripts/check_discipline.py`.

## Positioning constraint (matters for ALL copy changes)

OpScaler is an **AI studio**, organized around AI *disciplines* (Fine-Tuning, Evaluation &
Observability, Safety/Alignment, Sovereign/Private AI, Governance) — NOT a general dev/devops
shop, NOT the generic six-box AI grid. Lead with the rare disciplines; voice/RAG/imagery/agents
are proof underneath. Tagline: "Design it · Prove it · Ship it." Don't reframe Web/Cloud/DevOps
as headline services. (See BLUEPRINT for the full work→discipline mapping.)

## Gotchas

- Contact form uses **Resend** via `/api/contact`, reading `RESEND_API_KEY` from `.env.local`
  (no `.env.local` is checked in). **The README is stale** — it says `NEXT_PUBLIC_WEB3FORMS_KEY`,
  which is NOT what the code uses (ledger R1). Trust the code.
- Case-study content lives in `src/lib/case-studies.ts` (data), not inline in pages — add new
  case studies there.

## Where things live

- Architecture + positioning → `BLUEPRINT.md` · Current state / next steps → `STATUS.md`
- Open issues / review memory → `REVIEW_LEDGER.md`

## Review rule

Reviews append to `REVIEW_LEDGER.md`: read it first, verify/close existing findings, only then
add new ones with fresh ids. Debug from logs, never guess.
