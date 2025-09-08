import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { fetchContentstackData } from "@/data/contentstack";
import { useQuery } from "@tanstack/react-query";
import { usePersonalization } from "@/hooks/usePersonalization";

const staticPages = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Company", href: "/company" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { industryType, role } = usePersonalization();

  const { data: caseStudies } = useQuery({
    queryKey: ["case_studies_all"],
    queryFn: () => fetchContentstackData("case_studies"),
  });

  const search = location.search;
  const hrefWithSearch = (href: string) => {
    if (industryType || role) {
      const params = new URLSearchParams(search);
      if (industryType && !params.get("industrytype")) params.set("industrytype", industryType);
      if (role && !params.get("role")) params.set("role", role);
      const qs = params.toString();
      return qs ? `${href}?${qs}` : href;
    }
    return href;
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    const onCmd = (ev: Event) => {
      const e = ev as CustomEvent<{ open?: boolean; toggle?: boolean }>;
      if (e.detail?.toggle) setOpen((v) => !v);
      else if (typeof e.detail?.open === 'boolean') setOpen(e.detail.open);
      else setOpen(true);
    };
    window.addEventListener('tc360:command', onCmd as EventListener);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener('tc360:command', onCmd as EventListener);
    };
  }, []);

  const caseStudyItems = useMemo(() => {
    return (caseStudies || []).map((cs: any) => ({
      label: cs.title,
      sub: cs.company_name,
      href: cs.link,
    }));
  }, [caseStudies]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search pages, case studies…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Pages">
          {staticPages.map((p) => (
            <CommandItem
              key={p.href}
              onSelect={() => {
                setOpen(false);
                navigate(hrefWithSearch(p.href));
              }}
            >
              {p.label}
            </CommandItem>
          ))}
        </CommandGroup>
        {caseStudyItems.length > 0 && (
          <>
            <CommandSeparator />
            <CommandGroup heading="Case Studies">
              {caseStudyItems.map((cs) => (
                <CommandItem
                  key={cs.href}
                  onSelect={() => {
                    setOpen(false);
                    navigate(hrefWithSearch(cs.href));
                  }}
                >
                  {cs.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </>
        )}
      </CommandList>
    </CommandDialog>
  );
};

export default CommandPalette;
