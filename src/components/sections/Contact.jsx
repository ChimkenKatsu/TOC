import { useState } from 'react';
import { APPLICATION_BENEFITS } from '../../data/constants';
import { sendContactEmail } from '../../lib/mailer';
import { Eyebrow, Field, Button } from '../ui';

const INITIAL = {
  name: '',
  phone: '',
  upworkProfile: '',
  upworkEmail: '',
  facebookProfile: '',
  experience: '',
  tools: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
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
      await sendContactEmail({ ...form });
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm(INITIAL);
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
        <form className="contact-form" onSubmit={handleSubmit}>
          <Eyebrow style={{ color: 'var(--teal-dim)' }}>APPLY NOW</Eyebrow>
          <h2>Tell us about your experience.</h2>
          <p className="form-intro">
            Ready to join our appointment setting and cold calling team? Fill out the form below and
            we'll be in touch.
          </p>

          <div className="form-row">
            <Field label="Name" id="name" required placeholder="Your full name" value={form.name} onChange={update('name')} />
            <Field label="Contact Number" id="phone" type="tel" required placeholder="+63 900 000 0000" value={form.phone} onChange={update('phone')} />
          </div>
          <div className="form-row">
            <Field label="Upwork Profile Link" id="upworkProfile" type="url" required placeholder="https://www.upwork.com/freelancers/..." value={form.upworkProfile} onChange={update('upworkProfile')} />
            <Field label="Upwork Email Address" id="upworkEmail" type="email" required placeholder="you@example.com" value={form.upworkEmail} onChange={update('upworkEmail')} />
          </div>
          <div className="form-row">
            <Field label="Facebook Profile Link" id="facebookProfile" type="url" placeholder="https://www.facebook.com/..." value={form.facebookProfile} onChange={update('facebookProfile')} />
            <Field label="Years of Experience (Appointment Setting / Cold Calling)" id="experience" type="text" inputMode="numeric" required placeholder="e.g. 3 years" value={form.experience} onChange={update('experience')} />
          </div>
          <div className="form-row">
            <Field
              label="Tools You've Handled (CRM / Dialer)"
              id="tools"
              as="textarea"
              rows={4}
              full
              required
              placeholder="e.g. HubSpot, Salesforce, Mojo Dialer, RingCentral..."
              value={form.tools}
              onChange={update('tools')}
            />
          </div>
          <Button type="submit" variant="primary" loading={loading}>
            {sent ? 'Application sent ✓' : 'Send application'}
          </Button>
          <div className="form-note">
            {error || 'We usually respond within one business day.'}
          </div>
        </form>

        <div className="benefits-card">
          <Eyebrow style={{ color: 'var(--teal-dim)' }}>WHY JOIN US</Eyebrow>
          <h2>What to expect at Triangle</h2>
          <ul className="benefits-list">
            {APPLICATION_BENEFITS.map((item) => (
              <li className="benefit-item" key={item}>
                <span className="benefit-check">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span className="txt">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
