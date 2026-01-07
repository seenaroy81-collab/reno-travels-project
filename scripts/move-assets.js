import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.join(__dirname, '../public/sequence.jpg');
const DEST_DIR = path.join(__dirname, '../public/frames');

if (!fs.existsSync(DEST_DIR)) {
    fs.mkdirSync(DEST_DIR, { recursive: true });
}

// Read directory
const files = fs.readdirSync(SOURCE_DIR)
    .filter(file => file.startsWith('ezgif-frame-') && file.endsWith('.jpg'))
    .sort(); // Ensure 001 comes before 002

console.log(`Found ${files.length} frames in ${SOURCE_DIR}`);

// Clear existing placeholders if needed? 
// Maybe let's overwrite or clean. Let's clean .webp files first to avoid confusion if we are switching extensions.
// Actually, let's just write the new files.

files.forEach((file, index) => {
    // ezgif-frame-001.jpg -> frame_000.jpg
    // Note: ezgif is 1-indexed (usually), our component expects 0-indexed.
    const newName = `frame_${index.toString().padStart(3, '0')}.jpg`;

    const srcPath = path.join(SOURCE_DIR, file);
    const destPath = path.join(DEST_DIR, newName);

    fs.copyFileSync(srcPath, destPath);
    // console.log(`Moved ${file} -> ${newName}`);
});

console.log(`Successfully moved and renamed ${files.length} frames to ${DEST_DIR}`);
