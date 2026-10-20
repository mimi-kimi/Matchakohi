import { ArrowRight } from 'lucide-react';
import type { BeverageContent } from '../data/types';
import { useTheme } from '../theme/ThemeContext';
import { Img } from './Img';
import { Reveal } from './Reveal';

export function FinalCTA({ content }: { content: BeverageContent }) {
  const { switchTheme } = useTheme();
  const other = content.theme === 'coffee' ? 'matcha' : 'coffee';
  const { finalCta } = content;

  return (
    <section
      className={`final-cta final-cta--${content.theme}`}
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta__media">
        <Img image={finalCta.image} sizes="100vw" />
        <div className="final-cta__scrim" aria-hidden="true" />
      </div>
      <div className="container final-cta__inner">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            {finalCta.eyebrow}
          </p>
          <h2 id="final-cta-title">{finalCta.title}</h2>
          <p>{finalCta.body}</p>
          <div className="final-cta__actions">
            <a className="btn btn--light" href={`#${finalCta.primary.section}`}>
              {finalCta.primary.label}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="btn btn--ghost-light"
              onClick={() => switchTheme(other, { scrollToTop: true })}
            >
              {finalCta.secondaryLabel}
            </button>
          </div>
          <p className="final-cta__note">
            Two complete experiences, one brand. You can switch worlds whenever you like.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
