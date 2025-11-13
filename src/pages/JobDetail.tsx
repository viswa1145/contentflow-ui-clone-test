import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

const JobDetail = () => {
  const { slug } = useParams();
  const { data } = useQuery({ queryKey: ["job_detail", slug], queryFn: () => fetchContentstackData('job_detail', { slug }) });
  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Job Not Found</h1>
          <Link to="/careers" className="text-primary">Back to Careers</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${data.title} — Careers at DevOpsCopilot`} description={data.overview} />
      <div className="container py-16 space-y-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">{data.title}</h1>
            <div className="text-sm text-muted-foreground">{data.location} • {data.type} • {data.department}</div>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'job', job: { slug: data.slug, title: data.title } } }); window.dispatchEvent(ev); }}>Apply</Button>
            <Button variant="outline" asChild>
              <a href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(data.title + ' DevOpsCopilot')}`} target="_blank" rel="noreferrer">Apply via LinkedIn</a>
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 border border-border rounded-xl space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-muted-foreground">{data.overview}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {(data.responsibilities || []).map((r: string, i: number) => (<li key={i}>{r}</li>))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Requirements</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {(data.requirements || []).map((r: string, i: number) => (<li key={i}>{r}</li>))}
              </ul>
            </div>
          </div>
          <div className="p-6 border border-border rounded-xl">
            <h3 className="font-semibold mb-3">Ready to apply?</h3>
            <div className="space-y-2">
              <Button className="w-full" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'job', job: { slug: data.slug, title: data.title } } }); window.dispatchEvent(ev); }}>Apply Now</Button>
              <Button className="w-full" variant="outline" asChild>
                <a href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(data.title + ' DevOpsCopilot')}`} target="_blank" rel="noreferrer">Apply via LinkedIn</a>
              </Button>
              <a href="/careers" className="text-sm text-primary inline-block mt-2">Back to Careers</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
