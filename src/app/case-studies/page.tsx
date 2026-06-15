import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { caseStudies } from '@/lib/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real work, real outcomes. How OpScaler ships AI/ML, web, cloud, and DevOps projects for startups and small businesses.',
}

export default function CaseStudies() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Case Studies
            </p>
            <h1 className="mt-4 max-w-[600px] font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Real work, real outcomes.
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A look under the hood at how we approach hard problems — the
              decisions, the dead ends, and the results that shipped.
            </p>
          </FadeIn>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* List */}
      <section className="py-20">
        <Container>
          <FadeInStagger className="grid gap-px overflow-hidden rounded-2xl" style={{ background: 'var(--border-color)' }}>
            {caseStudies.map((study) => (
              <FadeIn key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group block p-8 transition-colors sm:p-10"
                  style={{ background: 'var(--bg-secondary)' }}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="rounded-full px-3 py-0.5 text-xs font-medium"
                      style={{ background: 'var(--accent-subtle)', color: 'var(--accent-text)' }}
                    >
                      {study.category}
                    </span>
                    <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {study.date}
                    </span>
                  </div>
                  <h2 className="mt-4 max-w-[760px] font-display text-2xl font-extrabold tracking-[-0.02em] transition-colors group-hover:text-accent sm:text-3xl">
                    {study.title}
                  </h2>
                  <p className="mt-2 text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                    {study.client}
                  </p>
                  <p className="mt-4 max-w-[680px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {study.summary}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-semibold" style={{ color: 'var(--accent-text)' }}>
                    Read the case study &rarr;
                  </span>
                </Link>
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
                Have a hard problem?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Tell us about your project. We&apos;ll scope a plan together.
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
