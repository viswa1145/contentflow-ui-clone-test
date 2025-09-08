import Contentstack from 'contentstack';
import { mockContentstackData } from './mockContentstackData';

// Initialize Contentstack SDK
const Stack = Contentstack.Stack({
  api_key: import.meta.env.VITE_CONTENTSTACK_API_KEY,
  delivery_token: import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN,
  environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT,
});

const IS_MOCK_DATA_MODE = !import.meta.env.VITE_CONTENTSTACK_API_KEY || !import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN || !import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT;

// Dev diagnostics: show current data source and env state
if (import.meta.env.DEV) {
  // Never print secrets; only indicate presence.
  // eslint-disable-next-line no-console
  console.info("[TC360] Data source:", IS_MOCK_DATA_MODE ? "MOCK" : "CONTENTSTACK", {
    apiKeySet: Boolean(import.meta.env.VITE_CONTENTSTACK_API_KEY),
    tokenSet: Boolean(import.meta.env.VITE_CONTENTSTACK_DELIVERY_TOKEN),
    environment: import.meta.env.VITE_CONTENTSTACK_ENVIRONMENT || "(unset)",
  });
}
console.log("IS_MOCK_DATA_MODE", IS_MOCK_DATA_MODE);

export interface ContentstackEntry {
  uid: string;
  title: string;
  content_type: string;
  locale: string;
  created_at: string;
  updated_at: string;
}

export interface HeroContent extends ContentstackEntry {
  headline: string;
  subheadline: string;
  description: string;
  cta_text: string;
  cta_link: string;
  background_image?: {
    url: string;
    alt: string;
  };
}

export interface NavigationItem extends ContentstackEntry {
  label: string;
  href: string;
  is_cta?: boolean; // New field to mark if this navigation item is a CTA button
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary' | 'nav' | 'demo'; // New field for button variant
  submenu?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface FeatureCard extends ContentstackEntry {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface TrustIndicator extends ContentstackEntry {
  company_name: string;
  logo_url: string;
  testimonial?: string;
}

export interface AnnouncementBanner extends ContentstackEntry {
  message: string;
  link_text: string;
  link_url: string;
  type: 'info' | 'success' | 'warning';
}

export const fetchContentstackData = async (contentType: string, filters?: { industryType?: string; role?: string; }): Promise<any> => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug("[TC360] fetchContentstackData", {
      contentType,
      filters,
      mode: IS_MOCK_DATA_MODE ? "MOCK" : "CONTENTSTACK",
    });
  }
  if (IS_MOCK_DATA_MODE) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    switch (contentType) {
      case 'announcement_banner': {
        let base: any = (mockContentstackData as any).announcement_banner;
        if (filters && mockContentstackData.announcement_banner_variants) {
          const variant = mockContentstackData.announcement_banner_variants.find((v: any) => {
            return (!v.match.industryType || v.match.industryType === filters.industryType) && (!v.match.role || v.match.role === filters.role);
          });
          if (variant) base = { ...base, ...variant.data };
        }
        return base;
      }
      case 'hero_section': {
        let base = mockContentstackData.hero_section;
        if (filters && mockContentstackData.hero_section_variants) {
          const variant = mockContentstackData.hero_section_variants.find((v: any) => {
            return (!v.match.industryType || v.match.industryType === filters.industryType) && (!v.match.role || v.match.role === filters.role);
          });
          if (variant) base = { ...base, ...variant.data };
        }
        return base;
      }
      case 'navigation':
        return mockContentstackData.navigation;
      case 'trust_indicators':
        return mockContentstackData.trust_indicators;
      case 'products_page':
        return mockContentstackData.products_page;
      case 'industries_page':
        return mockContentstackData.industries_page;
      case 'pricing_page':
        return mockContentstackData.pricing_page;
      case 'demo_page':
        return mockContentstackData.demo_page;
      case 'about_page':
        return mockContentstackData.about_page;
      case 'resources_page':
        return mockContentstackData.resources_page;
      case 'careers_page':
        return mockContentstackData.careers_page;
      case 'job_detail':
        return (mockContentstackData.job_details || []).find((j: any) => j.slug === (filters as any)?.slug);
      case 'industry_detail': {
        return (mockContentstackData.industry_details || []).find((i: any) => i.slug === (filters as any)?.slug);
      }
      case 'solution_detail': {
        return (mockContentstackData.solution_details || []).find((s: any) => s.slug === (filters as any)?.slug);
      }
      case 'product_detail': {
        return (mockContentstackData.product_details || []).find((p: any) => p.slug === (filters as any)?.slug);
      }
      case 'case_studies': {
        const all = mockContentstackData.case_studies || [];
        if (!filters || (!filters.industryType && !filters.role)) return all;
        const filtered = all.filter((cs: any) => {
          const industryOk = !filters.industryType || cs.industry === filters.industryType;
          const roleOk = !filters.role || cs.role === filters.role;
          return industryOk && roleOk;
        });
        return filtered.length > 0 ? filtered : all;
      }
      case 'seasonal_theme': {
        const today = new Date();
        const region = (filters as any)?.region || 'in';
        const config: any = (mockContentstackData as any).seasonal_theme;
        const active = (config?.entries || []).find((e: any) => {
          const start = new Date(e.start_date);
          const end = new Date(e.end_date);
          const regionOk = !e.regions || e.regions.includes(region);
          return regionOk && today >= start && today <= end;
        });
        return active || null;
      }
      default:
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.warn("[TC360] Mock content type not found:", contentType);
        }
        throw new Error(`Mock content type ${contentType} not found`);
    }
  }
  
  // Helper to unwrap Contentstack response shape [entries, assets]
  const unwrap = (res: any) => (Array.isArray(res) && Array.isArray(res[0]) ? res[0] : res);
  const normalizeHref = (href: string | undefined) => {
    if (!href) return href as any;
    if (/^https?:\/\//i.test(href)) return href;
    return href.startsWith('/') ? href : `/${href}`;
  };
  
  switch (contentType) {
    case 'case_studies': {
      const base = Stack.ContentType('case_study');
      const makeMap = (entries: any[]) => (Array.isArray(entries) ? entries : [entries]).map((e: any) => {
        const slug = e.slug || e.uid;
        const logo = typeof e.logo_url === 'string' ? e.logo_url : (e.logo_url?.url || e.logo_url?.image_url);
        const hero = typeof e.hero_image_url === 'string' ? e.hero_image_url : (e.hero_image_url?.url || e.hero_image_url?.image_url);
        return {
          ...e,
          company_name: e.company_name || e.title,
          logo_url: logo,
          hero_image_url: hero,
          link: e.link || (slug ? `/case-studies/${slug}` : undefined),
        };
      });
      if (filters?.industryType || filters?.role) {
        const query = base.Query();
        if (filters?.industryType) query.where('industry', filters.industryType);
        if (filters?.role) query.where('role', filters.role);
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.debug('[TC360] CSK query case_study', { industry: filters?.industryType, role: filters?.role });
        }
        const res = unwrap(await query.toJSON().find());
        const mapped = makeMap(res as any[]);
        if (Array.isArray(mapped) && mapped.length > 0) return mapped;
        // Fallback to all
        const allRes = unwrap(await base.Query().toJSON().find());
        return makeMap(allRes as any[]);
      } else {
        const allRes = unwrap(await base.Query().toJSON().find());
        return makeMap(allRes as any[]);
      }
    }
    case 'announcement_banner': {
      const query = Stack.ContentType('announcement_banner').Query();
      if (filters?.industryType) query.where('industry', filters.industryType);
      if (filters?.role) query.where('role', filters.role);
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.debug('[TC360] CSK query announcement_banner', { industry: filters?.industryType, role: filters?.role });
      }
      let result = unwrap(await query.toJSON().find());
      if (Array.isArray(result) && result.length === 0) {
        // Fallback to any banner
        result = unwrap(await Stack.ContentType('announcement_banner').Query().toJSON().find());
      }
      const entry = Array.isArray(result) ? result[0] : result;
      if (entry) {
        if (!entry.message && entry.title) entry.message = entry.title;
        if (entry.link_url) entry.link_url = normalizeHref(entry.link_url);
      }
      return entry;
    }
    case 'hero_section': {
      const query = Stack.ContentType('hero_section').Query();
      if (filters?.industryType) query.where('industry', filters.industryType);
      if (filters?.role) query.where('role', filters.role);
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.debug('[TC360] CSK query hero_section', { industry: filters?.industryType, role: filters?.role });
      }
      let result = unwrap(await query.toJSON().find());
      if (Array.isArray(result) && result.length === 0) {
        result = unwrap(await Stack.ContentType('hero_section').Query().toJSON().find());
      }
      const entry = Array.isArray(result) ? result[0] : result;
      if (entry) {
        // Some models may use `title` instead of `headline`
        if (!entry.headline && entry.title) entry.headline = entry.title;
        // Normalize CTA link format
        if (entry.cta_link) entry.cta_link = normalizeHref(entry.cta_link);
      }
      return entry;
    }
    case 'navigation': {
      const result = await Stack.ContentType('navigation_item').Query().toJSON().find();
      const unwrapped = unwrap(result);
      const items = (Array.isArray(unwrapped) ? unwrapped : [unwrapped]).map((item: any) => {
        const rawSub = Array.isArray(item.submenu) ? item.submenu : [];
        const submenu = rawSub
          .map((s: any) => ({
            label: s?.label || s?.title,
            href: normalizeHref(s?.href),
            description: s?.description,
          }))
          .filter((s: any) => Boolean(s.label) && Boolean(s.href));
        return {
          ...item,
          label: item.label || item.title, // map Contentstack 'title' to our 'label'
          href: normalizeHref(item.href),
          submenu: submenu.length ? submenu : undefined,
        };
      });
      // Optional: sort by order if present
      items.sort((a: any, b: any) => {
        const ao = typeof a.order === 'number' ? a.order : Number.POSITIVE_INFINITY;
        const bo = typeof b.order === 'number' ? b.order : Number.POSITIVE_INFINITY;
        return ao - bo;
      });
      if (!items.length) {
        const fallback = (mockContentstackData as any).navigation || [];
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.warn('[TC360] No navigation_item entries found — using mock navigation fallback');
        }
        return fallback;
      }
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.debug('[TC360] Mapped navigation items', items.map((i: any) => ({ label: i.label, href: i.href, is_cta: i.is_cta, variant: i.variant })));
      }
      return items;
    }
    case 'trust_indicators': {
      const result = await Stack.ContentType('trust_indicator').Query().toJSON().find();
      const unwrapped = unwrap(result) as any[];
      // Normalize Asset field shape and title fallback
      const items = (Array.isArray(unwrapped) ? unwrapped : [unwrapped]).map((it: any) => {
        const logo = typeof it.logo_url === 'string' ? it.logo_url : (it.logo_url?.url || it.logo_url?.image_url);
        return {
          ...it,
          company_name: it.company_name || it.title,
          logo_url: logo,
        };
      });
      return items;
    }
    case 'products_page':
    case 'industries_page':
    case 'pricing_page':
    case 'demo_page':
    case 'about_page':
    case 'resources_page': {
      const result = await Stack.ContentType(contentType).Query().toJSON().find();
      const unwrapped = unwrap(result);
      const value = Array.isArray(unwrapped) ? unwrapped[0] : unwrapped;
      if (!value) {
        const fallback = (mockContentstackData as any)[contentType];
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.warn('[TC360] No entries for', contentType, '— using mock fallback');
        }
        return fallback;
      }
      // Normalize field differences per content type
      if (contentType === 'products_page') {
        const page: any = { ...value };
        // Some stacks store the title under `title` instead of `header_title`
        if (!page.header_title && page.title) page.header_title = page.title;
        if (page.cta_section) {
          if (page.cta_section.primary_cta_link) page.cta_section.primary_cta_link = normalizeHref(page.cta_section.primary_cta_link);
          if (page.cta_section.secondary_cta_link) page.cta_section.secondary_cta_link = normalizeHref(page.cta_section.secondary_cta_link);
        }
        if (Array.isArray(page.products)) {
          page.products = page.products.map((p: any) => {
            const next = { ...p };
            const link: string | undefined = next.learn_more_link;
            const looksHttp = typeof link === 'string' && /^https?:\/\//i.test(link);
            const looksPath = typeof link === 'string' && link.startsWith('/');
            // If link is missing or not a path/http, default to /products/:slug
            if (!looksHttp && !looksPath) next.learn_more_link = `/products/${next.slug}`;
            // Normalize to ensure leading slash
            if (next.learn_more_link) next.learn_more_link = normalizeHref(next.learn_more_link);
            return next;
          });
        }
        return page;
      }
      return value;
    }
    case 'careers_page': {
      const result = await Stack.ContentType('careers_page').Query().toJSON().find();
      const unwrapped = unwrap(result);
      return Array.isArray(unwrapped) ? unwrapped[0] : unwrapped;
    }
    case 'job_detail': {
      const query = Stack.ContentType('job_detail').Query();
      if ((filters as any)?.slug) query.where('slug', (filters as any).slug);
      const result = await query.toJSON().find();
      const unwrapped = unwrap(result);
      return Array.isArray(unwrapped) ? unwrapped[0] : unwrapped;
    }
    default: {
      if ((filters as any)?.slug) {
        const query = Stack.ContentType(contentType).Query().where('slug', (filters as any).slug);
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.debug('[TC360] CSK query by slug', { contentType, slug: (filters as any).slug });
        }
        const result = await query.toJSON().find();
        const unwrapped = unwrap(result);
        return Array.isArray(unwrapped) ? unwrapped[0] : unwrapped;
      } else {
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.debug('[TC360] CSK query list', { contentType });
        }
        const result = await Stack.ContentType(contentType).Query().toJSON().find();
        return unwrap(result);
      }
    }
  }
};