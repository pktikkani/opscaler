import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const phases = [
  {
    num: '01',
    title: 'Discover',
    duration: 'Week 1',
    description: 'We scope the wedge — the one workflow where AI has to earn its keep — and decide up front what "good" means. That includes the model call: frontier API for speed, or open weights on a box you own for cost and control. Then we write the eval criteria before we write the agent.',
    includes: [
      'Scope the wedge — the workflow that matters',
      'Model decision: frontier API vs open weights on your box',
      'Own-it call: what leaves the building, what stays',
      'Eval criteria defined before the build',
      'Independent judge and pass/fail bar agreed',
      'Success metrics tied to money, not vibes',
    ],
  },
  {
    num: '02',
    title: 'Build',
    duration: 'Weeks 2-5',
    description: 'We build the real thing — the RAG pipeline, the agent loop, the fine-tune — with a working demo every week. The independent eval harness is wired in from day one, so every change is scored by a separate judge model, not graded by the people who wrote it.',
    includes: [
      'RAG / agent / fine-tune build',
      'Independent eval harness wired in day one',
      'A separate judge model scores every change',
      'Weekly demos against the eval bar',
      'Distillation and LoRA/QLoRA where open weights fit',
      'Real-time Slack — no surprises at the end',
    ],
  },
  {
    num: '03',
    title: 'Ship & harden',
    duration: 'Week 6+',
    description: 'Deployment is where most AI dies. AI writes code at warp speed — so this is where we slow down to speed up: read what shipped, test the edges, and gate every release behind the independent judge, with retries, fallbacks, and safety guardrails. Then we harden for cost and latency — roughly 52% cheaper and 74% faster on real workloads. Crisis and edge paths route to a human. When we ship, it stays shipped.',
    includes: [
      'Slow down to speed up — nothing ships unread or unproven',
      'Production deploy with retries and fallbacks',
      'Independent-judge gating on every release',
      'Safety guardrails and crisis paths routed to humans',
      'Cost hardening — ~52% cheaper, quality held',
      'Latency hardening — ~74% faster',
    ],
  },
]

const principles = [
  { title: 'Design it', description: 'Frontier-level systems on hardware you control. No per-token bill that scales against your success, no data leaving the building.' },
  { title: 'Prove it', description: 'Every claim is checked by a separate judge model. We trust nothing unmeasured — not vibes, not self-grading, not our own opinion.' },
  { title: 'Ship it', description: 'Into regulated, money-on-the-line reality — not demos. Retries, fallbacks, and human-in-the-loop where the regulator requires it.' },
  { title: 'Transparent', description: 'Open communication builds trust. Weekly demos against the eval bar mean you always know exactly where things stand.' },
]

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'How OpScaler builds AI you can design, prove, and ship. Three phases: scope the wedge and pick the model, build with an independent eval harness from day one, then ship hardened behind a separate judge — idea to production in ~6 weeks.',
}

export default function Process() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Process
            </p>
            <h1 className="mt-4 max-w-[600px] font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Design it. Prove it. Ship it.
            </h1>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              How we build AI that survives contact with production. Three phases, about
              six weeks to first ship, then hardened. Every claim is scored by a separate
              judge model — receipts, not adjectives. See the{' '}
              <Link href="/inference-log" className="underline underline-offset-2" style={{ color: 'var(--accent-text)' }}>
                inference log
              </Link>{' '}
              for the work behind it.
            </p>
          </FadeIn>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Phases */}
      {phases.map((phase, i) => (
        <div key={phase.num}>
          <section className="py-20">
            <Container>
              <FadeIn>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>{phase.num}</span>
                      <span
                        className="rounded-full px-3 py-0.5 text-xs font-medium"
                        style={{ background: 'var(--accent-subtle)', color: 'var(--accent-text)' }}
                      >
                        {phase.duration}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                      {phase.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {phase.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                      Included
                    </h3>
                    <FadeInStagger faster className="mt-6 space-y-0">
                      {phase.includes.map((item) => (
                        <FadeIn key={item}>
                          <div
                            className="border-b py-3.5 text-[15px]"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                          >
                            {item}
                          </div>
                        </FadeIn>
                      ))}
                    </FadeInStagger>
                  </div>
                </div>
              </FadeIn>
            </Container>
          </section>
          {i < phases.length - 1 && (
            <div className="mx-auto max-w-[1120px] px-6">
              <hr style={{ borderColor: 'var(--border-color)' }} />
            </div>
          )}
        </div>
      ))}

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Principles */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Principles
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              What guides our work
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border-color)' }}>
            {principles.map((p) => (
              <FadeIn key={p.title}>
                <div className="p-8" style={{ background: 'var(--bg-secondary)' }}>
                  <h3 className="font-display text-base font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <Container>
          <FadeIn>
            <div
              className="relative overflow-hidden rounded-3xl border p-12 text-center sm:p-16"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(circle at 50% 0%, var(--accent-subtle), transparent 60%)' }}
              />
              <h2 className="relative font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                Ready to start?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Tell us the wedge and we&apos;ll scope the model, the eval, and the ship together.
              </p>
              <div className="relative mt-7">
                <Link
                  href="/contact"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: 'var(--accent)' }}
                >
                  Start a project &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </SiteLayout>
  )
}
