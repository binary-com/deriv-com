import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import VideoPlayer from '../components/_video-player'
import VideoCard from './_video-card'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const AllVideos = ({ video_data }) => {
    const [show, setShow] = useState(false)
    const [play_video_id, setPlayVideoId] = useState('')

    useEffect(() => {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show])

    // opens the video player based on the valid video id passed to url params
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const video = params.get('video')
        const video_track = video_data.find((item) => item.video_id == video)?.video_file.id
        if (video_track) openVideo(video_track)
    }, [])

    const play_video_src = `https://cms.deriv.cloud/assets/${play_video_id}`

    const openVideo = (video_id) => {
        setPlayVideoId(video_id)
        setShow(true)
    }

    const closeVideo = () => {
        setShow(false)
        setPlayVideoId('')
    }
    return (
        <Container m="0 auto" fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/academy/" color="grey-5">
                    Home
                </LocalizedLinkText>
                <StyledImg src={RightArrow} alt="Right arrow" height={16} width={16} />
                <Text>All videos</Text>
            </Flex>
            <VideoGrid m="8rem 0">
                {video_data.map((item) => {
                    return (
                        <VideoCard
                            key={item.video_id}
                            item={item}
                            openVideo={() => openVideo(item.video_file.id)}
                        />
                    )
                })}
            </VideoGrid>
            {show && <VideoPlayer video_src={play_video_src} closeVideo={closeVideo} />}
        </Container>
    )
}

AllVideos.propTypes = {
    video_data: PropTypes.arrayOf(Object),
}

export default AllVideos
