import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Building2, Cpu, Factory, ShoppingCart, Heart } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  cpu: <Cpu className="h-8 w-8" />,
  factory: <Factory className="h-8 w-8" />,
  shopping_cart: <ShoppingCart className="h-8 w-8" />,
  heart: <Heart className="h-8 w-8" />,
};

const Industries = () => {
  const { data } = useQuery({
    queryKey: ["industries_page"],
    queryFn: () => fetchContentstackData("industries_page"),
  });

  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {data.header_title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {data.header_subtitle}
          </p>
        </div>

        {/* Industries Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {data.industries.map((industry: any) => (
              <Card key={industry.uid} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg text-white">
                      {iconMap[industry.icon_key] ?? <Cpu className="h-8 w-8" />}
                    </div>
                    <Badge variant="outline">{industry.stats}</Badge>
                  </div>
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 group-hover:bg-primary-light transition-colors" variant="outline" asChild>
                    <a href={`/industries/${industry.title.toLowerCase().split(' ')[0]}`}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Solutions by Company Size</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.solutions.map((solution: any) => (
              <Card key={solution.uid} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Building2 className="h-12 w-12 text-primary" />
                  </div>
                  <Badge className="mx-auto w-fit mb-4">{solution.badge}</Badge>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <a href={`/solutions/${solution.badge.toLowerCase().includes('enterprise') ? 'enterprise' : solution.badge.toLowerCase().includes('popular') ? 'mid-market' : 'startup'}`}>Get Started</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{data.cta_section.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {data.cta_section.subtitle}
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href={data.cta_section.cta_link}>{data.cta_section.cta_text}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Industries;