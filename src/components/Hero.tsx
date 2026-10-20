import { ArrowDown, ArrowRight } from 'lucide-react';
import type { BeverageContent } from '../data/types';
import { Img } from './Img';

export function Hero({ content }: { content: BeverageContent }) {
  const { hero, theme } = content;

  return (
    <section className={`hero hero--${theme}`} id="top" aria-labelledby="hero-title">
      <div className="hero__media">
        <Img image={hero.image} sizes="100vw" eager />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title">
            {hero.headlineLead} <em>{hero.headlineAccent}</em>
          </h1>
          <p className="hero__supporting">{hero.supporting}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={`#${hero.primary.section}`}>
              {hero.primary.label}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href={`#${hero.secondary.section}`}>
              {hero.secondary.label}
            </a>
          </div>
        </div>

        <aside className="hero__aside" aria-label="Field notes">
          <div className="hero__note-top">
            <span className="hero__kicker">{hero.imageKicker}</span>
            <span className="hero__mark" aria-hidden="true">
              {theme === 'coffee' ? 'C' : 'M'}
            </span>
          </div>
          <p className="hero__caption">{hero.imageCaption}</p>
          <dl className="hero__facts">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <a className="hero__scroll" href="#origins" aria-label={hero.scrollLabel}>
        <span>{hero.scrollLabel}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
