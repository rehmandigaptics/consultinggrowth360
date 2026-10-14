import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brand & Positioning — ConsultingGrowth360",
  description: "Positioning for consultants who are tired of sounding interchangeable. Narrative, offer architecture, and a message system the market can repeat.",
};

export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href="/">Home</a> <span>/</span> <a href="/services">Services</a> <span>/</span> Brand</p>
        <div className="eyebrow hero-kicker">01 — Position</div>
        <h1>
          <span className="line"><span className="line-inner">Sound like</span></span>
          <span className="line"><span className="line-inner">the only <em>sensible choice.</em></span></span>
        </h1>
        <p className="hero-desc">Brand and positioning for consultants who are excellent at the work and tired of being described like everyone else.</p>
        <div className="hero-actions">
          <a className="btn" href="/contact">Talk about positioning <i className="bi bi-arrow-up-right"></i></a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/executive-strategy-meeting.webp" alt="A strategy session around a conference table" />
      </figure>
    </div>
  </section>

  <nav className="service-switch" aria-label="Services">
        <div className="wrap service-switch-inner">
      <a href="/brand-positioning" aria-current="page">Brand</a>
      <a href="/digital-experience">Digital</a>
      <a href="/lead-generation">Demand</a>
      <a href="/crm-automation">CRM</a>
      <a href="/n8n-automation">n8n</a>
      <a href="/gohighlevel">GoHighLevel</a>
    </div>
  </nav>

  <section className="section">
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The tension</span>
        <h2>If every firm “helps businesses succeed,” <em>no one is chosen.</em></h2>
      </div>
      <div className="reveal">
        <p className="intro">Buyers do not hire a category. They hire a point of view they can trust with a specific problem.</p>
        <p className="copy" style={{ marginTop: "16px" }}>Positioning gives your practice a clear edge in the market: who it is for, what it refuses to be, and the language a serious buyer can repeat to a colleague. The website, the outreach, and the first call all get easier after that.</p>
      </div>
    </div>
  </section>

  <section className="section band-paper" style={{ paddingTop: "72px" }}>
    <div className="wrap">
      <div className="reveal" style={{ marginBottom: "22px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>Language, illustrated</span>
        <h2>From a category to a <em>point of view.</em></h2>
        <p className="caption">An illustration of the shift — not a client claim.</p>
      </div>
      <div className="compare reveal">
        <article className="is-from">
          <div className="label">A familiar version</div>
          <p>We help companies improve performance through strategic advisory and hands-on partnership.</p>
        </article>
        <article className="is-toward">
          <div className="label">A positioned version</div>
          <p>We help founder-led firms fix the operating issues that stall growth after the first leadership team.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row">
      <figure className="media-frame reveal">
        <img loading="lazy" src="/assets/images/generated/workshop-coaching.webp" alt="A consultant presenting to a small group" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What changes</span>
        <h2>The market should be able to <em>repeat you.</em></h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> A narrative that sounds like the practice, not a template.</li>
          <li><i className="bi bi-check-circle-fill"></i> Offers a buyer can tell apart without a glossary.</li>
          <li><i className="bi bi-check-circle-fill"></i> Proof that comes from thinking, not decoration.</li>
          <li><i className="bi bi-check-circle-fill"></i> A first conversation that starts further along.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section band-gray">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "640px", marginBottom: "36px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What we shape</span>
        <h2>The pieces of a position you can <em>actually use.</em></h2>
      </div>
      <div className="card-grid">
        <article className="reveal"><span className="num">01</span><h3>Market narrative</h3><p>The story of the problem you exist to solve, told in the buyer’s language.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Buyer definition</h3><p>Who the practice is for, who it is not for, and the moment they start looking.</p></article>
        <article className="reveal"><span className="num">03</span><h3>Offer architecture</h3><p>Services arranged so a buyer understands the path, not a menu of everything you can do.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Message system</h3><p>Headlines, proof, and talk tracks that stay consistent from the site to the sales call.</p></article>
        <article className="reveal"><span className="num">05</span><h3>Visual direction</h3><p>A look that feels as considered as the advice, without costume or cliché.</p></article>
        <article className="reveal"><span className="num">06</span><h3>Distinction</h3><p>The few differences worth claiming, stated plainly enough to survive a referral.</p></article>
      </div>
    </div>
  </section>

  <div className="wrap">
    <a className="next-link" href="/digital-experience">
      <span>Next capability<strong>Web &amp; Digital Experience</strong></span>
      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Position</span>
        <h2>If the market is guessing, <em>the work starts here.</em></h2>
      </div>
      <div>
        <p className="copy">Bring the way you describe the practice today. We will find the version the right buyer can remember.</p>
        <a className="btn" href="/contact">Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
