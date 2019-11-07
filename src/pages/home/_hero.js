import React from 'react'
import styled from 'styled-components'
import { HeroHeader } from './_headers'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Show } from 'components/containers'
import { Modal, useModal } from 'components/elements'
import { localize } from 'components/localization'
import SignupModal from 'components/custom/signup-modal'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 4rem 0 0;
    min-height: 65rem;
    background: var(--color-black);
    position: relative;

    @media ${device.laptop} {
        background-position: -10rem 100%;
        min-height: 45rem;
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

const VideoWrapper = styled.div`
    position: absolute;
    max-width: 58vw;
    height: 52.5rem;
    right: 0;
    top: 2rem;

    @media ${device.laptop} {
        display: none;
    }
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
        grid-row-gap: 0;
    }
    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        grid-row-gap: 8rem;
        text-align: center;
    }
`

const ButtonWrapper = styled.div`
    margin-top: 3.2rem;

    @media ${device.laptop} {
        text-align: center;
    }
`

export const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <HeroHeader as="h1" color="white" lh="1.2">
                            {localize('This is your ultimate trading experience')}
                        </HeroHeader>
                        <HeroHeader as="h4" color="white" weight="500" secondary>
                            {localize('The world’s markets at your fingertips anytime, anywhere.')}
                        </HeroHeader>
                        <ButtonWrapper>
                            <Button type="submit" onClick={toggleModal} secondary>
                                {localize('Create a free account')}
                            </Button>
                        </ButtonWrapper>
                    </StyledArticle>
                    <Show.Desktop>
                        <VideoWrapper>
                            <video width="100%" height="100%" autoPlay muted playsInline loop>
                                <source src="/deriv_trading_platform.webm" type="video/webm" />
                                <source src="/deriv_trading_platform.mp4" type="video/mp4" />
                            </video>
                        </VideoWrapper>
                    </Show.Desktop>
                    <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                        <SignupModal autofocus />
                    </Modal>
                </HeroGrid>
            </Container>
        </HeroWrapper>
    )
}
