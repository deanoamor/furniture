import Image from "next/image";
import Reveal from "./Reveal";
import { works } from "@/lib/site";

export default function Work() {
  return (
    <section id="hasil" aria-labelledby="hasil-title">
      <div className="wrap work__inner">
        <Reveal className="sec-head sec-head--row">
          <div>
            <p className="eyebrow">Hasil kerja</p>
            <h2 id="hasil-title" className="h2">Dibuat langsung di workshop kami</h2>
          </div>
          <a className="text-link" href="https://www.ciptakreasindo.com/">Lihat galeri workshop →</a>
        </Reveal>
        <ul className="work-list">
          {works.map((w, i) => (
            <Reveal as="li" key={w.caption} delay={i * 0.1}>
              <figure className="work">
                <div className="work__media">
                  <Image src={`/images/${w.image}`} alt={w.alt} fill sizes="(max-width: 640px) 76vw, 33vw" />
                </div>
                <figcaption>{w.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
