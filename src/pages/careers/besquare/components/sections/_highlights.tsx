import React from 'react'
import HighlightVideo from '../../static/videos/besquare_highlights.mp4'
import { VideoPlayer } from 'components/elements'
import { Flex } from 'components/containers'

const Highlights = () => {
    return (
        <Flex mb="80px">
            <VideoPlayer src={HighlightVideo} max_width="900px" mobile_max_width="90%" controls />
        </Flex>
    )
}

export default Highlights
