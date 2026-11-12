import { useState, type FormEvent } from "react";
import type { Copy } from "../../content";
import { Arrow } from "../ui/Icons";
import { contact } from "../../content/static";

/**
FOOTER / CONTACT
 * Zones: lead (title + direct links) · message form · legal line.
 * The form opens the visitor's mail app (mailto) — no backend required.
 */
export function Footer({ t }: { t: Copy }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        {/* ── ZONE: LEFT: title + direct contact links ── */}
        <div className="footer-lead">
          <p className="label">{t.footerTop[0]}</p>
          <h2>
            {t.talk[0]} <em>{t.talk[1]}</em>
          </h2>
          <p className="label">{t.linksLabel}</p>
          {/* ── ZONE: Direct links: email · phone · LinkedIn ── */}
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <span>{t.email}</span>
              {contact.email}
              <Arrow diagonal />
            </a>
            <a href={contact.phoneHref}>
              <span>{t.phone}</span>
              {contact.phone}
              <Arrow diagonal />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              {t.connect}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        {/* ── ZONE: RIGHT: message form (opens the visitor's mail app) ── */}
        <form className="contact-form" onSubmit={submitForm}>
          <h3>{t.form.title}</h3>
          <div className="field-pair">
            <input
              required
              type="text"
              name="name"
              placeholder={t.form.name}
              aria-label={t.form.name}
              value={form.name}
              onChange={(event) => setForm({ ...form, name: event.target.value })}
            />
            <input
              required
              type="email"
              name="email"
              placeholder={t.form.email}
              aria-label={t.form.email}
              value={form.email}
              onChange={(event) => setForm({ ...form, email: event.target.value })}
            />
          </div>
          <textarea
            required
            name="message"
            rows={4}
            placeholder={t.form.message}
            aria-label={t.form.message}
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
          <div className="form-actions">
            <button type="submit">
              {t.form.send}
              <Arrow diagonal />
            </button>
            <p role="status">{sent ? t.form.sent : t.form.hint}</p>
          </div>
        </form>
      </div>
      {/* ── ZONE: Legal line + back to top ── */}
      <div className="footer-bottom">
        <span>© 2026 Hoàng Mạnh Trương</span>
        <a href="#top">{t.back}</a>
        <span>{t.role}</span>
      </div>
    </footer>
  );
}
