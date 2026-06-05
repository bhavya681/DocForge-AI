export const problemPoints = [
  {
    lead: "Docs drift every sprint",
    detail: "READMEs and API refs fall behind the code they describe.",
  },
  {
    lead: "Onboarding takes weeks",
    detail: "New engineers reverse-engineer architecture from Slack threads.",
  },
  {
    lead: "Knowledge lives in heads",
    detail: "Deployment steps and auth flows aren't written down anywhere.",
  },
];

export const solutionSteps = [
  { step: "01", title: "Connect", detail: "OAuth to GitHub, GitLab, or Bitbucket. Read-only access." },
  { step: "02", title: "Analyze", detail: "AI maps folder structure, routes, schemas, and dependencies." },
  { step: "03", title: "Publish", detail: "Editable docs land in your workspace — ready to ship." },
];

export const workflowSteps = [
  { id: "repo", label: "Git Repository", detail: "Connect via OAuth" },
  { id: "analyze", label: "Analyze Code", detail: "Structure, APIs, schemas" },
  { id: "generate", label: "Generate Docs", detail: "AI writes every artifact" },
  { id: "publish", label: "Docs Studio", detail: "Edit, preview, publish" },
];

export const outputTypes = [
  "README",
  "API Reference",
  "Architecture",
  "Onboarding",
  "Deploy Guide",
];

export const trustMetrics = [
  { value: "2,000+", label: "Repositories documented" },
  { value: "<60s", label: "Average generation time" },
  { value: "SOC 2", label: "Compliance certified" },
];

export const integrations = [
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Vercel",
  "AWS",
  "Docker",
];

export const featureDeepDives = [
  {
    index: "01",
    title: "Repository Analysis",
    headline: "Deep understanding of your codebase",
    description:
      "DocForge scans folder structure, dependencies, API routes, and database layers — building a complete map before writing a single line.",
    highlights: ["GitHub", "GitLab", "Bitbucket"],
    visual: "tree" as const,
  },
  {
    index: "02",
    title: "API Documentation",
    headline: "Swagger-quality docs from your routes",
    description:
      "Endpoints, request bodies, response schemas, and auth flows — generated automatically from your source code.",
    highlights: ["Endpoints", "Schemas", "Auth"],
    visual: "api" as const,
  },
  {
    index: "03",
    title: "Architecture Visualizer",
    headline: "System diagrams that stay current",
    description:
      "Mermaid-powered architecture, data flow, and component diagrams generated from detected services and dependencies.",
    highlights: ["System", "Data Flow", "Mermaid"],
    visual: "diagram" as const,
  },
];

export const features = [
  {
    title: "Repository Analysis",
    description:
      "Connect GitHub, GitLab, or Bitbucket. AI analyzes folder structure, dependencies, APIs, components, database layers, and authentication flows.",
    icon: "GitBranch",
    highlights: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    title: "README Generator",
    description:
      "Generate project overviews, installation guides, usage docs, feature lists, environment variables, and contributing guides automatically.",
    icon: "FileText",
    highlights: ["Overview", "Installation", "Contributing"],
  },
  {
    title: "API Documentation",
    description:
      "Automatically create endpoints, request bodies, response schemas, and authentication docs — Swagger-like documentation from your code.",
    icon: "Code2",
    highlights: ["Endpoints", "Schemas", "Auth"],
  },
  {
    title: "Architecture Visualizer",
    description:
      "Generate system architecture, data flow diagrams, component diagrams, and database relationships with full Mermaid support.",
    icon: "Network",
    highlights: ["System", "Data Flow", "Mermaid"],
  },
  {
    title: "Deployment Generator",
    description:
      "Create deployment documentation for Vercel, Netlify, AWS, Railway, Docker, and Kubernetes with platform-specific instructions.",
    icon: "Rocket",
    highlights: ["Vercel", "AWS", "Docker"],
  },
  {
    title: "Team Knowledge Base",
    description:
      "Ask questions like 'Where is authentication implemented?' or 'Which service handles payments?' — AI answers using repository context.",
    icon: "MessageSquare",
    highlights: ["AI Chat", "Context", "Search"],
  },
];

export const premiumFeatures = [
  {
    title: "AI Codebase Chat",
    description: "ChatGPT for your repositories. Ask anything about your codebase.",
  },
  {
    title: "Auto Update Docs",
    description: "Documentation updates automatically after every push.",
  },
  {
    title: "Team Workspaces",
    description: "Manage multiple repositories across your organization.",
  },
  {
    title: "Version Tracking",
    description: "Track documentation changes over time with full history.",
  },
];

export const testimonials = [
  {
    quote:
      "DocForge saved us 20+ hours on our open source project. The API docs alone were worth it.",
    author: "Sarah Chen",
    role: "Indie Hacker",
    company: "ShipFast",
  },
  {
    quote:
      "Our onboarding time dropped from 2 weeks to 2 days. New engineers love the auto-generated architecture diagrams.",
    author: "Marcus Rivera",
    role: "CTO",
    company: "Stackline SaaS",
  },
  {
    quote:
      "We manage 15 client repos. DocForge keeps documentation consistent across every project.",
    author: "Elena Kowalski",
    role: "Agency Lead",
    company: "DevCraft Studio",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: 0,
    period: "forever",
    description: "Perfect for indie hackers and solo developers.",
    features: [
      "1 repository",
      "README generation",
      "Basic API docs",
      "Architecture diagrams",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    period: "month",
    description: "For growing teams and SaaS founders.",
    features: [
      "10 repositories",
      "Full API documentation",
      "Deployment guides",
      "AI codebase chat",
      "Auto-update on push",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: 79,
    period: "month",
    description: "For agencies and engineering teams.",
    features: [
      "Unlimited repositories",
      "Team workspaces",
      "Version tracking",
      "Custom branding",
      "SSO & permissions",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const faqs = [
  {
    question: "How does DocForge analyze my repository?",
    answer:
      "DocForge connects to your Git provider via OAuth and analyzes your codebase structure, dependencies, API routes, database schemas, and configuration files. Our AI then generates comprehensive documentation tailored to your project.",
  },
  {
    question: "Which Git providers are supported?",
    answer:
      "We currently support GitHub, GitLab, and Bitbucket. You can connect multiple accounts and repositories from any supported provider.",
  },
  {
    question: "Can I edit the generated documentation?",
    answer:
      "Yes! The Documentation Studio includes a full markdown editor with live preview, AI suggestions, and the ability to customize any generated content before publishing.",
  },
  {
    question: "Does documentation update automatically?",
    answer:
      "On Pro and Team plans, documentation automatically regenerates when you push changes to your repository. You can review and approve updates before they go live.",
  },
  {
    question: "What deployment platforms are supported?",
    answer:
      "We generate deployment guides for Vercel, Netlify, AWS, Railway, Docker, and Kubernetes. The generator detects your project's configuration and creates platform-specific instructions.",
  },
  {
    question: "Is my code secure?",
    answer:
      "Absolutely. We use read-only access to your repositories, encrypt all data in transit and at rest, and never store your source code permanently. We're SOC 2 compliant.",
  },
];

export const mockRepositories = [
  {
    id: "1",
    name: "acme-api",
    provider: "GitHub",
    language: "TypeScript",
    lastGenerated: "2 hours ago",
    docsCount: 12,
    status: "synced" as const,
  },
  {
    id: "2",
    name: "dashboard-ui",
    provider: "GitHub",
    language: "React",
    lastGenerated: "1 day ago",
    docsCount: 8,
    status: "synced" as const,
  },
  {
    id: "3",
    name: "mobile-backend",
    provider: "GitLab",
    language: "Go",
    lastGenerated: "3 days ago",
    docsCount: 15,
    status: "pending" as const,
  },
  {
    id: "4",
    name: "analytics-service",
    provider: "Bitbucket",
    language: "Python",
    lastGenerated: "1 week ago",
    docsCount: 6,
    status: "synced" as const,
  },
];

export const mockGenerations = [
  {
    id: "1",
    repo: "acme-api",
    type: "API Documentation",
    status: "completed" as const,
    time: "2 hours ago",
  },
  {
    id: "2",
    repo: "acme-api",
    type: "Architecture Diagram",
    status: "completed" as const,
    time: "2 hours ago",
  },
  {
    id: "3",
    repo: "dashboard-ui",
    type: "README",
    status: "completed" as const,
    time: "1 day ago",
  },
  {
    id: "4",
    repo: "mobile-backend",
    type: "Deployment Guide",
    status: "processing" as const,
    time: "Just now",
  },
];

export const mockTeamMembers = [
  {
    id: "1",
    name: "Alex Morgan",
    email: "alex@acme.dev",
    role: "Owner",
    avatar: "AM",
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@acme.dev",
    role: "Admin",
    avatar: "SC",
  },
  {
    id: "3",
    name: "James Park",
    email: "james@acme.dev",
    role: "Editor",
    avatar: "JP",
  },
  {
    id: "4",
    name: "Lisa Wong",
    email: "lisa@acme.dev",
    role: "Viewer",
    avatar: "LW",
  },
];

export const sampleMarkdown = `# Acme API

> RESTful API for the Acme platform — authentication, billing, and core services.

## Overview

Acme API is a TypeScript/Node.js backend providing REST endpoints for user management, subscription billing, and real-time notifications.

## Installation

\`\`\`bash
git clone https://github.com/acme/acme-api.git
cd acme-api
npm install
cp .env.example .env
npm run dev
\`\`\`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| \`DATABASE_URL\` | PostgreSQL connection string | Yes |
| \`JWT_SECRET\` | Secret for signing tokens | Yes |
| \`STRIPE_KEY\` | Stripe API key | Yes |

## API Endpoints

### Authentication

\`POST /api/auth/login\` — Authenticate user and return JWT token.

\`POST /api/auth/register\` — Create a new user account.

### Users

\`GET /api/users/:id\` — Get user profile by ID.

\`PATCH /api/users/:id\` — Update user profile.
`;

export const sampleMermaid = `graph TB
    subgraph Client
        WEB[Web App]
        MOB[Mobile App]
    end

    subgraph API Gateway
        GW[API Gateway]
    end

    subgraph Services
        AUTH[Auth Service]
        USER[User Service]
        BILL[Billing Service]
    end

    subgraph Data
        PG[(PostgreSQL)]
        REDIS[(Redis Cache)]
    end

    WEB --> GW
    MOB --> GW
    GW --> AUTH
    GW --> USER
    GW --> BILL
    AUTH --> PG
    USER --> PG
    BILL --> PG
    AUTH --> REDIS
`;
