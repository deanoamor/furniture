import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { site, waLink, WA_QUOTE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontak" className="contact" aria-labelledby="kontak-title">
      <div className="wrap contact__inner">
        <Reveal className="contact__copy">
          <h2 id="kontak-title" className="h2">Punya gambar kerja atau butuh rekomendasi?</h2>
          <p>Kirim kebutuhan Anda lewat WhatsApp. Kami balas dengan masukan material dan penawaran tertulis.</p>
        </Reveal>
        <Reveal className="contact__cta">
          <a className="btn btn--wa" href={waLink(WA_QUOTE)} rel="noopener"><WhatsAppIcon /> Chat WhatsApp</a>
          <p className="contact__num">WhatsApp: <a href={`tel:${site.phoneIntl}`}>{site.phoneDisplay}</a></p>
        </Reveal>
      </div>
    </section>
  );
}
