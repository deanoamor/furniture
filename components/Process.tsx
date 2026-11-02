import Reveal from "./Reveal";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="proses" className="process" aria-labelledby="proses-title">
      <div className="wrap process__inner">
        <Reveal className="sec-head">
          <p className="eyebrow">Proses kerja</p>
          <h2 id="proses-title" className="h2">Dari gambar kerja sampai barang tiba</h2>
        </Reveal>
        <ol className="step-list">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08}>
              <div className="step">
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
