import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import CloseIcon from 'images/svg/close.svg'

const VideoSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 4rem 0;
`

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
        if (props.sticky)
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
    display: ${(props) => (props.sticky ? 'block' : 'none')};
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

const ButtonSection = styled.div`
    display: flex;
    justify-content: center;
    padding: 4rem 0;
`

const ButtonCard = styled.div`
    height: 300px;
    width: 450px;
    background-color: var(--color-grey-6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const FloatingVideoPage = () => {
    const [sticky, setSticky] = useState(false)
    const [play, setPlay] = useState(false)
    const VideoRef = useRef()

    useEffect(() => {
        if (play) {
            document.addEventListener('scroll', handleSticky)
        } else {
            document.removeEventListener('scroll', handleSticky)
        }

        return () => document.removeEventListener('scroll', handleSticky)
    }, [play])

    function isInViewport(element) {
        const rect = element?.getBoundingClientRect()
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    const handleSticky = () => (isInViewport(VideoRef.current) ? setSticky(false) : setSticky(true))

    const handleClose = () => {
        setSticky(false)
        setPlay(false)
    }

    return (
        <Layout>
            <SEO
                title={localize('Floating Video')}
                description={localize('Floating video component!')}
            />
            {!play && (
                <ButtonSection>
                    <ButtonCard>
                        <button onClick={() => setPlay(true)}>Play Video</button>
                    </ButtonCard>
                </ButtonSection>
            )}
            {play && (
                <VideoSection>
                    <VideoWrapper ref={VideoRef}>
                        <StyledVideo sticky={sticky} controls autoPlay>
                            <source
                                src="https://amammustofa.com/assets/3cc88b20-07d5-44d4-9c21-73f544a9658e"
                                type="video/mp4"
                            />
                        </StyledVideo>
                    </VideoWrapper>
                </VideoSection>
            )}
            <CloseButton
                src={CloseIcon}
                alt="close"
                width={24}
                height={24}
                sticky={sticky}
                onClick={handleClose}
            />
            <GradientOverlay></GradientOverlay>
            <div
                style={{
                    height: '120rem',
                    padding: '4rem',
                    fontSize: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}
            >
                Press &
                <br />
                <br />
                Scroll Down
                <br />
                <br />
                &darr;
            </div>
        </Layout>
    )
}

export default WithIntl()(FloatingVideoPage)
