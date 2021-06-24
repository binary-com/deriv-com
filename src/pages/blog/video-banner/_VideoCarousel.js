import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoPlayer from './_video-player'
import { CustomCarousel } from './carousel/_custom-carousel'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const MainWrapper = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
`
const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
    width: 180px;
`
const CarouselWrapper = styled(Flex)`
    height: auto;
`
const SmallDetailsWrapper = styled(Flex)`
    height: 24px;
    font-weight: normal;
    justify-content: flex-start;
    align-items: center;
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
    justify-content: flex-start;
    @media ${device.tabletL} {
        min-width: 293px;
        height: 104px;
    }
`
const ImgWrapper = styled(Flex)`
    width: 139px;
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
    align-items: center;
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
const PlayerIcon = styled.img`
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
const StyledMoreBtnMobile = styled(Header)`
    font-size: 14px;
    line-height: 20px;
    color: var(--color-white);
    text-align: center;
`

const VideoCarousel = ({ carousel_items }) => {
    const [show, setShow] = useState(false)
    const [is_mobile] = useBrowserResize()
    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event) => {
        if (event.defaultPrevented) return
        setShow(true)
    }

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
            <MainWrapper>
                <CarouselWrapper>
                    <CustomCarousel {...settings} custom_blog_video_nav>
                        {carousel_items.map((item, index) => {
                            return (
                                <ItemsMainWrapper key={index} onClick={handleOpenVideo}>
                                    <ImgWrapper>
                                        <ImgDiv src={item.img_url} alt={item.image} />
                                        <PlayerIconWrapper absolute>
                                            <PlayerIcon src={PlayIcon} />
                                        </PlayerIconWrapper>
                                    </ImgWrapper>
                                    <DetailsWrapper>
                                        <Header as="p" type="paragraph-1" color="white" mb="4px">
                                            {item.title}
                                        </Header>
                                        <SmallDetailsWrapper>
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                weight="normal"
                                                color="grey-17"
                                                width="auto"
                                            >
                                                {item.date}
                                            </Header>
                                            <StyledDot />
                                            <Header
                                                as="p"
                                                type="paragraph-2"
                                                weight="normal"
                                                color="grey-17"
                                                width="auto"
                                            >
                                                {item.duration}
                                            </Header>
                                        </SmallDetailsWrapper>
                                    </DetailsWrapper>
                                </ItemsMainWrapper>
                            )
                        })}
                    </CustomCarousel>
                </CarouselWrapper>
                {is_mobile && (
                    <SeeMoreBtnMobile to="/">
                        <StyledMoreBtnMobile>See all videos</StyledMoreBtnMobile>
                    </SeeMoreBtnMobile>
                )}
            </MainWrapper>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={handleCloseVideo} />}
        </>
    )
}

VideoCarousel.propTypes = {
    carousel_items: PropTypes.array,
}
export default VideoCarousel
