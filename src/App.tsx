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

const queryClient = new QueryClient();

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
              <Route path="/industries" element={<Industries />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/company" element={<Company />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/industries/:slug" element={<IndustryDetail />} />
              <Route path="/solutions/:slug" element={<SolutionDetail />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:slug" element={<JobDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
