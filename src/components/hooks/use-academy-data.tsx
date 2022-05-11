import type { ImageDataLike } from 'gatsby-plugin-image'
import { useAcademyBlog } from 'components/hooks/use-academy-blog'
import { useAcademyVideos } from 'components/hooks/use-academy-videos'

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

export const useAcademyData = (): [AcademyDataType] => {
    const [academy_blog] = useAcademyBlog()
    const [academy_videos] = useAcademyVideos()

    return [{ ...academy_blog, ...academy_videos }]
}
