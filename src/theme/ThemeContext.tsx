import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { THEME_STORAGE_KEY } from '../data/shared';
import type { ThemeName } from '../data/types';

interface ThemeContextValue {
  theme: ThemeName;
  hasChosen: boolean;
  selectionOpen: boolean;
  announcement: string;
  chooseTheme: (theme: ThemeName) => void;
  switchTheme: (theme: ThemeName, options?: { scrollToTop?: boolean }) => void;
  openSelection: () => void;
  closeSelection: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const isTheme = (value: string | null | undefined): value is ThemeName =>
  value === 'coffee' || value === 'matcha';

function readStoredTheme(): ThemeName | null {
  try {
    const value = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStoredTheme(theme: ThemeName): void {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Private browsing or blocked storage: the experience still works for this visit.
  }
}

function readUrlTheme(): ThemeName | null {
  try {
    const value = new URLSearchParams(window.location.search).get('theme');
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const initialUrlTheme = useRef<ThemeName | null>(readUrlTheme());
  const initialStoredTheme = useRef<ThemeName | null>(readStoredTheme());
  const initialTheme = initialUrlTheme.current ?? initialStoredTheme.current ?? 'coffee';
  const initialHasChosen = Boolean(initialUrlTheme.current || initialStoredTheme.current);

  const [theme, setTheme] = useState<ThemeName>(initialTheme);
  const [hasChosen, setHasChosen] = useState(initialHasChosen);
  const [selectionOpen, setSelectionOpen] = useState(!initialHasChosen);
  const [announcement, setAnnouncement] = useState('');

  const applyTheme = useCallback((next: ThemeName) => {
    document.documentElement.dataset.theme = next;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = next === 'coffee' ? '#2b1d18' : '#315a3b';
    document.title =
      next === 'coffee'
        ? 'Coffee — Origins, Varieties & Brewing | Matchakohi'
        : 'Matcha — Origins, Grades & Preparation | Matchakohi';
  }, []);

  useEffect(() => {
    applyTheme(theme);
    if (hasChosen) writeStoredTheme(theme);
  }, [theme, hasChosen, applyTheme]);

  // A valid ?theme= parameter wins on first load, then becomes the saved choice.
  useEffect(() => {
    if (initialUrlTheme.current) writeStoredTheme(initialUrlTheme.current);
  }, []);

  const syncUrl = useCallback((next: ThemeName) => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('theme', next);
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    } catch {
      // URL updates are an enhancement; the preference is still stored.
    }
  }, []);

  const chooseTheme = useCallback(
    (next: ThemeName) => {
      setTheme(next);
      setHasChosen(true);
      setSelectionOpen(false);
      writeStoredTheme(next);
      syncUrl(next);
      setAnnouncement(`${next === 'coffee' ? 'Coffee' : 'Matcha'} experience selected.`);
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        window.setTimeout(() => {
          document.getElementById('main')?.focus({ preventScroll: true });
        }, 120);
      });
    },
    [syncUrl],
  );

  const switchTheme = useCallback(
    (next: ThemeName, options?: { scrollToTop?: boolean }) => {
      if (next === theme) {
        setSelectionOpen(false);
        if (options?.scrollToTop) {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        }
        return;
      }
      setTheme(next);
      setHasChosen(true);
      setSelectionOpen(false);
      setAnnouncement(
        `Now exploring ${next === 'coffee' ? 'coffee' : 'matcha'}. The page content and imagery have changed.`,
      );
      writeStoredTheme(next);
      syncUrl(next);
      if (options?.scrollToTop) {
        window.requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
      }
    },
    [theme, syncUrl],
  );

  const openSelection = useCallback(() => setSelectionOpen(true), []);

  const closeSelection = useCallback(() => {
    setSelectionOpen((open) => (hasChosen ? false : open));
  }, [hasChosen]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      hasChosen,
      selectionOpen,
      announcement,
      chooseTheme,
      switchTheme,
      openSelection,
      closeSelection,
    }),
    [
      theme,
      hasChosen,
      selectionOpen,
      announcement,
      chooseTheme,
      switchTheme,
      openSelection,
      closeSelection,
    ],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
