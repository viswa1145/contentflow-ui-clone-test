import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-20 space-y-12">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Choose the best way to get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>sales@talentconnect360.com</div>
              <Button variant="outline" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'contact' } }); window.dispatchEvent(ev); }}>Contact Sales</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>support@talentconnect360.com</div>
              <Button variant="outline" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'support' } }); window.dispatchEvent(ev); }}>Open a Ticket</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Press</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <div>press@talentconnect360.com</div>
              <Button variant="outline" onClick={() => { const ev = new CustomEvent('tc360:lead', { detail: { type: 'media' } }); window.dispatchEvent(ev); }}>Media Kit</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
