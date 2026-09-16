# Ralph Fugaban — Digital Resume and Engineering Portfolio

A mobile-first digital resume and software engineering portfolio for Ralph Cristofer Fugaban. The site presents experience across enterprise software development, application modernization, QA automation, infrastructure, networking, and technical instruction.

## Technology stack

- React
- TypeScript
- Vite
- Modern responsive CSS with automatic light and dark themes
- Inter variable font, self-hosted through `@fontsource-variable/inter`
- Static deployment with no required backend

The site intentionally avoids a large UI framework and keeps career, education, skill, metric, and project content in typed data modules.

## Local development

Requirements:

- Node.js 20 or newer
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL after startup.

## Production build

```bash
npm run build
```

The deployable static site is written to `dist/`.

Run TypeScript validation without producing a build:

```bash
npm run typecheck
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment overview

### GitHub Pages

The included GitHub Actions workflow builds the Vite project and deploys `dist/` to GitHub Pages. Repository Pages settings should use **GitHub Actions** as the deployment source.

Because this is a user site at `ralphcristofer.github.io`, Vite uses the default root base path.

### Cloudflare Pages

The static application is ready for a future Cloudflare Pages project with:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: 20 or newer

No server-side runtime, database, or application secrets are required for the portfolio.

## Project structure

```text
public/
  icons/              Social icons
  profile/            Production profile photograph
  resume/             Final resume PDF location
  server/             Static-site Worker entry for private review hosting
  og.png              Social-sharing image
src/
  components/         Reusable navigation and content components
  data/               Typed portfolio content
  styles/             Global mobile-first styling
  types/              Shared TypeScript data types
  App.tsx              Single-page information architecture
  main.tsx             React entry point
index.html             Metadata and application mount point
LOGS.md                Project change and decision log
```

## Resume PDF

The refreshed PDF is not available yet. When complete, place it at:

```text
public/resume/ralph-fugaban-resume.pdf
```

Then replace the "updated resume PDF is coming soon" line in the Contact section of `src/App.tsx` with a download link to `/resume/ralph-fugaban-resume.pdf`.

Do not use the older 2024 PDF as the current resume without reviewing and updating its content.

## Content and privacy

- Employer project details are intentionally generalized.
- No proprietary source code, business names, internal URLs, credentials, or database structures are included.
- Project repositories are private, so project cards describe the work without linking to source code.
- Approximate metrics preserve qualifiers such as `~`, `approximately`, or ranges.

## Accessibility and responsive behavior

The site includes semantic landmarks, a skip link, keyboard-accessible navigation with an active-section indicator, visible focus states, labelled show/hide buttons (`aria-expanded` / `aria-controls`), light and dark colour schemes that follow the operating system, reduced-motion support, responsive layouts, and descriptive portrait alternative text.

Target validation widths are 320px, 430px, 768px, 1024px, and 1440px.
