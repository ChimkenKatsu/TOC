export default function Field({ label, id, as = 'input', full = false, className = '', ...rest }) {
  const Tag = as;
  return (
    <div className={`field ${full ? 'full' : ''} ${className}`.trim()}>
      <label htmlFor={id}>{label}</label>
      <Tag id={id} {...rest} />
    </div>
  );
}
