import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Privacy Policy — DevOpsCopilot" description="Privacy Policy for DevOpsCopilot platform." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <Card>
          <CardContent className="pt-6 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including account information, usage data, and technical information when you use DevOpsCopilot services.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and ensure security.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with service providers who assist us in operating our platform, subject to confidentiality obligations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm mt-2">
                For privacy-related inquiries, please contact us at <a href="/contact" className="text-primary hover:underline">privacy@devopscopilot.com</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;

