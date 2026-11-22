"use client";
import { useState } from "react";
export default function EmailSection() {
  const [status, setStatus] = useState("idle"),
    [message, setMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok)
        throw new Error(
          "The contact form is temporarily unavailable. Please email nipulyansith26@gmail.com directly.",
        );
      setStatus("success");
      setMessage("Thanks for reaching out. Your message is on its way.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message);
    }
  }
  return (
    <section id="contact" className="section-block contact-section">
      <div className="section-shell">
        <header className="contact-heading">
          <p className="eyebrow">Have something in mind?</p>
          <h2>
            Let’s make
            <br />
            something <span>good.</span>
          </h2>
        </header>
        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              A project, an opportunity, or a good conversation.
              <br />
              I’d love to hear from you.
            </p>
            <a className="contact-email" href="mailto:nipulyansith26@gmail.com">
              nipulyansith26@gmail.com
            </a>
            <p className="muted">Mulleriyawa, Sri Lanka</p>
            <div className="contact-socials">
              <a
                href="https://github.com/nipulyansith"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nipul-yansith-183b8a156/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="/Nipul_Yansith_CV.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                />
              </label>
              <label>
                What’s it about?
                <input
                  name="subject"
                  placeholder="A new idea, perhaps?"
                  required
                  maxLength={200}
                />
              </label>
            </div>
            <label>
              Your message
              <textarea
                name="message"
                rows={3}
                placeholder="Tell me a little about it…"
                required
                maxLength={6000}
              />
            </label>
            <button
              type="submit"
              className="solid-button"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <p
              role={status === "error" ? "alert" : "status"}
              className={`form-message ${status}`}
            >
              {message}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
