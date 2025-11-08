// Get the base path from import.meta.env
export const base = import.meta.env.BASE_URL || '/';

export function withBase(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure base ends with slash
  const cleanBase = base.endsWith('/') ? base : base + '/';
  return cleanBase + cleanPath;
}
