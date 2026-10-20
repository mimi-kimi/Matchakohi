import { ArrowRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { SITE_TAGLINE } from '../data/shared';
import { useTheme } from '../theme/ThemeContext';
import { Img } from './Img';

const WORLDS = [
  {
    id: 'coffee' as const,
    team: 'Team Coffee',
    heading: 'Team Coffee.',
    description:
      'From ancient legends to your daily ritual. Discover the origins, varieties, and craft behind every cup.',
    cta: 'Explore Coffee',
    meta: 'Origins · Varieties · Rituals',
    index: '01',
    image: {
      slug: 'coffee-hero',
      alt: 'Friends holding freshly poured cups of coffee',
      position: 'center 45%',
    },
  },
  {
    id: 'matcha' as const,
    team: 'Team Matcha',
    heading: 'Team Matcha.',
    description:
      'Discover the traditions, cultivation, and quiet art behind Japan’s beloved green tea.',
    cta: 'Explore Matcha',
    meta: 'Cultivation · Grades · The bowl',
    index: '02',
    image: {
      slug: 'matcha-hero',
      alt: 'Bowls of matcha powder with bamboo whisks and scoops',
      position: 'center 50%',
    },
  },
];

export function ThemeSelectionScreen() {
  const { chooseTheme, closeSelection, hasChosen, theme } = useTheme();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => firstCardRef.current?.focus(), 60);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (hasChosen) closeSelection();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.offsetParent !== null);

      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', onKeyDown);
      previousFocus.current?.focus?.();
    };
  }, [closeSelection, hasChosen]);

  return (
    <div
      className="selection"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="selection-title"
      aria-describedby="selection-description"
    >
      <div className="selection__inner">
        <header className="selection__header">
          <div className="selection__brand-row">
            <p className="selection__wordmark">
              matcha<span>kōhi</span>
            </p>
            <p className="selection__tagline">{SITE_TAGLINE}</p>
            {hasChosen ? (
              <button
                type="button"
                className="selection__close"
                onClick={closeSelection}
                aria-label={`Close and continue with ${theme}`}
              >
                <X size={18} aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <p className="selection__kicker">One brand · Two worlds</p>
          <h1 id="selection-title">Which world are you exploring today?</h1>
          <p className="selection__description" id="selection-description">
            Two drinks, two histories, and one shared curiosity. Choose a world to step into. You
            can switch at any time — your choice will be waiting when you return.
          </p>
        </header>

        <div className="selection__grid">
          {WORLDS.map((world) => (
            <button
              key={world.id}
              ref={world.id === 'coffee' ? firstCardRef : undefined}
              type="button"
              className={`world-card world-card--${world.id}`}
              onClick={() => chooseTheme(world.id)}
            >
              <span className="world-card__media" aria-hidden="true">
                <Img image={world.image} sizes="(max-width: 860px) 100vw, 50vw" eager />
                <span className="world-card__shade" />
              </span>
              <span className="world-card__content">
                <span className="world-card__meta">
                  <span>{world.team}</span>
                  <span>{world.index}</span>
                </span>
                <span className="world-card__heading">{world.heading}</span>
                <span className="world-card__description">{world.description}</span>
                <span className="world-card__footer">
                  <span className="world-card__cta">
                    {world.cta}
                    <ArrowRight size={18} aria-hidden="true" />
                  </span>
                  <span className="world-card__tags">{world.meta}</span>
                </span>
              </span>
            </button>
          ))}
        </div>

        <footer className="selection__footer">
          <p>
            {hasChosen
              ? `You are currently exploring ${theme}. Your choice is saved on this device.`
              : 'No account, no email address — just a cup.'}
          </p>
          <p className="selection__footer-note">
            Photography credits are available in the site footer.
          </p>
        </footer>
      </div>
    </div>
  );
}
