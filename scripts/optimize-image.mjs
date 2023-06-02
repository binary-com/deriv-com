import imagemin from 'imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'

(async() => {
    const files = await imagemin(
        ['source_dir/*.jpg', 'another_dir/*.jpg'],
        {
            destination: 'destination_dir',
            plugins: [imageminMozjpeg({quality: 50})]
        }
    );
    console.log(files);
})();