import React, { useState, useEffect, useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { isInViewport } from 'common/utility'
import { DerivStore } from 'store'
import CloseIcon from 'images/svg/close.svg'
import Triangle from 'images/svg/triangle.svg'
import device from 'themes/device'

const VideoWrapper = styled.div`
    position: relative;
    width: 720px;
    height: 400px;
    margin-bottom: 50px;
    background: var(--color-black);
`

const StyledVideo = styled.video`
    position: absolute;
    z-index: 5;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    ${(props) => {
        if (props.is_sticky)
            return css`
                position: fixed;
                inset: ${(props) =>
                    props.is_eu_country ? 'auto auto 90px 3px' : 'auto auto 3px 3px'};
                max-width: 450px;
                max-height: 300px;
                width: 450px;
                height: 300px;
                aspect-ratio: 16/9;
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-fill-mode: both;

                @media ${device.tabletS} {
                    max-width: 250px;
                    max-height: 200px;
                    inset: ${(props) =>
                        props.is_eu_country ? 'auto auto 100px 3px' : 'auto auto 3px 3px'};
                }
            `
    }}

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }
`

const GradientOverlay = styled.div`
    position: fixed;
    inset: ${(props) => (props.is_eu_country ? 'auto auto 90px 3px' : 'auto auto 3px 3px')};
    width: 450px;
    height: 300px;
    opacity: 0.01;
    background: var(--color-black);
    z-index: 1;
    display: block;

    @media ${device.tabletS} {
        width: 250px;
        height: 200px;
    }
`

const CloseButton = styled.img`
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    display: ${(props) => (props.is_sticky ? 'block' : 'none')};
    inset: ${(props) => (props.is_eu_country ? 'auto auto 387px 450px' : 'auto auto 300px 450px')};
    animation-name: fadeInUp;
    animation-duration: 1.5s;
    animation-fill-mode: both;

    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    }

    @media ${device.tabletS} {
        inset: ${(props) =>
            props.is_eu_country ? 'auto auto 280px 250px' : 'auto auto 185px 250px'};
    }
`

const ButtonCard = styled(Flex)`
    height: 400px;
    width: 720px;
    position: relative;
    cursor: pointer;
`

const StyledImage = styled.img`
    position: absolute;
    z-index: 1;
    object-fit: cover;
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

const PlayButtonOval = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80px;
    width: 80px;
    background-color: var(--color-white);
    opacity: 0.32;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`

const StyledTriangle = styled.img`
    position: absolute;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    cursor: pointer;
`

const StickyVideoPlayer = () => {
    const [is_sticky, setSticky] = useState(false)
    const [is_played, setPlayed] = useState(false)
    const VideoRef = useRef()
    const { is_eu_country } = useContext(DerivStore)

    useEffect(() => {
        if (is_played) {
            document.addEventListener('scroll', handleSticky)
        } else {
            document.removeEventListener('scroll', handleSticky)
        }

        return () => document.removeEventListener('scroll', handleSticky)
    }, [is_played])

    const handleClick = () => setPlayed(true)

    const handleSticky = () =>
        isInViewport(VideoRef?.current) ? setSticky(false) : setSticky(true)

    const handleClose = () => {
        setSticky(false)
        setPlayed(false)
    }

    return (
        <>
            {!is_played && (
                <Flex p="4rem 0">
                    <ButtonCard onClick={handleClick}>
                        <StyledImage
                            src="https://source.unsplash.com/random/720x400"
                            alt="video thumbail"
                            width="100%"
                            height="100%"
                        />
                        <ImageOverlay />
                        <PlayButtonOval />
                        <StyledTriangle
                            src={Triangle}
                            alt="is_played button"
                            height={25}
                            width={20}
                        />
                    </ButtonCard>
                </Flex>
            )}
            {is_played && (
                <Flex p="4rem 0">
                    <VideoWrapper ref={VideoRef}>
                        <StyledVideo
                            is_sticky={is_sticky}
                            controls
                            autoPlay
                            disablePictureInPicture
                            controlsList="nodownload"
                            is_eu_country={is_eu_country}
                        >
                            <source
                                src="https://amammustofa.com/assets/3cc88b20-07d5-44d4-9c21-73f544a9658e"
                                type="video/mp4"
                            />
                        </StyledVideo>
                    </VideoWrapper>
                </Flex>
            )}
            <CloseButton
                src={CloseIcon}
                alt="close"
                width={24}
                height={24}
                is_sticky={is_sticky}
                onClick={handleClose}
                is_eu_country={is_eu_country}
            />
            <GradientOverlay is_eu_country={is_eu_country} />
        </>
    )
}

export default StickyVideoPlayer
