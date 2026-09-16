import { useId, useState } from 'react'
import type { Project } from '../types/portfolio'
import { TagList } from './TagList'
import { ToggleButton } from './ToggleButton'

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)
  const detailsId = useId()
  const deployed = project.status.toLowerCase() === 'deployed'

  return (
    <article className="card project">
      <div className="project-top">
        <h3>{project.name}</h3>
        <span className={deployed ? 'status status-live' : 'status status-active'}>{project.status}</span>
      </div>
      <p>{project.solution}</p>

      <div className="project-details" id={detailsId} hidden={!expanded}>
        <h4>Problem</h4>
        <p>{project.problem}</p>
        <h4>Key decisions</h4>
        <ul className="bullets">
          {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
        </ul>
      </div>

      <TagList items={project.technologies} />

      <div className="project-actions">
        <ToggleButton
          expanded={expanded}
          onToggle={() => setExpanded((open) => !open)}
          controls={detailsId}
          showLabel="Details"
          hideLabel="Hide details"
        />
      </div>
    </article>
  )
}
