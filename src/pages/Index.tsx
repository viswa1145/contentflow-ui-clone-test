import { HeroSection } from "@/components/HeroSection";
import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Bot,
  ChartLine,
  CloudCog,
  GraduationCap,
  Headset,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const featureHighlights = [
  {
    title: "Incident Autopilot",
    description:
      "Summarize alerts, recommend mitigation steps, route escalations, and log every action for postmortems.",
    icon: AlertTriangle,
    stat: "37% faster MTTR",
  },
  {
    title: "CI/CD Troubleshooting",
    description:
      "Explain failing builds with code-level insights, generate rollback plans, and push fixes directly from chat.",
    icon: Workflow,
    stat: "86% resolves without escalation",
  },
  {
    title: "Knowledge That Learns",
    description:
      "Sync runbooks, dashboards, repos, and alerts so the assistant always reflects your current architecture.",
    icon: Bot,
    stat: "1.2K automated answers / week",
  },
];

const automationPillars = [
  {
    title: "Observability-Aware Chat",
    points: [
      "Live log streaming & anomaly summaries",
      "Contextualizes alerts across PagerDuty, Datadog, Grafana",
      "Suggests next best action with confidence scoring",
    ],
    icon: CloudCog,
  },
  {
    title: "Guardrailed Automations",
    points: [
      "Pre-approved runbooks and safe scripting",
      "Role-based controls with audit logging",
      "Automatic follow-up tickets and notes",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Continuous Upskilling",
    points: [
      "Micro-courses for pipelines, Kubernetes, IaC",
      "Scenario-based labs aligned to your stack",
      "Skill analytics to target enablement gaps",
    ],
    icon: GraduationCap,
  },
];

const customerOutcomes = [
  { metric: "12x", label: "Faster onboarding for new engineers" },
  { metric: "92%", label: "Weekly active usage across platform teams" },
  { metric: "4.8★", label: "Developer satisfaction with AI assistant" },
  { metric: "18", label: "Turnkey integrations with your toolchain" },
];

const learningTracks = [
  {
    title: "DevOps Foundations",
    length: "2.5 hour path",
    description:
      "Core concepts, deployment strategies, and hands-on pipeline troubleshooting labs.",
  },
  {
    title: "SRE Chatbot Playbooks",
    length: "3 hour path",
    description:
      "Design conversational runbooks, integrate observability signals, and manage escalations via chat.",
  },
  {
    title: "Automation Essentials",
    length: "2 hour path",
    description:
      "Author safe automation scripts, enforce guardrails, and monitor remediation workflows.",
  },
];

const Index = () => {
  return (
    <div className="space-y-24 pb-24">
      <Seo
        title="DevOpsCopilot — AI Chatbot & Courses for DevOps Teams"
        description="Resolve incidents faster, onboard engineers with confidence, and keep institutional knowledge at your fingertips."
      />
      <HeroSection />

      <section className="container -mt-16 space-y-12">
        <Badge variant="secondary" className="bg-white text-primary shadow">
          Why DevOps Teams Choose DevOpsCopilot
        </Badge>
        <div className="grid gap-6 lg:grid-cols-3">
          {featureHighlights.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="border-primary/20 bg-background/95 backdrop-blur shadow-lg"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="border-primary/40 text-primary">
                      {feature.stat}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="container space-y-16">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="border-primary text-primary">
              Built for Platform & SRE Leaders
            </Badge>
            <h2 className="text-4xl font-semibold text-foreground">
              The AI Platform Copilot Your Engineers Actually Love
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
              We combine observability-aware chat, guardrailed automation, and guided
              learning paths so your team can prevent incidents, resolve issues faster,
              and share knowledge effortlessly.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {automationPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={pillar.title}
                  className="border border-dashed border-primary/30 bg-background/95 shadow-sm"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    {pillar.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <ChartLine className="mt-1 h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid gap-6 rounded-3xl bg-gradient-to-r from-primary to-primary/70 p-10 text-white md:grid-cols-4">
            {customerOutcomes.map((outcome) => (
              <div key={outcome.metric} className="space-y-1">
                <p className="text-4xl font-semibold">{outcome.metric}</p>
                <p className="text-sm text-white/80">{outcome.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-12">
        <div className="flex flex-col items-center text-center space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Guided Learning Tracks
          </Badge>
          <h2 className="text-4xl font-semibold text-foreground">
            Upskill Every Engineer With Hands-On DevOps Courses
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Pair the chatbot with immersive micro-courses and scenario-based labs
            tailored to your stack. Close skill gaps, standardize best practices, and
            keep teams confident during incidents.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {learningTracks.map((track) => (
            <Card key={track.title} className="border-muted shadow-sm">
              <CardHeader className="space-y-3">
                <Badge variant="outline" className="w-fit border-primary/40 text-primary">
                  {track.length}
                </Badge>
                <CardTitle className="text-2xl">{track.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {track.description}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-primary/30 bg-muted/40">
          <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl font-semibold text-foreground">
                See DevOpsCopilot in Your Environment
              </h3>
              <p className="text-muted-foreground">
                Launch a guided sandbox, connect your observability stack, and simulate
                real incidents with our team in under 30 minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => {
                const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                window.dispatchEvent(ev);
              }}>
                Schedule Live Demo
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="/contact">
                  <Headset className="h-4 w-4" />
                  Talk to an Engineer
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
