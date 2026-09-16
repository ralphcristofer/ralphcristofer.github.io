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

## 2026-09-16 - Consistency and KISS refinement

### Changed

- Audited every career entry for employment type, location, and work arrangement consistency.
- Separated work arrangement (`On-site`, `Remote`, or `Hybrid`) from geographic location in the structured experience data.
- Corrected the FDM Software Engineering Consultant entry to `Contract full-time` and retained `Remote` as its separate work arrangement.
- Identified the Smart Communications role consistently as an `Internship` and `On-site`.
- Kept employment type or work arrangement absent when the supplied career history did not verify it rather than inventing missing information.
- Removed the incomplete `Contract` label from the Computer Support and Network Teacher role because the supplied profile does not confirm full-time/part-time status or work arrangement.
- Removed the SKAP live-demo link.
- Removed the decorative project-card preview column and simplified featured projects into direct content cards with a clean three-column desktop layout.
- Reduced the primary heading scale and consolidated several body and card text sizes for a simpler visual hierarchy.
- Moved the `Current focus` note fully below the portrait so it no longer overlaps or clips the photograph.
- Changed the footer to a non-overlaying sticky-footer layout that remains at the bottom of short pages without covering content.
- Updated footer capitalization to `Software Development · Automation · Quality Engineering`.

## 2026-09-16 - KISS redesign and consistency audit

### Changed

- Reduced the type system to four sizes (0.875rem, 1rem, 1.25rem, 2rem) plus the page title, and three weights (400, 600, 700). The rendered page went from 38 font size/weight combinations to 10.
- Replaced ad-hoc colours, radii, and breakpoints with a small token set: two text colours, one accent, one radius, two breakpoints (40rem, 60rem).
- Removed section eyebrows and taglines; every section now uses a plain heading ("About", "Experience", "Projects", "Skills", "Education", "Contact").
- Simplified the hero to name, current role, one-sentence introduction, one button, and GitHub/LinkedIn links. The portrait is a plain circle without frame or "Current focus" note.
- Replaced the dark six-card metrics band with four plain highlights under the hero.
- Replaced the About career-path cards with a single "Path" line.
- Experience is now flat (no timeline markers or cards). Each role shows one meta line (dates · location · type · arrangement), a summary, two highlights, and a "Show N more" disclosure. Parallel roles with identical details (Atwater) show the meta line once.
- Earlier experience shows summaries only.
- Project cards show status, description, technologies, and repository link; problem statement and engineering decisions moved into a disclosure. Additional work is a simple list.
- Technologies and skills render as quiet "a · b · c" text lists instead of pill tags.
- Contact is a simple four-item list; the resume notice is a single line. Footer reduced to copyright and back-to-top.
- Page length: ~11 → ~8 screens on desktop (1440×900), ~22 → ~14 screens on mobile (390×844).

### Consistency fixes

- Unified the job title to "Senior Software Developer" across hero, page title, Open Graph, and X/Twitter metadata (JSON-LD already used it).
- Removed the double-counted metric ("30 min → 10 min" and "~67%" describe the same improvement) and restored the "~" qualifiers used in the experience entry.
- Removed the "Resume" nav button and "Resume status" hero button, which led to a "coming soon" notice.
- Removed the footer tagline, which differed from the hero headline.
- `Keywords Studios — Montréal` → `Keywords Studios` (location already shown in the meta line; spelling now matches "Montreal" elsewhere).
- Skills naming aligned with the rest of the site: `Visual Basic (VB)` → `Visual Basic`, `HTML5`/`CSS3` → `HTML`/`CSS`, `Selenium WebDriver` → `Selenium`. Added `Next.js`, `Windows Forms`, and `Jira`, which were already listed in projects and experience. Moved `Node.js` and `ASP.NET` into "Frameworks & Web" and `Windows Task Scheduler` into "Infrastructure".
- The phone `tel:` link and contact location are now derived from `profile` data instead of being hard-coded.
- Removed unused data fields (`eyebrow`, `featured`, metric `context`, `profile.headline`).

### Open questions (not changed — need confirmation)

- "Computer Science Technology Student" (Aug 2014 – May 2017) does not match the Champlain College "Computer Science Technology" education dates (Oct 2019 – Jul 2020).
- "Accounting and Computer Support & Networking Student" starts Aug 2017; the matching Lester B. Pearson DEP starts Sep 2017. The programme is also named three different ways across the site.
- The employer is "Lester B. Pearson Continuing Education"; the school is "Lester B. Pearson School Board".
- The MTL Local Store repository slug is `mtllocalestore` (extra "e") — confirm the URL resolves.
- The root `assets/`, `js/`, and `styles/` folders are left over from the pre-React site and are not used by the build (including the outdated 2024 resume PDF).

### Validation

- TypeScript check and production build pass.
- One `h1`, no duplicate IDs, no broken in-page anchors, no console errors, no horizontal scroll at 320px.

## 2026-09-16 - Layout width, experience readability, and toggle buttons

### Changed

- Featured projects now appear in this order: PhotoHub, MTL Local Store, SKAP.
- About now uses the full content width like every other section (its text was previously capped at 40rem). The two paragraphs sit side by side on larger screens.
- Each employer in Experience is now a card. Every role uses two columns on desktop: dates, location, employment type, and work arrangement on the left; title, summary, highlights, and technologies on the right. On mobile these details show on one line above the title.
- Replaced the small `<details>` triangle links with one consistent `ToggleButton` component (outlined button with a chevron, `aria-expanded` and `aria-controls`), used for:
  - role highlights: "Show N more" / "Show less" (the extra bullets continue the same list)
  - earlier experience: a labelled bar with "Show N roles" / "Hide roles"
  - project cards: "Details" / "Hide details", next to the "Repository" link
- Project cards align to the top so opening one card no longer stretches the others.
- Every role now shows its own dates and details (the Atwater de-duplication was removed; the side column makes the repetition easy to scan).

### Added

- `src/components/ToggleButton.tsx`
- `src/components/EarlierExperience.tsx`

### Validation

- TypeScript check and production build pass.
- Toggle behaviour verified at 1440px and 390px: buttons expand and collapse, labels and `aria-expanded` update, every `aria-controls` target exists, no duplicate IDs, no console errors, no horizontal scroll.

## 2026-09-16 - Modern visual redesign

### Changed

- New visual system: Inter variable font (self-hosted), slate neutrals with a single blue accent, one card radius, one control radius, one soft shadow. The type scale is unchanged (0.875 / 1 / 1.25 / 2rem plus the display name).
- Automatic dark theme that follows the operating-system setting, including `theme-color` and `color-scheme` metadata.
- Header: translucent sticky bar with an "RF" mark, active-section underline (IntersectionObserver), and a Contact button.
- Hero: location pill, larger name, role line, primary "Get in touch" (email) and secondary "View experience" buttons, GitHub/LinkedIn icon buttons, framed round portrait, subtle grid-and-glow background, and four outcome cards.
- About: large lead sentence beside the detail paragraphs; career path shown as an arrow sequence ending at the current focus.
- Experience: vertical timeline (tablet and up) with a highlighted dot and "Current" badge for the present employer; timeline hidden on phones so cards use the full width. Role details wrap cleanly on phones without stray separators.
- Projects: status badges (green = deployed, amber = active development), a divider above the Details / Code actions, and a light hover lift. "More on GitHub" is a row of link cards.
- Skills: each group is a card with chips. Education cards lead with dates and the credential, with the institution in the accent colour.
- Contact: dark closing band with the email as the main button, phone / LinkedIn / GitHub links, and the resume note. Footer matches the band.
- Inline SVG icons (`Icon.tsx`) replace image icons so they follow the text colour in both themes.

### Dependencies

- Added `@fontsource-variable/inter` (run `npm install`).

### Validation

- TypeScript check and production build pass.
- Light and dark screenshots at 1440px and 390px; no horizontal scroll, no console errors.
- Text contrast meets WCAG AA in both themes (the only automated flags were false positives from the header's translucent background).
- One `h1`, no duplicate IDs, no broken anchors or `aria-controls` targets; nav highlight, mobile menu, and all toggles verified.

## 2026-09-16 - Repository hygiene

### Changed

- Expanded `.gitignore`: environment files (`.env`, `.env.*`, keeping `.env.example`), logs, TypeScript build info, test coverage, editor folders (`.vscode/*` except `extensions.json`, `.idea/`), swap files, and OS files.
- Ignored `.agents/` and `.openai/`. `.openai/hosting.json` only identified a private review-hosting project and is not used by the website or the GitHub Pages deployment, so it is removed from version control (the local file is kept).

## 2026-09-16 - Private repositories and content corrections

### Removed

- All project repository links (the repositories are private): the "Code" link on project cards, the links on the smaller project cards, and the `repository` field from project data and types.
- The "Professional Development" entries (student periods) from earlier experience. Earlier experience now covers 2011 – 2018 with five roles.
- The Champlain College "Computer Science Technology" education entry.

### Changed

- "More on GitHub" renamed to "Other projects"; those cards are now plain descriptions.
- Projects introduction now reads "Personal projects." instead of "Personal public work."
- Computer Support and Networks — DEP (Lester B. Pearson School Board) now includes programming and scripting, databases, and network management, with Python, Scripting, SQLite, and Network management added to its areas of study.
- Education uses a three-column layout for the remaining three credentials.
- README privacy note updated to reflect private repositories.
- Resolves the earlier open questions about the "Professional Development" and Champlain College date conflicts.
