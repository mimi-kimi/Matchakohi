import { useEffect, useRef } from 'react';
import { AboutSection } from './components/AboutSection';
import { BackToTop } from './components/BackToTop';
import { Comparison } from './components/Comparison';
import { CultureSection } from './components/CultureSection';
import { DiscoveryQuiz } from './components/DiscoveryQuiz';
import { FinalCTA } from './components/FinalCTA';
import { FlavorExplorer } from './components/FlavorExplorer';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { Navbar } from './components/Navbar';
import { OriginsTimeline } from './components/OriginsTimeline';
import { PreparationGuide } from './components/PreparationGuide';
import { ProcessSection } from './components/ProcessSection';
import { SourcesCredits } from './components/SourcesCredits';
import { ThemeSelectionScreen } from './components/ThemeSelectionScreen';
import { VarietyExplorer } from './components/VarietyExplorer';
import { contentByTheme } from './data';
import { ThemeProvider, useTheme } from './theme/ThemeContext';

function Experience() {
  const { theme, selectionOpen, announcement, hasChosen } = useTheme();
  const content = contentByTheme[theme];
  const shellRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  // Keep the background experience unavailable to keyboard and screen readers
  // while the world-selection dialog is open.
  useEffect(() => {
    if (shellRef.current) shellRef.current.inert = selectionOpen;
  }, [selectionOpen]);

  useEffect(() => {
    if (!selectionOpen) return;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [selectionOpen]);

  // A brief crossfade on theme change, without remounting the page or delaying input.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const main = mainRef.current;
    if (!main) return;
    main.classList.remove('is-theme-fading');
    void main.offsetWidth;
    main.classList.add('is-theme-fading');
    const timer = window.setTimeout(() => main.classList.remove('is-theme-fading'), 380);
    return () => window.clearTimeout(timer);
  }, [theme]);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.seoDescription);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', content.seoTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', content.seoDescription);
  }, [content]);

  // Defensive fallback for browsers where the pre-paint script could not run.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.search || url.hash) {
      window.history.replaceState(null, '', url.pathname);
    }
  }, []);

  // Honour a legacy #section deep link once, then keep the address bar clean.
  useEffect(() => {
    if (!hasChosen) return;
    const hash = window.__MATCHAKOHI_BOOTSTRAP__?.hash;
    if (!hash) return;

    const id = decodeURIComponent(hash.replace(/^#/, ''));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
      if (window.__MATCHAKOHI_BOOTSTRAP__) {
        window.__MATCHAKOHI_BOOTSTRAP__.hash = '';
      }
    }, 140);
    return () => window.clearTimeout(timer);
  }, [hasChosen]);

  // In-page links scroll without adding a #fragment to the public URL.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = link?.getAttribute('href');
      if (!href || href === '#') return;

      const id = decodeURIComponent(href.slice(1));
      const section = document.getElementById(id);
      if (!section) return;

      event.preventDefault();
      if (id === 'main') section.focus({ preventScroll: true });
      section.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'auto'
          : 'smooth',
        block: 'start',
      });
      window.history.replaceState(null, '', window.location.pathname);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <div className="app-shell" ref={shellRef}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <Navbar />

        <main id="main" ref={mainRef} tabIndex={-1}>
          <Hero content={content} />
          <IntroSection content={content.intro} />
          <OriginsTimeline content={content.origins} />
          <ProcessSection content={content.process} />
          <VarietyExplorer content={content.varieties} />
          <FlavorExplorer key={`flavor-${theme}`} content={content.flavor} />
          <PreparationGuide key={`prepare-${theme}`} content={content.prepare} />
          <CultureSection content={content.culture} />
          <Comparison />
          <DiscoveryQuiz key={`discover-${theme}`} content={content.discover} />
          <AboutSection theme={theme} />
          <FinalCTA content={content} />
          <SourcesCredits />
        </main>

        <Footer theme={theme} />
        <BackToTop />
      </div>

      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>

      {selectionOpen ? <ThemeSelectionScreen /> : null}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Experience />
    </ThemeProvider>
  );
}
