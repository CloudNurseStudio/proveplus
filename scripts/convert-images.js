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

    if (stats.isDirectory()) {
      await convertImages(filePath);
    } else if (path.extname(file).toLowerCase() === '.png') {
      const baseName = path.basename(file, '.png');
      const webpPath = path.join(dir, `${baseName}.webp`);
      const jpgPath = path.join(dir, `${baseName}.jpg`);

      console.log(`Converting ${filePath}...`);

      try {
        // Convert to WebP
        if (!fs.existsSync(webpPath)) {
            await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(webpPath);
            console.log(`  Created ${webpPath}`);
        } else {
             console.log(`  Skipping ${webpPath} (exists)`);
        }

        // Convert to JPG
        if (!fs.existsSync(jpgPath)) {
            await sharp(filePath)
            .jpeg({ quality: 80 })
            .toFile(jpgPath);
            console.log(`  Created ${jpgPath}`);
        } else {
             console.log(`  Skipping ${jpgPath} (exists)`);
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
