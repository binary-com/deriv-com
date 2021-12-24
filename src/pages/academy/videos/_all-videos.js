import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useQueryParam, StringParam } from 'use-query-params'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import VideoPlayer from '../components/_video-player'
import VideoCard from './_video-card'
import { Flex } from 'components/containers'
import { slugify } from 'common/utility'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

const AllVideos = ({ video_data }) => {
    const [show, setShow] = useState(false)
    const [play_video_id, setPlayVideoId] = useState('')
    const [title_params, setTitleParams] = useQueryParam('t', StringParam)

    // opens the video player based on the valid video title passed to url params
    useEffect(() => {
        const video_track = video_data.find((item) => slugify(item.video_title) == title_params)
            ?.video_file.id
        if (video_track) openVideo(video_track, title_params)
    }, [])

    useEffect(() => {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show])

    const play_video_src = `https://cms.deriv.cloud/assets/${play_video_id}`

    const openVideo = (track_id, video_title) => {
        setPlayVideoId(track_id)
        setTitleParams(video_title)
        setShow(true)
    }

    const closeVideo = () => {
        setShow(false)
        setPlayVideoId('')
        setTitleParams()
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
                            openVideo={() =>
                                openVideo(item.video_file.id, slugify(item.video_title))
                            }
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
