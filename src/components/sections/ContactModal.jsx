import { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../../data/constants';
import { sendGeneralContactEmail } from '../../lib/mailer';
import { Field, Button } from '../ui';

const INITIAL = { name: '', email: '', message: '' };

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) onClose();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function reset() {
    setForm(INITIAL);
    setSuccess(false);
    setError('');
  }

  function handleClose() {
    onClose();
    setTimeout(reset, 300);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await sendGeneralContactEmail({ ...form });
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong sending that — please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={`modal-backdrop ${open ? 'show' : ''}`} onClick={handleClose}></div>
      <div className={`hire-modal contact-modal ${open ? 'show' : ''}`} role="dialog" aria-modal="true" aria-labelledby="contactModalTitle">
        <button type="button" className="modal-close" aria-label="Close" onClick={handleClose}>&times;</button>

        {!success && (
          <div>
            <div className="eyebrow" style={{ color: 'var(--teal-dim)' }}>CONTACT US</div>
            <h3 id="contactModalTitle">Send us a message</h3>
            <p>Have a general question or business inquiry? Drop us a message and we'll get back to you — separate from the job application form.</p>

            <div className="contact-modal-quick">
              <a href={CONTACT_INFO.phoneHref} className="quick-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" /></svg>
                {CONTACT_INFO.phone}
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener" className="quick-item">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M15 8h-2a2 2 0 00-2 2v2H9v3h2v5h3v-5h2l1-3h-3v-1a1 1 0 011-1h2z" /></svg>
                Facebook
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <Field label="Name" id="ctName" required placeholder="Your full name" value={form.name} onChange={update('name')} />
                <Field label="Email" id="ctEmail" type="email" required placeholder="you@example.com" value={form.email} onChange={update('email')} />
              </div>
              <div className="form-row">
                <Field
                  label="Message"
                  id="ctMessage"
                  as="textarea"
                  rows={4}
                  full
                  required
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={update('message')}
                />
              </div>
              <Button type="submit" variant="primary" loading={loading}>Send Message</Button>
              <div className="form-note">{error || 'We usually respond within one business day.'}</div>
            </form>
          </div>
        )}

        {success && (
          <div className="hire-success show">
            <div className="check-circle">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3>Message sent</h3>
            <p>Thanks for reaching out — our team will get back to you within one business day.</p>
            <Button variant="dark" onClick={handleClose}>Done</Button>
          </div>
        )}
      </div>
    </>
  );
}