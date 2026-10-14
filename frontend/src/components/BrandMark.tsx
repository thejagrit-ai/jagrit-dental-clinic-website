import Link from "next/link";

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand-mark ${light ? "text-white" : "text-forest"}`} aria-label="Ivory and Sage Dental Studio home">
      <span className="brand-orbit border-current"><span className="bg-sage" /></span>
      <span><strong>Ivory &amp; Sage</strong><small>Dental studio</small></span>
    </Link>
  );
}
