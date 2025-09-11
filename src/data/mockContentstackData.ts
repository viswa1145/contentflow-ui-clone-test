export const mockContentstackData = {
  announcement_banner: {
    uid: "mock_announcement_1",
    title: "Mock Announcement Banner",
    content_type: "announcement_banner",
    locale: "en-us",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
    message: "Welcome to TalentConnect360! Explore our new features. ✨",
    link_text: "Learn More",
    link_url: "/resources",
    type: "info" as const,
  },
  hero_section: {
    uid: "mock_hero_1",
    title: "TalentConnect360 Hero",
    content_type: "hero_section",
    locale: "en-us",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
    headline: "Connect, Engage, Grow Your Talent",
    subheadline: "Your Complete HR & Talent Management Solution",
    description: "TalentConnect360 provides an all-in-one platform to streamline your HR processes, enhance employee experience, and drive organizational growth. From recruitment to retirement, we've got you covered.",
    cta_text: "Request a Demo",
    cta_link: "/demo",
    background_image: {
      url: "/src/assets/hero-dashboard.jpg",
      alt: "TalentConnect360 Dashboard",
    },
  },
  hero_section_variants: [
    {
      match: { industryType: "technology" },
      data: {
        headline: "Empower Tech Teams with Smarter HR",
        subheadline: "Built for fast-scaling engineering orgs",
        description: "Automate HR ops for product and engineering teams with deep analytics.",
        cta_text: "See Tech Demo",
        cta_link: "/demo?industrytype=technology"
      }
    },
    {
      match: { industryType: "manufacturing" },
      data: {
        headline: "Optimize Your Industrial Workforce",
        subheadline: "Shift scheduling, safety compliance, analytics",
        description: "All-in-one HR for plants and distributed workforces.",
        cta_text: "See Manufacturing Demo",
        cta_link: "/demo?industrytype=manufacturing"
      }
    }
  ],
  announcement_banner_variants: [
    {
      match: { role: "hr" },
      data: {
        message: "HR Leaders: Discover our new AI workforce planning toolkit",
        link_text: "Explore Toolkit",
        link_url: "/resources",
        type: "success" as const
      }
    }
  ],
  case_studies: [
    {
      uid: "cs_tech_ai",
      slug: "alphasoft-tech",
      industry: "technology",
      role: "hr",
      company_name: "AlphaSoft",
      title: "Scaling HR for a 800-person engineering org",
      summary: "Reduced time-to-hire by 35% and boosted retention 12% using TC360.",
      logo_url: "/api/placeholder/160/60?text=AlphaSoft",
      link: "/case-studies/alphasoft-tech",
      hero_image_url: "/api/placeholder/1200/600?text=AlphaSoft+Engineering",
      banner_kicker: "Technology • HR",
      stats: [
        { label: "Time-to-Hire", value: "-35%" },
        { label: "Retention", value: "+12%" },
        { label: "Onboarding Time", value: "-40%" }
      ],
      highlights: [
        "Automated screening and interview scheduling",
        "Unified candidate and employee data",
        "Manager self-serve dashboards"
      ],
      quote: {
        text: "TalentConnect360 helped us cut hiring time while elevating candidate experience.",
        author: "Priya N.",
        role: "VP People, AlphaSoft"
      },
      body_sections: [
        { heading: "Challenge", content: "A rapidly scaling engineering org faced fragmented hiring workflows and poor visibility across recruiting and onboarding." },
        { heading: "Solution", content: "Standardized pipelines, AI-aided screening, and integrated onboarding with role-based access." },
        { heading: "Outcome", content: "Significant reduction in time-to-hire and smoother day-one readiness, improving manager satisfaction." }
      ]
    },
    {
      uid: "cs_manufacturing_ops",
      slug: "indupro-manufacturing",
      industry: "manufacturing",
      role: "operations",
      company_name: "InduPro",
      title: "Digitizing shift ops across 12 plants",
      summary: "Saved 4,000 manager hours/year with automated scheduling.",
      logo_url: "/api/placeholder/160/60?text=InduPro",
      link: "/case-studies/indupro-manufacturing",
      hero_image_url: "/api/placeholder/1200/600?text=InduPro+Plants",
      banner_kicker: "Manufacturing • Operations",
      stats: [
        { label: "Manager Hours Saved", value: "4,000/yr" },
        { label: "Absenteeism", value: "-9%" },
        { label: "Compliance Incidents", value: "-25%" }
      ],
      highlights: [
        "Automated shift scheduling",
        "Mobile attendance and safety tracking",
        "Real-time plant analytics"
      ],
      quote: {
        text: "Scheduling went from a weekly headache to a background task we barely think about.",
        author: "Miguel A.",
        role: "Ops Director, InduPro"
      },
      body_sections: [
        { heading: "Challenge", content: "Manual schedules across sites, inconsistent attendance capture, and reactive compliance." },
        { heading: "Solution", content: "Centralized scheduling, geo-fenced mobile check-in, and compliance workflows." },
        { heading: "Outcome", content: "Lowered absenteeism, fewer incidents, and reclaimed manager time for coaching." }
      ]
    },
    {
      uid: "cs_retail_ops",
      slug: "shopsy-retail",
      industry: "retail",
      role: "operations",
      company_name: "Shopsy",
      title: "Elevating frontline engagement across 400+ stores",
      summary: "Reduced attrition by 8% and lifted NPS by 11 points with mobile-first HR.",
      logo_url: "/api/placeholder/160/60?text=Shopsy",
      link: "/case-studies/shopsy-retail",
      hero_image_url: "/api/placeholder/1200/600?text=Shopsy+Retail",
      banner_kicker: "Retail • Operations",
      stats: [
        { label: "Attrition", value: "-8%" },
        { label: "Employee NPS", value: "+11" },
        { label: "Training Time", value: "-30%" }
      ],
      highlights: [
        "Shift swaps and approvals in-app",
        "Gamified learning modules",
        "Store-level performance dashboards"
      ],
      quote: {
        text: "Our associates finally have HR in their pocket — adoption is off the charts.",
        author: "Leah T.",
        role: "VP Store Ops, Shopsy"
      },
      body_sections: [
        { heading: "Challenge", content: "Disengaged frontline workforce and fragmented store communications." },
        { heading: "Solution", content: "Mobile-first HR, bite-sized learning, and clear store KPIs." },
        { heading: "Outcome", content: "Improved retention, faster onboarding, and consistent CX." }
      ]
    },
    {
      uid: "cs_healthcare_hr",
      slug: "mediview-healthcare",
      industry: "healthcare",
      role: "hr",
      company_name: "MediView",
      title: "Credentialing and scheduling made simple for clinicians",
      summary: "Cut credentialing delays by 50% and filled shifts 25% faster.",
      logo_url: "/api/placeholder/160/60?text=MediView",
      link: "/case-studies/mediview-healthcare",
      hero_image_url: "/api/placeholder/1200/600?text=MediView+Clinics",
      banner_kicker: "Healthcare • HR",
      stats: [
        { label: "Credentialing Time", value: "-50%" },
        { label: "Shift Fill Rate", value: "+25%" },
        { label: "Compliance Tasks", value: "-35%" }
      ],
      highlights: [
        "Automated credential tracking",
        "Smart scheduler for multi-site coverage",
        "Compliance workflows and audits"
      ],
      quote: {
        text: "Scheduling and credentialing used to be our bottleneck — not anymore.",
        author: "Dr. A. Chen",
        role: "Clinical Director, MediView"
      },
      body_sections: [
        { heading: "Challenge", content: "Manual credentialing and reactive scheduling caused patient care gaps." },
        { heading: "Solution", content: "Centralized credential management and AI-assisted scheduling." },
        { heading: "Outcome", content: "Faster staffing, better compliance, and happier clinicians." }
      ]
    }
  ],
  navigation: [
    {
      uid: "mock_nav_1",
      title: "Products Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Solutions",
      href: "/products",
      submenu: [
        { label: "Core HR", href: "/products#core-hr", description: "Manage employee data, payroll, and benefits." },
        { label: "Talent Acquisition", href: "/products#talent", description: "Attract, recruit, and onboard top talent." },
        { label: "Performance Management", href: "/products#performance", description: "Set goals, conduct reviews, and foster growth." },
        { label: "HR Analytics", href: "/products#analytics", description: "Gain insights with data-driven HR reports." },
      ],
    },
    {
      uid: "mock_nav_2",
      title: "Industries Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Industries",
      href: "/industries",
      submenu: [
        { label: "Tech & IT", href: "/industries#tech", description: "Tailored HR solutions for the tech sector." },
        { label: "Manufacturing", href: "/industries#manufacturing", description: "Optimizing workforce for industrial needs." },
        { label: "Retail & Hospitality", href: "/industries#retail", description: "Flexible HR for dynamic environments." },
        { label: "Healthcare", href: "/industries#healthcare", description: "Specialized HR for healthcare providers." },
      ],
    },
    {
      uid: "mock_nav_3",
      title: "Company Info",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Company",
      href: "/company",
    },
    {
      uid: "mock_nav_4",
      title: "Pricing Page Link",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Pricing",
      href: "/pricing",
      is_cta: true,
      variant: "nav",
    },
    {
      uid: "mock_nav_5",
      title: "Schedule Demo CTA",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Schedule a Demo",
      href: "/demo",
      is_cta: true,
      variant: "demo",
    },
    {
      uid: "mock_nav_9",
      title: "Careers",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Careers",
      href: "/careers"
    },
  ],
  trust_indicators: [
    {
      uid: "mock_trust_1",
      title: "Global Partner Network",
      content_type: "trust_indicator",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      company_name: "Innovate Corp",
      logo_url: "/api/placeholder/200/80?text=Innovate",
      testimonial: "TalentConnect360 transformed our HR operations.",
    },
    {
      uid: "mock_trust_2",
      title: "Leading Industry Analyst",
      content_type: "trust_indicator",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      company_name: "Gartner",
      logo_url: "/api/placeholder/200/80?text=Gartner",
      testimonial: "Recognized as a visionary in HCM technology.",
    },
  ],
  products_page: {
    slug: "products",
    header_title: "Our Products",
    header_subtitle: "Comprehensive HR solutions designed for the modern workplace.",
    products: [
      {
        uid: "prod_core_hr",
        slug: "core-hr",
        title: "Core HR",
        description: "Complete HR management solution for modern organizations",
        features: ["Employee Database", "Attendance Management", "Leave Management", "Document Management"],
        badge: "Popular",
        icon_key: "users",
        learn_more_link: "/products/core-hr"
      },
      {
        uid: "prod_talent",
        slug: "talent-acquisition",
        title: "Talent Acquisition",
        description: "Smart recruiting platform powered by AI",
        features: ["AI-Powered Sourcing", "Interview Scheduling", "Candidate Tracking", "Offer Management"],
        badge: "AI Powered",
        icon_key: "zap",
        learn_more_link: "/products/talent-acquisition"
      },
      {
        uid: "prod_performance",
        slug: "performance-management",
        title: "Performance Management",
        description: "Drive employee performance and growth",
        features: ["Goal Setting", "Performance Reviews", "360 Feedback", "Development Plans"],
        badge: "New",
        icon_key: "bar_chart",
        learn_more_link: "/products/performance-management"
      },
      {
        uid: "prod_analytics",
        slug: "analytics-insights",
        title: "Analytics & Insights",
        description: "Data-driven HR decisions with powerful analytics",
        features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Compliance Tracking"],
        badge: "Enterprise",
        icon_key: "shield",
        learn_more_link: "/products/analytics-insights"
      }
    ],
    cta_section: {
      title: "Ready to Transform Your HR?",
      subtitle: "Join companies using TalentConnect360 to revolutionize HR processes",
      primary_cta_text: "Schedule a Demo",
      primary_cta_link: "/demo",
      secondary_cta_text: "Contact Sales",
      secondary_cta_link: "/contact"
    }
  },
  industries_page: {
    slug: "industries",
    header_title: "Industries & Solutions",
    header_subtitle: "Tailored HR solutions for every industry.",
    industries: [
      { uid: "ind_tech", title: "Technology", description: "Scale your tech workforce with agile HR solutions", stats: "500+ Tech Companies", features: ["Remote Work Management", "Agile Performance Reviews", "Skills-based Hiring", "Retention Analytics"], icon_key: "cpu" },
      { uid: "ind_manufacturing", title: "Manufacturing", description: "Optimize your industrial workforce operations", stats: "200+ Manufacturing Plants", features: ["Shift Management", "Safety Compliance", "Blue-collar Engagement", "Production Analytics"], icon_key: "factory" },
      { uid: "ind_retail", title: "Retail", description: "Manage distributed retail teams efficiently", stats: "150+ Retail Chains", features: ["Store Operations", "Seasonal Hiring", "Customer Service Training", "Sales Performance"], icon_key: "shopping_cart" },
      { uid: "ind_healthcare", title: "Healthcare", description: "Support healthcare professionals with specialized HR tools", stats: "100+ Healthcare Organizations", features: ["Compliance Management", "Credentialing", "Schedule Optimization", "Patient Care Metrics"], icon_key: "heart" },
    ],
    solutions: [
      { uid: "sol_enterprise", title: "Enterprise Solutions", description: "Comprehensive HR platform for large organizations", badge: "Enterprise" },
      { uid: "sol_midmarket", title: "Mid-Market Solutions", description: "Scalable HR tools for growing businesses", badge: "Popular" },
      { uid: "sol_startup", title: "Startup Solutions", description: "Essential HR tools for emerging companies", badge: "Startup" },
    ],
    cta_section: {
      title: "Don't See Your Industry?",
      subtitle: "Our flexible platform adapts to any industry. Let's discuss your needs.",
      cta_text: "Contact Our Experts",
      cta_link: "/contact"
    }
  },
  industry_details: [
    {
      slug: "technology",
      title: "Technology Industry",
      overview: "Scale engineering and product teams with agile, AI-assisted HR.",
      challenges: ["Hypergrowth hiring", "Skills-based development", "Global compliance"],
      features: ["AI talent acquisition", "OKRs and performance", "Learning paths"],
      insights: [
        { metric: "+12%", label: "Retention" },
        { metric: "-35%", label: "Time-to-hire" },
        { metric: "+18%", label: "Manager adoption" }
      ]
    },
    {
      slug: "manufacturing",
      title: "Manufacturing Industry",
      overview: "Digitize scheduling, safety, and compliance across plants.",
      challenges: ["Shift complexity", "Attendance fidelity", "Safety training"],
      features: ["Smart scheduler", "Geo-fenced attendance", "Compliance workflows"],
      insights: [
        { metric: "4,000", label: "Manager hours saved/yr" },
        { metric: "-9%", label: "Absenteeism" },
        { metric: "-25%", label: "Incidents" }
      ]
    },
    {
      slug: "retail",
      title: "Retail & Hospitality",
      overview: "Empower associates with mobile-first HR and learning.",
      challenges: ["Frontline engagement", "Seasonality", "Turnover"],
      features: ["Shift swaps", "Micro-learning", "Store KPIs"],
      insights: [
        { metric: "-8%", label: "Attrition" },
        { metric: "+11", label: "eNPS" }
      ]
    },
    {
      slug: "healthcare",
      title: "Healthcare",
      overview: "Simplify credentialing and optimize coverage across sites.",
      challenges: ["Credentialing delays", "Multi-site scheduling", "Compliance"],
      features: ["Credential tracker", "Smart coverage", "Audit trails"],
      insights: [
        { metric: "-50%", label: "Credentialing time" },
        { metric: "+25%", label: "Shift fill rate" }
      ]
    }
  ],
  solution_details: [
    {
      slug: "enterprise",
      title: "Enterprise Solutions",
      overview: "End-to-end HCM for complex, global organizations.",
      capabilities: ["SSO/SCIM", "Advanced analytics", "Custom workflows", "Integrations"],
      outcomes: ["Global agility", "Risk reduction", "Data-driven decisions"]
    },
    {
      slug: "mid-market",
      title: "Mid-Market Solutions",
      overview: "Scalable HR suite for fast-growing companies.",
      capabilities: ["Best-practice templates", "Automation", "Role-based access"],
      outcomes: ["Faster rollouts", "Lower TCO", "Higher adoption"]
    },
    {
      slug: "startup",
      title: "Startup Solutions",
      overview: "Essential HR to build strong foundations quickly.",
      capabilities: ["Core HR", "Hiring basics", "Simple performance"],
      outcomes: ["Speed", "Simplicity", "Great EX"]
    }
  ],
  pricing_page: {
    slug: "pricing",
    header_title: "Simple, Transparent Pricing",
    header_subtitle: "Choose the perfect plan for your organization.",
    plans: [
      { uid: "plan_starter", name: "Starter", price: "$5", period: "per employee/month", description: "Perfect for small teams getting started", badge: "", features: ["Core HR Management", "Employee Database", "Basic Reporting", "Mobile App Access", "Email Support", "Up to 50 employees"], cta: "Start Free Trial", popular: false },
      { uid: "plan_professional", name: "Professional", price: "$12", period: "per employee/month", description: "Advanced features for growing businesses", badge: "Most Popular", features: ["Everything in Starter", "Performance Management", "Advanced Analytics", "Custom Workflows", "API Access", "Priority Support", "Up to 500 employees"], cta: "Start Free Trial", popular: true },
      { uid: "plan_enterprise", name: "Enterprise", price: "Custom", period: "contact for pricing", description: "Complete solution for large organizations", badge: "Enterprise", features: ["Everything in Professional", "AI-Powered Insights", "Advanced Security", "Custom Integrations", "Dedicated Success Manager", "SLA Guarantee", "Unlimited employees"], cta: "Contact Sales", popular: false },
    ],
    highlights: [
      { uid: "hl_fast", icon_key: "zap", title: "Lightning Fast", description: "40% faster than traditional HR systems" },
      { uid: "hl_security", icon_key: "shield", title: "Enterprise Security", description: "SOC2 Type II and GDPR compliant" },
      { uid: "hl_global", icon_key: "globe", title: "Global Ready", description: "Multi-country payroll and compliance" },
      { uid: "hl_roi", icon_key: "trending_up", title: "Proven ROI", description: "Average 300% ROI within first year" },
    ],
    faqs: [
      { uid: "faq_trial", question: "What's included in the free trial?", answer: "Full access to all Professional features for 14 days. No credit card required." },
      { uid: "faq_change_plans", question: "Can I change plans anytime?", answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately." },
      { uid: "faq_setup_fee", question: "Is there a setup fee?", answer: "No setup fees for Starter and Professional plans. Enterprise plans include white-glove onboarding." },
      { uid: "faq_payments", question: "What payment methods do you accept?", answer: "We accept all major credit cards, bank transfers, and can accommodate annual billing." },
    ],
    cta_section: {
      title: "Ready to Get Started?",
      subtitle: "Join companies already using TalentConnect360",
      primary_text: "Start Free Trial",
      secondary_text: "Schedule Demo"
    }
  },
  demo_page: {
    slug: "demo",
    header_title: "Schedule Your Demo",
    header_subtitle: "See TalentConnect360 in action.",
    form_config: {
      company_size_options: ["1-50 employees", "51-200 employees", "201-500 employees", "500+ employees"],
      industry_options: ["Technology", "Manufacturing", "Retail", "Healthcare", "Other"],
      submit_cta: "Schedule Demo"
    },
    info_blocks: [
      { uid: "info_expect", icon_key: "calendar", title: "What to Expect", description: "Focused demo tailored to your needs" },
      { uid: "info_expert", icon_key: "users", title: "HR Expert Guide", description: "Personal walkthrough with our product specialist" },
      { uid: "info_live", icon_key: "video", title: "Live Demo", description: "See real features in action" },
    ],
    demo_topics: [
      "AI-powered talent acquisition",
      "Performance management workflows",
      "Employee self-service portal",
      "Advanced analytics and reporting",
      "Integration capabilities"
    ],
    help_card: {
      title: "Need immediate help?",
      subtitle: "Chat with our sales team",
      phone_label: "Call",
      phone_number: "+1-800-TC360",
      chat_label: "Start Live Chat"
    }
  },
  about_page: {
    slug: "company",
    header_title: "About TalentConnect360",
    header_subtitle: "Human-centric HR for the modern enterprise.",
    mission: "Empower organizations to deliver exceptional employee experiences with AI-powered HR.",
    values: [
      { title: "Customer Obsession", description: "Build with empathy and outcomes in mind." },
      { title: "Craftsmanship", description: "Quality and clarity in everything we ship." },
      { title: "Integrity", description: "Do the right thing, especially when it's hard." }
    ],
    leadership: [
      { name: "Alex Rivera", role: "CEO" },
      { name: "Sam Lee", role: "CTO" },
      { name: "Priya N.", role: "CPO" }
    ]
  },
  resources_page: {
    slug: "resources",
    header_title: "Resources",
    header_subtitle: "Guides, reports, and stories to help you get more from TalentConnect360.",
    categories: [
      {
        title: "Product Guides",
        items: [
          { title: "Getting Started with TC360", link: "#" },
          { title: "Performance Management Playbook", link: "#" }
        ]
      },
      {
        title: "Reports & Benchmarks",
        items: [
          { title: "2025 HR Trends Report", link: "#" },
          { title: "Manufacturing Workforce Benchmark", link: "#" }
        ]
      },
      {
        title: "Customer Stories",
        items: [
          { title: "AlphaSoft Engineering", link: "/case-studies/alphasoft-tech" },
          { title: "InduPro Plants", link: "/case-studies/indupro-manufacturing" }
        ]
      }
    ]
  },
  careers_page: {
    slug: "careers",
    header_title: "Join TalentConnect360",
    header_subtitle: "Help us build human-centric HR for the modern enterprise.",
    intro: "We’re a distributed team building products that matter.",
    jobs: [
      { slug: "senior-frontend-engineer", title: "Senior Frontend Engineer", location: "Remote (Global)", department: "Engineering", type: "Full-time" },
      { slug: "product-designer", title: "Product Designer", location: "Remote (EMEA)", department: "Design", type: "Full-time" },
      { slug: "enterprise-ae", title: "Enterprise Account Executive", location: "USA (Remote)", department: "Sales", type: "Full-time" }
    ]
  },
  job_details: [
    {
      slug: "senior-frontend-engineer",
      title: "Senior Frontend Engineer",
      location: "Remote (Global)",
      department: "Engineering",
      type: "Full-time",
      overview: "Build world-class HR experiences using React, TypeScript, and modern tooling.",
      responsibilities: [
        "Own complex UI flows and component systems",
        "Collaborate with product, design, and backend teams",
        "Drive performance and accessibility improvements"
      ],
      requirements: [
        "5+ years experience in React + TypeScript",
        "Deep understanding of web performance and a11y",
        "Experience with design systems or UI libraries"
      ]
    },
    {
      slug: "product-designer",
      title: "Product Designer",
      location: "Remote (EMEA)",
      department: "Design",
      type: "Full-time",
      overview: "Craft intuitive, delightful HR workflows and design systems.",
      responsibilities: [
        "Own end‑to‑end product areas from research to polish",
        "Partner with PM and Eng to ship iteratively",
        "Evolve our design system"
      ],
      requirements: [
        "4+ years in product design",
        "Strong UX and systems thinking",
        "Great communication and prototyping skills"
      ]
    },
    {
      slug: "enterprise-ae",
      title: "Enterprise Account Executive",
      location: "USA (Remote)",
      department: "Sales",
      type: "Full-time",
      overview: "Own the full enterprise sales cycle across strategic accounts.",
      responsibilities: [
        "Prospect, demo, and close enterprise customers",
        "Manage complex buying committees",
        "Partner with CS for smooth handoffs"
      ],
      requirements: [
        "5+ years enterprise SaaS AE experience",
        "Proven quota attainment",
        "HCM/HR tech domain a plus"
      ]
    }
  ],
  product_details: [
    {
      slug: "core-hr",
      title: "Core HR",
      overview: "Modernize employee records, attendance, leave, and document management in one place.",
      highlights: ["Unified employee profile", "Policy-driven leave", "Compliant records"],
      capabilities: [
        { name: "Employee Database", desc: "Single source of truth for employee data with audit trails." },
        { name: "Attendance", desc: "Flexible rules, geo-fencing, and shift-aware policies." },
        { name: "Documents", desc: "Secure storage with e-signature support." }
      ]
    },
    {
      slug: "talent-acquisition",
      title: "Talent Acquisition",
      overview: "Find, engage, and hire faster with AI-assisted recruiting.",
      highlights: ["AI sourcing", "Automated scheduling", "Offer workflows"],
      capabilities: [
        { name: "AI Sourcing", desc: "Intelligent matching and outreach to top candidates." },
        { name: "Scheduling", desc: "Coordinate interviews across time zones in a click." },
        { name: "Offers", desc: "Configurable approvals and templates." }
      ]
    },
    {
      slug: "performance-management",
      title: "Performance Management",
      overview: "Set goals, run reviews, and foster continuous growth.",
      highlights: ["OKRs", "360 feedback", "Growth plans"],
      capabilities: [
        { name: "OKRs", desc: "Align org goals to team and individual outcomes." },
        { name: "360 Reviews", desc: "Holistic, bias-aware feedback." },
        { name: "Development", desc: "Personalized learning paths and coaching." }
      ]
    },
    {
      slug: "analytics-insights",
      title: "Analytics & Insights",
      overview: "Make data-driven HR decisions with real-time dashboards and predictions.",
      highlights: ["Real-time dashboards", "Predictive", "Custom reports"],
      capabilities: [
        { name: "Dashboards", desc: "Track KPIs across the employee lifecycle." },
        { name: "Predictive", desc: "Spot risks in attrition, hiring, and performance." },
        { name: "Reports", desc: "Exportable, scheduled reporting with filters." }
      ]
    }
  ]
  ,
  seasonal_theme: {
    uid: "mock_seasonal_1",
    title: "Seasonal Theme Config",
    content_type: "seasonal_theme",
    locale: "en-us",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
    entries: [
      {
        key: "diwali",
        name: "Diwali",
        regions: ["in"],
        start_date: "2025-10-20",
        end_date: "2025-10-28",
        class_name: "theme-diwali",
        banner_message: "Happy Diwali! Celebrate with special offers",
        offer_enabled: true,
        discount_percent: 20,
        badge_text: "Festival Offer",
        promo_copy: "Limited Diwali Offer: 20% off Professional plan ends soon!",
        promo_code: "DIWALI20",
        ends_at: "2025-10-28T23:59:59Z",
        landing_url: "/pricing#festival",
        cta_primary: "Get Festival Offer",
        cta_secondary: "Talk to Sales",
        newsletter_popup_enabled: false,
        popup_copy: "Get festival insights and best practices."
      },
      {
        key: "holi",
        name: "Holi",
        regions: ["in"],
        start_date: "2025-03-10",
        end_date: "2025-03-14",
        class_name: "theme-holi",
        banner_message: "Holi Hai! Bright colors and brighter HR",
        offer_enabled: false
      },
      {
        key: "christmas",
        name: "Christmas",
        regions: ["in", "us", "eu"],
        start_date: "2025-12-15",
        end_date: "2025-12-27",
        class_name: "theme-christmas",
        banner_message: "Merry Christmas from Team TC360",
        offer_enabled: false
      }
    ]
  }
};
