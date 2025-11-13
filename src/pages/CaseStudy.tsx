import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { ChevronLeft, Quote, CheckCircle2, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";

const CaseStudy = () => {
  const { slug } = useParams();

  const { data: caseStudies } = useQuery({
    queryKey: ["case_studies"],
    queryFn: () => fetchContentstackData("case_studies"),
  });

  const cs = (caseStudies || []).find((c: any) => c.slug === slug);

  const related = (caseStudies || [])
    .filter((c: any) => c.slug !== slug)
    .filter((c: any) => (cs?.industry ? c.industry === cs.industry : true) || (cs?.role ? c.role === cs.role : true))
    .slice(0, 3);

  if (!cs) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Case Study Not Found</h1>
          <p className="text-muted-foreground mt-2">The case study you're looking for does not exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-primary mt-4">
            <ChevronLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${cs.company_name} — Case Study`} description={cs.summary} ogImage={cs.hero_image_url} />
      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:50px_50px] dark:opacity-40"></div>
        <div className="relative">
          <img src={cs.hero_image_url} alt={`${cs.company_name} banner`} className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background dark:from-black/80 dark:via-black/60"></div>
          <div className="absolute inset-x-0 bottom-0">
            <div className="container pb-8">
              <nav className="text-xs text-white/80 mb-3">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/resources" className="hover:text-white">Case Studies</Link>
                <span className="mx-2">/</span>
                <span className="text-white/90">{cs.company_name}</span>
              </nav>
              <div className="rounded-2xl bg-black/50 dark:bg-black/30 backdrop-blur border border-white/20 dark:border-white/10 p-6 md:p-8 shadow-elegant">
                <div className="flex items-center gap-4 mb-4">
                  <img src={cs.logo_url} alt={cs.company_name} className="h-10 bg-white rounded p-1" />
                  <div className="text-white/90 text-sm">{cs.banner_kicker}</div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">{cs.title}</h1>
                <p className="text-white/80 mt-2 max-w-3xl">{cs.summary}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Stats */}
            {cs.stats && cs.stats.length > 0 && (
              <div className="grid sm:grid-cols-3 gap-4">
                {cs.stats.map((s: any, i: number) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border p-6 bg-gradient-to-b from-white/5 to-transparent backdrop-blur animate-fade-in-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="text-3xl font-bold text-primary">{s.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Highlights */}
            {cs.highlights && cs.highlights.length > 0 && (
              <div className="rounded-2xl border border-border p-6">
                <h2 className="text-xl font-semibold mb-4">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {cs.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-border/60">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <div className="text-foreground">{h}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quote */}
            {cs.quote && (
              <div className="rounded-2xl border border-border p-8 bg-gradient-to-r from-accent/10 to-accent/20">
                <div className="flex items-start gap-3">
                  <Quote className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <div className="text-2xl italic text-foreground">“{cs.quote.text}”</div>
                    <div className="text-sm text-muted-foreground mt-3">— {cs.quote.author}, {cs.quote.role}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Body Sections */}
            {cs.body_sections && cs.body_sections.length > 0 && (
              <div className="space-y-8">
                {cs.body_sections.map((sec: any, i: number) => (
                  <div key={i} className="rounded-2xl border border-border p-6 animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
                    <h3 className="text-xl font-semibold mb-2">{sec.heading}</h3>
                    <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border p-6 bg-background/60 backdrop-blur">
              <h4 className="font-semibold mb-3">Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Company</span>
                  <span className="text-foreground">{cs.company_name}</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Industry</span>
                  <span className="text-foreground capitalize">{cs.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role Focus</span>
                  <span className="text-foreground capitalize">{cs.role}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6 bg-gradient-hero text-white">
              <h4 className="font-semibold mb-2">See it in action</h4>
              <p className="text-white/90 text-sm mb-4">Book a personalized demo tailored to your industry and role.</p>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                  window.dispatchEvent(ev);
                }}
                className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
              >
                Schedule a Demo <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <h4 className="font-semibold mb-2">More case studies</h4>
              <Link to="/playbooks" className="text-primary text-sm inline-flex items-center gap-2">
                Browse DevOps Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related case studies */}
        {related.length > 0 && (
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-3">Related case studies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {related.map((r: any) => (
                <Link key={r.slug} to={r.link} className="p-4 rounded-lg border border-border hover:bg-accent/10 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <img src={r.logo_url} alt={r.company_name} className="h-6" />
                    <div className="text-xs text-muted-foreground capitalize">{r.industry} • {r.role}</div>
                  </div>
                  <div className="font-medium text-foreground mb-1">{r.title}</div>
                  <div className="text-xs text-muted-foreground">{r.summary}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudy;
