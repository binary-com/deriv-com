import React from 'react'
import styled from 'styled-components'
import Button from '../../components/form/button'
import { HeroHeader, StyledHeader } from './_headers'
import device from 'themes/device'
import Container from 'components/containers/container'
import Show from 'components/containers/show'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 0;
    min-height: 65rem;
    background: var(--color-black);
    position: relative;

    @media ${device.laptop} {
        background-position: -10rem 100%;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        min-height: 47rem;
        background-color: var(--color-black);
        padding-bottom: 7rem;
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const StyledArticle = styled.article`
    position: relative;
    z-index: 2;
`

const VideoWrapper = styled.video`
    position: absolute;
    max-width: 76.2rem;
    height: 52.5rem;
    right: 3.5rem;
`

const HeroGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-column-gap: 2rem;
    max-width: 100%;
    padding-top: 4rem;

    @media ${device.laptop} {
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;
    }
    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 3.2rem;
`

export const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <Show.Mobile>
                            <Header font_size="6rem" color="white" lh="1.1">
                                {localize(
                                    'Welcome to the ultimate trading experience',
                                )}
                            </Header>
                            <StyledHeader
                                font_size="2rem"
                                color="white"
                                weight="500"
                            >
                                {localize(
                                    'All the world’s markets, one powerful trading platform',
                                )}
                            </StyledHeader>
                        </Show.Mobile>
                        <Show.Desktop>
                            <HeroHeader as="h1" color="white" lh="1.2">
                                {localize(
                                    'This is your ultimate trading experience',
                                )}
                            </HeroHeader>
                            <HeroHeader
                                as="h4"
                                color="white"
                                weight="500"
                                secondary
                            >
                                {localize(
                                    'The world’s markets at your fingertips anytime, anywhere.',
                                )}
                            </HeroHeader>
                            <ButtonWrapper>
                                <Button
                                    type="submit"
                                    onClick={toggleModal}
                                    secondary
                                >
                                    {localize('Create a free account')}
                                </Button>
                            </ButtonWrapper>
                        </Show.Desktop>
                    </StyledArticle>
                    <VideoWrapper
                        width="100%"
                        height="100%"
                        autoPlay
                        muted
                        playsInline
                        loop
                    >
                        <source
                            src="/deriv_platform_video.mp4"
                            type="video/mp4"
                        />
                    </VideoWrapper>
                    <Modal
                        toggle={toggleModal}
                        is_open={show_modal}
                        closeModal={closeModal}
                    >
                        <SignupModal autofocus />
                    </Modal>
                </HeroGrid>
            </Container>
        </HeroWrapper>
    )
}
