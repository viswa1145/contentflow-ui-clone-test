import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import Seo from "@/components/Seo";

const SolutionDetail = () => {
  const { slug } = useParams();
  const { data } = useQuery({ queryKey: ["solution_detail", slug], queryFn: () => fetchContentstackData('solution_detail', { slug }) });

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Solution Not Found</h1>
          <p className="text-muted-foreground mt-2">We couldn't find this solution.</p>
          <Link to="/industries" className="text-primary">Back to Industries</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Seo title={`${data.title} — TalentConnect360`} description={data.overview} />
      <div className="container py-16 space-y-10">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-3">{data.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{data.overview}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 border border-border rounded-xl">
            <h2 className="text-xl font-semibold mb-3">Capabilities</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {(data.capabilities || []).map((c: string, i: number) => (<li key={i}>{c}</li>))}
            </ul>
            <h2 className="text-xl font-semibold mt-6 mb-3">Outcomes</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {(data.outcomes || []).map((o: string, i: number) => (<li key={i}>{o}</li>))}
            </ul>
          </div>
          <div className="p-6 border border-border rounded-xl">
            <h3 className="font-semibold mb-3">Get started</h3>
            <div className="space-y-2">
              <a href="/pricing" className="block px-4 py-2 rounded-md border border-border hover:bg-accent/10">See pricing</a>
              <a href={`/demo`} className="block px-4 py-2 rounded-md border border-border hover:bg-accent/10">Schedule a demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
