export const site = {
  name: "PT. Cipta Kreasindo Stainless",
  shortName: "Cipta Kreasindo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ciptakreasindo.com",
  description:
    "Pabrikan furniture dan perlengkapan stainless steel custom: tiang antrian, trolley hotel, tong sampah, pot tanaman, grease trap. Material 201, 304, 316. Melayani instansi pemerintah, perkantoran, hotel, rumah sakit, dan pabrik.",
  phoneDisplay: "0812-1932-5444",
  phoneIntl: "+6281219325444",
  wa: "6281219325444",
  // TODO: isi saat data tersedia. Kosong = tidak ditampilkan dan tidak masuk JSON-LD.
  address: "",
  email: "",
} as const;

export function waLink(text?: string) {
  const base = `https://wa.me/${site.wa}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const WA_QUOTE = "Halo, saya ingin meminta penawaran produk stainless.";
export const WA_CUSTOM = "Halo, saya punya gambar kerja untuk produk custom.";

export const navLinks = [
  { href: "#produk", label: "Produk" },
  { href: "#material", label: "Material" },
  { href: "#proses", label: "Proses" },
  { href: "#hasil", label: "Hasil kerja" },
  { href: "#kontak", label: "Kontak" },
] as const;

export const sectors = [
  { name: "Instansi pemerintah", items: "Tiang antrian, stand poster, tong sampah", image: "sektor-pemerintah.jpg", alt: "Gedung pemerintahan" },
  { name: "Perkantoran", items: "Standing ashtray, pot tanaman", image: "sektor-perkantoran.jpg", alt: "Lobi perkantoran modern" },
  { name: "Hotel dan restoran", items: "Trolley hotel, grease trap, pot tanaman", image: "sektor-hotel.jpg", alt: "Lobi hotel" },
  { name: "Rumah sakit", items: "Trolley linen, tong sampah", image: "sektor-rumahsakit.jpg", alt: "Area resepsionis rumah sakit" },
  { name: "Pabrik dan industri", items: "Grease trap, tong sampah, fabrikasi custom", image: "sektor-pabrik.jpg", alt: "Interior pabrik" },
] as const;

export const products = [
  { name: "Tiang antrian", desc: "Stanchion dan pembatas antrean untuk lobi, bank, dan pelayanan publik.", href: "https://www.ciptakreasindo.com/tiang-antrian/", image: "card-tiang.jpg", alt: "Tiang antrian stainless dengan tali beludru", fit: "cover" },
  { name: "Trolley hotel", desc: "Trolley bagasi dan housekeeping untuk hotel dan gedung perkantoran.", href: "https://www.ciptakreasindo.com/trolley-hotel-2/", image: "card-trolley-hotel.jpg", alt: "Trolley hotel stainless", fit: "contain" },
  { name: "Trolley linen laundry", desc: "Trolley pengangkut linen untuk hotel, rumah sakit, dan laundry.", href: "https://www.ciptakreasindo.com/trolley-linen-laundry/", image: "card-trolley-linen.jpg", alt: "Trolley linen laundry stainless", fit: "contain" },
  { name: "Standing ashtray", desc: "Tempat puntung rokok berdiri, model stainless polos atau perforasi.", href: "https://www.ciptakreasindo.com/standing-ashtray-stainless/", image: "card-ashtray.jpg", alt: "Standing ashtray stainless jumbo", fit: "contain" },
  { name: "Pot tanaman stainless", desc: "Pot untuk lobi, taman, dan area publik dengan ukuran sesuai pesanan.", href: "https://www.ciptakreasindo.com/pot-tanaman-stainless/", image: "card-pot.jpg", alt: "Pot tanaman stainless kotak", fit: "contain" },
  { name: "Tong sampah", desc: "Pilihan stainless, fiberglass, dan plastik, termasuk model pilah.", href: "https://www.ciptakreasindo.com/tong-sampah-fiberglass/", image: "card-tong.jpg", alt: "Tong sampah stainless pedal", fit: "contain" },
  { name: "Grease trap", desc: "Penangkap lemak untuk dapur restoran, hotel, dan pengolahan makanan.", href: "https://www.ciptakreasindo.com/grease-trap/", image: "card-grease.jpg", alt: "Grease trap stainless", fit: "contain" },
  { name: "Poster display", desc: "Stand poster dan papan informasi untuk lobi, pameran, dan acara.", href: "https://www.ciptakreasindo.com/poster-display/", image: "card-poster.jpg", alt: "Stand poster display stainless", fit: "contain" },
] as const;

export const materials = [
  { grade: "201", title: "Ekonomis", desc: "Cocok untuk area dalam ruangan yang kering.", highlight: false },
  { grade: "304", title: "Standar yang paling umum", desc: "Tahan karat untuk dalam dan luar ruangan, aman untuk area makanan.", highlight: true },
  { grade: "316", title: "Tahan korosi tinggi", desc: "Untuk area pesisir, lembap, atau terpapar bahan kimia.", highlight: false },
  { grade: "430", title: "Terjangkau dan magnetik", desc: "Untuk dekorasi dan pemakaian dalam ruangan.", highlight: false },
] as const;

export const steps = [
  { title: "Konsultasi kebutuhan", desc: "Anda kirim gambar, ukuran, jumlah, dan lokasi pemakaian. Kami bantu memilih material dan model." },
  { title: "Gambar kerja dan penawaran", desc: "Kami siapkan gambar kerja dan penawaran tertulis untuk Anda setujui sebelum produksi." },
  { title: "Produksi di workshop", desc: "Pemotongan, pembentukan, dan pengelasan stainless dikerjakan di workshop kami." },
  { title: "Finishing dan pengiriman", desc: "Finishing sesuai permintaan, pemeriksaan akhir, lalu pengiriman ke lokasi Anda." },
] as const;

export const works = [
  { caption: "Tong sampah stainless jumbo", image: "hasil-1.jpg", alt: "Tong sampah stainless jumbo di workshop" },
  { caption: "Trolley hotel stainless", image: "hasil-2.jpg", alt: "Trolley hotel stainless di workshop" },
  { caption: "Trolley bagasi", image: "hasil-3.jpg", alt: "Trolley bagasi stainless di workshop" },
] as const;
