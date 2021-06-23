import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoCarousel from './_VideoCarousel'
import VideoPlayer from './_video-player'
import { Flex, Container } from 'components/containers'
import { Header, LinkText } from 'components/elements'
import device from 'themes/device'
import PlayIcon from 'images/svg/blog/video/Triangle.svg'

const ParentWrapper = styled(Flex)`
    /* prettier-ignore */
    background: ${(props) =>
        props.bg_desktop
            ? 'linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(' +
              props.bg_desktop +
              ') no-repeat top left'
            : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
    flex-direction: column;
    overflow: hidden;
    margin: 80px 0;
    position: relative;
    background-size: cover;
    height: auto;
    padding: 160px 0 80px;
    max-width: 1440px;

    @media ${device.tabletL} {
        /* prettier-ignore */
        background: ${(props) =>
            props.bg_mobile
                ? 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%),url(' +
                  props.bg_mobile +
                  ') no-repeat top right 46.5%'
                : 'linear-gradient(251.14deg, rgba(14, 14, 14, 0.5632) 29.18%, rgba(7, 6, 6, 0.88) 85.14%)'};
        background-size: cover;
        padding: 73px 0 40px;
    }
`

const BgWrapper = styled(Container)`
    flex-direction: column;
    justify-content: flex-start;
`
const VideoDetailsWrapper = styled(Flex)`
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
`
const PlayerIconWrapper = styled(Flex)`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    margin-bottom: 24px;
    align-items: center;
    cursor: pointer;
`
const PlayerIcon = styled.img`
    width: 20px;
    height: 20px;
    @media ${device.tabletL} {
        width: 20px;
        height: 20px;
    }
`
const TagParentWrapper = styled(Flex)`
    height: 22px;
    justify-content: flex-start;
    @media ${device.tabletL} {
        margin-bottom: 8px;
    }
`
const TagWrapper = styled(Flex)`
    width: auto;
    padding: 1px 8px;
    background: var(--color-orange-3);
    border-radius: 8px;
    align-items: center;
`
const Tag = styled(LinkText)`
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    color: var(--color-orange-2);
    @media ${device.tabletL} {
        font-size: 12px;
        line-height: 18px;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    max-width: 894px;
    line-height: 60px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 24px;
        line-height: 30px;
    }
`
const StyledHeaderSmall = styled(Header)`
    color: var(--color-white);
    max-width: 894px;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 8px;
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
        max-width: 100%;
    }
`
const SmallDetailsWrapper = styled(Flex)`
    height: 24px;
    justify-content: flex-start;
    align-items: center;
`
const StyledSmallText = styled(Header)`
    line-height: 24px;
    color: var(--color-grey-17);
    font-weight: normal;
    width: auto;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
    }
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
    const handleOpenVideo = (event) => {
        if (event.defaultPrevented) return
        setShow(true)
    }

    return (
        <>
            <ParentWrapper
                bg_desktop={video_details[0].img_url_desktop}
                bg_mobile={video_details[0].img_url_mobile}
            >
                <BgWrapper>
                    <VideoDetailsWrapper>
                        <PlayerIconWrapper onClick={handleOpenVideo.bind(this)}>
                            <PlayerIcon src={PlayIcon} />
                        </PlayerIconWrapper>
                        <TagParentWrapper>
                            <TagWrapper>
                                <Tag>{video_details[0].type}</Tag>
                            </TagWrapper>
                        </TagParentWrapper>

                        <StyledHeader type="page-title">{video_details[0].title}</StyledHeader>
                        <StyledHeaderSmall weight="normal">
                            {video_details[0].description}
                        </StyledHeaderSmall>
                        <SmallDetailsWrapper>
                            <StyledSmallText weight="normal" type="main-paragraph">
                                {video_details[0].published_date}
                            </StyledSmallText>
                            <StyledDot />
                            <StyledSmallText weight="normal" type="main-paragraph">
                                {video_details[0].duration}
                            </StyledSmallText>
                        </SmallDetailsWrapper>
                    </VideoDetailsWrapper>
                    <VideoCarousel carousel_items={video_list} />
                </BgWrapper>
            </ParentWrapper>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={handleCloseVideo} />}
        </>
    )
}

Dbanner.propTypes = {
    video_details: PropTypes.array,
    video_list: PropTypes.array,
}

export default Dbanner
