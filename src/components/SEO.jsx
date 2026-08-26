import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "Mebrahtom Tadesse";
const fallbackDescription = "Mebrahtom Tadesse is an Ethiopian fashion designer, master cutter and tailor creating bespoke Habesha Kemis, traditional Ethiopian clothing and contemporary couture in Addis Ababa.";

const pageContent = {
  "/": {
    title: "Ethiopian Habesha Fashion Designer | Mebrahtom Tadesse",
    description: fallbackDescription,
    keywords: "Ethiopian fashion designer, Habesha designer, Habesha Kemis, Ethiopian traditional clothing, Addis Ababa tailor",
  },
  "/about": {
    title: "About an Ethiopian Habesha Fashion Designer | Mebrahtom Tadesse",
    description: "Meet Mebrahtom Tadesse, an Addis Ababa fashion designer and master tailor preserving Ethiopian textile traditions through modern Habesha clothing and bespoke design.",
    keywords: "Ethiopian designer, Habesha fashion, Ethiopian textile heritage, Addis Ababa tailor",
  },
  "/projects": {
    title: "Ethiopian and Habesha Fashion Projects | Mebrahtom Tadesse",
    description: "Explore bespoke garments, Habesha Kemis, traditional Ethiopian wear and contemporary fashion projects by Mebrahtom Tadesse.",
    keywords: "Habesha fashion projects, Ethiopian clothing design, bespoke Habesha Kemis, Ethiopian couture",
  },
  "/gallery": {
    title: "Habesha Clothing and Ethiopian Fashion Gallery | Mebrahtom Tadesse",
    description: "View a gallery of Ethiopian traditional clothing, Habesha fashion, handwoven textile details and contemporary garments by Mebrahtom Tadesse.",
    keywords: "Habesha clothing gallery, Ethiopian fashion gallery, Ethiopian traditional dress, Habesha Kemis",
  },
  "/contact": {
    title: "Contact an Ethiopian Habesha Fashion Designer | Addis Ababa",
    description: "Contact Mebrahtom Tadesse for bespoke Habesha Kemis, Ethiopian traditional wear, bridal couture, tailoring and fashion commissions from Addis Ababa.",
    keywords: "Habesha tailor Addis Ababa, Ethiopian fashion commission, Habesha Kemis designer contact",
  },
};

const privatePaths = new Set(["/admin", "/update-contact"]);

const faqSchema = [
  ["What is your process for a bespoke commission?", "Every garment begins with a conversation about the occasion, your body and the traditions you wish to honour. We then select fabrics and trims, take measurements, draft a pattern and refine the piece through fittings."],
  ["Do you work with clients outside Ethiopia?", "Yes. Mebrahtom Tadesse works with clients worldwide from the atelier in Addis Ababa, with remote measurement guidance and international shipping available."],
  ["How long does a bespoke garment take?", "A single bespoke piece typically takes three to eight weeks depending on complexity, fabric availability and fittings."],
  ["Do you create traditional wedding attire?", "Yes. Bridal and ceremonial Habesha wear, including Habesha Kemis, kaba and netela sets, is central to the practice."],
  ["What are your starting prices?", "Bespoke commissions start at around $500, with pricing depending on fabric, complexity and handwork."],
];

function setMeta(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isProject = pathname.startsWith("/project/");
    const page = pageContent[pathname] || (isProject
      ? {
        title: "Ethiopian Fashion Project | Habesha Design | Mebrahtom Tadesse",
        description: "Discover a bespoke Ethiopian fashion and Habesha design project by Mebrahtom Tadesse.",
        keywords: "Ethiopian fashion project, Habesha design, traditional Ethiopian clothing",
      }
      : pageContent["/"]);
    const siteUrl = import.meta.env.VITE_SITE_URL || window.location.origin;
    const canonicalPath = pathname.startsWith("/project/") ? pathname : pathname.replace(/\/$/, "") || "/";
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "keywords", page.keywords);
    setMeta("name", "robots", privatePaths.has(pathname) ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", `${siteUrl}/images/mebri-design-logo.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);

    let canonical = document.head.querySelector("link[rel=canonical]");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    let schema = document.head.querySelector("script[data-seo-schema]");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      document.head.appendChild(schema);
    }
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "FashionDesigner",
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/images/mebri-design-logo.png`,
      description: fallbackDescription,
      address: { "@type": "PostalAddress", addressLocality: "Addis Ababa", addressCountry: "ET" },
      areaServed: "Worldwide",
      knowsAbout: ["Habesha Kemis", "Ethiopian traditional clothing", "Bespoke tailoring", "Ethiopian textiles"],
      sameAs: ["https://instagram.com", "https://tiktok.com", "https://twitter.com"],
    };
    schema.textContent = JSON.stringify(pathname === "/contact"
      ? [organizationSchema, {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqSchema.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }]
      : organizationSchema);
  }, [pathname]);

  return null;
}