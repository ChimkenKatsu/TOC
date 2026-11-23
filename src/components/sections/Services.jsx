import { SERVICES_ITEMS } from '../../data/constants';

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="wrap service-index">
        <div className="section-head">
          <p className="hero-location">Services</p>
          <h2 id="services-title">Where we can help</h2>
          <p>Hire for one role or build a team across several functions.</p>
        </div>
        <ul className="service-list">
          {SERVICES_ITEMS.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
