import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Zap, Cpu, Factory, ShoppingCart, Heart } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      title: "Technology",
      description: "Scale your tech workforce with agile HR solutions",
      icon: <Cpu className="h-8 w-8" />,
      stats: "500+ Tech Companies",
      features: ["Remote Work Management", "Agile Performance Reviews", "Skills-based Hiring", "Retention Analytics"]
    },
    {
      title: "Manufacturing",
      description: "Optimize your industrial workforce operations",
      icon: <Factory className="h-8 w-8" />,
      stats: "200+ Manufacturing Plants",
      features: ["Shift Management", "Safety Compliance", "Blue-collar Engagement", "Production Analytics"]
    },
    {
      title: "Retail",
      description: "Manage distributed retail teams efficiently",
      icon: <ShoppingCart className="h-8 w-8" />,
      stats: "150+ Retail Chains",
      features: ["Store Operations", "Seasonal Hiring", "Customer Service Training", "Sales Performance"]
    },
    {
      title: "Healthcare",
      description: "Support healthcare professionals with specialized HR tools",
      icon: <Heart className="h-8 w-8" />,
      stats: "100+ Healthcare Organizations",
      features: ["Compliance Management", "Credentialing", "Schedule Optimization", "Patient Care Metrics"]
    }
  ];

  const solutions = [
    {
      title: "Enterprise Solutions",
      description: "Comprehensive HR platform for large organizations",
      badge: "Enterprise"
    },
    {
      title: "Mid-Market Solutions", 
      description: "Scalable HR tools for growing businesses",
      badge: "Popular"
    },
    {
      title: "Startup Solutions",
      description: "Essential HR tools for emerging companies",
      badge: "Startup"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Industries & Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored HR solutions for every industry. Experience the power of 
            specialized tools designed for your unique business needs.
          </p>
        </div>

        {/* Industries Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-hero rounded-lg text-white">
                      {industry.icon}
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
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 group-hover:bg-primary-light transition-colors" variant="outline">
                    Learn More
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
            {solutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Building2 className="h-12 w-12 text-primary" />
                  </div>
                  <Badge className="mx-auto w-fit mb-4">{solution.badge}</Badge>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <Users className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our flexible platform adapts to any industry. Let's discuss your specific needs.
          </p>
          <Button variant="cta" size="lg">
            Contact Our Experts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Industries;