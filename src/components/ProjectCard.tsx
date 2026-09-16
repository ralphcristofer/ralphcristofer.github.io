import type { Project } from '../types/portfolio'
import { TagList } from './TagList'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-preview" role="img" aria-label={`Reserved preview area for ${project.name}`}>
        <span>{project.eyebrow}</span>
        <strong>{project.name}</strong>
        <small>Project screenshot can be added here</small>
      </div>
      <div className="project-body">
        <div className="project-heading">
          <div>
            <p className="eyebrow">{project.eyebrow}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="status">{project.status}</span>
        </div>
        <div className="project-copy">
          <p><strong>Problem:</strong> {project.problem}</p>
          <p><strong>Built:</strong> {project.solution}</p>
        </div>
        <div className="project-decisions">
          <h4>Engineering decisions</h4>
          <ul>
            {project.decisions.map((decision) => <li key={decision}>{decision}</li>)}
          </ul>
        </div>
        <TagList items={project.technologies} />
        <div className="project-actions">
          <a href={project.repository} target="_blank" rel="noreferrer">View repository <span aria-hidden="true">↗</span></a>
          {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a> : null}
        </div>
      </div>
    </article>
  )
}
