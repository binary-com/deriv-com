import React from 'react'
import PropTypes from 'prop-types'
import Dbanner from './components/video-banner/_DBanner'
import { Flex } from 'components/containers'

const DVideoBanner = ({ featured_video_list_data, non_featured_video_list_data }) => {
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

DVideoBanner.propTypes = {
    featured_video_list_data: PropTypes.array,
    non_featured_video_list_data: PropTypes.array,
}

export default DVideoBanner
