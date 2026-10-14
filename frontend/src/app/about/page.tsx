import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { doctors, siteConfig, trustPoints } from "@/lib/site";

export const metadata: Metadata = { title: "About the clinic", description: "A modern dental studio designed around clarity, calm and considered care." };

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About the studio" title="A different pace of dental care." intro="Purposefully calm, clinically rigorous and designed to make every decision feel easier." image="/images/clinic.jpg" />
      <section className="section bg-cream">
        <div className="site-container grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-24">
          <div data-reveal><p className="eyebrow text-forest"><span /> Why we exist</p><h2 className="heading mt-5">Dental visits can feel human, not hurried.</h2><div className="mt-10 h-px w-20 bg-forest" data-reveal-line /></div>
          <div className="about-lead space-y-6 text-lg leading-8 text-stone" data-reveal><p>We created the studio around a simple idea: good dentistry begins when people feel heard. That means time to ask questions, treatment options explained without jargon and no pressure to decide before you are ready.</p><p>Our environment pairs modern planning with an intentionally warm experience—from the first call to follow-up after care.</p><Link href="/appointment" className="text-link inline-flex pt-3">Start with a conversation <span aria-hidden>↗</span></Link></div>
        </div>
        <div className="site-container mt-20 grid grid-cols-2 border-l border-t border-forest/15 sm:grid-cols-4" data-stagger>{trustPoints.map((item)=><div key={item.value} className="about-stat border-r border-b border-forest/15 p-6 sm:p-8"><span className="text-xs text-sage-dark">{item.value}</span><p className="mt-8 text-lg text-forest">{item.label}</p></div>)}</div>
      </section>
      <section className="section bg-white">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
          <div className="about-image-wrap" data-image-reveal><div className="relative aspect-[1.15] overflow-hidden"><Image src="/images/clinic.jpg" alt="Warm, modern dental studio interior" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" data-parallax /></div><span className="about-image-note" data-float>made for exhale</span></div>
          <div data-reveal><p className="eyebrow text-forest"><span /> The space</p><h2 className="heading mt-5">Designed to lower the volume.</h2><p className="mt-6 text-lg leading-8 text-stone">Natural tones, uncluttered rooms and a team that tells you what happens next. Small design choices support a calmer clinical experience.</p><div className="mt-10 grid gap-6 border-t border-forest/15 pt-6 sm:grid-cols-2"><div><p className="font-display text-3xl text-forest">01</p><p className="mt-2 text-sm leading-6 text-stone">A quiet arrival with time to settle in.</p></div><div><p className="font-display text-3xl text-forest">02</p><p className="mt-2 text-sm leading-6 text-stone">Clear next steps before you leave.</p></div></div></div>
        </div>
      </section>
      <section className="section bg-sand">
        <div className="site-container grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div data-reveal><p className="eyebrow text-forest"><span /> How it feels</p><h2 className="heading mt-5">Care, with a little more room around it.</h2></div>
          <div className="about-process" data-stagger>{[{ number: "01", title: "Listen first", body: "We start with your questions, your priorities and the context behind your visit." }, { number: "02", title: "Plan clearly", body: "You get practical choices, honest timeframes and space to make the right call." }, { number: "03", title: "Look after the details", body: "From comfort during treatment to thoughtful follow-up, every part of the visit is considered." }].map((item) => <article key={item.number} className="about-process-item"><span>{item.number}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
        </div>
      </section>
      <section className="section bg-cream">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div className="relative aspect-[.86] max-w-md overflow-hidden" data-image-reveal><Image src={doctors[0].image} alt={doctors[0].name} fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" data-parallax /></div>
          <div data-reveal><p className="eyebrow text-forest"><span /> Meet your dentist</p><h2 className="heading mt-5">Expertise that feels personal.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-stone">{doctors[0].bio} Every recommendation is shaped around a clear conversation and the kind of care you want to return to.</p><div className="mt-9 flex flex-wrap items-center gap-7"><Link href="/doctors" className="button button-dark">Meet {doctors[0].name.split(" ").slice(1).join(" ")} <span aria-hidden>↗</span></Link><span className="text-sm text-stone">{siteConfig.descriptor}</span></div></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
