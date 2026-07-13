import { CEO } from '../../data/team';
import { Eyebrow } from '../ui';

export default function CEOMessage() {
  return (
    <section className="ceo" id="leadership">
      <div className="wrap ceo-grid">
        <div className="ceo-card">
          <div className="avatar avatar-photo">
            <img src={CEO.photo} alt={CEO.name} />
          </div>
          <h4>{CEO.name}</h4>
          <div className="role">{CEO.role}</div>
        </div>
        <div className="ceo-copy">
          <Eyebrow>MESSAGE FROM THE CEO</Eyebrow>
          <blockquote>{CEO.quote}</blockquote>
          <div className="sign">
            <strong>{CEO.name}</strong>
            Chief Executive Officer, Triangle Outsourcing Corporation
          </div>
        </div>
      </div>
    </section>
  );
}
