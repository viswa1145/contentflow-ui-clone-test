import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import Seo from "@/components/Seo";

const Company = () => {
  const { data } = useQuery({ queryKey: ["about_page"], queryFn: () => fetchContentstackData("about_page") });
  return (
    <div className="min-h-screen bg-background">
      <Seo title={(data?.header_title || "About TalentConnect360") + " — TalentConnect360"} description={data?.header_subtitle} />
      <div className="container py-20 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{data?.header_title || 'About TalentConnect360'}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{data?.header_subtitle || 'Building the most human-centric HR platform to connect, engage, and grow talent worldwide.'}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{data?.mission || 'Empower organizations to deliver exceptional employee experiences with AI-powered HR.'}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              {(data?.values || []).map((v: any, i: number) => (
                <div key={i}>
                  <div className="font-medium text-foreground">{v.title}</div>
                  <div className="text-sm text-muted-foreground">{v.description}</div>
                </div>
              ))}
              {!data?.values && (
                <div>Customer obsession, craftsmanship, integrity, and inclusive growth.</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Global Footprint</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Serving customers across regions with a distributed, diverse team.
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Leadership</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              {(data?.leadership || []).map((l: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <div>{l.name}</div>
                  <div className="text-sm text-muted-foreground">{l.role}</div>
                </div>
              ))}
              {!data?.leadership && (
                <div>Meet the team leading our product, engineering, and customer success.</div>
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Careers</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We're hiring across functions. Join us to build the future of work.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Company;
