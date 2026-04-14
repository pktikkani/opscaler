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
    description: 'We start by deeply understanding your business, your users, and your constraints. No 80-page requirements documents. A focused sprint to align on what matters.',
    includes: [
      'Stakeholder interviews',
      'Technical assessment',
      'Architecture planning',
      'Risk analysis',
      'Scope & timeline agreement',
      'Success metrics definition',
    ],
  },
  {
    num: '02',
    title: 'Build',
    duration: 'Weeks 2-5',
    description: 'Agile sprints with working demos every week. You see progress constantly, give feedback early, and we course-correct in real time. No surprises at the end.',
    includes: [
      'Weekly sprint demos',
      'Continuous integration',
      'Automated testing',
      'Code review on every PR',
      'Real-time Slack communication',
      'Iterative design refinement',
    ],
  },
  {
    num: '03',
    title: 'Ship',
    duration: 'Week 6',
    description: 'Deployment isn\'t an afterthought. CI/CD pipelines, monitoring, and documentation are built in from day one. When we ship, it stays shipped.',
    includes: [
      'Production deployment',
      'CI/CD pipeline setup',
      'Performance optimization',
      'Monitoring & alerting',
      'Documentation & handoff',
      'Ongoing support options',
    ],
  },
]

const principles = [
  { title: 'Meticulous', description: 'We sweat the details. Every line of code, every deploy, every design decision is carefully considered.' },
  { title: 'Efficient', description: 'We optimize for outcomes, not activity. Maximum value, minimum waste.' },
  { title: 'Adaptable', description: 'Requirements change. Technology evolves. We embrace it and adjust.' },
  { title: 'Transparent', description: 'Open communication builds trust. You always know where things stand.' },
]

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'How OpScaler works. A three-phase process: Discover, Build, Ship. From idea to production in 6 weeks.',
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
              How we work
            </h1>
            <p className="mt-6 max-w-[540px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A structured but flexible approach. Three phases, six weeks, working
              software at the end. We keep you in the loop at every step.
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
                Tell us about your project and we&apos;ll scope a plan together.
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
