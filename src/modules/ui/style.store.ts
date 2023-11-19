import { createEffect, createRoot } from 'solid-js';
import { createStoredSignal } from '../shared/signals/signals.models';

export const styleStore = createRoot(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [getTheme, setTheme] = createStoredSignal<'light' | 'dark'>('theme', prefersDark ? 'dark' : 'light');
  const getIsDark = () => getTheme() === 'dark';
  const toggleTheme = () => setTheme(getIsDark() ? 'light' : 'dark');

  createEffect(() => {
    const html = document.querySelector('html');
    html?.classList.toggle('dark', getIsDark());
  });

  return {
    getTheme,
    getIsDark,
    toggleTheme,
  };
});
