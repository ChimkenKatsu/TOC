import { WHY_LIST } from '../../data/constants';
import { Eyebrow, Tri } from '../ui';

export default function WhyUs() {
  return (
    <section className="why" id="why-us">
      <div className="wrap why-grid">
        <div className="why-copy">
          <Eyebrow>WHY CHOOSE US</Eyebrow>
          <h2>An outsourcing partner built on follow-through</h2>
          <p>
            We keep our client base small enough to know every account by name, and every placement backed
            by real training and management.
          </p>
        </div>
        <div className="why-list">
          {WHY_LIST.map((item) => (
            <div className="why-item" key={item}>
              <Tri />
              <span className="txt">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
