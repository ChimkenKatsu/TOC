// Generic button used for links and form submits.
// variant: 'primary' | 'outline' | 'ghost' | 'dark'
export default function Button({
  as = 'button',
  variant = 'primary',
  className = '',
  loading = false,
  children,
  ...rest
}) {
  const Tag = as;
  return (
    <Tag className={`btn btn-${variant} ${loading ? 'is-loading' : ''} ${className}`.trim()} {...rest}>
      <span className="btn-label">{children}</span>
      {loading && (
        <svg className="btn-spinner" viewBox="0 0 24 24" fill="none" style={{ display: 'block' }}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="40" strokeDashoffset="10" />
        </svg>
      )}
    </Tag>
  );
}
