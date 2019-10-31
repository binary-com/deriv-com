import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, Show } from 'components/containers'
import device from 'themes/device.js'
import { Header, Modal, useModal, Image } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { Button } from 'components/form'
import dmt5_logo from 'images/svg/dmt5-icon.svg'

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 40rem;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 0.8rem;
    }
    h4:first-child {
        margin-top: 0;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
`
const Wrapper = styled.div`
    background-color: var(--color-black);
    width: 100%;
    padding: 7.2rem 0;
    display: flex;
    flex-direction: column;
`
const DMT5Logo = styled(dmt5_logo)`
    margin-right: 1.6rem;
`
const TryForFree = styled(Button)`
    border: 2px solid var(--color-red);
    font-weight: bold;
    line-height: 1.43;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 18.5rem;
    }
`

const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <Wrapper>
            <Container align="flex-start">
                <StyledHeader as="h4" weight={500}>
                    <DMT5Logo />
                    {localize('DMT5')}
                </StyledHeader>
            </Container>
            <Container justify="space-between" align="flex-start">
                <HeroContent>
                    <Header as="h1">
                        {localize('The all-in-one FX and CFD trading platform')}
                    </Header>
                </HeroContent>
                <Show.Desktop>
                    <Image img_name="dmt5-platform.png" alt="DMT5 platform" width="58.9rem" />
                </Show.Desktop>
            </Container>
            <Container justify="flex-start">
                <TryForFree secondary onClick={toggleModal}>
                    {localize('Try for free')}
                </TryForFree>
            </Container>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Wrapper>
    )
}

export default Hero
