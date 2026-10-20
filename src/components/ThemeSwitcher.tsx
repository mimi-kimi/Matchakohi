import { Coffee, Leaf } from 'lucide-react';
import { useRef, type KeyboardEvent } from 'react';
import { useTheme } from '../theme/ThemeContext';
import type { ThemeName } from '../data/types';

const OPTIONS: { id: ThemeName; label: string; Icon: typeof Coffee }[] = [
  { id: 'coffee', label: 'Coffee', Icon: Coffee },
  { id: 'matcha', label: 'Matcha', Icon: Leaf },
];

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, switchTheme } = useTheme();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    const keys = ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % OPTIONS.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + OPTIONS.length) % OPTIONS.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = OPTIONS.length - 1;

    const next = OPTIONS[nextIndex];
    if (!next) return;
    switchTheme(next.id);
    buttons.current[nextIndex]?.focus();
  };

  return (
    <div
      className={`theme-switcher${compact ? ' theme-switcher--compact' : ''}`}
      role="radiogroup"
      aria-label="Choose your experience"
    >
      <span className="sr-only">Choose between the coffee and matcha experiences.</span>
      {OPTIONS.map(({ id, label, Icon }, index) => {
        const active = theme === id;
        return (
          <button
            key={id}
            ref={(element) => {
              buttons.current[index] = element;
            }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            className={`theme-switcher__option${active ? ' is-active' : ''}`}
            onClick={() => switchTheme(id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
            <span>{label}</span>
            <span className="theme-switcher__dot" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
