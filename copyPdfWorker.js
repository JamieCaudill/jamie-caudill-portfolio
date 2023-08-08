const path = require('path');
const fs = require('fs');

// Get the path to the pdf.worker.js file from pdfjs-dist
const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath, 'build', 'pdf.worker.js');

// Get the path to your project's public directory
const publicDir = path.resolve(__dirname, 'public'); // Change 'public' to your actual public directory name if different

// Define the destination path for copying the worker script
const destinationPath = path.join(publicDir, 'pdf.worker.js');

// Copy the pdf.worker.js file to the public directory
fs.copyFileSync(pdfWorkerPath, destinationPath);

console.log('pdf.worker.js has been copied to the public directory.');