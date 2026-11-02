import Image from "next/image";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import { products, waLink, WA_CUSTOM } from "@/lib/site";

export default function Products() {
  return (
    <section id="produk" className="products" aria-labelledby="produk-title">
      <div className="wrap products__inner">
        <Reveal className="sec-head sec-head--row">
          <div>
            <p className="eyebrow">Produk</p>
            <h2 id="produk-title" className="h2">Perlengkapan stainless untuk fasilitas Anda</h2>
            <p className="lead">Pilih dari katalog atau kirim gambar kerja. Kami produksi sesuai ukuran dan jumlah proyek.</p>
          </div>
          <a className="text-link" href="https://www.ciptakreasindo.com/">Lihat semua produk →</a>
        </Reveal>

        <ul className="product-grid">
          {products.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 4) * 0.08}>
              <article>
                <a className="card" href={p.href}>
                  <div className={`card__media${p.fit === "cover" ? " card__media--cover" : ""}`}>
                    <Image src={asset(`/images/${p.image}`)} alt={p.alt} fill sizes="(max-width: 640px) 120px, (max-width: 1024px) 33vw, 25vw" />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{p.name}</h3>
                    <p className="card__desc">{p.desc}</p>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="banner">
          <div className="banner__text">
            <p className="banner__title">Punya gambar kerja atau contoh produk?</p>
            <p className="banner__desc">Kami buat sesuai desain Anda, dengan ukuran, material, dan finishing yang Anda tentukan.</p>
          </div>
          <a className="btn btn--accent" href={waLink(WA_CUSTOM)} rel="noopener">Kirim kebutuhan →</a>
        </Reveal>
      </div>
    </section>
  );
}
