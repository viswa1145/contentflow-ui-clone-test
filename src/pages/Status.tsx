import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, XCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Status = () => {
  // Mock status data - in production, this would come from a status API
  const services = [
    { name: "API Services", status: "operational", uptime: "99.9%" },
    { name: "Chat Interface", status: "operational", uptime: "99.8%" },
    { name: "Learning Hub", status: "operational", uptime: "99.7%" },
    { name: "Incident Autopilot", status: "operational", uptime: "99.9%" },
    { name: "Pipeline Intelligence", status: "operational", uptime: "99.8%" },
    { name: "Knowledge Graph", status: "operational", uptime: "99.9%" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "down":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">Operational</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">Degraded</Badge>;
      case "down":
        return <Badge className="bg-red-500/10 text-red-700 dark:text-red-400">Down</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Status — DevOpsCopilot" description="Real-time status of DevOpsCopilot services and infrastructure." />
      <div className="container py-20 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Service Status</h1>
          <p className="text-muted-foreground">
            Real-time status of DevOpsCopilot services and infrastructure.
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <div>
                <h2 className="text-xl font-semibold text-foreground">All Systems Operational</h2>
                <p className="text-sm text-muted-foreground">All services are running normally.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Service Status</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-medium text-foreground">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  {getStatusBadge(service.status)}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Recent Incidents</h2>
            <div className="text-center py-8 text-muted-foreground">
              <p>No recent incidents to report.</p>
              <p className="text-sm mt-2">All systems have been operating normally.</p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            For real-time updates, subscribe to our status page RSS feed or visit our{" "}
            <a href="/status" className="text-primary hover:underline">
              status page
            </a>{" "}
            for the latest service information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;

