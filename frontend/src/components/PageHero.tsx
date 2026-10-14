import Link from "next/link";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro: string; image?: string }) {
  return (
    <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(19,47,40,.92), rgba(19,47,40,.45)), url(${image})` } : undefined}>
      <div className="site-container relative z-10 pt-36 pb-20 sm:pt-44 sm:pb-24" data-page-intro>
        <p className="eyebrow text-sage"><span /> {eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{intro}</p>
        <Link href="/appointment" className="button button-sage mt-8">Book an appointment <span aria-hidden>↗</span></Link>
      </div>
    </section>
  );
}
