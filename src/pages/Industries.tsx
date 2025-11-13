import type { SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Cpu,
  Factory,
  Gamepad2,
  LifeBuoy,
  LineChart,
  ServerCog,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const useCases = [
  {
    title: "Incident Response Copilot",
    description:
      "Guide engineers through on-call runbooks, escalation paths, and service health without digging through docs.",
    icon: LifeBuoy,
    bulletPoints: [
      "Summarize alerts across PagerDuty, Slack, and Grafana",
      "Recommend mitigation steps based on past incidents",
      "Auto-document post-incident timelines",
    ],
  },
  {
    title: "CI/CD Pipeline Troubleshooting",
    description:
      "Surface the root cause of failed builds with suggested fixes, code context, and known-good configurations.",
    icon: ServerCog,
    bulletPoints: [
      "Explain failing steps with build log highlights",
      "Propose rollback or hotfix commands",
      "Escalate to owners with context-rich updates",
    ],
  },
  {
    title: "Cloud Cost Optimization",
    description:
      "Answer day-to-day questions about infrastructure spend and recommend guardrails to keep budgets on track.",
    icon: CloudCog,
    bulletPoints: [
      "Identify runaway workloads in real time",
      "Model savings from rightsizing instances",
      "Trigger automation to enforce policies",
    ],
  },
];

const courses = [
  {
    title: "DevOps Foundations",
    level: "Beginner • 2.5 hours",
    outcomes: [
      "Understand CI/CD pipelines and deployment stages",
      "Learn version control branching strategies",
      "Practice common troubleshooting workflows",
    ],
  },
  {
    title: "Chatbot Playbooks for SRE",
    level: "Intermediate • 3 hours",
    outcomes: [
      "Design conversational runbooks for on-call rotations",
      "Integrate observability tools with AI-based prompts",
      "Automate escalation and knowledge capture",
    ],
  },
  {
    title: "Automation Essentials",
    level: "Beginner • 2 hours",
    outcomes: [
      "Author reusable scripts for infrastructure fixes",
      "Implement guardrails with policy-as-code",
      "Monitor workflows with automated alerts",
    ],
  },
];

const benefits = [
  {
    title: "Faster Incident Resolution",
    description:
      "Reduce mean time to resolution by 37% with guided triage and auto-generated remediation steps.",
    icon: CheckCircle2,
  },
  {
    title: "Onboard In Weeks, Not Months",
    description:
      "New hires ramp quickly with conversational explanations of pipelines, environments, and team norms.",
    icon: Users,
  },
  {
    title: "Knowledge That Stays Current",
    description:
      "Continuously sync with your wikis, dashboards, and repos so every answer reflects the latest state.",
    icon: BrainCircuit,
  },
  {
    title: "Secure And Compliant",
    description:
      "Role-based guardrails ensure only approved fixes run in production, with full audit history.",
    icon: ShieldIcon,
  },
];

const industrySegments = [
  {
    slug: "saas-cloud",
    title: "SaaS & Cloud Platforms",
    description:
      "Keep multi-region services reliable with AI-assisted incident response and observability-aware automations.",
    icon: CloudCog,
    focusAreas: [
      "PagerDuty + Datadog context",
      "Rollback & canary workflows",
      "Customer-impact summaries",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services & Fintech",
    description:
      "Meet regulatory guardrails while accelerating releases with audit-ready evidence captured automatically.",
    icon: Shield,
    focusAreas: [
      "Policy-aware deploy gates",
      "Automated control checks",
      "Instant audit timelines",
    ],
  },
  {
    slug: "media-gaming",
    title: "Media, Streaming & Gaming",
    description:
      "Absorb traffic spikes, protect latency, and enable hybrid teams with guided runbooks built for live events.",
    icon: Gamepad2,
    focusAreas: [
      "Real-time QoS monitoring",
      "Edge cache playbooks",
      "Live ops command center",
    ],
  },
  {
    slug: "manufacturing-iot",
    title: "Manufacturing & IoT",
    description:
      "Unify OT and IT telemetry to detect anomalies early and keep production lines running without surprises.",
    icon: Factory,
    focusAreas: [
      "Edge device health",
      "Predictive maintenance alerts",
      "Digital runbooks for OT teams",
    ],
  },
  {
    slug: "mlops",
    title: "MLOps",
    description:
      "Streamline machine learning workflows from training to deployment with automated model monitoring and drift detection.",
    icon: BrainCircuit,
    focusAreas: [
      "Model versioning & tracking",
      "Automated retraining pipelines",
      "Production model monitoring",
    ],
  },
  {
    slug: "llmops",
    title: "LLMOps",
    description:
      "Operationalize large language models with prompt engineering workflows, fine-tuning pipelines, and production monitoring.",
    icon: Sparkles,
    focusAreas: [
      "Prompt versioning & A/B testing",
      "Fine-tuning automation",
      "LLM performance monitoring",
    ],
  },
];

const testimonials = [
  {
    quote:
      "We cut overnight pages in half because our chatbot handles 80% of tier-one triage. Engineers finally get to focus on impactful work.",
    name: "Priya Deshmukh",
    role: "Director of Platform Engineering, Flywheel",
  },
  {
    quote:
      "The DevOps basics track gave our support engineers the confidence to debug CI issues without relying on senior staff.",
    name: "Ruben Flores",
    role: "Head of Developer Experience, Nimbus Labs",
  },
];

const demoQuestions = [
  {
    question: "Pipeline failing on deploy step — what changed?",
    answer:
      "Latest failure triggered after container image update to v2.4. Roll back to v2.3 or apply patch #412. Error originates from missing IAM permission on deploy role.",
  },
  {
    question: "How do I rotate staging secrets safely?",
    answer:
      "Use the `rotate-staging-secrets` workflow. It validates in staging, updates Vault, and restarts affected services with zero downtime.",
  },
  {
    question: "What’s the SLA for the payments API?",
    answer:
      "Payments API targets 99.95% availability with 250ms p95 latency. Escalate to the Payments SRE squad if errors exceed 5% for 10 minutes.",
  },
];

function Industries() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-muted/40">
        <div className="container py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <Badge className="w-fit bg-primary/10 text-primary">
                DevOps Solutions
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  AI Chatbot & Courses For High-Velocity DevOps Teams
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Resolve incidents faster, onboard new engineers with confidence,
                  and keep institutional knowledge at everyone’s fingertips with
                  DevOpsCopilot's DevOps assistant.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button 
                  size="lg" 
                  onClick={(e) => {
                    e.preventDefault();
                    const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                    window.dispatchEvent(ev);
                  }}
                >
                  Launch Interactive Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/courses/devops-foundations">Browse DevOps Courses</a>
                </Button>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <StatCard
                  title="MTTR Reduction"
                  value="37%"
                  description="Average improvement after 60 days."
                />
                <StatCard
                  title="Automated Answers"
                  value="1.2K"
                  description="Knowledge-backed responses per week."
                />
                <StatCard
                  title="Engineer Adoption"
                  value="92%"
                  description="Teams use the chatbot every on-call shift."
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />
              <Card className="relative overflow-hidden border-0 bg-card/90 shadow-elegant backdrop-blur">
                <CardHeader className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    Chatbot Preview
                  </Badge>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Bot className="h-6 w-6 text-primary" />
                    Resolve "Pipeline Failed" in Minutes
                  </CardTitle>
                  <CardDescription>
                    See how the assistant guides engineers through a failing
                    deployment with context-aware suggestions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <ConversationBubble
                    from="Engineer"
                    message="Our deploy pipeline just failed on production. Can you help?"
                  />
                  <ConversationBubble
                    from="DevOpsCopilot"
                    message="Sure. The `deploy-prod` job failed because the container image digest mismatched the expected checksum. Shall I rerun with the previous version or apply the patch?"
                    variant="bot"
                  />
                  <ConversationBubble
                    from="Engineer"
                    message="Roll it back for now and file a follow-up ticket."
                  />
                  <ConversationBubble
                    from="DevOpsCopilot"
                    message="Rollback executed. Created ticket DEVOPS-482 with full timeline and linked dashboards."
                    variant="bot"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container space-y-24 py-20">
        <SectionHeader
          title="DevOps Solutions Tailored To Your Stack"
          description="Choose the copilots and learning paths that match your environment—DevOpsCopilot adapts to the telemetry, guardrails, and workflows your teams rely on."
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {industrySegments.map((segment) => {
            const Icon = segment.icon;
            return (
              <Card
                key={segment.title}
                id={segment.slug}
                className="border-primary/20 bg-background/95 shadow-lg"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-2xl">{segment.title}</CardTitle>
                  </div>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {segment.focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>{area}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <SectionHeader
          title="Built To Support Every Stage Of DevOps Maturity"
          description="Combine on-demand learning with an AI teammate that knows your stack, runbooks, and guardrails."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title} className="relative h-full border-muted shadow-sm transition hover:-translate-y-1 hover:shadow-elevated">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {useCase.bulletPoints.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Sparkles className="mt-1 h-4 w-4 text-primary" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <SectionHeader
          title="Comprehensive DevOps Tools & Learning Paths"
          description="Master infrastructure, CI/CD, monitoring, and AI/ML operations with guided paths and AI-powered troubleshooting."
        />
        
        {/* Tools & Technologies Section */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Infrastructure & Orchestration Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ServerCog className="h-5 w-5 text-primary" />
                    Terraform
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Infrastructure as Code (IaC) for provisioning and managing cloud resources.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Basic syntax and HCL</li>
                      <li>State management</li>
                      <li>Modules and workspaces</li>
                      <li>Cloud provider integration</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>State file conflicts</li>
                      <li>Provider authentication</li>
                      <li>Resource dependencies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudCog className="h-5 w-5 text-primary" />
                    Kubernetes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Container orchestration platform for deploying, scaling, and managing applications.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Pods, Deployments, Services</li>
                      <li>ConfigMaps and Secrets</li>
                      <li>Ingress and networking</li>
                      <li>Helm charts and operators</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Pod scheduling failures</li>
                      <li>Image pull errors</li>
                      <li>Resource limits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    Ansible
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Automation tool for configuration management, application deployment, and orchestration.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Playbooks and tasks</li>
                      <li>Inventory management</li>
                      <li>Roles and collections</li>
                      <li>Ansible Vault</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>SSH connection failures</li>
                      <li>Module execution errors</li>
                      <li>Variable precedence</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Linux & Shell Scripting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Essential skills for system administration and automation.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>File system and permissions</li>
                      <li>Process management</li>
                      <li>Bash scripting basics</li>
                      <li>Systemd and services</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Permission denied errors</li>
                      <li>Script execution failures</li>
                      <li>Path and environment issues</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Cloud Platforms */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Cloud Platforms</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudCog className="h-5 w-5 text-primary" />
                    AWS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Amazon Web Services - Comprehensive cloud computing platform.</p>
                  <div>
                    <p className="font-semibold mb-2">Key Services:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>EC2, S3, RDS</li>
                      <li>EKS (Kubernetes)</li>
                      <li>CloudFormation</li>
                      <li>CloudWatch monitoring</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Troubleshooting:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>IAM permission issues</li>
                      <li>VPC networking</li>
                      <li>Resource limits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudCog className="h-5 w-5 text-primary" />
                    Azure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Microsoft Azure - Enterprise cloud platform with integrated services.</p>
                  <div>
                    <p className="font-semibold mb-2">Key Services:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Virtual Machines</li>
                      <li>AKS (Kubernetes)</li>
                      <li>ARM Templates</li>
                      <li>Azure Monitor</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Troubleshooting:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>RBAC configuration</li>
                      <li>Network security groups</li>
                      <li>Resource quotas</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CloudCog className="h-5 w-5 text-primary" />
                    GKE (Google Cloud)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Google Kubernetes Engine - Managed Kubernetes service.</p>
                  <div>
                    <p className="font-semibold mb-2">Key Services:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>GKE clusters</li>
                      <li>Cloud Build</li>
                      <li>Cloud Monitoring</li>
                      <li>Cloud Storage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Troubleshooting:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Cluster connectivity</li>
                      <li>Node pool issues</li>
                      <li>IAM bindings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Monitoring Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Monitoring & Observability</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-primary" />
                    Prometheus
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Open-source monitoring and alerting toolkit.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Metrics and exporters</li>
                      <li>PromQL queries</li>
                      <li>Service discovery</li>
                      <li>Recording rules</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Scrape failures</li>
                      <li>Cardinality explosion</li>
                      <li>Storage issues</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Grafana
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Analytics and visualization platform for metrics.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Dashboard creation</li>
                      <li>Data source configuration</li>
                      <li>Alerting rules</li>
                      <li>Variables and templating</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Data source connection</li>
                      <li>Panel rendering errors</li>
                      <li>Alert notification failures</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Alert Manager
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p className="text-muted-foreground">Handles alerts from Prometheus and routes them to notification channels.</p>
                  <div>
                    <p className="font-semibold mb-2">Learning Path:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Alert routing</li>
                      <li>Grouping and inhibition</li>
                      <li>Receiver configuration</li>
                      <li>Silence management</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Issues:</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Notification delivery failures</li>
                      <li>Alert grouping issues</li>
                      <li>Route matching problems</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* MLOps Detailed Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">MLOps - Machine Learning Operations</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    MLOps Learning Path
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Phase 1: Foundation</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Python and ML basics</li>
                      <li>Version control (Git/GitHub)</li>
                      <li>Docker containerization</li>
                      <li>Linux and shell scripting</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 2: CI/CD for ML</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Jenkins pipeline setup</li>
                      <li>GitHub Actions for ML</li>
                      <li>Docker image builds</li>
                      <li>Model registry (MLflow)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 3: Infrastructure</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Kubernetes for ML workloads</li>
                      <li>Terraform for ML infrastructure</li>
                      <li>Cloud deployment (AWS/Azure/GKE)</li>
                      <li>Model serving (KServe, Seldon)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 4: Monitoring</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Prometheus for ML metrics</li>
                      <li>Grafana dashboards</li>
                      <li>Model drift detection</li>
                      <li>Alert manager integration</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                    MLOps Troubleshooting Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Model Training Issues</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>OOM (Out of Memory) errors: Reduce batch size, use gradient checkpointing</li>
                      <li>Slow training: Profile code, optimize data loading, use mixed precision</li>
                      <li>Model not converging: Check learning rate, data quality, hyperparameters</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">CI/CD Pipeline Failures</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Jenkins build failures: Check logs, verify dependencies, test locally</li>
                      <li>Docker build issues: Verify Dockerfile, check base image, test build</li>
                      <li>GitHub Actions errors: Review workflow YAML, check secrets, permissions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Deployment Issues</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Kubernetes pod failures: Check logs, resource limits, image pull</li>
                      <li>Model serving errors: Verify endpoint, check model format, test locally</li>
                      <li>Cloud deployment: Review IAM roles, network config, quotas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Monitoring Alerts</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>High latency: Check model performance, resource allocation, network</li>
                      <li>Model drift: Retrain model, investigate data changes, update thresholds</li>
                      <li>Prometheus alerts: Review alert rules, check data collection, verify targets</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI-Powered CI/CD for MLOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  DevOpsCopilot integrates with your MLOps toolchain to provide intelligent automation and troubleshooting:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Jenkins Integration</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>AI analyzes build logs to identify root causes</li>
                      <li>Auto-suggests fixes for common pipeline failures</li>
                      <li>Optimizes Docker build steps and caching</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">GitHub Actions</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Smart workflow suggestions based on code changes</li>
                      <li>Automated test generation for ML models</li>
                      <li>Intelligent dependency management</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Docker Optimization</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Multi-stage build recommendations</li>
                      <li>Layer caching optimization</li>
                      <li>Image size reduction suggestions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Kubernetes Deployment</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Resource allocation recommendations</li>
                      <li>Auto-scaling policy suggestions</li>
                      <li>Health check configuration</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* LLOps Detailed Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">LLMOps - Large Language Model Operations</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    LLOps Learning Path
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Phase 1: LLM Fundamentals</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Transformer architecture basics</li>
                      <li>Prompt engineering techniques</li>
                      <li>API integration (OpenAI, Anthropic)</li>
                      <li>Token management and optimization</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 2: Prompt Management</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Version control for prompts (GitHub)</li>
                      <li>A/B testing frameworks</li>
                      <li>Prompt templates and variables</li>
                      <li>Performance evaluation metrics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 3: Fine-Tuning & Deployment</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Fine-tuning pipelines (Jenkins/GitHub Actions)</li>
                      <li>Docker containers for LLM serving</li>
                      <li>Kubernetes deployment strategies</li>
                      <li>Cloud deployment (AWS Bedrock, Azure OpenAI)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Phase 4: Monitoring & Optimization</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Prometheus metrics for LLM performance</li>
                      <li>Grafana dashboards for token usage</li>
                      <li>Cost tracking and optimization</li>
                      <li>Alert manager for latency/errors</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                    LLOps Troubleshooting Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Prompt Issues</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Poor responses: Refine prompts, add examples, adjust temperature</li>
                      <li>Token limits: Optimize prompts, use summarization, chunk inputs</li>
                      <li>Inconsistent outputs: Set seed, adjust parameters, use structured outputs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">API Integration Problems</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Rate limiting: Implement retries, use exponential backoff</li>
                      <li>Authentication errors: Verify API keys, check permissions</li>
                      <li>Timeout issues: Increase timeout, optimize request size</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fine-Tuning Failures</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Training errors: Check data format, validate dataset, review logs</li>
                      <li>Cost overruns: Monitor token usage, optimize training data</li>
                      <li>Model quality: Evaluate metrics, adjust hyperparameters</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Deployment Challenges</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>High latency: Optimize model size, use caching, CDN</li>
                      <li>Memory issues: Use quantization, model sharding, GPU optimization</li>
                      <li>Scaling problems: Auto-scaling config, load balancing, resource limits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5 text-primary" />
                  AI-Powered CI/CD for LLOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <p className="text-muted-foreground">
                  DevOpsCopilot provides intelligent automation for LLM operations:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-2">Prompt Engineering</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>AI suggests prompt improvements</li>
                      <li>Version control integration (GitHub)</li>
                      <li>A/B testing automation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Fine-Tuning Automation</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Jenkins pipelines for training jobs</li>
                      <li>GitHub Actions for model updates</li>
                      <li>Automated evaluation and validation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Docker & Kubernetes</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Optimized Docker images for LLM serving</li>
                      <li>Kubernetes deployment templates</li>
                      <li>Auto-scaling based on token usage</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Monitoring & Cost</p>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Prometheus metrics for LLM performance</li>
                      <li>Grafana dashboards for cost tracking</li>
                      <li>Alert manager for anomalies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="grid gap-10 rounded-3xl border border-dashed border-primary/20 bg-primary/5 p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-white text-primary shadow-sm">
              Self-Service Courses
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Master Essential DevOps Skills With Guided Learning Paths
            </h2>
            <p className="text-lg text-muted-foreground">
              Blend chatbot assistance with structured lessons so every engineer
              can troubleshoot confidently. Each course includes hands-on labs,
              cheat sheets, and knowledge checks.
            </p>
            <Button variant="outline" asChild>
              <a href="/courses">View Full Curriculum</a>
            </Button>
          </div>
          <div className="grid gap-6">
            {courses.map((course) => (
              <Card key={course.title} className="border border-primary/20 bg-background/80 shadow-inner">
                <CardHeader className="space-y-3">
                  <Badge className="w-fit bg-primary/10 text-primary">{course.level}</Badge>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {course.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-2">
                      <Cpu className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <SectionHeader
          title="Why Platform And SRE Teams Choose DevOpsCopilot"
          description="Purpose-built for DevOps organizations that need reliable answers, guided remediation, and consistent training."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card key={benefit.title} className="border-muted shadow-sm">
                <CardHeader className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {benefit.description}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6 rounded-3xl border border-muted p-10 shadow-inner">
            <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
              Ask The Assistant
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              Troubleshooting Answers, Instantly
            </h2>
            <p className="text-muted-foreground">
              The chatbot synthesizes logs, runbooks, and dashboards so your team
              always knows the next best action.
            </p>
            <div className="space-y-4 text-sm">
              {demoQuestions.map((item) => (
                <Card key={item.question} className="border-muted bg-background/80">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-base text-foreground">
                      {item.question}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {item.answer}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <Card className="border-muted shadow-lg">
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <LineChart className="h-5 w-5 text-primary" />
                <Badge variant="outline" className="border-primary/40 text-primary">
                  Operations Snapshot
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                Your DevOps Control Center, Powered by AI
              </CardTitle>
              <CardDescription>
                Real-time health, deployment velocity, and knowledge gaps in a
                single view. Customize alerts and playbooks per squad.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-xl bg-muted/60 p-4">
                <div>
                  <p className="text-xs uppercase text-muted-foreground/80">
                    Weekly Deployments
                  </p>
                  <p className="text-2xl font-semibold text-foreground">184</p>
                </div>
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">
                  +12% vs last sprint
                </Badge>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-muted/60 p-4">
                <Bot className="h-10 w-10 rounded-full bg-primary/10 p-2 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    86% of chat sessions resolve without escalation
                  </p>
                  <p>Automatically syncs learnings to Confluence and GitHub.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <p>
                  Integrates with PagerDuty, ServiceNow, Jira, GitHub, Datadog,
                  and more.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-primary/20 bg-background/90 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Customer Spotlight
                  </Badge>
                </div>
                <CardDescription className="text-lg text-foreground">
                  “{testimonial.quote}”
                </CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </section>

      <section className="container pb-20">
        <Card className="relative overflow-hidden border-none bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />
          <CardContent className="relative flex flex-col gap-8 p-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold md:text-4xl">
                Ready To Ship Better Software, Faster?
              </h2>
              <p className="text-lg text-white/80">
                Pair guided DevOps learning with an AI assistant that keeps your
                team in flow. Let’s tailor a rollout plan for your environment.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                onClick={(e) => {
                  e.preventDefault();
                  const ev = new CustomEvent('tc360:demo-chat', { detail: { open: true } });
                  window.dispatchEvent(ev);
                }}
              >
                Schedule A Live Demo
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
                <a href="/contact">Talk With Our Engineers</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

type SectionHeaderProps = {
  title: string;
  description: string;
};

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center space-y-4">
      <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-white/80 p-5 shadow-inner backdrop-blur">
      <p className="text-xs uppercase tracking-wide text-primary/80">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-primary">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

type ConversationBubbleProps = {
  from: "Engineer" | "DevOpsCopilot";
  message: string;
  variant?: "bot" | "human";
};

function ConversationBubble({
  from,
  message,
  variant = "human",
}: ConversationBubbleProps) {
  const isBot = variant === "bot";
  return (
    <div
      className={`rounded-2xl border p-4 ${
        isBot
          ? "border-primary/20 bg-primary/5 text-foreground"
          : "border-muted bg-background"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {from}
      </p>
      <p className="mt-2 text-sm text-foreground">{message}</p>
    </div>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 3 5 6v6c0 4.99 3.06 9.54 7 11 3.94-1.46 7-6.01 7-11V6l-7-3Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Industries;