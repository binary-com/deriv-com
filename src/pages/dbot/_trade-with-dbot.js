import React from 'react'
import styled from 'styled-components'
import { Button } from 'components/form'
import { FlexGridContainer } from 'components/containers'
import { Header, Text, Modal, useModal } from 'components/elements'
import { localize } from 'components/localization'
import { deriv_app_url, deriv_bot_app_url } from 'common/utility'
import device from 'themes/device'
import SignupModal from 'components/custom/signup-modal'

const StyledButton = styled(Button)`
    margin-top: 2rem;
`

const StyledDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
        margin-top: 3.2rem;
    }

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletS} {
        font-size: 3.6rem;
    }
`

const StyledSection = styled.section`
    background-color: var(--color-grey-1);
    width: 100%;
    padding: 4rem 0;
`

const handleExternalLink = (is_bot = false) => {
    window.open(is_bot ? deriv_bot_app_url : deriv_app_url, '_blank')
}

export const TradeWithDbot = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <StyledSection>
            <FlexGridContainer
                align-items="center"
                gap="0"
                grid="2"
                content_width="49%"
            >
                <StyledDiv>
                    <StyledHeader font_size="4.8rem" align="center" lh="6rem">
                        {localize('Trade more efficiently with DBot')}
                    </StyledHeader>
                    <StyledButton secondary onClick={() => toggleModal()}>
                        {localize('Start building')}
                    </StyledButton>
                </StyledDiv>
                <StyledDiv>
                    <StyledHeader font_size="4.8rem" align="center" lh="6rem">
                        {localize('New to trading?')}
                    </StyledHeader>
                    <Text align="center">
                        {localize('Check out our live demo')}
                    </Text>
                    <StyledButton
                        tertiary
                        onClick={() => handleExternalLink(true)}
                    >
                        {localize('Go to live demo')}
                    </StyledButton>
                </StyledDiv>
            </FlexGridContainer>
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
