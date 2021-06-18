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
import VideoBG from 'images/common/blog/video/bg-dummy.png'

const ParentWrapper = styled(Flex)`
    /* prettier-ignore */
    background: linear-gradient(251.14deg,rgba(14, 14, 14, 0.5632) 29.18%,rgba(7, 6, 6, 0.88) 85.14%),url(${VideoBG}) no-repeat top left;
    flex-direction: column;
    overflow: hidden;
    margin: 80px 0;
    position: relative;
    background-size: cover;
    height: 726px;
    max-width: 1440px;
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
    margin-bottom: 25px;
    align-items: center;
    cursor: pointer;
`
const PlayerIcon = styled.img`
    width: 20px;
    height: 16px;
`
const TagParentWrapper = styled(Flex)`
    height: 22px;
    justify-content: flex-start;
`
const TagWrapper = styled(Flex)`
    width: auto;
    padding: 1px 8px;
    background: #33140e;
    border-radius: 8px;
`
const Tag = styled(LinkText)`
    font-size: 14px;
    line-height: 20px;
    color: #ff7457;
`
const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    max-width: 894px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 40px;
    }
`
const StyledHeaderSmall = styled(Header)`
    color: var(--color-white);
    max-width: 894px;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;
    margin-bottom: 8px;
    @media ${device.tabletL} {
        font-size: 20px;
        max-width: 100%;
    }
`
const SmallDetailsWrapper = styled(Flex)`
    padding-top: 8px;
    height: 24px;
    font-weight: normal;
    justify-content: flex-start;
    align-items: center;
`
const StyledPublishedDate = styled(Header)`
    color: var(--color-grey-17);
    font-weight: normal;
    width: auto;
`
const StyledDot = styled.img`
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background: var(--color-grey-17);
    margin: 0 10px;
`
const StyledDuration = styled(Header)`
    color: var(--color-grey-17);
    width: auto;
    font-weight: normal;
`

const carouselItem = [
    {
        image: 'video_banner_1',
        title: 'DBot 1- your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_2',
        title: 'DBot 2- your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_3',
        title: 'DBot 3- your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_4',
        title: 'DBot 4 - your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_5',
        title: 'DBot 5 - your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_1',
        title: 'DBot 6 - your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
    {
        image: 'video_banner_3',
        title: 'DBot 7 - your automated trading partner',
        date: 'April 7, 2021',
        duration: '14:09',
    },
]

const Dbanner = ({ video_data }) => {
    const [show, setShow] = useState(false)

    const handleCloseVideo = () => setShow(false)
    const handleOpenVideo = (event) => {
        if (event.defaultPrevented) return
        setShow(true)
    }

    return (
        <>
            <ParentWrapper>
                <BgWrapper>
                    <VideoDetailsWrapper>
                        <PlayerIconWrapper onClick={handleOpenVideo}>
                            <PlayerIcon src={PlayIcon} />
                        </PlayerIconWrapper>
                        <TagParentWrapper>
                            <TagWrapper>
                                <Tag>{video_data[0].type}</Tag>
                            </TagWrapper>
                        </TagParentWrapper>

                        <StyledHeader type="page-title">{video_data[0].title}</StyledHeader>
                        <StyledHeaderSmall>{video_data[0].description}</StyledHeaderSmall>
                        <SmallDetailsWrapper>
                            <StyledPublishedDate type="main-paragraph">
                                {video_data[0].published_date}
                            </StyledPublishedDate>
                            <StyledDot />
                            <StyledDuration type="main-paragraph">
                                {video_data[0].duration}
                            </StyledDuration>
                        </SmallDetailsWrapper>
                    </VideoDetailsWrapper>
                    <VideoCarousel carousel_items={carouselItem} />
                </BgWrapper>
            </ParentWrapper>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={handleCloseVideo} />}
        </>
    )
}

Dbanner.propTypes = {
    video_data: PropTypes.array,
}

export default Dbanner
