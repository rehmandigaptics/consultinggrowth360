import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { FaqAccordion } from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: "Contact — ConsultingGrowth360",
  description: "Start a growth conversation with ConsultingGrowth360. Tell us about your consulting practice and where you want it to go.",
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
        <p className="crumbs"><a href="/">Home</a> <span>/</span> Contact</p>
        <div className="eyebrow hero-kicker">A first conversation</div>
        <h1>
          <span className="line"><span className="line-inner">Let’s talk about</span></span>
          <span className="line"><span className="line-inner">the practice you <em>want to run.</em></span></span>
        </h1>
        <p className="hero-desc">Tell us where you are, where growth feels fragile, and what a better year would actually look like. We work with consultants across the United States.</p>
      </div>
      <figure className="page-hero-media">
        <img src="/assets/images/generated/contact-consultation.webp" alt="Two people in a focused working conversation" />
      </figure>
    </div>
  </section>

  <section className="contact" id="inquire">
    <div className="contact-copy">
      <span className="eyebrow">What to expect</span>
      <h2>A working session, <em>not a pitch.</em></h2>
      <p className="copy">There is no package menu to decode. The right scope follows a clear look at the practice.</p>
      <ol className="expect-list">
        <li><strong>01 — You write</strong><span>A few lines on the specialty, the goal, and where things feel heavy.</span></li>
        <li><strong>02 — We look together</strong><span>Positioning, demand, and systems in one view — not three separate sales calls.</span></li>
        <li><strong>03 — You leave with a direction</strong><span>A recommended place to start, and an honest read on whether we are the right partner.</span></li>
      </ol>
    </div>
    <div className="contact-panel">
      <h3>Tell us about the practice.</h3>
      <p className="copy">This prepares an email draft in your mail app. Nothing is stored on this site.</p>
      <ContactForm showInterest />
    </div>
  </section>

  <section className="section faq-section">
    <div className="wrap faq-layout">
      <div className="faq-intro reveal">
        <span className="eyebrow">Before you write</span>
        <h2>
          A few answers, <em>plainly.</em>
        </h2>
        <p className="copy">
          Straight responses to the questions that usually come up before a first note.
        </p>
      </div>
      <FaqAccordion />
    </div>
  </section>
</main>
    </>
  );
}
