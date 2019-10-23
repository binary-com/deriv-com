import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import Container, { SectionContainer } from 'components/containers/container.js'
import device from 'themes/device.js'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/custom/signup-modal'
import { Header, Text } from 'components/elements/typography.js'
import Button from 'components/form/button'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-1);
    @media ${device.tabletL} {
        padding: 4rem 0;
    }
`
const Content = styled.div`
    width: 100%;
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

const Experience = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    return (
        <StyledSection padding="4rem 0">
            <StyledContainer justify="centere">
                <Content>
                    <StyledHeader as="h2" align="center">
                        {localize('Try DMT5 with no risk')}
                    </StyledHeader>
                    <Text align="center">
                        {localize(
                            'Practise trading with unlimited virtual funds',
                        )}
                    </Text>
                    <StyledButton secondary onClick={toggleModal}>
                        {localize('Try for free')}
                    </StyledButton>
                </Content>
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

export default Experience
