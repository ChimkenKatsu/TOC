import { HERO_STATS } from '../../data/constants';
import { Counter } from '../ui';

export default function Hero({ onOpenHire, onOpenContact }) {
  return (
    <section className="hero" id="home">
      <svg className="hero-bg" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F2C94C" stopOpacity="0" />
            <stop offset="50%" stopColor="#F2C94C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F2C94C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g opacity="0.5" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
          <path d="M0,560 C 300,480 500,620 760,540 C 1020,460 1180,560 1440,500" />
          <path d="M0,660 C 300,600 560,680 800,610 C 1060,540 1240,630 1440,590" />
          <path d="M0,180 C 260,120 480,220 760,160 C 1000,110 1220,190 1440,140" />
        </g>
        <path
          id="flowLine"
          d="M0,560 C 300,480 500,620 760,540 C 1020,460 1180,560 1440,500"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="120" cy="546" r="4" fill="#F2C94C" />
        <circle cx="760" cy="540" r="4" fill="#F2C94C" />
        <circle cx="1320" cy="512" r="4" fill="#F2C94C" />
      </svg>

      <div className="wrap hero-inner">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>
          ILIGAN CITY, PHILIPPINES &nbsp;•&nbsp; EST. WORKFORCE PARTNER
        </div>
        <h1>
          Your Trusted Partner in <em>Business Process Outsourcing</em>
        </h1>
        <p className="lead">
          Triangle Outsourcing Corporation provides skilled remote professionals to help businesses
          streamline operations, improve productivity, and accelerate growth.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={onOpenHire}>Hire Talent</button>
          <button type="button" className="btn btn-outline" onClick={onOpenContact}>Contact Us</button>
          <a
            href="https://www.facebook.com/TriangleOutsourcingCorp"
            target="_blank"
            rel="noopener"
            className="btn btn-outline"
          >
            Visit Our Facebook Page
          </a>
        </div>
        <div className="hero-stats">
          {HERO_STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} display={stat.display} />
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}