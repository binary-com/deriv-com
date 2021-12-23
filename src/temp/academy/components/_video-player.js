import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import CloseIcon from 'images/svg/close.svg'
import device from 'themes/device'

const VideoWrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: ${(props) => (props.show ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    width: 100%;
    height: 100vh;
`
const VidPlayerWrapper = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    width: 90%;
    max-width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.desktopS} {
        max-width: 1600px;
    }
`
const VidDivWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const StyledFlex = styled(Flex)`
    margin-left: 20px;
    @media ${device.tabletS} {
        margin-left: 0;
    }
`

const CloseButton = styled.img`
    cursor: pointer;
`
const VidPlayer = styled.video`
    width: 100%;
    max-height: 558px;
    background-color: var(--color-black);
    outline: none;

    @media ${device.desktopS} {
        max-height: 900px;
    }
`

const VideoPlayer = ({ video_src, closeVideo }) => {
    const vidRef = useRef()
    const [is_show, setIsShow] = useState(true)
    const [scroll, setScroll] = useState(true)
    let vidElement

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboardEvent, false)

        vidElement = vidRef.current
        vidElement.addEventListener('enterpictureinpicture', () => {
            setIsShow(!is_show)
            setScroll(!scroll)
            document.body.style.overflow = 'unset'
        })

        vidElement.onleavepictureinpicture = () => {
            document.body.style.overflow = 'hidden'
            const was_playing = !vidElement.paused
            if (!vidElement.paused) {
                setIsShow(is_show)
            } else if (was_playing) {
                closeVideo()
            } else if (vidElement.paused) {
                setIsShow(is_show)
            } else if (!was_playing) {
                setIsShow(is_show)
            } else {
                setIsShow(!is_show)
            }
        }
        vidElement.focus()
        return () => document.removeEventListener('keydown', handleKeyboardEvent, false)
    }, [])

    const handleKeyboardEvent = (e) => {
        if (e.key === 'Escape') {
            closeVideo()
        }
    }

    return (
        <VideoWrapper onClick={() => closeVideo()} show={is_show}>
            <VidPlayerWrapper>
                <VidDivWrapper>
                    <Flex direction="column">
                        <StyledFlex jc="flex-end" height="auto">
                            <CloseButton
                                src={CloseIcon}
                                alt="close"
                                width={24}
                                height={24}
                                onClick={() => closeVideo()}
                            />
                        </StyledFlex>
                        <VidPlayer
                            controls
                            disablePictureInPicture
                            controlsList="nodownload"
                            autoPlay
                            onClick={(event) => event.stopPropagation()}
                            ref={vidRef}
                        >
                            <source src={video_src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </VidPlayer>
                    </Flex>
                </VidDivWrapper>
            </VidPlayerWrapper>
        </VideoWrapper>
    )
}

VideoPlayer.propTypes = {
    closeVideo: PropTypes.func,
    video_src: PropTypes.string,
}

export default VideoPlayer
