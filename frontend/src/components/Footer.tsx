"use client";

import Link from "next/link";
import { navigation, siteConfig, treatments } from "@/lib/site";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer overflow-hidden" data-footer>
      <div className="footer-marquee" data-footer-marquee aria-hidden>
        <div>CALMER VISITS • CLEARER CHOICES • HEALTHIER SMILES • CALMER VISITS • CLEARER CHOICES • HEALTHIER SMILES •&nbsp;</div>
        <div>CALMER VISITS • CLEARER CHOICES • HEALTHIER SMILES • CALMER VISITS • CLEARER CHOICES • HEALTHIER SMILES •&nbsp;</div>
      </div>
      <div className="site-container py-16 lg:py-24">
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.4fr_.7fr_.8fr_.9fr]" data-footer-grid>
          <div>
            <BrandMark light />
            <p className="mt-7 max-w-sm text-[17px] leading-7 text-white/66">{siteConfig.description}</p>
            <Link href="/appointment" className="button button-sage mt-8">Plan your visit <span aria-hidden>↗</span></Link>
          </div>
          <div>
            <p className="footer-label">Navigate</p>
            <ul className="footer-links">
              {navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="footer-label">Treatments</p>
            <ul className="footer-links">
              {treatments.map((item) => <li key={item.slug}><Link href={`/treatments#${item.slug}`}>{item.title}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="footer-label">Visit</p>
            <address className="not-italic text-[15px] leading-7 text-white/68">
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a><br />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
              <span>{siteConfig.address}</span>
            </address>
            <p className="footer-label mt-7">Opening hours</p>
            <ul className="space-y-1 text-[14px] text-white/62">
              {siteConfig.hours.map((item) => <li key={item.days}>{item.days}: {item.time}</li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-[13px] text-white/52 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {siteConfig.social.map((item) => <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label}</a>)}
          </div>
          <p>Designed and developed by <span className="text-white/78">{siteConfig.creator}</span></p>
          <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <span aria-hidden>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
