import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const sourceDirectory = '/Users/judetretola/Downloads/TUCKER TRADE WEBSITE';
const outputDirectory = new URL('../public/assets/', import.meta.url);
const sourceFiles = ['HOME.svg', 'ABOUT.svg', 'Merch.svg', 'Upcoming shows.svg'];

await mkdir(outputDirectory, { recursive: true });

for (const sourceFile of sourceFiles) {
  const svg = await readFile(join(sourceDirectory, sourceFile), 'utf8');
  const page = basename(sourceFile, '.svg').toLowerCase().replace(/\s+/g, '-');
  const images = [...svg.matchAll(/data:image\/(png|jpe?g);base64,([A-Za-z0-9+/=]+)/g)];
  const seen = new Set();

  await writeFile(new URL(`source-${page}.svg`, outputDirectory), svg);

  for (const [index, match] of images.entries()) {
    const extension = match[1] === 'jpeg' || match[1] === 'jpg' ? 'jpg' : 'png';
    const data = Buffer.from(match[2], 'base64');
    const digest = createHash('sha1').update(data).digest('hex').slice(0, 10);
    if (seen.has(digest)) continue;
    seen.add(digest);
    await writeFile(new URL(`${page}-${String(index + 1).padStart(2, '0')}-${digest}.${extension}`, outputDirectory), data);
  }
}
