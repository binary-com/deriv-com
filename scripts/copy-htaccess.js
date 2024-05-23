const fs = require('fs');
const path = require('path');

const region = process.argv[2];

function generatePublicPath(region) {
  return path.join(__dirname, '..', 'sites', region, 'public');
}

// Path to your custom .htaccess file and .well-known directory in the project root
const htaccessPath = path.join(__dirname, '..', '.htaccess');
const wellKnownSourcePath = path.join(__dirname, '..', '.well-known');

// Path to the Gatsby public directory
const publicPath = generatePublicPath(region);
const wellKnownDestPath = path.join(publicPath, '.well-known');

// Ensure the public directory exists
fs.mkdirSync(publicPath, { recursive: true });

// Function to copy directory recursively
const copyDirectory = (src, dest) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  fs.mkdirSync(dest, { recursive: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

// Copy .htaccess file
fs.copyFile(htaccessPath, path.join(publicPath, '.htaccess'), (err) => {
  if (err) {
    console.error('Error copying .htaccess file:', err);
    return;
  }
  console.log('.htaccess file copied successfully.');
});

// Copy .well-known directory
if (fs.existsSync(wellKnownSourcePath)) {
  copyDirectory(wellKnownSourcePath, wellKnownDestPath);
  console.log('.well-known directory copied successfully.');
} else {
  console.error('.well-known directory does not exist.');
}
