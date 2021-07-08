import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, Flex } from 'components/containers'
import { isInViewport } from 'common/utility'
import CloseIcon from 'images/svg/close.svg'
import Triangle from 'images/svg/triangle.svg'

const VideoWrapper = styled.div`
    position: relative;
    width: 720px;
    height: 400px;
    margin-bottom: 50px;
    background: var(--color-black);
`

const StyledVideo = styled.video`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    ${(props) => {
        if (props.is_sticky)
            return css`
                position: fixed;
                left: 3px;
                bottom: 3px;
                top: auto;
                right: auto;
                max-width: 450px;
                max-height: 300px;
                width: 450px;
                height: 300px;
                animation-name: fadeInUp;
                animation-duration: 1s;
                animation-fill-mode: both;
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
    left: 3px;
    bottom: 3px;
    top: auto;
    right: auto;
    max-width: 280px;
    max-height: 158px;
    width: 280px;
    height: 158px;
    opacity: 0.01;
    background: var(--color-black);
    z-index: 1;
    display: block;
`

const CloseButton = styled.img`
    cursor: pointer;
    position: fixed;
    box-sizing: border-box;
    display: ${(props) => (props.is_sticky ? 'block' : 'none')};
    left: 450px;
    bottom: 300px;
    top: auto;
    right: auto;
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
// This component is for testing purposes only
const EmptyContainer = styled.div`
    height: 120rem;
    padding: 4rem;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    text-align: center;
`

const FloatingVideoPage = () => {
    const [is_sticky, setSticky] = useState(false)
    const [is_played, setPlayed] = useState(false)
    const VideoRef = useRef()

    useEffect(() => {
        if (is_played) {
            document.addEventListener('scroll', handleSticky)
        } else {
            document.removeEventListener('scroll', handleSticky)
        }

        return () => document.removeEventListener('scroll', handleSticky)
    }, [is_played])

    const handleClick = () => setPlayed(true)

    const handleSticky = () => (isInViewport(VideoRef.current) ? setSticky(false) : setSticky(true))

    const handleClose = () => {
        setSticky(false)
        setPlayed(false)
    }

    return (
        <Layout>
            <SEO
                title={localize('Floating Video')}
                description={localize('Floating video component')}
            />
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
            />
            <GradientOverlay />
            <EmptyContainer>
                Play &
                <br />
                <br />
                Scroll Down
                <br />
                <br />
                &darr;
            </EmptyContainer>
        </Layout>
    )
}

export default WithIntl()(FloatingVideoPage)
