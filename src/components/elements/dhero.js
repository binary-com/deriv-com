import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from 'components/containers/container.js'
import device from 'themes/device.js'
import { Header } from 'components/elements/typography.js'
import Show from 'components/containers/show'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import Image from 'components/elements/image'
import Button from 'components/form/button.js'

const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: 41.5rem;

    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 0.8rem;
    }
    h4:first-child {
        margin-top: 0;
    }
`
const Wrapper = styled.div`
    background-color: var(--color-black);
    width: 100%;
    padding: 7.2rem 0;
    display: flex;
    flex-direction: column;
`
const LogoWrapper = styled.div`
    margin-right: 1.6rem;
`
const TryForFree = styled(Button)`
    border: 2px solid var(--color-red);
    max-width: 15.4rem;
    font-weight: bold;
    line-height: 1.43;
    margin-top: 1.22rem;

    @media ${device.tabletL} {
        width: 100%;
        margin-top: 18.5rem;
    }
`
const openBot = () => {
    window.open('https://www.binary.bot/', '_blank')
}
const DHero = ({
    Logo,
    title,
    message,
    img_name,
    img_alt,
    button_text,
    clickRedirect,
    PlatformImage,
}) => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <Wrapper>
            <Container justify="space-between">
                <HeroContent>
                    <Header as="h4" weight={500}>
                        <LogoWrapper>
                            <Logo />
                        </LogoWrapper>
                        {title}
                    </Header>
                    <Header as="h1">{message}</Header>
                </HeroContent>
                <Show.Desktop>
                    {img_name ? (
                        <Image
                            img_name={img_name}
                            alt={img_alt}
                            width="58.9rem"
                        />
                    ) : (
                        <PlatformImage />
                    )}
                </Show.Desktop>
            </Container>
            <Container justify="flex-start">
                {clickRedirect === 'signup modal' ? (
                    <TryForFree secondary onClick={toggleModal}>
                        {button_text}
                    </TryForFree>
                ) : (
                    <TryForFree secondary onClick={openBot}>
                        {button_text}
                    </TryForFree>
                )}
            </Container>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                closeModal={closeModal}
            >
                <SignupModal autofocus />
            </Modal>
        </Wrapper>
    )
}
DHero.propTypes = {
    button_text: PropTypes.string,
    clickRedirect: PropTypes.string,
    img_alt: PropTypes.string,
    img_name: PropTypes.string,
    Logo: PropTypes.func,
    message: PropTypes.string,
    PlatformImage: PropTypes.func,
    title: PropTypes.string,
}
export default DHero
