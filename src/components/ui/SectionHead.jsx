import Eyebrow from './Eyebrow';

export default function SectionHead({ eyebrow, title, children, style, eyebrowStyle }) {
  return (
    <div className="section-head" style={style}>
      <Eyebrow style={eyebrowStyle}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
