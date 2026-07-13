import { TALENT_ITEMS } from '../../data/constants';
import { SectionHead, Tri } from '../ui';

export default function Talent() {
  return (
    <section className="talent" id="talent">
      <div className="wrap">
        <SectionHead eyebrow="OUR EMPLOYEES" title="Trained talent, ready to deploy">
          Every professional under Triangle Outsourcing goes through screening and training before joining a
          client's team — reliable from the first day.
        </SectionHead>
        <div className="talent-grid">
          {TALENT_ITEMS.map((item) => (
            <div className="talent-cell" key={item.title}>
              <Tri />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
