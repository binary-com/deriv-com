import React from 'react'
import styled from 'styled-components'
import DMT5Animation from './dmt5_edited.json'
import { localize } from 'components/localization'
import { Container, Show } from 'components/containers'
import device from 'themes/device.js'
import { Header, Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { Button } from 'components/form'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { Lottie } from 'components/elements/lottie.js'

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 41.5rem;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 1.6rem;
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
    padding: 10rem 0;
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
    margin-top: 3.3rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 18.5rem;
    }
`
const StyledContainer = styled(Container)`
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
`
const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 557px;
    max-height: 340px;
`

const Hero = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <Wrapper>
            <StyledContainer>
                <div>
                    <StyledHeader as="h4" weight={500}>
                        <DMT5Logo />
                        {localize('DMT5')}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h1">
                            {localize('The all-in-one FX and CFD trading platform')}
                        </Header>
                    </HeroContent>
                    <TryForFree secondary onClick={toggleModal}>
                        {localize('Join us for free')}
                    </TryForFree>
                </div>
                <div>
                    <Show.Desktop>
                        <LottieWrapper>
                            <Lottie animationData={DMT5Animation} />
                        </LottieWrapper>
                    </Show.Desktop>

                </div>
            </StyledContainer>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </Wrapper>
    )
}

export default Hero
