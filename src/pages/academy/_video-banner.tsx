import React from 'react'
import Dbanner from './components/video-banner/_DBanner'
import { FeaturedVideoListDataType, NonFeaturedVideoListDataType } from './index'
import { Flex } from 'components/containers'

type DVideoBannerProps = {
    featured_video_list_data: FeaturedVideoListDataType
    non_featured_video_list_data: NonFeaturedVideoListDataType
}

const DVideoBanner = ({
    featured_video_list_data,
    non_featured_video_list_data,
}: DVideoBannerProps) => {
    return (
        <Flex>
            {non_featured_video_list_data && non_featured_video_list_data.length && (
                <Dbanner
                    featured_video_list={featured_video_list_data}
                    non_featured_video_list={non_featured_video_list_data}
                />
            )}
        </Flex>
    )
}

export default DVideoBanner
