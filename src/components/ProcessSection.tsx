import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import { useRef } from 'react';
import type { ProcessContent } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ProcessSection({ content }: { content: ProcessContent }) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>('.process-card');
    const distance = card ? card.offsetWidth + 24 : 340;
    rail.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  return (
    <section
      className="section section--dark process"
      id="process"
      aria-labelledby="process-title"
    >
      <div className="container">
        <div className="process__header">
          <Reveal>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              intro={content.intro}
              titleId="process-title"
            />
          </Reveal>
          <div className="process__controls">
            <button
              type="button"
              className="icon-button"
              onClick={() => scrollRail(-1)}
              aria-label="Previous production stage"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => scrollRail(1)}
              aria-label="Next production stage"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="process__rail"
          ref={railRef}
          tabIndex={0}
          role="region"
          aria-label={`${content.title}: ${content.stages.length} stages`}
        >
          <ol className="process__stages">
            {content.stages.map((stage, index) => (
              <li key={stage.id}>
                <article className="process-card">
                  <figure className="process-card__media">
                    <Img image={stage.image} sizes="(max-width: 700px) 90vw, 320px" />
                    <span className="process-card__number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </figure>
                  <div className="process-card__body">
                    <p className="process-card__step">Step {index + 1}</p>
                    <h3>{stage.title}</h3>
                    <p>{stage.body}</p>
                    <p className="process-card__detail">{stage.detail}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
        <p className="process__hint">
          <span aria-hidden="true">↔</span> Scroll the sequence to follow every stage.
        </p>

        <Reveal className="process__note">
          <span className="process__note-icon" aria-hidden="true">
            <Info size={18} strokeWidth={1.6} />
          </span>
          <div>
            <h3>{content.note.title}</h3>
            <p>{content.note.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
