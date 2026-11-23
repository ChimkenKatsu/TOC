import { useEffect, useState } from 'react';
import { logo } from '../../data/images';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#careers', label: 'Careers' },
];

export default function Header({ onOpenContact }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    function closeOnEscape(event) {
      if (event.key === 'Escape') setMobileOpen(false);
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="site-nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="" />
          <span>Triangle Outsourcing Corp</span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-controls="site-links"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="site-links" aria-label="Main navigation" className={`links ${mobileOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
          <button type="button" className="btn btn-ghost" onClick={() => {
            setMobileOpen(false);
            onOpenContact();
          }}>
            Contact us <span aria-hidden="true">↗</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
