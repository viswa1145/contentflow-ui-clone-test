// Simulated Contentstack CMS data structure
// In a real implementation, this would come from Contentstack API

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

// Simulated data from Contentstack
export const contentstackData = {
  announcement_banner: {
    uid: "announcement_1",
    title: "Gartner Recognition Banner",
    content_type: "announcement_banner",
    locale: "en-us",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    message: "Darwinbox named a Visionary in 2025 Gartner® Magic Quadrant™ for Talent Acquisition 🚀",
    link_text: "Read the Report",
    link_url: "#report",
    type: "success" as const
  },

  hero_section: {
    uid: "hero_1",
    title: "Main Hero Section",
    content_type: "hero_section",
    locale: "en-us",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
    headline: "AI Powered Global HCM",
    subheadline: "for the Evolving World of Work",
    description: "Darwinbox lets you build, scale and deliver your HR processes with a consumer grade employee experience at 40% lesser TCO than the Workdays of the world.",
    cta_text: "Connect with Sales",
    cta_link: "#demo"
  },

  navigation: [
    {
      uid: "nav_1",
      title: "Products Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Products",
      href: "#products",
      submenu: [
        { label: "Core HR", href: "#core-hr", description: "Complete HR management solution" },
        { label: "Talent Acquisition", href: "#talent", description: "Smart recruiting platform" },
        { label: "Performance Management", href: "#performance", description: "Employee performance tracking" },
        { label: "Analytics", href: "#analytics", description: "HR insights and reporting" }
      ]
    },
    {
      uid: "nav_2",
      title: "Industries Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Industries & Solutions",
      href: "#industries",
      submenu: [
        { label: "Technology", href: "#tech", description: "Solutions for tech companies" },
        { label: "Manufacturing", href: "#manufacturing", description: "Industrial workforce management" },
        { label: "Retail", href: "#retail", description: "Retail employee solutions" },
        { label: "Healthcare", href: "#healthcare", description: "Healthcare workforce tools" }
      ]
    },
    {
      uid: "nav_3",
      title: "Why Darwinbox",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Why Darwinbox?",
      href: "#why"
    },
    {
      uid: "nav_4",
      title: "Interactive Demos",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Interactive Demos",
      href: "#demos"
    },
    {
      uid: "nav_5",
      title: "Resources",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Resources",
      href: "#resources"
    },
    {
      uid: "nav_6",
      title: "Customers",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Customers",
      href: "#customers"
    },
    {
      uid: "nav_7",
      title: "Company",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Company",
      href: "#company"
    },
    {
      uid: "nav_8",
      title: "Pricing",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      label: "Pricing",
      href: "#pricing"
    }
  ],

  trust_indicators: [
    {
      uid: "trust_1",
      title: "KKR Partnership",
      content_type: "trust_indicator",
      locale: "en-us",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-01-15T10:00:00Z",
      company_name: "KKR",
      logo_url: "/api/placeholder/200/80",
      testimonial: "Strategic partnership with leading global investment firm"
    }
  ]
};

// Helper function to simulate API calls to Contentstack
export const fetchContentstackData = async (contentType: string): Promise<any> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  switch (contentType) {
    case 'announcement_banner':
      return contentstackData.announcement_banner;
    case 'hero_section':
      return contentstackData.hero_section;
    case 'navigation':
      return contentstackData.navigation;
    case 'trust_indicators':
      return contentstackData.trust_indicators;
    default:
      throw new Error(`Content type ${contentType} not found`);
  }
};