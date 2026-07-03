# Amplified

Marketing and content site for Amplified, a productised digital consultancy
focused on AI implementation and governance for project-driven industries.

Built with Next.js 15 (App Router), React 18, TypeScript and Tailwind CSS.
Content is managed in Sanity. Consultation requests and AI waste calculator
leads are stored in Postgres and forwarded to HubSpot CRM.

## Stack

- **Framework**: Next.js 15 App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with shadcn/ui (Radix primitives)
- **CMS**: Sanity (Studio mounted at `/studio`)
- **Database**: Postgres (Neon) via Drizzle ORM — consultation requests and AI
  waste leads only
- **Email**: Resend (contact form notifications)
- **CRM**: HubSpot (consultation and newsletter sync)
- **Careers**: TalentHR
- **Assistant**: "Ask Amplified" uses the OpenAI API

## Getting started (Cursor / local)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the environment template and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   At minimum, set `DATABASE_URL`. Sanity, OpenAI, Resend, HubSpot and TalentHR
   keys are optional for local development — the app falls back to bundled
   content and disables the relevant features when a key is missing.

3. Push the database schema (for consultation requests and AI waste leads):

   ```bash
   npm run db:push
   ```

4. Start the dev server:

   ```bash
   npm run dev
   ```

   The site runs at `http://localhost:3000` and the Sanity Studio at
   `http://localhost:3000/studio`.

## Sanity CMS

The Studio is embedded in this app at `/studio`. Schemas live in `studio/`
and the configuration is in `sanity.config.ts`.

Content types:

- **insight** — articles for the Insights section
- **engagement** — the three productised engagements (Squad Blueprint, The
  Forge, Delivery Compass)
- **caseStudy** — reference case studies
- **siteSettings** — singleton holding the manifesto beliefs

### First-time setup

1. Create a project at <https://sanity.io/manage> and note the **Project ID**.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
   (usually `production`) in `.env.local`.
3. In the Sanity dashboard, add `http://localhost:3000` and your production URL
   to **API → CORS origins** (with credentials allowed) so the Studio can load.
4. Create an **Editor/Write token** under **API → Tokens** and set it as
   `SANITY_API_WRITE_TOKEN` (only needed for seeding).

### Seed Sanity with the bundled content

This copies the engagements, case studies, manifesto and any insights already
in Postgres into your Sanity dataset:

```bash
npm run seed:sanity
```

Requires `NEXT_PUBLIC_SANITY_PROJECT_ID`, `SANITY_API_WRITE_TOKEN`, and (to
migrate insights) `DATABASE_URL`.

### Fallback behaviour

When Sanity is not configured (no project ID), the site renders the bundled
TypeScript engagement data and serves insights from Postgres. This keeps local
development and the build working before Sanity is connected.

> Note: the engagements hub and homepage list render from the bundled
> TypeScript engagement data. The engagement detail pages and server-rendered
> surfaces (sitemap, the assistant, the playbook PDF) read from Sanity when it
> is configured.

## Deploying to Vercel

1. Push this repository to GitHub and import it in Vercel.
2. Add the environment variables from `.env.example` in **Project Settings →
   Environment Variables**. Use the same `NEXT_PUBLIC_*` Sanity values you used
   locally.
3. Add your Vercel production domain to the Sanity **CORS origins** list.
4. Deploy. Vercel runs `npm run build` automatically.

The database schema changes are applied with `npm run db:push` (run locally
against your production `DATABASE_URL`); there is no separate migration step in
the build.

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run check` | Type-check with `tsc` |
| `npm run db:push` | Push the Drizzle schema to Postgres |
| `npm run seed:articles` | Seed the bundled articles into Postgres |
| `npm run seed:sanity` | Seed Sanity with bundled content |

## Project structure

```
app/                 Next.js App Router routes, API handlers, /studio
client/src/          UI components, pages, hooks, bundled engagement data
lib/                 services (CRM, email, CMS), Sanity client + content layer
shared/              Drizzle schema and shared types
studio/              Sanity schema types and Studio structure
scripts/             seed scripts
```

## Content conventions

Copy is written in UK English with no em dashes. Engagement pricing is never a
published figure — it renders as "Scoped to engagement, discussed during
initial conversation."
