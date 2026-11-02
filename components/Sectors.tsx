import Image from "next/image";
import { asset } from "@/lib/asset";
import Reveal from "./Reveal";
import { sectors } from "@/lib/site";

export default function Sectors() {
  return (
    <section className="sectors" aria-labelledby="sektor-title">
      <div className="wrap sectors__inner">
        <Reveal className="sec-head">
          <p className="eyebrow">Sektor yang kami layani</p>
          <h2 id="sektor-title" className="h2">Untuk fasilitas pemerintah dan korporasi</h2>
        </Reveal>
        <ul className="sector-list">
          {sectors.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 0.08}>
              <figure className="sector">
                <Image src={asset(`/images/${s.image}`)} alt={s.alt} fill sizes="(max-width: 640px) 68vw, (max-width: 1024px) 33vw, 20vw" />
                <figcaption>
                  <span className="sector__name">{s.name}</span>
                  <span className="sector__items">{s.items}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
