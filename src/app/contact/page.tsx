'use client'

import { useState, useId } from 'react'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="focus-accent mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition"
        style={{
          background: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
        }}
      />
    </div>
  )
}

function TextArea({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="block text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className="focus-accent mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm outline-none transition"
        style={{
          background: 'var(--bg-primary)',
          borderColor: 'var(--border-color)',
          color: 'var(--text-primary)',
          minHeight: 120,
          resize: 'vertical',
        }}
      />
    </div>
  )
}

function RadioGroup({
  label,
  options,
  name,
}: {
  label: string
  options: { label: string; value: string }[]
  name: string
}) {
  return (
    <fieldset>
      <legend className="text-[13px] font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </legend>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {options.map((opt) => (
          <label key={opt.value} className="flex cursor-pointer items-center gap-2.5">
            <input
              type="radio"
              name={name}
              value={opt.value}
              className="h-4 w-4 appearance-none rounded-full border-2 checked:border-[5px] transition"
              style={{ borderColor: 'var(--border-hover)' }}
            />
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{opt.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function Contact() {
  const [isPending, setIsPending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setIsPending(true)
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <SiteLayout>
      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Info */}
            <FadeIn>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
                Contact
              </p>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
                Let&apos;s work together.
              </h1>
              <p className="mt-6 max-w-[400px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a plan.
              </p>

              <div className="mt-12 space-y-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                    Location
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    30 N Gould St Ste #65050,<br />Sheridan, WY 82801, US
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                    Connect
                  </h3>
                  <div className="mt-2 flex gap-4">
                    {[
                      { label: 'GitHub', href: 'https://github.com/pktikkani' },
                      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/132384119/' },
                    ].map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="text-sm font-medium transition-colors hover:underline"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <TextInput label="Name" name="name" autoComplete="name" required disabled={isPending} placeholder="Jane Smith" />
                <TextInput label="Email" name="email" type="email" autoComplete="email" required disabled={isPending} placeholder="jane@startup.com" />
                <TextInput label="Company" name="company" autoComplete="organization" disabled={isPending} placeholder="Acme Inc." />
                <TextArea label="Tell us about your project" name="message" required disabled={isPending} placeholder="We're building a..." />

                <RadioGroup
                  label="Budget"
                  name="budget"
                  options={[
                    { label: '$5K - $15K', value: '5K-15K' },
                    { label: '$15K - $30K', value: '15K-30K' },
                    { label: '$30K - $50K', value: '30K-50K' },
                    { label: '$50K+', value: '50K+' },
                  ]}
                />

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full py-3 text-sm font-semibold text-white transition-all hover:brightness-110 disabled:opacity-50"
                  style={{ background: 'var(--accent)' }}
                >
                  {isPending ? 'Sending...' : 'Send message \u2192'}
                </button>

                {status === 'success' && (
                  <p className="text-sm" style={{ color: 'var(--accent-text)' }}>
                    Thanks &mdash; we got your message and will reply within 24 hours.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm" style={{ color: '#ef4444' }}>
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </Container>
      </section>
    </SiteLayout>
  )
}
