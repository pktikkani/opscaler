import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { ServiceCard } from '@/components/ServiceCard'

const services = [
  {
    num: '01',
    title: 'AI & Machine Learning',
    description: 'Custom AI integrations, chatbots, RAG pipelines, and intelligent automation. We make AI practical, not theoretical.',
    href: '/services#ai-ml',
  },
  {
    num: '02',
    title: 'Web & Mobile',
    description: 'React, Next.js, React Native. Beautiful, fast applications from MVP to scale. Code that your next engineer will thank you for.',
    href: '/services#web-mobile',
  },
  {
    num: '03',
    title: 'Cloud Infrastructure',
    description: 'Right-sized AWS, GCP, or Azure. No over-provisioning. Infrastructure that costs what it should and scales when you need it.',
    href: '/services#cloud',
  },
  {
    num: '04',
    title: 'DevOps & Automation',
    description: 'CI/CD, Docker, Kubernetes, monitoring. The boring stuff that makes shipping painless. Set up once, deploy forever.',
    href: '/services#devops',
  },
]

const stats = [
  { value: '20+', label: 'Years combined experience' },
  { value: '4', label: 'Core services' },
  { value: 'US', label: 'Based & incorporated' },
  { value: '2', label: 'Founders, hands-on' },
]

export const metadata: Metadata = {
  description: 'OpScaler helps startups and small businesses build and scale with AI/ML, Web & Mobile Development, Cloud Computing, and DevOps.',
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
              // for startups that ship
            </p>
            <h1 className="mt-5 max-w-[700px] font-display text-5xl font-black tracking-[-0.04em] leading-[0.95] sm:text-7xl md:text-8xl">
              Build it.
              <br />
              Ship it.
              <br />
              <span style={{ color: 'var(--accent-text)' }}>Scale it.</span>
            </h1>
            <p className="mt-6 max-w-[480px] text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A lean US-based engineering team that turns your idea into a product.
              No enterprise bloat. No six-month timelines. Just great code that
              grows with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                style={{ background: 'var(--accent)' }}
              >
                Start a project &rarr;
              </Link>
              <Link
                href="/process"
                className="rounded-full border px-6 py-2.5 text-sm font-semibold transition-all"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)',
                }}
              >
                How we work
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

      {/* Services */}
      <section className="py-20">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Services
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl md:text-[44px] md:leading-[1.1]">
              What we build
            </h2>
            <p className="mt-3 max-w-[460px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Full-stack product engineering for startups and small businesses. Every service, one team.
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
                Let&apos;s build
                <br />
                something great.
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
