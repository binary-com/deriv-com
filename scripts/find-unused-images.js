const fs = require('fs');
const path = require('path');
const glob = require('glob');

const IMAGE_EXTENSIONS = ['.png', '.jpeg', '.jpg', '.svg'];
const IMAGE_DIRECTORY = path.join(__dirname, '../src/images');
const SRC_DIRECTORY = path.join(__dirname, '../src');

function findUsedImages() {
    const used_images = new Set();

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
                    used_images.add(match.split("/").slice(-1).join("/").replace(/['"]+/g, ''))
                });
            }
        });
    });

    return used_images;
}

function findUnusedImages(used_images) {
    const all_images = glob.sync(`${IMAGE_DIRECTORY}/**/*.{png,jpeg,jpg,svg}`);
    const unused_images = all_images.filter(image => 
        !used_images.has(image.split("/").slice(-1).join("/").replace(/['"]+/g, ''))
    );
    return unused_images;
}

function main() {
    let total_size = 0
    const used_images = findUsedImages();
    const unused_images = findUnusedImages(used_images);

    // console.log('Used images:');
    // usedImages.forEach(image => console.log(image));

    if(unused_images.length > 0) {
        console.log('\nUnused images ([size] - path) :');
        unused_images.forEach(image => {
            let size_in_kb = fs.statSync(image).size / (1024);
            console.log(`[${size_in_kb.toFixed(2)}kb] - ${image}`)
            total_size += size_in_kb
        });
        console.log(`\nTotal Unused Image Memory: ${total_size.toFixed(2)}kb\n`)
        
        process.exit(1);
    }
}

main();