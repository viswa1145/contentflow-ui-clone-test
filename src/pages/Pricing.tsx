import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Check, Star, Zap, Shield, Globe, TrendingUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const iconMap: Record<string, JSX.Element> = {
  zap: <Zap className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
  trending_up: <TrendingUp className="h-6 w-6" />,
};

const Pricing = () => {
  const location = useLocation();
  const { data, isLoading, error } = useQuery({
    queryKey: ["pricing_page"],
    queryFn: async () => {
      try {
        const result = await fetchContentstackData("pricing_page");
        console.log("Pricing page data:", result);
        if (!result) {
          throw new Error("Pricing page data is null or undefined");
        }
        return result;
      } catch (err) {
        console.error("Error fetching pricing page:", err);
        throw err;
      }
    },
  });
  const { data: seasonal } = useQuery({
    queryKey: ["seasonal_theme"],
    queryFn: () => fetchContentstackData("seasonal_theme", { region: "in" } as any),
    staleTime: 1000 * 60 * 60,
  });
  // Fallback offer for testing via ?festival param when seasonal offer not configured
  const params = new URLSearchParams(location.search);
  const festivalParam = params.get('festival');
  let storedFestival: string | null = null;
  try { storedFestival = localStorage.getItem('tc360_festival'); } catch {}
  const effectiveFestival = festivalParam || storedFestival || null;
  const seasonalFallback: any = effectiveFestival && (!seasonal || !seasonal.offer_enabled)
    ? { offer_enabled: true, discount_percent: 20, badge_text: 'Festival Offer', promo_code: String(effectiveFestival).toUpperCase(), ends_at: new Date(Date.now() + 48*60*60*1000).toISOString() }
    : null;
  const seasonalToUse: any = seasonalFallback || seasonal;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading pricing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Pricing page error:", error);
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null) {
      errorMessage = JSON.stringify(error, null, 2);
    } else {
      errorMessage = String(error);
    }
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-destructive mb-2 font-semibold">Error loading pricing data</p>
          <p className="text-sm text-muted-foreground mb-4 font-mono text-xs break-all">{errorMessage}</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
          <p className="text-xs text-muted-foreground mt-4">Check browser console (F12) for more details</p>
        </div>
      </div>
    );
  }

  if (!data) {
    console.warn("Pricing page: data is null or undefined");
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No pricing data available</p>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </div>
      </div>
    );
  }

  const planAnchor = (plan: any) =>
    plan.slug ||
    String(plan.name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") ||
    "plan";

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
            {data.plans.map((plan: any) => (
              <a
                key={plan.uid}
                href={`#${planAnchor(plan)}`}
                className="px-3 py-1 rounded-md border border-border hover:bg-accent/10 whitespace-nowrap"
              >
                {plan.name}
              </a>
            ))}
            <a href="#highlights" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10 whitespace-nowrap">Highlights</a>
            <a href="#faqs" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10 whitespace-nowrap">FAQs</a>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {data.plans.map((plan: any) => {
            const offer = seasonalToUse?.offer_enabled ? seasonalToUse : null;
            // Discount any numeric (non-custom) price regardless of currency symbol or type
            let numeric: number | null = null;
            if (typeof plan.price === 'number') {
              numeric = plan.price;
            } else if (typeof plan.price === 'string') {
              const onlyNum = plan.price.replace(/[^\d.]/g, '');
              numeric = onlyNum ? Number(onlyNum) : null;
            }
            const isDiscounted = offer && typeof offer.discount_percent === 'number' && numeric != null;
            const discountedValue = isDiscounted && numeric != null ? Number((numeric * (1 - offer.discount_percent / 100)).toFixed(0)) : null;
            const discounted = discountedValue != null ? `$${discountedValue}` : null;
            const saving = isDiscounted && numeric != null ? `$${(numeric - (discountedValue || 0))}` : null;
            return (
            <Card id={planAnchor(plan)} key={plan.uid} className={`relative overflow-hidden hover:shadow-elegant transition-all duration-300 ${plan.popular ? 'border-primary shadow-card scale-105' : ''}`}>
              {isDiscounted && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-accent text-foreground">Save {offer.discount_percent}%</Badge>
                </div>
              )}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">
                    {offer?.badge_text && isDiscounted ? offer.badge_text : plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="py-4">
                  {isDiscounted && discounted ? (
                    <>
                      <div className="text-sm text-muted-foreground line-through">{plan.price} {plan.period}</div>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-5xl font-extrabold text-primary">{discounted}</span>
                        <span className="text-muted-foreground">{plan.period}</span>
                      </div>
                      {saving && (
                        <div className="text-xs text-foreground/80 mt-1">You save {saving}</div>
                      )}
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    </>
                  )}
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
                    const type = plan.lead_type || (String(plan.name).toLowerCase() === 'enterprise' ? 'contact' : 'trial');
                    const ev = new CustomEvent('tc360:lead', { detail: { type } });
                    window.dispatchEvent(ev);
                  }}
                >
                  {offer?.cta_primary && isDiscounted ? offer.cta_primary : plan.cta}
                </Button>
                {isDiscounted && seasonalToUse?.ends_at && (
                  <div className="text-xs text-muted-foreground text-center mt-3" id="festival">
                    Offer ends {new Date(seasonalToUse.ends_at).toLocaleString()} — Code: {seasonalToUse.promo_code}
                  </div>
                )}
              </CardContent>
            </Card>
            );
          })}
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