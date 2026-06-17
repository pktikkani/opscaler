import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'AI & Machine Learning', href: '/services#ai-ml' },
      { label: 'Web & Mobile', href: '/services#web-mobile' },
      { label: 'Cloud Infrastructure', href: '/services#cloud' },
      { label: 'DevOps & Automation', href: '/services#devops' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Process', href: '/process' },
      { label: 'Case Studies', href: '/case-studies' },
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
              Build. Ship. Scale.
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
            &copy; {new Date().getFullYear()} OpScaler LLC &mdash; Delaware, US
          </p>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            30 N Gould St Ste #65050, Sheridan, WY 82801, US
          </p>
        </div>
      </Container>
    </footer>
  )
}
