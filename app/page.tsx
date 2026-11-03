import { sitePath } from "@/lib/site-path";
import Script from 'next/script';

export default function Page() {
  return (
    <>
<main id="main">
  <section className="hero" id="home">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide hero-layout">
      <div className="hero-copy">
        <div className="eyebrow hero-kicker">The growth partner for consultants</div>
        <h1>
          <span className="line"><span className="line-inner">Your expertise.</span></span>
          <span className="line"><span className="line-inner">Our strategy.</span></span>
          <span className="line"><span className="line-inner"><em>Limitless growth.</em></span></span>
        </h1>
        <p className="hero-desc">Turn your consulting expertise into a business that stands out, attracts the right clients, and scales with purpose.</p>
        <div className="hero-actions">
          <a className="btn" href={sitePath("/contact")}>Book a Growth Consultation <i className="bi bi-arrow-up-right"></i></a>
          <a className="text-link" href={sitePath("/services")}>Explore what we do</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-frame">
          <img src={sitePath("/assets/images/generated/home-hero-premium-meeting.webp")} alt="Sunlit modern office prepared for a client meeting" fetchPriority="high" />
        </div>
        <div className="hero-chip">United States · Advisory practices</div>
        <aside className="float-card">
          <div className="eyebrow" style={{ fontSize: "10px", letterSpacing: ".14em" }}>Built for ambition</div>
          <div className="stat">360°</div>
          <p>A connected approach to building a stronger consulting business.</p>
        </aside>
      </div>
    </div>
    <div className="wrap-wide hero-meta">
      <div><b>01</b> A better way to grow</div>
      <div className="meta-mid">Strategy · Positioning · Growth</div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about"><i className="bi bi-arrow-down"></i></a>
    </div>
  </section>

  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map((group) => (
        <div className="marquee-group" key={group}>
          {[
            "Brand strategy",
            "Positioning",
            "Digital experience",
            "Client acquisition",
            "Automation",
            "n8n workflows",
            "GoHighLevel",
            "Lead generation",
            "Consulting growth",
          ].map((label) => (
            <span className="marquee-item" key={`${group}-${label}`}>
              <span className="marquee-dot" />
              {label}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>

  <section className="section about" id="about">
    <div className="wrap about-grid">
      <div className="about-media reveal">
        <figure className="about-main">
          <img loading="lazy" src={sitePath("/assets/images/generated/about-team-collaboration.webp")} alt="Professionals collaborating around a table" />
        </figure>
        <figure className="about-side">
          <img loading="lazy" src={sitePath("/assets/images/generated/executive-strategy-meeting.webp")} alt="Advisors in a working session" />
        </figure>
        <div className="about-badge">
          <strong>360°</strong>
          <span>More than marketing. A complete growth perspective.</span>
        </div>
      </div>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>Who we are</span>
        <h2>You focus on your <em>expertise.</em> We focus on your growth.</h2>
        <p className="copy">You didn't become a consultant to spend every day chasing leads, juggling technology, or wondering where your next client will come from. You started to make an impact with what you know.</p>
        <p className="copy" style={{ marginTop: "14px" }}>ConsultingGrowth360 connects brand positioning, digital experience, client acquisition, and intelligent systems into one clear growth strategy, tailored to your business.</p>
        <ul className="checks">
          <li><i className="bi bi-check-circle-fill"></i> Clear market positioning</li>
          <li><i className="bi bi-check-circle-fill"></i> Better-fit opportunities</li>
          <li><i className="bi bi-check-circle-fill"></i> Connected growth systems</li>
          <li><i className="bi bi-check-circle-fill"></i> Sustainable execution</li>
        </ul>
        <a className="btn btn-dark" href={sitePath("/about")}>Read our story <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>

  <section className="section services" id="services">
    <div className="wrap">
      <div className="services-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>What we do</span>
          <h2>Everything your practice needs to <em>move forward.</em></h2>
        </div>
        <p className="copy">
          From first impression to long-term client relationships, we build the
          foundations that help your business grow.
        </p>
      </div>
      <div className="svc-grid">
        <a className="svc reveal" href={sitePath("/brand-positioning")}>
          <div className="svc-top">
            <span className="svc-tag">Position</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">01</span>
          <div className="svc-copy">
            <h3>Brand &amp; Positioning</h3>
            <p>Shape a confident, distinct market presence that communicates your value and wins trust.</p>
          </div>
        </a>
        <a className="svc reveal" href={sitePath("/digital-experience")}>
          <div className="svc-top">
            <span className="svc-tag">Attract</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">02</span>
          <div className="svc-copy">
            <h3>Web &amp; Digital Experience</h3>
            <p>Premium, conversion-minded websites that turn the right attention into real conversations.</p>
          </div>
        </a>
        <a className="svc reveal" href={sitePath("/lead-generation")}>
          <div className="svc-top">
            <span className="svc-tag">Acquire</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">03</span>
          <div className="svc-copy">
            <h3>Lead Generation</h3>
            <p>Create consistent demand through smart campaigns, compelling content, and clear funnels.</p>
          </div>
        </a>
        <a className="svc reveal" href={sitePath("/crm-automation")}>
          <div className="svc-top">
            <span className="svc-tag">Scale</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">04</span>
          <div className="svc-copy">
            <h3>CRM &amp; Automation</h3>
            <p>Reduce manual work with streamlined follow-ups, organized pipelines, and connected tools.</p>
          </div>
        </a>
        <a className="svc reveal" href={sitePath("/n8n-automation")}>
          <div className="svc-top">
            <span className="svc-tag">Automate</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">05</span>
          <div className="svc-copy">
            <h3>n8n Automation</h3>
            <p>Custom workflows that connect your forms, CRM, calendars, and tools — without brittle manual work.</p>
          </div>
        </a>
        <a className="svc reveal" href={sitePath("/gohighlevel")}>
          <div className="svc-top">
            <span className="svc-tag">Operate</span>
            <span className="svc-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
          </div>
          <span className="svc-num" aria-hidden="true">06</span>
          <div className="svc-copy">
            <h3>GoHighLevel</h3>
            <p>Pipelines, funnels, calendars, and follow-up configured so GHL becomes the operating system of the practice.</p>
          </div>
        </a>
      </div>
      <p className="services-note copy">
        Six capabilities, one system.{" "}
        <a href={sitePath("/services")}>
          See how they connect <i className="bi bi-arrow-up-right" />
        </a>
      </p>
    </div>
  </section>

  <section className="section method" id="approach">
    <div className="wrap">
      <div className="method-head reveal">
        <div>
          <span className="eyebrow">The ConsultingGrowth360 method</span>
          <h2>A clear path from <em>potential to progress.</em></h2>
        </div>
        <p>
          No disconnected tactics. No one-size-fits-all playbooks. Just a
          practical, integrated roadmap shaped around your goals.
        </p>
      </div>

      <ol className="method-list">
        <li className="reveal">
          <span className="method-index" aria-hidden="true">01</span>
          <div className="method-item">
            <h3>Discover</h3>
            <p>Understand your practice, ideal clients, positioning, and opportunities.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">02</span>
          <div className="method-item">
            <h3>Design</h3>
            <p>Build an actionable strategy around your brand, funnel, and digital systems.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">03</span>
          <div className="method-item">
            <h3>Activate</h3>
            <p>Launch focused initiatives, optimize client touchpoints, and connect the tools.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">04</span>
          <div className="method-item">
            <h3>Optimize</h3>
            <p>Learn from performance, refine what works, and create room to scale.</p>
          </div>
        </li>
      </ol>

      <p className="method-cta reveal">
        <a className="text-link" href={sitePath("/approach")}>
          Explore the full method <i className="bi bi-arrow-up-right" />
        </a>
      </p>
    </div>
  </section>

  <section className="section sectors" id="industries">
    <div className="wrap">
      <div className="sectors-head">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "var(--moss)" }}>Who we help</span>
          <h2>Your industry is unique. <em>Your growth should be too.</em></h2>
        </div>
        <p className="copy reveal">
          We help specialists and advisory businesses across the United States
          build a stronger presence and a more predictable pipeline.
        </p>
      </div>
      <div className="sector-grid">
        <a className="sector reveal" href={sitePath("/industries#business")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/premium-boardroom.webp")} alt="Contemporary executive boardroom" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">01</span>
            <h3>Business &amp; Management</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>Sharper positioning for firms that advise on how organizations run.</p>
          </div>
        </a>
        <a className="sector reveal" href={sitePath("/industries#marketing")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/about-team-collaboration.webp")} alt="Consultants working together" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">02</span>
            <h3>Marketing &amp; Growth</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>A practice that markets itself with the same intention it sells.</p>
          </div>
        </a>
        <a className="sector reveal" href={sitePath("/industries#healthcare")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/healthcare-consulting.webp")} alt="Healthcare professional at work" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">03</span>
            <h3>Healthcare &amp; Wellness</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>A trust-first presence for specialist advisors.</p>
          </div>
        </a>
        <a className="sector reveal" href={sitePath("/industries#finance")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/financial-consulting.webp")} alt="Financial documents on a desk" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">04</span>
            <h3>Finance &amp; Advisory</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>Clarity that earns the next serious conversation.</p>
          </div>
        </a>
        <a className="sector reveal" href={sitePath("/industries#technology")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/analytics-growth-services.webp")} alt="Team planning a technology project" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">05</span>
            <h3>Technology &amp; IT</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>A digital experience as precise as the work itself.</p>
          </div>
        </a>
        <a className="sector reveal" href={sitePath("/industries#education")}>
          <img loading="lazy" src={sitePath("/assets/images/generated/workshop-coaching.webp")} alt="Education specialists collaborating" />
          <div className="sector-shade" aria-hidden="true" />
          <div className="sector-body">
            <span className="sector-num">06</span>
            <h3>Education &amp; Coaching</h3>
            <span className="sector-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
            <p>A pipeline that matches the standard of the teaching.</p>
          </div>
        </a>
      </div>
      <p className="sectors-note copy">
        Don&apos;t see your specialty?{" "}
        <a href={sitePath("/contact")}>
          Let&apos;s discuss your goals <i className="bi bi-arrow-up-right" />
        </a>
      </p>
    </div>
  </section>

  <section className="section philosophy" id="philosophy">
    <div className="wrap philosophy-grid">
      <div className="philosophy-copy reveal">
        <span className="eyebrow">Why a connected approach matters</span>
        <blockquote className="quote">
          Great consulting businesses don&apos;t just need more visibility. They need the{" "}
          <em>right positioning</em>, a frictionless client journey, and systems that make growth{" "}
          <em>repeatable.</em>
        </blockquote>
        <div className="quote-by">
          <span className="quote-mark" aria-hidden="true">
            <i className="bi bi-arrow-up-right" />
          </span>
          <div>
            <strong>The ConsultingGrowth360 philosophy</strong>
            <span>Built around the business behind your expertise</span>
          </div>
        </div>
      </div>
      <figure className="philosophy-photo reveal">
        <img
          loading="lazy"
          src={sitePath("/assets/images/generated/contact-consultation.webp")}
          alt="Advisors gathered around a conference table"
        />
        <figcaption className="philosophy-caption">
          A smarter business model begins with connected thinking.
        </figcaption>
      </figure>
    </div>
  </section>

  <section className="contact" id="contact">
    <div className="contact-copy">
      <span className="eyebrow">Your next chapter starts here</span>
      <h2>Your expertise deserves a <em>business built to grow.</em></h2>
      <p className="copy">Let's talk about where you are today, where you want to go, and how a connected growth strategy can help you get there.</p>
      <ul className="contact-points">
        <li>A conversation shaped around your practice</li>
        <li>Positioning, demand, and systems in one view</li>
        <li>Serving consultants across the United States</li>
      </ul>
    </div>
    <div className="contact-panel">
      <h3>Let's talk about your growth.</h3>
      <p className="copy">Tell us a little about your consulting practice.</p>
      <div style={{ width: "100%", height: 485, marginTop: 28 }}>
        <iframe
          src="https://links.360growthlab.com/widget/form/d8TdNMOCsDXSOvzRbTos"
          style={{ width: "100%", height: "100%", border: "none", borderRadius: 8 }}
          id="inline-d8TdNMOCsDXSOvzRbTos"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Prepare My Inquiry Rehman Ali Form "
          data-height="485"
          data-layout-iframe-id="inline-d8TdNMOCsDXSOvzRbTos"
          data-form-id="d8TdNMOCsDXSOvzRbTos"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Prepare My Inquiry Rehman Ali Form "
        />
      </div>
      <Script src="https://links.360growthlab.com/js/form_embed.js" strategy="lazyOnload" />
    </div>
  </section>
</main>
    </>
  );
}
