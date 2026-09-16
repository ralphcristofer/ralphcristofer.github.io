import type { AdditionalProject, Project } from '../types/portfolio'

export const projects: Project[] = [
  {
    name: 'PhotoHub',
    problem:
      'Event guests needed a simple, mobile-friendly photobooth flow that could capture, review, assemble, and share photos without a complex desktop workflow.',
    solution:
      'Built a PWA-style camera experience for one to four photos, individual retakes, PNG collage generation, previews, uploads, and administrative support.',
    decisions: [
      'The interaction is designed around mobile camera use and clear step-by-step states.',
      'Individual images can be retaken without restarting the full session.',
      'Cloudflare deployment and Google Drive integration support the sharing workflow.',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Google Drive API', 'Cloudflare'],
    status: 'Active development',
  },
  {
    name: 'MTL Local Store',
    problem:
      'A small local operation needed a low-friction way to accept weekly pickup orders and keep customers and staff aligned on order status.',
    solution:
      'Built a mobile-first QR ordering experience with a public menu, cart and order tracking, plus a real-time administrative dashboard and weekly menu lifecycle.',
    decisions: [
      'Prices are resolved server-side rather than trusted from the browser.',
      'Order-item snapshots preserve historical records when the menu changes.',
      'A timezone-aware scheduled workflow closes each weekly sales cycle.',
    ],
    technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Cloudflare Pages', 'Vite'],
    status: 'Active development',
  },
  {
    name: 'SKAP',
    problem:
      'Multi-location event teams needed isolated, durable scoring state and predictable data that broadcast software could consume during live operation.',
    solution:
      'Built a responsive scoring system with independent game state per location, persistent storage, conflict-aware saves, and stable JSON feeds for vMix.',
    decisions: [
      'Each location is isolated in its own Cloudflare Durable Object.',
      'Monotonic revisions reject stale writes instead of silently overwriting newer state.',
      'Versioned JSON contracts keep broadcast field mappings stable.',
    ],
    technologies: ['React', 'TypeScript', 'Cloudflare Workers', 'Durable Objects', 'SQLite', 'Vitest'],
    status: 'Deployed',
  },
]

export const additionalProjects: AdditionalProject[] = [
  {
    name: 'Prompter',
    description: 'A React and TypeScript utility for text prompting, image prompting, session controls, and time calculation.',
  },
  {
    name: 'Retro Deck Hub Updater',
    description: 'A C# Windows Forms maintenance utility with installation validation, downloads, extraction, cleanup, and self-update behavior.',
  },
  {
    name: 'WizStack',
    description: 'A collaborative MERN student-management system for organizing courses and tracking assessments.',
  },
  {
    name: 'Oracle SQL Library Management',
    description: 'A collaborative PL/SQL library data model covering ER design, indexes, triggers, packages, procedures, and functions.',
  },
]
