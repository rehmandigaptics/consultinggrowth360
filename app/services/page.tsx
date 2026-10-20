export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href="/">Home</a> <span>/</span> Services</p>
        <div className="eyebrow hero-kicker">What we do</div>
        <h1>
          <span className="line"><span className="line-inner">Six capabilities.</span></span>
          <span className="line"><span className="line-inner"><em>One growth system.</em></span></span>
        </h1>
        <p className="hero-desc">Brand, digital experience, demand, CRM, n8n workflows, and GoHighLevel — designed to agree with each other, so the practice feels considered from the first impression to the signed engagement.</p>
        <div className="hero-actions">
          <a className="btn" href="/contact">Talk through a fit <i className="bi bi-arrow-up-right"></i></a>
          <a className="btn btn-ghost" href="#practice">Browse the practice</a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/premium-boardroom.webp" alt="A calm, minimal office interior with soft daylight" />
      </figure>
    </div>
  </section>

  <section className="section practice" id="practice">
    <div className="wrap">
      <div className="practice-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>The practice</span>
          <h2>
            Most firms do not have a marketing problem. They have a{" "}
            <em>connection problem.</em>
          </h2>
        </div>
        <p className="copy">
          The brand says one thing, the website asks for another, and the
          follow-up lives in a crowded inbox. We build the capabilities that make
          growth feel like one practice — including the platforms that keep it
          running.
        </p>
      </div>

      <div className="practice-mosaic">
        <a className="practice-tile is-feature reveal" href="/brand-positioning">
          <img loading="lazy" src="/assets/images/generated/premium-boardroom.webp" alt="Contemporary executive boardroom" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>01 — Position</span>
            <h3>Brand &amp; Positioning</h3>
            <p>A distinct market presence the right buyer can repeat.</p>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
        <a className="practice-tile reveal" href="/digital-experience">
          <img loading="lazy" src="/assets/images/generated/analytics-growth-services.webp" alt="Team reviewing digital performance" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>02 — Attract</span>
            <h3>Web &amp; Digital</h3>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
        <a className="practice-tile reveal" href="/lead-generation">
          <img loading="lazy" src="/assets/images/generated/contact-consultation.webp" alt="A focused client conversation" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>03 — Acquire</span>
            <h3>Lead Generation</h3>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
        <a className="practice-tile is-wide reveal" href="/crm-automation">
          <img loading="lazy" src="/assets/images/generated/home-hero-premium-meeting.webp" alt="A prepared meeting space for client work" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>04 — Scale</span>
            <h3>CRM &amp; Automation</h3>
            <p>Pipelines and follow-up that do not depend on memory.</p>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
        <a className="practice-tile reveal" href="/n8n-automation">
          <img loading="lazy" src="/assets/images/generated/crm-automation-services.webp" alt="Connected systems and workflows" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>05 — Automate</span>
            <h3>n8n Automation</h3>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
        <a className="practice-tile reveal" href="/gohighlevel">
          <img loading="lazy" src="/assets/images/generated/about-team-collaboration.webp" alt="Advisors collaborating around a table" />
          <div className="practice-shade" aria-hidden="true" />
          <div className="practice-label">
            <span>06 — Operate</span>
            <h3>GoHighLevel</h3>
          </div>
          <span className="practice-go" aria-hidden="true"><i className="bi bi-arrow-up-right" /></span>
        </a>
      </div>
    </div>
  </section>

  <section className="section method">
    <div className="wrap">
      <div className="method-head reveal">
        <div>
          <span className="eyebrow">How the work fits</span>
          <h2>Each piece makes the <em>next one stronger.</em></h2>
        </div>
        <p>
          You do not have to launch everything at once. The sequence follows the
          constraint, and the system stays intact.
        </p>
      </div>
      <ol className="method-list">
        <li className="reveal">
          <span className="method-index" aria-hidden="true">01</span>
          <div className="method-item">
            <h3>Position</h3>
            <p>Clarify who you are for, what you are known for, and why a serious buyer should lean in.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">02</span>
          <div className="method-item">
            <h3>Attract</h3>
            <p>Give that story a digital home that feels as precise as the advice you sell.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">03</span>
          <div className="method-item">
            <h3>Acquire</h3>
            <p>Create demand that matches the work you want, with a path into a real conversation.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="method-index" aria-hidden="true">04</span>
          <div className="method-item">
            <h3>Scale</h3>
            <p>Hold every inquiry in a pipeline — then automate the stack with n8n and GoHighLevel when the practice is ready.</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row">
      <figure className="media-frame reveal">
        <img loading="lazy" src="/assets/images/generated/executive-strategy-meeting.webp" alt="A bright, modern studio prepared for a working session" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>Where to begin</span>
        <h2>Start where the practice is <em>leaking energy.</em></h2>
        <p className="copy" style={{ marginTop: "16px" }}>An unclear offer. A website that lists services and then goes quiet. A pipeline that depends on whoever remembers to follow up. These are different symptoms of the same disconnected system.</p>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> If buyers cannot repeat what you do, begin with positioning.</li>
          <li><i className="bi bi-check-circle-fill"></i> If the right people visit and leave, begin with the digital experience.</li>
          <li><i className="bi bi-check-circle-fill"></i> If the calendar is feast or famine, begin with demand.</li>
          <li><i className="bi bi-check-circle-fill"></i> If inquiries stall after the first reply, begin with the system.</li>
          <li><i className="bi bi-check-circle-fill"></i> If tools refuse to talk to each other, begin with n8n.</li>
          <li><i className="bi bi-check-circle-fill"></i> If GHL is purchased but barely used, begin with the account build.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div className="reveal">
        <span className="eyebrow">A single conversation</span>
        <h2>Tell us which part of the practice feels <em>heaviest.</em></h2>
      </div>
      <div className="page-cta-panel reveal">
        <p className="copy">
          We will help you see whether the constraint is the story, the
          experience, the demand, or the system behind them.
        </p>
        <a className="btn" href="/contact">
          Book a growth conversation <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
