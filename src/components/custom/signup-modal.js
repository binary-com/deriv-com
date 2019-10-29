import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Signup from './signup'
import { FlexGridContainer, Show } from 'components/containers'
import { localize } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const SignupWrapper = styled.article`
    background-color: var(--color-grey-1);
    width: 80rem;
    height: 57.3rem;
    border-radius: 6px;
    overflow: auto;

    @media ${device.tabletL} {
        width: 300px;
        height: 42rem;
    }
`

const ModalRow = styled(FlexGridContainer)`
    height: 100%;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 100%;
    ${props =>
        props.inverse
            ? css`
                  background: var(--color-black);
                  color: var(--color-white);
              `
            : ''}
`

const SignupContent = styled(Content)`
    padding-top: 8rem;
    padding-bottom: 3rem;
    overflow: hidden;

    @media ${device.tabletL} {
        padding-top: 6rem;
    }
`

const HeaderWrapper = styled(Header)`
    max-width: 75%;
`

const SignupModal = ({ autofocus, closeModal }) => (
    <SignupWrapper>
        <ModalRow gap="0" grid="2">
            <Show.Desktop>
                <Content inverse>
                    <HeaderWrapper as="h4" weight="normal" color="white" align="center">
                        {localize('The ultimate trading experience is just a few clicks away.')}
                    </HeaderWrapper>
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
