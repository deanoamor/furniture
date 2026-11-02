"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type Props = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Fade/slide-in saat elemen masuk layar.
 * Tanpa JS atau dengan reduced-motion, konten tetap tampil normal.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    // Sudah terlihat saat load: biarkan tampil, tidak perlu disembunyikan lalu dimunculkan.
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) return;

    el.dataset.rv = "hidden";
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting || en.boundingClientRect.top < 0) {
            el.dataset.rv = "shown";
            io.disconnect();
            window.setTimeout(() => {
              el.removeAttribute("data-rv");
              el.classList.remove("rv");
            }, 1600 + delay * 1000);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`rv ${className}`.trim()}
      style={{ "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
