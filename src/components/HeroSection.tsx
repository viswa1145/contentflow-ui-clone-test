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

  // Use default hero content if loading or error
  const defaultHero = {
    headline: "Ship Confidently with Your DevOps Copilot",
    subheadline: "AI troubleshooting, runbook automation, and guided learning for high-velocity engineering teams.",
    description: "DevOpsCopilot synthesizes observability, runbooks, and source control so every engineer can resolve incidents, prevent regressions, and stay ahead of infrastructure changes.",
    cta_text: "Launch the Interactive Demo",
    cta_link: "/demo",
    background_image: {
      url: heroDashboard,
      alt: "DevOpsCopilot Dashboard",
    },
  };

  // Always use default hero immediately, merge with fetched data if available
  // This ensures content is always visible, never shows loading state
  const displayHero = hero ? { ...defaultHero, ...hero } : defaultHero;
  
  // Ensure background image always has a valid URL
  // Always use the imported heroDashboard unless we have a valid external Contentstack URL
  const getHeroImageUrl = (): string => {
    // Check if hero data has a valid external image URL from Contentstack
    const heroImageUrl = hero?.background_image?.url;
    
    // Only use external URL if it's a valid HTTPS URL from Contentstack
    if (heroImageUrl && 
        typeof heroImageUrl === 'string' && 
        heroImageUrl.startsWith('https://') &&
        heroImageUrl.includes('contentstack')) {
      const normalized = normalizeAssetUrl(heroImageUrl);
      // Use normalized if valid, otherwise fallback
      return normalized || heroDashboard;
    }
    
    // Always default to the imported image for reliability
    // This ensures the image always displays, even if Contentstack fails
    return heroDashboard;
  };
  
  const heroImageUrl = getHeroImageUrl();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 animate-pulse"></div>
      
      {/* Animated Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:60px_60px] opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
      
      <div className="container relative z-10 flex items-center min-h-screen py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AI-Powered DevOps Platform
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {displayHero.headline}
              </h1>
              <h2 className="text-2xl lg:text-3xl text-cyan-100 font-semibold leading-relaxed">
                {displayHero.subheadline}
              </h2>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed max-w-xl font-light">
              {displayHero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={(e) => {
                  e.preventDefault();
                  const ctaText = (displayHero.cta_text || '').toLowerCase();
                  const ctaLink = (displayHero.cta_link || '').toLowerCase();
                  
                  // Always open chatbot if:
                  // 1. Link is /demo or contains demo
                  // 2. Text contains demo, schedule, or interactive
                  const shouldOpenChatbot = 
                    ctaLink === '/demo' || 
                    ctaLink.includes('/demo') ||
                    ctaLink.includes('demo') ||
                    ctaText.includes('demo') || 
                    ctaText.includes('schedule') ||
                    ctaText.includes('interactive');
                  
                  // Always open chatbot for demo-related buttons
                  if (shouldOpenChatbot) {
                    // Dispatch the custom event to open the chatbot
                    const event = new CustomEvent('tc360:demo-chat', { 
                      detail: { open: true },
                      bubbles: true,
                      cancelable: true
                    });
                    window.dispatchEvent(event);
                    console.log('Opening demo chatbot - Button text:', displayHero.cta_text, 'Link:', displayHero.cta_link);
                  } else {
                    // Fallback to navigation only if not demo-related
                    if (displayHero.cta_link) {
                      window.location.href = displayHero.cta_link;
                    }
                  }
                }}
                className="text-lg px-10 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-orange-600 text-black font-bold shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-500/70 transform hover:scale-105 transition-all duration-300 rounded-xl"
              >
                {displayHero.cta_text}
              </Button>
            </div>

            {/* Trust Indicators - Only show if data is available, no loading state */}
            {trustIndicators && trustIndicators.length > 0 && (
              <div className="pt-8 border-t border-white/30 backdrop-blur-sm">
                <div className="flex items-center gap-6">
                  <span className="text-white/80 text-sm font-semibold whitespace-nowrap">Trusted by:</span>
                  <div className="logo-marquee">
                    <div className="logo-track">
                      {[...trustIndicators, ...trustIndicators].map((indicator: any, idx: number) => (
                        <div key={`${indicator.uid}_${idx}`} className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all">
                          <img
                            src={indicator.logo_url}
                            alt={indicator.company_name}
                            className="h-6 opacity-90 hover:opacity-100 transition-opacity"
                            onError={(e) => {
                              // Hide broken images
                              (e.currentTarget as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Dashboard Mockup */}
          <div className="relative w-full">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl transform scale-110"></div>
            
            <div className="relative z-10 w-full transform hover:scale-[1.02] transition-transform duration-500">
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm bg-white/5">
                <img
                  src={heroImageUrl}
                  alt={displayHero.background_image?.alt || "DevOpsCopilot Dashboard Interface"}
                  className="w-full h-auto object-contain"
                  onError={(e) => { 
                    // Fallback to imported image if URL fails
                    console.warn('Hero image failed to load, using fallback');
                    (e.currentTarget as HTMLImageElement).src = heroDashboard; 
                  }}
                  onLoad={() => {
                    console.log('Hero image loaded successfully:', heroImageUrl);
                  }}
                  loading="eager"
                  decoding="async"
                  style={{ minHeight: '300px', display: 'block' }}
                />
                {/* Shine overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine"></div>
              </div>
            </div>
            
            {/* Enhanced Floating Elements with Animation */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-400/40 to-pink-500/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 -right-12 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.75s' }}></div>
            
            {/* Floating Particles */}
            <div className="absolute top-20 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-float"></div>
            <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-40 left-24 w-2 h-2 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <div id="learn-more" className="container relative z-10 pb-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Recommended Case Studies</h3>
              <p className="text-white/70 text-sm mt-2">See how teams are transforming their DevOps practices</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((cs: any, idx: number) => (
                <a 
                  key={cs.uid} 
                  href={cs.link} 
                  className="group p-6 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/20 hover:to-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                      <img src={cs.logo_url} alt={cs.company_name} className="h-7" />
                    </div>
                  </div>
                  <div className="font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors text-lg">
                    {cs.title}
                  </div>
                  <div className="text-sm text-white/80 leading-relaxed">{cs.summary}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
    </section>
  );
};