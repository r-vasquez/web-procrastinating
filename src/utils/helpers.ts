import { ThemeTypes } from './types';

export const addThemeClassToBody = (themeClass: ThemeTypes) => {
  const bodyClassList = document.body.classList;
  if (bodyClassList.contains(themeClass)) return;

  bodyClassList.remove(...bodyClassList);
  bodyClassList.add(themeClass);
};

export const getCurrentTheme = (): ThemeTypes => {
  const savedTheme = localStorage?.getItem('theme');
  if (savedTheme) return savedTheme as ThemeTypes;
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return prefersDarkTheme ? ThemeTypes.dark : ThemeTypes.light;
};
