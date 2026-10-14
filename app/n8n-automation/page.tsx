import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "n8n Automation — ConsultingGrowth360",
  description: "Custom n8n automation for consulting practices: workflows that connect your CRM, forms, calendars, and tools without brittle manual work.",
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
        <p className="crumbs"><a href="/">Home</a> <span>/</span> <a href="/services">Services</a> <span>/</span> n8n</p>
        <div className="eyebrow hero-kicker">05 — Automate</div>
        <h1>
          <span className="line"><span className="line-inner">Workflows that</span></span>
          <span className="line"><span className="line-inner">move work <em>without you.</em></span></span>
        </h1>
        <p className="hero-desc">n8n automation for consulting practices that need custom connections between forms, CRMs, calendars, Slack, and the tools you already rely on — without another brittle zap that breaks midweek.</p>
        <div className="hero-actions">
          <a className="btn" href="/contact">Talk about n8n <i className="bi bi-arrow-up-right"></i></a>
          <a className="btn btn-ghost" href="/gohighlevel">See GoHighLevel</a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/crm-automation-services.webp" alt="Server racks and connected infrastructure in soft light" />
      </figure>
    </div>
  </section>

  <nav className="service-switch" aria-label="Services">
        <div className="wrap service-switch-inner">
      <a href="/brand-positioning">Brand</a>
      <a href="/digital-experience">Digital</a>
      <a href="/lead-generation">Demand</a>
      <a href="/crm-automation">CRM</a>
      <a href="/n8n-automation" aria-current="page">n8n</a>
      <a href="/gohighlevel">GoHighLevel</a>
    </div>
  </nav>

  <section className="section">
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The tension</span>
        <h2>Copy-paste is not a system. <em>It is a tax.</em></h2>
      </div>
      <div className="reveal">
        <p className="intro">When every inquiry needs three tools and a reminder sticky note, the practice is doing the work twice — once for the client, once for the stack.</p>
        <p className="copy" style={{ marginTop: "16px" }}>We design and build n8n workflows that pass the right data to the right place at the right time: intake to CRM, booking to confirmation, win to onboarding, delivery to invoice. Flexible enough for a specialist practice. Stable enough to trust.</p>
      </div>
    </div>
  </section>

  <section className="section band-paper">
    <div className="wrap">
      <div className="reveal" style={{ marginBottom: "22px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>Where n8n earns its keep</span>
        <h2>Six workflows consultants ask for <em>first.</em></h2>
      </div>
      <div className="card-grid">
        <article className="reveal"><span className="num">01</span><h3>Lead intake</h3><p>Website forms, calendars, and inboxes land in one clean record — with source and context intact.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Routing &amp; alerts</h3><p>The right person gets a Slack or email the moment a fit inquiry arrives.</p></article>
        <article className="reveal"><span className="num">03</span><h3>Follow-up sequences</h3><p>Timed steps that stay human, with room for a personal note when judgment matters.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Client onboarding</h3><p>Contracts, kickoff docs, and project tools launch from a single “won” trigger.</p></article>
        <article className="reveal"><span className="num">05</span><h3>Reporting sync</h3><p>Pipeline and campaign data refresh without a weekly export ritual.</p></article>
        <article className="reveal"><span className="num">06</span><h3>Tool bridges</h3><p>Connect GHL, Notion, Airtable, Stripe, Google Workspace, and the rest of your stack.</p></article>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row">
      <figure className="media-frame reveal">
        <img loading="lazy" src="/assets/images/generated/crm-automation-services.webp" alt="Dashboards and workflow charts on a monitor" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>How we build</span>
        <h2>Clear logic. Named owners. <em>Documents you can run.</em></h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> Map the process before we touch a node.</li>
          <li><i className="bi bi-check-circle-fill"></i> Prefer durable triggers over fragile scrapes.</li>
          <li><i className="bi bi-check-circle-fill"></i> Error handling and retries where silence would hurt.</li>
          <li><i className="bi bi-check-circle-fill"></i> A handoff so your team can see what the workflow does.</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="section band-gray">
    <div className="wrap">
      <div className="reveal" style={{ maxWidth: "680px", marginBottom: "36px" }}>
        <span className="eyebrow" style={{ color: "var(--moss)" }}>What you get</span>
        <h2>Automation that belongs to the <em>practice.</em></h2>
      </div>
      <div className="card-grid cols-2">
        <article className="reveal"><span className="num">01</span><h3>Workflow audit</h3><p>Where time and data are leaking across tools today.</p></article>
        <article className="reveal"><span className="num">02</span><h3>Architecture plan</h3><p>Which flows to build first, and which tools should talk.</p></article>
        <article className="reveal"><span className="num">03</span><h3>n8n build</h3><p>Cloud or self-hosted setups, credentials, and production-ready workflows.</p></article>
        <article className="reveal"><span className="num">04</span><h3>Training &amp; care</h3><p>How to monitor, adjust, and extend without starting over.</p></article>
      </div>
    </div>
  </section>

  <div className="wrap">
    <a className="next-link" href="/gohighlevel">
      <span>Next capability<strong>GoHighLevel</strong></span>
      <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
    </a>
  </div>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Automate</span>
        <h2>If the stack is busy and the practice is still manual, <em>start here.</em></h2>
      </div>
      <div>
        <p className="copy">Bring the tools you use and the steps you repeat. We will show you what n8n should own — and what should stay human.</p>
        <a className="btn" href="/contact">Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
