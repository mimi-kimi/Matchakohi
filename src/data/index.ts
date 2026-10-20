import { coffeeContent } from './coffee';
import { matchaContent } from './matcha';
import type { BeverageContent, ThemeName } from './types';

export const contentByTheme: Record<ThemeName, BeverageContent> = {
  coffee: coffeeContent,
  matcha: matchaContent,
};

export { coffeeContent, matchaContent };
export * from './shared';
export type * from './types';
