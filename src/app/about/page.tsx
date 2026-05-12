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
    bio: 'Nearly two decades in global technology. Known for simplifying complex challenges and an unwavering passion for clean, elegant code. Deep expertise across established and cutting-edge tech stacks.',
    image: '/team/pavan.png',
  },
  {
    name: 'Karthik Sethupathy',
    role: 'Co-Founder',
    bio: 'Seasoned technologist with deep expertise in cloud infrastructure, AWS, and enterprise-grade SaaS. Built his career across leading Bay Area tech companies. Sharp, detail-oriented approach to complex infrastructure challenges.',
    image: '/team/karthik.png',
  },
]

const values = [
  { title: 'Ship fast', description: 'We optimize for time-to-market. Working software beats perfect plans.' },
  { title: 'Stay lean', description: 'No bloated teams, no unnecessary process. Every person and every line of code earns its place.' },
  { title: 'Be transparent', description: 'Same Slack, same repos, same standups. You always know what we\'re building and why.' },
  { title: 'Build to last', description: 'Fast doesn\'t mean sloppy. We write code your next engineer will thank you for.' },
  { title: 'Think like owners', description: 'We treat your runway like our own. Every decision balances speed, cost, and quality.' },
  { title: 'Keep learning', description: 'Technology moves fast. We stay current so your stack doesn\'t become legacy.' },
]

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind OpScaler. Two experienced technologists helping startups and small businesses build and scale.',
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
              Two builders who still write code every day.
            </h1>
            <div className="mt-8 max-w-[540px] space-y-5 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                OpScaler was founded in the US by Pavan and Karthik &mdash; two
                experienced technologists who believe great technology shouldn&apos;t
                require enterprise budgets or six-month timelines.
              </p>
              <p>
                We work directly with founders and small teams to build products.
                No account managers, no layers of process. Just senior engineers
                who understand both the code and the business.
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

          <FadeInStagger className="mt-12 grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3" style={{ background: 'var(--border-color)' }}>
            {values.map((value) => (
              <FadeIn key={value.title}>
                <div className="p-8" style={{ background: 'var(--bg-secondary)' }}>
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
