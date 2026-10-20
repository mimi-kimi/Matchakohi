import { ArrowUpRight, ChevronDown } from 'lucide-react';
import {
  photoCredits,
  sources,
  unsplashPhotoIds,
} from '../data/shared';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function SourcesCredits() {
  return (
    <section className="section sources" id="sources" aria-labelledby="sources-title">
      <div className="container sources__grid">
        <Reveal className="sources__reading">
          <SectionHeading
            eyebrow="Further reading"
            title="Go a little deeper."
            intro="A short, non-exhaustive list of organisations and publications that informed this guide. Links open in a new tab."
            titleId="sources-title"
          />
          <ul className="sources__list">
            {sources.map((source, index) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer">
                  <span className="sources__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="sources__copy">
                    <span className="sources__publisher">{source.publisher}</span>
                    <span className="sources__title">{source.title}</span>
                    <span className="sources__description">{source.description}</span>
                  </span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="sources__credits" delay={100}>
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            Photography & credits
          </p>
          <h3>Images, licences, and sources</h3>
          <p>
            Editorial photography comes from Unsplash contributors and Wikimedia Commons
            photographers. All images are resized and, in places, cropped to suit the layout.
            Nothing on this page implies an endorsement by the photographers or institutions.
          </p>

          <div className="credits__counts">
            <span>{Object.keys(unsplashPhotoIds).length} from Unsplash</span>
            <span>{photoCredits.length} from Wikimedia Commons</span>
          </div>

          <details className="credits-list">
            <summary>
              <span>Wikimedia Commons attribution</span>
              <span className="credits-list__count">{photoCredits.length} photographs</span>
              <ChevronDown size={16} aria-hidden="true" />
            </summary>
            <ul>
              {photoCredits.map((photo) => (
                <li key={photo.slug}>
                  <a href={photo.pageUrl} target="_blank" rel="noopener noreferrer">
                    {photo.title}
                  </a>
                  <span className="credits-list__meta">
                    {photo.author} ·{' '}
                    <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
                      {photo.license}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </details>

          <p className="sources__license-note">
            Unsplash photographs are used under the{' '}
            <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">
              Unsplash License
            </a>
            . Wikimedia Commons photographs are used under the licences listed above; attribution
            is provided for CC BY and CC BY-SA works.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
