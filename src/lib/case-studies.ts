export type CaseStudySection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  table?: {
    columns: string[]
    rows: string[][]
  }
}

export type CaseStudy = {
  slug: string
  title: string
  client: string
  category: string
  summary: string
  goal: string
  outcome: string
  status: string
  date: string
  stats: { value: string; label: string }[]
  sections: CaseStudySection[]
  footnote?: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'olmo-v3-parity-with-claude',
    title: 'Reaching Parity with Claude Opus 4.8 Using a Local 32B Model',
    client: 'Synthesis AI — biologics CDMO CMC proposal generator',
    category: 'AI & Machine Learning',
    summary:
      'A local OLMo-3.1-32B + LoRA adapter reached parity with Claude Opus 4.8 on the hardest in-domain proposal-authoring workflows — private, fixed-cost, and customer-controlled.',
    goal: 'Replace a cloud frontier model (Claude Opus 4.8) with a local open model for all proposal-authoring LLM work — for data privacy and fixed cost — without losing quality.',
    outcome:
      'A local OLMo-3.1-32B + LoRA (v3) adapter reached parity with Claude Opus 4.8 on the hardest in-domain workflows (2 wins / 2 losses / 2 ties on a challenge panel; ~7:6 on the broader set), judged by a 3-judge GPT-5.5 panel.',
    status: 'v3 frozen as the production-candidate.',
    date: '12–14 Jun 2026',
    stats: [
      { value: 'Parity', label: 'vs Claude Opus 4.8 on hardest workflows' },
      { value: '312', label: 'Validator-clean training examples' },
      { value: '32B', label: 'Local model, fully customer-controlled' },
      { value: '3-judge', label: 'Position-swapped GPT-5.5 eval panel' },
    ],
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          'The product writes biologics CMC (Chemistry, Manufacturing & Controls) proposal sections — CTD Module 3 work packages — across molecule families (mAb, biosimilar, ADC, bsAb, fusion, Fab, nanobody, recombinant protein) and ~13 workflows (cell-line dev, upstream, downstream, analytical, formulation, stability, comparability, regulatory CMC, fill-finish, etc.).',
          'Production ran on Claude Opus 4.8 — excellent quality, but with two concerns: privacy, since customer CMC scope is sensitive and sending it to a cloud API is a risk; and cost, since per-token billing scales with usage and a heavy proposal run is expensive.',
          'The hypothesis: a local open model + RAG + fine-tuning could match Claude, giving a private, fixed-cost engine the customer fully controls.',
        ],
      },
      {
        heading: 'Starting point — RAG alone reached near parity',
        paragraphs: [
          'The first build paired OLMo-3.1-32B-Instruct with a 49-document regulatory RAG corpus (ICH/FDA/EMA guidance, OpenAI text-embedding-3-large, clause-level chunking, file-based cosine index), a carefully engineered system prompt encoding CMC specificity + scope rules, and deterministic validators (scope discipline, CTD subsection mapping, citation traceability, required CQA/method specificity) as a hard quality gate.',
          'This reached ~7:6 parity with Claude on the broad workflow set — with zero fine-tuning. But a 3-judge panel found a localized weakness: the two most regulation-dense workflows — regulatory CMC (regcmc) and comparability/biosimilarity — consistently lost to Claude. Those need learned regulatory judgment (what to include, correct CTD mapping, scope discipline), not retrievable facts. RAG had hit its ceiling there. Fine-tuning was the right next lever.',
        ],
      },
      {
        heading: 'The data — best-of-N distillation',
        paragraphs: [
          'We had no real CDMO proposals to train on. The plan: synthesize high-quality training sections via best-of-N distillation.',
        ],
        bullets: [
          'For each (family × workflow × variant) task, generate a section with both Claude Opus 4.8 and GPT-5.5 through the same RAG pipeline.',
          'Keep the deterministic winner per task (validator pass + completeness-checklist coverage).',
          'Result: 312 fully validator-clean training examples spanning all 8 families × 13 workflows. Teacher wins split Claude 187 / GPT-5.5 125 — best-of-N genuinely raised the data ceiling above either single teacher.',
          'Facts stay in RAG; the fine-tune teaches behaviour / voice / scope, not facts.',
        ],
      },
      {
        heading: 'The training — and two bugs that defined the journey',
        paragraphs: [
          'Fine-tuning was QLoRA (4-bit nf4 frozen base + LoRA adapter) on a single GPU box (EC2 RTX PRO 6000, 96 GB), served by vLLM (native LoRA, no merge). The path to v3 was not linear — the breakthroughs came from finding bugs in our own pipeline, surfaced by a deep-research review of the actual code.',
        ],
        table: {
          columns: ['Version', 'What changed', 'Result (olmo W/T/L vs Claude, 6-section panel)'],
          rows: [
            ['v0', 'First fine-tune — held out the target workflows from training', '0 / 1 / 5 (lost badly)'],
            ['v2', 'Fixed: train ON regcmc/comparability + completion-only loss masking + 55 examples', '1 / 1 / 4'],
            ['v3', '273 balanced examples + all fixes + stronger LoRA config', '2 / 2 / 2 — PARITY'],
          ],
        },
      },
      {
        heading: 'The two bugs',
        bullets: [
          'Bug 1 — we were holding out the exact workflows we were graded on. v0 put every regcmc and comparability example into the eval split, so the model never saw them in training — yet they were the entire test. Fix: train on them; hold out a family (biosimilar) for an honest eval.',
          'Bug 2 — no completion-only loss masking. Loss was computed over the whole sequence, including the ~10 RAG chunks stuffed into the prompt — so 80–90% of the gradient was spent reproducing retrieved boilerplate, not the regulatory voice. Fix: patch the chat template with {% generation %} markers (including the <|im_end|> stop token) so loss lands only on the gold section.',
          'Plus stronger learning dynamics: rank 16→32 + rsLoRA, lr 1e-4→2e-4, 3→10 epochs (the old run did only ~18 optimizer steps — far too few to learn a voice). Output validity jumped from 2/6 to 5/6 valid sections.',
        ],
      },
      {
        heading: 'The evaluation — judged like a competition',
        bullets: [
          'Judge: GPT-5.5, 3 judges, position-swapped (6 votes per pair), majority vote. A single judge was shown to be noisy (verdicts flipped run-to-run), so the panel + swap were essential for a trustworthy signal.',
          'Set: 6 challenge sections — the 2 hardest workflows × representative families — held out from training (biosimilar family strictly held out).',
          'Comparison: v3 vs Claude Opus 4.8 reference outputs, both through the identical RAG pipeline.',
        ],
        table: {
          columns: ['Section', 'Winner'],
          rows: [
            ['bsab_comparability', 'olmo (4–0)'],
            ['mab_regcmc', 'olmo (3–0)'],
            ['biosimilar_comparability', 'tie (2–2)'],
            ['biosimilar_regcmc', 'tie (3–3)'],
            ['adc_regcmc', 'claude (0–6)'],
            ['mab_comparability', 'claude (0–5)'],
          ],
        },
      },
      {
        heading: 'Validating and freezing v3',
        paragraphs: [
          'Beyond the headline parity panel, we stress-tested v3 in fresh blind head-to-head generation against other strong models through the same RAG pipeline. The result reinforced the choice: v3 won the blind GPT-5.5 judge decisively (net +5 to +7) on these in-domain sections — the fine-tuned local model was the preferred author, not just a competitive one.',
          'With parity confirmed on the hardest workflows and a clear blind-judge advantage on the broader in-domain set, we froze v3 as the production-candidate — versioned, backed up to S3, and wired into the serving stack ready for a one-config cutover from the cloud model to local.',
        ],
      },
      {
        heading: 'Production engineering shipped alongside',
        bullets: [
          'Deployment: the local-model app behind ALB + ACM TLS + Route53 on synthesis-ai.prag-matic.com (UI) and synthesis-ai-api.prag-matic.com (API), via Terraform + GitHub Actions (OIDC), in the existing VPC.',
          'Database: dedicated RDS PostgreSQL 16 + pgvector (Terraform) to isolate the local-model app’s data from the cloud prod app’s shared Neon DB.',
          'Serving: vLLM serves base OLMo + the v3 adapter via --lora-modules (no merge); the app’s resolve_model() routes an ollama:olmo-ft model id to the local vLLM endpoint — one config flip switches the app from Claude to local.',
          'Durability: the v3 adapter + all distillation data + eval artifacts backed up to S3.',
        ],
      },
      {
        heading: 'Results & takeaways',
        paragraphs: [
          'What was achieved: a local 32B model at parity with Claude Opus 4.8 on the hardest in-domain workflows — private, fixed-cost, customer-controlled, and a viable Claude replacement for the covered scope. Plus a reproducible pipeline: RAG → best-of-N distillation → QLoRA → vLLM serving → 3-judge panel eval, all in version control with a full architect-review documentation packet.',
        ],
        bullets: [
          'RAG gets you to near parity cheaply; fine-tuning closes the judgment gap RAG can’t.',
          'The biggest wins came from fixing our own pipeline (holdout split, loss masking, learning dynamics) — disciplined code review beat brute force.',
          'Best-of-N distillation > single-teacher — it lifts the data ceiling above any one model.',
          'A local 32B can match a cloud frontier model for a well-scoped domain, given the right RAG + distillation + fine-tuning recipe — at a fraction of the cost and with full data control.',
        ],
      },
    ],
    footnote:
      'Artifacts and full documentation: synthesis-api repo, branch local-model-testing — model card, eval summary, prompt manifest, validator notes, runbook, limitations, product guardrails, and judge JSON artifacts under docs/.',
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}
