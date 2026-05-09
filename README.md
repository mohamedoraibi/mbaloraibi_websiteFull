# Mohammed Al Oraibi Website

A premium, mobile-first, bilingual personal brand and consulting website for Mohammed Al Oraibi. The site is built with Next.js App Router, TypeScript, Tailwind CSS, Payload CMS foundations, Supabase PostgreSQL readiness, Resend-safe email handling, Cal.com booking support, analytics hooks, SEO/GEO/AEO structure, `llms.txt`, and `llms-full.txt`.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS with shadcn/ui-inspired reusable components
- Framer Motion for subtle reduced-motion-aware animations
- Payload CMS configuration with PostgreSQL adapter
- Supabase PostgreSQL via `DATABASE_URI`
- Resend for optional contact notification emails
- Cal.com via `NEXT_PUBLIC_CAL_LINK`
- GA4, Vercel Analytics, and Microsoft Clarity

## Install

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and configure values as needed.

```bash
cp .env.example .env.local
```

Required for production CMS:

- `DATABASE_URI` — Supabase PostgreSQL connection string for Payload.
- `PAYLOAD_SECRET` — long random secret for Payload auth.
- `NEXT_PUBLIC_SITE_URL` — canonical production URL.

Optional integrations:

- `NEXT_PUBLIC_CAL_LINK` — Cal.com booking URL.
- `RESEND_API_KEY` — Resend key for sending contact notifications.
- `CONTACT_EMAIL` — recipient for contact notifications.
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID.
- `NEXT_PUBLIC_CLARITY_ID` — Microsoft Clarity project ID.
- `NEXT_PUBLIC_VERCEL_ANALYTICS=true` — enables Vercel Analytics unless set to `false`.
- `GOOGLE_SITE_VERIFICATION` — Search Console meta verification.
- `BING_SITE_VERIFICATION` — Bing Webmaster Tools meta verification.
- `INDEXNOW_KEY` — reserved for future IndexNow submission support.

## Supabase PostgreSQL setup

1. Create a Supabase project.
2. Copy the pooled PostgreSQL connection string.
3. Set it as `DATABASE_URI` in Vercel and `.env.local`.
4. Ensure SSL is enabled in the connection string if Supabase requires it.
5. Set `PAYLOAD_SECRET` to a secure random value.

## Payload CMS

Payload collections/globals are defined in `payload.config.ts`, `payload/collections`, and `payload/globals` for:

- Site Settings
- Navigation
- Hero
- About
- Services
- Projects / Case Studies
- Courses
- Testimonials
- FAQs
- Contact Submissions
- Course Interest Leads
- Social Links
- SEO Settings
- Theme Settings
- Media
- Admin Users

This MVP includes a protected/noindex `/admin` placeholder plus the Payload configuration foundation. For full admin UI activation, wire the Payload Next plugin/admin route after Supabase credentials are available and run Payload migrations/seeding in the deployment environment.

## Resend

Set `RESEND_API_KEY` and `CONTACT_EMAIL`. If either is missing, contact submissions are still accepted and stored safely in the local fallback store for the current runtime, and email sending is skipped.

## Cal.com

Set `NEXT_PUBLIC_CAL_LINK` to Mohammed's Cal.com booking URL. If missing, booking CTAs fall back to the contact page.

## Analytics

- Set `NEXT_PUBLIC_GA_ID` for GA4.
- Set `NEXT_PUBLIC_CLARITY_ID` for Microsoft Clarity.
- Vercel Analytics is enabled by default and can be disabled with `NEXT_PUBLIC_VERCEL_ANALYTICS=false`.

Tracked events include:

- `consultation_booking_click`
- `contact_form_submit`
- `course_interest_submit`
- `service_cta_click`
- `project_view`
- `language_switch`
- `outbound_social_click`

## Vercel deployment

1. Import the repository in Vercel.
2. Add all production environment variables.
3. Deploy.
4. Confirm `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and `/llms-full.txt` work.
5. Add the production URL to Google Search Console and Bing Webmaster Tools.

## Domain and Hostinger email note

Domain and email remain managed in Hostinger. When connecting the domain to Vercel, only update the records required for the website. Do **not** remove or overwrite Hostinger MX, SPF, DKIM, or DMARC records, or email delivery may break.

The old WordPress site on Cloudways is only a temporary backup and is not used by this build.

## SEO/GEO checklist

- `/sitemap.xml` works.
- `/robots.txt` works and blocks admin/API/private utility routes.
- `/llms.txt` works.
- `/llms-full.txt` works.
- Metadata exists for every public page.
- JSON-LD is emitted for Person, Website, ProfessionalService, Service, Course, FAQ, and breadcrumbs where applicable.
- Arabic RTL pages work.
- hreflang alternates exist for English, Arabic, and x-default.
- Canonical URLs exist.
- Public pages are indexable by default.
- Admin/API/private routes are blocked or noindexed.
- Contact, booking, service, project, social, and course events are tracked.
- Lighthouse mobile score target is 90+.
- Google Rich Results Test should pass where applicable.
- Configure Google Search Console verification with `GOOGLE_SITE_VERIFICATION`.
- Configure Bing Webmaster verification with `BING_SITE_VERIFICATION`.

## AI crawler note

The generated robots policy allows major search and AI discovery crawlers to access public content while blocking private routes. If Cloudflare is added later, check that Cloudflare Managed robots.txt or AI crawler blocking is not silently blocking OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, ClaudeBot, Claude-SearchBot, or Claude-User.

## Validation

```bash
npm run lint
npm run build
```

## Future improvements

- Full Payload admin route activation and seed script.
- Paid consultations with Stripe.
- Client portal.
- Full course platform.
- Blog and newsletter.
- AI chatbot trained on public site content.
- Admin dashboard analytics.
