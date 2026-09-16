import type { ExperienceGroup } from '../types/portfolio'
import { TagList } from './TagList'

type ExperienceGroupCardProps = {
  experience: ExperienceGroup
  compact?: boolean
}

export function ExperienceGroupCard({ experience, compact = false }: ExperienceGroupCardProps) {
  return (
    <article className={compact ? 'experience-group is-compact' : 'experience-group'}>
      <div className="experience-marker" aria-hidden="true" />
      <h3>{experience.company}</h3>
      <div className="role-list">
        {experience.roles.map((role) => {
          const visibleHighlights = compact ? role.highlights.slice(0, 1) : role.highlights.slice(0, 3)
          const remainingHighlights = role.highlights.slice(visibleHighlights.length)

          return (
            <section className="role" key={`${experience.company}-${role.title}`}>
              <div className="role-heading">
                <div>
                  <h4>{role.title}</h4>
                  {role.employmentType || role.workMode ? (
                    <p className="employment-type">{[role.employmentType, role.workMode].filter(Boolean).join(' · ')}</p>
                  ) : null}
                </div>
                <div className="role-meta">
                  <span>{role.dates}</span>
                  {role.location ? <span>{role.location}</span> : null}
                </div>
              </div>
              <p className="role-summary">{role.summary}</p>
              {visibleHighlights.length ? (
                <ul className="highlight-list">
                  {visibleHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              ) : null}
              {remainingHighlights.length ? (
                <details className="role-details">
                  <summary>More responsibilities and outcomes</summary>
                  <ul className="highlight-list">
                    {remainingHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </details>
              ) : null}
              {role.technologies?.length ? <TagList items={role.technologies} /> : null}
            </section>
          )
        })}
      </div>
    </article>
  )
}
