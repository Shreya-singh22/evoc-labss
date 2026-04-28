const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/Evoc-Labs' : '';

export function getPath(path: string) {
  if (path.startsWith('http')) return path;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
