import { MANAGEMENT_TEAM } from '../../data/team';

export default function Team() {
  return (
    <section className="team" id="team" aria-labelledby="team-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Our people</p>
          <h2 id="team-title">Meet the management team.</h2>
        </div>
        <ul className="team-grid">
          {MANAGEMENT_TEAM.map((member) => (
            <li className="team-card" key={member.name}>
              <img src={member.photo} alt="" loading="lazy" />
              <div className="team-bio">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
