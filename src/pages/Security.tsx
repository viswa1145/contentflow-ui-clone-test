import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, CheckCircle2 } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo title="Security — DevOpsCopilot" description="Security practices and certifications for DevOpsCopilot platform." />
      <div className="container py-20 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Security</h1>
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using industry-standard AES-256 encryption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Access Controls</h3>
                  <p className="text-sm text-muted-foreground">
                    Role-based access control (RBAC) ensures users only have access to the resources they need. Multi-factor authentication (MFA) is supported.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Eye className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security Monitoring</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous security monitoring and automated threat detection help protect your infrastructure and data.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain compliance with SOC 2 Type II, ISO 27001, and GDPR requirements. Regular security audits and penetration testing are conducted.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Security Best Practices</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Automated security scanning in CI/CD pipelines</li>
                  <li>Incident response procedures and security playbooks</li>
                  <li>Employee security training and awareness programs</li>
                  <li>Third-party security assessments and penetration testing</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Reporting Security Issues</h2>
                <p>
                  If you discover a security vulnerability, please report it to <a href="mailto:security@devopscopilot.com" className="text-primary hover:underline">security@devopscopilot.com</a>. We appreciate responsible disclosure and will work with you to address any issues promptly.
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

export default Security;

