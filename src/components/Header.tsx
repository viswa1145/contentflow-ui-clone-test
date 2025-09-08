import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { fetchContentstackData, NavigationItem } from "@/data/contentstack";
import { useQuery } from "@tanstack/react-query";
import ThemeToggle from "@/components/ThemeToggle";
import { usePersonalization } from "@/hooks/usePersonalization";
import { useLocation, useNavigate } from "react-router-dom";
import appLogo from "@/assets/logo.png";

interface DropdownProps {
  item: NavigationItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (href: string) => void;
}

const Dropdown = ({ item, isOpen, onToggle, onNavigate }: DropdownProps) => {
  if (!item.submenu || item.submenu.length === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          />
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 mt-2 w-72 bg-background dark:bg-neutral-900 border border-border rounded-lg shadow-elegant z-50 animate-fade-in">
            <div className="p-2">
              {item.submenu.map((subitem, index) => (
                <a
                  key={index}
                  href={subitem.href}
                  className="block p-3 rounded-md hover:bg-accent/10 dark:hover:bg-white/10 transition-colors group"
                  onClick={(e) => { e.preventDefault(); onNavigate(subitem.href); onToggle(); }}
                >
                  <div className="font-medium text-foreground group-hover:text-primary dark:group-hover:text-accent">
                    {subitem.label}
                  </div>
                  {subitem.description && (
                    <div className="text-sm text-muted-foreground mt-1">
                      {subitem.description}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { industryType, role } = usePersonalization();
  const isPersonalized = Boolean(industryType || role);
  const navigate = useNavigate();
  const location = useLocation();

  const [storedPersonalization, setStoredPersonalization] = useState<{ industryType?: string; role?: string } | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem("tc360_personalization");
      if (raw) setStoredPersonalization(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (industryType || role) {
      const seed = { industryType, role };
      try {
        localStorage.setItem("tc360_personalization", JSON.stringify(seed));
        setStoredPersonalization(seed);
      } catch {}
    }
  }, [industryType, role]);

  const search = location.search;
  const hrefWithSearch = (href: string) => {
    if (!search || !isPersonalized) return href;
    const [path, hash] = href.split('#');
    const joiner = path.includes('?') ? '&' : '?';
    const withQuery = `${path}${joiner}${search.slice(1)}`;
    return hash ? `${withQuery}#${hash}` : withQuery;
  };

  const clearPersonalization = () => {
    const params = new URLSearchParams(location.search);
    params.delete('industrytype');
    params.delete('role');
    const qs = params.toString();
    navigate(qs ? `${location.pathname}?${qs}` : location.pathname, { replace: true });
  };

  const enablePersonalization = () => {
    if (!storedPersonalization) return;
    const params = new URLSearchParams(location.search);
    if (storedPersonalization.industryType) params.set('industrytype', storedPersonalization.industryType);
    if (storedPersonalization.role) params.set('role', storedPersonalization.role);
    const qs = params.toString();
    navigate(qs ? `${location.pathname}?${qs}` : location.pathname, { replace: true });
  };

  const { data: navigation } = useQuery({
    queryKey: ['navigation'],
    queryFn: () => fetchContentstackData('navigation'),
  });

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleLinkClick = () => {
    closeAllDropdowns();
    setMobileMenuOpen(false);
  };

  const navigateWithHash = (href: string) => {
    const [pathname, hash] = href.split('#');
    const target = hrefWithSearch(pathname || '/');
    navigate(target, { replace: false });
    if (hash) {
      // Wait for route navigation then scroll to hash
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
    handleLinkClick();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 dark:bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-black/50">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <a href={hrefWithSearch('/')} onClick={handleLinkClick} className="flex items-center space-x-2">
              <img src={appLogo} alt="TalentConnect360 logo" className="h-8 w-8 rounded object-cover" />
              <span className="font-bold text-xl text-foreground">TalentConnect360</span>
            </a>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation?.map((item: NavigationItem) => (
            <div key={item.uid} className="relative">
              {item.submenu && item.submenu.length > 0 ? (
                <Dropdown
                  item={item}
                  isOpen={activeDropdown === item.label}
                  onToggle={() => toggleDropdown(item.label)}
                  onNavigate={navigateWithHash}
                />
              ) : item.is_cta ? (
                <Button variant={item.variant || "default"} onClick={(e) => { e.preventDefault(); navigateWithHash(item.href); }}>
                  {item.label}
                </Button>
              ) : (
                <Button variant="nav" onClick={(e) => { e.preventDefault(); navigateWithHash(item.href); }}>
                  {item.label}
                </Button>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const ev = new CustomEvent('tc360:command', { detail: { open: true } });
              window.dispatchEvent(ev);
            }}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-foreground hover:bg-accent/10 transition-colors"
            aria-label="Search (Cmd/Ctrl+K)"
            title="Search (Cmd/Ctrl+K)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          {(isPersonalized || storedPersonalization) && (
            <div className="relative group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (isPersonalized) clearPersonalization(); else enablePersonalization();
                }}
                className={
                  isPersonalized
                    ? "inline-flex items-center justify-center h-9 w-9 rounded-md border border-border tc360-gradient-animated tc360-gradient-ring"
                    : "inline-flex items-center justify-center h-9 w-9 rounded-md border border-border hover:tc360-gradient-animated transition-colors"
                }
                aria-label={isPersonalized ? "Clear personalization" : "Enable personalization"}
              >
                <Sparkles className={isPersonalized ? "h-4 w-4 text-primary animate-pulse" : "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors"} />
              </button>
              <div className="absolute right-0 mt-2 hidden group-hover:block whitespace-nowrap rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground shadow">
                {isPersonalized ? 'Personalized for you — click to view all' : 'Personalization available — click to re-enable'}
              </div>
            </div>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background dark:bg-neutral-900 absolute top-16 left-0 w-full">
          <div className="container py-4 space-y-4">
            
            {navigation?.map((item: NavigationItem) => (
              <div key={item.uid}>
                {item.submenu && item.submenu.length > 0 ? (
                  <details className="group">
                    <summary className="flex justify-between items-center py-2 text-foreground hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="ml-4 border-l border-border pl-4 space-y-2 mt-2">
                      {item.submenu.map((subitem, subIndex) => (
                        <a
                          key={subIndex}
                          href={hrefWithSearch(subitem.href)}
                          className="block py-2 text-muted-foreground hover:text-primary dark:hover:text-accent transition-colors"
                          onClick={(e) => { e.preventDefault(); navigateWithHash(subitem.href); }}
                        >
                          {subitem.label}
                        </a>
                      ))}
                    </div>
                  </details>
                ) : item.is_cta ? (
                  <Button variant={item.variant || "default"} className="w-full" asChild>
                    <a href={hrefWithSearch(item.href)} onClick={handleLinkClick}>{item.label}</a>
                  </Button>
                ) : (
                  <a
                    href={hrefWithSearch(item.href)}
                    className="block py-2 text-foreground hover:text-primary dark:hover:text-accent transition-colors"
                    onClick={(e) => { e.preventDefault(); navigateWithHash(item.href); }}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-2">
              <button
                onClick={(e) => { e.preventDefault(); const ev = new CustomEvent('tc360:command', { detail: { open: true } }); window.dispatchEvent(ev); }}
                className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border text-foreground hover:bg-accent/10 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                <span className="text-sm">Search</span>
              </button>
            </div>
            {(isPersonalized || storedPersonalization) && (
              <div className="pt-2">
                <button
                  onClick={(e) => { e.preventDefault(); if (isPersonalized) clearPersonalization(); else enablePersonalization(); }}
                  className={
                    isPersonalized
                      ? "inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border tc360-gradient-animated tc360-gradient-ring"
                      : "inline-flex items-center gap-2 h-9 px-3 rounded-md border border-border hover:tc360-gradient-animated transition-colors"
                  }
                >
                  <Sparkles className={isPersonalized ? "h-4 w-4 text-primary animate-pulse" : "h-4 w-4 text-muted-foreground"} />
                  <span className="text-sm">{isPersonalized ? 'Clear personalization' : 'Enable personalization'}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </header>
  );
};