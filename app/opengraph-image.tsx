import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "PT. Cipta Kreasindo Stainless";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#1F2933", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 12, background: "#fff", color: "#1F2933", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, fontWeight: 800 }}>CK</div>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: 2 }}>CIPTA KREASINDO STAINLESS</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ width: 80, height: 8, background: "#F28C28" }} />
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, maxWidth: 980 }}>Furniture stainless custom untuk kantor, hotel, dan fasilitas publik.</div>
        </div>
        <div style={{ fontSize: 26, color: "#CBD2D9" }}>Material 201 · 304 · 316 · Katalog dan desain custom</div>
      </div>
    ),
    size,
  );
}
