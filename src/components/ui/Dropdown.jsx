import { useEffect, useRef, useState } from 'react';

export default function Dropdown({ label, id, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={rootRef}>
      <span className="dd-label" id={id}>{label}</span>
      <div className={`dropdown ${open ? 'open' : ''}`}>
        <button
          type="button"
          className="dropdown-toggle"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={id}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="dropdown-value">{value}</span>
          <svg className="dd-chev" viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
        </button>
        <ul className="dropdown-menu" role="listbox" tabIndex={-1}>
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={opt === value}
              className={opt === value ? 'selected' : ''}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
              <svg className="dd-check" viewBox="0 0 24 24" fill="none" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
