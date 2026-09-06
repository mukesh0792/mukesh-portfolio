const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/projectors');
const outputDir = path.join(inputDir, 'isolated');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir)
  .filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

async function removeWhiteBackground(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);

    // Convert to RGBA with transparent background
    const buffer = await image
      .removeAlpha()
      .toColorspace('srgb')
      .raw()
      .toBuffer({ resolveWithObject: true });

    const pixels = buffer.data;
    const { width, height, channels } = buffer.info;

    // Create alpha channel based on white pixel detection
    const newPixels = Buffer.alloc(width * height * 4);

    for (let i = 0; i < pixels.length; i += channels) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const pixelIndex = (i / channels) * 4;

      newPixels[pixelIndex] = r;
      newPixels[pixelIndex + 1] = g;
      newPixels[pixelIndex + 2] = b;

      // Detect white/near-white (> 240 on all channels)
      const isWhite = r > 240 && g > 240 && b > 240;
      newPixels[pixelIndex + 3] = isWhite ? 0 : 255;
    }

    // Save as PNG with transparency
    await sharp(newPixels, {
      raw: { width, height, channels: 4 }
    })
    .png()
    .toFile(outputPath);

    console.log(`✓ Created: ${path.basename(outputPath)}`);
  } catch (err) {
    console.error(`✗ Error processing ${inputPath}:`, err.message);
  }
}

async function processAll() {
  console.log('Starting background removal...\n');

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, path.parse(file).name + '_clean.png');
    await removeWhiteBackground(inputPath, outputPath);
  }

  console.log('\n✓ All images processed!');
}

processAll().catch(console.error);
