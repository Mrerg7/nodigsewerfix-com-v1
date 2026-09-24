import sharp from 'sharp';
import { mkdir, rename, copyFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const imagesDir = path.join(root, 'public', 'images');
const heroSrc = path.join(imagesDir, 'hero-sewer.jpg');
const heroOriginal = path.join(root, 'assets', 'hero-sewer.jpg');

// Preserve the unoptimized original (kept outside public/ so it never ships)
try {
  await access(heroOriginal);
} catch {
  await mkdir(path.dirname(heroOriginal), { recursive: true });
  await copyFile(heroSrc, heroOriginal);
}
const source = heroOriginal;

// Hero: 1600w progressive JPEG for desktop (mobile uses hero-sewer-800.jpg)
await sharp(source)
  .resize(1600, null, { withoutEnlargement: true })
  .jpeg({ quality: 70, progressive: true, mozjpeg: true })
  .toFile(path.join(imagesDir, 'hero-sewer.tmp.jpg'));

// Hero mobile: 800w
await sharp(source)
  .resize(800, null, { withoutEnlargement: true })
  .jpeg({ quality: 65, progressive: true, mozjpeg: true })
  .toFile(path.join(imagesDir, 'hero-sewer-800.jpg'));

// OG/Twitter card image: exact 1200x630
await sharp(source)
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 80, progressive: true, mozjpeg: true })
  .toFile(path.join(imagesDir, 'og-image.jpg'));

// Apple touch icon from favicon
await sharp(path.join(root, 'public', 'favicon.svg'))
  .resize(180, 180)
  .flatten({ background: '#0F172A' })
  .png()
  .toFile(path.join(root, 'public', 'apple-touch-icon.png'));

await rename(path.join(imagesDir, 'hero-sewer.tmp.jpg'), heroSrc);

console.log('Images optimized: hero-sewer.jpg, hero-sewer-800.jpg, og-image.jpg, apple-touch-icon.png');
