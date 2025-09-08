import { useEffect } from "react";

type SeoProps = {
  title?: string;
  description?: string;
  ogImage?: string;
};

const Seo = ({ title, description, ogImage }: SeoProps) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOg = (property: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:image', ogImage);
  }, [title, description, ogImage]);

  return null;
};

export default Seo;
