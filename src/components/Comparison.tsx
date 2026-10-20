import { ArrowUpRight, Coffee, Leaf } from 'lucide-react';
import {
  comparisonIntro,
  comparisonNote,
  comparisonRows,
} from '../data/shared';
import { useTheme } from '../theme/ThemeContext';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Comparison() {
  const { theme, switchTheme } = useTheme();
  const other = theme === 'coffee' ? 'matcha' : 'coffee';

  return (
    <section
      className="section section--tinted comparison"
      id="compare"
      aria-labelledby="compare-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Coffee vs matcha"
            title="Two Worlds, One Table"
            intro={comparisonIntro}
            titleId="compare-title"
          />
        </Reveal>

        <Reveal className="comparison__table-wrap">
          <table className="comparison__table">
            <caption className="sr-only">
              A side-by-side comparison of coffee and matcha by plant, processing, preparation,
              flavor, caffeine, culture, and equipment.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="comparison__corner">
                  <span>Compare</span>
                </th>
                <th scope="col" className={theme === 'coffee' ? 'is-current' : undefined}>
                  <span className="comparison__head-icon comparison__head-icon--coffee" aria-hidden="true">
                    <Coffee size={20} strokeWidth={1.5} />
                  </span>
                  <span>Coffee</span>
                  {theme === 'coffee' ? <small>You are here</small> : null}
                </th>
                <th scope="col" className={theme === 'matcha' ? 'is-current' : undefined}>
                  <span className="comparison__head-icon comparison__head-icon--matcha" aria-hidden="true">
                    <Leaf size={20} strokeWidth={1.5} />
                  </span>
                  <span>Matcha</span>
                  {theme === 'matcha' ? <small>You are here</small> : null}
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.id}>
                  <th scope="row">{row.label}</th>
                  <td className={theme === 'coffee' ? 'is-current' : undefined}>{row.coffee}</td>
                  <td className={theme === 'matcha' ? 'is-current' : undefined}>{row.matcha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <div className="comparison__cards">
          {comparisonRows.map((row) => (
            <article key={row.id} className="comparison-card">
              <h3>{row.label}</h3>
              <div className={`comparison-card__row comparison-card__row--coffee${theme === 'coffee' ? ' is-current' : ''}`}>
                <span>Coffee</span>
                <p>{row.coffee}</p>
              </div>
              <div className={`comparison-card__row comparison-card__row--matcha${theme === 'matcha' ? ' is-current' : ''}`}>
                <span>Matcha</span>
                <p>{row.matcha}</p>
              </div>
            </article>
          ))}
        </div>

        <Reveal className="comparison__footer">
          <div className="comparison__note">
            <h3>A note on comparison</h3>
            <p>{comparisonNote}</p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => switchTheme(other, { scrollToTop: true })}
          >
            Explore the Other Side
            <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </Reveal>

      </div>
    </section>
  );
}
