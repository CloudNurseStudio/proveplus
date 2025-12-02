import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map of Figma URLs to desired filenames
const imagesToDownload = {
  // MicroProbioticSection.tsx
  'https://www.figma.com/api/mcp/asset/37d3396a-c104-4c18-bbc3-304bca47b168': 'microprobiotic-image-45',
  'https://www.figma.com/api/mcp/asset/8dcf5f8c-8050-4f51-ba6e-5427a753c122': 'microprobiotic-product-1',
  'https://www.figma.com/api/mcp/asset/acd553df-bc42-4e29-89e6-6330e1004ca5': 'microprobiotic-product-2',
  'https://www.figma.com/api/mcp/asset/cab5d9f9-4ec6-4924-91da-c4b433292f8a': 'microprobiotic-mix-1',
  'https://www.figma.com/api/mcp/asset/5904ca24-0226-4f8e-b91e-49241d8ddf65': 'microprobiotic-element-plus-030',
  
  // contact/page.tsx
  'https://www.figma.com/api/mcp/asset/663b733b-91fc-4b76-a567-946102e31221': 'contact-image',
  
  // products/flowpro/page.tsx
  'https://www.figma.com/api/mcp/asset/876f3bf5-465c-48dc-9f8a-9c94c92c2cfa': 'flowpro-slide-1',
  'https://www.figma.com/api/mcp/asset/5d9cc881-5d4f-45b7-a099-82934c48d6aa': 'flowpro-slide-2',
  'https://www.figma.com/api/mcp/asset/320de9d0-9d0e-4551-9da4-e03e85c8c473': 'flowpro-slide-3',
  'https://www.figma.com/api/mcp/asset/3bca5214-afd4-4f69-b30f-3bcbb73c19ed': 'flowpro-ingredient-1',
  'https://www.figma.com/api/mcp/asset/d5256eb5-1253-4463-8c9e-004de73a079a': 'flowpro-ingredient-2',
  'https://www.figma.com/api/mcp/asset/2417a896-fd27-482a-bc3b-02b8370923a9': 'flowpro-ingredient-3',
  'https://www.figma.com/api/mcp/asset/25fb5735-5d54-43a4-82c4-c5c08bd403c2': 'flowpro-benefit-image',
  
  // products/allerpro/page.tsx
  'https://www.figma.com/api/mcp/asset/4d0ae9b9-aef2-4fad-ae52-11caacea69e4': 'allerpro-slide-1',
  'https://www.figma.com/api/mcp/asset/fa62f73a-b1ec-4a61-b461-ac59f9488179': 'allerpro-slide-2',
  'https://www.figma.com/api/mcp/asset/d1cf3d0a-565a-48c9-abba-98562d80c552': 'allerpro-slide-3',
  'https://www.figma.com/api/mcp/asset/c7534154-d17a-4996-afc7-5e1dee2149c7': 'allerpro-slide-4',
  'https://www.figma.com/api/mcp/asset/aa3f1561-10df-4abd-85be-02c99e94c9a0': 'allerpro-ingredient-1',
  'https://www.figma.com/api/mcp/asset/cc1a6016-34cb-4141-ae30-a0b3c133a30e': 'allerpro-ingredient-2',
  'https://www.figma.com/api/mcp/asset/95fd8218-982a-46b4-a9b6-f6db97a2afc2': 'allerpro-ingredient-3',
};

const outputDir = path.join(__dirname, '../public/images');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(url, filename) {
  try {
    console.log(`Downloading ${filename}...`);
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const buffer = Buffer.from(await response.arrayBuffer());
    const pngPath = path.join(outputDir, `${filename}.png`);
    const webpPath = path.join(outputDir, `${filename}.webp`);
    const jpgPath = path.join(outputDir, `${filename}.jpg`);
    
    // Save as PNG
    await sharp(buffer)
      .png()
      .toFile(pngPath);
    console.log(`  Saved ${pngPath}`);
    
    // Convert to WebP
    await sharp(buffer)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`  Saved ${webpPath}`);
    
    // Convert to JPG
    await sharp(buffer)
      .jpeg({ quality: 80 })
      .toFile(jpgPath);
    console.log(`  Saved ${jpgPath}`);
    
    return true;
  } catch (error) {
    console.error(`  Error downloading ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('Starting Figma image downloads...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [url, filename] of Object.entries(imagesToDownload)) {
    const success = await downloadImage(url, filename);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    console.log(''); // Empty line for readability
  }
  
  console.log(`\nDownload complete!`);
  console.log(`✓ ${successCount} images downloaded and converted`);
  if (failCount > 0) {
    console.log(`✗ ${failCount} images failed`);
  }
}

main();

