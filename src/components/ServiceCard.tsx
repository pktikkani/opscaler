'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'

export function ServiceCard({
  num,
  title,
  description,
  href,
}: {
  num: string
  title: string
  description: string
  href: string
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <FadeIn>
      <Link
        href={href}
        className="group block p-8 transition-colors sm:p-10"
        style={{ background: hovered ? 'var(--bg-tertiary)' : 'var(--bg-secondary)' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
          {num}
        </span>
        <h3 className="mt-5 font-display text-[22px] font-bold tracking-tight">
          {title}
        </h3>
        <p className="mt-2.5 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>
        <span
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-all group-hover:gap-2"
          style={{ color: 'var(--accent-text)' }}
        >
          Learn more &rarr;
        </span>
      </Link>
    </FadeIn>
  )
}
