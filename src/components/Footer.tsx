import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const footerLinks = [
  {
    title: 'Disciplines',
    links: [
      { label: 'Fine-Tuning & Customization', href: '/services#fine-tuning' },
      { label: 'Evaluation & Observability', href: '/services#evals' },
      { label: 'AI Safety & Alignment', href: '/services#safety' },
      { label: 'Sovereign / Private AI', href: '/services#sovereign' },
      { label: 'Governance & Compliance', href: '/services#governance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'The Inference Log', href: '/inference-log' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'GitHub', href: 'https://github.com/pktikkani' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/132384119/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border-color)' }}>
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <p className="mt-4 text-sm" style={{ color: 'var(--text-tertiary)' }}>
              Design it. Prove it. Ship it.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:underline"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            &copy;{' '}{new Date().getFullYear()}{' '}OpScaler LLC &mdash; Wyoming, US
          </p>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            30 N Gould St Ste #65050, Sheridan, WY 82801, US
          </p>
        </div>
      </Container>
    </footer>
  )
}
