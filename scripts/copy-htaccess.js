const fs = require('fs');
const path = require('path');

const region = process.argv[2]

function generatePublicPath(region){
  return path.join(__dirname, '..', "sites", region, 'public', '.htaccess');
}

// Path to your custom .htaccess file in the project root
const htaccessPath = path.join(__dirname, '..', '.htaccess');

// Path to the Gatsby public directory
const publicPath = generatePublicPath(region);

fs.copyFile(htaccessPath, publicPath, (err) => {
  if (err) {
    console.error('Error copying .htaccess file:', err);
    return;
  }
  console.log('.htaccess file copied successfully.');
});
