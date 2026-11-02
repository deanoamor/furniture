import Image from "next/image";
import { asset } from "@/lib/asset";
import { WhatsAppIcon } from "./Icons";
import { waLink, WA_QUOTE } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow kicker rise">Pabrikan furniture stainless steel</p>
          <h1 id="hero-title" className="rise" style={{ "--d": ".08s" } as React.CSSProperties}>
            Furniture stainless custom untuk kantor, hotel, dan fasilitas publik.
          </h1>
          <p className="hero__lead rise" style={{ "--d": ".16s" } as React.CSSProperties}>
            Tiang antrian, trolley, tong sampah, pot tanaman, dan perlengkapan lainnya. Pilih dari katalog atau kirim gambar kerja, kami produksi dengan material stainless 201, 304, atau 316.
          </p>
          <div className="hero__cta rise" style={{ "--d": ".24s" } as React.CSSProperties}>
            <a className="btn btn--wa" href={waLink(WA_QUOTE)} rel="noopener">
              <WhatsAppIcon /> Minta penawaran via WhatsApp
            </a>
            <a className="btn btn--outline" href="#produk">Lihat produk</a>
          </div>
          <ul className="hero__proof rise" style={{ "--d": ".32s" } as React.CSSProperties}>
            <li>Material 201 · 304 · 316 · 430</li>
            <li>Katalog dan desain custom</li>
            <li>Produksi sesuai jumlah proyek</li>
          </ul>
        </div>

        <div className="bento rise" style={{ "--d": ".2s" } as React.CSSProperties}>
          <figure className="bento__cell bento__cell--tall">
            <Image src={asset("/images/hero-trolley.jpg")} alt="Trolley hotel stainless" fill priority sizes="(max-width: 860px) 40vw, 28vw" />
          </figure>
          <figure className="bento__cell bento__cell--photo">
            <Image src={asset("/images/hero-workshop.jpg")} alt="Standing ashtray stainless hasil produksi workshop" fill priority sizes="(max-width: 860px) 30vw, 24vw" />
          </figure>
          <figure className="bento__cell">
            <Image src={asset("/images/hero-ashtray.jpg")} alt="Standing ashtray stainless" fill sizes="(max-width: 860px) 30vw, 24vw" />
          </figure>
        </div>
      </div>
    </section>
  );
}
