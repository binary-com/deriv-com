import React, { useEffect } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { VideoGrid } from '../common/_styles'
import VideoCard from '../videos/_video-card'
import VideoPlayer from '../components/_video-player'
import { TagsType } from './_article-card'
import { slugify } from 'common/utility'

type VideoParentWrapperProps = {
    closeVideo: () => void
    currentVideoItems: CurrentVideoItemsType[]
    openVideo: (id: string, title: string) => void
    show: boolean
    video_src: string
}

type CurrentVideoItemsType = {
    featured: boolean
    published_date: string
    tags: TagsType[]
    video_description: string
    video_duration: string
    video_file: VideoFileType
    video_thumbnail: VideoThumbnailType
    video_title: string
}

type VideoFileType = {
    id: string
}

type VideoThumbnailType = {
    id: string
    imageFile: ImageDataLike
    title?: string
}

const VideoParentWrapper = ({
    closeVideo,
    currentVideoItems,
    openVideo,
    show,
    video_src,
}: VideoParentWrapperProps) => {
    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'unset'
    }, [show])

    return (
        <>
            <VideoGrid m="24px 0 32px 0">
                {currentVideoItems.map((item) => {
                    return (
                        <VideoCard
                            key={item.video_file.id}
                            item={item}
                            openVideo={() =>
                                openVideo(item.video_file.id, slugify(item.video_title))
                            }
                        />
                    )
                })}
            </VideoGrid>
            {show && <VideoPlayer video_src={video_src} closeVideo={closeVideo} />}
        </>
    )
}

export default VideoParentWrapper
