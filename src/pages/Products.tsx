import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Users, Zap, Shield, Globe, BarChart3, Cpu, Bot, BrainCircuit, Sparkles } from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  users: <Users className="h-8 w-8" />,
  zap: <Zap className="h-8 w-8" />,
  bar_chart: <BarChart3 className="h-8 w-8" />,
  shield: <Shield className="h-8 w-8" />,
  globe: <Globe className="h-8 w-8" />,
  cpu: <Cpu className="h-8 w-8" />,
  bot: <Bot className="h-8 w-8" />,
  brain: <BrainCircuit className="h-8 w-8" />,
  sparkles: <Sparkles className="h-8 w-8" />,
};

const Products = () => {
  const { data } = useQuery({
    queryKey: ["products_page"],
    queryFn: () => fetchContentstackData("products_page"),
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

        {/* Jump Bar */}
        <div className="sticky top-[64px] z-30 bg-background/90 backdrop-blur border-b border-border mb-6 py-2">
          <div className="flex gap-3 overflow-x-auto text-sm">
            {data.products.map((product: any) => (
              <a 
                key={product.uid} 
                href={`#${product.slug}`} 
                className="px-3 py-1 rounded-md border border-border hover:bg-accent/10 whitespace-nowrap"
              >
                {product.title}
              </a>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {data.products.map((product: any, index: number) => (
            <Card key={index} id={product.slug} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-hero dark:bg-gradient-to-br dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-lg text-white shadow-lg dark:shadow-blue-500/20">
                    {iconMap[product.icon_key] ?? <Users className="h-8 w-8" />}
                  </div>
                  {product.badge && <Badge variant="secondary">{product.badge}</Badge>}
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 dark:bg-primary/40 flex items-center justify-center flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary dark:bg-blue-400"></div>
                      </div>
                      <span className="text-foreground dark:text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 group-hover:bg-primary-light dark:group-hover:bg-primary/80 transition-colors" asChild>
                  <a href={product.learn_more_link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">{data.cta_section.title}</h2>
          <p className="text-xl mb-8 opacity-90">
            {data.cta_section.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={(e) => {
                e.preventDefault();
                const ctaText = (data.cta_section.primary_cta_text || '').toLowerCase();
                const ctaLink = (data.cta_section.primary_cta_link || '').toLowerCase();
                
                // Open chatbot if it's a demo/schedule link
                if (ctaLink === '/demo' || ctaLink.includes('demo') || ctaText.includes('demo') || ctaText.includes('schedule')) {
                  const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                  window.dispatchEvent(ev);
                } else {
                  window.location.href = data.cta_section.primary_cta_link;
                }
              }}
            >
              {data.cta_section.primary_cta_text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;