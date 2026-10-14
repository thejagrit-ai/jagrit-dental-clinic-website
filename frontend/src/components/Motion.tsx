"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Motion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const scope = root.current;
    if (!scope) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
    let progressFrame = 0;
    const updateProgress = () => {
      if (progressFrame) return;
      progressFrame = window.requestAnimationFrame(() => {
        progressFrame = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (!progress) return;
        progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      });
    };
    const onScroll = () => {
      updateProgress();
    };
    const updateInitialProgress = () => {
      if (!progress) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    updateInitialProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reduced) return () => window.removeEventListener("scroll", onScroll);

    const context = gsap.context(() => {
      gsap.fromTo("[data-page-intro]", { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 1, ease: "power4.out" });

      gsap.utils.toArray<HTMLElement>("[data-reveal-line]").forEach((line) => {
        gsap.fromTo(line, { scaleX: 0, transformOrigin: "left center" }, {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: line, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 52 }, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.fromTo(group.children, { autoAlpha: 0, y: 44 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: { trigger: group, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        gsap.fromTo(element, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power4.inOut",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(element, { yPercent: -7 }, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: element, scrub: 1.1, start: "top bottom", end: "bottom top" },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((element) => {
        gsap.to(element, {
          y: -12,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.25,
        });
      });

      const footer = document.querySelector<HTMLElement>("[data-footer]");
      if (footer) {
        gsap.fromTo(footer.querySelectorAll("[data-footer-grid] > *"), { autoAlpha: 0, y: 40 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.13,
          ease: "power4.out",
          scrollTrigger: { trigger: footer, start: "top 82%", once: true },
        });
      }
    }, scope);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (progressFrame) window.cancelAnimationFrame(progressFrame);
      context.revert();
    };
  }, { scope: root, dependencies: [pathname], revertOnUpdate: true });

  return <div ref={root}>{children}</div>;
}
