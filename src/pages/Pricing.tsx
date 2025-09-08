import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Check, Star, Zap, Shield, Globe, TrendingUp } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  zap: <Zap className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  trending_up: <TrendingUp className="h-6 w-6" />,
};

const Pricing = () => {
  const { data } = useQuery({
    queryKey: ["pricing_page"],
    queryFn: () => fetchContentstackData("pricing_page"),
  });

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {data.header_title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.header_subtitle}
          </p>
        </div>

        {/* Jump Bar */}
        <div className="sticky top-[64px] z-30 bg-background/90 backdrop-blur border-b border-border mb-6 py-2">
          <div className="flex gap-3 overflow-x-auto text-sm">
            <a href="#starter" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Starter</a>
            <a href="#professional" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Professional</a>
            <a href="#enterprise" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Enterprise</a>
            <a href="#highlights" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Highlights</a>
            <a href="#faqs" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">FAQs</a>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.plans.map((plan: any) => (
            <Card id={plan.name.toLowerCase()} key={plan.uid} className={`relative overflow-hidden hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'border-primary shadow-card scale-105' : ''}`}>
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
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-light' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => {
                    const type = plan.name.toLowerCase() === 'enterprise' ? 'contact' : 'trial';
                    const ev = new CustomEvent('tc360:lead', { detail: { type } });
                    window.dispatchEvent(ev);
                  }}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div id="highlights" className="grid md:grid-cols-4 gap-6 mb-16">
          {data.highlights.map((feature: any) => (
            <div key={feature.uid} className="text-center p-6">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary mb-4">
                {iconMap[feature.icon_key] ?? <Star className="h-6 w-6" />}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.faqs.map((faq: any) => (
              <div key={faq.uid}>
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <Star className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">{data.cta_section.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {data.cta_section.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'trial' } }); window.dispatchEvent(ev); }}>
              {data.cta_section.primary_text}
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'contact' } }); window.dispatchEvent(ev); }}>
              {data.cta_section.secondary_text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;