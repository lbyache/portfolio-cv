/**
 * Helper to generate correct URLs respecting Astro's base path for GitHub Pages
 */
export function getRelativeLocaleUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  if (cleanPath === '/' || cleanPath === '') {
    return cleanBase || '/';
  }
  return `${cleanBase}${cleanPath}`;
}

export function url(path: string): string {
  return getRelativeLocaleUrl(path);
}
