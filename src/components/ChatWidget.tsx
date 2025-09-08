import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

const MOCK_FAQ: Record<string, string> = {
  pricing: "We offer Starter, Professional, and Enterprise plans. Contact sales for custom pricing.",
  onboarding: "Typical onboarding completes in 2-4 weeks depending on scope.",
  security: "We are SOC2 Type II and GDPR compliant with SSO support.",
  integrations: "We support popular HRIS, ATS, payroll, and identity providers via APIs.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    { role: 'assistant', content: 'Hi! Ask me about pricing, onboarding, security, or integrations.' }
  ]);

  useEffect(() => {
    const handler = (ev: Event) => {
      const e = ev as CustomEvent<{ open?: boolean; toggle?: boolean }>;
      if (e.detail?.toggle) setOpen((v) => !v);
      else if (typeof e.detail?.open === 'boolean') setOpen(e.detail.open);
    };
    window.addEventListener('tc360:chat', handler as EventListener);
    return () => window.removeEventListener('tc360:chat', handler as EventListener);
  }, []);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', content: q }]);
    setInput("");
    const key = Object.keys(MOCK_FAQ).find(k => q.toLowerCase().includes(k));
    const answer = key ? MOCK_FAQ[key] : "Thanks! A specialist will follow up shortly. (This is a mock response.)";
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: answer }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="h-12 w-12 rounded-full tc360-gradient-animated tc360-gradient-ring shadow hover:opacity-90 transition"
          aria-label="Open chat"
        >
          <MessageSquare className="m-auto h-5 w-5 text-foreground" />
        </button>
      ) : (
        <div className="w-80 rounded-xl border border-border bg-background shadow-elegant overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="font-semibold">Chat with us</div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="hover:text-primary">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={m.role === 'user' ? 'inline-block rounded-lg px-3 py-2 bg-primary text-primary-foreground' : 'inline-block rounded-lg px-3 py-2 bg-accent/10'}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-border flex gap-2">
            <input
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
            />
            <button onClick={send} className="rounded-md border border-border px-3 hover:bg-accent/10">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
