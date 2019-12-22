import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Signup from './signup'
import { FlexGridContainer, Show } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import device from 'themes/device.js'
import Award from 'images/svg/award-winning.svg'
import Complaint from 'images/svg/complaint.svg'
import Security from 'images/svg/security.svg'

const SignupWrapper = styled.article`
    background-color: var(--color-grey-8);
    width: 97rem;
    height: 58rem;
    border-radius: 6px;
    overflow: auto;

    @media ${device.tabletL} {
        width: 315px;
        height: 56rem;
    }
`

const ModalRow = styled(FlexGridContainer)`
    height: 100%;

    & > * {
        width: 50%;
    }
    @media (max-width: 992px) {
        width: 100%;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    padding: 4rem 4rem;
    ${props =>
        props.inverse
            ? css`
                  background: var(--color-black);
                  color: var(--color-white);
              `
            : ''}
`

const SignupContent = styled(Content)`
    padding: 4rem 4rem;
    overflow: hidden;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        padding-top: 6rem;
        width: 100%;
    }
`

const SignupModal = ({ autofocus, closeModal }) => (
    <SignupWrapper>
        <ModalRow gap="0" grid="2">
            <Show.Desktop>
                <Content>
                    <Header as="h4">{localize('Start trading with Deriv')}</Header>
                    <br />
                    <Text>{localize('Join over 1 million traders worldwide')}</Text>
                </Content>
            </Show.Desktop>
            <SignupContent>
                <Signup autofocus={autofocus} closeModal={closeModal} />
            </SignupContent>
        </ModalRow>
    </SignupWrapper>
)

SignupModal.propTypes = {
    autofocus: PropTypes.bool,
    closeModal: PropTypes.func,
}

export default SignupModal
