import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import { Calendar, Clock, Users, Video, Phone, PhoneCall, MessageSquare } from "lucide-react";
import { useState } from "react";
import { usePersonalization } from "@/hooks/usePersonalization";
import { Calendar as DayPicker } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const iconMap: Record<string, JSX.Element> = {
  calendar: <Calendar className="h-6 w-6" />,
  clock: <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />,
  users: <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />,
  video: <Video className="h-5 w-5 text-primary mt-1 flex-shrink-0" />,
};

const Demo = () => {
  const { industryType, role } = usePersonalization();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", companySize: "", industry: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | "ok" | "error">(null);
  const [preferredDate, setPreferredDate] = useState<Date | undefined>(undefined);
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [timeZone, setTimeZone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [callOpen, setCallOpen] = useState(false);

  const { data } = useQuery({
    queryKey: ["demo_page"],
    queryFn: () => fetchContentstackData("demo_page"),
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
                  <Input placeholder="John" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Work Email *
                </label>
                <Input type="email" placeholder="john@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Company Name *
                </label>
                <Input placeholder="Your Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Company Size
                  </label>
                  <select className="w-full p-2 border border-input rounded-md bg-background" value={form.companySize} onChange={(e) => setForm({ ...form, companySize: e.target.value })}>
                    <option value="">Select...</option>
                    {data.form_config.company_size_options.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Industry
                  </label>
                  <select className="w-full p-2 border border-input rounded-md bg-background" value={form.industry} onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                    <option value="">Select...</option>
                    {data.form_config.industry_options.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
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
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button type="button" className="w-full inline-flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left hover:bg-accent/10">
                        <span>{preferredDate ? format(preferredDate, 'PPP') : 'Select a date'}</span>
                        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="p-2" align="start">
                      <DayPicker
                        mode="single"
                        selected={preferredDate}
                        onSelect={(d) => {
                          setPreferredDate(d);
                          const el = document.activeElement as HTMLElement | null;
                          if (el) el.blur();
                        }}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Preferred Time (local)
                  </label>
                  <select className="w-full p-2 border border-input rounded-md bg-background" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)}>
                    <option value="">Select…</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                  <div className="text-xs text-muted-foreground mt-2">
                    Timezone: 
                    <select className="ml-2 p-1 border border-input rounded bg-background" value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
                      <option value={Intl.DateTimeFormat().resolvedOptions().timeZone}>Auto ({Intl.DateTimeFormat().resolvedOptions().timeZone})</option>
                      <option value="UTC">UTC</option>
                      <option value="America/Los_Angeles">America/Los_Angeles</option>
                      <option value="America/New_York">America/New_York</option>
                      <option value="Europe/London">Europe/London</option>
                      <option value="Europe/Berlin">Europe/Berlin</option>
                      <option value="Asia/Kolkata">Asia/Kolkata</option>
                      <option value="Asia/Singapore">Asia/Singapore</option>
                      <option value="Australia/Sydney">Australia/Sydney</option>
                    </select>
                  </div>
                </div>
              </div>
               
              <Button className="w-full" size="lg" disabled={submitting} onClick={async () => {
                setSubmitting(true);
                setSubmitted(null);
                try {
                  const dateStr = preferredDate ? format(preferredDate, 'yyyy-MM-dd') : undefined;
                  const combined = dateStr && preferredTime ? `${dateStr}T${preferredTime}:00` : undefined;
                  const url = (import.meta as any).env.VITE_AUTOMATION_DEMO_WEBHOOK || "/.netlify/functions/lead";
                  const headers: Record<string, string> = { "content-type": "application/json" };
                  const secret = (import.meta as any).env.VITE_AUTOMATION_SECRET as string | undefined;
                  if (secret) headers["x-cs-secret"] = secret;
                  const res = await fetch(url, {
                    method: "POST",
                    headers,
                    body: JSON.stringify({
                      ...form,
                      industryType: industryType || form.industry || undefined,
                      role,
                      page: window.location.pathname,
                      page_url: window.location.pathname,
                      preferredDate: dateStr,
                      preferredTime,
                      timeZone,
                      preferredDateTime: combined,
                    }),
                  });
                  if (res.ok) setSubmitted("ok"); else setSubmitted("error");
                } catch {
                  setSubmitted("error");
                } finally {
                  setSubmitting(false);
                }
              }}>
                {submitting ? 'Submitting…' : data.form_config.submit_cta}
              </Button>
              {submitted === "ok" && (
                <div className="text-xs text-primary text-center">Thanks! We'll be in touch shortly.</div>
              )}
              {submitted === "error" && (
                <div className="text-xs text-destructive text-center">Something went wrong. Please try again.</div>
              )}
              
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
                  {iconMap["calendar"]}
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.info_blocks.map((block: any) => (
                  <div className="flex items-start gap-3" key={block.uid}>
                    {iconMap[block.icon_key] ?? iconMap["clock"]}
                    <div>
                      <h4 className="font-medium">{block.title}</h4>
                      <p className="text-sm text-muted-foreground">{block.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Popular Demo Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.demo_topics.map((topic: string) => (
                    <li className="flex items-center gap-2" key={topic}>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-hero text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MessageSquare className="h-8 w-8" />
                  <div>
                    <h3 className="font-semibold">{data.help_card.title}</h3>
                    <p className="text-sm opacity-90">{data.help_card.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10"
                    onClick={() => {
                      setCallOpen(true);
                      // Try to open dialer
                      try { window.location.href = 'tel:+1-800-DARWIN'; } catch {}
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call +1-800-DARWIN
                  </Button>
                  <Button variant="cta" className="w-full" onClick={() => {
                    const ev = new CustomEvent('tc360:chat', { detail: { open: true } });
                    window.dispatchEvent(ev);
                  }}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Live Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Dialog open={callOpen} onOpenChange={setCallOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Calling Sales…</DialogTitle>
            <DialogDescription>
              If your phone app didn’t open, dial +1-800-DARWIN. We’re connecting you now.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-4 py-4">
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
              <div className="absolute inset-1 rounded-full bg-primary/20 animate-pulse"></div>
              <div className="relative h-12 w-12 rounded-full tc360-gradient-animated tc360-gradient-ring flex items-center justify-center">
                <PhoneCall className="h-5 w-5 text-foreground" />
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Connecting to an agent…
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setCallOpen(false)}>Hang up</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Demo;