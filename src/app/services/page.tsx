import { type Metadata } from 'next'
import Link from 'next/link'

import { SiteLayout } from '@/components/SiteLayout'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const services = [
  {
    id: 'fine-tuning',
    num: '01',
    title: 'Model Fine-Tuning & Customization',
    tagline: 'Frontier parity on your domain, on weights you own.',
    description: 'Off-the-shelf models are generalists. We take open weights and specialize them — distillation plus LoRA/QLoRA — until they match the frontier on the exact workflows your business runs on, with none of the per-token bill. Proof: a local OLMo-3.1-32B with LoRA reached parity with Claude Opus 4.8 on the hardest in-domain workflows, trained on 312 validator-clean examples curated by best-of-N distillation.',
    capabilities: [
      'LoRA / QLoRA fine-tuning on open weights',
      'Best-of-N distillation from a frontier teacher',
      'Validator-clean dataset curation & filtering',
      'Domain adaptation for regulated workflows',
      'Parity benchmarking against frontier models',
      'Reproducible training on customer-owned hardware',
    ],
  },
  {
    id: 'evals',
    num: '02',
    title: 'Evaluation & Observability',
    tagline: 'Trust nothing unmeasured.',
    description: 'Vibes are not a metric and self-grading is not a test. We stand up independent judge panels, model scorecards, and hallucination detection so every claim about quality is checked by something other than the team that shipped it. Proof: we cut a frontier model’s cost ~52% and latency ~74% while maintaining quality — gated by a separate judge model, not by opinion.',
    capabilities: [
      'Independent multi-judge evaluation panels',
      'Model scorecards & regression tracking',
      'Hallucination & faithfulness detection',
      'DeepEval / Inspect / pydantic-evals harnesses',
      'Cost/quality trade-off analysis with a held bar',
      'Continuous eval gates in CI before ship',
    ],
  },
  {
    id: 'safety',
    num: '03',
    title: 'AI Safety & Alignment',
    tagline: 'Never validate a delusion.',
    description: 'Money-on-the-line and human-on-the-line systems need adversarial testing before they meet a user, not after. We build safety harnesses, crisis-routing logic, and red-team suites that judge the agent on its verbatim words. Proof: a voice-safety harness routed 4 of 4 crisis categories to a human, scored against exactly what the agent said, not what we hoped it meant.',
    capabilities: [
      'Adversarial safety & red-team harnesses',
      'Crisis detection & human-handoff routing',
      'Verbatim-transcript scoring of agent behavior',
      'Refusal & jailbreak resistance testing',
      'Pre-ship safety gates on real conversations',
      'Guardrails tuned to never validate harmful intent',
    ],
  },
  {
    id: 'sovereign',
    num: '04',
    title: 'Sovereign / Private AI',
    tagline: 'The full agent loop on a box you control.',
    description: 'Reasoning, tool-calling over MCP, memory, RAG, even voice — the entire loop running on open models on hardware the customer owns. No data egress, no per-token meter, a cost you can predict. Proof: a self-hosted ~32B model at frontier level, parked for about $16/month, with zero data leaving the box.',
    capabilities: [
      'Open-weight inference on customer-owned hardware',
      'MLX / vLLM / llama.cpp serving stacks',
      'Full agent loop: reasoning, tools, memory, RAG',
      'MCP tool-calling with no external egress',
      'Fixed, predictable cost instead of per-token bills',
      'On-prem and air-gapped deployment',
    ],
  },
  {
    id: 'governance',
    num: '05',
    title: 'AI Governance & Compliance',
    tagline: 'Auditability the regulator will accept.',
    description: 'In regulated domains the output has to be traceable, scoped, and defensible — not just plausible. We build citation traceability, document mapping, deterministic validators, and human-in-the-loop where the regulator requires it. Proof: biologics CMC proposal authoring across CTD Module 3, with deterministic validators as a hard quality gate on every claim.',
    capabilities: [
      'Citation traceability & source-of-truth linking',
      'CTD / CMC document structure mapping',
      'Deterministic validators as hard quality gates',
      'Scope discipline & out-of-bounds refusal',
      'Human-in-the-loop where regulation demands it',
      'Audit trails for regulated authoring workflows',
    ],
  },
  {
    id: 'voice',
    num: '06',
    title: 'Conversational & Voice AI',
    tagline: 'Real conversations that move real money.',
    description: 'Voice agents that authenticate a caller, take a card payment, work a fraud case, and switch languages mid-call without dropping context. Proof: Aura/Auralis handles live payment calls end to end, built on Pipecat, LiveKit, Deepgram, and ElevenLabs, with self-hosted XTTS v2 when the voice has to stay on-prem.',
    capabilities: [
      'Caller authentication & in-call card payments',
      'Fraud handling and case workflows',
      'Mid-call language switching',
      'Pipecat + LiveKit real-time voice pipelines',
      'Deepgram STT & ElevenLabs TTS',
      'Self-hosted XTTS v2 for private voice',
    ],
  },
  {
    id: 'rag',
    num: '07',
    title: 'RAG & Document Intelligence',
    tagline: 'Retrieval that reads the page, not just the text.',
    description: 'Documents are layout, tables, and stamps — not a flat wall of text. We build late-interaction visual retrieval that understands the page as it looks, plus structured extraction that turns messy files into clean data. Proof: Harvestor does visual retrieval over layout, tables, and stamps with ColQwen2.5 and LanceDB, and extracts structure from resumes and invoices.',
    capabilities: [
      'Late-interaction visual retrieval (ColQwen2.5)',
      'Layout, table & stamp-aware document parsing',
      'LanceDB vector indexing & search',
      'Structured extraction of resumes & invoices',
      'Grounded, citation-linked answers',
      'RAG evaluation for retrieval & generation quality',
    ],
  },
  {
    id: 'agents',
    num: '08',
    title: 'Agentic / Multi-Agent Systems',
    tagline: 'Plan, act, remember, hand off.',
    description: 'Agents that decompose a goal, call the right tools, keep memory across steps, and hand off cleanly between specialists. Proof: Nexus and an on-chain A2A marketplace coordinate multi-agent plan / tool-call / memory / handoff flows, built on PydanticAI, LangGraph, Google ADK, and MCP.',
    capabilities: [
      'Planning & goal decomposition',
      'Tool-calling and function orchestration',
      'Cross-step memory & state management',
      'Multi-agent handoff and coordination',
      'PydanticAI / LangGraph / Google ADK / MCP',
      'On-chain agent-to-agent (A2A) marketplace',
    ],
  },
  {
    id: 'media',
    num: '09',
    title: 'Generative Media',
    tagline: 'Renders that match a real SKU.',
    description: 'Generative imagery is easy to make and hard to make accurate. We build media pipelines that stay faithful to a real product, not a hallucinated one. Proof: Agam produces catalogue-accurate renders that match an actual SKU, built on gpt-image-2 and FLUX.',
    capabilities: [
      'Catalogue-accurate product rendering',
      'SKU-faithful image generation',
      'gpt-image-2 & FLUX pipelines',
      'Brand- and style-consistent output',
      'Prompt & reference-conditioned generation',
      'Quality checks against source product data',
    ],
  },
]

export const metadata: Metadata = {
  title: 'Services',
  description: 'An AI studio with five rare disciplines: fine-tuning, evaluation, safety, sovereign infrastructure, and governance — plus voice, RAG, agents, and generative media. AI you can own, prove, and ship.',
}

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <Container>
          <FadeIn>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em]" style={{ color: 'var(--accent-text)' }}>
              Disciplines
            </p>
            <h1 className="mt-4 max-w-[640px] font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Design it. Prove it. Ship it.
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We design AI you can own — frontier-level models on hardware you control, no per-token bill,
              no data egress. Every claim is checked by a separate judge model, not by us. Then we ship it
              into regulated, money-on-the-line reality. Here are the disciplines behind that, rare ones first.
            </p>
          </FadeIn>
        </Container>
      </section>

      <div className="mx-auto max-w-[1120px] px-6">
        <hr style={{ borderColor: 'var(--border-color)' }} />
      </div>

      {/* Service Details */}
      {services.map((service, i) => (
        <div key={service.id}>
          <section id={service.id} className="scroll-mt-20 py-20">
            <Container>
              <FadeIn>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <span className="font-mono text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      {service.num}
                    </span>
                    <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-lg font-medium" style={{ color: 'var(--accent-text)' }}>
                      {service.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <Link
                        href="/contact"
                        className="rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                        style={{ background: 'var(--accent)' }}
                      >
                        Discuss your project &rarr;
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                      Capabilities
                    </h3>
                    <FadeInStagger faster className="mt-6 space-y-0">
                      {service.capabilities.map((cap) => (
                        <FadeIn key={cap}>
                          <div
                            className="border-b py-3.5 text-[15px]"
                            style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                          >
                            {cap}
                          </div>
                        </FadeIn>
                      ))}
                    </FadeInStagger>
                  </div>
                </div>
              </FadeIn>
            </Container>
          </section>
          {i < services.length - 1 && (
            <div className="mx-auto max-w-[1120px] px-6">
              <hr style={{ borderColor: 'var(--border-color)' }} />
            </div>
          )}
        </div>
      ))}

      {/* CTA */}
      <section className="pb-20 pt-8">
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
                Not sure which discipline you need?
              </h2>
              <p className="relative mt-3 text-[15px]" style={{ color: 'var(--text-secondary)' }}>
                Tell us what you&apos;re trying to ship. We&apos;ll tell you honestly whether AI is the right tool,
                and which of these it maps to.
              </p>
              <div className="relative mt-7">
                <Link
                  href="/contact"
                  className="rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ background: 'var(--accent)' }}
                >
                  Start a conversation &rarr;
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </SiteLayout>
  )
}
