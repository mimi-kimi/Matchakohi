import { Check, RotateCcw } from 'lucide-react';
import { useRef, useState, type KeyboardEvent } from 'react';
import type { PrepareContent, Recipe } from '../data/types';
import { Img } from './Img';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function PreparationGuide({ content }: { content: PrepareContent }) {
  const [activeId, setActiveId] = useState(content.recipes[0]?.id ?? '');
  const [completed, setCompleted] = useState<Record<string, number[]>>({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = content.recipes.findIndex((recipe) => recipe.id === activeId);
  const recipe = content.recipes[activeIndex] ?? content.recipes[0];

  if (!recipe) return null;

  const done = completed[recipe.id] ?? [];

  const selectTab = (index: number) => {
    const next = content.recipes[index];
    if (!next) return;
    setActiveId(next.id);
    tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % content.recipes.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + content.recipes.length) % content.recipes.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = content.recipes.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    selectTab(nextIndex);
  };

  const toggleStep = (stepIndex: number) => {
    setCompleted((current) => {
      const stepList = current[recipe.id] ?? [];
      const next = stepList.includes(stepIndex)
        ? stepList.filter((index) => index !== stepIndex)
        : [...stepList, stepIndex];
      return { ...current, [recipe.id]: next };
    });
  };

  const resetSteps = () => {
    setCompleted((current) => ({ ...current, [recipe.id]: [] }));
  };

  return (
    <section className="section prep" id="prepare" aria-labelledby="prep-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="prep-title"
          />
        </Reveal>

        <div className="prep__layout">
          <div
            className="prep__tabs"
            role="tablist"
            aria-label="Preparation methods"
          >
            {content.recipes.map((item, index) => (
              <button
                key={item.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={activeId === item.id}
                aria-controls={`panel-${item.id}`}
                tabIndex={activeId === item.id ? 0 : -1}
                className={`prep__tab${activeId === item.id ? ' is-active' : ''}`}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                <span className="prep__tab-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="prep__tab-copy">
                  <span>{item.name}</span>
                  <small>{item.kicker}</small>
                </span>
              </button>
            ))}
          </div>

          <Reveal className="prep__panel-wrap" key={recipe.id}>
            <PrepPanel
              recipe={recipe}
              done={done}
              onToggleStep={toggleStep}
              onReset={resetSteps}
            />
          </Reveal>
        </div>

        <Reveal className="editorial-note">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            A note on precision
          </p>
          <h3>{content.note.title}</h3>
          <p>{content.note.body}</p>
        </Reveal>
      </div>
    </section>
  );
}

interface PrepPanelProps {
  recipe: Recipe;
  done: number[];
  onToggleStep: (index: number) => void;
  onReset: () => void;
}

function PrepPanel({ recipe, done, onToggleStep, onReset }: PrepPanelProps) {
  const progress = Math.round((done.length / recipe.steps.length) * 100);

  return (
    <div
      className="prep__panel"
      id={`panel-${recipe.id}`}
      role="tabpanel"
      aria-labelledby={`tab-${recipe.id}`}
      tabIndex={0}
    >
      <header className="prep__header">
        <figure className="prep__figure">
          <Img image={recipe.image} sizes="(max-width: 900px) 100vw, 42vw" />
        </figure>
        <div className="prep__intro">
          <p className="prep__kicker">{recipe.kicker}</p>
          <h3>{recipe.name}</h3>
          <p>{recipe.summary}</p>
          <dl className="prep__specs">
            {recipe.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="prep__columns">
        <div>
          <h4>Ingredients</h4>
          <ul className="prep__plain-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Equipment</h4>
          <ul className="prep__plain-list">
            {recipe.equipment.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="prep__method">
        <div className="prep__method-top">
          <div>
            <h4>Method</h4>
            <p className="prep__progress-label">
              {done.length} of {recipe.steps.length} steps · {progress}% complete
            </p>
          </div>
          <button
            type="button"
            className="text-button"
            onClick={onReset}
            disabled={done.length === 0}
          >
            <RotateCcw size={15} aria-hidden="true" />
            Reset guide
          </button>
        </div>

        <div
          className="prep__progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label={`${recipe.name} steps completed`}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <ol className="prep__steps">
          {recipe.steps.map((step, index) => {
            const checked = done.includes(index);
            return (
              <li key={step} className={checked ? 'is-complete' : undefined}>
                <label>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleStep(index)}
                  />
                  <span className="prep__checkbox" aria-hidden="true">
                    <Check size={14} />
                  </span>
                  <span className="prep__step-number" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="prep__step-text">{step}</span>
                </label>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="prep__columns prep__columns--notes">
        <div>
          <h4>Common mistakes</h4>
          <ul className="prep__notes-list">
            {recipe.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Ways to adjust</h4>
          <ul className="prep__notes-list">
            {recipe.adjust.map((adjustment) => (
              <li key={adjustment}>{adjustment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
