# BLUEPRINT — OpScaler

> Every session: reread this file before writing code. New code fits this structure and the
> standard 400/50 limits, or you update this file FIRST with a dated decision note
> (`## YYYY-MM-DD — <what changed and why>`). Grandfathered files may not grow; shrink them
> when you touch them. Never rewrite what works to match this doc — ratchet, don't renovate.

_Reverse-engineered from the repo as it stood on 2026-07-18. Describes reality, not an ideal._

## What this is

The public marketing site for **OpScaler** — a small senior AI studio (founder Karthik Sethupathy;
technical advisor Pavan Tikkani — team data lives in `src/lib/team.ts`). A multi-page Next.js site: home, about, services, case studies,
process, a long-form "Inference Log" page, and a contact form that emails via Resend.

**Positioning constraint (from project memory — enforce in copy):** OpScaler is an *AI studio
for founders*, organized around AI **disciplines** (Fine-Tuning, Evaluation & Observability,
Safety/Alignment, Sovereign/Private AI, Governance), NOT a general dev/devops shop and NOT the
generic six-box AI grid. Lead with the rare disciplines; voice/RAG/imagery/agents are applied
proof underneath. Through-line: "Design it · Prove it · Ship it." Don't reframe Web/Cloud/DevOps
as headline services.

## Stack (inferred)

- **Next.js 16.2** (App Router), **React 19**, **TypeScript 5.8**.
- **Tailwind CSS 4.2**, **Framer Motion 12** (animation), **sharp** (image processing).
- **Resend** for the contact-form email (`src/app/api/contact/route.ts`, reads `RESEND_API_KEY`).
- Deploy: Vercel-style static/SSR (`.next/` present). Why: standard marketing-site stack.

## Folder structure (actual)

```
src/
  app/
    page.tsx                    # home
    about/ services/ process/ contact/   # marketing pages
    case-studies/                # index + [slug] dynamic pages
    inference-log/page.tsx       # long-form studio-story page (largest file)
    api/contact/route.ts         # POST → Resend email
    layout.tsx
  components/                    # Navbar, Footer, SiteLayout, Container, ServiceCard, FadeIn, ...
  lib/case-studies.ts            # case-study content data
  styles/                        # tailwind.css, base.css
public/                          # assets
```

## Module boundaries (what each ACTUALLY does today)

- `src/app/**/page.tsx` — one page per route, mostly presentational marketing content.
  `inference-log/page.tsx` is the largest (the studio's own AI story).
- `src/lib/case-studies.ts` — the case-study content as data (the source of truth for the
  `/case-studies` index and `[slug]` pages). New case studies go here, not inline in pages.
- `src/components/` — shared layout + presentational primitives.
- `src/app/api/contact/route.ts` — the only server logic: checks `RESEND_API_KEY`, sends the
  contact email. Errors returned as explicit JSON.

## Data flow (today)

1. Visitor loads a route → Next renders the page (case-study pages read `lib/case-studies.ts`).
2. Contact form POSTs to `/api/contact` → route checks `RESEND_API_KEY` → Resend sends email.

## Hard limits

New files: **400 lines/file, 50 lines/function.**

Grandfathered caps (2026-07-18) — the only file over the standard, frozen at today's size; it
may NOT grow and should shrink when touched:

- `src/app/inference-log/page.tsx` capped at 457 lines.

## Logging discipline

Minimal server surface (one contact route). Keep its error boundaries logging context (missing
key, Resend error) so a failed send is diagnosable from logs, not guessed. Pages are presentational.
