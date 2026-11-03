import { sitePath } from "@/lib/site-path";
export default function Page() {
  return (
    <>
<main id="main">
  <section className="page-hero">
    <div className="hero-glow" aria-hidden="true"></div>
    <div className="hero-gridlines" aria-hidden="true"></div>
    <div className="wrap-wide page-hero-grid">
      <div className="page-hero-copy">
        <p className="crumbs"><a href={sitePath("/")}>Home</a> <span>/</span> Who we help</p>
        <div className="eyebrow hero-kicker">Practices we partner with</div>
        <h1>
          <span className="line"><span className="line-inner">Your field is specific.</span></span>
          <span className="line"><span className="line-inner"><em>Your growth should be too.</em></span></span>
        </h1>
        <p className="hero-desc">We work with independent consultants and advisory firms across the United States. The method stays constant. The language, the proof, and the pipeline change with the work.</p>
      </div>
      <figure className="page-hero-media">
        <img src={sitePath("/assets/images/generated/premium-boardroom.webp")} alt="A quiet, well-appointed conference room" />
      </figure>
    </div>
  </section>

  <section className="section" style={{ paddingBottom: "40px" }}>
    <div className="wrap">
      <div className="split">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "var(--moss)" }}>Six fields</span>
          <h2>Same standard of thinking. <em>Different commercial reality.</em></h2>
        </div>
        <p className="copy reveal">A management firm, a clinical advisor, and a coach do not win trust the same way. Below is how the growth system flexes — not a costume change, a different center of gravity.</p>
      </div>

      <article className="ind-block reveal" id="business">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/premium-boardroom.webp")} alt="A contemporary executive boardroom" />
        </figure>
        <div>
          <div className="ind-kicker">01 — Business &amp; management</div>
          <h2>Sharper than “we help leaders lead.”</h2>
          <p className="copy">Strategy and operations firms often share the same five sentences. Buyers cannot tell who is actually built for their stage, their size, or their problem.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> A point of view a buying committee can repeat.</li>
            <li><i className="bi bi-check-circle-fill"></i> Offers arranged as a path, not a capability list.</li>
            <li><i className="bi bi-check-circle-fill"></i> A site and follow-up that sound like the room you advise.</li>
          </ul>
        </div>
      </article>

      <article className="ind-block flip reveal" id="marketing">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/executive-strategy-meeting.webp")} alt="A founder reviewing plans in a bright workspace" />
        </figure>
        <div>
          <div className="ind-kicker">02 — Marketing &amp; growth</div>
          <h2>The practice should market itself on purpose.</h2>
          <p className="copy">Firms that sell growth often run their own pipeline on leftover time. The market notices the gap between the advice and the presence.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> Positioning you would be willing to show a client.</li>
            <li><i className="bi bi-check-circle-fill"></i> Proof through thinking, not a grid of channel logos.</li>
            <li><i className="bi bi-check-circle-fill"></i> A demand path that matches the standard you sell.</li>
          </ul>
        </div>
      </article>

      <article className="ind-block reveal" id="healthcare">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/healthcare-consulting.webp")} alt="A clinician reviewing information on a tablet" />
        </figure>
        <div>
          <div className="ind-kicker">03 — Healthcare &amp; wellness</div>
          <h2>Trust is the product. The presence should agree.</h2>
          <p className="copy">Specialist advisors in care, wellness, and clinical operations are judged before the first call. A loud site, or a vague one, quietly undoes the care in the work.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> Language that is calm, precise, and specific.</li>
            <li><i className="bi bi-check-circle-fill"></i> A digital experience that feels safe to forward.</li>
            <li><i className="bi bi-check-circle-fill"></i> Inquiries that arrive with the right context.</li>
          </ul>
        </div>
      </article>

      <article className="ind-block flip reveal" id="finance">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/financial-consulting.webp")} alt="Advisory documents and a pen on a wooden desk" />
        </figure>
        <div>
          <div className="ind-kicker">04 — Finance &amp; advisory</div>
          <h2>Clarity, with the discretion the work requires.</h2>
          <p className="copy">Clients hire judgment. The brand, the site, and the follow-up should feel as considered as the advice — plain where it should be plain, never casual with what is at stake.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> Positioning a referral can say without overselling.</li>
            <li><i className="bi bi-check-circle-fill"></i> A site that earns confidence before a number appears.</li>
            <li><i className="bi bi-check-circle-fill"></i> A pipeline that respects the pace of a real decision.</li>
          </ul>
        </div>
      </article>

      <article className="ind-block reveal" id="technology">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/analytics-growth-services.webp")} alt="A technology team collaborating on laptops" />
        </figure>
        <div>
          <div className="ind-kicker">05 — Technology &amp; IT</div>
          <h2>Capability is not the same as a commercial point of view.</h2>
          <p className="copy">Technical practices are often precise in delivery and vague in the market. Buyers see skill and still cannot tell the outcome, the fit, or why this firm.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> Expertise translated into a buyer’s decision.</li>
            <li><i className="bi bi-check-circle-fill"></i> A digital experience as exact as the work.</li>
            <li><i className="bi bi-check-circle-fill"></i> Qualification before the scoping conversation.</li>
          </ul>
        </div>
      </article>

      <article className="ind-block flip reveal" id="education">
        <figure className="media-frame">
          <img loading="lazy" src={sitePath("/assets/images/generated/workshop-coaching.webp")} alt="A coaching group collaborating around a table" />
        </figure>
        <div>
          <div className="ind-kicker">06 — Education &amp; coaching</div>
          <h2>People admire the teaching. They still need a way to begin.</h2>
          <p className="copy">Coaches and education specialists often give away the insight and leave the offer implied. Admiration does not become a client until the next step is clear.</p>
          <ul className="points">
            <li><i className="bi bi-check-circle-fill"></i> An offer a prospective client can understand quickly.</li>
            <li><i className="bi bi-check-circle-fill"></i> A path that matches the standard of the teaching.</li>
            <li><i className="bi bi-check-circle-fill"></i> Follow-up that feels like guidance, not a blast.</li>
          </ul>
        </div>
      </article>
    </div>
  </section>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>A better-fit practice</span>
        <h2>Bring the work you want more of. <em>We’ll build toward it.</em></h2>
      </div>
      <div>
        <p className="copy">Industry context shapes the words, the site, and the pipeline. It does not replace a clear point of view.</p>
        <a className="btn" href={sitePath("/services")}>See the capabilities <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
