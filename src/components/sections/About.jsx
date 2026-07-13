import { ABOUT_LIST } from '../../data/constants';
import { Tri, Eyebrow } from '../ui';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <Eyebrow style={{ color: 'var(--teal-dim)' }}>ABOUT TRIANGLE OUTSOURCING</Eyebrow>
          <h2>Built in Iligan City, staffed for the world</h2>
          <p>
            Triangle Outsourcing Corporation is a business process outsourcing company based in Iligan City,
            Lanao del Norte. We specialize in connecting businesses with reliable, skilled, and cost-effective
            remote support — without the overhead of building an in-house team from scratch.
          </p>
          <p>
            Every professional we deploy is trained and vetted before they ever join a client's operations.
            Whether you need one dedicated assistant or an entire outsourced department, our team handles the
            recruitment, training, and day-to-day support so you can focus on running your business.
          </p>
          <ul className="about-list">
            {ABOUT_LIST.map((item) => (
              <li key={item}><Tri />{item}</li>
            ))}
          </ul>
        </div>
        <div className="about-panel">
          <Eyebrow>HOW WE WORK</Eyebrow>
          <h3>One point of contact. A full outsourced team.</h3>
          <p>
            We recruit, train, and manage your remote professionals in Iligan City, then support them daily so
            your outsourced team performs like an extension of your own — reliable, accountable, and easy to reach.
          </p>
          <div className="anchor-row">
            <div><div className="num">5.0★</div><div className="cap">Google Rating</div></div>
            <div><div className="num">6</div><div className="cap">Client Reviews</div></div>
            <div><div className="num">8+</div><div className="cap">Talent Categories</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
