'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'
import { Logo, Logomark } from '@/components/Logo'

const links = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/inference-log', label: 'Inference Log' },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'color-mix(in srgb, var(--bg-primary) 80%, transparent)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Home">
          <Logo className="hidden sm:flex" />
          <Logomark className="sm:hidden" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm font-medium transition-colors',
                pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'text-accent'
                  : '',
              )}
              style={{
                color: pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'var(--accent-text)'
                  : 'var(--text-secondary)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = pathname === link.href || pathname?.startsWith(link.href + '/')
                  ? 'var(--accent-text)'
                  : 'var(--text-secondary)'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ background: 'var(--accent)' }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 7h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="border-t px-6 py-4 md:hidden"
          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 block rounded-full px-5 py-2.5 text-center text-sm font-semibold text-white"
            style={{ background: 'var(--accent)' }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
