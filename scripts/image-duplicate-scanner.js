const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Function to calculate hash of a file
const calculateHash = (file_path) => {
    const hash = crypto.createHash('md5');
    const data = fs.readFileSync(file_path);
    hash.update(data);
    return hash.digest('hex');
}

// Function to find duplicate images
const findDuplicateImages = (root_folder) => {
    const image_hashes = {};
    const duplicates = {};

    const processFolder = (folder_path) => {
        const files = fs.readdirSync(folder_path);

        files.forEach(file => {
            const file_path = path.join(folder_path, file);
            const stat = fs.statSync(file_path);

            if (stat.isDirectory()) {
                processFolder(file_path);
            } else if (stat.isFile()) {
                if (/\.(jpg|jpeg|png|gif|svg)$/i.test(file)) {
                    const hash = calculateHash(file_path);

                    if (image_hashes[hash]) {
                        if (!duplicates[hash]) {
                            duplicates[hash] = [image_hashes[hash]];
                        }
                        duplicates[hash].push(file_path);
                    } else {
                        image_hashes[hash] = file_path;
                    }
                }
            }
        });
    }

    processFolder(root_folder);

    return duplicates;
}

const root_folder = './src/images';
const duplicate_images = findDuplicateImages(root_folder);

for (const hash in duplicate_images) {
    const files = duplicate_images[hash];
    console.log(` [\x1b[31m${files.length}\x1b[0m]images with hash \x1b[34m${hash}\x1b[0m:`);
    files.forEach(file => {
        console.log(`  - ${file}`);
    });
    console.log('\x1b[33m---------------------------------------------------------------------------------------------------------- \x1b[0m')
}

if(Object.keys(duplicate_images).length){
  throw new Error('Remove image duplicates!');
}