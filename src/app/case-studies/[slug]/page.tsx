import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { caseStudies, getCaseStudy } from '@/lib/case-studies'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return {
    title: `Case Study — ${study.title}`,
    description: study.summary,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(600px circle at 30% 20%, var(--accent-glow), transparent 60%)' }}
        />
        <Container>
          <FadeIn>
            <Link
              href="/case-studies"
              className="font-mono text-xs font-medium transition-colors hover:underline"
              style={{ color: 'var(--accent-text)' }}
            >
              &larr; Case Studies
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
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
            <h1 className="mt-5 max-w-[820px] font-display text-4xl font-extrabold tracking-[-0.03em] leading-[1.05] sm:text-5xl md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-5 text-base font-medium" style={{ color: 'var(--text-tertiary)' }}>
              {study.client}
            </p>

            <dl className="mt-8 grid max-w-[760px] gap-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Goal
                </dt>
                <dd className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {study.goal}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Outcome
                </dt>
                <dd className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {study.outcome}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                  Status
                </dt>
                <dd className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {study.status}
                </dd>
              </div>
            </dl>
          </FadeIn>
        </Container>
      </section>

      {/* Stats */}
      <section className="pb-10">
        <Container>
          <FadeIn>
            <div
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4"
              style={{ background: 'var(--border-color)' }}
            >
              {study.stats.map((stat) => (
                <div key={stat.label} className="p-8 text-center" style={{ background: 'var(--bg-secondary)' }}>
                  <div
                    className="font-display text-2xl font-black tracking-tight sm:text-3xl"
                    style={{
                      background: 'linear-gradient(135deg, var(--text-primary), var(--accent-text))',
                      WebkitBackgroundClip: 'text',
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

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Body */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <FadeInStagger className="space-y-16">
              {study.sections.map((section, i) => (
                <FadeIn key={section.heading}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">
                      {section.heading}
                    </h2>
                  </div>

                  {section.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className="mt-4 text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {p}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-6 space-y-0">
                      {section.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="border-b py-3.5 text-[15px] leading-relaxed"
                          style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.table && (
                    <div className="mt-6 overflow-x-auto">
                      <table className="w-full border-collapse text-left text-sm">
                        <thead>
                          <tr>
                            {section.table.columns.map((col) => (
                              <th
                                key={col}
                                className="border-b py-3 pr-4 align-bottom text-xs font-semibold uppercase tracking-wider"
                                style={{ borderColor: 'var(--border-color)', color: 'var(--text-tertiary)' }}
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="border-b py-3 pr-4 align-top leading-relaxed"
                                  style={{
                                    borderColor: 'var(--border-color)',
                                    color: ci === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                                    fontWeight: ci === 0 ? 600 : 400,
                                  }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </FadeIn>
              ))}
            </FadeInStagger>

            {study.footnote && (
              <FadeIn>
                <p
                  className="mt-16 border-t pt-8 text-sm italic leading-relaxed"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-tertiary)' }}
                >
                  {study.footnote}
                </p>
              </FadeIn>
            )}
          </div>
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
                Want results like this?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Tell us about your project. We respond within 24 hours.
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
