import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import rimraf from 'rimraf'
import sizeOf from 'image-size'
import imageType from 'image-type'
import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'

const temp_path = './scripts/optimize-image/temp'
const max_bytes = 300000
const images = {}
const max_compression_attempt = 10

function getFilesInFolder(folder_path) {
    try {
        const files = fs.readdirSync(folder_path)
        return files.filter((file) => {
            const file_path = path.join(folder_path, file)
            return fs.statSync(file_path).isFile()
        })
    } catch (error) {
        console.error('Error reading folder:', error)
        return []
    }
}

async function copyFile(source_path, destination_path) {
    try {
        const file_name = path.basename(source_path)
        const new_path = path.join(destination_path, file_name)

        fs.copyFileSync(source_path, new_path)
    } catch (error) {
        console.error('Error copying file:', error)
    }
}

async function deleteFile(file_path) {
    fs.unlink(file_path, () => {})
}

function deleteFolder(folder_path) {
    rimraf(folder_path, () => {})
}

function getImageMetadata(img_path) {
    try {
        const dimensions = sizeOf(img_path)
        const file_stats = fs.statSync(img_path)

        const resolution = {
            width: dimensions.width,
            height: dimensions.height,
        }

        const file_size_in_bytes = file_stats.size

        return {
            resolution,
            file_size_in_bytes,
        }
    } catch (error) {
        console.error('Error getting image metadata:', error)
        return null
    }
}

async function createDirectoryIfNotExists(directory_path) {
    if (!fs.existsSync(directory_path)) {
        try {
            fs.mkdir(directory_path, () => {})
        } catch (error) {
            console.error('Error creating directory:', error)
        }
    }
}

function isImage(file_name) {
    const image_extensions = [
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.bmp',
        '.svg',
        '.webp',
        '.ico',
        '.avif',
    ]
    const ext = path.extname(file_name).toLowerCase()
    return image_extensions.includes(ext)
}

function formatBytes(bytes) {
    if (bytes < 1024) {
        return bytes + ' B'
    } else if (bytes < 1024 * 1024) {
        return (bytes / 1024).toFixed(2) + ' KB'
    } else if (bytes < 1024 * 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
    } else {
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
    }
}

function segregate_file_path(file_path) {
    const file_name = path.basename(file_path)
    const directory_path = path.dirname(file_path)

    return {
        file_name,
        directory_path,
    }
}

async function optimizeImage({ input_path, output_path, key, quality = 80 }) {
    try {
        if (isImage(input_path)) {
            const png_quality_max = quality * 0.01
            const png_quality_min = png_quality_max - 0.2

            await imagemin([input_path], {
                destination: output_path,
                plugins: [
                    imageminMozjpeg({ quality }), // Set desired JPEG quality (0-100)
                    imageminPngquant({ quality: [png_quality_min, png_quality_max] }), // Set desired PNG quality (0-1)
                ],
            })

            const optimized_img = getImageMetadata(input_path)

            const original_img = images[key]

            const new_size = optimized_img.file_size_in_bytes

            const { compression_attempt, last_compressed_size } = original_img

            const original_img_size = formatBytes(original_img.file_size_in_bytes)

            console.log(
                `\x1b[33m${key}:\x1b[0m ${original_img_size} ===> ${formatBytes(new_size)} ${
                    compression_attempt ? '| attempt(' + compression_attempt + ')' : ''
                }`,
            )

            // Record last compressed size to adjust quality
            images[key].last_compressed_size = new_size

            if (new_size > max_bytes && max_compression_attempt > compression_attempt) {
                images[key].compression_attempt += 1

                const output_img_path = `${output_path}/${key}`

                const temp_img_path = `${temp_path}/${key}`

                await createDirectoryIfNotExists(temp_path)

                await copyFile(output_img_path, temp_path)

                let new_quality = quality

                if (last_compressed_size && new_size === last_compressed_size) {
                    // Reduce quality to further compress
                    new_quality -= 1
                   
                }

                await optimizeImage({
                    input_path: temp_img_path,
                    output_path,
                    key,
                    quality: new_quality,
                })
            }
        } else {
            console.log(`Skipping: ${input_path}`)
        }
    } catch (error) {
        console.error('Error optimizing image:', error)
    }
}

async function optimizeImages(files) {
    await Promise.all(
        files.map(async (file) => {
            const { directory_path, file_name } = segregate_file_path(file)

            const meta_data = getImageMetadata(file)

            images[file_name] = { ...meta_data, compression_attempt: 0 }

            await optimizeImage({ input_path: file, output_path: directory_path, key: file_name })
        }),
    )

    deleteFolder(temp_path)

}

console.log(
    `\x1b[33m[Image Compressor]\x1b[32m Checking staged images and compressing down to maximum allowed size \n \x1b[0m`,
)

exec('git diff --name-only --cached', (err, stdout) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
        const raw_files = stdout.trim()

        const files = raw_files.split('\n')

        const image_files = files.filter((file) => isImage(file) && !file.includes('-nc'))

        optimizeImages(image_files)
    }
})
