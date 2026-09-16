# Project Log

## 2026-09-16 - Initial repository assessment

### Added

- Added this project log so future additions, changes, removals, refactors, dependency updates, and architectural decisions can be recorded consistently.

### Reviewed

- Inspected the complete tracked repository: the single-page HTML entry point, stylesheet files, menu script, README, image and SVG assets, Git history, branch state, and GitHub Pages remote.
- Verified the deployed GitHub Pages site and confirmed that it currently publishes only the hero/profile section; its navigation points to sections that do not exist yet.
- Inspected and rendered the existing one-page resume PDF. It is a 2024 document and does not include the recent FDM Group, CI Financial, or CIBC Mellon experience supplied for this modernization.
- Reviewed Ralph's public GitHub source repositories, their metadata, READMEs, technology mix, recent activity, public deployment links, and visible project structure.

### Reuse decisions

- Retain the current repository and Git history.
- Reuse the professional profile photo after image optimization and responsive sizing.
- Reuse the verified GitHub, LinkedIn, email, and contact destinations.
- Reuse existing SVG icons selectively only where they remain accessible and visually consistent.
- Keep resume-download support, but do not present the current 2024 PDF as the final current resume without explicit approval or a replacement document.

### Architecture decision

- Recommend an in-place application-layer rebuild using React, TypeScript, Vite, and mobile-first CSS rather than incrementally extending the incomplete static page.
- Keep content in structured TypeScript data modules and presentation in reusable section/components.
- Keep dependencies minimal and preserve a static deployment model compatible with GitHub Pages during development and Cloudflare Pages later.

### Public project shortlist

- Primary: `mtllocalestore` - mobile-first QR ordering, real-time order tracking, administrative workflows, scheduled weekly lifecycle, Supabase, Cloudflare, React, and TypeScript.
- Primary: `skap` - multi-location scoring system with Cloudflare Durable Objects, conflict-aware state revisions, documented JSON contracts, vMix integration, tests, React, TypeScript, and a verified live deployment.
- Primary: `PhotoHub` - mobile photobooth workflow with camera capture, collage generation, individual retakes, Google Drive integration, PWA behavior, Supabase, Next.js, TypeScript, and Cloudflare deployment configuration.
- Conditional: `retro-deck-hub-updater` - a substantial C# Windows Forms updater with validation, process coordination, archive extraction, cleanup, and self-update behavior; perform a focused security/distribution review before featuring it prominently.
- Supporting/secondary candidates: `prompter`, `WizStack`, and `Oracle-SQL-Library-Management`; these need stronger public documentation, ownership/status clarification, or completed demo links before being treated as flagship projects.

### Removed or changed

- No application code, content, dependencies, assets, deployment configuration, or architecture were changed during this assessment.

## 2026-09-16 - Updated career source material and portrait

### Content updates accepted

- Accepted the newly supplied LinkedIn-derived career history as the most current source for role titles, dates, employment types, locations, responsibilities, and recent engineering outcomes.
- Retained the user's earlier detailed brief as a complementary source for CIBC Mellon responsibilities, TestRail integration, the `30 minutes -> 10 minutes` application-processing improvement, the `3 minutes -> 1 minute` regression spot-check improvement, approximately `131` supported tickets, approximately `20` automated application pages, and approximately `30-50%` automated regression effort.
- Ignored LinkedIn-generated lines such as `Skills: Test Automation, TypeScript, +3 skills`, as requested.
- Updated the CI Financial content model to represent overlapping Software Automation Developer and Quality Assurance Analyst responsibilities without duplicating shared accomplishments.
- Updated the FDM Group dates and scope to reflect Software Quality Assurance Lead from December 2024 to April 2025 and Software Engineering Consultant from October 2024 to April 2025.
- Added the Pearson Content Specialist assignment, Atwater's parallel IT management/systems/web-development responsibilities, the IOS Center customer-care role, Kadron technician role, Tim Hortons role, professional-development periods, and the Smart Communications full-stack internship to the underlying career data plan.
- Added newly supplied supported outcomes, including `70+` automated tests, `5-6 hours -> approximately 10 minutes` for scheduled multi-account validation, `100+` documented defects, `20+` manual scenarios per release, `15-20` release/UAT cycles, and `50+` FDM automation scenarios.

### Presentation decisions

- Continue to lead with `Software Developer | Automation & Quality Engineering | Application Modernization`.
- Present CIBC Mellon as `Senior Business Solutions Consultant (Senior Software Developer)` to preserve both the official title supplied earlier and the functional/public positioning.
- Consolidate simultaneous roles under their employer where this improves readability, while retaining every supplied role in structured career data.
- Keep career breaks and non-technical early roles available in the full timeline but visually de-emphasized.
- Treat the Smart Communications internship as an early software-development foundation without disrupting the requested primary progression from IT support through systems, instruction, QA automation, and senior software development.

### Assets and resume

- Received `RAP.jpg`, a 400 x 400 professional JPEG portrait, for use as the new primary profile image during implementation.
- The updated resume PDF is still pending. The implementation should provide a clearly labeled placeholder state and expected final path rather than presenting the existing 2024 PDF as current.

### Removed or changed

- No application implementation, dependency, deployment, or architectural files were changed in this content-update step.
- The supplied portrait remains at its source location and has not yet been copied or transformed into a production asset.

## 2026-09-16 - React portfolio rebuild

### Added

- Added a React 19, TypeScript, and Vite application foundation with production build and type-check scripts.
- Added a mobile-first single-page portfolio covering Home, About, Experience, Projects, Skills, Education, Contact, and Resume status.
- Added reusable components for navigation, section headings, technology tags, experience groups, and project cards.
- Added typed data modules for profile information, measurable outcomes, the complete career timeline, public projects, skills, and education.
- Added the new professional portrait as `public/profile/ralph-fugaban.jpg` and selected existing GitHub, LinkedIn, and email icons for reuse.
- Added a restrained white, navy, gray, and blue visual system with responsive layouts, visible focus states, a skip link, keyboard-accessible navigation, native disclosure controls, and reduced-motion support.
- Added selected outcome cards for the supplied `30 minutes -> 10 minutes`, approximately `67%`, `5-6 hours -> approximately 10 minutes`, `70+` tests, `131` tickets, and `30-50%` regression-automation metrics.
- Added screenshot-ready project layouts for MTL Local Store, SKAP, and PhotoHub, plus links to additional public work.
- Added professional title, description, canonical, Open Graph, X/Twitter, theme, favicon, and Person structured metadata.
- Added a custom social-sharing card at `public/og.png` using the portfolio's white-and-blue visual language.
- Added a GitHub Pages deployment workflow and documented future Cloudflare Pages settings.
- Added `.gitignore`, expanded project documentation, and documented the final resume path as `public/resume/ralph-fugaban-resume.pdf`.

### Changed

- Replaced the incomplete static hero page with a structured, maintainable React application.
- Replaced the previous casual portrait with the newly supplied professional portrait.
- Changed the public display name to `Ralph Cristofer Fugaban`; the middle name is intentionally omitted.
- Reworked experience presentation so recent engineering roles receive detailed coverage while earlier work remains available through an expandable timeline.
- Consolidated overlapping responsibilities beneath CI Financial, FDM Group, Pearson, and Atwater employer groupings without removing the individual roles from career data.
- Replaced the outdated resume download with an honest pending state until the refreshed PDF is supplied.
- Replaced the placeholder README with purpose, stack, development, build, deployment, structure, resume, privacy, and accessibility documentation.

### Removed

- Removed the obsolete standalone CSS files and the vanilla JavaScript hamburger-menu script.
- Removed inline event handlers, duplicated desktop/mobile navigation markup, fixed viewport-height sections, oversized desktop margins, and navigation links to nonexistent sections.
- Removed the outdated `Software Developer | Web Developer` positioning and generic `My Resume Portfolio` metadata.

### Dependencies

- Added runtime dependencies: `react` and `react-dom`.
- Added development dependencies: `typescript`, `vite`, `@vitejs/plugin-react`, `@types/react`, and `@types/react-dom`.
- Dependency installation completed with zero reported vulnerabilities.

### Architecture decisions

- Kept the application static and backend-free for straightforward GitHub Pages and Cloudflare Pages deployment.
- Used structured TypeScript data instead of duplicating career content inside presentation components.
- Avoided a UI framework and icon package to minimize dependency and styling overhead.
- Kept confidential employer applications, client names, internal URLs, credentials, screenshots, data structures, and proprietary logic out of the portfolio.

### Validation

- Completed successful TypeScript and Vite production builds.
- Validated responsive behavior at 320px, 430px, 768px, 1024px, and 1440px widths.
- Verified the mobile navigation, earlier-experience disclosure, section anchors, portrait loading, heading structure, metadata, canonical link, and social-sharing metadata.
- Confirmed that the page has one `h1`, no duplicate IDs, no missing internal anchor targets, and no browser console warnings or errors.
- Corrected a narrow-screen horizontal-scroll edge case and repeated the production build after the fix.
- Added private Sites hosting metadata for a shareable review deployment while retaining GitHub Pages as the documented repository deployment path.
- Added a minimal static-asset Worker entry used only by the private Sites review deployment; the portfolio remains a static application with no backend data or secrets.
