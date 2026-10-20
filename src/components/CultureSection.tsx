import type { CultureContent } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function CultureSection({ content }: { content: CultureContent }) {
  const feature = content.entries.find((entry) => entry.size === 'feature') ?? content.entries[0];
  const rest = content.entries.filter((entry) => entry.id !== feature?.id);

  return (
    <section className="section culture" id="culture" aria-labelledby="culture-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="culture-title"
          />
        </Reveal>

        {feature ? (
          <Reveal className="culture__feature">
            <figure className="culture__feature-figure">
              <Img image={feature.image} sizes="(max-width: 900px) 100vw, 55vw" />
              <figcaption>
                <span>{feature.location}</span>
                <span>{feature.title}</span>
              </figcaption>
            </figure>
            <div className="culture__feature-copy">
              <p className="eyebrow">
                <span className="eyebrow__rule" aria-hidden="true" />
                {feature.location}
              </p>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              {feature.footnote ? <p className="culture__footnote">{feature.footnote}</p> : null}
            </div>
          </Reveal>
        ) : null}

        <div className="culture__grid">
          {rest.map((entry, index) => (
            <Reveal key={entry.id} delay={Math.min(index * 60, 180)}>
              <article className="culture-card">
                <figure>
                  <Img image={entry.image} sizes="(max-width: 760px) 100vw, 33vw" />
                </figure>
                <div className="culture-card__body">
                  <p className="culture-card__location">{entry.location}</p>
                  <h3>{entry.title}</h3>
                  <p>{entry.body}</p>
                  {entry.footnote ? <p className="culture__footnote">{entry.footnote}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="editorial-note">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            Reading with care
          </p>
          <h3>{content.note.title}</h3>
          <p>{content.note.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
