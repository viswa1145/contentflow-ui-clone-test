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
            <div className="h-8 w-8 rounded bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-bold text-xl text-foreground">TalentConnect360</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered HR platform to connect, engage, and grow your talent.
          </p>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-primary"><Youtube className="h-5 w-5" /></a>
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
            <li><a href="/products#core-hr" className="hover:text-primary">Core HR</a></li>
            <li><a href="/products#talent" className="hover:text-primary">Talent Acquisition</a></li>
            <li><a href="/products#performance" className="hover:text-primary">Performance</a></li>
            <li><a href="/products#analytics" className="hover:text-primary">Analytics</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="/company" className="hover:text-primary">About</a></li>
            <li><a href="/resources" className="hover:text-primary">Resources</a></li>
            <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            <li><a href="/pricing" className="hover:text-primary">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary">Security</a></li>
            <li><a href="#" className="hover:text-primary">Status</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:gap-0 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} TalentConnect360. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Cookies</a>
            <a href="#" className="hover:text-primary">Accessibility</a>
            <a href="#" className="hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
