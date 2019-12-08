import React from 'react'
import styled from 'styled-components'
import DTraderAnimation from 'pages/dtrader/dtrader-animation.json'
import { deriv_app_url } from 'common/utility'
import { localize, Localize } from 'components/localization'
import { Container, Show } from 'components/containers'
import device from 'themes/device.js'
import { Header, Modal, useModal } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { Button } from 'components/form'
import dtrader_logo from 'images/svg/dtrader-icon.svg'
import { Lottie } from 'components/elements/lottie.js'

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 58.4rem;

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
const DTraderLogo = styled(dtrader_logo)`
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
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
`
const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 584px;
    max-height: 375px;
`
const GoToLiveDemo = styled(Button)`
    border: 2px solid var(--color-black-5);
    font-weight: bold;
    line-height: 1.43;
    margin: 3.3rem 0 0 2.4rem;
    background-color: var(--color-black);
`
const DHero = ({ title, content, join_us_for_free, go_to_live_demo }) => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const handleRedirect = () => {
        window.open(deriv_app_url, '_blank')
    }
    return (
        <Wrapper>
            <StyledContainer>
                <div>
                    <StyledHeader as="h4" weight={500}>
                        <DTraderLogo />
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <Header as="h1">
                            {content}
                        </Header>
                    </HeroContent>
                    {join_us_for_free ? (<TryForFree secondary onClick={toggleModal}>
                        {localize('Join us for free')}
                    </TryForFree>) : null}
                    {go_to_live_demo ? (<GoToLiveDemo secondary onClick={handleRedirect}>
                        {localize('Go to live demo')}
                    </GoToLiveDemo>) : null}
                </div>
                <div>
                    <Show.Desktop>
                        <LottieWrapper>
                            <Lottie animationData={DTraderAnimation} />
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

export default DHero
