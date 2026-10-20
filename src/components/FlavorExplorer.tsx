import { RotateCcw, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { FlavorContent } from '../data/types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const MAX_SELECTION = 3;

export function FlavorExplorer({ content }: { content: FlavorContent }) {
  const [selected, setSelected] = useState<string[]>([]);

  const selectedDimensions = content.dimensions.filter((dimension) =>
    selected.includes(dimension.id),
  );

  const toggle = (id: string) => {
    setSelected((current) => {
      if (current.includes(id)) return current.filter((value) => value !== id);
      if (current.length >= MAX_SELECTION) return current;
      return [...current, id];
    });
  };

  const limitReached = selected.length >= MAX_SELECTION;

  return (
    <section className="section section--tinted flavor" id="flavor" aria-labelledby="flavor-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="flavor-title"
          />
        </Reveal>

        <div className="flavor__layout">
          <Reveal className="flavor__picker">
            <div className="flavor__picker-top">
              <div>
                <p className="flavor__prompt" id="flavor-prompt">
                  Choose up to three notes
                </p>
                <p className="flavor__count" aria-hidden="true">
                  {selected.length} / {MAX_SELECTION} selected
                </p>
              </div>
              <button
                type="button"
                className="text-button"
                onClick={() => setSelected([])}
                disabled={selected.length === 0}
              >
                <RotateCcw size={15} aria-hidden="true" />
                Reset
              </button>
            </div>

            <div className="flavor__chips" role="group" aria-labelledby="flavor-prompt">
              {content.dimensions.map((dimension) => {
                const active = selected.includes(dimension.id);
                const disabled = !active && limitReached;
                return (
                  <button
                    key={dimension.id}
                    type="button"
                    className={`flavor-chip${active ? ' is-active' : ''}`}
                    aria-pressed={active}
                    disabled={disabled}
                    onClick={() => toggle(dimension.id)}
                  >
                    <span>{dimension.label}</span>
                    {active ? <span className="flavor-chip__check" aria-hidden="true">✓</span> : null}
                  </button>
                );
              })}
            </div>

            <div className="flavor__quick">
              <p>
                <Sparkles size={15} aria-hidden="true" />
                Or try a quick combination
              </p>
              <div className="flavor__quick-buttons">
                {content.quickPicks.map((pick) => (
                  <button
                    key={pick.label}
                    type="button"
                    className="quick-pick"
                    onClick={() => setSelected(pick.ids)}
                  >
                    {pick.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="flavor__result" delay={100}>
            <p className="flavor__result-label">Your exploration</p>
            <div aria-live="polite" aria-atomic="true">
              {selectedDimensions.length === 0 ? (
                <div className="flavor__empty">
                  <h3>{content.emptyTitle}</h3>
                  <p>{content.emptyBody}</p>
                </div>
              ) : (
                <>
                  <h3>
                    You are leaning toward{' '}
                    <em>{selectedDimensions.map((dimension) => dimension.label).join(' · ')}</em>
                  </h3>
                  <ul className="flavor__guidance">
                    {selectedDimensions.map((dimension) => (
                      <li key={dimension.id}>
                        <p className="flavor__guidance-label">{dimension.label}</p>
                        <p>{dimension.guidance}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <p className="flavor__disclaimer">
              Educational suggestions only. Your palate, your coffee, and your kitchen will have
              the final word.
            </p>
          </Reveal>
        </div>

        <Reveal className="flavor__note">
          <h3>{content.note.title}</h3>
          <p>{content.note.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
