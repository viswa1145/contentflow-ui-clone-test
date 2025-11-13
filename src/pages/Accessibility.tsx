import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Accessibility — DevOpsCopilot" description="Accessibility statement and commitment for DevOpsCopilot platform." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Accessibility</h1>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Our Commitment</h2>
                <p className="text-muted-foreground">
                  DevOpsCopilot is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Accessibility Standards</h2>
                <p>
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. Our efforts include:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>Providing alternative text for images and visual content</li>
                  <li>Ensuring keyboard navigation throughout the site</li>
                  <li>Maintaining sufficient color contrast ratios</li>
                  <li>Using semantic HTML and ARIA labels where appropriate</li>
                  <li>Supporting screen readers and assistive technologies</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Feedback</h2>
                <p>
                  We welcome your feedback on the accessibility of DevOpsCopilot. If you encounter accessibility barriers, please contact us at <a href="mailto:accessibility@devopscopilot.com" className="text-primary hover:underline">accessibility@devopscopilot.com</a> or through our <a href="/contact" className="text-primary hover:underline">contact page</a>.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Ongoing Improvements</h2>
                <p>
                  We regularly review and update our website to improve accessibility. Our development process includes accessibility testing and we work with accessibility experts to ensure compliance.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Accessibility;

