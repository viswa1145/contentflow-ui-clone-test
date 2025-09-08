import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const Careers = () => {
  const { data } = useQuery({ queryKey: ["careers_page"], queryFn: () => fetchContentstackData('careers_page') });
  if (!data) return null;
  return (
    <div className="min-h-screen bg-background">
      <Seo title={(data.header_title || 'Careers') + ' — TalentConnect360'} description={data.header_subtitle} />
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
                    <a href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title + ' TalentConnect360')}`} target="_blank" rel="noreferrer">Apply via LinkedIn</a>
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
