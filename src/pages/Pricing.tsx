import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Shield, Globe, TrendingUp } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$5",
      period: "per employee/month",
      description: "Perfect for small teams getting started",
      badge: "",
      features: [
        "Core HR Management",
        "Employee Database",
        "Basic Reporting",
        "Mobile App Access",
        "Email Support",
        "Up to 50 employees"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$12",
      period: "per employee/month", 
      description: "Advanced features for growing businesses",
      badge: "Most Popular",
      features: [
        "Everything in Starter",
        "Performance Management",
        "Advanced Analytics",
        "Custom Workflows",
        "API Access",
        "Priority Support",
        "Up to 500 employees"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "Complete solution for large organizations",
      badge: "Enterprise",
      features: [
        "Everything in Professional",
        "AI-Powered Insights",
        "Advanced Security",
        "Custom Integrations",
        "Dedicated Success Manager",
        "SLA Guarantee",
        "Unlimited employees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "40% faster than traditional HR systems"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "SOC2 Type II and GDPR compliant"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Ready",
      description: "Multi-country payroll and compliance"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven ROI",
      description: "Average 300% ROI within first year"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your organization. Start your free trial today 
            and experience the difference AI-powered HR can make.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'border-primary shadow-card scale-105' : ''}`}>
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="py-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-light' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
              <p className="text-muted-foreground text-sm">Full access to all Professional features for 14 days. No credit card required.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
              <p className="text-muted-foreground text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a setup fee?</h3>
              <p className="text-muted-foreground text-sm">No setup fees for Starter and Professional plans. Enterprise plans include white-glove onboarding.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground text-sm">We accept all major credit cards, bank transfers, and can accommodate annual billing.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <Star className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using Darwinbox to transform their HR operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;