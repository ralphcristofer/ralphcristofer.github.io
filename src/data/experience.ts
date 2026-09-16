import type { ExperienceGroup } from '../types/portfolio'

export const primaryExperience: ExperienceGroup[] = [
  {
    company: 'CIBC Mellon',
    roles: [
      {
        title: 'Senior Business Solutions Consultant (Senior Software Developer)',
        employmentType: 'Permanent full-time',
        dates: 'May 2026 – Present',
        location: 'Toronto, Ontario',
        workMode: 'Hybrid',
        summary:
          'Developing and supporting internal Fund Accounting software solutions by translating business requirements into reliable applications and practical modernization work.',
        highlights: [
          'Develop internal business applications using Visual Basic and Windows Forms, including new applications built from the ground up.',
          'Add and modify functionality in existing applications and support SQL-backed business data and operational workflows.',
          'Handle application-based user and account changes while protecting confidential business and client information.',
          'Test changes before they move through Beta, UAT, and Production, and provide builds to testers, QA resources, and business users for validation.',
          'Reduced a new internal application workflow from approximately 30 minutes to 10 minutes — an approximately 67% processing-time reduction.',
          'Improved processing by reviewing the original implementation and replacing slower approaches, including ADODB-oriented work where appropriate, with more efficient in-memory processing.',
          'Review legacy applications for reliability, maintainability, performance, and modernization opportunities and discuss potential improvements with management.',
          'Explore AI-assisted development and responsible AI integration while contributing to the team’s longer-term transition toward newer technology stacks.',
        ],
        technologies: ['Visual Basic', 'Windows Forms', 'SQL', 'Microsoft enterprise platforms', 'Application modernization'],
      },
    ],
  },
  {
    company: 'CI Financial',
    roles: [
      {
        title: 'Software Automation Developer',
        employmentType: 'Contract full-time via FDM Group',
        dates: 'Jun 2025 – May 2026',
        location: 'Toronto, Ontario',
        workMode: 'Hybrid',
        summary:
          'Built and evolved a Playwright and TypeScript automation platform for a wealth-management application, including major components reconstructed after application redesigns.',
        highlights: [
          'Designed framework configuration, fixtures, runners, environment handling, logging, reporting, reusable utilities, and Page Object Model architecture.',
          'Developed 70+ automated tests across DEV, UAT, and PROD for account workflows, forms, tables, dashboards, calendars, uploads, validations, and secure authentication.',
          'Automated approximately 30–50% of regression effort across approximately 20 key application pages while retaining manual validation where judgment was required.',
          'Reduced regression spot-check execution from approximately 3 minutes to 1 minute.',
          'Scheduled multi-account validations that reduced 5–6 hours of manual work to approximately 10 minutes.',
          'Automated complex validation that completed within three hours instead of requiring weeks of manual review.',
          'Built database-schema API checks with Playwright, TypeScript, REST APIs, PostgreSQL, and Postman to validate authentication, headers, JSON structure, status, and response timing.',
          'Integrated automation with the TestRail API to publish results and attach logs and screenshots for traceability.',
          'Configured traces, videos, logs, screenshots, HTML reports, retry handling, and summary reporting to separate application defects from environment and automation failures.',
          'Managed code through GitHub and Bitbucket, reviewed contributions, supported QA analysts, and used AI-assisted engineering tools to accelerate design, debugging, and documentation.',
        ],
        technologies: ['Playwright', 'TypeScript', 'Node.js', 'PostgreSQL', 'Postman', 'TestRail API', 'GitHub', 'Bitbucket'],
      },
      {
        title: 'Quality Assurance Analyst',
        employmentType: 'Contract full-time via FDM Group',
        dates: 'Apr 2025 – May 2026',
        location: 'Toronto, Ontario',
        workMode: 'Hybrid',
        summary:
          'Owned detailed functional and release validation across the software lifecycle, connecting requirements, test evidence, risk, and business sign-off.',
        highlights: [
          'Reviewed user stories, acceptance criteria, requirements, process flows, and change requests and updated regression coverage, UAT scripts, test data, and documentation as scope changed.',
          'Created TestRail plans, scenarios, cases, and execution checklists mapped to requirements and acceptance criteria.',
          'Executed 20+ manual scenarios per release across development, QA, staging, UAT, and production using functional, regression, smoke, integration, exploratory, end-to-end, usability, and browser testing.',
          'Validated APIs and data with Postman, browser tools, SQL, pgAdmin, PostgreSQL, and Snowflake across positive, negative, boundary, exception, and error-handling conditions.',
          'Logged and managed 100+ defects with clear evidence, supported triage and retesting, and identified release-blocking issues such as duplicate submissions and invalid infinite-number handling.',
          'Linked a recurring one-hour morning degradation pattern to an automated 8:00 a.m. job affecting a new database API and escalated evidence for root-cause investigation.',
          'Supported approximately 15–20 release and UAT cycles and 131 tickets moving through DEV, UAT, and PROD between April 2025 and February 2026.',
          'Coordinated with Business Analysts and stakeholders on UAT readiness, business sign-off, risks, blockers, production validation, and hotfix testing.',
        ],
        technologies: ['TestRail', 'Jira', 'Postman', 'PostgreSQL', 'Snowflake', 'SQL', 'Confluence', 'SharePoint'],
      },
    ],
  },
  {
    company: 'FDM Group',
    roles: [
      {
        title: 'Software Quality Assurance Lead',
        employmentType: 'Contract full-time',
        dates: 'Dec 2024 – Apr 2025',
        location: 'Toronto, Ontario',
        workMode: 'Remote',
        summary:
          'Built maintainable UI, API, database, and end-to-end automation frameworks for banking and insurance training applications.',
        highlights: [
          'Automated 50+ UI, API, and end-to-end scenarios covering account creation, deposits, withdrawals, transfers, payments, balances, and transaction history.',
          'Designed Page Object Model, PageFactory, Cucumber Hooks, test runners, configuration, utility classes, and data-driven tests using Apache POI and external data.',
          'Automated GET, POST, PUT, PATCH, and DELETE API coverage with REST Assured, including JSON schemas, response times, and MySQL validation.',
          'Configured Jenkins pipelines and Docker environments to run scheduled and parallel tests across development, QA, and staging.',
          'Produced Extent Reports, screenshots, Cucumber reports, logs, and database evidence and managed code through GitHub pull requests and reviews.',
        ],
        technologies: ['Java', 'Selenium', 'Cucumber', 'REST Assured', 'Maven', 'Apache POI', 'Jenkins', 'Docker', 'MySQL'],
      },
      {
        title: 'Software Engineering Consultant',
        employmentType: 'Contract full-time',
        dates: 'Oct 2024 – Apr 2025',
        location: 'Toronto, Ontario',
        workMode: 'Remote',
        summary:
          'Developed Java and MySQL financial application projects using object-oriented programming and enterprise-oriented engineering practices.',
        highlights: [
          'Built and tested financial workflows and data-processing features with reusable object-oriented Java.',
          'Applied relational database design, SQL, clean-code fundamentals, and maintainable project structure.',
        ],
        technologies: ['Java', 'MySQL', 'Object-oriented programming', 'Relational databases'],
      },
    ],
  },
  {
    company: 'Lester B. Pearson Continuing Education',
    roles: [
      {
        title: 'Computer Support and Network Teacher',
        dates: 'Nov 2020 – Sep 2023',
        location: 'Montreal, Quebec',
        summary:
          'Delivered practical technical instruction to classes of 20+ students across approximately four cohorts per school year, with a reported pass rate of approximately 90–100%.',
        highlights: [
          'Taught Python, Bash, Windows, Linux, Windows Server, Active Directory, DNS, DHCP, Group Policy, routing, file services, IPv4, and subnetting.',
          'Delivered Microsoft Word and Excel instruction from beginner through advanced concepts using MOAC-aligned curriculum.',
          'Designed laboratories, technical projects, demonstrations, quizzes, examinations, and practical assessments.',
          'Maintained classroom systems, virtual machines, servers, and networking equipment and mentored students toward certifications and IT careers.',
        ],
        technologies: ['Python', 'Bash', 'Windows Server', 'Linux', 'Hyper-V', 'VMware', 'Networking', 'Microsoft Office'],
      },
      {
        title: 'Content Specialist',
        employmentType: 'Contract part-time',
        dates: 'Nov 2021 – Jun 2022',
        location: 'Montreal, Quebec',
        summary:
          'Supported Recognition of Acquired Competencies candidates through technical assessment, documentation, coaching, and progress tracking.',
        highlights: [
          'Reviewed candidate portfolios, prior learning, experience, and supporting documentation for competency alignment.',
          'Conducted interviews and technical assessments and prepared records, learning materials, progress reports, and gap-focused support.',
        ],
        technologies: ['Technical assessment', 'Instructional content', 'Microsoft Office', 'HTML'],
      },
    ],
  },
  {
    company: 'Atwater Library and Computer Centre',
    roles: [
      {
        title: 'IT Manager',
        employmentType: 'Permanent full-time',
        dates: 'Nov 2018 – Jul 2021',
        location: 'Westmount, Quebec',
        workMode: 'Hybrid',
        summary:
          'Managed day-to-day technology operations, infrastructure, support, websites, equipment, documentation, volunteers, interns, and vendor coordination.',
        highlights: [
          'Evaluated and purchased technology based on requirements, budget, warranty, and operational needs and presented recommendations to leadership.',
          'Maintained IT policies, procedures, setup documentation, troubleshooting guides, asset inventory, and operational workflows.',
          'Supported remote operations, online programming, and staff continuity during COVID.',
        ],
        technologies: ['IT operations', 'Technical support', 'Procurement', 'Documentation', 'Team coordination'],
      },
      {
        title: 'Systems Administration and Technical Support',
        employmentType: 'Permanent full-time',
        dates: 'Nov 2018 – Jul 2021',
        location: 'Westmount, Quebec',
        workMode: 'Hybrid',
        summary:
          'Administered servers, accounts, networks, endpoints, shared resources, backups, updates, and access controls.',
        highlights: [
          'Administered Active Directory, DNS, DHCP, WSUS, permissions, shared resources, backups, and user lifecycle changes.',
          'Installed and supported workstations, servers, printers, LAN, Wi-Fi, accounts, audio-visual equipment, Zoom conferences, and livestreams.',
        ],
        technologies: ['Windows Server', 'Active Directory', 'DNS', 'DHCP', 'WSUS', 'Networking', 'Remote Desktop'],
      },
      {
        title: 'Web Application Developer',
        employmentType: 'Permanent full-time',
        dates: 'Nov 2018 – Jul 2021',
        location: 'Westmount, Quebec',
        workMode: 'Hybrid',
        summary:
          'Improved internal and public-facing web systems that supported computer-centre rentals, equipment usage, requests, and communications.',
        highlights: [
          'Enhanced a PHP, SQL, and JavaScript computer-rental application to reduce repetitive work and user-entry errors.',
          'Maintained WordPress websites with PHP, HTML, CSS, cPanel, and WHM and supported Mailchimp campaigns and digital content.',
        ],
        technologies: ['PHP', 'SQL', 'JavaScript', 'HTML', 'CSS', 'WordPress', 'Mailchimp'],
      },
    ],
  },
]

export const earlierExperience: ExperienceGroup[] = [
  {
    company: 'Keywords Studios',
    roles: [
      {
        title: 'Multi-Platform Game QA Tester',
        dates: 'May 2017 – Oct 2018',
        location: 'Montreal, Quebec',
        summary: 'Performed multi-platform functional QA, build verification, regression, exploratory, multiplayer, stress, and live-service testing.',
        highlights: [
          'Tested PC, PlayStation, Xbox, Nintendo Switch, VR, Android, and iOS builds and validated patches, DLC, multiplayer behavior, and platform requirements.',
          'Created detailed Jira defect reports with reproduction steps, expected and actual results, severity, environment details, and supporting evidence.',
          'Used tools including Wireshark, OBS Studio, Jira, and Confluence and supported teammates with platform-specific testing guidance.',
        ],
        technologies: ['Functional QA', 'Jira', 'Confluence', 'Wireshark', 'OBS Studio', 'LAN/WAN testing'],
      },
    ],
  },
  {
    company: 'IOS Center Inc.',
    roles: [
      {
        title: 'Customer Care and Sales Specialist — Fido',
        dates: 'Feb 2016 – Jul 2016',
        location: 'Montreal, Quebec',
        summary: 'Combined customer service, mobile technical support, account administration, and needs-based sales.',
        highlights: [
          'Resolved billing, signal, data, device, service, and connectivity concerns and supported activation, SIM replacement, number transfers, and account updates.',
          'Explained technical information to non-technical customers, documented outcomes, processed transactions, and escalated complex cases.',
        ],
        technologies: ['Customer support', 'Mobile troubleshooting', 'Account administration', 'Sales'],
      },
    ],
  },
  {
    company: 'Kadron Inc.',
    roles: [
      {
        title: 'Computer Technician',
        dates: 'Jun 2015',
        location: 'Montreal, Quebec',
        summary: 'Provided hands-on and remote support across hardware, software, backups, printers, and local networks.',
        highlights: [
          'Diagnosed Windows and macOS issues, removed malware, configured routers and printers, and resolved sharing and connectivity problems.',
          'Automated scheduled Google Drive backups with scripts and Windows Task Scheduler and documented completed technical work.',
        ],
        technologies: ['Windows', 'macOS', 'Networking', 'Windows Task Scheduler', 'Scripting', 'Remote support'],
      },
    ],
  },
  {
    company: 'Tim Hortons',
    roles: [
      {
        title: 'Team Member / Baker',
        employmentType: 'Permanent full-time',
        dates: 'Mar 2013 – Aug 2014',
        location: 'Montreal, Quebec',
        workMode: 'On-site',
        summary: 'Early customer-service and operations experience in a high-volume team environment.',
        highlights: [],
      },
    ],
  },
  {
    company: 'Smart Communications, Inc.',
    roles: [
      {
        title: 'Full Stack Developer Intern',
        employmentType: 'Internship',
        dates: 'Jun 2011 – Jun 2012',
        location: 'Philippines',
        workMode: 'On-site',
        summary: 'An early software-development foundation building and maintaining an internal business web application.',
        highlights: [
          'Developed front-end pages, interface components, and application functionality with ASP.NET, C#, HTML, CSS, and JavaScript.',
          'Gathered requirements, implemented updates, troubleshot application and workstation issues, and maintained technical documentation.',
        ],
        technologies: ['ASP.NET', 'C#', 'HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
]
