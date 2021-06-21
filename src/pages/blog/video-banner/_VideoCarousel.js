import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoPlayer from './_video-player'
import { CustomCarousel } from './carousel/custom-carousel'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const query = graphql`
    query {
        video_banner_1: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
        video_banner_2: file(relativePath: { eq: "blog/video/img-thumbnail-2.png" }) {
            ...fadeIn
        }
        video_banner_3: file(relativePath: { eq: "blog/video/img-thumbnail-3.png" }) {
            ...fadeIn
        }
        video_banner_4: file(relativePath: { eq: "blog/video/img-thumbnail.png" }) {
            ...fadeIn
        }
        video_banner_5: file(relativePath: { eq: "blog/video/img-thumbnail-1.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
`
const DetailsWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
    width: 180px;
`
const StyledHeader = styled(Header)`
    margin-bottom: 4px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
    }
`
const CarouselWrapper = styled(Flex)`
    height: auto;
`
const SmallDetailsWrapper = styled(Flex)`
    padding-top: 8px;
    height: 24px;
    font-weight: normal;
    justify-content: flex-start;
    align-items: center;
    @media ${device.tabletL} {
        padding-top: 0;
    }
`
const StyledPublishedDate = styled(Header)`
    color: var(--color-grey-17);
    font-weight: normal;
    width: auto;
    @media ${device.tabletL} {
        font-size: 10px;
        line-height: 14px;
    }
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px 4px;
`
const StyledDuration = styled(Header)`
    color: var(--color-grey-17);
    width: auto;
    font-weight: normal;
    @media ${device.tabletL} {
        font-size: 10px;
        line-height: 14px;
    }
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
        object-fit: cover;
    }
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
`
const PlayerIcon = styled.img`
    width: 20px;
    height: 16px;
`

const SeeMoreBtnMobile = styled(LinkButton)`
    width: 100%;
    max-width: 360px;
    border: 1px solid #999999;
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

    const data = useStaticQuery(query)
    const settings = {
        options: {
            align: 'start',
            draggable: 'false',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
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
                                        <QueryImage data={data[item['image']]} />
                                        <PlayerIconWrapper absolute>
                                            <PlayerIcon src={PlayIcon} />
                                        </PlayerIconWrapper>
                                    </ImgWrapper>
                                    <DetailsWrapper>
                                        <StyledHeader type="main-paragraph">
                                            {item.title} - {index}
                                        </StyledHeader>
                                        <SmallDetailsWrapper>
                                            <StyledPublishedDate type="main-paragraph">
                                                {item.date}
                                            </StyledPublishedDate>
                                            <StyledDot />
                                            <StyledDuration type="main-paragraph">
                                                {item.duration}
                                            </StyledDuration>
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
