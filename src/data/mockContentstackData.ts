export const mockContentstackData = {
  announcement_banner: {
    uid: "mock_announcement_1",
    title: "Mock Announcement Banner",
    content_type: "announcement_banner",
    locale: "en-us",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
    message: "Welcome to DevOpsCopilot! Explore our new features. ✨",
    link_text: "Learn More",
    link_url: "/resources",
    type: "info" as const,
  },
  hero_section: {
    uid: "mock_hero_1",
    title: "DevOpsCopilot Hero",
    content_type: "hero_section",
    locale: "en-us",
    created_at: "2024-01-01T10:00:00Z",
    updated_at: "2024-01-01T10:00:00Z",
    headline: "Ship Confidently with Your DevOps Copilot",
    subheadline: "AI troubleshooting, runbook automation, and guided learning for high-velocity engineering teams.",
    description: "DevOpsCopilot synthesizes observability, runbooks, and source control so every engineer can resolve incidents, prevent regressions, and stay ahead of infrastructure changes.",
    cta_text: "Launch the Interactive Demo",
    cta_link: "/demo",
    background_image: {
      url: "",
      alt: "DevOpsCopilot Dashboard",
    },
  },
  hero_section_variants: [
    {
      match: { industryType: "technology" },
      data: {
        headline: "Keep Your SaaS Platform Always-On",
        subheadline: "Spot anomalies, triage incidents, and deploy safely with AI guardrails.",
        description: "DevOpsCopilot plugs into PagerDuty, Datadog, and GitHub to guide SREs through incidents while capturing every decision for blameless reviews.",
        cta_text: "See SaaS Playbook",
        cta_link: "/demo?industrytype=technology"
      }
    },
    {
      match: { industryType: "manufacturing" },
      data: {
        headline: "Protect Production with Edge-to-Cloud Visibility",
        subheadline: "Predict downtime, automate response steps, and sync OT + IT teams.",
        description: "Bring telemetry from plant equipment and cloud services into one assistant so reliability engineers can keep lines running smoothly.",
        cta_text: "Explore Reliability Demo",
        cta_link: "/demo?industrytype=manufacturing"
      }
    }
  ],
  announcement_banner_variants: [
    {
      match: { role: "hr" },
      data: {
        message: "Platform Teams: Try the new Runbook Automation templates",
        link_text: "Preview Templates",
        link_url: "/resources",
        type: "success" as const
      }
    }
  ],
  case_studies: [
    {
      uid: "cs_streamline_incidents",
      slug: "skyforge-platform",
      industry: "technology",
      role: "sre",
      company_name: "Skyforge",
      title: "Stabilizing a Multi-Region SaaS Platform",
      summary: "DevOpsCopilot cut MTTR in half and automated incident summaries for a 24/7 gaming platform.",
      logo_url: "/api/placeholder/160/60?text=Skyforge",
      link: "/case-studies/skyforge-platform",
      hero_image_url: "/api/placeholder/1200/600?text=Skyforge+Platform",
      banner_kicker: "Technology • SRE",
      stats: [
        { label: "MTTR", value: "-52%" },
        { label: "Deploy Success Rate", value: "+18%" },
        { label: "Postmortem Prep Time", value: "-80%" }
      ],
      highlights: [
        "Unified alert context across PagerDuty, Grafana, and GitHub",
        "AI-generated mitigation steps with rollback automation",
        "Automatic incident timeline and Jira ticket creation"
      ],
      quote: {
        text: "On-call engineers finally have a copilot that understands our stack and recommends the next move instantly.",
        author: "Lina Park",
        role: "Head of SRE, Skyforge"
      },
      body_sections: [
        { heading: "Challenge", content: "Frequent late-night incidents with incomplete runbooks and siloed telemetry created stressful escalations." },
        { heading: "Solution", content: "Connected observability, enriched runbooks, and guardrailed automations surfaced via DevOpsCopilot chat." },
        { heading: "Outcome", content: "Major incident duration fell below 20 minutes and deploy confidence increased across teams." }
      ]
    },
    {
      uid: "cs_fintech_guardrails",
      slug: "nova-finance",
      industry: "finance",
      role: "platform",
      company_name: "Nova Finance",
      title: "Scaling Compliance & Release Velocity",
      summary: "Nova Finance automated release verification and compliance evidence capture with DevOpsCopilot.",
      logo_url: "/api/placeholder/160/60?text=Nova",
      link: "/case-studies/nova-finance",
      hero_image_url: "/api/placeholder/1200/600?text=Nova+Finance",
      banner_kicker: "Financial Services • Platform",
      stats: [
        { label: "Release Lead Time", value: "-34%" },
        { label: "Audit Prep Hours", value: "-70%" },
        { label: "Chat Resolution Rate", value: "89%" }
      ],
      highlights: [
        "Pre-flight compliance checks embedded in chat flows",
        "Automated evidence collection for SOC 2 and PCI",
        "Contextual training paths for new platform engineers"
      ],
      quote: {
        text: "Our auditors now pull everything from the DevOpsCopilot timeline — no more screenshot hunts.",
        author: "Mateo Ruiz",
        role: "Director of Platform Engineering, Nova Finance"
      },
      body_sections: [
        { heading: "Challenge", content: "Manual controls slowed releases and compliance reviews consumed engineering cycles." },
        { heading: "Solution", content: "Guardrailed automations executed policy checks and captured artifacts while engineers deployed from chat." },
        { heading: "Outcome", content: "Continuous delivery regained momentum without sacrificing regulatory confidence." }
      ]
    }
  ],
  navigation: [
    {
      uid: "mock_nav_1",
      title: "Solutions Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "Solutions",
      href: "/products",
      submenu: [
        { label: "Incident Autopilot", href: "/products#incident-autopilot", description: "Guide on-call engineers with AI-driven runbooks." },
        { label: "Pipeline Intelligence", href: "/products#pipeline-intelligence", description: "Explain failing builds and safeguard releases." },
        { label: "Knowledge Hub", href: "/products#knowledge-hub", description: "Centralize runbooks, dashboards, and best practices." },
        { label: "Learning Paths", href: "/products#learning-paths", description: "Upskill teams with guided DevOps courses." },
      ],
    },
    {
      uid: "mock_nav_2",
      title: "Industries Navigation",
      content_type: "navigation_item",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      label: "DevOps Solutions",
      href: "/playbooks",
      submenu: [
        { label: "SaaS & Cloud", href: "/playbooks#saas-cloud", description: "Reliability playbooks for cloud-native platforms." },
        { label: "Financial Services", href: "/playbooks#financial-services", description: "Regulated delivery with built-in compliance guardrails." },
        { label: "Media & Gaming", href: "/playbooks#media-gaming", description: "High-traffic streaming and gaming operations." },
        { label: "Manufacturing & IoT", href: "/playbooks#manufacturing-iot", description: "Edge-to-cloud monitoring for critical lines." },
        { label: "MLOps", href: "/playbooks#mlops", description: "Machine learning operations and model lifecycle management." },
        { label: "LLMOps", href: "/playbooks#llmops", description: "Large language model operations and prompt engineering." },
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
      testimonial: "DevOpsCopilot transformed our DevOps operations.",
    },
    {
      uid: "mock_trust_2",
      title: "Leading Industry Analyst",
      content_type: "trust_indicator",
      locale: "en-us",
      created_at: "2024-01-01T10:00:00Z",
      updated_at: "2024-01-01T10:00:00Z",
      company_name: "Velocity Research",
      logo_url: "/api/placeholder/200/80?text=Velocity",
      testimonial: "Named DevOpsCopilot a leader in AI-powered incident management.",
    },
  ],
  products_page: {
    slug: "products",
    header_title: "DevOpsCopilot Platform",
    header_subtitle: "AI copilots for incident response, release health, and continuous enablement.",
    products: [
      {
        uid: "prod_incident_autopilot",
        slug: "incident-autopilot",
        title: "Incident Autopilot",
        description: "Guide on-call engineers with end-to-end triage, remediation, and documentation.",
        features: ["Unified alert context", "AI mitigation suggestions", "Chat-triggered automations", "Instant post-incident reports"],
        badge: "Most Adopted",
        icon_key: "shield",
        learn_more_link: "/products/incident-autopilot"
      },
      {
        uid: "prod_pipeline_intelligence",
        slug: "pipeline-intelligence",
        title: "Pipeline Intelligence",
        description: "Explain failing builds, guard your releases, and keep shipping momentum high.",
        features: ["Build log summarization", "Policy enforcement gates", "Rollback & hotfix flows", "Deployment health dashboards"],
        badge: "New",
        icon_key: "cpu",
        learn_more_link: "/products/pipeline-intelligence"
      },
      {
        uid: "prod_knowledge_graph",
        slug: "knowledge-graph",
        title: "Knowledge Graph",
        description: "Make runbooks, dashboards, and architecture diagrams instantly discoverable in chat.",
        features: ["Source-aware answers", "Auto-updated runbooks", "Contextual recommendations", "Version-aware responses"],
        badge: "AI Driven",
        icon_key: "bar_chart",
        learn_more_link: "/products/knowledge-graph"
      },
      {
        uid: "prod_learning_hub",
        slug: "learning-hub",
        title: "Learning Hub",
        description: "Blend self-paced labs and coaching with real incident scenarios.",
        features: ["Role-based learning paths", "Hands-on sandboxes", "Skills analytics", "Certification prep"],
        badge: "Enablement",
        icon_key: "users",
        learn_more_link: "/products/learning-hub"
      }
    ],
    cta_section: {
      title: "Ready to Elevate Your DevOps Practice?",
      subtitle: "Join platform teams using DevOpsCopilot to resolve incidents faster and ship with confidence.",
      primary_cta_text: "Schedule a Demo",
      primary_cta_link: "/demo",
      secondary_cta_text: "Contact Sales",
      secondary_cta_link: "/contact"
    }
  },
  industries_page: {
    slug: "playbooks",
    header_title: "DevOps Solutions",
    header_subtitle: "Purpose-built copilots for the teams that keep software running.",
    industries: [
      { uid: "ind_tech", title: "SaaS & Cloud", description: "Keep multi-region platforms reliable with AI-powered incident response.", stats: "500+ Cloud Platforms", features: ["PagerDuty & Datadog context", "Canary & rollback automation", "Postmortem co-author", "Customer impact summaries"], icon_key: "cpu" },
      { uid: "ind_finance", title: "Financial Services", description: "Ship fast and stay compliant with evidence-backed releases.", stats: "120+ FinServ Teams", features: ["Policy-aware deploy gates", "Audit-ready timelines", "Automated control checks", "PII-safe knowledge base"], icon_key: "shield" },
      { uid: "ind_media", title: "Media & Gaming", description: "Absorb traffic spikes and keep player experiences smooth.", stats: "80+ Media Networks", features: ["Real-time QoS watch", "Proactive capacity alerts", "Live event runbooks", "Edge cache playbooks"], icon_key: "shopping_cart" },
      { uid: "ind_manufacturing", title: "Manufacturing & IoT", description: "Unify OT and IT telemetry to protect critical production lines.", stats: "60+ Industrial Orgs", features: ["Edge device health", "Predictive maintenance alerts", "Digital runbooks", "Compliance-ready incident logs"], icon_key: "factory" },
      { uid: "ind_mlops", title: "MLOps", description: "Streamline machine learning workflows from training to deployment with automated model monitoring and drift detection.", stats: "200+ ML Teams", features: ["Model versioning & tracking", "Automated retraining pipelines", "Production model monitoring", "Drift detection alerts"], icon_key: "brain" },
      { uid: "ind_llmops", title: "LLMOps", description: "Operationalize large language models with prompt engineering workflows, fine-tuning pipelines, and production monitoring.", stats: "150+ AI Teams", features: ["Prompt versioning & A/B testing", "Fine-tuning automation", "LLM performance monitoring", "Token usage optimization"], icon_key: "sparkles" },
    ],
    solutions: [
      { uid: "sol_enterprise", title: "Enterprise Platform Teams", description: "Support complex organizations with global fleets and layered compliance.", badge: "Enterprise" },
      { uid: "sol_midmarket", title: "Growth-Stage Engineering", description: "Accelerate delivery while standardizing runbooks and automation.", badge: "Popular" },
      { uid: "sol_startup", title: "Foundational DevOps", description: "Give lean teams guided operations and instant knowledge access.", badge: "Startup" },
    ],
    cta_section: {
      title: "Have a Unique Stack?",
      subtitle: "DevOpsCopilot integrates with any toolchain. Let’s map the right playbooks for your environment.",
      cta_text: "Contact Our Engineers",
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
    header_title: "Pricing Built For High-Velocity DevOps Teams",
    header_subtitle: "Pick the copilot bundle that fits your reliability goals, and scale with transparent usage-based automations.",
    plans: [
      {
        uid: "plan_launch",
        slug: "launch",
        name: "Launch",
        price: "$20",
        period: "per month",
        description: "Best for startups building their first on-call program.",
        badge: "",
        features: [
          "Up to 10 engineer seats & unlimited Stakeholder view",
          "Incident Autopilot with chat-based runbooks",
          "Pipeline Intelligence for 3 CI/CD workflows",
          "Knowledge Graph syncing GitHub + Confluence nightly",
          "Shared Slack / Teams channel support",
        ],
        cta: "Start Trial",
        lead_type: "trial",
        popular: false,
      },
      {
        uid: "plan_scale",
        slug: "scale",
        name: "Scale",
        price: "$60",
        period: "per month",
        description: "Most popular bundle for platform and SRE teams in growth-stage companies.",
        badge: "Most Adopted",
        features: [
          "Unlimited engineer seats with granular RBAC",
          "Automated post-incident timelines & Jira integration",
          "Pipeline Intelligence across multi-region deploys",
          "Policy-aware guardrails + compliance evidence vault",
          "Dedicated solutions architect & 24/5 live support",
        ],
        cta: "Start Trial",
        lead_type: "trial",
        popular: true,
      },
      {
        uid: "plan_enterprise",
        slug: "enterprise",
        name: "Enterprise",
        price: "Custom",
        period: "annual agreement",
        description: "Tailor DevOpsCopilot to regulated, multi-cloud environments with custom SLAs.",
        badge: "Enterprise",
        features: [
          "SOC 2 Type II, HIPAA, and regional data residency",
          "Private model deployment & redaction controls",
          "Automation workflow packs & runbook authoring services",
          "On-site reliability workshop + quarterly game days",
          "24/7 priority response with 15-min critical SLA",
        ],
        cta: "Talk To Sales",
        lead_type: "contact",
        popular: false,
      },
    ],
    highlights: [
      { uid: "hl_fast", icon_key: "zap", title: "Faster Resolution", description: "Average 37% MTTR reduction inside the first 60 days." },
      { uid: "hl_security", icon_key: "shield", title: "Enterprise Guardrails", description: "Role-based automations, audit trails, and SOC 2 Type II controls." },
      { uid: "hl_global", icon_key: "globe", title: "Toolchain Flexibility", description: "Connect PagerDuty, Datadog, Grafana, GitHub, ServiceNow, and more." },
      { uid: "hl_roi", icon_key: "trending_up", title: "Proven ROI", description: "Customers reclaim 12+ engineer hours per week through automation." },
    ],
    faqs: [
      { uid: "faq_trial", question: "What’s included in the trial?", answer: "You get the full Scale plan for 14 days, including integrations and sandbox labs. No credit card required." },
      { uid: "faq_usage", question: "How is usage priced?", answer: "Plans include baseline automations. Additional chat sessions, pipelines, or integrations are billed in discounted usage blocks." },
      { uid: "faq_security", question: "Can you meet our security requirements?", answer: "Yes. Enterprise plans include custom data residency, private model deployment, and support for HIPAA, PCI, and FedRAMP assessments." },
      { uid: "faq_migration", question: "Do you help with rollout?", answer: "Absolutely. Scale and Enterprise plans include guided onboarding, playbook migration, and incident rehearsal support." },
    ],
    cta_section: {
      title: "Ready To Ship With Confidence?",
      subtitle: "Pair AI copilots with your toolchain and see DevOpsCopilot accelerate your next incident response.",
      primary_text: "Start Free Trial",
      secondary_text: "Schedule Demo"
    }
  },
  demo_page: {
    slug: "demo",
    header_title: "Schedule Your Demo",
    header_subtitle: "See DevOpsCopilot in action.",
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
    header_title: "About DevOpsCopilot",
    header_subtitle: "Human-centric HR for the modern enterprise.",
    mission: "Empower organizations to deliver exceptional employee experiences with AI-powered HR.",
    values: [
      { title: "Customer Obsession", description: "Build with empathy and outcomes in mind." },
      { title: "Craftsmanship", description: "Quality and clarity in everything we ship." },
      { title: "Integrity", description: "Do the right thing, especially when it's hard." }
    ],
    leadership: [
      { name: "viswanatha reddy K", role: "CEO" },
      { name: "Thejaswini", role: "CTO" },
      { name: "husna reddy K", role: "CPO" }
    ]
  },
  resources_page: {
    slug: "resources",
    header_title: "Resources",
    header_subtitle: "Guides, reports, and stories to help you get more from DevOpsCopilot.",
    categories: [
      {
        title: "Product Guides",
        items: [
          { title: "Getting Started with DevOpsCopilot", link: "#" },
          { title: "Incident Response Playbook", link: "#" },
          { title: "CI/CD Pipeline Best Practices", link: "#" },
          { title: "Onboarding New Engineers Guide", link: "#" }
        ]
      },
      {
        title: "Reports & Benchmarks",
        items: [
          { title: "2025 DevOps Trends Report", link: "#" },
          { title: "MTTR Benchmark Study", link: "#" },
          { title: "SRE Maturity Assessment", link: "#" },
          { title: "AI in DevOps Survey Results", link: "#" }
        ]
      },
      {
        title: "Customer Stories",
        items: [
          { title: "Skyforge - Stabilizing Multi-Region SaaS", link: "/case-studies/skyforge-platform" },
          { title: "Nova Finance - Scaling Compliance & Velocity", link: "/case-studies/nova-finance" }
        ]
      }
    ]
  },
  careers_page: {
    slug: "careers",
    header_title: "Join DevOpsCopilot",
    header_subtitle: "Build AI-powered DevOps tools that help engineering teams ship faster and resolve incidents with confidence.",
    intro: "We're a distributed team building products that matter. Join us in revolutionizing how DevOps teams work.",
    jobs: [
      { slug: "senior-devops-engineer", title: "Senior DevOps Engineer", location: "Remote (Global)", department: "Engineering", type: "Full-time" },
      { slug: "ai-ml-engineer", title: "AI/ML Engineer", location: "Remote (Global)", department: "Engineering", type: "Full-time" },
      { slug: "senior-frontend-engineer", title: "Senior Frontend Engineer", location: "Remote (Global)", department: "Engineering", type: "Full-time" },
      { slug: "sre-platform-engineer", title: "SRE Platform Engineer", location: "Remote (Global)", department: "Engineering", type: "Full-time" },
      { slug: "product-designer", title: "Product Designer", location: "Remote (EMEA)", department: "Design", type: "Full-time" },
      { slug: "enterprise-ae", title: "Enterprise Account Executive", location: "USA (Remote)", department: "Sales", type: "Full-time" }
    ]
  },
  job_details: [
    {
      slug: "senior-devops-engineer",
      title: "Senior DevOps Engineer",
      location: "Remote (Global)",
      department: "Engineering",
      type: "Full-time",
      overview: "Build and scale the infrastructure that powers DevOpsCopilot's AI chatbot and automation platform. You'll work on Kubernetes, CI/CD pipelines, observability, and cloud-native architectures.",
      responsibilities: [
        "Design and implement scalable infrastructure on AWS/GCP/Azure",
        "Build and maintain CI/CD pipelines for microservices",
        "Implement observability and monitoring solutions (Prometheus, Grafana, Datadog)",
        "Automate deployment and scaling processes",
        "Collaborate with engineering teams on reliability and performance"
      ],
      requirements: [
        "5+ years experience in DevOps/SRE roles",
        "Strong experience with Kubernetes, Docker, and container orchestration",
        "Proficiency in infrastructure-as-code (Terraform, CloudFormation)",
        "Experience with CI/CD tools (GitHub Actions, GitLab CI, Jenkins)",
        "Knowledge of monitoring and observability tools",
        "Strong scripting skills (Python, Bash, Go)"
      ]
    },
    {
      slug: "ai-ml-engineer",
      title: "AI/ML Engineer",
      location: "Remote (Global)",
      department: "Engineering",
      type: "Full-time",
      overview: "Develop AI models and systems that power our DevOps chatbot, enabling intelligent troubleshooting, incident response, and knowledge synthesis from runbooks and documentation.",
      responsibilities: [
        "Build and fine-tune LLMs for DevOps-specific use cases",
        "Develop RAG (Retrieval-Augmented Generation) systems for technical documentation",
        "Create embeddings and vector search for code, logs, and runbooks",
        "Integrate AI models with observability and incident management tools",
        "Optimize model performance and reduce latency for real-time chat"
      ],
      requirements: [
        "3+ years experience in ML/AI engineering",
        "Experience with LLMs (GPT, Claude, Llama) and fine-tuning",
        "Strong Python skills and ML frameworks (PyTorch, TensorFlow, Hugging Face)",
        "Experience with vector databases and RAG systems",
        "Understanding of DevOps tools and workflows is a plus",
        "MS/PhD in Computer Science, ML, or related field preferred"
      ]
    },
    {
      slug: "senior-frontend-engineer",
      title: "Senior Frontend Engineer",
      location: "Remote (Global)",
      department: "Engineering",
      type: "Full-time",
      overview: "Build world-class user interfaces for DevOpsCopilot's dashboard, chat interface, and automation workflows using React, TypeScript, and modern tooling.",
      responsibilities: [
        "Own complex UI flows including chat interfaces, dashboards, and automation builders",
        "Build reusable component libraries and design systems",
        "Collaborate with product, design, and backend teams",
        "Drive performance and accessibility improvements",
        "Implement real-time features for chat and live observability data"
      ],
      requirements: [
        "5+ years experience in React + TypeScript",
        "Deep understanding of web performance and accessibility",
        "Experience with design systems or UI libraries (shadcn/ui, Material-UI)",
        "Familiarity with real-time technologies (WebSockets, SSE)",
        "Experience with state management (Zustand, Redux, React Query)"
      ]
    },
    {
      slug: "sre-platform-engineer",
      title: "SRE Platform Engineer",
      location: "Remote (Global)",
      department: "Engineering",
      type: "Full-time",
      overview: "Design and maintain the platform infrastructure that ensures DevOpsCopilot's reliability, scalability, and performance. You'll work on incident response automation, service reliability, and platform tooling.",
      responsibilities: [
        "Design and implement SLO/SLI frameworks and error budgets",
        "Build automated incident response and remediation systems",
        "Develop platform tooling for service reliability and observability",
        "Participate in on-call rotations and incident postmortems",
        "Collaborate with product teams on reliability requirements"
      ],
      requirements: [
        "4+ years experience in SRE or platform engineering",
        "Strong experience with observability tools (Datadog, New Relic, Grafana)",
        "Experience with incident management (PagerDuty, Opsgenie)",
        "Proficiency in Go, Python, or similar languages",
        "Understanding of distributed systems and microservices",
        "Experience with chaos engineering and reliability testing"
      ]
    },
    {
      slug: "product-designer",
      title: "Product Designer",
      location: "Remote (EMEA)",
      department: "Design",
      type: "Full-time",
      overview: "Design intuitive, powerful interfaces for DevOps teams. You'll work on chat experiences, automation builders, dashboards, and learning paths that help engineers work more effectively.",
      responsibilities: [
        "Own end‑to‑end product areas from research to polish",
        "Design chat interfaces, automation workflows, and dashboard experiences",
        "Partner with PM and Eng to ship iteratively",
        "Conduct user research with DevOps and SRE teams",
        "Evolve our design system and component library"
      ],
      requirements: [
        "4+ years in product design",
        "Strong UX and systems thinking",
        "Experience designing developer tools or technical products",
        "Great communication and prototyping skills",
        "Portfolio demonstrating complex technical interfaces"
      ]
    },
    {
      slug: "enterprise-ae",
      title: "Enterprise Account Executive",
      location: "USA (Remote)",
      department: "Sales",
      type: "Full-time",
      overview: "Own the full enterprise sales cycle for DevOpsCopilot, working with platform engineering, SRE, and DevOps teams at large organizations to transform their incident response and automation capabilities.",
      responsibilities: [
        "Prospect, demo, and close enterprise customers ($100K+ ARR)",
        "Manage complex buying committees including engineering, security, and procurement",
        "Partner with solutions architects and customer success for smooth handoffs",
        "Build relationships with DevOps leaders and platform engineering teams",
        "Navigate technical evaluations and security reviews"
      ],
      requirements: [
        "5+ years enterprise SaaS AE experience",
        "Proven quota attainment ($1M+ ARR)",
        "Experience selling to engineering/DevOps teams preferred",
        "Technical background or ability to understand DevOps tools and workflows",
        "Experience with developer tools, observability, or infrastructure software"
      ]
    }
  ],
  product_details: [
    {
      slug: "incident-autopilot",
      title: "Incident Autopilot",
      overview: "Guide on-call engineers with end-to-end triage, remediation, and documentation. Reduce MTTR and eliminate alert fatigue with AI-powered incident response.",
      highlights: ["Unified alert context", "AI mitigation suggestions", "Chat-triggered automations", "Instant post-incident reports"],
      capabilities: [
        { name: "Alert Integration", desc: "Unified context from PagerDuty, Grafana, Datadog, and custom monitoring tools." },
        { name: "AI Triage", desc: "Intelligent root cause analysis with suggested remediation steps based on historical incidents." },
        { name: "Automated Response", desc: "Execute rollbacks, scale resources, and trigger runbooks directly from chat." },
        { name: "Post-Incident Reports", desc: "Auto-generated timelines, impact analysis, and action items for postmortems." }
      ]
    },
    {
      slug: "pipeline-intelligence",
      title: "Pipeline Intelligence",
      overview: "Explain failing builds, guard your releases, and keep shipping momentum high. Make CI/CD failures understandable and prevent bad deployments.",
      highlights: ["Build log summarization", "Policy enforcement gates", "Rollback & hotfix flows", "Deployment health dashboards"],
      capabilities: [
        { name: "Build Analysis", desc: "AI-powered log parsing to identify root causes of CI/CD failures in seconds." },
        { name: "Release Gates", desc: "Automated policy checks for security, performance, and compliance before deployment." },
        { name: "Rollback Automation", desc: "One-click rollbacks and hotfix workflows triggered from chat or dashboards." },
        { name: "Pipeline Health", desc: "Real-time visibility into deployment success rates, build times, and failure patterns." }
      ]
    },
    {
      slug: "knowledge-graph",
      title: "Knowledge Graph",
      overview: "Make runbooks, dashboards, and architecture diagrams instantly discoverable in chat. Keep your team's institutional knowledge accessible and up-to-date.",
      highlights: ["Source-aware answers", "Auto-updated runbooks", "Contextual recommendations", "Version-aware responses"],
      capabilities: [
        { name: "Knowledge Discovery", desc: "Semantic search across runbooks, wikis, code comments, and documentation." },
        { name: "Auto-Sync", desc: "Automatically update knowledge base when runbooks or architecture changes in Git." },
        { name: "Contextual Answers", desc: "AI responses that reference specific documentation, dashboards, and code examples." },
        { name: "Version Control", desc: "Track knowledge changes and provide version-aware answers based on deployment state." }
      ]
    },
    {
      slug: "learning-hub",
      title: "Learning Hub",
      overview: "Blend self-paced labs and coaching with real incident scenarios. Onboard engineers faster and build DevOps expertise with hands-on practice.",
      highlights: ["Role-based learning paths", "Hands-on sandboxes", "Skills analytics", "Certification prep"],
      capabilities: [
        { name: "Learning Paths", desc: "Personalized curricula for SREs, platform engineers, and DevOps practitioners." },
        { name: "Sandbox Environments", desc: "Isolated labs for practicing incident response, pipeline debugging, and infrastructure changes." },
        { name: "Skills Tracking", desc: "Analytics on learning progress, knowledge gaps, and certification readiness." },
        { name: "Real Scenarios", desc: "Practice with anonymized real incidents and build muscle memory for production situations." }
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
