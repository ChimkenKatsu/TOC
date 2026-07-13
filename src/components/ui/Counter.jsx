import { useEffect, useRef, useState } from 'react';

// Animates from 0 up to `value` once the element scrolls into view.
// display: optional literal string shown instead of an animated number (e.g. "Iligan").
export default function Counter({ value, decimals = 0, suffix = '', display }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (display != null || value == null) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1300;
          const start = performance.now();
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCurrent(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
            else setCurrent(value);
          }
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, display]);

  if (display != null) {
    return <div className="num" ref={ref}>{display}</div>;
  }

  return (
    <div className="num" ref={ref}>
      {current.toFixed(decimals)}
      {suffix}
    </div>
  );
}
