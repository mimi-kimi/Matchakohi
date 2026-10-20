import type { IntroContent } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function IntroSection({ content }: { content: IntroContent }) {
  return (
    <section className="section intro" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro__grid">
          <Reveal className="intro__copy">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              titleId="intro-title"
            />
            <p className="intro__lede">{content.lede}</p>
            <div className="intro__paragraphs">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <blockquote className="intro__quote">
              <p>“{content.quote}”</p>
              {content.quoteAttribution ? <cite>{content.quoteAttribution}</cite> : null}
            </blockquote>
          </Reveal>

          <Reveal className="intro__visual" delay={120}>
            <figure className="intro__figure intro__figure--main">
              <Img image={content.image} sizes="(max-width: 900px) 100vw, 45vw" />
            </figure>
            <figure className="intro__figure intro__figure--inset">
              <Img image={content.insetImage} sizes="(max-width: 900px) 40vw, 190px" />
            </figure>
            <span className="intro__visual-caption">Selected from the field notes</span>
          </Reveal>
        </div>

        <dl className="intro__facts">
          {content.facts.map((fact, index) => (
            <div key={fact.label} className="intro__fact">
              <span className="intro__fact-index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <dt>{fact.value}</dt>
              <dd>{fact.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
