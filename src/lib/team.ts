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
    bio: 'Over twenty years running production SaaS infrastructure, including a decade as Senior Director of Technical Operations. Built and led global Technical Operations and SRE organizations: multi-region cloud architecture, datacenter-to-cloud migration, disaster recovery, incident response, and the compliance audits regulated customers require. Brings an operator’s discipline to keeping AI systems reliable in production.',
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
