import { aboutContent } from '../data/shared';
import type { ThemeName } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function AboutSection({ theme }: { theme: ThemeName }) {
  return (
    <section className={`section about about--${theme}`} id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__visual">
            <figure className="about__image about__image--coffee">
              <Img image={aboutContent.images.coffee} sizes="(max-width: 900px) 55vw, 32vw" />
              <figcaption>Coffee · café culture</figcaption>
            </figure>
            <figure className="about__image about__image--matcha">
              <Img image={aboutContent.images.matcha} sizes="(max-width: 900px) 45vw, 22vw" />
              <figcaption>Matcha · the bowl</figcaption>
            </figure>
            <span className="about__stamp" aria-hidden="true">
              Two worlds
              <br />
              one table
            </span>
          </Reveal>

          <Reveal className="about__copy" delay={100}>
            <SectionHeading
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              titleId="about-title"
            />
            <p className="about__lede">{aboutContent.lede}</p>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <ul className="about__principles">
              {aboutContent.principles.map((principle, index) => (
                <li key={principle.title}>
                  <span className="about__principle-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="about__signature">
              <span aria-hidden="true">matcha</span>
              <span className="wordmark__accent" aria-hidden="true">kōhi</span>
              <span className="sr-only">Matchakohi</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
