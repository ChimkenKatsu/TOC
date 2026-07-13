import { useState } from 'react';
import { CONTACT_INFO, SERVICE_OPTIONS } from '../../data/constants';
import { sendContactEmail } from '../../lib/mailer';
import { Eyebrow, Field, Dropdown, Button } from '../ui';

const INITIAL = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [service, setService] = useState(SERVICE_OPTIONS[0]);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await sendContactEmail({ ...form, service });
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm(INITIAL);
        setService(SERVICE_OPTIONS[0]);
      }, 2800);
    } catch (err) {
      setError("Something went wrong sending that — please try again, or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <Eyebrow style={{ color: 'var(--teal-dim)' }}>GET IN TOUCH</Eyebrow>
          <h2>Let's talk about your outsourcing needs</h2>
          <p>Tell us what your business needs and we'll help you find the right professional for the job.</p>

          <div className="info-row">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div><div className="label">Address</div><div className="val">{CONTACT_INFO.address}</div></div>
          </div>
          <div className="info-row">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" /></svg>
            </div>
            <div><div className="label">Phone</div><div className="val"><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a></div></div>
          </div>
          <div className="info-row">
            <div className="ic">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v5h3v-5h2l1-3h-3v-1a1 1 0 011-1h2z" /></svg>
            </div>
            <div><div className="label">Facebook</div><div className="val"><a href={CONTACT_INFO.facebook} target="_blank" rel="noopener">{CONTACT_INFO.facebookLabel}</a></div></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <Field label="Name" id="name" required placeholder="Your full name" value={form.name} onChange={update('name')} />
            <Field label="Email" id="email" type="email" required placeholder="you@company.com" value={form.email} onChange={update('email')} />
          </div>
          <div className="form-row">
            <Field label="Phone" id="phone" type="tel" placeholder="+63 900 000 0000" value={form.phone} onChange={update('phone')} />
            <Dropdown label="Service Needed" id="serviceLabel" options={SERVICE_OPTIONS} value={service} onChange={setService} />
          </div>
          <div className="form-row">
            <Field
              label="Message"
              id="message"
              as="textarea"
              rows={4}
              full
              placeholder="Tell us about your team needs..."
              value={form.message}
              onChange={update('message')}
            />
          </div>
          <Button type="submit" variant="primary" loading={loading}>
            {sent ? 'Message sent ✓' : 'Send Message'}
          </Button>
          <div className="form-note">
            {error || 'We usually respond within one business day.'}
          </div>
        </form>
      </div>
    </section>
  );
}
