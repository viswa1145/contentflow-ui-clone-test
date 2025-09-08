import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-muted-foreground">Oops! Page not found</p>
        <div className="flex gap-2 justify-center">
          <a href="/" className="px-4 py-2 rounded-md border border-border hover:bg-accent/10">Return Home</a>
          <button
            onClick={() => {
              const ev = new CustomEvent('tc360:command', { detail: { open: true } });
              window.dispatchEvent(ev);
            }}
            className="px-4 py-2 rounded-md border border-border hover:bg-accent/10"
          >
            Search
          </button>
        </div>
        <div className="text-sm text-muted-foreground">Quick links:</div>
        <div className="flex flex-wrap gap-2 justify-center text-sm">
          <a href="/products" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Products</a>
          <a href="/industries" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Industries</a>
          <a href="/pricing" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Pricing</a>
          <a href="/demo" className="px-3 py-1 rounded-md border border-border hover:bg-accent/10">Schedule Demo</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
