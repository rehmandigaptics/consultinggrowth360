export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href="/">Home</a> <span>/</span> <a href="/services">Services</a> <span>/</span> Demand</p>
        <div className="eyebrow hero-kicker">03 — Acquire</div>
        <h1>
          <span className="line"><span className="line-inner">Demand that</span></span>
          <span className="line"><span className="line-inner">matches the <em>work you want.</em></span></span>
        </h1>
        <p className="hero-desc">Lead generation for consultants who are done with feast-or-famine pipelines and inquiries that were never a fit.</p>
        <div className="hero-actions">
          <a className="btn" href="/contact">Talk about demand <i className="bi bi-arrow-up-right"></i></a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/about-team-collaboration.webp" alt="A collaborative team leaning in around a laptop" />
      </figure>
    </div>
  </section>

  <nav className="service-switch" aria-label="Services">
        <div className="wrap service-switch-inner">
      <a href="/brand-positioning">Brand</a>
      <a href="/digital-experience">Digital</a>
      <a href="/lead-generation" aria-current="page">Demand</a>
      <a href="/crm-automation">CRM</a>
      <a href="/n8n-automation">n8n</a>
      <a href="/gohighlevel">GoHighLevel</a>
    </div>
  </nav>

  <section className="section">
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The tension</span>
        <h2>More leads is the wrong goal if the <em>calendar fills with the wrong rooms.</em></h2>
      </div>
      <div className="reveal">
        <p className="intro">A healthy pipeline for a consulting practice is specific. The right people, at the right moment, with enough context to have a serious conversation.</p>
        <p className="copy" style={{ marginTop: "16px" }}>We build demand around your positioning: where attention should come from, what the offer is, and how an inquiry becomes a fit you would actually take.</p>
      </div>
    </div>
  </section>

  <section className="section" style={{ paddingTop: "0" }}>
    <div className="wrap">
      <div className="reveal" style={{ marginBottom: "22px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The path</span>
        <h2>Four stages between silence and a <em>good conversation.</em></h2>
      </div>
      <div className="funnel reveal">
        <article>
          <div className="num">01</div>
          <h3>Attention</h3>
          <p>Show up where the buyers you want already pay attention.</p>
        </article>
        <article>
          <div className="num">02</div>
          <h3>Resonance</h3>
          <p>Say something only this practice can mean. Generic advice does not travel.</p>
        </article>
        <article>
          <div className="num">03</div>
          <h3>Conversation</h3>
          <p>Make the inquiry feel specific, easy, and worth their time.</p>
        </article>
        <article>
          <div className="num">04</div>
          <h3>Fit</h3>
          <p>Qualify early, so your calendar stays reserved for work you want.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="section band-paper">
    <div className="wrap media-row">
      <figure className="media-frame reveal">
        <img loading="lazy" src="/assets/images/generated/contact-consultation.webp" alt="Two professionals in a focused meeting" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What we protect</span>
        <h2>Your time is the inventory. <em>We treat it that way.</em></h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> Campaigns tied to an offer, not a vague “let’s connect.”</li>
          <li><i className="bi bi-check-circle-fill"></i> Content that demonstrates judgment before the call.</li>
          <li><i className="bi bi-check-circle-fill"></i> A funnel you can explain without a diagram.</li>
          <li><i className="bi bi-check-circle-fill"></i> Signals that tell you what to do more of.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "640px", marginBottom: "36px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What we design</span>
        <h2>A demand system, not a <em>pile of posts.</em></h2>
      </div>
      <div className="card-grid">
        <article className="reveal"><span className="num">01</span><h3>Demand strategy</h3><p>Where attention should come from, and which channels are a distraction.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Campaign concepts</h3><p>Offers and angles a buyer can respond to without a hard sell.</p></article>
        <article className="reveal"><span className="num">03</span><h3>Content engine</h3><p>A repeatable way to publish thinking that attracts the right kind of inquiry.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Funnel design</h3><p>The path from first touch to a conversation, with nothing left implied.</p></article>
        <article className="reveal"><span className="num">05</span><h3>Qualification</h3><p>Questions and signals that keep poor-fit work from consuming the week.</p></article>
        <article className="reveal"><span className="num">06</span><h3>Measurement</h3><p>A small set of numbers that tell you whether the right rooms are filling.</p></article>
      </div>
    </div>
  </section>

  <div className="wrap">
    <a className="next-link" href="/crm-automation">
      <span>Next capability<strong>CRM &amp; Automation</strong></span>
      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Acquire</span>
        <h2>Build a pipeline you would <em>recognize as yours.</em></h2>
      </div>
      <div>
        <p className="copy">If the practice is waiting on referrals, or busy with conversations that go nowhere, demand is the constraint.</p>
        <a className="btn" href="/contact">Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
