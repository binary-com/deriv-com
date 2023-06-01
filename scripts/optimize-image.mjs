import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import rimraf from 'rimraf'
import sizeOf from 'image-size'
import imageType from 'image-type'
import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminPngquant from 'imagemin-pngquant'

const input_path = './scripts/optimize-image/input'
const output_path = './scripts/optimize-image/output'
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

function isImage(file_path) {
    try {
        const buffer = fs.readFileSync(file_path)
        const type = imageType(buffer)

        return type !== null
    } catch (error) {
        console.error('Error checking file type:', error)
        return false
    }
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

async function optimizeImage(input_path, output_path, file_name, quality = 80) {
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

            const original_img = images[file_name]

            const new_size = optimized_img.file_size_in_bytes

            const { compression_attempt, last_compressed_size } = original_img

            const original_img_size = formatBytes(original_img.file_size_in_bytes)

            console.log(
                `${file_name}: ${original_img_size} ===> ${formatBytes(new_size)} ${
                    compression_attempt ? '| attempt(' + compression_attempt + ')' : ''
                }`,
            )

            // Record last compressed size to adjust quality
            images[file_name].last_compressed_size = new_size

            if (new_size > max_bytes && max_compression_attempt > compression_attempt) {
                images[file_name].compression_attempt += 1

                const output_img_path = `${output_path}/${file_name}`

                const temp_img_path = `${temp_path}/${file_name}`

                await createDirectoryIfNotExists(temp_path)

                await copyFile(output_img_path, temp_path)

                let new_quality = quality

                if (last_compressed_size && new_size === last_compressed_size) {
                    // Reduce quality to further compress
                    new_quality -= 1

                    console.log(`decreasing quality to ${new_quality}`)
                }

                await optimizeImage(temp_img_path, output_path, file_name, new_quality)
            }
        } else {
            console.log(`Skipping: ${input_path}`)
        }
    } catch (error) {
        console.error('Error optimizing image:', error)
    }
}

async function optimizeImages() {
    const files = getFilesInFolder(input_path)

    await Promise.all(
        files.map(async (file) => {
            const input_img_path = `${input_path}/${file}`

            const meta_data = getImageMetadata(input_img_path)

            images[file] = { ...meta_data, compression_attempt: 0 }

            await optimizeImage(input_img_path, output_path, file)
        }),
    )
}

exec('git diff --name-only --cached', (err, stdout) => {
    if (err) {
        console.log(err)
    }

    if (typeof stdout === 'string') {
        const files = stdout.trim()

        console.log(files)
    }
})

// await optimizeImages()

// deleteFolder(temp_path)
