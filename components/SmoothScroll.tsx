"use client";

import { useEffect } from "react";

/**
 * Inersia untuk scroll roda mouse. Trackpad dan layar sentuh sudah halus
 * secara native, jadi tidak disentuh. Mati bila reduced-motion aktif.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let target = 0;
    let current = 0;
    let raf = 0;
    const max = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const tick = () => {
      current += (target - current) * 0.1;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        raf = 0;
      }
      window.scrollTo({ top: current, behavior: "instant" });
      if (raf) raf = requestAnimationFrame(tick);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.defaultPrevented || e.deltaX !== 0 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      // Delta kecil = trackpad, biarkan native.
      if (e.deltaMode === 0 && Math.abs(e.deltaY) < 40 && !raf) return;
      // Jangan ganggu area yang bisa di-scroll sendiri (carousel, dsb).
      for (let n = e.target as HTMLElement | null; n && n !== document.body; n = n.parentElement) {
        const oy = getComputedStyle(n).overflowY;
        if ((oy === "auto" || oy === "scroll") && n.scrollHeight > n.clientHeight) return;
      }
      if (max() <= 0) return;
      e.preventDefault();
      if (!raf) {
        current = window.scrollY;
        target = current;
      }
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      target = Math.max(0, Math.min(max(), target + e.deltaY * unit));
      if (!raf) raf = requestAnimationFrame(tick);
    };

    // Sinkronkan bila scroll berubah dari luar (keyboard, scrollbar, anchor).
    const onScroll = () => {
      if (!raf) {
        current = window.scrollY;
        target = current;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
