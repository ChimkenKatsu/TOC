import { locationPhoto } from '../../data/images';

export default function Hero({ onOpenHire }) {
  return (
    <section className="hero" id="home" aria-labelledby="home-title">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-location">Iligan City, Philippines</p>
          <h1 id="home-title">Your next hire <em>starts in Iligan.</em></h1>
          <p className="lead">
            Build a remote team in the Philippines for sales, customer support, admin, and digital work.
          </p>
          <div className="hero-actions">
            <button type="button" className="btn btn-dark" onClick={onOpenHire}>
              Tell us who you need <span aria-hidden="true">↗</span>
            </button>
            <a href="#services" className="hero-link">Explore services <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={locationPhoto} alt="Exterior of the MEA Prime Building in Iligan City" fetchPriority="high" />
          <figcaption>Our office · MEA Prime Building, Iligan City</figcaption>
        </figure>
      </div>
    </section>
  );
}
