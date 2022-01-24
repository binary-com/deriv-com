import React, { useEffect } from 'react'
import { VideoGrid } from '../common/_styles'
import VideoCard from '../videos/_video-card'
import VideoPlayer from '../components/_video-player'
import { slugify } from 'common/utility'
import { VideosType } from 'components/hooks/use-academy-data'

type VideoParentWrapperProps = {
    closeVideo: () => void
    currentVideoItems: VideosType[]
    openVideo: (id: string, title: string) => void
    show: boolean
    video_src: string
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
