### DevOpsCopilot Contentstack Content Types

1. announcement_banner
- title: Text (required)
- message: Text (required)
- link_text: Text (required)
- link_url: Text (required)
- type: Enum (info, success, warning) (required)
- industry: Enum (technology, manufacturing, retail, healthcare, other) or Reference to taxonomy (optional, supports personalization)
- role: Enum (hr, operations, finance, it, other) or Reference to taxonomy (optional, supports personalization)

2. navigation_item
- label: Text (required)
- href: Text (required)
- is_cta: Boolean (optional)
- variant: Enum (default, outline, ghost, link, destructive, secondary, nav, demo)
- order: Number (optional)
- submenu: Group (multiple)
  - label: Text (required)
  - href: Text (required)
  - description: Text (optional)

3. hero_section
- title: Text (required)
- headline: Text (required)
- subheadline: Text (required)
- description: Textarea (required)
- cta_text: Text (required)
- cta_link: Text (required)
- background_image: File (optional)
- industry: Enum (technology, manufacturing, retail, healthcare, other) or Reference to taxonomy (optional, supports personalization)
- role: Enum (hr, operations, finance, it, other) or Reference to taxonomy (optional, supports personalization)

4. trust_indicator
- title: Text (required)
- company_name: Text (required)
- logo: File (required)
- testimonial: Textarea (optional)

5. home_page
- slug: Text (required)
- banner: Reference (announcement_banner)
- hero: Reference (hero_section)
- trust_indicators: References (trust_indicator, multiple)

6. product
- title: Text (required)
- description: Textarea (required)
- features: Text (multiple, required)
- badge: Text (optional)
- icon_key: Enum (users, zap, bar_chart, shield, globe) (required)
- learn_more_link: Text (required)

7. products_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- products: References (product, multiple, required)
- cta_section: Group (required)
  - title: Text (required)
  - subtitle: Textarea (required)
  - primary_cta_text: Text (required)
  - primary_cta_link: Text (required)
  - secondary_cta_text: Text (required)
  - secondary_cta_link: Text (required)

8. industry
- title: Text (required)
- description: Textarea (required)
- stats: Text (required)
- features: Text (multiple, required)
- icon_key: Enum (cpu, factory, shopping_cart, heart) (required)

9. solution_tier
- title: Text (required)
- description: Textarea (required)
- badge: Text (required)

10. industries_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- industries: References (industry, multiple, required)
- solutions: References (solution_tier, multiple, required)
- cta_section: Group (required)
  - title: Text (required)
  - subtitle: Textarea (required)
  - cta_text: Text (required)
  - cta_link: Text (required)

11. pricing_plan
- name: Text (required)
- price: Text (required)
- period: Text (required)
- description: Textarea (required)
- badge: Text (optional)
- features: Text (multiple, required)
- cta: Text (required)
- popular: Boolean (required)

12. feature_highlight
- icon_key: Enum (zap, shield, globe, trending_up) (required)
- title: Text (required)
- description: Text (required)

13. faq_item
- question: Text (required)
- answer: Textarea (required)

14. pricing_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- plans: References (pricing_plan, multiple, required)
- highlights: References (feature_highlight, multiple, required)
- faqs: References (faq_item, multiple, required)
- cta_section: Group (required)
  - title: Text (required)
  - subtitle: Textarea (required)
  - primary_text: Text (required)
  - secondary_text: Text (required)

15. demo_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- form_config: Group (required)
  - company_size_options: Text (multiple, required)
  - industry_options: Text (multiple, required)
  - submit_cta: Text (required)
- info_blocks: Group (multiple, required)
  - icon_key: Enum (calendar, clock, users, video) (required)
  - title: Text (required)
  - description: Text (required)
- demo_topics: Text (multiple, required)
- help_card: Group (required)
  - title: Text (required)
  - subtitle: Text (required)
  - phone_label: Text (required)
  - phone_number: Text (required)
  - chat_label: Text (required)

16. about_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- mission: Textarea (required)
- values: Group (multiple)
  - title: Text (required)
  - description: Text (required)
- leadership: Group (multiple)
  - name: Text (required)
  - role: Text (required)
- seo: Group (optional)
  - title: Text
  - description: Textarea
  - og_image: File

17. resources_page
- slug: Text (required)
- header_title: Text (required)
- header_subtitle: Textarea (required)
- categories: Group (multiple)
  - title: Text (required)
  - items: Group (multiple)
    - title: Text (required)
    - link: Text (required)
- seo: Group (optional)
  - title: Text
  - description: Textarea
  - og_image: File

Routing
- Frontend route: `/case-studies/:slug` resolves a single case study by its `slug`.

Personalization notes
- For hero_section and announcement_banner, include `industry` and `role` fields (single-select Enum or References). Create multiple entries targeted to different audiences; the app queries these fields using URL params and falls back to a generic entry if no match.
- When querying, pass filters from URL params: `industrytype`, `role`. In a real CMS, use Query conditions (e.g., reference fields or taxonomies) to fetch tailored entries.
