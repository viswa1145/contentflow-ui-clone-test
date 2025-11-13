# DevOpsCopilot

Modern, personalized marketing site and product surface for HR tech, powered by Contentstack, Vite + React + TypeScript, Tailwind, and shadcn/ui. Built to run on Contentstack Launch with Contentstack Automation for lead routing.

## 1. What this app does

- Fully headless content: all banners, navigation, pages, case studies, products, industries, pricing, careers, etc., come from Contentstack (with robust mock fallback for local dev).
- Personalization by URL (industrytype, role) across hero, banner, and case studies (auto‑fallback to “all” when no match).
- Seasonal/festival themes: dynamic class and promo system (ribbon + discounted pricing, countdown, promo code), including test fallback via `?festival=` and localStorage persistence.
- Global UX: announcement bar, dynamic header with dropdowns/CTAs, footer with newsletter, command palette, chat widget, breadcrumbs, skeletons, and improved dark/light theme contrast.
- Forms and automation: one Automation Run URL for all actions (demo, sales/contact, trial, support ticket, job application, media, newsletter). Fanout to Slack/CRM/Calendar via Contentstack Automation.

## 2. Architecture (high‑level)

- Client (Vite/React/TS)
  - `AppLayout` renders global chrome and theme/promo ribbon
  - Pages routed with `react-router-dom`
  - Data layer via `@tanstack/react-query`
  - Theme via `next-themes`
  - LocalStorage for `tc360_personalization` and `tc360_festival`
- Contentstack Delivery API for read (content types listed below)
- Contentstack Automation Run URL for all submissions (single endpoint; switch on `type`)
- Optional Netlify function kept for local/legacy: `/.netlify/functions/lead`
- Mastra.ai (future): chat answers; on low confidence → support ticket via Automation
- Hosting: Contentstack Launch (build: `npm ci && npm run build`, publish dir: `dist`, SPA fallback enabled)

## 3. Content modeling (IDs)

- Navigation: `navigation_item`
- Announcements: `announcement_banner`
- Hero: `hero_section`
- Case studies: `case_study`
- Products: `products_page`, `product_detail`
- Industries: `industries_page`, `industry_detail`, `solution_detail`
- Pricing: `pricing_page`
- Demo: `demo_page`
- Company/Resources: `about_page`, `resources_page`
- Careers/Jobs: `careers_page`, `job_detail`
- Trust logos: `trust_indicator`
- Seasonal theme: `seasonal_theme` (supports promo fields: `offer_enabled`, `discount_percent`, `badge_text`, `promo_copy`, `promo_code`, `ends_at`, `landing_url`, `cta_primary`, `cta_secondary`)

## 4. Key features

- Dynamic navigation and CTAs from Contentstack with submenu support; ensures no chevrons if submenu empty.
- Personalized hero/banner/case studies using `industrytype` and `role` query params (persisted; quick clear/enable in header).
- Case study pages with modern layout and strong light/dark contrast; numbers styled for readability.
- Pricing page: festival promos (ribbon, strikethrough original price, large discounted price, “Save X%” badge, countdown, promo code). Works via CMS or `?festival=` fallback.
- Trusted logos marquee with normalized asset URLs.
- Global command palette (Cmd/Ctrl+K), breadcrumbs, skeleton/loading states.
- Theme: improved dark mode contrast tokens and hover states.

## 5. Data fetching and normalization

- `src/data/contentstack.ts`
  - Conditional mock mode if `VITE_CONTENTSTACK_*` not set
  - Normalizes field differences (e.g., `title` → `headline` in hero; `title` → `message` in banner)
  - Maps asset objects to `.url` for `logo_url` and `hero_image_url`
  - Navigation mapping: `title` → `label`, `href` normalized, filters empty submenu rows
  - Case studies: ensures `link` = `/case-studies/:slug` fallback
  - Case study filter fallback to all when no matches
  - Seasonal theme fetch; UI adds a festival fallback from query/localStorage when CMS offer not set

## 6. Forms and Automation (single endpoint)

Set one Automation Run URL and an optional shared secret; every form submits to this URL with a `type` discriminator and a standard envelope that includes attribution.

Common envelope (all forms add these fields):
- `page_url`: current pathname
- `campaign`: active festival from localStorage/theme (optional)
- `utm`: `{ source, medium, campaign, term, content }` from URL params when present
- `ts`: ISO timestamp

Types and specific fields:
- `demo`: `firstName`, `lastName`, `email`, `phone`, `company`, `companySize`, `industry`, `notes`, `industryType`, `role`, `preferredDate`, `preferredTime`, `timeZone`, `preferredDateTime`
- `sales`: `firstName`, `lastName`, `email`, `phone`, `company`, `companySize`, `topic`, `message`
- `support`: `name`, `email`, `priority`, `subject`, `thread[]`
- `media`: `name`, `email`, `company`
- `job`: `job_slug`, `firstName`, `lastName`, `email`, `phone`, `linkedin`, `resume_url`, `cover_letter`, plus `resume{ filename, contentType, base64 }` if uploaded
- `trial`: `plan`, `firstName`, `lastName`, `email`, `company`, `companySize`, `industryType`, `role`
- `newsletter`: `email`, `name`, `tags[]`

Automation (recommended steps):
1) Guard (header `x-cs-secret` equals your secret)
2) Create Entry in appropriate content type (e.g., `lead_submission`, `job_application`, etc.)
3) Slack message
4) CRM sync (HubSpot/Salesforce)
5) Calendar event (for `demo`)

## 7. Environment variables

Frontend (Vite):
- `VITE_CONTENTSTACK_API_KEY`
- `VITE_CONTENTSTACK_DELIVERY_TOKEN`
- `VITE_CONTENTSTACK_ENVIRONMENT`
- `VITE_CONTENTSTACK_ASSET_BASE` (optional if Delivery API returns absolute urls)
- `VITE_AUTOMATION_RUN_URL` (single Contentstack Automation run URL)
- `VITE_AUTOMATION_SECRET` (optional shared secret header)

Legacy (serverless forwarder kept for local dev):
- `AUTOMATION_WEBHOOK_URL`, `SLACK_WEBHOOK_URL`, `CRM_WEBHOOK_URL` (used by `netlify/functions/lead.ts`)

## 8. Local development

```
npm ci
npm run dev
```

If Contentstack env vars are not set, the app runs in Mock mode (you’ll see console logs). To force CMS mode, add the Vite envs above and restart.

## 9. Build and deploy (Contentstack Launch)

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- SPA fallback: enable (serve `index.html` for unknown routes)
- Add Vite environment variables in Launch.

## 10. Testing guide

- Personalization
  - Open `/?industrytype=technology&role=hr` → Hero and case studies change
  - Clear/enable chip in header to toggle persistence
- Festival promos
  - `/?festival=diwali` (or holi/christmas) → ribbon appears; click to Pricing → discount UI renders (strikethrough, big price, save badge, countdown)
  - Refresh Pricing → discount persists (localStorage fallback)
- Forms
  - Submit Demo/Contact/Support/Job/Media/Trial/Newsletter → check Automation Run History and target content types

## 11. Security and privacy

- Never log PII in console in production
- Use `x-cs-secret` header verification in Automation
- Consider hCaptcha on public forms
- Respect `prefers-reduced-motion` for decorative animations

## 12. Roadmap

- Add Mastra.ai chat endpoint + fallback ticket creation
- Expand seasonal CMS config (multi‑plan discounts, explicit CTA overrides)
- Add e2e tests for festival discount math and personalization routing

