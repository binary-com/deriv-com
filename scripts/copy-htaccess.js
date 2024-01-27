const fs = require('fs');
const path = require('path');

// Path to your custom .htaccess file in the project root
const htaccessPath = path.join(__dirname, '..', '.htaccess');

// Path to the Gatsby public directory
const publicPath = path.join(__dirname, '..', 'public', '.htaccess');

fs.copyFile(htaccessPath, publicPath, (err) => {
  if (err) {
    console.error('Error copying .htaccess file:', err);
    return;
  }
  console.log('.htaccess file copied successfully.');
});
