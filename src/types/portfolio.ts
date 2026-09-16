export type Metric = {
  value: string
  label: string
  context: string
}

export type Role = {
  title: string
  employmentType?: string
  dates: string
  location?: string
  summary: string
  highlights: string[]
  technologies?: string[]
}

export type ExperienceGroup = {
  company: string
  featured?: boolean
  roles: Role[]
}

export type Project = {
  name: string
  eyebrow: string
  problem: string
  solution: string
  decisions: string[]
  technologies: string[]
  status: string
  repository: string
  demo?: string
  featured?: boolean
}

export type SkillGroup = {
  name: string
  items: string[]
}

export type Education = {
  institution: string
  credential: string
  dates: string
  details: string
  technologies: string[]
}
