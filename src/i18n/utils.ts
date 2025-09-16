import { ui, defaultLang, type Languages } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export const languages: Languages = {
  en: 'English',
  es: 'Español',
};

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname;
  const parts = pathname?.split('/');
  const path = parts.pop() || parts.pop();

  if (path === undefined) {
    return '/';
  }

  const currentLang = getLangFromUrl(url);

  if (defaultLang === currentLang) {
    return path ? `/${path}` : '/';
  }

  return path ? `/${currentLang}/${path}` : `/${currentLang}`;
}