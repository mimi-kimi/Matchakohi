import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import type { IconName, VarietiesContent, VarietyItem } from '../data/types';
import { Icon } from './Icon';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

interface VarietyCardProps {
  item: VarietyItem;
  groupId: string;
  display: 'features' | 'methods' | 'list';
}

function VarietyCard({ item, groupId, display }: VarietyCardProps) {
  const [open, setOpen] = useState(false);
  const detailId = `${groupId}-${item.id}-detail`;
  const buttonId = `${groupId}-${item.id}-button`;

  return (
    <article className={`variety-card variety-card--${display}${item.image ? ' variety-card--image' : ''}`}>
      {item.image ? (
        <figure className="variety-card__media">
          <Img image={item.image} sizes="(max-width: 720px) 100vw, 380px" />
        </figure>
      ) : (
        <span className="variety-card__icon" aria-hidden="true">
          <Icon name={(item.icon ?? 'leaf') as IconName} size={22} />
        </span>
      )}

      <div className="variety-card__body">
        <p className="variety-card__meta">{item.meta}</p>
        <h4>{item.name}</h4>
        <p>{item.summary}</p>

        {item.detail ? (
          <>
            <div
              id={detailId}
              className={`variety-card__detail${open ? ' is-open' : ''}`}
              hidden={!open}
            >
              <p>{item.detail}</p>
            </div>
            <button
              id={buttonId}
              type="button"
              className="text-button"
              aria-expanded={open}
              aria-controls={detailId}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? 'Show less' : 'Discover more'}
              {open ? <Minus size={15} aria-hidden="true" /> : <Plus size={15} aria-hidden="true" />}
            </button>
          </>
        ) : null}
      </div>
    </article>
  );
}

export function VarietyExplorer({ content }: { content: VarietiesContent }) {
  return (
    <section className="section varieties" id="varieties" aria-labelledby="varieties-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="varieties-title"
          />
        </Reveal>

        <div className="variety-groups">
          {content.groups.map((group, groupIndex) => (
            <Reveal key={group.id} className="variety-group" delay={groupIndex * 60}>
              <header className="variety-group__header">
                <p className="eyebrow">
                  <span className="eyebrow__rule" aria-hidden="true" />
                  {group.eyebrow}
                </p>
                <div className="variety-group__title-row">
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                </div>
              </header>

              {group.display === 'list' ? (
                <ul className="variety-list">
                  {group.items.map((item) => (
                    <li key={item.id} className="variety-list__item">
                      <span className="variety-list__icon" aria-hidden="true">
                        <Icon name={(item.icon ?? 'leaf') as IconName} size={20} />
                      </span>
                      <div>
                        <div className="variety-list__heading">
                          <h4>{item.name}</h4>
                          <span>{item.meta}</span>
                        </div>
                        <p>{item.summary}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={`variety-grid variety-grid--${group.display}`}>
                  {group.items.map((item) => (
                    <VarietyCard
                      key={item.id}
                      item={item}
                      groupId={group.id}
                      display={group.display}
                    />
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="editorial-note">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            A note on categories
          </p>
          <h3>{content.note.title}</h3>
          <p>{content.note.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
