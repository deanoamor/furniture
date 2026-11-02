import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import Products from "@/components/Products";
import Materials from "@/components/Materials";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { WhatsAppIcon } from "@/components/Icons";
import { products, site, waLink, WA_QUOTE } from "@/lib/site";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        telephone: site.phoneIntl,
        ...(site.email ? { email: site.email } : {}),
        ...(site.address ? { address: { "@type": "PostalAddress", streetAddress: site.address, addressCountry: "ID" } } : {}),
        areaServed: { "@type": "Country", name: "Indonesia" },
        contactPoint: [{ "@type": "ContactPoint", telephone: site.phoneIntl, contactType: "sales", availableLanguage: ["id"] }],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "id-ID",
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "ItemList",
        name: "Produk stainless",
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Product", name: p.name, description: p.desc, url: p.href, image: `${site.url}/images/${p.image}`, brand: { "@type": "Brand", name: site.name } },
        })),
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">Lompat ke konten</a>
      <Header />
      <main id="konten">
        <Hero />
        <Sectors />
        <Products />
        <Materials />
        <Process />
        <Work />
        <Contact />
      </main>
      <Footer />
      <a className="btn btn--wa wa-float" href={waLink(WA_QUOTE)} rel="noopener"><WhatsAppIcon /> Chat WhatsApp</a>
      <SmoothScroll />
      <JsonLd />
    </>
  );
}
