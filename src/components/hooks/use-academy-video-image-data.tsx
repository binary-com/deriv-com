import { useStaticQuery, graphql } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type AcademyVideoImageDataType = {
    videos: VideosType[]
}

export type VideosType = {
    video_thumbnail: VideoThumbnailType
}

export type VideoThumbnailType = {
    id: string
    imageFile: ImageDataLike
    title?: string
}

// This hook is used to fetch data from Directus during build time
export const useAcademyVideoImageData = (): [AcademyVideoImageDataType] => {
    let academy_video_image_data = useStaticQuery(query)
    academy_video_image_data = academy_video_image_data?.directus

    return [academy_video_image_data]
}

const query = graphql`
    query VideoImageQuery {
        directus {
            videos(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                video_thumbnail {
                    id
                    title
                    imageFile {
                        id
                        childImageSharp {
                            gatsbyImageData(width: 382, aspectRatio: 1.82)
                        }
                    }
                }
            }
        }
    }
`
