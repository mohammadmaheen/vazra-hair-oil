/**
 * Resolves a public asset path against Vite's base URL.
 * Ensures image assets work correctly in development, production, and GitHub Pages subpaths.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  // Strip query parameters to handle clean path
  const [cleanUrl, query] = path.split('?');
  const cleanPath = cleanUrl.replace(/^(\.\/|\/)+/, '');
  const base = (import.meta as unknown as { env?: { BASE_URL?: string } })?.env?.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const fullPath = `${normalizedBase}${cleanPath}`;
  return query ? `${fullPath}?${query}` : fullPath;
}
