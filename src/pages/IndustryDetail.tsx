import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import Seo from "@/components/Seo";

const IndustryDetail = () => {
  const { slug } = useParams();
  const { data } = useQuery({ queryKey: ["industry_detail", slug], queryFn: () => fetchContentstackData('industry_detail', { slug }) });

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Industry Not Found</h1>
          <p className="text-muted-foreground mt-2">We couldn't find this industry.</p>
          <Link to="/playbooks" className="text-primary">Back to DevOps Solutions</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${data.title} — DevOpsCopilot`} description={data.overview} />
      <div className="container py-16 space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-3">{data.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{data.overview}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 border border-border rounded-xl">
            <h2 className="text-xl font-semibold mb-3">Key challenges</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {(data.challenges || []).map((c: string, i: number) => (<li key={i}>{c}</li>))}
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-3">What you get</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {(data.features || []).map((f: string, i: number) => (<li key={i}>{f}</li>))}
            </ul>
          </div>
          <div className="p-6 border border-border rounded-xl">
            <h3 className="font-semibold mb-3">Insights</h3>
            <div className="space-y-2">
              {(data.insights || []).map((ins: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{ins.metric}</div>
                  <div className="text-sm text-muted-foreground">{ins.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                  window.dispatchEvent(ev);
                }}
                className="px-4 py-2 rounded-md border border-border hover:bg-accent/10"
              >
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDetail;
