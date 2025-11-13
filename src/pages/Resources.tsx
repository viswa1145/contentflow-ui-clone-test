import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import Seo from "@/components/Seo";

const Resources = () => {
  const { data } = useQuery({ queryKey: ["resources_page"], queryFn: () => fetchContentstackData("resources_page") });
  return (
    <div className="min-h-screen bg-background">
      <Seo title={(data?.header_title || 'Resources') + ' — DevOpsCopilot'} description={data?.header_subtitle} />
      <div className="container py-20 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{data?.header_title || 'Resources'}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{data?.header_subtitle || 'Guides, reports, and customer stories to help you get the most from DevOpsCopilot.'}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {(data?.categories || []).map((cat: any, i: number) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{cat.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="space-y-2 text-sm">
                  {(cat.items || []).map((it: any, j: number) => (
                    <li key={j}><a href={it.link} className="hover:text-primary">{it.title}</a></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
