import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ServiceCard } from '@/components/ServiceCard'

const services = [
  {
    num: '01',
    title: 'Model Fine-Tuning & Customization',
    description: 'Distillation plus LoRA/QLoRA to reach frontier parity on your domain, on open weights you keep. Proof: a local OLMo-3.1-32B + LoRA reached parity with Claude Opus 4.8 on our hardest in-domain workflows.',
    href: '/services#fine-tuning',
  },
  {
    num: '02',
    title: 'Evaluation & Observability',
    description: 'Trust nothing unmeasured. Independent multi-judge panels, model scorecards, and hallucination detection with DeepEval, Inspect, and pydantic-evals. Proof: cut model cost ~70% with quality held, gated by a separate judge model, not the team.',
    href: '/services#evals',
  },
  {
    num: '03',
    title: 'AI Safety & Alignment',
    description: 'Adversarial safety harnesses, crisis routing, and red-teaming before ship. We never validate a delusion. Proof: a voice-safety harness routed 4/4 crisis categories to a human, judged on the agent’s verbatim words.',
    href: '/services#safety',
  },
  {
    num: '04',
    title: 'Sovereign / Private AI',
    description: 'The full agent loop — reasoning, tool-calling over MCP, memory, RAG, even voice — on open models running on a box you control. No egress, fixed cost, MLX / vLLM / llama.cpp. Proof: a self-hosted ~32B model at frontier level, parked for ~$16/mo.',
    href: '/services#sovereign',
  },
]

const stats = [
  { value: 'Parity', label: 'Local 32B vs Claude Opus 4.8' },
  { value: '~70%', label: 'Model cost cut, quality held' },
  { value: '4/4', label: 'Crisis categories routed to a human' },
  { value: '~$16/mo', label: 'Frontier-level model, on-prem' },
]

export const metadata: Metadata = {
  description: 'OpScaler is a two-person AI studio. We fine-tune, evaluate, secure, and govern AI you own, prove it with an independent judge model, and ship it into regulated reality. Own it. Prove it. Ship it.',
}

export default function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 md:py-40">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(600px circle at 30% 30%, var(--accent-glow), transparent 60%)',
          }}
        />
        <Container>
          <FadeIn>
            <p className="font-mono text-[13px] font-medium tracking-wide" style={{ color: 'var(--accent-text)' }}>
              // an AI studio for founders
            </p>
            <h1 className="mt-5 max-w-[700px] font-display text-5xl font-black tracking-[-0.04em] leading-[0.95] sm:text-7xl md:text-8xl">
              Own it.
              <br />
              Prove it.
              <br />
              <span style={{ color: 'var(--accent-text)' }}>Ship it.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A two-person AI studio that runs frontier-level models on hardware
              you own — no per-token bill, no data egress — proves every claim
              with a separate judge model instead of vibes, and ships into
              regulated, money-on-the-line reality. When we ship, it stays shipped.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: 'var(--accent)' }}
              >
                Start a build &rarr;
              </Link>
              <Link
                href="/inference-log"
                className="rounded-full border px-6 py-2.5 text-sm font-semibold transition-all"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                The Inference Log
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Stats */}
      <section className="py-10">
        <Container>
          <FadeIn>
            <div
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4"
              style={{ background: 'var(--border-color)' }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 text-center" style={{ background: 'var(--bg-secondary)' }}>
                  <div
                    className="font-display text-3xl font-black tracking-tight"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, var(--text-primary), var(--accent-text))',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[13px] font-medium" style={{ color: 'var(--text-tertiary)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Disciplines */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              What we do
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl md:text-[44px] md:leading-[1.1]">
              The disciplines,
              <br />
              not the demos.
            </h2>
            <p className="mt-3 max-w-[520px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Not another six-box AI grid. These are the disciplines few studios
              can actually claim — and each one is backed by one concrete receipt
              from real shipped work.
            </p>
          </FadeIn>

          <div className="mt-12">
            <div
              className="grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2"
              style={{ background: 'var(--border-color)' }}
            >
              {services.map((service) => (
                <ServiceCard key={service.num} {...service} />
              ))}
            </div>
          </div>

          <FadeIn>
            <div
              className="mt-6 rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
            >
              <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
                And AI Governance &amp; Compliance
              </p>
              <p className="mt-2.5 max-w-[720px] text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Regulated domains with auditability — citation traceability, CTD/CMC
                mapping, scope discipline, human-in-the-loop where the regulator
                requires. Proof: biologics CMC proposal authoring (CTD Module 3)
                with deterministic validators as a hard quality gate.{' '}
                <Link href="/services#governance" className="font-semibold" style={{ color: 'var(--accent-text)' }}>
                  See the disciplines &rarr;
                </Link>
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Slow down to speed up */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
                The discipline
              </p>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl md:leading-[1.1]">
                AI writes code at warp speed.
                <br />
                <span style={{ color: 'var(--accent-text)' }}>We slow down to prove it.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                More code is generated than ever, and less of it reviewed. That&apos;s
                where AI projects quietly break. So we ship fast, then slow down where
                it counts — read what shipped, test the edges, and gate every release
                behind a separate judge model, not a vibe. Slowing down there is the
                whole reason the speed is safe to keep.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Applied — proof underneath, not co-equal boxes */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              What they produce
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
              In production, these
              <br />
              show up as
            </h2>
            <p className="mt-3 max-w-[560px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Voice agents that authenticate callers and take card payments.
              Document intelligence that reads layout, tables, and stamps.
              Multi-agent systems that plan, call tools, and hand off. And
              catalogue-accurate generative media that matches a real SKU. The
              receipts are written up in{' '}
              <Link href="/inference-log" className="font-semibold" style={{ color: 'var(--accent-text)' }}>
                The Inference Log
              </Link>{' '}
              and the{' '}
              <Link href="/case-studies" className="font-semibold" style={{ color: 'var(--accent-text)' }}>
                case studies
              </Link>
              .
            </p>
          </FadeIn>

          <FadeInStagger>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                'Conversational & Voice AI',
                'RAG & Document Intelligence',
                'Agentic / Multi-Agent Systems',
                'Generative Media',
              ].map((label) => (
                <FadeIn key={label}>
                  <span
                    className="inline-flex rounded-full border px-4 py-2 text-sm font-medium"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                  >
                    {label}
                  </span>
                </FadeIn>
              ))}
            </div>
          </FadeInStagger>

          <FadeIn>
            <p className="mt-8 max-w-[560px] text-[13px] leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
              We ship the surrounding engineering too — web, mobile, cloud, and
              the deploy pipeline — but the AI discipline is the point.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
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
              <p className="relative font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
                Ready?
              </p>
              <h2 className="relative mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                Own it. Prove it.
                <br />
                Ship it.
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Two founders, both still coding daily, out of Wyoming. Idea to
                production in ~6 weeks, then hardened. No bloat, no BS. We respond
                within 24 hours.
              </p>
              <div className="relative mt-7">
                <Link
                  href="/contact"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: 'var(--accent)' }}
                >
                  Start a build &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </SiteLayout>
  )
}
