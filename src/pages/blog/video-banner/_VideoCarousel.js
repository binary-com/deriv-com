import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoPlayer from '../_video-player'
import { CustomCarousel } from './carousel/_custom-carousel'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { convertDate, getVideoObject } from 'common/utility'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const SmallDetailsWrapper = styled(Flex)`
    @media ${device.tabletL} {
        padding-top: 0;
    }
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px 4px;
`
const ItemsMainWrapper = styled(Flex)`
    min-width: 327px;
    cursor: pointer;
    @media ${device.tabletL} {
        min-width: 293px;
        height: 104px;
    }
`
const ImgWrapper = styled(Flex)`
    position: relative;
    @media ${device.tabletL} {
        width: 104px;
    }
`
const ImgDiv = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    object-fit: cover;
`

const PlayerIconWrapper = styled(Flex)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    cursor: pointer;
    position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
    top: ${(props) => (props.absolute ? '50%' : 'unset')};
    left: 50%;
    transform: ${(props) => (props.absolute ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
    @media ${device.tabletL} {
        width: 32px;
        height: 32px;
    }
`
const IconDiv = styled.div`
    position: relative;
    width: 100%;
`
const PlayerIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    width: 16px;
    height: 16px;
    @media ${device.tabletL} {
        width: 10px;
        height: 10px;
    }
`

const SeeMoreBtnMobile = styled(LinkButton)`
    width: 100%;
    max-width: 360px;
    border: 1px solid var(--color-grey-5);
    border-radius: 4px;
    background-color: transparent;
    padding: 6px 0;
    margin: 24px auto 0;
    height: auto;
    align-items: center;
`

const VideoCarousel = ({ carousel_items }) => {
    const [show, setShow] = useState(false)
    const [video_src, setVideoSrc] = useState('')
    const [is_mobile] = useBrowserResize()

    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event, url) => {
        if (event.defaultPrevented) return
        setVideoSrc(url)
        setShow(true)
    }

    useEffect(() => {
        show ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset')
    }, [show])

    const settings = {
        options: {
            align: 'start',
            draggable: 'false',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
            overflow: 'hidden',
        },
        slide_style: {
            width: '340px',
            marginRight: '23px',
            position: 'relative',
        },
        slide_mobile_style: {
            width: '100%',
            position: 'relative',
            paddingRight: '16px',
        },
        view_port: {
            overflow: 'hidden',
        },
        custom_blog_video_nav: 'true',
        custom_blog_video_nav_style: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bottom: 'unset',
            right: 'unset',
            custom_chevron_color: 'custom',
            custom_is_displayed_on_mobile: true,
        },
    }

    return (
        <>
            <Flex direction="column" jc="flex-start">
                <Flex height="auto">
                    <CustomCarousel {...settings} custom_blog_video_nav>
                        {carousel_items.slice(1).map((item, index) => {
                            const {
                                published_date,
                                thumbnail_img,
                                thumbnail_img_alt,
                                video_title,
                                video_url,
                                video_duration,
                            } = getVideoObject(item)

                            return (
                                <ItemsMainWrapper
                                    jc="flex-start"
                                    key={index}
                                    onClick={(e) => handleOpenVideo(e, video_url)}
                                >
                                    <ImgWrapper width="139px">
                                        <ImgDiv src={thumbnail_img} alt={thumbnail_img_alt} />
                                        <PlayerIconWrapper absolute ai="center">
                                            <IconDiv>
                                                <PlayerIcon src={PlayIcon} />
                                            </IconDiv>
                                        </PlayerIconWrapper>
                                    </ImgWrapper>
                                    <Flex direction="column" ml="8px" width="180px">
                                        <Header as="p" type="paragraph-1" color="white" mb="4px">
                                            {video_title}
                                        </Header>
                                        <SmallDetailsWrapper
                                            height="24px"
                                            jc="flex-start"
                                            ai="center"
                                        >
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                weight="normal"
                                                color="grey-17"
                                                width="auto"
                                            >
                                                {convertDate(published_date)}
                                            </Header>
                                            <StyledDot />
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                weight="normal"
                                                color="grey-17"
                                                width="auto"
                                            >
                                                {video_duration}
                                            </Header>
                                        </SmallDetailsWrapper>
                                    </Flex>
                                </ItemsMainWrapper>
                            )
                        })}
                    </CustomCarousel>
                </Flex>
                {is_mobile && (
                    <SeeMoreBtnMobile to="/blog/videos">
                        <Header type="paragraph-2" color="white" align="center">
                            See all videos
                        </Header>
                    </SeeMoreBtnMobile>
                )}
            </Flex>
            {show && <VideoPlayer video_src={video_src} closeVideo={handleCloseVideo} />}
        </>
    )
}

VideoCarousel.propTypes = {
    carousel_items: PropTypes.array,
}
export default VideoCarousel
