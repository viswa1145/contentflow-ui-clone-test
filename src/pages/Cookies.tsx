import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Cookie Policy — DevOpsCopilot" description="Cookie Policy for DevOpsCopilot platform." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <Card>
          <CardContent className="pt-6 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies?</h2>
              <p>
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Cookies</h2>
              <p>
                We use cookies to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze how you use our services to improve performance</li>
                <li>Provide personalized content and features</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                  <p className="text-sm">Required for the website to function properly. These cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand how visitors interact with our website by collecting anonymous information.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Preference Cookies</h3>
                  <p className="text-sm">Remember your preferences and settings to provide a personalized experience.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">Managing Cookies</h2>
              <p>
                You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our services.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm mt-2">
                For questions about our cookie policy, please contact us at <a href="/contact" className="text-primary hover:underline">privacy@devopscopilot.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cookies;

