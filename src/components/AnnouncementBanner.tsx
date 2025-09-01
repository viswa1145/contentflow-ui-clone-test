import { X } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchContentstackData } from "@/data/contentstack";

export const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const { data: announcement } = useQuery({
    queryKey: ['announcement_banner'],
    queryFn: () => fetchContentstackData('announcement_banner'),
  });

  if (!isVisible || !announcement) return null;

  return (
    <div className="relative bg-gradient-to-r from-accent/10 to-accent/20 border-b border-accent/30">
      <div className="container flex items-center justify-center py-3 text-center">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-foreground">
            {announcement.message}
          </span>
          <a
            href={announcement.link_url}
            className="text-sm font-semibold text-primary hover:text-primary-light underline underline-offset-4 transition-colors"
          >
            {announcement.link_text}
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-background/50 rounded transition-colors"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};