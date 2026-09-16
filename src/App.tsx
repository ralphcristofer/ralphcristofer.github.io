import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { SectionHeading } from './components/SectionHeading'
import { EarlierExperience } from './components/EarlierExperience'
import { ExperienceGroupCard } from './components/ExperienceGroupCard'
import { ProjectCard } from './components/ProjectCard'
import { TagList } from './components/TagList'
import { education } from './data/education'
import { earlierExperience, primaryExperience } from './data/experience'
import { careerPath, metrics, phoneHref, profile } from './data/profile'
import { additionalProjects, projects } from './data/projects'
import { skillGroups } from './data/skills'

const newTab = { target: '_blank', rel: 'noreferrer' } as const

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />

      <main id="main-content">
        {/* Hero */}
        <section className="section hero" id="home" aria-labelledby="hero-title">
          <div className="shell">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="location"><Icon name="pin" size={16} /> {profile.location}</p>
                <h1 id="hero-title">{profile.name}</h1>
                <p className="hero-subtitle">
                  {profile.role} at <strong>{profile.employer}</strong>
                </p>
                <p className="hero-intro">{profile.introduction}</p>
                <div className="actions">
                  <a className="button" href={`mailto:${profile.email}`}>
                    <Icon name="mail" /> Get in touch
                  </a>
                  <a className="button button-secondary" href="#experience">
                    View experience <Icon name="arrow-down" size={16} />
                  </a>
                  <a className="icon-button" href={profile.github} aria-label="GitHub profile (opens in a new tab)" {...newTab}>
                    <Icon name="github" />
                  </a>
                  <a className="icon-button" href={profile.linkedin} aria-label="LinkedIn profile (opens in a new tab)" {...newTab}>
                    <Icon name="linkedin" />
                  </a>
                </div>
              </div>

              <div className="portrait-wrap">
                <img
                  className="portrait"
                  src="/profile/ralph-fugaban.jpg"
                  alt="Ralph Cristofer Fugaban wearing a dark suit and blue tie"
                  width="400"
                  height="400"
                  fetchPriority="high"
                />
              </div>
            </div>

            <dl className="metrics" aria-label="Selected outcomes">
              {metrics.map((metric) => (
                <div className="metric" key={metric.value}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section className="section section-alt" id="about" aria-labelledby="about-title">
          <div className="shell about-grid">
            <div>
              <SectionHeading id="about-title" title="About" />
              <p className="lead">
                My work sits where software, quality, operations, and business requirements meet.
              </p>
            </div>
            <div>
              <p>
                At CIBC Mellon I build and support internal applications for Fund Accounting — new applications, legacy enhancements, SQL-backed support, release testing, and modernization planning.
              </p>
              <p>
                Earlier roles in infrastructure, technical support, teaching, manual QA, and automation give me a broad view of how software behaves beyond the codebase — from user needs and data quality to deployment and production support.
              </p>
              <ol className="path" aria-label="Career path">
                {careerPath.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="shell">
            <SectionHeading
              id="experience-title"
              title="Experience"
              introduction="Software development, test automation, and quality engineering in financial services — built on a foundation in IT operations and teaching."
            />
            <div className="timeline">
              {primaryExperience.map((experience) => (
                <ExperienceGroupCard experience={experience} key={experience.company} />
              ))}
            </div>
            <EarlierExperience
              groups={earlierExperience}
              period="2011 – 2018"
              description="QA testing, customer support, computer repair, and early software development"
            />
          </div>
        </section>

        {/* Projects */}
        <section className="section section-alt" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <SectionHeading
              id="projects-title"
              title="Projects"
              introduction="Personal projects. Employer code and confidential details are not included."
            />
            <div className="grid grid-3 projects-grid">
              {projects.map((project) => <ProjectCard project={project} key={project.name} />)}
            </div>

            <h3 className="subheading">Other projects</h3>
            <div className="grid grid-4">
              {additionalProjects.map((project) => (
                <article className="card mini-card" key={project.name}>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="shell">
            <SectionHeading id="skills-title" title="Skills" />
            <div className="grid grid-3">
              {skillGroups.map((group) => (
                <div className="card" key={group.name}>
                  <h3 className="card-title">{group.name}</h3>
                  <TagList items={group.items} label={`${group.name} skills`} variant="chips" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section section-alt" id="education" aria-labelledby="education-title">
          <div className="shell">
            <SectionHeading id="education-title" title="Education" />
            <div className="grid grid-3">
              {education.map((item) => (
                <article className="card" key={`${item.institution}-${item.credential}`}>
                  <p className="card-date">{item.dates}</p>
                  <h3 className="card-title">{item.credential}</h3>
                  <p className="card-subtitle">{item.institution}</p>
                  <p>{item.details}</p>
                  <TagList items={item.technologies} label={`${item.institution} areas of study`} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-inner">
            <div>
              <h2 id="contact-title">Let’s work together</h2>
              <p>
                Based in {profile.location}. Open to conversations with engineering leaders, recruiters, and technical teams.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${profile.email}`}>
                <Icon name="mail" /> {profile.email}
              </a>
              <div className="contact-links">
                <a href={phoneHref}><Icon name="phone" size={16} /> {profile.phone}</a>
                <a href={profile.linkedin} {...newTab}><Icon name="linkedin" size={16} /> LinkedIn</a>
                <a href={profile.github} {...newTab}><Icon name="github" size={16} /> GitHub</a>
              </div>
              {/* Resume: when the refreshed PDF is ready, replace this line with a link to /resume/ralph-fugaban-resume.pdf */}
              <p className="resume-note" id="resume"><Icon name="file" size={16} /> Updated resume PDF coming soon.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
