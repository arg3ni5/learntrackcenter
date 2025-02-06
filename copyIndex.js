import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcPath = path.join(__dirname, 'dist', 'index.html');
const destPath = path.join(__dirname, 'dist', '404.html');

if (os.platform() === 'win32') {
  // Para Windows
  fs.copyFile(srcPath, destPath, (err) => {
    if (err) throw err;
    console.log('index.html copiado a 404.html en Windows');
  });
} else {
  // Para Linux y macOS
  fs.copyFile(srcPath, destPath, (err) => {
    if (err) throw err;
    console.log('index.html copiado a 404.html en Linux/macOS');
  });
}
