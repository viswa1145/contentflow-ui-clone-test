import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Zap, Shield, Globe, BarChart3 } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Core HR",
      description: "Complete HR management solution for modern organizations",
      features: ["Employee Database", "Attendance Management", "Leave Management", "Document Management"],
      icon: <Users className="h-8 w-8" />,
      badge: "Popular"
    },
    {
      title: "Talent Acquisition",
      description: "Smart recruiting platform powered by AI",
      features: ["AI-Powered Sourcing", "Interview Scheduling", "Candidate Tracking", "Offer Management"],
      icon: <Zap className="h-8 w-8" />,
      badge: "AI Powered"
    },
    {
      title: "Performance Management",
      description: "Drive employee performance and growth",
      features: ["Goal Setting", "Performance Reviews", "360 Feedback", "Development Plans"],
      icon: <BarChart3 className="h-8 w-8" />,
      badge: "New"
    },
    {
      title: "Analytics & Insights",
      description: "Data-driven HR decisions with powerful analytics",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Compliance Tracking"],
      icon: <Shield className="h-8 w-8" />,
      badge: "Enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive HR solutions designed for the modern workplace. 
            Build, scale and deliver your HR processes with AI-powered efficiency.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-elegant transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-hero rounded-lg text-white">
                    {product.icon}
                  </div>
                  <Badge variant="secondary">{product.badge}</Badge>
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 group-hover:bg-primary-light transition-colors" asChild>
                  <a href="#learn-more">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
          <Globe className="h-16 w-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your HR?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies using Darwinbox to revolutionize their HR processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Schedule a Demo
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;