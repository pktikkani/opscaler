import { type Metadata } from 'next'

import '@/styles/tailwind.css'

const baseUrl = 'https://opscaler.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s - OpScaler',
    default: 'OpScaler - An AI studio for founders',
  },
  description: 'OpScaler is an AI studio that helps founders own, prove, and ship real AI: model fine-tuning and customization, evaluation and observability, AI safety and alignment, sovereign/private AI infrastructure, and AI governance and compliance - applied to voice, RAG, agents, and generative media. A two-person studio out of Wyoming, US.',
  keywords: ['Model Fine-Tuning', 'LLM Evaluation', 'AI Observability', 'AI Safety', 'AI Alignment', 'Sovereign AI', 'Private AI', 'On-Prem LLM', 'AI Governance', 'AI Compliance', 'RAG', 'Voice AI', 'Multi-Agent Systems', 'Generative Media', 'AI Studio', 'LLM', 'Machine Learning', 'Startup', 'United States'],
  authors: [{ name: 'OpScaler', url: baseUrl }],
  creator: 'OpScaler',
  publisher: 'OpScaler',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'OpScaler',
    title: 'OpScaler - An AI studio for founders',
    description: 'AI you can own, prove, and ship. We do model fine-tuning, evaluation and observability, AI safety, sovereign/private AI, and AI governance - applied to voice, RAG, agents, and generative media.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpScaler - An AI studio for founders',
    description: 'AI you can own, prove, and ship. We do model fine-tuning, evaluation and observability, AI safety, sovereign/private AI, and AI governance - applied to voice, RAG, agents, and generative media.',
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
  description: 'AI studio specializing in model fine-tuning and customization, evaluation and observability, AI safety and alignment, sovereign/private AI infrastructure, and AI governance and compliance - applied to voice, RAG, agents, and generative media.',
  foundingDate: '2026',
  founders: [
    { '@type': 'Person', name: 'Pavan Tikkani', jobTitle: 'Co-Founder' },
    { '@type': 'Person', name: 'Karthik Sethupathy', jobTitle: 'Co-Founder' },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '30 N Gould St Ste #65050',
    addressLocality: 'Sheridan',
    addressRegion: 'WY',
    postalCode: '82801',
    addressCountry: 'US',
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
