import { useState, useEffect, useRef } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

interface KnowledgeBase {
  keywords: string[];
  answer: string;
  title: string;
}

const KNOWLEDGE_BASE: KnowledgeBase[] = [
  {
    title: "How Networks Work",
    keywords: ["network", "networks", "how network", "how networks work", "network basics", "networking", "data transfer", "packet", "protocol", "tcp", "ip", "router", "switch"],
    answer: `**How Networks Work:**

Networks enable devices to communicate and share data. Here's how they work:

1. **Data Packets**: Information is broken into small packets that travel across the network.

2. **Protocols**: Communication follows rules (protocols) like TCP/IP:
   - **TCP (Transmission Control Protocol)**: Ensures reliable data delivery
   - **IP (Internet Protocol)**: Handles addressing and routing

3. **Network Devices**:
   - **Routers**: Direct traffic between different networks
   - **Switches**: Connect devices within the same network
   - **Modems**: Convert digital signals for transmission

4. **OSI Model**: Networks operate in layers (Physical, Data Link, Network, Transport, Session, Presentation, Application)

5. **Data Flow**: When you send data, it travels through these layers, gets packaged into packets, routed to the destination, and reassembled.

This is how your computer can communicate with servers, other devices, and access the internet!`
  },
  {
    title: "How Ping Works",
    keywords: ["ping", "how ping", "ping command", "ping work", "icmp", "connectivity", "latency", "response time"],
    answer: `**How the Ping Command Works:**

Ping is a network utility that tests connectivity between your device and another host. Here's how it works:

1. **ICMP Protocol**: Ping uses ICMP (Internet Control Message Protocol) echo requests and replies.

2. **Process**:
   - Your device sends an ICMP echo request packet to the target
   - The target receives it and sends back an ICMP echo reply
   - Your device measures the round-trip time (latency)

3. **What Ping Tells You**:
   - **Reachability**: Whether the host is online and reachable
   - **Latency**: Time taken for packets to travel (measured in milliseconds)
   - **Packet Loss**: Percentage of packets that didn't return

4. **Example**: \`ping google.com\` sends packets and shows:
   - Response time (e.g., "64 bytes from 172.217.164.110: time=15ms")
   - Statistics (packets sent/received, loss percentage)

5. **Use Cases**:
   - Troubleshooting network connectivity issues
   - Testing server availability
   - Measuring network performance

If ping fails, it indicates network problems, firewall blocking, or the host being down.`
  },
  {
    title: "Check Server Status",
    keywords: ["server alive", "server responding", "check server", "server status", "server health", "is server up", "server down", "server online"],
    answer: `**How to Check if a Server is Alive or Responding:**

There are several methods to verify server status:

1. **Ping Command**:
   \`\`\`bash
   ping server.example.com
   \`\`\`
   - Tests basic network connectivity
   - Shows if the server responds to ICMP packets

2. **HTTP/HTTPS Check**:
   \`\`\`bash
   curl -I https://server.example.com
   # or
   wget --spider https://server.example.com
   \`\`\`
   - Checks if web server is responding
   - Returns HTTP status codes (200 = OK, 404 = Not Found, 500 = Server Error)

3. **Port Check**:
   \`\`\`bash
   telnet server.example.com 80
   # or
   nc -zv server.example.com 443
   \`\`\`
   - Tests if specific ports are open and accepting connections

4. **Health Check Endpoints**:
   - Many applications provide \`/health\` or \`/status\` endpoints
   - Returns JSON with server status information

5. **Monitoring Tools**:
   - **Nagios, Zabbix, Prometheus**: Continuous monitoring
   - **Uptime Robot, Pingdom**: External monitoring services

6. **Response Codes**:
   - **200-299**: Server is healthy
   - **400-499**: Client errors
   - **500-599**: Server errors

These methods help ensure your servers are operational and responding correctly!`
  },
  {
    title: "URL Browser Request",
    keywords: ["url browser", "type url", "what happens url", "browser request", "dns", "http request", "browser navigation"],
    answer: `**What Happens When You Type a URL in Your Browser:**

Here's the complete journey of a web request:

1. **DNS Lookup**:
   - Browser checks DNS cache
   - If not found, queries DNS servers to resolve domain name to IP address
   - Example: \`example.com\` → \`93.184.216.34\`

2. **TCP Connection**:
   - Browser establishes TCP connection with the server (3-way handshake)
   - Default port: 80 (HTTP) or 443 (HTTPS)

3. **TLS/SSL Handshake** (for HTTPS):
   - Negotiates encryption
   - Verifies server certificate
   - Establishes secure connection

4. **HTTP Request**:
   - Browser sends HTTP request:
     \`\`\`
     GET /page HTTP/1.1
     Host: example.com
     \`\`\`

5. **Server Processing**:
   - Server receives request
   - Processes it (may query database, run scripts)
   - Generates response

6. **HTTP Response**:
   - Server sends back:
     - Status code (200 OK, 404 Not Found, etc.)
     - Headers (content-type, cookies, etc.)
     - Body (HTML, JSON, etc.)

7. **Browser Rendering**:
   - Browser parses HTML
   - Downloads resources (CSS, JS, images)
   - Renders the page
   - Executes JavaScript

8. **Additional Requests**:
   - Browser may make additional requests for assets
   - AJAX calls for dynamic content

This entire process typically happens in milliseconds!`
  },
  {
    title: "General DevOps",
    keywords: ["devops", "troubleshoot", "troubleshooting", "help", "how", "what", "explain"],
    answer: `I'm here to help with DevOps troubleshooting questions! 

I can answer questions about:
- **Networks**: How networks work, protocols, routing
- **Server Monitoring**: Checking server status, health checks
- **Commands**: ping, curl, network utilities
- **Web Requests**: DNS, HTTP, browser navigation
- **Infrastructure**: Servers, connectivity, troubleshooting

Try asking me questions like:
- "How do networks work?"
- "How does ping work?"
- "How to check if a server is alive?"
- "What happens when you type a URL?"

What would you like to know?`
  }
];

export const DemoChatbot = () => {
  const [open, setOpen] = useState(false);
  const [questionsAsked, setQuestionsAsked] = useState(0);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; timestamp: Date }>>([]);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [scheduleForm, setScheduleForm] = useState({ name: "", email: "", company: "", preferredDate: undefined as Date | undefined, preferredTime: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (ev: Event) => {
      const e = ev as CustomEvent<{ open?: boolean; toggle?: boolean }>;
      console.log('DemoChatbot: Received event', e.type, e.detail);
      if (e.detail?.toggle) {
        setOpen((v) => !v);
        console.log('DemoChatbot: Toggling chat');
      } else if (typeof e.detail?.open === 'boolean') {
        setOpen(e.detail.open);
        console.log('DemoChatbot: Setting open to', e.detail.open);
      }
    };
    window.addEventListener('tc360:demo-chat', handler as EventListener);
    console.log('DemoChatbot: Event listener registered');
    return () => {
      window.removeEventListener('tc360:demo-chat', handler as EventListener);
      console.log('DemoChatbot: Event listener removed');
    };
  }, []);

  useEffect(() => {
    if (open && messages.length === 0) {
      // Reset state when opening
      setQuestionsAsked(0);
      setInput("");
      // Initialize with welcome message
      const welcomeMsg = "Hi! I'm your DevOps troubleshooting assistant. Ask me questions about networks, servers, ping, or any DevOps concepts. I'll help you understand how things work!\n\n**Examples:**\n- How do networks work?\n- How does ping work?\n- How to check if a server is alive?\n- What happens when you type a URL?";
      setMessages([
        { role: 'assistant', content: welcomeMsg, timestamp: new Date() }
      ]);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const findAnswer = (question: string): { answer: string; title: string } | null => {
    const lowerQuestion = question.toLowerCase();
    
    // Find the best matching knowledge base entry
    let bestMatch: { entry: KnowledgeBase; score: number } | null = null;
    
    for (const entry of KNOWLEDGE_BASE) {
      const matchedKeywords = entry.keywords.filter(keyword => 
        lowerQuestion.includes(keyword.toLowerCase())
      );
      const score = matchedKeywords.length;
      
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { entry, score };
      }
    }
    
    if (bestMatch && bestMatch.score > 0) {
      return { answer: bestMatch.entry.answer, title: bestMatch.entry.title };
    }
    
    // Default response if no match found
    return {
      title: "General Help",
      answer: `Thanks for your question! I'm specialized in DevOps troubleshooting topics like:\n\n- Network fundamentals and how networks work\n- How ping and connectivity testing works\n- Server health checks and monitoring\n- How web requests and DNS work\n\nCould you rephrase your question focusing on one of these areas? I'm here to help!`
    };
  };

  const sendMessage = () => {
    // Don't allow more questions after limit
    if (questionsAsked >= 2) {
      return;
    }

    const question = input.trim();
    if (!question) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: question, timestamp: new Date() }]);
    setInput("");

    // Find and send answer
    setTimeout(() => {
      const result = findAnswer(question);
      if (result) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: result.answer, 
          timestamp: new Date() 
        }]);
        
        // Increment questions asked
        const newCount = questionsAsked + 1;
        setQuestionsAsked(newCount);
        
        // After 2 questions, show limit message with options
        if (newCount >= 2) {
          setTimeout(() => {
            setMessages(prev => [...prev, { 
              role: 'assistant', 
              content: "I hope those answers were helpful! ⚠️ **You've reached your question limit (2 questions).**\n\nTo continue getting unlimited DevOps assistance and access to our full knowledge base, please choose an option:\n\n**Option 1:** 📊 View our pricing plans and choose a plan that fits your needs\n**Option 2:** 📅 Schedule a live demo with our team to see DevOpsCopilot in action\n\nWhich would you like to do?", 
              timestamp: new Date() 
            }]);
          }, 1000);
        }
      }
    }, 600);
  };

  const handleScheduleSubmit = async () => {
    try {
      const url = (import.meta as any).env.VITE_AUTOMATION_DEMO_WEBHOOK || "/.netlify/functions/lead";
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: 'demo-chat',
          ...scheduleForm,
          preferredDate: scheduleForm.preferredDate ? format(scheduleForm.preferredDate, 'yyyy-MM-dd') : undefined,
          questionsAsked,
          messages: messages.filter(m => m.role === 'user').map(m => m.content),
          ts: new Date().toISOString(),
        }),
      });
      
      if (res.ok) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "Perfect! We've received your information. Our team will contact you shortly to confirm the meeting time. Thank you for your interest in DevOpsCopilot! 🚀", 
          timestamp: new Date() 
        }]);
        setShowScheduleDialog(false);
        setTimeout(() => {
          setOpen(false);
          // Reset for next time
          setQuestionsAsked(0);
          setMessages([]);
          setScheduleForm({ name: "", email: "", company: "", preferredDate: undefined, preferredTime: "" });
        }, 4000);
      }
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "There was an error submitting your request. Please try again or contact us directly.", 
        timestamp: new Date() 
      }]);
    }
  };

  if (!open) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-96 rounded-xl border border-border bg-background shadow-elegant overflow-hidden flex flex-col" style={{ maxHeight: '600px' }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-hero text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div className="font-semibold">DevOps Demo Assistant</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:opacity-80">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/30">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <div className={`max-w-[80%] rounded-lg px-3 py-2 ${
                  m.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-background border border-border'
                }`}>
                  <div className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{ 
                    __html: m.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-xs">$1</code>')
                      .replace(/```bash\n([^`]+)```/g, '<pre class="bg-muted p-2 rounded text-xs mt-1 mb-1 overflow-x-auto"><code>$1</code></pre>')
                      .replace(/```\n([^`]+)```/g, '<pre class="bg-muted p-2 rounded text-xs mt-1 mb-1 overflow-x-auto"><code>$1</code></pre>')
                      .replace(/\n/g, '<br>')
                  }} />
                </div>
                {m.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {questionsAsked < 2 && (
            <div className="p-3 border-t border-border">
              <div className="flex gap-2">
                <input
                  className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Ask a DevOps question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                />
                <Button onClick={sendMessage} size="sm" className="px-3">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Questions asked: {questionsAsked} of 2
              </div>
            </div>
          )}
          
          {questionsAsked >= 2 && !showScheduleDialog && (
            <div className="p-3 border-t border-border bg-muted/50 space-y-2">
              <div className="text-xs text-muted-foreground text-center mb-2">
                ⚠️ Question limit reached. Choose an option below:
              </div>
              <div className="flex flex-col gap-2">
                <Button 
                  size="sm" 
                  variant="default"
                  className="w-full"
                  onClick={() => {
                    window.location.href = '/pricing';
                  }}
                >
                  📊 View Pricing Plans
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setShowScheduleDialog(true);
                  }}
                >
                  📅 Schedule Live Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Meeting with Our Team</DialogTitle>
            <DialogDescription>
              Let's find a time that works for you to discuss DevOpsCopilot in detail.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Full Name *</label>
              <Input 
                placeholder="John Doe" 
                value={scheduleForm.name}
                onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Work Email *</label>
              <Input 
                type="email"
                placeholder="john@company.com" 
                value={scheduleForm.email}
                onChange={(e) => setScheduleForm({ ...scheduleForm, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Company Name</label>
              <Input 
                placeholder="Your Company" 
                value={scheduleForm.company}
                onChange={(e) => setScheduleForm({ ...scheduleForm, company: e.target.value })}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button type="button" className="w-full inline-flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-left text-sm hover:bg-accent/10">
                      <span>{scheduleForm.preferredDate ? format(scheduleForm.preferredDate, 'PPP') : 'Select date'}</span>
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="p-2" align="start">
                    <Calendar
                      mode="single"
                      selected={scheduleForm.preferredDate}
                      onSelect={(d) => setScheduleForm({ ...scheduleForm, preferredDate: d })}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Time</label>
                <select 
                  className="w-full p-2 border border-input rounded-md bg-background text-sm"
                  value={scheduleForm.preferredTime}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, preferredTime: e.target.value })}
                >
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                  <option value="17:00">05:00 PM</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleScheduleSubmit}
              disabled={!scheduleForm.name || !scheduleForm.email}
            >
              Schedule Meeting
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
