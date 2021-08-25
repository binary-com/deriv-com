const getAssetUrl = (id) => `https://cms.deriv.cloud/assets/${id}`

export const getVideoObject = (video_data) => {
    // eslint-disable-next-line
    console.log(video_data)
    const { published_date, video_file, video_thumbnail, video_title, tags } = video_data

    const { id: video_id, duration } = video_file
    const { id: thumbnail_id, description } = video_thumbnail
    const types = tags.map((t) => t.tags_id.tag_name)

    return {
        published_date,
        thumbnail_img: getAssetUrl(thumbnail_id),
        thumbnail_img_alt: description,
        video_title,
        video_url: getAssetUrl(video_id),
        video_duration: duration,
        types,
    }
}
