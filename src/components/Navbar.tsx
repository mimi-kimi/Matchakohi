import { Compass, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import {
  primaryNav,
  secondaryNav,
} from '../data/shared';
import type { SectionId } from '../data/types';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrolled } from '../hooks/useScrolled';
import { useTheme } from '../theme/ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

const PRIMARY_SECTION_IDS: string[] = primaryNav.map((item) => item.section);

export function Navbar() {
  const { openSelection, selectionOpen, theme } = useTheme();
  const scrolled = useScrolled(20);
  const active = useActiveSection(PRIMARY_SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const firstLink = menuRef.current?.querySelector<HTMLElement>('.mobile-menu__nav a');
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (menuRef.current?.contains(target) || menuButtonRef.current?.contains(target)) return;
      setMenuOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (selectionOpen) setMenuOpen(false);
  }, [selectionOpen]);

  const navigate = (section: SectionId) => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a className="wordmark" href="#top" onClick={() => setMenuOpen(false)}>
          <span>
            matcha<span className="wordmark__accent">kōhi</span>
          </span>
          <span className="wordmark__dot" aria-hidden="true" />
          <span className="sr-only"> — back to top</span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              aria-current={active === item.section ? 'location' : undefined}
              className={active === item.section ? 'is-active' : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.section);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="choose-world"
            onClick={openSelection}
            aria-haspopup="dialog"
            aria-label="Choose world"
          >
            <Compass size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>Choose world</span>
          </button>

          <div className="navbar__switch">
            <ThemeSwitcher />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${menuOpen ? ' is-open' : ''}`}
        hidden={!menuOpen}
        aria-label="Site menu"
      >
        <div className="mobile-menu__top">
          <p className="eyebrow">
            <span className="eyebrow__rule" aria-hidden="true" />
            The {theme} experience
          </p>
          <ThemeSwitcher compact />
        </div>

        <nav className="mobile-menu__nav" aria-label="Sections">
          {primaryNav.map((item, index) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.section);
              }}
            >
              <span className="mobile-menu__index">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu__secondary">
          <p className="mobile-menu__label">More to explore</p>
          {secondaryNav.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.section);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button type="button" className="btn btn--outline btn--full" onClick={openSelection}>
          Choose your world
        </button>
      </div>
    </header>
  );
}
