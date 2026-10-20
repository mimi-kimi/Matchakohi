import { ArrowUp } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';

export function BackToTop() {
  const visible = useScrolled(700);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        })
      }
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  );
}
