import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const links = [
    { category: "Main", items: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "DevOps Solutions", href: "/playbooks" },
      { label: "Pricing", href: "/pricing" },
      { label: "Demo", href: "/demo" },
    ]},
    { category: "Company", items: [
      { label: "About", href: "/company" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ]},
    { category: "Legal", items: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security", href: "/security" },
      { label: "Status", href: "/status" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ]},
    { category: "Products", items: [
      { label: "Incident Autopilot", href: "/products/incident-autopilot" },
      { label: "Pipeline Intelligence", href: "/products/pipeline-intelligence" },
      { label: "Knowledge Graph", href: "/products/knowledge-graph" },
      { label: "Learning Hub", href: "/products/learning-hub" },
    ]},
  ];

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Sitemap — DevOpsCopilot" description="Complete sitemap of DevOpsCopilot website." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Sitemap</h1>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              {links.map((section, index) => (
                <div key={index}>
                  <h2 className="text-lg font-semibold text-foreground mb-4">{section.category}</h2>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.href === '/demo' ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                              window.dispatchEvent(ev);
                            }}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary">
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sitemap;

