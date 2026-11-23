import { WHY_LIST } from '../../data/constants';

export default function WhyUs({ onOpenHire }) {
  return (
    <section className="why" id="why-us" aria-labelledby="why-title">
      <div className="wrap why-grid">
        <div className="why-copy">
          <p className="eyebrow">Working with Triangle</p>
          <h2 id="why-title">Support that stays with you.</h2>
          <button className="btn btn-primary" type="button" onClick={onOpenHire}>Talk to us about hiring ↗</button>
        </div>
        <ul className="why-list">
          {WHY_LIST.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
