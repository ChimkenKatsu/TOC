import { useEffect, useState } from 'react';
import { ROLE_OPTIONS, TEAM_SIZE_OPTIONS } from '../../data/constants';
import { sendHireEmail } from '../../lib/mailer';
import { Field, Dropdown, Button } from '../ui';

const INITIAL = { name: '', email: '', message: '' };

export default function HireModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL);
  const [role, setRole] = useState(ROLE_OPTIONS[0]);
  const [size, setSize] = useState(TEAM_SIZE_OPTIONS[0]);
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
    setRole(ROLE_OPTIONS[0]);
    setSize(TEAM_SIZE_OPTIONS[0]);
    setSuccess(false);
    setError('');
  }

  function handleClose() {
    onClose();
    // give the closing transition a moment before resetting the form
    setTimeout(reset, 300);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await sendHireEmail({ ...form, role, size });
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
      <div className={`hire-modal ${open ? 'show' : ''}`} role="dialog" aria-modal="true" aria-labelledby="hireModalTitle">
        <button type="button" className="modal-close" aria-label="Close" onClick={handleClose}>&times;</button>

        {!success && (
          <div>
            <div className="eyebrow" style={{ color: 'var(--teal-dim)' }}>HIRE TALENT</div>
            <h3 id="hireModalTitle">Tell us who you need</h3>
            <p>Answer a few quick questions and our team will match you with the right professional, usually within one business day.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <Field label="Name" id="hireName" required placeholder="Your full name" value={form.name} onChange={update('name')} />
                <Field label="Email" id="hireEmail" type="email" required placeholder="you@company.com" value={form.email} onChange={update('email')} />
              </div>
              <div className="form-row">
                <Dropdown label="Role Needed" id="hireRoleLabel" options={ROLE_OPTIONS} value={role} onChange={setRole} />
                <Dropdown label="Team Size Needed" id="hireSizeLabel" options={TEAM_SIZE_OPTIONS} value={size} onChange={setSize} />
              </div>
              <div className="form-row">
                <Field
                  label="Anything else we should know?"
                  id="hireMessage"
                  as="textarea"
                  rows={3}
                  full
                  placeholder="Optional — timeline, budget, tools you use..."
                  value={form.message}
                  onChange={update('message')}
                />
              </div>
              <Button type="submit" variant="primary" loading={loading}>Request a Match</Button>
              <div className="form-note">{error || 'No commitment — this just starts the conversation.'}</div>
            </form>
          </div>
        )}

        {success && (
          <div className="hire-success show">
            <div className="check-circle">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3>Request received</h3>
            <p>Thanks — our team will reach out within one business day to match you with the right professional.</p>
            <Button variant="dark" onClick={handleClose}>Done</Button>
          </div>
        )}
      </div>
    </>
  );
}
