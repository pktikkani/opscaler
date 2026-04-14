import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const services = [
  {
    id: 'ai-ml',
    num: '01',
    title: 'AI & Machine Learning',
    tagline: 'Make AI practical for your business.',
    description: 'We build AI features that solve real problems, not science projects. From chatbots and RAG pipelines to custom model fine-tuning and intelligent automation.',
    capabilities: [
      'Custom chatbots & conversational AI',
      'RAG pipelines & knowledge bases',
      'LLM integration & evaluation',
      'AI-assisted development workflows',
      'Data pipelines & ETL',
      'Model fine-tuning & deployment',
    ],
  },
  {
    id: 'web-mobile',
    num: '02',
    title: 'Web & Mobile Development',
    tagline: 'Ship beautiful products, fast.',
    description: 'Modern React, Next.js, and React Native applications. We build MVPs in weeks, not months, with code that scales as you grow. From landing pages to full SaaS platforms.',
    capabilities: [
      'React & Next.js web applications',
      'React Native cross-platform mobile',
      'Progressive Web Apps (PWA)',
      'E-commerce & marketplace platforms',
      'SaaS product development',
      'API design & development',
    ],
  },
  {
    id: 'cloud',
    num: '03',
    title: 'Cloud Infrastructure',
    tagline: 'Right-sized. Not over-engineered.',
    description: 'Cloud architecture that matches your actual needs, not what a sales rep thinks you need. We optimize for cost and performance across AWS, GCP, and Azure.',
    capabilities: [
      'Cloud architecture & migration',
      'AWS / GCP / Azure setup & optimization',
      'Serverless & edge computing',
      'Database design & optimization',
      'Cost optimization & monitoring',
      'Multi-cloud & hybrid strategies',
    ],
  },
  {
    id: 'devops',
    num: '04',
    title: 'DevOps & Automation',
    tagline: 'Deploy with confidence.',
    description: 'Stop deploying manually. We set up the pipelines, containers, and monitoring so your team ships faster and catches problems before your users do.',
    capabilities: [
      'CI/CD pipeline setup',
      'Docker & Kubernetes',
      'Infrastructure as Code (Terraform)',
      'Monitoring & alerting',
      'Security hardening & compliance',
      'Performance optimization',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description: 'AI/ML, Web & Mobile, Cloud Infrastructure, and DevOps services for startups and small businesses.',
}

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Services
            </p>
            <h1 className="mt-4 max-w-[600px] font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Everything you need to ship.
            </h1>
            <p className="mt-6 max-w-[480px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From idea to production. One team, full stack, no handoffs.
              We handle the technology so you can focus on your business.
            </p>
          </FadeIn>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Service Details */}
      {services.map((service, i) => (
        <div key={service.id}>
          <section id={service.id} className="scroll-mt-20 py-20">
            <Container>
              <FadeIn>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {service.num}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg font-medium" style={{ color: 'var(--accent-text)' }}>
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                        style={{ background: 'var(--accent)' }}
                      >
                        Discuss your project &rarr;
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                      Capabilities
                    </h3>
                    <FadeInStagger faster className="mt-6 space-y-0">
                      {service.capabilities.map((cap) => (
                        <FadeIn key={cap}>
                          <div
                            className="border-b py-3.5 text-[15px]"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                          >
                            {cap}
                          </div>
                        </FadeIn>
                      ))}
                    </FadeInStagger>
                  </div>
                </div>
              </FadeIn>
            </Container>
          </section>
          {i < services.length - 1 && (
            <div className="mx-auto max-w-[1120px] px-6">
              <hr style={{ borderColor: 'var(--border-color)' }} />
            </div>
          )}
        </div>
      ))}

      {/* CTA */}
      <section className="pb-20 pt-8">
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
                Not sure what you need?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Tell us about your project. We&apos;ll figure out the right approach together.
              </p>
              <div className="relative mt-7">
                <Link
                  href="/contact"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: 'var(--accent)' }}
                >
                  Start a conversation &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </SiteLayout>
  )
}
