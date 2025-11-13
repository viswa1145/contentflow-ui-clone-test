import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Terms of Service — DevOpsCopilot" description="Terms of Service for DevOpsCopilot platform." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <Card>
          <CardContent className="pt-6 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using DevOpsCopilot, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily use DevOpsCopilot for personal and commercial purposes. This license shall automatically terminate if you violate any of these restrictions.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Service Availability</h2>
              <p>
                We strive to maintain high availability of our services but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services with reasonable notice.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use our services in compliance with applicable laws and regulations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                DevOpsCopilot shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm mt-2">
                If you have questions about these Terms, please contact us at <a href="/contact" className="text-primary hover:underline">legal@devopscopilot.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;

