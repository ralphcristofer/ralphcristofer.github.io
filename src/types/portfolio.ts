export type Metric = {
  value: string
  label: string
}

export type Role = {
  title: string
  employmentType?: string
  dates: string
  location?: string
  workMode?: 'On-site' | 'Remote' | 'Hybrid'
  summary: string
  highlights: string[]
  technologies?: string[]
}

export type ExperienceGroup = {
  company: string
  roles: Role[]
}

export type Project = {
  name: string
  problem: string
  solution: string
  decisions: string[]
  technologies: string[]
  status: string
}

export type AdditionalProject = {
  name: string
  description: string
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
