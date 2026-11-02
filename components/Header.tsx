"use client";

import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";
import { navLinks, waLink, WA_QUOTE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDoc = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDoc);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <div className="wrap site-header__bar">
        <Brand />
        <nav id="main-nav" className="main-nav" aria-label="Navigasi utama" data-open={open}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="btn btn--dark" href={waLink(WA_QUOTE)} rel="noopener">Minta Penawaran</a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-btn__bars" aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>
    </header>
  );
}
