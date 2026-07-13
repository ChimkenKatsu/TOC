import { MANAGEMENT_TEAM } from '../../data/team';
import { SectionHead } from '../ui';

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="wrap">
        <SectionHead eyebrow="ADMIN & MANAGEMENT" title="The team behind every placement">
          A dedicated management layer keeps recruitment, training, and client support running smoothly for every account.
        </SectionHead>
        <div className="team-grid">
          {MANAGEMENT_TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <div className="avatar avatar-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <div className="role">{member.role}</div>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
