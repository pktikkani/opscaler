import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const founders = [
  {
    name: 'Pavan Tikkani',
    role: 'Co-Founder',
    bio: 'Nearly two decades in global technology, now focused on the hard end of AI systems: fine-tuning and distilling open-weight models to frontier parity, LoRA/QLoRA on domain data, and independent multi-judge evals so quality is measured, not asserted. Known for simplifying complex challenges and an unwavering passion for clean, elegant code.',
    image: '/team/pavan.png',
  },
  {
    name: 'Karthik Sethupathy',
    role: 'Co-Founder',
    bio: 'Seasoned technologist who built his career across leading Bay Area tech companies. Owns the AI-infrastructure backbone: sovereign, on-prem model serving on hardware the customer controls (MLX, vLLM, llama.cpp), the full agent loop over MCP, and zero-egress deployments that run at fixed cost. Sharp, detail-oriented approach to standing up frontier-level models on a box you own.',
    image: '/team/karthik.png',
  },
]

const values = [
  { title: 'Design it', description: 'We design frontier-level systems on hardware you control. No per-token bill, no data egress — you own the model and the data.' },
  { title: 'Prove it', description: 'Never ship on vibes. Every claim is checked by a separate judge model — independent evals, not self-grading.' },
  { title: 'Ship it', description: 'Into regulated, money-on-the-line reality — fintech voice payments, life-sciences CMC — not demos. When we ship, it stays shipped.' },
  { title: 'Stay lean', description: 'A small, senior team — the people who design it are the ones who build it. No account managers, no layers of process, no bench to hand you off to. No excess, no compromise.' },
  { title: 'Move in weeks', description: 'Idea to production in about six weeks, then hardened. Fast doesn’t mean sloppy — we write code your next engineer will thank you for.' },
  { title: 'Slow down to speed up', description: 'AI writes code at warp speed. More is generated than ever, and less of it reviewed. So we slow down where it counts — read the code, test the edges, gate it behind a separate judge — because that’s what makes the speed safe to keep.' },
  { title: 'Keep learning', description: 'The frontier moves weekly. We stay current on models, tooling, and technique so your stack stays sharp, not legacy.' },
]

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind OpScaler — a small, senior AI studio built on the hard disciplines: fine-tuning, evals, AI safety, sovereign on-prem inference, and governance. Design it, prove it, ship it.',
}

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              About
            </p>
            <h1 className="mt-4 max-w-[600px] font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
              A small team, deep in the hard parts of AI.
            </h1>
            <div className="mt-8 max-w-[540px] space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                OpScaler is a small, senior AI studio, founded in the US by Pavan and
                Karthik. We&apos;re not a generic dev shop that added an AI page &mdash;
                our edge is depth in the hard disciplines: fine-tuning open-weight
                models to frontier parity, independent evals, AI safety, sovereign
                on-prem inference, and governance for regulated work.
              </p>
              <p>
                We build directly with founders and small teams. No account managers,
                no layers of process &mdash; just senior engineers who own the model,
                prove the quality with a separate judge, and ship it into
                money-on-the-line reality. When we ship, it stays shipped.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Founders */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Team
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Founded by builders
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {founders.map((person) => (
              <FadeIn key={person.name}>
                <div
                  className="rounded-2xl border p-8"
                  style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border"
                      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-primary)' }}
                    >
                      {person.image ? (
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className="flex h-full w-full items-center justify-center font-display text-2xl font-bold"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {person.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">{person.name}</h3>
                      <p className="mt-1 text-sm font-medium" style={{ color: 'var(--accent-text)' }}>
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {person.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Values */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              How we think
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              Our values
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4" style={{ background: 'var(--border-color)' }}>
            {values.map((value, i) => (
              <FadeIn key={value.title} className={i === values.length - 1 ? 'sm:col-span-2 lg:col-span-2' : undefined}>
                <div className="h-full p-8" style={{ background: 'var(--bg-secondary)' }}>
                  <h3 className="font-display text-base font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {value.description}
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
                Want to work with us?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                We&apos;re always looking for interesting projects.
              </p>
              <div className="relative mt-7">
                <Link
                  href="/contact"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: 'var(--accent)' }}
                >
                  Get in touch &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </SiteLayout>
  )
}
