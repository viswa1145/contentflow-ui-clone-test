import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import Seo from "@/components/Seo";
import { Loader2 } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useQuery({ 
    queryKey: ["product_detail", slug], 
    queryFn: async () => {
      try {
        const result = await fetchContentstackData('product_detail', { slug });
        console.log("Product detail data:", result);
        if (!result) {
          throw new Error("Product not found");
        }
        return result;
      } catch (err) {
        console.error("Error fetching product detail:", err);
        throw err;
      }
    }
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20">
          <h1 className="text-3xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground mt-2">We couldn't find this product.</p>
          <Link to="/products" className="text-primary">Back to Products</Link>
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
            <h2 className="text-xl font-semibold mb-3">Capabilities</h2>
            <ul className="space-y-3">
              {(data.capabilities || []).map((c: any, i: number) => (
                <li key={i} className="border-b border-border pb-2">
                  <div className="font-medium text-foreground">{c.name}</div>
                  <div className="text-sm text-muted-foreground">{c.desc}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 border border-border rounded-xl">
            <h3 className="font-semibold mb-3">Highlights</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {(data.highlights || []).map((h: string, i: number) => (<li key={i}>{h}</li>))}
            </ul>
            <div className="mt-6 space-y-2">
              <a href="/pricing" className="block px-4 py-2 rounded-md border border-border hover:bg-accent/10">See pricing</a>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                  window.dispatchEvent(ev);
                }}
                className="w-full text-left px-4 py-2 rounded-md border border-border hover:bg-accent/10"
              >
                Schedule a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
