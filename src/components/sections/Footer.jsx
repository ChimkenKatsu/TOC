import { CONTACT_INFO } from '../../data/constants';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span>Triangle Outsourcing Corp</span>
            </div>
            <p className="footer-desc">
              A business process outsourcing company based in Iligan City, Philippines, connecting businesses
              with skilled remote professionals.
            </p>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#leadership">Leadership</a></li>
              <li><a href="#talent">Our Talent</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Virtual Assistance</a></li>
              <li><a href="#services">Lead Generation</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Customer Support</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>{CONTACT_INFO.address}</li>
              <li><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a></li>
              <li><a href={CONTACT_INFO.facebook} target="_blank" rel="noopener">Facebook Page</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Triangle Outsourcing Corporation. All rights reserved.</p>
          <div className="footer-social">
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener" aria-label="Facebook">f</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
