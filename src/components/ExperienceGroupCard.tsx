import { useId, useState } from 'react'
import type { ExperienceGroup, Role } from '../types/portfolio'
import { TagList } from './TagList'
import { ToggleButton } from './ToggleButton'

const VISIBLE_HIGHLIGHTS = 2

type ExperienceGroupCardProps = {
  experience: ExperienceGroup
  compact?: boolean
}

export function ExperienceGroupCard({ experience, compact = false }: ExperienceGroupCardProps) {
  const isCurrent = experience.roles.some((role) => role.dates.includes('Present'))

  return (
    <article className={isCurrent ? 'timeline-item is-current' : 'timeline-item'}>
      <span className="timeline-dot" aria-hidden="true" />
      <div className="card company">
        <div className="company-header">
          <h3>{experience.company}</h3>
          {isCurrent ? <span className="badge">Current</span> : null}
        </div>
        {experience.roles.map((role) => (
          <RoleEntry role={role} compact={compact} key={role.title} />
        ))}
      </div>
    </article>
  )
}

function RoleEntry({ role, compact }: { role: Role; compact: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()

  const highlights = compact ? [] : role.highlights
  const hiddenCount = Math.max(0, highlights.length - VISIBLE_HIGHLIGHTS)
  const shown = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS)
  const details = [role.location, role.employmentType, role.workMode].filter((detail): detail is string => Boolean(detail))

  return (
    <section className="role">
      <div className="role-meta">
        <p className="role-dates">{role.dates}</p>
        {details.length ? (
          <ul className="meta-list">
            {details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        ) : null}
      </div>

      <div className="role-body">
        <h4>{role.title}</h4>
        <p>{role.summary}</p>
        {shown.length ? (
          <ul className="bullets" id={listId}>
            {shown.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        ) : null}
        {hiddenCount ? (
          <ToggleButton
            expanded={expanded}
            onToggle={() => setExpanded((open) => !open)}
            controls={listId}
            showLabel={`Show ${hiddenCount} more`}
            hideLabel="Show less"
          />
        ) : null}
        {!compact && role.technologies?.length ? <TagList items={role.technologies} /> : null}
      </div>
    </section>
  )
}
