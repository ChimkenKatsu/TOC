import { TALENT_ITEMS } from '../../data/constants';

export default function Talent() {
  return (
    <section className="talent" id="talent" aria-labelledby="talent-title">
      <div className="wrap talent-layout">
        <div className="section-head">
          <p className="eyebrow">Who you can hire</p>
          <h2 id="talent-title">Find the right role.</h2>
          <p>Choose a role to see what that person can take on.</p>
        </div>
        <div className="talent-roles">
          {TALENT_ITEMS.map((item) => (
            <details key={item.title} name="talent-roles">
              <summary>{item.title}</summary>
              <p>{item.desc}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
