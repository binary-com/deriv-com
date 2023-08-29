const fs = require('fs');
const path = require('path');
const glob = require('glob');

const IMAGE_EXTENSIONS = ['.png', '.jpeg', '.jpg', '.svg'];
const IMAGE_DIRECTORY = path.join(__dirname, '../src/images');
const SRC_DIRECTORY = path.join(__dirname, '../src');

function findUsedImages() {
    const usedImages = new Set();

    // Search for image references in your source code
    const files = glob.sync(`${SRC_DIRECTORY}/**/*.{js,jsx,ts,tsx}`,{
        nodir: true,
    });

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8')
        IMAGE_EXTENSIONS.forEach(ext => {
        const pattern = new RegExp(`[\'\"]([^\'\"]+${ext})[\'\"]`, 'g');
        const matches = content.match(pattern);
        if (matches) {
            matches.forEach(match => {
                usedImages.add(match.split("/").slice(-1).join("/").replace(/['"]+/g, ''))
            }
            );
        }
        });
    });

    return usedImages;
}

function findUnusedImages(usedImages) {
    const allImages = glob.sync(`${IMAGE_DIRECTORY}/**/*.{png,jpeg,jpg,svg}`);
    const unusedImages = allImages.filter(image => 
        !usedImages.has(image.split("/").slice(-1).join("/").replace(/['"]+/g, ''))
    );
    return unusedImages;
}

function main() {  
    let total_size = 0
    const usedImages = findUsedImages();
    const unusedImages = findUnusedImages(usedImages);

    // console.log('Used images:');
    // usedImages.forEach(image => console.log(image));

    console.log('\nUnused images:');
    unusedImages.forEach(image => {
        let size = fs.statSync(image).size / (1024*1024);
        console.log(image, ', size(MB):', size)
        total_size += size
    });
    console.log('\nTotal Unused Image Memory(MB)', total_size)
}

main();