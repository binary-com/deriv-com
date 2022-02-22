import React, { useEffect, useState } from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import VideoPlayer from '../components/_video-player'
import VideoCard from './_video-card'
import { VideoDataType } from './index'
import { Flex } from 'components/containers'
import { slugify } from 'common/utility'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

type AllVideosProps = {
    video_data: VideoDataType
}

const AllVideos = ({ video_data }: AllVideosProps) => {
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
        document.body.style.overflow = show ? 'hidden' : 'unset'
    }, [show])

    const play_video_src = `https://cms.deriv.cloud/assets/${play_video_id}`

    const openVideo = (track_id: string, video_title: string): void => {
        setPlayVideoId(track_id)
        setTitleParams(video_title)
        setShow(true)
    }

    const closeVideo = (): void => {
        setShow(false)
        setPlayVideoId('')
        setTitleParams(undefined)
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
            <VideoGrid margin="8rem 0">
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

export default AllVideos
