import Reveal from "./Reveal";
import { materials } from "@/lib/site";

export default function Materials() {
  return (
    <section id="material" aria-labelledby="material-title">
      <div className="wrap material__inner">
        <Reveal className="material__copy">
          <p className="eyebrow">Material</p>
          <h2 id="material-title" className="h2">Grade yang tepat untuk lokasi dan anggaran</h2>
          <p className="lead">Pilihan grade menentukan ketahanan terhadap karat dan harga akhir. Kami bantu menyesuaikannya dengan kondisi pemakaian. Plat esser dan fiberglass juga tersedia untuk produk tertentu.</p>
        </Reveal>
        <Reveal>
          <dl className="grade-list">
            {materials.map((m) => (
              <div key={m.grade} className={`grade${m.highlight ? " grade--hl" : ""}`}>
                <dt className="grade__tag"><span className="sr-only">Stainless </span>{m.grade}</dt>
                <dd className="grade__body">
                  <span className="grade__title">{m.title}</span>
                  <span className="grade__desc">{m.desc}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
