import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Demo from "./pages/Demo";
import NotFound from "./pages/NotFound";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import AppLayout from "./components/AppLayout";
import IndustryDetail from "./pages/IndustryDetail";
import SolutionDetail from "./pages/SolutionDetail";
import ProductDetail from "./pages/ProductDetail";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import Status from "./pages/Status";
import Cookies from "./pages/Cookies";
import Accessibility from "./pages/Accessibility";
import Sitemap from "./pages/Sitemap";
import { DemoChatbot } from "./components/DemoChatbot";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Show data immediately, don't wait for refetch
      staleTime: Infinity,
      // Don't refetch on mount if we have data
      refetchOnMount: false,
      // Don't show loading states for cached data
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/playbooks" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/company" element={<Company />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/playbooks/:slug" element={<IndustryDetail />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<JobDetail />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/security" element={<Security />} />
              <Route path="/status" element={<Status />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <DemoChatbot />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
