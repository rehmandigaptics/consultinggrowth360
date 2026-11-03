import { sitePath } from "@/lib/site-path";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <span className="mark">
                <i className="bi bi-arrow-up-right" />
              </span>
              <span>
                ConsultingGrowth<b>360</b>
              </span>
            </Link>
            <p>
              Brand, digital, and growth systems for ambitious consultants and
              advisory businesses across the United States.
            </p>
            <div className="socials">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/approach">Our Approach</Link>
            <Link href="/industries">Who We Help</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Expertise</h4>
            <Link href="/brand-positioning">Brand Strategy</Link>
            <Link href="/digital-experience">Web Development</Link>
            <Link href="/lead-generation">Lead Generation</Link>
            <Link href="/crm-automation">CRM &amp; Automation</Link>
            <Link href="/n8n-automation">n8n Automation</Link>
            <Link href="/gohighlevel">GoHighLevel</Link>
          </div>

          <div className="footer-connect">
            <h4>Let&apos;s connect</h4>
            <p>Serving consultants and advisory firms across the USA.</p>
            <Link className="footer-cta" href="/contact">
              Start a conversation <i className="bi bi-arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="footer-wordmark" aria-hidden="true">
          <div className="footer-word-glow" />
          <p className="footer-word">
            <span className="footer-word-main">ConsultingGrowth</span>
            <span className="footer-word-accent">360</span>
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ConsultingGrowth360. All rights reserved.</span>
          <a
            className="footer-powered"
            href="https://360growthlab.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
            <img
              src={sitePath("/assets/images/brand/360growthlab.png")}
              alt="360 Growth Lab"
              width={120}
              height={32}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
