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
        <p className="crumbs"><a href={sitePath("/")}>Home</a> <span>/</span> <a href={sitePath("/services")}>Services</a> <span>/</span> Systems</p>
        <div className="eyebrow hero-kicker">04 — Scale</div>
        <h1>
          <span className="line"><span className="line-inner">Follow-up that</span></span>
          <span className="line"><span className="line-inner">does not depend on <em>memory.</em></span></span>
        </h1>
        <p className="hero-desc">CRM and automation for consultants whose best opportunities still slip between an inbox, a notebook, and a busy week of client work.</p>
        <div className="hero-actions">
          <a className="btn" href={sitePath("/contact")}>Talk about your pipeline <i className="bi bi-arrow-up-right"></i></a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src={sitePath("/assets/images/generated/crm-automation-services.webp")} alt="A team working across multiple screens in a modern studio" />
      </figure>
    </div>
  </section>

  <nav className="service-switch" aria-label="Services">
        <div className="wrap service-switch-inner">
      <a href={sitePath("/brand-positioning")}>Brand</a>
      <a href={sitePath("/digital-experience")}>Digital</a>
      <a href={sitePath("/lead-generation")}>Demand</a>
      <a href={sitePath("/crm-automation")} aria-current="page">CRM</a>
      <a href={sitePath("/n8n-automation")}>n8n</a>
      <a href={sitePath("/gohighlevel")}>GoHighLevel</a>
    </div>
  </nav>

  <section className="section">
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The tension</span>
        <h2>The inquiry was good. The week got busy. <em>The thread went quiet.</em></h2>
      </div>
      <div className="reveal">
        <p className="intro">A consulting practice does not need more software. It needs a path every opportunity can walk without you remembering the next step.</p>
        <p className="copy" style={{ marginTop: "16px" }}>We design the pipeline, the follow-up, and the connections between the tools you already touch — so the system holds the relationship while you are in delivery.</p>
      </div>
    </div>
  </section>

  <section className="section band-paper">
    <div className="wrap">
      <div className="reveal" style={{ marginBottom: "22px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>A pipeline with manners</span>
        <h2>Five stages. <em>No mystery owners.</em></h2>
      </div>
      <div className="pipe reveal">
        <span>New inquiry<em>Captured once, with context.</em></span>
        <span>First response<em>Fast, specific, human.</em></span>
        <span>Qualified<em>Fit, timing, and stakes.</em></span>
        <span>In conversation<em>The real sales work.</em></span>
        <span>Client<em>A clean handoff into delivery.</em></span>
      </div>
      <p className="caption">The names flex to your practice. The discipline does not.</p>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row flip">
      <figure className="media-frame reveal">
        <img loading="lazy" src={sitePath("/assets/images/generated/crm-automation-services.webp")} alt="A professional working through follow-up on a laptop" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What automation is for</span>
        <h2>Remove the forgetting. <em>Keep the judgment.</em></h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> Reminders and sequences for the steps that should never be missed.</li>
          <li><i className="bi bi-check-circle-fill"></i> Room for a human note wherever the relationship needs one.</li>
          <li><i className="bi bi-check-circle-fill"></i> One place to see what is waiting, stalled, or ready.</li>
          <li><i className="bi bi-check-circle-fill"></i> A handoff your delivery work can trust.</li>
          <li><i className="bi bi-check-circle-fill"></i> When the stack needs custom bridges, we extend with <a className="text-link-dark" href={sitePath("/n8n-automation")}>n8n</a> or a full <a className="text-link-dark" href={sitePath("/gohighlevel")}>GoHighLevel</a> build.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section band-gray">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "680px", marginBottom: "36px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What we put in place</span>
        <h2>Systems that stay useful after the <em>kickoff call.</em></h2>
      </div>
      <div className="card-grid">
        <article className="reveal"><span className="num">01</span><h3>Pipeline design</h3><p>Stages that match how you actually sell, with a definition of “done” at each one.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Follow-up sequences</h3><p>Timely, well-written next steps that sound like the practice, not a blast.</p></article>
        <article className="reveal"><span className="num">03</span><h3>Tool connection</h3><p>Website, inbox, calendar, and CRM passing the same story without retyping.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Lead routing</h3><p>The right inquiry reaches the right person, with the context they need.</p></article>
        <article className="reveal"><span className="num">05</span><h3>Reporting rhythm</h3><p>A short view of the pipeline you can read without a dashboard degree.</p></article>
        <article className="reveal"><span className="num">06</span><h3>Handoff clarity</h3><p>What sales knows, delivery inherits — so clients never repeat themselves.</p></article>
      </div>
    </div>
  </section>

  <div className="wrap">
    <a className="next-link" href={sitePath("/n8n-automation")}>
      <span>Next capability<strong>n8n Automation</strong></span>
      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Scale</span>
        <h2>Let the system remember, so you can <em>stay in the work.</em></h2>
      </div>
      <div>
        <p className="copy">If good conversations are dying in the gap between interest and a decision, the pipeline is the constraint.</p>
        <a className="btn" href={sitePath("/contact")}>Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
