import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { fetchContentstackData, NavigationItem } from "@/data/contentstack";
import { useQuery } from "@tanstack/react-query";

interface DropdownProps {
  item: NavigationItem;
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown = ({ item, isOpen, onToggle }: DropdownProps) => {
  if (!item.submenu) return null;

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
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-elegant z-50 animate-fade-in">
          <div className="p-2">
            {item.submenu.map((subitem, index) => (
              <a
                key={index}
                href={subitem.href}
                className="block p-3 rounded-md hover:bg-accent/20 transition-colors group"
              >
                <div className="font-medium text-foreground group-hover:text-primary">
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
      )}
    </div>
  );
};

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-xl text-foreground">darwinbox</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation?.map((item: NavigationItem) => (
            <div key={item.uid} className="relative">
              {item.submenu ? (
                <Dropdown
                  item={item}
                  isOpen={activeDropdown === item.label}
                  onToggle={() => toggleDropdown(item.label)}
                />
              ) : (
                <Button variant="nav" asChild>
                  <a href={item.href}>{item.label}</a>
                </Button>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="nav" asChild>
            <a href="#pricing">Pricing</a>
          </Button>
          <Button variant="demo" asChild>
            <a href="#demo">Schedule a Demo</a>
          </Button>
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
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {navigation?.map((item: NavigationItem) => (
              <div key={item.uid}>
                <a
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <a href="#pricing">Pricing</a>
              </Button>
              <Button variant="demo" className="w-full" asChild>
                <a href="#demo">Schedule a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for dropdown close */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-30"
          onClick={closeAllDropdowns}
        />
      )}
    </header>
  );
};