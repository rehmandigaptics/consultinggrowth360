"use client";

import { useId, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const items: FaqItem[] = [
  {
    question: "Who is this for?",
    answer:
      "Independent consultants and advisory firms who already have real expertise and want the business around it to be clearer, more consistent, and easier to grow.",
  },
  {
    question: "Do we need to be a large firm?",
    answer:
      "No. The work fits solo practices and established firms. What matters is that you want a connected system, not another isolated tactic.",
  },
  {
    question: "Is this only marketing?",
    answer:
      "No. Positioning, the digital experience, demand, and the follow-up system are planned together. Marketing is one part of that, not the whole assignment.",
  },
  {
    question: "What happens after the form?",
    answer:
      "Your email app opens with a prepared note. Add the recipient, send it, and we take the conversation from there. The form itself does not store what you type.",
  },
  {
    question: "Where do you work?",
    answer:
      "With consultants across the United States. The first conversation can happen remotely.",
  },
];

export function FaqAccordion() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq reveal">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className={`faq-item${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              id={buttonId}
              className="faq-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="faq-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="faq-q">{item.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg
                  className="faq-glyph"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 9.5 12 15l5.5-5.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              className="faq-panel"
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="faq-panel-inner">
                <p className="copy">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
