import { CONTACT_INFO, GENERAL_CONTACT_MAILTO } from '../../data/constants';
import { Eyebrow } from '../ui';

export default function Location() {
  return (
    <section className="location" id="location">
      <div className="wrap location-grid">
        <div className="location-info">
          <Eyebrow style={{ color: 'var(--teal-dim)' }}>OUR LOCATION</Eyebrow>
          <h2>Find us in Iligan City.</h2>
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

          <div className="location-actions">
            <a href={CONTACT_INFO.directionsUrl} target="_blank" rel="noopener" className="btn btn-primary">Get Directions</a>
            <a href={GENERAL_CONTACT_MAILTO} className="btn btn-ghost">Contact Us</a>
          </div>
        </div>

        <div className="location-map-wrap">
          <div className="map-responsive">
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map showing MEA Prime Building, Iligan City"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
