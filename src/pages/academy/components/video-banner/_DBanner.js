import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VideoPlayer from '../_video-player'
import VideoCarousel from './_VideoCarousel'
import { convertDate, getVideoObject } from 'common/utility'
import { Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const ParentWrapper = styled(Flex)`
    /* prettier-ignore */
    background: ${(props) => {
        const bg_image = `linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(${props.bg_image}) no-repeat top left`
        const default_bg =
            'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'
        return props.bg_image ? bg_image : default_bg
    }};
    overflow: hidden;
    margin: 80px 0;
    position: relative;
    background-size: cover;
    height: auto;
    padding: 160px 0 40px;

    @media ${device.tabletL} {
        /* prettier-ignore */
        background: ${(props) => {
            const bg_image = `linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%),url(${props.bg_image}) no-repeat top right 46.5%`
            const default_bg =
                'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'

            return props.bg_image ? bg_image : default_bg
        }};
        background-size: cover;
        padding: 73px 0 40px;
        margin: 40px 0;
    }
`
const PlayerIconWrapper = styled(Flex)`
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    cursor: pointer;
    position: relative;
`
const PlayerIcon = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
`
const TagParentWrapper = styled(Flex)`
    @media ${device.tabletL} {
        margin-bottom: 8px;
    }
`
const TagWrapper = styled(Flex)`
    background: var(--color-orange-3);
    border-radius: 8px;
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px 4px;
`
const AllVideosButton = styled(LinkButton)`
    margin: 50px auto auto;

    &:hover {
        cursor: pointer;
    }
    @media ${device.laptopM} {
        width: 100%;
        margin: 30px auto 0;
    }
`

const Dbanner = ({ featured_video_list, non_featured_video_list }) => {
    const [show, setShow] = useState(false)
    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = () => setShow(true)

    let featured_video
    if (featured_video_list && featured_video_list.length) {
        featured_video = featured_video_list[0]
    } else {
        featured_video = non_featured_video_list[0]
        non_featured_video_list.shift()
    }

    const {
        published_date,
        thumbnail_img,
        video_title,
        video_description,
        video_url,
        video_duration,
        types,
    } = getVideoObject(featured_video)

    useEffect(() => {
        document.body.style.overflow = show ? 'hidden' : 'unset'
    }, [show])

    return (
        <>
            <ParentWrapper direction="column" bg_image={thumbnail_img}>
                <Container direction="column" jc="flex-start">
                    <Flex direction="column" jc="flex-start" height="auto">
                        <PlayerIconWrapper
                            ai="center"
                            width="64px"
                            height="64px"
                            mb="24px"
                            onClick={handleOpenVideo}
                        >
                            <PlayerIcon width="20px" height="20px" src={PlayIcon} />
                        </PlayerIconWrapper>
                        <TagParentWrapper height="22px" jc="flex-start">
                            {types.slice(0, 2).map((t) => (
                                <TagWrapper key={t} ai="center" width="auto" p="1px 8px" mr="8px">
                                    <Header type="paragraph-2" color="orange-2">
                                        {t}
                                    </Header>
                                </TagWrapper>
                            ))}
                            {types.length > 2 && (
                                <TagWrapper ai="center" width="auto" p="1px 8px">
                                    <Header type="paragraph-2" color="orange-2">
                                        +2
                                    </Header>
                                </TagWrapper>
                            )}
                        </TagParentWrapper>

                        <Header as="h2" type="heading-2" color="white" mb="8px">
                            {video_title}
                        </Header>
                        <Header
                            as="p"
                            weight="normal"
                            type="subtitle-2"
                            mb="8px"
                            color="white"
                            max_width="894px"
                            mobile_max_width="100%"
                        >
                            {video_description}
                        </Header>
                        <Flex ai="center" jc="flex-start" height="24px">
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {convertDate(published_date)}
                            </Header>
                            <StyledDot />
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {video_duration}
                            </Header>
                        </Flex>
                    </Flex>
                    <VideoCarousel carousel_items={non_featured_video_list} />
                    <AllVideosButton tertiary_light="true" to="/academy/videos/">
                        See all videos
                    </AllVideosButton>
                </Container>
            </ParentWrapper>
            {show && <VideoPlayer video_src={video_url} closeVideo={handleCloseVideo} />}
        </>
    )
}

Dbanner.propTypes = {
    featured_video_list: PropTypes.array,
    non_featured_video_list: PropTypes.array,
}

export default Dbanner
