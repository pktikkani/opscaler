import { type Metadata } from 'next'

import '@/styles/tailwind.css'

const baseUrl = 'https://opscaler.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s - OpScaler',
    default: 'OpScaler - Build. Ship. Scale.',
  },
  description: 'OpScaler helps startups and small businesses build and scale with AI/ML, Web & Mobile Development, Cloud Computing, and DevOps. Founded in the US by experienced technologists.',
  keywords: ['AI', 'Machine Learning', 'Web Development', 'Mobile Development', 'Cloud Computing', 'DevOps', 'Startup', 'Small Business', 'Technology', 'Software Development'],
  authors: [{ name: 'OpScaler', url: baseUrl }],
  creator: 'OpScaler',
  publisher: 'OpScaler',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'OpScaler',
    title: 'OpScaler - Build. Ship. Scale.',
    description: 'We help startups and small businesses build and scale with AI/ML, Web & Mobile Development, Cloud Computing, and DevOps.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpScaler - Build. Ship. Scale.',
    description: 'We help startups and small businesses build and scale with AI/ML, Web & Mobile Development, Cloud Computing, and DevOps.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OpScaler',
  legalName: 'OpScaler LLC',
  url: baseUrl,
  description: 'Technology company helping startups and small businesses build and scale.',
  foundingDate: '2026',
  founders: [
    { '@type': 'Person', name: 'Pavan Tikkani', jobTitle: 'Co-Founder' },
    { '@type': 'Person', name: 'Karthik Sethupathy', jobTitle: 'Co-Founder' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Delaware',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@opscaler.com',
    contactType: 'customer service',
  },
  areaServed: 'United States',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body className="bg-site text-site min-h-full" style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
