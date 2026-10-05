export type Person = {
  name: string
  role: string
  bio: string
  image?: string
}

export const founders: Person[] = [
  {
    name: 'Karthik Sethupathy',
    role: 'Founder',
    bio: 'Seasoned technologist who built his career across leading technology companies. Owns the AI-infrastructure backbone: sovereign, on-prem model serving on hardware the customer controls, the full agent loop, and zero-egress deployments that run at fixed cost. Sharp, detail-oriented approach to standing up frontier-level models in infrastructure you control.',
    image: '/team/karthik.png',
  },
]

export const advisors: Person[] = [
  {
    name: 'Pavan Tikkani',
    role: 'Technical Advisor',
    bio: 'Nearly two decades in global technology. Advises OpScaler on the hard end of AI systems: fine-tuning and distilling open-weight models to frontier parity, LoRA/QLoRA on domain data, and independent multi-judge evals so quality is measured, not asserted. Known for simplifying complex challenges and an unwavering passion for clean, elegant code.',
    image: '/team/pavan.png',
  },
]
