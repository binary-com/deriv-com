import React from 'react'
import { VideoGrid } from '../common/_styles'
import VideoCard from '../videos/_video-card'
import { RedirectLink } from '../components/recent-featured-posts/_style'
import { VideosType } from 'components/hooks/use-academy-data'

type VideoParentWrapperProps = {
    currentVideoItems: VideosType[]
}

const VideoParentWrapper = ({ currentVideoItems }: VideoParentWrapperProps) => {
    return (
        <>
            <VideoGrid margin="24px 0 32px 0">
                {currentVideoItems.map((item) => {
                    return (
                        <RedirectLink
                            key={item.video_slug}
                            to={`/academy/videos/${item.video_slug}/`}
                        >
                            <VideoCard item={item} />
                        </RedirectLink>
                    )
                })}
            </VideoGrid>
        </>
    )
}

export default VideoParentWrapper
