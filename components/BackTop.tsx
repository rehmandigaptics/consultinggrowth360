"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

export function BackTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="backTop"
      className={visible ? "visible" : undefined}
      aria-label="Back to top"
      type="button"
      onClick={() => {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
          return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="bi bi-arrow-up" />
    </button>
  );
}
