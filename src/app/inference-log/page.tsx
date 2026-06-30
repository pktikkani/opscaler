import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'The Inference Log',
  description:
    'Down to the metal. A few years of it. The real AI we have shipped across OpScaler and Prag-Matic — voice agents on the critical path, on-prem vision, document intelligence, and hand-written inference engines.',
  openGraph: {
    title: 'The Inference Log — OpScaler',
    description: 'Down to the metal. A few years of it.',
  },
}

/* ----------------------------------------------------------------- data */

const capabilities = [
  {
    eyebrow: 'voice_ai',
    headline: 'It takes the call. And the payment.',
    body: 'Most voice AI collapses the moment a real transaction shows up. Ours was built for the part everyone else routes to a human — authentication, payments, fraud disputes, multilingual callers, sub-second responsiveness. Deploy it in your cloud, or fully on your own hardware.',
    proof: [
      'Muscat Finance — a heavily automated credit-card service line: the AI authenticates the caller, takes payments, and handles fraud cases, with human escalation only where the regulator requires it',
      'Aura on Pipecat + Deepgram + ElevenLabs with live function-calling; Auralis on LiveKit with self-hosted XTTS v2 voices',
      'Pipecat Local — on-device STT and TTS, no frame leaves the machine',
      'Recapture — Teams, Zoom, and web meeting bots, GPU transcription, Claude + WhisperX on Temporal',
    ],
  },
  {
    eyebrow: 'document_intelligence',
    headline: 'It reads the way you read. Charts included.',
    body: 'Your contracts, invoices, resumes, decks, and scans — answered in plain language, including the tables, charts, and layout most pipelines flatten and lose. Retrieval tuned against measured accuracy, not shipped blind.',
    proof: [
      'Knova — a document-intelligence app, API, and Knova-Forge: a GenAI pipeline-optimization platform on DSPy and DeepEval',
      'Harvestor — visual document search on ColQwen2.5 late-interaction retrieval, backed by LanceDB',
      'HireMagic — Mistral structured extraction of resumes and invoices',
      'A late-interaction stack — ColPali, ColQwen, ColNomic — for multimodal RAG that survives the visuals',
    ],
  },
  {
    eyebrow: 'on_prem_vision',
    headline: 'Your cameras, now answerable. No cloud. No faces.',
    body: 'Turn existing camera feeds into searchable, compliance-aware intelligence. Find footage in plain English. Follow a person across cameras. Flag missing PPE. All on your own GPUs — no video leaves the building, no facial recognition is used.',
    proof: [
      'Lumina — multi-camera search and cross-camera person re-ID on SigLIP 2 + OSNet + SAM 3, with a web console and Terraform-provisioned GPU infra. Re-ID by design, not face recognition',
      'Spectra — SOP, PPE, and safety-violation flagging on MLX-VLM + Gemma + SAM 3, on-prem',
      'Florence-2 and dots.ocr for OCR-grade scene and document understanding',
    ],
  },
  {
    eyebrow: 'multi_agent',
    headline: 'Agents that do the actual work.',
    body: 'Not glued-together prompts. Agents that collaborate, hold long-term memory, run autonomous pipelines, and operate inside regulated domains — built on the serious frameworks.',
    proof: [
      'Nexus — a multi-agent collaborator spanning ESG, math, patent, regulatory, and research domains',
      'A Memory Agent for long-term recall; Mindful Poster for autonomous content; ml-intern for autonomous coding',
      'Built on PydanticAI, LangGraph, and Google ADK',
      'Agentic Economy on Arc — an A2A agent marketplace with sub-cent USDC x402 payments and on-chain ERC-8004 reputation',
    ],
  },
  {
    eyebrow: 'local_inference',
    headline: 'Frontier-class models. Your hardware.',
    body: 'Cut inference cost and keep data private by running models locally. When off-the-shelf serving will not fit the budget, the hardware, or the privacy requirement, we go all the way down — to hand-written C and Metal inference engines.',
    proof: [
      'ds4.c — a from-scratch C/Metal inference engine for DeepSeek V4 Flash with persistent KV-cache and 2-bit quantization',
      'voxtral.c — pure-C Voxtral 4B speech-to-text on Metal and BLAS',
      'Production MLX, vLLM-on-Metal, and llama.cpp on-device deployments with model-serving APIs',
    ],
  },
  {
    eyebrow: 'measured_quality',
    headline: 'We measure it. We don’t guess.',
    body: 'Every model and pipeline ships with evals, scorecards, and hallucination detection. Where it pays off, we distill big-model quality into a cheap local model you own outright.',
    proof: [
      'ICL eval framework — hallucination detection and model scorecards across Claude, GPT-4o, Mistral, and SAP',
      'proposal-distill — teacher-to-local-MLX student distillation',
      'Synthetic data generation, fine-tuning, and a DeepSWE benchmark harness',
      'Practice across pydantic-evals, DeepEval, and Inspect',
    ],
  },
]

const flagships = [
  {
    kicker: 'voice on the critical path',
    title: 'Muscat Finance',
    story:
      'A credit-card customer-service line where the AI, not a human, handles the money. It authenticates the caller, processes payments, works fraud cases, and serves callers in multiple languages — end to end, with escalation only where the regulator requires it. Demos fold the instant a real transaction shows up. This was built for exactly that traffic.',
    tags: ['Voice AI', 'Fintech', 'Multilingual', 'Critical path'],
  },
  {
    kicker: 'privacy by architecture',
    title: 'Lumina',
    story:
      'Ask your security cameras a question in plain English and follow a person across every camera — without a single frame leaving the building. Multi-camera search and cross-camera re-ID on SigLIP 2, OSNet, and SAM 3, with a web console and Terraform-provisioned GPU infra. Re-ID, not facial recognition. Entirely on-prem — sidestepping the two things that kill these deals: data egress and face-rec exposure.',
    tags: ['On-prem vision', 'Re-ID not face-rec', 'No cloud egress', 'IaC GPU'],
  },
  {
    kicker: 'the floor of the stack',
    title: 'ds4.c',
    story:
      'We wrote our own inference engine in C and Metal to run DeepSeek V4 Flash locally at 2-bit precision, with a persistent KV-cache — alongside voxtral.c, pure-C Voxtral 4B speech-to-text on Metal and BLAS. The layer most shops never touch. It is how we drive inference cost down and keep data fully private when off-the-shelf serving will not fit the budget, the hardware, or the rules.',
    tags: ['Hand-written C/Metal', '2-bit quant', 'KV-cache', 'Cost + privacy'],
  },
  {
    kicker: 'parity, on a box you own',
    title: 'Synthesis',
    story:
      'A Gene-to-GMP CMC proposal platform ran on a frontier model in the cloud. Privacy and fixed cost pushed toward a self-hosted open model — against the assumption that open models are materially worse. A decomposed, grounded pipeline (a 49-document regulatory RAG corpus, 13 concurrent work-packages, deterministic validators) plus a deliberate QLoRA fine-tune brought a local OLMo-3.1-32B level with a leading frontier model on our hardest regulatory-judgment panel. Every cited source checked out. On-prem, customer-controlled, about $16/mo parked.',
    tags: ['Local 32B', 'Frontier parity', 'QLoRA', 'On-prem'],
  },
]

const numbers = [
  { n: '~130', l: 'AI/ML projects and prototypes' },
  { n: '6', l: 'product families — Knova, Lumina, Spectra, Nexus, Aura, Synthesis' },
  { n: '2', l: 'hand-written C/Metal inference engines' },
  { n: '10+', l: 'model providers in production, closed and open' },
  { n: '~70%', l: 'model cost cut on measured workloads, quality held' },
  { n: '39.1→14.2s', l: '~64% faster generation via parallelism' },
  { n: '32B', l: 'local model at frontier-level on regulated work' },
  { n: '$16/mo', l: 'to keep a parity-class model parked on-prem' },
  { n: '0', l: 'frames leaving the building — on-prem vision' },
  { n: 'every', l: 'headline claim judged by a separate model' },
]

/* ------------------------------------------------------------- sections */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-mono text-xs tracking-widest uppercase"
      style={{ color: 'var(--accent-text)' }}
    >
      {children}
    </span>
  )
}

function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* radial indigo glow — OpScaler signature */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60rem 40rem at 50% -10%, var(--accent-subtle), transparent 70%)',
        }}
      />
      <Container className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <FadeIn>
          <Eyebrow>// the inference log</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black tracking-tight sm:text-7xl">
            We build more AI
            <br />
            than we say.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Down to the metal. A few years of it. Most teams demo. We ship —
            voice that takes the payment, vision that never leaves the building,
            inference engines we wrote by hand. Here is the record.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
              style={{ background: 'var(--accent)' }}
            >
              Start a build &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
              style={{ borderColor: 'var(--border-color)' }}
            >
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
          <div
            className="mt-6 space-y-6 text-lg leading-relaxed sm:text-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            <p style={{ color: 'var(--text-primary)' }}>
              Most AI you have watched is a demo. It works on a stage, on a happy
              path, on someone else’s data, in someone else’s cloud. Then a real
              caller asks for something off-script, and the demo goes quiet.
            </p>
            <p>
              We build the other kind. AI that authenticates a caller and moves
              their money. Vision that watches a factory floor and never sends a
              frame outside the building. A regulatory proposal a local model
              writes well enough to stand beside a frontier model — on a box you
              own, for about sixteen dollars a month parked.
            </p>
            <p>
              We have a rule for ourselves: a claim isn’t true because we like
              it. Every cost cut, every speedup, every “it’s just as good” is
              gated behind a separate judge model — a different model than the
              one we shipped. We publish the experiments that failed and the bugs
              that fooled us, because the honest version is the only version a
              CTO can trust. No gloss. Just the engineering, with the receipts.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

function TwoHouses() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn>
          <Eyebrow>// two front doors</Eyebrow>
          <p className="mt-4 max-w-2xl font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Same engineers, same standard, two front doors — one for the depth
            and compliance of the enterprise, one for the speed and runway of a
            startup.
          </p>
        </FadeIn>
        <div
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border md:grid-cols-2"
          style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}
        >
          <div className="p-8 sm:p-10" style={{ background: 'var(--bg-secondary)' }}>
            <h3 className="font-display text-2xl font-bold tracking-tight">OpScaler</h3>
            <p className="mt-1 font-mono text-xs" style={{ color: 'var(--accent-text)' }}>
              // build it. ship it. scale it.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              For startups that ship. A lean, US-incorporated studio founded by
              two builders — Pavan Tikkani and Karthik Sethupathy — who still
              write code every day. No account managers. No six-month timelines.
              Same Slack, same repos, same standups. MVPs in weeks, idea to
              production in six. The same independently-judged AI rigor as the
              depth house, sized for a founder’s runway. When it ships, it holds.
            </p>
          </div>
          <div className="p-8 sm:p-10" style={{ background: 'var(--bg-secondary)' }}>
            <h3 className="font-display text-2xl font-bold tracking-tight">Prag-Matic</h3>
            <p className="mt-1 font-mono text-xs" style={{ color: 'var(--accent-text)' }}>
              // applications that drive results.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              The AI/ML depth house. Built for regulated industries from the
              ground up — pharma, fintech, healthcare, telecom — where audit
              trails, data governance, and on-prem isolation are the baseline,
              not the upsell. Founded by three technologists with about two
              decades each across global tech and Bay Area enterprise SaaS. When
              the problem is hard, regulated, and has to be defensible, this is
              the team.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Capabilities() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <FadeIn>
          <Eyebrow>// what we’ve shipped</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-black tracking-tight sm:text-5xl">
            Seven things we can prove.
          </h2>
        </FadeIn>
        <div className="mt-14 space-y-px overflow-hidden rounded-3xl border" style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}>
          {capabilities.map((c) => (
            <FadeIn key={c.eyebrow}>
              <div
                className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_1fr]"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div>
                  <Eyebrow>// {c.eyebrow}</Eyebrow>
                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {c.headline}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {c.body}
                  </p>
                </div>
                <ul className="space-y-3 lg:pt-9">
                  {c.proof.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-text)' }} className="mt-1 font-mono text-xs">
                        →
                      </span>
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
            Four we’d put in the room with you.
          </h2>
        </FadeIn>
        <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {flagships.map((f) => (
            <FadeIn key={f.title}>
              <div
                className="h-full rounded-3xl border p-8 sm:p-10"
                style={{ borderColor: 'var(--border-color)', background: 'var(--bg-secondary)' }}
              >
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--accent-text)' }}>
                  // {f.kicker}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {f.story}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full px-3 py-1 font-mono text-[11px]"
                      style={{ background: 'var(--accent-subtle)', color: 'var(--accent-text)' }}
                    >
                      {t}
                    </span>
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
        <FadeIn>
          <Eyebrow>// by the numbers</Eyebrow>
        </FadeIn>
        <div
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border md:grid-cols-3 lg:grid-cols-5"
          style={{ borderColor: 'var(--border-color)', background: 'var(--border-color)' }}
        >
          {numbers.map((s) => (
            <div key={s.l} className="p-6 sm:p-8" style={{ background: 'var(--bg-secondary)' }}>
              <div className="font-display text-3xl font-black tracking-tight sm:text-4xl" style={{ color: 'var(--accent-text)' }}>
                {s.n}
              </div>
              <div className="mt-2 text-xs leading-snug" style={{ color: 'var(--text-secondary)' }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Range() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <FadeIn className="max-w-3xl">
          <Eyebrow>// the toolbox</Eyebrow>
          <p className="mt-6 text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Breadth is not the pitch — it is the evidence. Closed models from
            Anthropic, OpenAI, Google, Mistral, and Cohere, next to open models
            we serve ourselves: Qwen and ColQwen2.5, Llama, DeepSeek V4 Flash,
            Voxtral, SigLIP 2, SAM 3, Florence-2, Gemma, XTTS v2, Kokoro. Voice
            on Pipecat, LiveKit, Deepgram, ElevenLabs, WhisperX, and pyannote,
            orchestrated with Temporal. Agents on PydanticAI, LangGraph, and
            Google ADK — down to A2A, x402, and ERC-8004 primitives. Retrieval
            with ColPali-class late-interaction and LanceDB, optimized with DSPy.
            Local serving on MLX, vLLM-on-Metal, llama.cpp — and when none of
            that is enough, on inference engines we wrote by hand in C and Metal.
            We pick the right tool for the job, not the most hyped one — because
            we have used enough of them to know the difference.
          </p>
        </FadeIn>
      </Container>
    </section>
  )
}

function Closing() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-4xl p-10 sm:p-16"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(40rem 30rem at 80% 0%, var(--accent-subtle), transparent 70%)',
              }}
            />
            <div className="relative max-w-3xl">
              <Eyebrow>// let the work speak</Eyebrow>
              <h2 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-5xl">
                Stop buying demos.
                <br />
                Start shipping systems.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
                You’ve seen the slides where everything works. We’d rather show
                you the run where it didn’t — the false-green pass, the lossy
                transcript that dropped the crisis numbers, the assumption that
                the frontier model was required and never was. We find those
                because we test our own work like an adversary, and we fix them
                because that’s the job. If you have something real to build —
                something that has to authenticate, transact, stay private, pass
                an audit, and hold up when a regulator asks how — there are two
                front doors. OpScaler if it’s a startup with a runway to respect.
                Prag-Matic if it’s enterprise and regulated. Same engineers. Same
                standard.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
                  style={{ background: 'var(--accent)' }}
                >
                  Talk to the founders &rarr;
                </Link>
                <a
                  href="mailto:info@prag-matic.com"
                  className="rounded-full border px-6 py-3 text-sm font-semibold"
                  style={{ borderColor: 'var(--border-color)' }}
                >
                  info@prag-matic.com
                </a>
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
      <TwoHouses />
      <Capabilities />
      <Flagships />
      <Numbers />
      <Range />
      <Closing />
    </SiteLayout>
  )
}
