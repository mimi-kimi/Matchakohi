import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { DiscoverContent, QuizResult } from '../data/types';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function DiscoveryQuiz({ content }: { content: DiscoverContent }) {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const answeredCount = Object.keys(answers).length;
  const complete = answeredCount === content.questions.length;

  const result = useMemo<QuizResult>(() => {
    if (!complete) {
      return (
        content.results.find((item) => item.id === content.defaultResult) ?? content.results[0]!
      );
    }

    const chosen = new Set(Object.values(answers));
    let best = content.results[0]!;
    let bestScore = -1;

    for (const candidate of content.results) {
      const score = candidate.matches.reduce(
        (total, match) => total + (chosen.has(match) ? 1 : 0),
        0,
      );
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    return best;
  }, [answers, complete, content]);

  const reset = () => setAnswers({});

  return (
    <section
      className="section section--dark discover"
      id="discover"
      aria-labelledby="discover-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            intro={content.intro}
            titleId="discover-title"
          />
        </Reveal>

        <div className="quiz">
          <form className="quiz__form" onSubmit={(event) => event.preventDefault()}>
            {content.questions.map((question, questionIndex) => (
              <fieldset className="quiz__question" key={question.id}>
                <legend>
                  <span className="quiz__number" aria-hidden="true">
                    {String(questionIndex + 1).padStart(2, '0')}
                  </span>
                  {question.prompt}
                </legend>
                <div className="quiz__options">
                  {question.options.map((option) => (
                    <label
                      key={option.id}
                      className={`quiz-option${
                        answers[question.id] === option.id ? ' is-selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.id}
                        checked={answers[question.id] === option.id}
                        onChange={() =>
                          setAnswers((current) => ({ ...current, [question.id]: option.id }))
                        }
                      />
                      <span className="quiz-option__control" aria-hidden="true" />
                      <span className="quiz-option__copy">
                        <span className="quiz-option__label">{option.label}</span>
                        <span className="quiz-option__note">{option.note}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}

            <div className="quiz__form-footer">
              <p className="quiz__progress" aria-live="polite">
                {complete
                  ? 'All three choices made. Your suggestion is ready.'
                  : `${answeredCount} of ${content.questions.length} choices made`}
              </p>
              <button type="button" className="text-button" onClick={reset} disabled={answeredCount === 0}>
                <RotateCcw size={15} aria-hidden="true" />
                Start again
              </button>
            </div>
          </form>

          <aside className="quiz__result" aria-live="polite" aria-atomic="true">
            {complete ? (
              <>
                <p className="quiz__result-label">
                  <Sparkles size={15} aria-hidden="true" />
                  Your next step
                </p>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
                <a className="btn btn--primary" href={`#${result.link.section}`}>
                  {result.link.label}
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </>
            ) : (
              <>
                <p className="quiz__result-label">Your next step</p>
                <h3>A suggestion, not a score</h3>
                <p>
                  Answer all three questions and we’ll point you toward a section that matches
                  your curiosity. Nothing is submitted anywhere.
                </p>
                <div className="quiz__meter" aria-hidden="true">
                  {[0, 1, 2].map((index) => (
                    <span
                      key={index}
                      className={index < answeredCount ? 'is-filled' : undefined}
                    />
                  ))}
                </div>
              </>
            )}
          </aside>
        </div>

        <p className="quiz__note">{content.note}</p>
      </div>
    </section>
  );
}
