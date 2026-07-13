import { SERVICES_ITEMS } from '../../data/constants';
import { SectionHead } from '../ui';

const ICONS = {
  inbox: <path d="M4 4h16v12H7l-3 3V4z" />,
  clock: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
  phone: <path d="M6 4l3 3-2 2a12 12 0 007 7l2-2 3 3v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  lines: <path d="M4 6h16M4 12h16M4 18h10" />,
  trend: <><path d="M3 18l5-5 4 4 8-9" /><path d="M14 8h6v6" /></>,
  design: <><circle cx="8" cy="8" r="2.5" /><path d="M3 19l5-6 4 4 3-4 6 6" /></>,
  code: <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />,
  chat: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  doc: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 4v16" /></>,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <SectionHead eyebrow="OUR SERVICES" title="Outsourced support, organized by function">
          Pick a single service or combine several into one outsourced team — we scale with what your business needs.
        </SectionHead>
        <div className="services-grid">
          {SERVICES_ITEMS.map((item) => (
            <div className="service-card" key={item.title}>
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">{ICONS[item.icon]}</svg>
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
