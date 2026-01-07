import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FRAMES_DIR = path.join(__dirname, '../public/frames');
const SOURCE_IMAGE = path.join(FRAMES_DIR, 'base_frame.webp');
const FRAME_COUNT = 120;

if (!fs.existsSync(FRAMES_DIR)) {
    fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error(`Source image not found at ${SOURCE_IMAGE}`);
    process.exit(1);
}

console.log(`Generating ${FRAME_COUNT} frames from base image...`);

for (let i = 0; i < FRAME_COUNT; i++) {
    const fileName = `frame_${i.toString().padStart(3, '0')}_delay-0.04s.webp`;
    const destPath = path.join(FRAMES_DIR, fileName);
    fs.copyFileSync(SOURCE_IMAGE, destPath);
}

console.log('Done generating frames!');
