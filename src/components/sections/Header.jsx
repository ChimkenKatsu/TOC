import { useEffect, useState } from 'react';
import { NAV_LINKS, MOBILE_NAV_LINKS } from '../../data/constants';
import { logo } from '../../data/images';
import { Button } from '../ui';

export default function Header({ onOpenHire, onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const sectionIds = MOBILE_NAV_LINKS.map((l) => l.href.slice(1));
    function onScroll() {
      setScrolled(window.scrollY > 40);

      let current = sectionIds[0];
      const scrollPos = window.scrollY + 140;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      });
      setActiveId(current);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <>
      <header className="site-nav" style={{ background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.88)' }}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand">
            <img src={logo} alt="Triangle Outsourcing Corporation logo" />
            <span>
              Triangle Outsourcing
              <small>BUSINESS PROCESS OUTSOURCING</small>
            </span>
          </a>
          <nav className="links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={activeId === link.href.slice(1) ? 'active' : ''}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <button type="button" className="btn btn-outline" onClick={onOpenContact}>Contact Us</button>
            <Button variant="primary" onClick={onOpenHire}>Hire Talent</Button>
            <button
              className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
              aria-label="Open menu"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel ${mobileOpen ? 'open' : ''}`}>
        {MOBILE_NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeId === link.href.slice(1) ? 'active' : ''}
            onClick={closeMobile}
          >
            {link.label}
          </a>
        ))}
        <Button
          variant="primary"
          className="w-full"
          style={{ width: '100%', marginTop: '24px' }}
          onClick={() => {
            closeMobile();
            onOpenHire();
          }}
        >
          Hire Talent
        </Button>
      </div>
    </>
  );
}