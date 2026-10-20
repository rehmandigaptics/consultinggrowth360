export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href="/">Home</a> <span>/</span> About</p>
        <div className="eyebrow hero-kicker">Who we are</div>
        <h1>
          <span className="line"><span className="line-inner">The business behind</span></span>
          <span className="line"><span className="line-inner"><em>your expertise.</em></span></span>
        </h1>
        <p className="hero-desc">We help independent consultants and advisory firms become easier to understand, easier to choose, and easier to run.</p>
        <div className="hero-actions">
          <a className="btn" href="/contact">Start a conversation <i className="bi bi-arrow-up-right"></i></a>
          <a className="btn btn-ghost" href="/approach">See the method</a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/executive-strategy-meeting.webp" alt="A client presentation in a glass-walled meeting room" />
      </figure>
    </div>
  </section>

  <section className="section about-story">
    <div className="wrap">
      <div className="about-story-head">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "var(--moss)" }}>Why we exist</span>
          <h2>
            Consulting skill is not the same thing as a{" "}
            <em>consulting business.</em>
          </h2>
        </div>
        <div className="about-story-copy reveal">
          <p className="intro">
            You already know the work. The harder problem is everything around it.
          </p>
          <p className="copy">
            A point of view that sounds like you. A digital presence that starts
            the right conversations. A way of winning clients that does not depend
            on memory, a lucky referral, or another tool that never quite connects.
          </p>
          <p className="copy">
            ConsultingGrowth360 was built for that gap. We partner with consultants
            across the United States who are ready to treat growth as a system, not
            a scramble.
          </p>
        </div>
      </div>
      <div className="about-media reveal">
        <figure className="about-main">
          <img
            loading="lazy"
            src="/assets/images/generated/about-team-collaboration.webp"
            alt="Four colleagues in conversation in a bright office"
          />
        </figure>
        <figure className="about-side">
          <img
            loading="lazy"
            src="/assets/images/generated/contact-consultation.webp"
            alt="A team in discussion around a conference table"
          />
        </figure>
        <div className="about-badge">
          <strong>360°</strong>
          <span>Position, attract, acquire, and scale — planned as one practice.</span>
        </div>
      </div>
    </div>
  </section>

  <section className="section beliefs">
    <div className="wrap">
      <div className="beliefs-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>How we think</span>
          <h2>Four beliefs that keep the work <em>honest.</em></h2>
        </div>
        <p className="copy">
          We would rather do fewer things well than hand you a stack of tactics
          that do not speak to each other.
        </p>
      </div>
      <div className="beliefs-grid">
        <article className="reveal">
          <span className="belief-num" aria-hidden="true">01</span>
          <h3>Position first</h3>
          <p>More visibility will not help if the market still cannot tell why you, and why now.</p>
        </article>
        <article className="reveal">
          <span className="belief-num" aria-hidden="true">02</span>
          <h3>Make it a conversation</h3>
          <p>A website should help the right person feel understood and know exactly what to do next.</p>
        </article>
        <article className="reveal">
          <span className="belief-num" aria-hidden="true">03</span>
          <h3>Follow-up is craft</h3>
          <p>A strong first meeting still fades if the path after it lives in a crowded inbox.</p>
        </article>
        <article className="reveal">
          <span className="belief-num" aria-hidden="true">04</span>
          <h3>Growth should fit the practice</h3>
          <p>We design around the way you actually sell, serve, and decide — not around a generic agency calendar.</p>
        </article>
      </div>
    </div>
  </section>

  <section className="section model360">
    <div className="wrap">
      <div className="model360-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>The 360 model</span>
          <h2>One practice. <em>Connected parts.</em></h2>
        </div>
        <p className="copy">
          Four movements, planned together — so the story, the experience, the
          demand, and the system agree.
        </p>
      </div>
      <ol className="model360-list">
        <li className="reveal">
          <span className="model360-index" aria-hidden="true">01</span>
          <div className="model360-item">
            <span className="model360-tag">Position</span>
            <h3>Brand &amp; positioning</h3>
            <p>A distinct market presence that communicates your value before the first call.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="model360-index" aria-hidden="true">02</span>
          <div className="model360-item">
            <span className="model360-tag">Attract</span>
            <h3>Web &amp; digital</h3>
            <p>A premium experience that turns the right attention into a real conversation.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="model360-index" aria-hidden="true">03</span>
          <div className="model360-item">
            <span className="model360-tag">Acquire</span>
            <h3>Lead generation</h3>
            <p>Demand built around the clients you want, not a louder version of everyone else.</p>
          </div>
        </li>
        <li className="reveal">
          <span className="model360-index" aria-hidden="true">04</span>
          <div className="model360-item">
            <span className="model360-tag">Scale</span>
            <h3>CRM, n8n &amp; GHL</h3>
            <p>Pipelines, workflows, and GoHighLevel configured so follow-up does not depend on memory.</p>
          </div>
        </li>
      </ol>
      <p className="model360-note">
        <a href="/services">
          Explore all six capabilities <i className="bi bi-arrow-up-right" />
        </a>
      </p>
    </div>
  </section>

  <section className="section philosophy">
    <div className="wrap philosophy-grid">
      <div className="philosophy-copy reveal">
        <span className="eyebrow">The standard</span>
        <blockquote className="quote">
          A consulting practice grows when the story, the experience, and the system{" "}
          <em>agree with each other.</em>
        </blockquote>
        <div className="quote-by">
          <span className="quote-mark" aria-hidden="true">
            <i className="bi bi-arrow-up-right" />
          </span>
          <div>
            <strong>ConsultingGrowth360</strong>
            <span>Built around the business behind your expertise</span>
          </div>
        </div>
      </div>
      <figure className="philosophy-photo reveal">
        <img
          loading="lazy"
          src="/assets/images/generated/about-team-collaboration.webp"
          alt="A small team gathered around a meeting table"
        />
        <figcaption className="philosophy-caption">
          Connected thinking, then practical execution.
        </figcaption>
      </figure>
    </div>
  </section>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Begin here</span>
        <h2>If your expertise is ahead of the business, <em>let’s close the gap.</em></h2>
      </div>
      <div>
        <p className="copy">Tell us where the practice is strong and where growth feels fragile. We will meet you there.</p>
        <a className="btn" href="/contact">Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
