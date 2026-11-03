import { sitePath } from "@/lib/site-path";
export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero is-flip">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href={sitePath("/")}>Home</a> <span>/</span> <a href={sitePath("/services")}>Services</a> <span>/</span> Digital</p>
        <div className="eyebrow hero-kicker">02 — Attract</div>
        <h1>
          <span className="line"><span className="line-inner">A website that</span></span>
          <span className="line"><span className="line-inner"><em>starts the work.</em></span></span>
        </h1>
        <p className="hero-desc">Premium digital experiences for advisory firms. Less brochure. More of the conversation you wish the right client would begin.</p>
        <div className="hero-actions">
          <a className="btn" href={sitePath("/contact")}>Talk about your site <i className="bi bi-arrow-up-right"></i></a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src={sitePath("/assets/images/generated/analytics-growth-services.webp")} alt="A laptop open on a clean desk in natural light" />
      </figure>
    </div>
  </section>

  <nav className="service-switch" aria-label="Services">
        <div className="wrap service-switch-inner">
      <a href={sitePath("/brand-positioning")}>Brand</a>
      <a href={sitePath("/digital-experience")} aria-current="page">Digital</a>
      <a href={sitePath("/lead-generation")}>Demand</a>
      <a href={sitePath("/crm-automation")}>CRM</a>
      <a href={sitePath("/n8n-automation")}>n8n</a>
      <a href={sitePath("/gohighlevel")}>GoHighLevel</a>
    </div>
  </nav>

  <section className="section">
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The tension</span>
        <h2>A list of services is not a <em>digital experience.</em></h2>
      </div>
      <div className="reveal">
        <p className="intro">The right visitor should feel understood in the first screen and know, without hunting, whether a conversation is worth their time.</p>
        <p className="copy" style={{ marginTop: "16px" }}>We design and build sites that carry your positioning, respect a buyer’s attention, and make the next step obvious. Beautiful, yes. Also useful on a Tuesday afternoon when someone serious is comparing you with two other firms.</p>
      </div>
    </div>
  </section>

  <section className="section band-paper">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "680px", marginBottom: "28px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>A site with a job</span>
        <h2>Six rooms. <em>One path.</em></h2>
      </div>
      <div className="sitemap reveal">
        <article><strong>Home</strong><p>The point of view, in one screen, for the buyer you want.</p></article>
        <article><strong>The work</strong><p>Offers explained in the language of the problem, not an internal menu.</p></article>
        <article><strong>Who it’s for</strong><p>A clear yes, and an equally clear not-for, so the wrong fit self-selects.</p></article>
        <article><strong>Thinking</strong><p>Proof through ideas and point of view, not a wall of logos.</p></article>
        <article><strong>The practice</strong><p>Credibility and judgment, without a biography that never gets to the point.</p></article>
        <article><strong>A conversation</strong><p>One next step, with enough context that the inquiry arrives prepared.</p></article>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row flip">
      <figure className="media-frame reveal">
        <img loading="lazy" src={sitePath("/assets/images/generated/analytics-growth-services.webp")} alt="Performance charts reviewed on a laptop" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What good feels like</span>
        <h2>Calm, precise, and <em>ready for a reply.</em></h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> A hierarchy that leads with the buyer’s problem.</li>
          <li><i className="bi bi-check-circle-fill"></i> Pages that can be read, not just scrolled past.</li>
          <li><i className="bi bi-check-circle-fill"></i> A path from interest to inquiry that does not leak.</li>
          <li><i className="bi bi-check-circle-fill"></i> A presence that still feels like you on a phone.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section band-gray">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "640px", marginBottom: "36px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What we build</span>
        <h2>From structure to a site you can <em>stand behind.</em></h2>
      </div>
      <div className="card-grid">
        <article className="reveal"><span className="num">01</span><h3>Site strategy</h3><p>The role of the site in the larger growth system, and what it is not asked to do.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Page narratives</h3><p>Each page earns its place with a job, a reader, and a next step.</p></article>
        <article className="reveal"><span className="num">03</span><h3>Conversion paths</h3><p>Quiet, confident ways to begin a conversation without a shouting button.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Design &amp; build</h3><p>A premium interface that loads cleanly and holds up under real content.</p></article>
        <article className="reveal"><span className="num">05</span><h3>Content guidance</h3><p>Language your team can extend without drifting back into generic claims.</p></article>
        <article className="reveal"><span className="num">06</span><h3>Refinement</h3><p>After launch, we watch where people hesitate and tighten the path.</p></article>
      </div>
    </div>
  </section>

  <div className="wrap">
    <a className="next-link" href={sitePath("/lead-generation")}>
      <span>Next capability<strong>Lead Generation</strong></span>
      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Attract</span>
        <h2>Give the right visitor a reason to <em>stay and write.</em></h2>
      </div>
      <div>
        <p className="copy">If the site looks finished but the inquiries do not match the work you want, the experience is the constraint.</p>
        <a className="btn" href={sitePath("/contact")}>Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
