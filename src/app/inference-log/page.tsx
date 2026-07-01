import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'The Inference Log',
  description:
    "A few years of it. The real AI we've shipped at OpScaler — voice agents that take the payment, document intelligence people actually use, generative imagery, agent swarms, and the whole agent loop running on your own hardware.",
  openGraph: {
    title: 'The Inference Log — OpScaler',
    description: "We've shipped AI for years. Here's the log.",
  },
}

/* ----------------------------------------------------------------- data */

const capabilities = [
  {
    eyebrow: 'voice that closes the loop',
    headline: 'Voice agents that actually take the payment',
    body: "Not a hotline that reads a menu. A real agent that authenticates the caller, takes the card payment, works the fraud case, switches languages mid-call, and hands off to a human only where the regulator says it has to. We've built the full stack — telephony, ASR, function-calling, web search, TTS — and the safety rails to go with it.",
    proof: [
      'Automated a credit-card service line end to end: auth, payments, fraud, multilingual',
      'Aura on Pipecat + Deepgram + ElevenLabs with function-calling and live web search',
      'Auralis on LiveKit with self-hosted XTTS v2 — your voice stack, your box',
      'A voice safety harness that routes 4/4 crisis categories to a human and never validates a delusion',
    ],
  },
  {
    eyebrow: 'meetings, transcribed and understood',
    headline: 'Conversational and meeting assistants',
    body: "Bots that join Teams, Zoom, and web calls, transcribe on GPU in real time, and turn an hour of talk into something you can act on. Built on durable workflows so a dropped frame or a flaky network doesn't lose the meeting.",
    proof: [
      'Recapture: meeting bots on Claude + WhisperX, orchestrated on Temporal for durability',
      'GPU transcription pipeline that survives reconnects and partial failures',
      'Meeting Transcriber on WhisperX + pyannote for clean speaker separation',
    ],
  },
  {
    eyebrow: 'RAG people actually use',
    headline: 'Document intelligence that finds the answer',
    body: 'Search that reads the page like a person does — layout, tables, stamps, handwriting — not just the text a parser could scrape. Late-interaction visual retrieval over messy real documents, plus structured extraction that turns a pile of PDFs into clean rows.',
    proof: [
      'Harvestor: visual doc search on ColQwen2.5 late-interaction + LanceDB',
      'Knova: app, API, and a GenAI pipeline-optimization layer on DSPy + DeepEval',
      'HireMagic: Mistral structured extraction of resumes and invoices into clean data',
      'A full ColPali / ColQwen / ColNomic late-interaction stack we know cold',
    ],
  },
  {
    eyebrow: 'pixels on demand',
    headline: 'Generative imagery that stays on-brand',
    body: "Image generation that respects the catalogue. Renders that match a real SKU, not a pretty hallucination. We've wired image models into pipelines that produce assets you can actually ship to a customer.",
    proof: [
      'Agam: catalogue-accurate interior renders for real laminate SKUs on gpt-image-2',
      'BookForge: turns a code repo into an illustrated explainer PDF on Claude Opus + gpt-image-2',
      'FLUX in the toolkit for the jobs that call for it',
    ],
  },
  {
    eyebrow: 'agents that do the work',
    headline: 'Multi-agent systems and a web3 experiment',
    body: 'Agent loops that plan, call tools, remember, and hand off to each other — built on the frameworks we reach for daily. And when we want to see where this is all going, we build it: an agent-to-agent marketplace settling sub-cent payments on-chain.',
    proof: [
      'Nexus: multi-agent collaborator spanning ESG, math, patent, regulatory, and research',
      'Memory Agent for long-term recall; Mindful Poster for autonomous content; ml-intern for autonomous coding',
      'Agentic Economy on Arc: A2A marketplace, sub-cent USDC x402 payments, on-chain ERC-8004 reputation',
      'PydanticAI, LangGraph, and Google ADK — picked per job, not per fashion',
    ],
  },
  {
    eyebrow: 'own your model, kill the per-token bill',
    headline: 'Local agents on your own hardware',
    body: "Here's the part most studios can't do: the full agent loop — reasoning, tool-calling over MCP, memory, RAG, even voice — running entirely on open models on a box you control. No per-token bill that scales against your success. No data leaving the building. For a founder watching burn, that's not a footnote. That's the architecture.",
    proof: [
      'Full local agent loop: PydanticAI on local models, MCP tools against local servers, memory and RAG on-box',
      'A self-hosted ~32B model at frontier level on a hard workload — parked for ~$16/mo',
      'Hands-on MLX, vLLM-on-Metal, and llama.cpp with local model-serving APIs',
      'Experimented with running frontier-class mixture-of-experts LLMs locally at low bit-depth, and with on-device real-time speech-to-text',
    ],
  },
  {
    eyebrow: 'prove it, then ship it',
    headline: 'Evals and cost work that hold the line',
    body: "We don't ship on vibes. Every claim gets checked by a separate judge model — not the one that wrote the answer, not us. That discipline is how we cut model cost ~70% without losing quality, and how we took a generation pipeline from 39 seconds to 14.",
    proof: [
      '~70% model cost cut with quality held, gated by an independent judge',
      '39.1s → 14.2s (~64% faster) via parallel section generation',
      'ICL eval framework: hallucination detection and model scorecards across Claude, GPT-4o, Mistral, SAP',
      'Teacher → local-MLX student distillation, plus DeepEval / Inspect / pydantic-evals rigs',
    ],
  },
]

const flagships = [
  {
    kicker: 'voice · payments · fraud · multilingual',
    title: 'The credit-card line that runs itself',
    story:
      'A credit-card service line, heavily automated end to end. The agent authenticates the caller, takes the payment, works fraud cases, and switches languages without dropping the thread. A human only gets pulled in where the regulator requires one. This is voice AI past the demo — handling money, handling identity, handling the calls nobody wants to wait on hold for.',
    tags: ['Voice', 'Telephony', 'Payments', 'Multilingual', 'Fraud'],
  },
  {
    kicker: 'real-time voice · function-calling · self-hosted TTS',
    title: 'Aura & Auralis — the voice stack, your way',
    story:
      'Two takes on real-time voice. Aura runs on Pipecat with Deepgram and ElevenLabs, calling functions and searching the web mid-conversation. Auralis runs on LiveKit with self-hosted XTTS v2 — same conversational quality, none of the data leaving your infrastructure. And Pipecat Local takes it all the way: STT and TTS fully on-device. Pick your tradeoff; we’ve built all three.',
    tags: ['Pipecat', 'LiveKit', 'Deepgram', 'XTTS v2', 'On-device'],
  },
  {
    kicker: 'visual RAG · late-interaction · LanceDB',
    title: 'Harvestor — search that reads the page',
    story:
      "Most document search throws away everything that isn't text. Harvestor doesn't. It runs ColQwen2.5 late-interaction retrieval over LanceDB, matching on the actual layout of a page — the table, the stamp, the figure, the thing a plain parser would flatten into noise. Ask a real question, get the real page back.",
    tags: ['ColQwen2.5', 'Late-interaction', 'Visual RAG', 'LanceDB'],
  },
  {
    kicker: 'gpt-image-2 · catalogue-accurate',
    title: 'Agam — renders that match the SKU',
    story:
      'Generative imagery usually gives you something beautiful and wrong. Agam gives you something correct. It produces interior renders that match real laminate SKUs from the actual catalogue, on gpt-image-2 — accurate enough to put in front of a buyer. The constraint was the whole project: the model had to respect the product, not reinvent it.',
    tags: ['gpt-image-2', 'Generative imagery', 'Catalogue-accurate'],
  },
  {
    kicker: 'A2A · x402 · ERC-8004 · on-chain',
    title: 'Agentic Economy on Arc',
    story:
      "A hackathon build, because that's how we stay ahead of where this is going. An agent-to-agent marketplace where agents discover each other, transact with sub-cent USDC x402 payments, and carry an on-chain ERC-8004 reputation. Speculative, fast, and real enough to run. The kind of thing you build when you want to feel the future before it's a product.",
    tags: ['Agentic', 'Web3', 'USDC x402', 'ERC-8004', 'Hackathon'],
  },
  {
    kicker: 'local · ~32B · ~$16/mo · no egress',
    title: 'Frontier-level on a box you own',
    story:
      'We stood up a ~32B open model on-prem, self-hosted, and got it to frontier level on a genuinely hard workload — verified by a separate judge, not by us. Parked, it costs about $16 a month. No per-token meter ticking against your growth. No data egress to anyone’s cloud. For a founder, owning the model is the difference between a margin and a hostage situation.',
    tags: ['Local inference', 'Self-hosted', 'MLX', 'Cost', 'Privacy'],
  },
]

const numbers = [
  { n: '~130', l: 'AI/ML builds shipped' },
  { n: '6', l: 'product families' },
  { n: '10+', l: 'model providers wired in' },
  { n: '~6 wks', l: 'idea to production' },
  { n: '~70%', l: 'model cost cut, quality held' },
  { n: '39.1s→14.2s', l: '~64% faster via parallel generation' },
  { n: '~$16/mo', l: 'to park a frontier-level model on-prem' },
  { n: '4/4', l: 'crisis categories routed safely' },
]

const industries = [
  ['Fintech', 'Voice agents that authenticate, take payments, and work fraud — money on the line, humans only where required.'],
  ['Meetings & Productivity', 'Bots that join the call, transcribe on GPU, and turn an hour of talk into something you can act on.'],
  ['Commerce & Catalog', 'Generative imagery that respects real SKUs, plus document search that reads the whole page.'],
  ['Recruiting & Ops', 'Structured extraction that turns resumes and invoices into clean, queryable rows.'],
  ['Founders & Startups', "MVP-to-prod in six weeks, then hardened — built by the people who'll still answer when it pages."],
]

const process = [
  ['Scope the wedge', 'We find the smallest version that proves the thing. One real workflow, real inputs, no kitchen sink. The expensive mistake is building the wrong thing well, so we cut hard before we cut code.'],
  ['Pick the model, prove it', "We choose the model for the job — frontier API or open weights on your own box — and gate it behind an independent judge from day one. If we can't measure it, we don't trust it."],
  ['Ship to prod in ~6 weeks', 'Not a demo, not a notebook. A thing in production handling real load, with the retry logic, fallbacks, and evals already wired in. Founders need something live, not something promising.'],
  ['Harden until it holds', 'We tune cost, kill the slow paths, and lock the safety rails. ~70% cheaper, ~64% faster, crisis paths routed to humans — that work happens here. When we ship, it stays shipped.'],
]

/* ------------------------------------------------------------- sections */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>
      {children}
    </span>
  )
}

function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(60rem 40rem at 50% -10%, var(--accent-subtle), transparent 70%)' }}
      />
      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <FadeIn>
          <Eyebrow>// the inference log</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black tracking-tight sm:text-7xl">
            We&rsquo;ve shipped AI
            <br />
            for years. Here&rsquo;s the log.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            A lean AI studio for founders. Voice agents that take the payment. RAG
            products people actually use. Image pipelines, agent swarms, and the
            whole agent loop running on your own box. Idea to production in six
            weeks — and when we ship, it stays shipped.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors" style={{ background: 'var(--accent)' }}>
              Start a build &rarr;
            </Link>
            <Link href="/case-studies" className="rounded-full border px-6 py-3 text-sm font-semibold transition-colors" style={{ borderColor: 'var(--border-color)' }}>
              Read the case studies
            </Link>
          </div>
        </FadeIn>
      </Container>
    </header>
  )
}

function Manifesto() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>// the standard</Eyebrow>
          <div className="mt-6 space-y-6 text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            <p style={{ color: 'var(--text-primary)' }}>
              Most AI work is a demo. A glossy clip, a staged prompt, a slide that
              never survives contact with a real user. We don&rsquo;t do that.
              Everything on this page ran — against real inputs, real load, real
              edge cases nobody wrote down first.
            </p>
            <p>
              We&rsquo;ve been heads-down on this for years, not months. The
              founders still write code every day. That&rsquo;s not a humblebrag —
              it&rsquo;s the whole point. You can&rsquo;t fake the hours. Around
              130 AI/ML builds. Six product families. More than ten model
              providers wired in and load-tested. The depth shows up in the parts
              nobody screenshots: the retry logic, the fallback model, the eval
              that caught the regression before the customer did.
            </p>
            <p>
              <span style={{ color: 'var(--accent-text)' }} className="font-mono text-base">// no bloat, no BS.</span>{' '}
              We pick the smallest thing that works, ship it fast, and harden it
              until it doesn&rsquo;t break. The flashy part is easy. We&rsquo;re
              here for the part that has to run on a Tuesday at 3am.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function WhoWeAre() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>// who builds this</Eyebrow>
          <p className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            A small, senior studio for startups that ship.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            OpScaler is a small, senior AI studio out of Wyoming, built for startups
            that need to ship. Pavan Tikkani and Karthik Sethupathy founded it,
            and still push code daily — no account managers, no handoff to a
            junior bench, just the people who designed it building it. We take an
            idea to production in roughly six weeks, then keep it standing. The
            model providers change, the frameworks churn, the hype cycle resets
            every quarter. We&rsquo;ve shipped through all of it.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <Eyebrow>// what we&rsquo;ve shipped</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Seven things we can prove.
          </h2>
        </FadeIn>
        <div className="mt-14 space-y-px overflow-hidden rounded-3xl border" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
          {capabilities.map((c) => (
            <FadeIn key={c.eyebrow}>
              <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1fr]" style={{ background: 'var(--bg-secondary)' }}>
                <div>
                  <Eyebrow>// {c.eyebrow}</Eyebrow>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">{c.headline}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{c.body}</p>
                </div>
                <ul className="space-y-3 lg:pt-9">
                  {c.proof.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-text)' }} className="mt-1 font-mono text-xs">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Flagships() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <Eyebrow>// flagships</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Six we&rsquo;d put in the room with you.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {flagships.map((f) => (
            <FadeIn key={f.title}>
              <div className="h-full rounded-3xl border p-8 sm:p-10" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}>
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>// {f.kicker}</p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.story}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="rounded-full px-3 py-1 font-mono text-[11px]" style={{ background: 'var(--accent-subtle)', color: 'var(--accent-text)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Numbers() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn><Eyebrow>// by the numbers</Eyebrow></FadeIn>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border md:grid-cols-4" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
          {numbers.map((s) => (
            <div key={s.l} className="p-6 sm:p-8" style={{ background: 'var(--bg-secondary)' }}>
              <div className="font-display text-3xl font-black tracking-tight sm:text-4xl" style={{ color: 'var(--accent-text)' }}>{s.n}</div>
              <div className="mt-2 text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Industries() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn><Eyebrow>// where it runs</Eyebrow></FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
          {industries.map(([name, line]) => (
            <div key={name} className="p-7 sm:p-8" style={{ background: 'var(--bg-secondary)' }}>
              <h3 className="font-display text-lg font-bold tracking-tight">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{line}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Toolbox() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>// the toolbox</Eyebrow>
          <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Breadth is the receipt. We&rsquo;ve shipped on Anthropic Claude,
            OpenAI, Google Gemini, Mistral, and Cohere, and on open weights — Qwen
            and ColQwen2.5, Llama, SigLIP 2, SAM 3, Florence-2, Gemma, XTTS v2,
            Kokoro. Voice runs on Pipecat, LiveKit, Deepgram, ElevenLabs,
            WhisperX, pyannote. Retrieval runs on late-interaction stacks over
            LanceDB. Agents run on PydanticAI, LangGraph, and Google ADK, with MCP
            tools wired in. And we run models locally — MLX, vLLM-on-Metal, and
            llama.cpp, with local serving APIs — building the whole agent loop on
            a box the customer owns. We picked every one of these for a real job
            and load-tested it. Ten-plus providers isn&rsquo;t a logo wall.
            It&rsquo;s ten-plus times we figured out what a model is good for and
            what it&rsquo;ll quietly get wrong.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Process() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn><Eyebrow>// how we work</Eyebrow></FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border sm:grid-cols-2" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
          {process.map(([phase, desc], i) => (
            <div key={phase} className="p-8 sm:p-10" style={{ background: 'var(--bg-secondary)' }}>
              <span className="font-mono text-xs" style={{ color: 'var(--accent-text)' }}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{phase}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Closing() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-4xl p-10 sm:p-16" style={{ background: 'var(--bg-tertiary)' }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(40rem 30rem at 80% 0%, var(--accent-subtle), transparent 70%)' }} />
            <div className="relative max-w-3xl">
              <Eyebrow>// let&rsquo;s build</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
                Got an idea?
                <br />
                Let&rsquo;s get it shipped.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
                Six weeks from idea to production. Built by the senior team
                who&rsquo;ll still be on the other end when it matters — not a
                bench, not a handoff. Bring the messy version; we&rsquo;ll find
                the smallest thing that works and ship it hard.{' '}
                <span style={{ color: 'var(--accent-text)' }} className="font-mono">// no bloat, no BS.</span>{' '}
                When we ship, it stays shipped.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors" style={{ background: 'var(--accent)' }}>
                  Talk to the founders &rarr;
                </Link>
                <Link href="/case-studies" className="rounded-full border px-6 py-3 text-sm font-semibold" style={{ borderColor: 'var(--border-color)' }}>
                  Read the case studies
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function InferenceLogPage() {
  return (
    <SiteLayout>
      <Hero />
      <Manifesto />
      <WhoWeAre />
      <Capabilities />
      <Flagships />
      <Numbers />
      <Industries />
      <Toolbox />
      <Process />
      <Closing />
    </SiteLayout>
  )
}
