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
        <p className="crumbs"><a href={sitePath("/")}>Home</a> <span>/</span> Approach</p>
        <div className="eyebrow hero-kicker">The method</div>
        <h1>
          <span className="line"><span className="line-inner">From potential</span></span>
          <span className="line"><span className="line-inner">to <em>progress.</em></span></span>
        </h1>
        <p className="hero-desc">Discover what is true, design a roadmap, activate the work that matters first, then refine from evidence rather than opinion.</p>
        <div className="hero-actions">
          <a className="btn" href={sitePath("/contact")}>Plan a first conversation <i className="bi bi-arrow-up-right"></i></a>
          <a className="btn btn-ghost" href="#steps">Read the four steps</a>
        </div>
      </div>
      <figure className="page-hero-media">
        <img src={sitePath("/assets/images/generated/workshop-coaching.webp")} alt="A workshop table covered with notes and laptops" />
      </figure>
    </div>
  </section>

  <section className="section movements" id="steps">
    <div className="wrap">
      <div className="movements-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>Four movements</span>
          <h2>No disconnected tactics. <em>No borrowed playbook.</em></h2>
        </div>
        <p className="copy">
          The method stays the same. The roadmap changes with your practice,
          your buyers, and the constraint in front of you.
        </p>
      </div>

      <div className="movements-list">
        <article className="movement reveal" id="discover">
          <span className="movement-index" aria-hidden="true">01</span>
          <div className="movement-body">
            <span className="movement-tag">Discover</span>
            <h3>See the practice clearly.</h3>
            <p>
              We look at your model, the clients you want more of, how you are
              currently described, where inquiries come from, and which tools
              already exist.
            </p>
          </div>
          <aside className="movement-outcome">
            <span className="movement-tag">You leave with</span>
            <p>
              A shared picture of the real constraint — not a pile of
              observations that never become decisions.
            </p>
          </aside>
        </article>
        <article className="movement reveal" id="design">
          <span className="movement-index" aria-hidden="true">02</span>
          <div className="movement-body">
            <span className="movement-tag">Design</span>
            <h3>Draw the roadmap.</h3>
            <p>
              We shape the narrative, the role of the website, the path from
              attention to conversation, and the system that should hold it
              together.
            </p>
          </div>
          <aside className="movement-outcome">
            <span className="movement-tag">You leave with</span>
            <p>
              An actionable plan your practice can run: priorities, sequence,
              and what “good” looks like.
            </p>
          </aside>
        </article>
        <article className="movement reveal" id="activate">
          <span className="movement-index" aria-hidden="true">03</span>
          <div className="movement-body">
            <span className="movement-tag">Activate</span>
            <h3>Put the work in the world.</h3>
            <p>
              We launch the smallest set of changes that will move the
              business — messaging, pages, campaigns, or workflows — with clear
              ownership.
            </p>
          </div>
          <aside className="movement-outcome">
            <span className="movement-tag">You leave with</span>
            <p>Live work, not a document waiting for a quieter month that never arrives.</p>
          </aside>
        </article>
        <article className="movement reveal" id="optimize">
          <span className="movement-index" aria-hidden="true">04</span>
          <div className="movement-body">
            <span className="movement-tag">Optimize</span>
            <h3>Learn in public, quietly.</h3>
            <p>
              We watch which conversations are a fit, where people hesitate,
              and what the systems drop. Then we tighten what deserves more of
              your attention.
            </p>
          </div>
          <aside className="movement-outcome">
            <span className="movement-tag">You leave with</span>
            <p>A clearer practice and a next move based on evidence from your own market.</p>
          </aside>
        </article>
      </div>
    </div>
  </section>

  <section className="section principles">
    <div className="wrap">
      <div className="principles-head reveal">
        <div>
          <span className="eyebrow" style={{ color: "var(--moss)" }}>How we work</span>
          <h2>Principles you will feel in the <em>engagement.</em></h2>
        </div>
        <p className="copy">
          The method is only as useful as the way we show up inside it —
          clear priorities, honest recommendations, and work you can keep
          running.
        </p>
      </div>
      <div className="principles-grid">
        <article className="reveal">
          <span className="principle-num" aria-hidden="true">01</span>
          <h3>One roadmap</h3>
          <p>
            Brand, digital, demand, and systems are planned together, even when
            only one of them ships first.
          </p>
        </article>
        <article className="reveal">
          <span className="principle-num" aria-hidden="true">02</span>
          <h3>Practical, not theatrical</h3>
          <p>
            A recommendation has to survive a real week of client delivery. If
            it only works in a slide, it does not ship.
          </p>
        </article>
        <article className="reveal">
          <span className="principle-num" aria-hidden="true">03</span>
          <h3>Built to be used</h3>
          <p>
            You should be able to explain the strategy without us in the room,
            and run the follow-up when we are not.
          </p>
        </article>
      </div>
    </div>
  </section>

  <section className="section">
    <div className="wrap media-row flip">
      <figure className="media-frame reveal">
        <img loading="lazy" src={sitePath("/assets/images/generated/workshop-coaching.webp")} alt="Professionals in a working session around a long table" />
      </figure>
      <div className="reveal">
        <span className="eyebrow" style={{ color: "var(--moss)" }}>The first conversation</span>
        <h2>Three things we want to understand.</h2>
        <ul className="points">
          <li><i className="bi bi-check-circle-fill"></i> Where the practice is already strong, and what clients thank you for.</li>
          <li><i className="bi bi-check-circle-fill"></i> Where growth feels fragile — the story, the pipeline, or the system.</li>
          <li><i className="bi bi-check-circle-fill"></i> What a better year would actually look like, in concrete terms.</li>
        </ul>
        <p className="copy" style={{ marginTop: "18px" }}>There is no package menu on this page on purpose. The right scope follows the conversation.</p>
      </div>
    </div>
  </section>

  <section className="page-cta">
    <div className="wrap page-cta-grid">
      <div>
        <span className="eyebrow" style={{ color: "var(--lime)" }}>Step one</span>
        <h2>Bring the practice as it is. <em>We’ll find the path.</em></h2>
      </div>
      <div>
        <p className="copy">A first conversation is a working session, not a pitch deck. Come with the questions you have been carrying.</p>
        <a className="btn" href={sitePath("/contact")}>Book a growth conversation <i className="bi bi-arrow-up-right"></i></a>
      </div>
    </div>
  </section>
</main>
    </>
  );
}
