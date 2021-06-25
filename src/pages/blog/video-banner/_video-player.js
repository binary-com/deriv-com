import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import CloseIcon from 'images/svg/close.svg'
import device from 'themes/device'

const VideoWrapper = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const StyledFlex = styled(Flex)`
    width: 80%;
    margin-right: -36px;
    @media ${device.tablet} {
        width: 90%;
        margin-right: -10px;
    }
`

const CloseButton = styled.img`
    cursor: pointer;
`

const VidePlayer = styled.video`
    width: 80%;
    position: relative;
    background-color: var(--color-black);
    @media ${device.tablet} {
        width: 90%;
    }
`

const VideoPlayer = ({ video_src, closeVideo }) => {
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeVideo()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleEscape, false)

        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [])

    return (
        <VideoWrapper onClick={closeVideo}>
            <StyledFlex jc="flex-end" height="auto">
                <CloseButton
                    src={CloseIcon}
                    alt="close"
                    width={24}
                    height={24}
                    onClick={closeVideo}
                />
            </StyledFlex>
            <VidePlayer
                width="80%"
                height="480"
                controls
                autoPlay
                onClick={(event) => event.stopPropagation()}
            >
                <source src={video_src} type="video/mp4" />
                Your browser does not support the video tag.
            </VidePlayer>
        </VideoWrapper>
    )
}

VideoPlayer.propTypes = {
    closeVideo: PropTypes.func,
    video_src: PropTypes.object,
}

export default VideoPlayer
