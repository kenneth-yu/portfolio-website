const srcsetModules = import.meta.glob<string>(
  './images/*-pc*.jpg',
  { query: '?w=400;800;1200&format=webp&as=srcset', import: 'default', eager: true }
);

const srcModules = import.meta.glob<string>(
  './images/*-pc*.jpg',
  { query: '?w=800', import: 'default', eager: true }
);

function getFilename(path: string): string {
  return path.split('/').pop() ?? path;
}

export const imageSourcesByPath: Record<string, { src: string; srcSet: string }> = {};
for (const path of Object.keys(srcsetModules)) {
  const filename = getFilename(path);
  const srcSet = srcsetModules[path] as string;
  const src = (srcModules[path] as string) ?? srcSet;
  imageSourcesByPath[filename] = { src, srcSet };
}
