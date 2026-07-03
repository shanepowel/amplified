# Replit.md

## Overview

Amplified is a productized digital consultancy focused on AI implementation and governance for project-driven industries like infrastructure, energy, financial services, and public and private sectors. It targets delivery directors, programme leaders, and CIOs, positioning itself as a partner where rigour and accountability are critical.

The platform offers three primary productized engagements:
- **Squad Blueprint**: For rebaselining delivery functions (6 weeks, from £85,000).
- **The Forge**: For launching new products or capabilities (4 weeks, from £55,000).
- **Delivery Compass**: For AI governance and delivery in regulated industries (8 weeks, from £120,000).

Each engagement page adheres to a five-section structure covering problem, inclusions, outcomes, case study, and disqualifying criteria.

Secondary service lines include AI Governance, AI Implementation, Structured Delivery, Capability Building, Coaching, Tech Build, and Autonomous Organisations.

A key differentiator is its focus on "Built for industries where rigour isn't optional." The company's manifesto outlines five core beliefs about effective delivery.

The site copy is written in UK English with no em dashes and no published price figures. Engagement pricing is rendered as "Scoped to engagement, discussed during initial conversation." across the engagement detail pages, the engagements hub, and metadata. Where genuine delivery capacity is what is needed rather than strategic advice, that work is run through AmplifiedTeams as a deliberately separate offering, called out in the Why Amplified section on the homepage and the manifesto closing claim.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
The frontend is built with Next.js 15 App Router, React 18, and TypeScript. Styling is managed with Tailwind CSS (via shadcn/ui). TanStack Query handles server state, while React Hook Form with Zod is used for forms. All pages default to Server-Side Rendering (SSR). Path aliases are configured for improved development experience.

### Backend
API routes are implemented using Next.js Route Handlers. Services (`lib/services/`) integrate with external APIs. Drizzle ORM connects to a PostgreSQL database.

### Data Storage
The primary database is PostgreSQL, accessed via Drizzle ORM and Neon Database for serverless connections. Drizzle Kit manages schema migrations. An in-memory solution is available for development. The database stores consultation requests, AI waste calculations, and flexible content items (pages, services, case studies, insights, etc.) using JSONB.

### API Structure
RESTful API endpoints manage consultation requests, AI waste calculations, newsletter subscriptions, and CMS content retrieval, returning a standardized JSON envelope.

### Component Architecture
The application uses a modular component design. Productized engagement data is centralized, allowing a shared component to render all engagements based on a five-section template. Adding new engagements is streamlined.

### UI/UX Decisions
The platform features a clean, modern aesthetic with a consistent color palette, gradient logo, and modern design elements inspired by a "Kinetic Consultancy" design system. This includes specific shadow scales, micro-interactions, crystalline borders, typography ramps, diagonal grid overlays, luminous dividers, and gradient utilities, with fallbacks for `prefers-reduced-motion`.

The insights section has redesigned pages (Homepage Featured Insights, Insights List Page, Article Detail Page) with enhanced UI elements. The Insights List Page includes real-time search filtering, categorization, date sorting, and HubSpot sync functionality.

The homepage emphasizes direct buyer addressing, prominently featuring the three productized engagements and a "Who we work with" section showcasing case studies. Company values (Rigorous, Trusting, People-Centred, Pragmatic, Curious, Tech Excellence) are integrated throughout.

A redesigned careers page highlights company values, career paths within the Amplified Ecosystem (AmplifiedTeams, ampStore), and open roles across sectors. The "Meet the Team" page focuses on an anonymous partnership approach, detailing collective values and roles rather than individual names. Comprehensive legal pages (Privacy Policy, Accessibility, Modern Slavery, Terms of Use, Press Centre) are included in the footer with SEO metadata.

### Technical Implementations
Image optimisation is handled by `next/image` across all pages and components, with `priority` set on above-the-fold images and `sizes` hints for responsive loading. Resend email service handles contact form notifications.

SEO implementations include dynamic sitemaps that automatically include articles from the database, HowTo schema on `/how-we-work`, CollectionPage schema on `/insights`, and comprehensive article schema (JSON-LD) for insight pages. Author markup, breadcrumb navigation, and FAQ schemas are applied across relevant pages. Robots.txt is configured to be AI crawler-inclusive. Server-side metadata is managed via Next.js App Router's `generateMetadata()` exports.

HubSpot blog synchronization automatically converts HubSpot blog posts to local content items, including content extraction and smart upsert operations. Sector-specific landing pages provide tailored content (1,500+ words) for five key sectors, integrated into routing, sitemap, and footer.

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting.
- **Drizzle ORM**: Type-safe database operations.

### CRM & Email Services
- **HubSpot CRM**: For CRM, marketing automation, consultation forms, newsletter subscriptions, and page tracking.
- **HubSpot Blog API**: For synchronizing blog posts from HubSpot to the local CMS database.
- **Mailchimp**: For visitor tracking and popup forms.
- **Resend Email**: For contact form notifications.

### HR & Recruitment
- **TalentHR**: For job postings and application management.

### UI and Styling
- **Radix UI**: Accessible component primitives.
- **Tailwind CSS**: Utility-first CSS framework.
- **Lucide React**: Icon library.

### Development Tools
- **TypeScript**: Static type checking.
- **Next.js 15**: Full-stack React framework.
- **Webpack**: Bundler.

### Form and Validation
- **React Hook Form**: Form library.
- **Zod**: Schema validation.

### HTTP Client
- **Axios**: HTTP client for TalentHR API integration.

### State Management
- **TanStack Query**: Server state management.
- **React Context**: Client-side state management.