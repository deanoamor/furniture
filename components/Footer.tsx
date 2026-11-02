import Brand from "./Brand";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Brand light />
            <p>Pabrikasi aneka produk logam dan stainless custom.</p>
          </div>
          <div className="site-footer__cols">
            <nav className="footer-col" aria-label="Halaman">
              <p className="footer-col__title">Halaman</p>
              {navLinks.filter((l) => l.href !== "#kontak").map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>
            <address className="footer-col">
              <p className="footer-col__title">Kontak</p>
              <a href={`tel:${site.phoneIntl}`}>WhatsApp: {site.phoneDisplay}</a>
              {site.address && <span>{site.address}</span>}
              {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            </address>
          </div>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} {site.name}. Seluruh hak dilindungi.</p>
      </div>
    </footer>
  );
}
