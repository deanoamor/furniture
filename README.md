# PT. Cipta Kreasindo Stainless: Website (Next.js)

Next.js 16 (App Router) + TypeScript, tanpa library UI tambahan.

## Menjalankan
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Salin `.env.example` menjadi `.env.local` dan isi `NEXT_PUBLIC_SITE_URL` dengan domain produksi (dipakai untuk canonical, sitemap, Open Graph).

## Yang perlu diisi
- `lib/site.ts`: `address` dan `email` (kosong = tidak tampil di footer dan JSON-LD).
- Semua konten (produk, sektor, material, proses) ada di `lib/site.ts`.
- Foto di `public/images`. Foto sektor adalah stok Unsplash, ganti dengan foto proyek asli. Foto produk dan hasil kerja berasal dari situs lama dan masih ber-watermark, ganti saat ada foto yang lebih bersih.

## SEO
- Metadata, canonical, Open Graph/Twitter, robots, `sitemap.xml`, `robots.txt`, OG image dinamis, favicon.
- JSON-LD: Organization, WebSite, ItemList produk.
- HTML semantik: satu `h1`, `h2` per section, `main`, `nav` ber-label, `article`, `figure`, `ol`/`dl`, `address`, skip link.

## Responsif
Breakpoint 1024 (tablet), 860 (menu hamburger dan tombol WhatsApp melayang), 640 (mobile: kartu produk horizontal, carousel sektor dan hasil kerja).
Animasi dan smooth scroll mati otomatis bila perangkat memakai "reduce motion".
