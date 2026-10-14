import Link from "next/link";

export function CTA() {
  return (
    <section className="section bg-sage">
      <div className="site-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" data-reveal>
        <div>
          <p className="eyebrow text-forest"><span /> Your next step</p>
          <h2 className="heading mt-5 max-w-3xl">Let&apos;s make your next visit feel easier.</h2>
        </div>
        <Link href="/appointment" className="button button-dark">Book an appointment <span aria-hidden>↗</span></Link>
      </div>
    </section>
  );
}
