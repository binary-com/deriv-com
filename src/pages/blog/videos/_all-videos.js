import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VideoSrc from '../../markets/static/video/globe.mp4'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import VideoCard from './_video-card'
import VideoPlayer from './_video-player'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/black-right-arrow.svg'

const AllVideos = ({ video_data }) => {
    const [show, setShow] = useState(false)

    return (
        <Container m="0 auto" fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/blog" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} alt="Right arrow" height={16} width={16} />
                <Text>All videos</Text>
            </Flex>
            <VideoGrid m="8rem 0">
                {video_data.map((item) => {
                    return <VideoCard key={item.id} item={item} openVideo={() => setShow(true)} />
                })}
            </VideoGrid>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={() => setShow(false)} />}
        </Container>
    )
}

AllVideos.propTypes = {
    video_data: PropTypes.arrayOf(Object),
}

export default AllVideos
