import { useId, useState } from 'react'
import type { ExperienceGroup } from '../types/portfolio'
import { ExperienceGroupCard } from './ExperienceGroupCard'
import { ToggleButton } from './ToggleButton'

type EarlierExperienceProps = {
  groups: ExperienceGroup[]
  period: string
  description: string
}

export function EarlierExperience({ groups, period, description }: EarlierExperienceProps) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const roleCount = groups.reduce((total, group) => total + group.roles.length, 0)

  return (
    <div className="earlier">
      <div className="timeline-item">
        <span className="timeline-dot is-muted" aria-hidden="true" />
        <div className="earlier-header">
          <div>
            <h3>Earlier experience</h3>
            <p>{period} · {description}</p>
          </div>
          <ToggleButton
            expanded={expanded}
            onToggle={() => setExpanded((open) => !open)}
            controls={panelId}
            showLabel={`Show ${roleCount} roles`}
            hideLabel="Hide roles"
          />
        </div>
      </div>

      <div className="timeline" id={panelId} hidden={!expanded}>
        {groups.map((group) => (
          <ExperienceGroupCard experience={group} compact key={group.company} />
        ))}
      </div>
    </div>
  )
}
