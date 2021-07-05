import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VideoCarousel from './_VideoCarousel'
import VideoPlayer from './_video-player'
import { Flex, Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const ParentWrapper = styled(Flex)`
    /* prettier-ignore */
    background: ${(props) =>
        props.bg_image
            ? `linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(${props.bg_image}) no-repeat top left`
            : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
    overflow: hidden;
    margin: 80px 0;
    position: relative;
    background-size: cover;
    height: auto;
    padding: 160px 0 80px;
    max-width: 1600px;

    @media ${device.tabletL} {
        /* prettier-ignore */
        background: ${(props) =>
            props.bg_image
                ? `linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%),url(${props.bg_image}) no-repeat top right 46.5%`
                : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
        background-size: cover;
        padding: 73px 0 40px;
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

const Dbanner = ({ video_details, video_list }) => {
    const [show, setShow] = useState(false)
    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = () => setShow(true)

    useEffect(() => {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show])

    return (
        <>
            <ParentWrapper direction="column" bg_image={video_details[0].bg_img_url}>
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
                            <TagWrapper ai="center" width="auto" p="1px 8px">
                                <Header type="paragraph-2" color="orange-2">
                                    {video_details[0].type}
                                </Header>
                            </TagWrapper>
                        </TagParentWrapper>

                        <Header as="h2" type="heading-2" color="white" mb="8px">
                            {video_details[0].title}
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
                            {video_details[0].description}
                        </Header>
                        <Flex ai="center" jc="flex-start" height="24px">
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {video_details[0].published_date}
                            </Header>
                            <StyledDot />
                            <Header
                                as="p"
                                weight="normal"
                                type="paragraph-1"
                                color="grey-17"
                                width="auto"
                            >
                                {video_details[0].duration}
                            </Header>
                        </Flex>
                    </Flex>
                    <VideoCarousel carousel_items={video_list} />
                </Container>
            </ParentWrapper>
            {show && (
                <VideoPlayer
                    video_src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    closeVideo={handleCloseVideo}
                />
            )}
        </>
    )
}

Dbanner.propTypes = {
    video_details: PropTypes.array,
    video_list: PropTypes.array,
}

export default Dbanner
