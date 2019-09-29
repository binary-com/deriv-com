import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import device from 'themes/device.js'
import Show from 'components/containers/show'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import { Header, Text } from 'components/elements/typography.js'
import { deriv_app_url } from 'common/utility'
import Button from 'components/form/button'

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
    ${props =>
        props.demo
            ? `    background-color: var(--color-grey-1);
    border: 2px solid var(--color-grey-5);`
            : ''}
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
const openBot = () => {
    window.open('https://www.binary.bot/', '_blank')
}
const DExperience = ({ title, subtitle, redirect }) => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <StyledSection padding="4rem 0">
            <StyledContainer justify="space-between">
                <Content>
                    <StyledHeader as="h2" align="center">
                        {title}
                    </StyledHeader>
                    {subtitle ? <Text align="center">{subtitle}</Text> : null}
                    {redirect === 'signup modal' ? (
                        <StyledButton secondary onClick={toggleModal}>
                            {localize('Try for free')}
                        </StyledButton>
                    ) : (
                        <StyledButton secondary onClick={openBot}>
                            {localize('Start building')}
                        </StyledButton>
                    )}
                </Content>
                <StyledContent>
                    <StyledHeader as="h2" align="center">
                        {localize('New to trading?')}
                    </StyledHeader>
                    <Show.Mobile>
                        <Text align="center">
                            {localize('Start trading on DTrader now.')}
                        </Text>
                    </Show.Mobile>
                    <Show.Desktop>
                        <Text align="center">
                            {localize('Check out our live demo')}
                        </Text>
                    </Show.Desktop>
                    <StyledButton demo onClick={handleExternalLink}>
                        {localize('Go to live demo')}
                    </StyledButton>
                </StyledContent>
            </StyledContainer>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                closeModal={closeModal}
            >
                <SignupModal autofocus />
            </Modal>
        </StyledSection>
    )
}
DExperience.propTypes = {
    redirect: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string,
}

export default DExperience
