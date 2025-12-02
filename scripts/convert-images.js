import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Directories to scan
const directories = [
  'public',
  'public/images',
  'client/assets/images'
];

async function convertImages(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    const ext = path.extname(file).toLowerCase();

    if (stats.isDirectory()) {
      await convertImages(filePath);
    } else if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);
      const jpgPath = path.join(dir, `${baseName}.jpg`);

      // Skip if we're processing a jpg and it already exists (don't convert jpg to jpg)
      // unless we need to create webp
      if (ext === '.webp') continue;

      console.log(`Checking ${filePath}...`);

      try {
        // Convert to WebP if it doesn't exist
        if (!fs.existsSync(webpPath)) {
          console.log(`  Converting to WebP: ${webpPath}`);
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpPath);
          console.log(`  Created ${webpPath}`);
        }

        // Convert to JPG if it doesn't exist and source is PNG
        // (If source is already JPG, we don't need to convert to JPG)
        if (ext === '.png' && !fs.existsSync(jpgPath)) {
          console.log(`  Converting to JPG: ${jpgPath}`);
          await sharp(filePath)
            .jpeg({ quality: 80 })
            .toFile(jpgPath);
          console.log(`  Created ${jpgPath}`);
        }

      } catch (error) {
        console.error(`  Error converting ${filePath}:`, error);
      }
    }
  }
}

async function main() {
  console.log('Starting image conversion...');
  for (const dir of directories) {
    await convertImages(dir);
  }
  console.log('Image conversion complete.');
}

main();
