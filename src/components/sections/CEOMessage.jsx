import { CEO } from '../../data/team';

export default function CEOMessage() {
  return (
    <section className="ceo" id="leadership" aria-labelledby="leadership-title">
      <div className="wrap ceo-grid">
        <img className="ceo-portrait" src={CEO.photo} alt={CEO.name} loading="lazy" />
        <div className="ceo-copy">
          <h2 className="eyebrow" id="leadership-title">A note from our CEO</h2>
          <blockquote>{CEO.quote}</blockquote>
          <p className="sign"><strong>{CEO.name}</strong>{CEO.role}</p>
        </div>
      </div>
    </section>
  );
}
