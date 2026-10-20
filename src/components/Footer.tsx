import { ArrowUp } from 'lucide-react';
import { footerNav, SITE_TAGLINE } from '../data/shared';
import type { ThemeName } from '../data/types';
import { useTheme } from '../theme/ThemeContext';

export function Footer({ theme }: { theme: ThemeName }) {
  const { switchTheme, openSelection } = useTheme();
  const year = new Date().getFullYear();
  const half = Math.ceil(footerNav.length / 2);
  const columns = [footerNav.slice(0, half), footerNav.slice(half)];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="wordmark wordmark--footer" href="#top">
              <span>
                matcha<span className="wordmark__accent">kōhi</span>
              </span>
              <span className="wordmark__dot" aria-hidden="true" />
              <span className="sr-only"> — back to top</span>
            </a>
            <p className="footer__tagline">{SITE_TAGLINE}</p>
            <p className="footer__description">
              An independent educational magazine about coffee and matcha — their origins,
              varieties, cultures, and the craft of the cup.
            </p>
            <p className="footer__worlds">
              <button
                type="button"
                className={theme === 'coffee' ? 'is-current' : undefined}
                onClick={() => switchTheme('coffee', { scrollToTop: true })}
              >
                Coffee world
              </button>
              <span aria-hidden="true">/</span>
              <button
                type="button"
                className={theme === 'matcha' ? 'is-current' : undefined}
                onClick={() => switchTheme('matcha', { scrollToTop: true })}
              >
                Matcha world
              </button>
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {columns.map((column, index) => (
              <div key={index}>
                <p className="footer__nav-label">
                  {index === 0 ? 'Explore' : 'More to discover'}
                </p>
                <ul>
                  {column.map((item) => (
                    <li key={item.section}>
                      <a href={`#${item.section}`}>{item.label}</a>
                    </li>
                  ))}
                  {index === 1 ? (
                    <li>
                      <a href="#sources">Sources & credits</a>
                    </li>
                  ) : null}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__actions">
          <button type="button" className="footer__choose" onClick={openSelection}>
            Choose your world
          </button>
          <a href="#top" className="footer__back">
            Back to top
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="footer__bottom">
          <p>© {year} Matchakohi. Discover the story behind every sip.</p>
          <p>
            Educational content only. No products, accounts, or personal data. Photography credits
            are listed in <a href="#sources">Sources & credits</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
