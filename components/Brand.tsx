import Link from "next/link";

export default function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="PT. Cipta Kreasindo Stainless, ke beranda">
      <span className={`brand__mark${light ? " brand__mark--light" : ""}`} aria-hidden="true">CK</span>
      <span className="brand__text">
        <span className="brand__name">CIPTA KREASINDO</span>
        <span className="brand__sub">STAINLESS</span>
      </span>
    </Link>
  );
}
