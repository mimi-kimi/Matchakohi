/// <reference types="vite/client" />

interface MatchakohiBootstrap {
  theme: 'coffee' | 'matcha' | null;
  hash: string;
}

interface Window {
  __MATCHAKOHI_BOOTSTRAP__?: MatchakohiBootstrap;
}
