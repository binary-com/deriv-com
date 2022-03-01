import React from 'react'
import Dbanner from './components/video-banner/_DBanner'
import { FeaturedVideoListDataType, NonFeaturedVideoListDataType } from './index'
import { Flex } from 'components/containers'

export type VideoBannerProps = {
    featured_video_list_data: FeaturedVideoListDataType
    non_featured_video_list_data: NonFeaturedVideoListDataType
}

const VideoBanner = ({
    featured_video_list_data,
    non_featured_video_list_data,
}: VideoBannerProps) => {
    return (
        <Flex>
            {non_featured_video_list_data && non_featured_video_list_data.length && (
                <Dbanner
                    featured_video_list_data={featured_video_list_data}
                    non_featured_video_list_data={non_featured_video_list_data}
                />
            )}
        </Flex>
    )
}

export default VideoBanner
