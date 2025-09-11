import { Outlet, useLocation } from "react-router-dom";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CommandPalette from "@/components/CommandPalette";
import LeadDialogs from "@/components/LeadDialogs";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";
import FestivalEffects from "@/components/FestivalEffects";

const AppLayout = () => {
  const location = useLocation();
  const [activeFestival, setActiveFestival] = useState<"diwali" | "holi" | "christmas" | null>(null);

  const { data: seasonal } = useQuery({
    queryKey: ["seasonal_theme"],
    queryFn: () => fetchContentstackData("seasonal_theme", { region: "in" } as any),
    staleTime: 1000 * 60 * 60,
  });

  // Fallback seasonal offer for testing via ?festival=diwali|holi|christmas
  const paramsForRibbon = new URLSearchParams(location.search);
  const festivalParamForRibbon = paramsForRibbon.get("festival");
  const seasonalFallback = festivalParamForRibbon && (!seasonal || !seasonal.offer_enabled)
    ? {
        offer_enabled: true,
        discount_percent: 20,
        badge_text: "Festival Offer",
        promo_copy: "Limited-time festival offer: 20% off Professional plan",
        promo_code: festivalParamForRibbon.toUpperCase(),
        ends_at: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
        landing_url: "/pricing#festival",
      }
    : null;
  const seasonalToUse: any = seasonalFallback || seasonal;

  useEffect(() => {
    const root = document.documentElement;
    const classes = ["theme-diwali", "theme-holi", "theme-christmas"];
    const params = new URLSearchParams(location.search);
    const festivalParam = params.get("festival");
    const allowed = new Set(["diwali", "holi", "christmas"]);

    if (festivalParam) {
      if (festivalParam === "off") {
        try { localStorage.removeItem("tc360_festival"); } catch {}
      } else if (allowed.has(festivalParam)) {
        try { localStorage.setItem("tc360_festival", festivalParam); } catch {}
      }
    }

    let desiredKey: "diwali" | "holi" | "christmas" | null = null;
    let desiredClass: string | null = null;
    try {
      const stored = localStorage.getItem("tc360_festival");
      if (stored && allowed.has(stored)) {
        desiredKey = stored as any;
        desiredClass = `theme-${stored}`;
      }
    } catch {}
    if (!desiredClass && (seasonal as any)?.class_name) {
      desiredClass = (seasonal as any).class_name as string;
      const match = String((seasonal as any).class_name).replace("theme-", "");
      if (allowed.has(match)) desiredKey = match as any;
    }

    classes.forEach(c => root.classList.remove(c));
    if (desiredClass) root.classList.add(desiredClass);
    setActiveFestival(desiredKey || null);
  }, [seasonal, location.search]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Festival ribbon */}
      {seasonalToUse?.promo_copy && seasonalToUse?.landing_url && (
        <a href={`${seasonalToUse.landing_url}${seasonalToUse.landing_url.includes('?') ? '&' : '?'}festival=${(document.documentElement.className.match(/theme-(\w+)/)?.[1] || localStorage.getItem('tc360_festival') || 'offer')}`} className="w-full text-center text-xs sm:text-sm py-2 bg-primary text-primary-foreground hover:opacity-95">
          {seasonalToUse.promo_copy}
        </a>
      )}
      <FestivalEffects festival={activeFestival} />
      <AnnouncementBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
      <CommandPalette />
      <LeadDialogs />
    </div>
  );
};

export default AppLayout;
