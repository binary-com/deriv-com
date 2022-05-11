import { useStaticQuery, graphql } from 'gatsby'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type AcademyDataType = {
    blog: BlogType[]
    videos: VideosType[]
}

export type BlogType = {
    blog_description: string
    blog_title: string
    featured: boolean
    id: string
    main_image: MainImageType
    published_date: string
    slug: string
    tags?: TagsType[]
}

export type MainImageType = {
    description?: string
    id: string
    imageFile: ImageDataLike
}

export type TagsType = {
    id: string
    tags_id: {
        tag_name: string
    }
}

export type VideosType = {
    featured: boolean
    published_date: string
    tags: TagsType[]
    video_description: string
    video_duration: string
    video_file: VideoFileType
    video_thumbnail: VideoThumbnailType
    video_title: string
}

export type VideoFileType = {
    id: string
}

export type VideoThumbnailType = {
    id: string
    imageFile: ImageDataLike
    title?: string
}

// This hook is used to fetch data from Directus during build time
export const useAcademyData = (): [AcademyDataType] => {
    let academy_data = useStaticQuery(query)
    academy_data = academy_data?.directus

    return [academy_data]
}

const query = graphql`
    query StoreQuery {
        directus {
            blog(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                id
                main_image {
                    id
                    description
                    imageFile {
                        childImageSharp {
                            gatsbyImageData(width: 600, aspectRatio: 1.82)
                        }
                    }
                }
                slug
                published_date
                featured
                tags {
                    id
                    tags_id {
                        tag_name
                    }
                }
                blog_title
                blog_description
            }
            videos(filter: { status: { _eq: "published" } }, sort: "-published_date") {
                video_title
                published_date
                video_description
                video_duration
                featured
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
                video_file {
                    id
                }
                tags {
                    tags_id {
                        tag_name
                    }
                }
            }
        }
    }
`
