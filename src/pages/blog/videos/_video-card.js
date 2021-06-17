import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import Triangle from 'images/svg/triangle.svg'

const VideoCardWrapper = styled.div`
    max-width: 384px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    height: auto;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-grey-8);
    background: var(--color-white);
    transition: transform 0.3s;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media ${device.mobileL} {
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    height: 200px;
    width: 384px;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media ${device.mobileL} {
        width: 100%;
    }
`

const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(14, 14, 14, 0.5);
`

const StyledCategories = styled(Text)`
    width: auto;
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 3;
    border-radius: 8px;
    background-color: var(--color-brown);
    color: var(--color-orange-2);
    padding: 1px 8px;
`

const PlayButtonOval = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: 80px;
    width: 80px;
    background-color: var(--color-white);
    opacity: 0.32;
    border-radius: 50%;
`

const StyledTriangle = styled.img`
    position: absolute;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
`

const VideoDuration = styled(Text)`
    width: auto;
    position: absolute;
    bottom: 8px;
    right: 8px;
    z-index: 3;
    border-radius: 3px;
    background-color: var(--color-black);
    color: var(--color-white);
    padding: 0 4px;
`

const VideoCard = ({ item, openVideo }) => {
    return (
        <VideoCardWrapper onClick={openVideo}>
            <ImageWrapper>
                <ImageOverlay />
                <StyledCategories weight="bold" size="14px">
                    {item.category}
                </StyledCategories>
                <PlayButtonOval />
                <StyledTriangle src={Triangle} alt="play button" height={25} width={20} />
                <VideoDuration size="14px" lh="20px">
                    {item.video_duration}
                </VideoDuration>
                <img
                    src={item.image}
                    alt={localize('Video card')}
                    width="100%"
                    style={{ objectFit: 'contain' }}
                />
            </ImageWrapper>
            <div style={{ padding: '16px 24px' }}>
                <Header as="h3" size="20px">
                    {item.title}
                </Header>
                <Text size="12px" mt="8px" color="grey-40">
                    {item.date}
                </Text>
            </div>
        </VideoCardWrapper>
    )
}

VideoCard.propTypes = {
    item: PropTypes.arrayOf(Object),
    openVideo: PropTypes.func,
}

export default VideoCard
