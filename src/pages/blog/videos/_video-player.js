import React, { useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import CloseIcon from 'images/svg/close.svg'

const VideoWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const CloseButton = styled.img`
    cursor: pointer;
`

const VidePlayer = styled.video`
    position: relative;
    background-color: var(--color-black);
    border-radius: 20px;
    border: solid 2px var(--color-white);
`

const VideoPlayer = ({ video_src, closeVideo }) => {
    const handleEscape = (e) => {
        if (e.keyCode === 27) {
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
            <Flex jc="flex-end" height="auto" width="80%" mr="-32px">
                <CloseButton
                    src={CloseIcon}
                    alt="close"
                    width={24}
                    height={24}
                    onClick={closeVideo}
                />
            </Flex>
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
