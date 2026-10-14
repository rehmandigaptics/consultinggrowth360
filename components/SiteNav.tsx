"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/brand-positioning", label: "Brand Strategy" },
  { href: "/digital-experience", label: "Web Development" },
  { href: "/lead-generation", label: "Lead Generation" },
  { href: "/crm-automation", label: "CRM & Automation" },
  { href: "/n8n-automation", label: "n8n Automation" },
  { href: "/gohighlevel", label: "GoHighLevel" },
];

const serviceHrefs = new Set(serviceLinks.map((link) => link.href));

export function SiteNav() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const servicesActive = serviceHrefs.has(pathname);

  const setMenu = useCallback(
    (next: boolean) => {
      setOpen(next);
      document.body.classList.toggle("menu-lock", next);
      if (next) lenis?.stop();
      else lenis?.start();
      if (!next) setDrawerServicesOpen(false);
    },
    [lenis],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenu(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setMenu]);

  useEffect(() => {
    setMenu(false);
    setServicesOpen(false);
  }, [pathname, setMenu]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [servicesOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("menu-lock");
      lenis?.start();
    };
  }, [lenis]);

  return (
    <>
      <header
        className={`site-nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
        id="siteNav"
      >
        <Link className="brand" href="/" aria-label="ConsultingGrowth360 home">
          <span className="mark">
            <i className="bi bi-arrow-up-right" />
          </span>
          <span>
            ConsultingGrowth<b>360</b>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About
          </Link>

          <div
            className={`nav-dropdown${servicesOpen ? " is-open" : ""}${servicesActive ? " is-active" : ""}`}
            ref={servicesRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              aria-controls="services-menu"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <i className="bi bi-chevron-down" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-panel" id="services-menu" role="menu">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setServicesOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/approach"
            aria-current={pathname === "/approach" ? "page" : undefined}
          >
            Approach
          </Link>
          <Link
            href="/industries"
            aria-current={pathname === "/industries" ? "page" : undefined}
          >
            Who We Help
          </Link>
        </nav>
        <Link
          className="nav-cta"
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Let&apos;s Talk <i className="bi bi-arrow-up-right" />
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="drawer"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setMenu(!open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`drawer${open ? " is-open" : ""}`}
        id="drawer"
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="drawer-glow" aria-hidden="true" />
        <div className="drawer-inner">
          <div className="drawer-kicker">
            <span className="eyebrow">Menu</span>
            <p>Navigate the practice.</p>
          </div>

          <nav className="drawer-nav" aria-label="Mobile">
            <Link
              href="/about"
              className="drawer-link"
              aria-current={pathname === "/about" ? "page" : undefined}
              onClick={() => setMenu(false)}
            >
              <span className="drawer-index">01</span>
              <span className="drawer-label">About</span>
            </Link>

            <div
              className={`drawer-group${drawerServicesOpen ? " is-open" : ""}${servicesActive ? " is-active" : ""}`}
            >
              <button
                type="button"
                className="drawer-group-trigger"
                aria-expanded={drawerServicesOpen}
                onClick={() => setDrawerServicesOpen((value) => !value)}
              >
                <span className="drawer-index">02</span>
                <span className="drawer-label">Services</span>
                <i className="bi bi-chevron-down" aria-hidden="true" />
              </button>
              <div className="drawer-group-links">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    onClick={() => setMenu(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/approach"
              className="drawer-link"
              aria-current={pathname === "/approach" ? "page" : undefined}
              onClick={() => setMenu(false)}
            >
              <span className="drawer-index">03</span>
              <span className="drawer-label">Approach</span>
            </Link>
            <Link
              href="/industries"
              className="drawer-link"
              aria-current={pathname === "/industries" ? "page" : undefined}
              onClick={() => setMenu(false)}
            >
              <span className="drawer-index">04</span>
              <span className="drawer-label">Who we help</span>
            </Link>
          </nav>

          <div className="drawer-bottom">
            <Link
              className="drawer-cta"
              href="/contact"
              onClick={() => setMenu(false)}
            >
              Let&apos;s talk <i className="bi bi-arrow-up-right" />
            </Link>
            <p className="drawer-foot">Growth systems for consultants</p>
          </div>
        </div>
      </div>
    </>
  );
}
