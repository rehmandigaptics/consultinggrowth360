"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.documentElement.classList.remove("js");
      return;
    }

    document.documentElement.classList.add("js");
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
          .from(
            ".hero .line-inner, .page-hero .line-inner",
            { yPercent: 110, duration: 1.05, stagger: 0.1 },
            0.15,
          )
          .from(
            ".hero .hero-kicker, .page-hero .hero-kicker, .hero .hero-desc, .page-hero .hero-desc, .hero .hero-actions, .page-hero .hero-actions, .crumbs",
            { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.08 },
            0.35,
          )
          .from(
            ".hero-frame, .page-hero-media",
            {
              clipPath: "inset(14% 10% 14% 10%)",
              autoAlpha: 0,
              duration: 1.2,
              ease: "power2.out",
            },
            0.2,
          );

        const chips = document.querySelectorAll(".hero-chip, .float-card");
        if (chips.length) {
          heroTl.from(
            chips,
            { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.12 },
            0.7,
          );
        }

        document
          .querySelectorAll(".hero-frame img, .page-hero-media img")
          .forEach((img) => {
            const trigger = img.closest(".hero, .page-hero");
            if (!trigger) return;
            gsap.to(img, {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            });
          });

        gsap.utils.toArray<HTMLElement>("section[id]").forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 30%",
            end: "bottom 40%",
            onToggle: (self) => {
              document
                .querySelectorAll(`.nav-links a[href="#${section.id}"]`)
                .forEach((link) => {
                  link.classList.toggle("is-active", self.isActive);
                });
            },
          });
        });

        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            },
          );
        });

        gsap.to(".progress", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });

        const glowHost = document.querySelector<HTMLElement>(
          ".hero, .page-hero",
        );
        if (glowHost && window.matchMedia("(pointer: fine)").matches) {
          const onMove = (event: PointerEvent) => {
            const rect = glowHost.getBoundingClientRect();
            glowHost.style.setProperty(
              "--x",
              `${event.clientX - rect.left}px`,
            );
            glowHost.style.setProperty(
              "--y",
              `${event.clientY - rect.top}px`,
            );
          };
          glowHost.addEventListener("pointermove", onMove);
          return () => glowHost.removeEventListener("pointermove", onMove);
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return <div className="progress" aria-hidden="true" />;
}
