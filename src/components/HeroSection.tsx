import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { usePersonalization } from "@/hooks/usePersonalization";
import { normalizeAssetUrl } from "@/lib/utils";

export const HeroSection = () => {
  const { industryType, role } = usePersonalization();
  const { data: hero, isLoading: heroLoading, error: heroError } = useQuery({
    queryKey: ['hero_section', industryType, role],
    queryFn: () => fetchContentstackData('hero_section', { industryType, role }),
  });

  const { data: trustIndicators, isLoading: trustLoading } = useQuery({
    queryKey: ['trust_indicators'],
    queryFn: () => fetchContentstackData('trust_indicators'),
  });

  const { data: caseStudies } = useQuery({
    queryKey: ['case_studies', industryType, role],
    queryFn: () => fetchContentstackData('case_studies', { industryType, role }),
  });

  const isPersonalized = Boolean(industryType || role);
  const clearPersonalization = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('industrytype');
    url.searchParams.delete('role');
    window.location.href = url.toString();
  };

  if (heroLoading) {
    return (
      <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
        <div className="container relative z-10 flex items-center min-h-screen py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6">
              <div className="h-10 w-2/3 bg-white/20 rounded animate-pulse" />
              <div className="h-6 w-1/2 bg-white/10 rounded animate-pulse" />
              <div className="h-20 w-3/4 bg-white/10 rounded animate-pulse" />
              <div className="flex gap-3">
                <div className="h-10 w-32 bg-white/10 rounded animate-pulse" />
                <div className="h-10 w-32 bg-white/10 rounded animate-pulse" />
              </div>
            </div>
            <div className="h-64 bg-white/10 rounded-2xl shadow animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (heroError || !hero) return null;

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:50px_50px] opacity-20"></div>
      
      <div className="container relative z-10 flex items-center min-h-screen py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                {hero.headline}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/90 font-light">
                {hero.subheadline}
              </h2>
            </div>
            
            <p className="text-lg text-white/80 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href={hero.cta_link} className="text-lg px-8 py-4">
                  {hero.cta_text}
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <a href="#learn-more" className="text-lg px-8 py-4">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            {trustIndicators && trustIndicators.length > 0 && (
              <div className="pt-8 border-t border-white/20">
                <div className="flex items-center space-x-6">
                  <span className="text-white/70 text-sm font-medium">Trusted by:</span>
                  {trustIndicators.map((indicator: any) => (
                    <div key={indicator.uid} className="flex items-center space-x-2">
                      <img
                        src={indicator.logo_url}
                        alt={indicator.company_name}
                        className="h-8 opacity-80 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {trustLoading && (
              <div className="pt-8 border-t border-white/20">
                <div className="flex items-center space-x-6">
                  <span className="text-white/70 text-sm font-medium">Trusted by:</span>
                  <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
                  <div className="h-8 w-24 bg-white/10 rounded animate-pulse" />
                </div>
              </div>
            )}
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative animate-float">
            <div className="relative z-10">
              <img
                src={normalizeAssetUrl(hero?.background_image?.url) || heroDashboard}
                alt={hero?.background_image?.alt || "TalentConnect360 HR Dashboard Interface"}
                className="w-full h-auto rounded-2xl shadow-elegant"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroDashboard; }}
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <div className="container relative z-10 pb-16">
          <div className="bg-background/80 backdrop-blur rounded-xl border border-border p-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-foreground">Recommended Case Studies</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((cs: any, idx: number) => (
                <a key={cs.uid} href={cs.link} className="group p-5 rounded-xl border border-border bg-gradient-to-br from-accent/5 to-transparent hover:from-primary/10 hover:to-accent/10 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded bg-gradient-hero flex items-center justify-center shadow">
                      <img src={cs.logo_url} alt={cs.company_name} className="h-6" />
                    </div>
                  </div>
                  <div className="font-medium text-foreground mb-1 group-hover:text-primary">
                    {cs.title}
                  </div>
                  <div className="text-sm text-muted-foreground">{cs.summary}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};