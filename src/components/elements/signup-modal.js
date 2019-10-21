import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'
import { localize } from '../localization'
import { Header } from './typography'
import Show from 'components/containers/show'
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

const ModalRow = styled(Row)`
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

    @media ${device.tabletL} {
        padding-top: 6rem;
    }
`

const HeaderWrapper = styled(Header)`
    max-width: 75%;
`

const SignupModal = ({ autofocus, closeModal }) => (
    <SignupWrapper>
        <ModalRow>
            <Show.Desktop>
                <Content inverse>
                    <HeaderWrapper
                        as="h4"
                        weight="normal"
                        color="white"
                        align="center"
                    >
                        {localize(
                            'The ultimate trading experience is just a few clicks away.',
                        )}
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
