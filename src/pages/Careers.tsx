import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const Careers = () => {
  const { data, isLoading, error } = useQuery({ 
    queryKey: ["careers_page"], 
    queryFn: async () => {
      try {
        const result = await fetchContentstackData('careers_page');
        console.log("Careers page data:", result);
        return result;
      } catch (err) {
        console.error("Error fetching careers page:", err);
        throw err;
      }
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading careers...</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Careers page error:", error);
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Error loading careers page</p>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!data) {
    console.warn("Careers page: data is null or undefined");
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">No careers data available</p>
          <Button onClick={() => window.location.reload()}>Reload</Button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Seo title={(data.header_title || 'Careers') + ' — DevOpsCopilot'} description={data.header_subtitle} />
      <div className="container py-20 space-y-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{data.header_title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{data.header_subtitle}</p>
          <p className="text-sm text-muted-foreground mt-2">{data.intro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {(data.jobs || []).map((job: any) => (
            <Card key={job.slug} className="hover:shadow-elegant transition">
              <CardHeader>
                <CardTitle className="text-xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center justify-between">
                  <div>{job.location}</div>
                  <div>{job.type}</div>
                </div>
                <div className="text-foreground">{job.department}</div>
                <div className="flex gap-2 pt-3">
                  <Button variant="outline" asChild>
                    <a href={`/careers/${job.slug}`}>View details</a>
                  </Button>
                  <Button onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'job', job: { slug: job.slug, title: job.title } } }); window.dispatchEvent(ev); }}>Apply</Button>
                  <Button variant="outline" asChild>
                    <a href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title + ' DevOpsCopilot')}`} target="_blank" rel="noreferrer">Apply via LinkedIn</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
