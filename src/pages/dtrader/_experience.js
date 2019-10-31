import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer, Show } from 'components/containers'
import device from 'themes/device.js'
import { Modal, useModal, Header, Text } from 'components/elements'
import SignupModal from 'components/custom/signup-modal'
import { deriv_app_url } from 'common/utility'
import { Button } from 'components/form'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-1);
    @media ${device.tabletL} {
        padding: 4rem 0 0 0;
    }
`
const Content = styled.div`
    width: 100%;
    max-width: 50.2rem;
    text-align: center;
    @media ${device.tabletL} {
        text-align: left;
    }

    ${Text} {
        margin-top: 2rem;
        @media ${device.tabletL} {
            font-size: 2rem;
            font-weight: bold;
            text-align: left;
        }
    }
`
const StyledButton = styled(Button)`
    margin-top: 2rem;
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: flex-start;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
    }
`
const StyledContent = styled(Content)`
    @media ${device.tabletL} {
        box-shadow: inset 0 1px 0 0 var(--color-grey-2);
        padding: 3.56rem 0;
        margin-top: 3.56rem;
    }
`
const handleExternalLink = () => {
    window.open(deriv_app_url, '_blank')
}
const Experience = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <StyledSection padding="4rem 0">
            <StyledContainer justify="space-between">
                <Content>
                    <StyledHeader as="h2" align="center">
                        {localize('20 years of experience and trust')}
                    </StyledHeader>
                    <Text align="center">{localize('Join over a million traders worldwide')}</Text>
                    <StyledButton secondary onClick={toggleModal}>
                        {localize('Try for free')}
                    </StyledButton>
                </Content>
                <StyledContent>
                    <StyledHeader as="h2" align="center">
                        {localize('New to trading?')}
                    </StyledHeader>
                    <Show.Mobile>
                        <Text align="center">{localize('Start trading on DTrader now.')}</Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Text align="center">{localize('Check out our live demo')}</Text>
                    </Show.Desktop>
                    <StyledButton tertiary onClick={handleExternalLink}>
                        {localize('Go to live demo')}
                    </StyledButton>
                </StyledContent>
            </StyledContainer>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal autofocus />
            </Modal>
        </StyledSection>
    )
}

export default Experience
