import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  return (
    <footer className="mt-16 border-t border-border bg-background/80 backdrop-blur">
      <div className="container py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="relative h-8 w-8 flex items-center justify-center">
              <svg 
                viewBox="0 0 32 32" 
                className="h-8 w-8"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
              >
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="footerLogoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                  <filter id="footerLogoGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <circle cx="16" cy="16" r="15" fill="url(#footerLogoGradient)" />
                <circle cx="16" cy="16" r="15" fill="url(#footerLogoGradientDark)" className="hidden dark:block" />
                <circle cx="16" cy="16" r="15" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                
                {/* Automation: Gear symbol (top) - represents automation/workflow */}
                <circle cx="16" cy="9" r="2.5" fill="white" />
                <rect x="15.5" y="7" width="1" height="4" fill="white" />
                <rect x="15.5" y="9" width="1" height="4" fill="white" />
                <rect x="13.5" y="8.5" width="1.5" height="1.5" fill="white" />
                <rect x="17" y="8.5" width="1.5" height="1.5" fill="white" />
                
                {/* MLOps: Neural network layers (left) - represents ML/AI models */}
                <circle cx="7" cy="16" r="1.8" fill="white" />
                <circle cx="10" cy="12" r="1.3" fill="white" />
                <circle cx="10" cy="16" r="1.3" fill="white" />
                <circle cx="10" cy="20" r="1.3" fill="white" />
                <path d="M8.5 12 L8 16" stroke="white" strokeWidth="1" />
                <path d="M8.5 16 L8 16" stroke="white" strokeWidth="1" />
                <path d="M8.5 20 L8 16" stroke="white" strokeWidth="1" />
                
                {/* LLMOps: Text/language processing (right) - represents LLM/text AI */}
                <rect x="22" y="13.5" width="2.5" height="0.8" rx="0.4" fill="white" />
                <rect x="22" y="15.5" width="3.5" height="0.8" rx="0.4" fill="white" />
                <rect x="22" y="17.5" width="2.5" height="0.8" rx="0.4" fill="white" />
                <circle cx="25.5" cy="19.5" r="0.8" fill="#fbbf24" className="dark:fill-yellow-400" />
                
                {/* Automation: Continuous loop arrow (bottom) - represents CI/CD pipeline */}
                <path d="M12 22 Q16 20, 20 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M19 21.2 L20 22 L19 22.8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                
                {/* Central AI core - represents intelligent automation with glow */}
                <circle cx="16" cy="16" r="3" fill="#fbbf24" className="dark:fill-yellow-400" filter="url(#footerLogoGlow)" />
                <circle cx="16" cy="16" r="2" fill="white" />
                <circle cx="16" cy="16" r="1" fill="#fbbf24" className="dark:fill-yellow-400" />
              </svg>
            </div>
            <span className="font-bold text-xl text-foreground bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DevOpsCopilot
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered DevOps assistant to troubleshoot incidents, onboard engineers, and accelerate your platform team.
          </p>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-5 w-5" /></a>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
            <p className="text-xs text-muted-foreground mb-3">Get product updates, best practices, and industry insights.</p>
            <form onSubmit={onSubscribe} className="flex gap-2">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            {status === "success" && (
              <div className="text-xs text-primary mt-2">Thanks for subscribing!</div>
            )}
            {status === "error" && (
              <div className="text-xs text-destructive mt-2">Please enter a valid email.</div>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Products</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/products#incident-autopilot" className="hover:text-primary">Incident Autopilot</a></li>
            <li><a href="/products#pipeline-intelligence" className="hover:text-primary">Pipeline Intelligence</a></li>
            <li><a href="/products#knowledge-graph" className="hover:text-primary">Knowledge Graph</a></li>
            <li><a href="/products#learning-hub" className="hover:text-primary">Learning Hub</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/company" className="hover:text-primary">About</a></li>
            <li><a href="/playbooks" className="hover:text-primary">DevOps Solutions</a></li>
            <li><a href="/careers" className="hover:text-primary">Careers</a></li>
            <li><a href="/resources" className="hover:text-primary">Resources</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/terms" className="hover:text-primary">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="/security" className="hover:text-primary">Security</a></li>
            <li><a href="/status" className="hover:text-primary">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-0 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} DevOpsCopilot. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="/cookies" className="hover:text-primary">Cookies</a>
            <a href="/accessibility" className="hover:text-primary">Accessibility</a>
            <a href="/sitemap" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
