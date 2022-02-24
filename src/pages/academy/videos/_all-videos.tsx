import React, { useEffect, useState } from 'react'
import { StyledImg, Container, VideoGrid } from '../common/_styles'
import VideoPlayer from '../components/_video-player'
import { DirectusData_Videos } from '../../../../types/graphql.types'
import VideoCard from './_video-card'
import { VideoDataType } from './index'
import { Flex } from 'components/containers'
import { slugify, removeSpecialCharacterUrl, queryParams } from 'common/utility'
import { Text, LocalizedLinkText } from 'components/elements'
import RightArrow from 'images/svg/tools/black-right-arrow.svg'

type AllVideosProps = {
    video_data: VideoDataType
}

const AllVideos = ({ video_data }: AllVideosProps) => {
    const [show, setShow] = useState(false)
    const [play_video_id, setPlayVideoId] = useState('')
    const [title_params, setTitleParams] = useState('')
    const [is_loaded, setIsLoaded] = useState(false)

    const hasVideo = (item: DirectusData_Videos) => {
        const new_title_params = removeSpecialCharacterUrl(title_params)
        const video_slugify = removeSpecialCharacterUrl(item.video_title)

        return video_slugify === new_title_params
    }

    useEffect(() => {
        const title = queryParams.get('t')
        if (title) {
            setTitleParams(title)
        }
        setIsLoaded(true)
    }, [])
    // opens the video player based on the valid video title passed to url params
    useEffect(() => {
        if (is_loaded) {
            const video_track = video_data.find((item: DirectusData_Videos) => hasVideo(item))
                ?.video_file.id
            const video_title_param = removeSpecialCharacterUrl(title_params)

            if (video_track) {
                openVideo(video_track, video_title_param)

                queryParams.set({
                    t: title_params,
                })
            } else {
                closeVideo()
            }
        }
    }, [title_params])

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
        setTitleParams('')
        queryParams.delete('t')
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
