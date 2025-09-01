import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Video, Phone, MessageSquare } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Schedule Your Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See Darwinbox in action. Book a personalized demo with our HR experts 
            and discover how we can transform your HR operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Work Email *
                </label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name *
                </label>
                <Input placeholder="Your Company" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company Size
                  </label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>1-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>500+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Industry
                  </label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>Technology</option>
                    <option>Manufacturing</option>
                    <option>Retail</option>
                    <option>Healthcare</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  What would you like to see in the demo?
                </label>
                <Textarea 
                  placeholder="Tell us about your specific HR challenges and what features you're most interested in..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                Schedule Demo
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service
              </p>
            </CardContent>
          </Card>

          {/* Demo Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">30-minute session</h4>
                    <p className="text-sm text-muted-foreground">Focused demo tailored to your needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">HR Expert Guide</h4>
                    <p className="text-sm text-muted-foreground">Personal walkthrough with our product specialist</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Live Demo</h4>
                    <p className="text-sm text-muted-foreground">See real features in action, not just slides</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Demo Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">AI-powered talent acquisition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Performance management workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Employee self-service portal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Integration capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">Need immediate help?</h3>
                    <p className="text-sm opacity-90">Chat with our sales team</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white/10">
                    <Phone className="h-4 w-4 mr-2" />
                    Call +1-800-DARWIN
                  </Button>
                  <Button variant="cta" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;