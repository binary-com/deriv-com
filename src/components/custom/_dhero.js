import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { deriv_app_url } from 'common/utility'
import { localize } from 'components/localization'
import { Container, Show } from 'components/containers'
import device from 'themes/device.js'
import { Header, Modal, useModal, Image } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { Button } from 'components/form'

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
    font-size: 2.4rem;
`
const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    background-color: var(--color-black);
    width: 100%;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
`
const TryForFree = styled(Button)`
    margin-top: 3.3rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 18.5rem;
    }
`
const StyledContainer = styled(Container)`
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    font-size: 5.6rem;
`
const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 584px;
    max-height: 375px;
`
const GoToLiveDemo = styled(Button)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    margin: 3.3rem 0 0 2.4rem;
`
const StyledContent = styled(Header)`
    font-size: 5.6rem;
`

const DHero = ({ title, background_svg, background_image_name, content, join_us_for_free, go_to_live_demo, start_automating, Logo }) => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const handleRedirect = () => {
        window.open(deriv_app_url, '_blank')
    }
    const DLogo = styled(Logo)`
        margin-right: 1.6rem;
    `
    const BackgroundSVG = styled(background_svg)`
        position: absolute;
        top: 0;
        right: 0;
        height: 109%;
    `
    return (
        <Wrapper>
            <Show.Desktop>
                <BackgroundSVG />
            </Show.Desktop>
            <StyledContainer>
                <div>
                    <StyledHeader as="h1" weight={500}>
                        <DLogo />
                        {title}
                    </StyledHeader>
                    <HeroContent>
                        <StyledContent as="h2">
                            {content}
                        </StyledContent>
                    </HeroContent>
                    {join_us_for_free ? (<TryForFree secondary onClick={toggleModal}>
                        {localize('Join us for free')}
                    </TryForFree>) : null}
                    {start_automating ? (<TryForFree secondary onClick={toggleModal}>
                        {localize('Start automating')}
                    </TryForFree>) : null}
                    {go_to_live_demo ? (<GoToLiveDemo tertiary onClick={handleRedirect}>
                        {localize('Go to live demo')}
                    </GoToLiveDemo>) : null}
                </div>
                <div>
                    <Show.Desktop>
                        <LottieWrapper>
                            <Image img_name={background_image_name} width='54.3rem' />
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

DHero.propTypes = {
    background_image_name: PropTypes.string,
    background_svg: PropTypes.func,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    go_to_live_demo: PropTypes.bool,
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.func,
    start_automating: PropTypes.bool,
    title: PropTypes.string,
}

export default DHero
