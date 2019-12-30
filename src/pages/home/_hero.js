import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import { Modal, useModal, Header } from 'components/elements'
import { localize } from 'components/localization'
import SignupModal from 'components/custom/signup-modal'

const HeroWrapper = styled.section`
    width: 100%;
    padding-top: 27rem;
    min-height: calc(100vh - 7rem);
    background: var(--color-black);
    position: relative;

    @media ${device.laptop} {
        background-position: -10rem 100%;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }
    @media ${device.tabletL} {
        background: unset;
        background-position: -20rem 100%;
        background-color: var(--color-black);
    }
    @media ${device.tablet} {
        background-position: -40rem 100%;
    }
`

const HeroHeader = styled(Header)`
    margin-top: ${props => (props.secondary ? '1.6rem' : '')};

    @media ${device.laptop} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: left;
    }
`

const StyledArticle = styled.article`
    position: relative;
    z-index: 2;

    ${HeroHeader} {
        width: 100%;
    }
`

const HeroGrid = styled.section`
    width: 100%;
    max-width: 100%;
`

const ButtonWrapper = styled(Flex)`
    margin-top: 4rem;

    ${Button} {
        font-size: 1.6rem;
    }
    @media ${device.laptop} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: left;
    }
`

export const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <HeroWrapper>
            <Container>
                <HeroGrid>
                    <StyledArticle>
                        <HeroHeader align="center" as="h1" color="white" lh="1.2">
                            {localize('This is your ultimate trading experience')}
                        </HeroHeader>
                        <HeroHeader as="h4" align="center" color="white" weight="500" secondary>
                            {localize('The next evolution of online trading by Binary.com')}
                        </HeroHeader>
                        <ButtonWrapper>
                            <Button type="submit" onClick={toggleModal} secondary>
                                {localize('Create a free account')}
                            </Button>
                        </ButtonWrapper>
                    </StyledArticle>
                    <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                        <SignupModal autofocus />
                    </Modal>
                </HeroGrid>
            </Container>
            <Show.Desktop>
                <video
                    title={localize('deriv.app platform video')}
                    style={{
                        position: 'absolute',
                        top: '0%',
                        objectFit: 'fill',
                        filter: 'brightness(0.8)',
                    }}
                    width="100%"
                    height="100%"
                    autoPlay
                    muted
                    playsInline
                    loop
                >
                    <source src="/Deriv_platform.webm" type="video/webm" />
                    <source src="/Deriv_platform.mp4" type="video/mp4" />
                </video>
            </Show.Desktop>
        </HeroWrapper>
    )
}
