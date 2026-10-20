import type { OriginsContent } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function OriginsTimeline({ content }: { content: OriginsContent }) {
  return (
    <section className="section section--tinted origins" id="origins" aria-labelledby="origins-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="origins-title"
          />
        </Reveal>

        <p className="timeline__label">{content.timelineLabel}</p>

        <ol className="timeline">
          {content.timeline.map((entry, index) => (
            <li className="timeline__item" key={entry.id}>
              <Reveal delay={Math.min(index * 40, 160)}>
                <div className="timeline__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="timeline__content">
                  <div className="timeline__when">
                    <p className="timeline__period">{entry.period}</p>
                    <p className="timeline__location">{entry.location}</p>
                  </div>
                  <div className={`timeline__body${entry.image ? ' timeline__body--with-image' : ''}`}>
                    <div className="timeline__text">
                      <h3>{entry.title}</h3>
                      <p>{entry.body}</p>
                      {entry.aside ? <p className="timeline__aside">{entry.aside}</p> : null}
                    </div>
                    {entry.image ? (
                      <figure className="timeline__figure">
                        <Img image={entry.image} sizes="(max-width: 720px) 100vw, 300px" />
                      </figure>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="feature-split">
          <div className="feature-split__copy">
            <p className="eyebrow">
              <span className="eyebrow__rule" aria-hidden="true" />
              {content.feature.eyebrow}
            </p>
            <h3>{content.feature.title}</h3>
            {content.feature.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <figure className="feature-split__figure">
            <Img image={content.feature.image} sizes="(max-width: 900px) 100vw, 45vw" />
            <figcaption>{content.feature.caption}</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
