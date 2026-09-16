import { Header } from './components/Header'
import { SectionHeading } from './components/SectionHeading'
import { ExperienceGroupCard } from './components/ExperienceGroupCard'
import { ProjectCard } from './components/ProjectCard'
import { TagList } from './components/TagList'
import { education } from './data/education'
import { earlierExperience, primaryExperience } from './data/experience'
import { careerPath, metrics, profile } from './data/profile'
import { additionalProjects, projects } from './data/projects'
import { skillGroups } from './data/skills'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="hero section" id="home" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="availability"><span aria-hidden="true" /> Senior Software Developer at CIBC Mellon</p>
              <p className="eyebrow">Enterprise software · Financial technology</p>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-headline">{profile.headline}</p>
              <p className="hero-introduction">{profile.introduction}</p>
              <div className="hero-actions" aria-label="Portfolio actions">
                <a className="button button-primary" href="#projects">View projects</a>
                <a className="button button-secondary" href="#experience">View experience</a>
                <a className="button button-text" href="#resume">Resume status</a>
              </div>
              <div className="social-links" aria-label="Professional profiles and contact">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <img src="/icons/github.svg" alt="" width="22" height="22" /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <img src="/icons/linkedin.svg" alt="" width="22" height="22" /> LinkedIn
                </a>
                <a href={`mailto:${profile.email}`}>
                  <img src="/icons/email.svg" alt="" width="22" height="22" /> Contact
                </a>
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img
                  src="/profile/ralph-fugaban.jpg"
                  alt="Ralph Cristofer Fugaban wearing a dark suit and blue tie"
                  width="400"
                  height="400"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-note">
                <span>Current focus</span>
                <strong>Reliable software for complex business work</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="outcomes section-tight" aria-labelledby="outcomes-title">
          <div className="shell">
            <div className="outcomes-heading">
              <p className="eyebrow">Selected outcomes</p>
              <h2 id="outcomes-title">Engineering impact, kept in context.</h2>
            </div>
            <div className="metric-grid">
              {metrics.map((metric) => (
                <article className="metric" key={`${metric.value}-${metric.label}`}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                  <small>{metric.context}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <SectionHeading
              eyebrow="About"
              title="A practical engineer shaped by the full technology lifecycle."
              introduction="My work sits where software, quality, operations, and business requirements meet. I care about understanding the real workflow first, then building a solution that is maintainable, testable, and useful to the people relying on it."
            />
            <div className="about-copy">
              <p>
                I currently develop internal applications and software solutions for Fund Accounting at CIBC Mellon. My work includes new application development, enhancements to legacy systems, SQL-backed operational support, release testing, UAT collaboration, and modernization planning.
              </p>
              <p>
                Earlier roles in infrastructure, technical support, teaching, manual QA, and automation give me a broad view of how software behaves beyond the codebase—from user needs and data quality to deployment, maintainability, and production support.
              </p>
            </div>
          </div>
          <div className="shell career-path" aria-label="Career progression">
            {careerPath.map((step, index) => (
              <div className="career-step" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Experience"
              title="Recent engineering work, with the context behind it."
              introduction="Recent software-development and automation work receives the most detail. Earlier roles remain available because they explain the progression into enterprise engineering."
            />
            <div className="experience-timeline">
              {primaryExperience.map((experience) => (
                <ExperienceGroupCard experience={experience} key={experience.company} />
              ))}
            </div>

            <details className="earlier-experience">
              <summary>
                <span>
                  <strong>Earlier experience</strong>
                  <small>QA, professional development, customer support, computer repair, operations, and early software development</small>
                </span>
                <span className="summary-action">Show timeline</span>
              </summary>
              <div className="experience-timeline earlier-timeline">
                {earlierExperience.map((experience) => (
                  <ExperienceGroupCard experience={experience} compact key={experience.company} />
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Selected projects"
              title="Public work built around real workflows."
              introduction="These projects emphasize product thinking, state management, integrations, and maintainable engineering decisions. Proprietary employer code and confidential business details are intentionally excluded."
            />
            <div className="project-grid">
              {projects.map((project) => <ProjectCard project={project} key={project.name} />)}
            </div>

            <div className="additional-work">
              <h3>Additional public work</h3>
              <div className="additional-grid">
                {additionalProjects.map((project) => (
                  <a href={project.repository} target="_blank" rel="noreferrer" key={project.name}>
                    <strong>{project.name}</strong>
                    <span>{project.description}</span>
                    <small>View repository <span aria-hidden="true">↗</span></small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Skills & technologies"
              title="Tools organized by how I use them."
              introduction="No arbitrary percentages—just technologies supported by professional, instructional, or public project experience."
            />
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.name}>
                  <h3>{group.name}</h3>
                  <TagList items={group.items} label={`${group.name} technologies`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="education" aria-labelledby="education-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Education"
              title="Formal foundations across software and infrastructure."
            />
            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={`${item.institution}-${item.credential}`}>
                  <p className="education-date">{item.dates}</p>
                  <h3>{item.institution}</h3>
                  <h4>{item.credential}</h4>
                  <p>{item.details}</p>
                  <TagList items={item.technologies} label={`${item.institution} areas of study`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let’s talk about software, automation, or modernization.</h2>
              <p>
                I’m based in Toronto and welcome professional conversations with engineering leaders, recruiters, and technical teams.
              </p>
            </div>
            <address className="contact-card">
              <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a>
              <a href="tel:+15145774400"><span>Phone</span><strong>{profile.phone}</strong></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>linkedin.com/in/ralphfugaban</strong></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/ralphcristofer</strong></a>
            </address>
          </div>

          <div className="shell resume-notice" id="resume">
            <div>
              <p className="eyebrow">Resume / CV</p>
              <h3>Updated PDF coming soon.</h3>
              <p>The current portfolio content is up to date. A refreshed downloadable résumé will be added after the final PDF is supplied.</p>
            </div>
            <span className="resume-status" aria-label="Resume update is pending">PDF update pending</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} Ralph Cristofer Fugaban</p>
          <p>Software development · Automation · Quality engineering</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
