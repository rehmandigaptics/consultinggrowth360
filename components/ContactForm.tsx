"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  showInterest?: boolean;
};

export function ContactForm({ showInterest = false }: ContactFormProps) {
  const [notice, setNotice] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      "Growth consultation inquiry — ConsultingGrowth360",
    );
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Specialty: ${data.get("specialty") || "—"}`,
    ];
    if (data.get("interest")) lines.push(`Focus: ${data.get("interest")}`);
    lines.push(`Growth goal: ${data.get("goal")}`);
    const body = encodeURIComponent(lines.join("\n"));
    setNotice(
      "Your email app will open with a prepared inquiry. Add your recipient before sending.",
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <form id="contactForm" onSubmit={onSubmit}>
        <div className="form-grid">
          <label className="field">
            <span>Full name</span>
            <input id="fname" name="name" autoComplete="name" required />
          </label>
          <label className="field">
            <span>Email address</span>
            <input
              id="femail"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </label>
          {showInterest ? (
            <>
              <label className="field">
                <span>Consulting specialty</span>
                <input
                  id="fspecialty"
                  name="specialty"
                  placeholder="e.g., Healthcare advisory"
                />
              </label>
              <label className="field">
                <span>Where should we look first?</span>
                <select id="finterest" name="interest" defaultValue="">
                  <option value="">Not sure yet</option>
                  <option>Brand &amp; positioning</option>
                  <option>Web &amp; digital experience</option>
                  <option>Lead generation</option>
                  <option>CRM &amp; automation</option>
                  <option>n8n automation</option>
                  <option>GoHighLevel</option>
                  <option>The whole system</option>
                </select>
              </label>
              <label className="field full">
                <span>Your biggest growth goal</span>
                <textarea
                  id="fgoal"
                  name="goal"
                  rows={4}
                  required
                  placeholder="What would feel different a year from now?"
                />
              </label>
            </>
          ) : (
            <>
              <label className="field full">
                <span>Consulting specialty</span>
                <input
                  id="fspecialty"
                  name="specialty"
                  placeholder="e.g., Business consulting"
                />
              </label>
              <label className="field full">
                <span>Your biggest growth goal</span>
                <textarea id="fgoal" name="goal" rows={3} required />
              </label>
            </>
          )}
          <div className="field full">
            <button className="btn btn-dark" type="submit">
              Prepare my inquiry <i className="bi bi-arrow-up-right" />
            </button>
          </div>
        </div>
      </form>
      <p id="formNotice" role="status">
        {notice}
      </p>
    </>
  );
}
