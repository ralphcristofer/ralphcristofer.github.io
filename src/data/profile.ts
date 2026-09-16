import type { Metric } from '../types/portfolio'

export const profile = {
  name: 'Ralph Cristofer Fugaban',
  shortName: 'Ralph Fugaban',
  role: 'Senior Software Developer',
  employer: 'CIBC Mellon',
  introduction:
    'I build software and automation solutions, improve business processes, and modernize legacy applications.',
  email: 'ralph.fugaban@gmail.com',
  phone: '514-577-4400',
  github: 'https://github.com/ralphcristofer',
  linkedin: 'https://www.linkedin.com/in/ralphfugaban/',
  location: 'Toronto, Ontario',
}

/** Digits-only phone number for the tel: link, derived so it can never drift from `phone`. */
export const phoneHref = `tel:+1${profile.phone.replace(/\D/g, '')}`

export const metrics: Metric[] = [
  {
    value: '~30 → ~10 min',
    label: 'Internal app processing time (~67% faster)',
  },
  {
    value: '5–6 hr → ~10 min',
    label: 'Multi-account validation',
  },
  {
    value: '70+',
    label: 'Automated tests across DEV, UAT, and PROD',
  },
  {
    value: '30–50%',
    label: 'Regression effort automated',
  },
]

export const careerPath = [
  'IT Support',
  'Systems & Networking',
  'Technical Instruction',
  'Software Engineering',
  'QA Automation',
  'Software Development',
]
