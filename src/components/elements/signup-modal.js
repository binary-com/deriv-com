import React from 'react'
import styled, { css } from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'
import { Header, Text } from './typography'
import { localize } from '../localization'

const SignupWrapper = styled.article`
    background-color: var(--color-grey-1);
    width: 80rem;
    height: 57.3rem;
    border-radius: 6px;
    overflow: auto;
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
`

const HeaderWrapper = styled(Header)`
    max-width: 75%;
`
const CaptionDesc = styled(Text)`
    padding: var(--text-size-s);
`

const SignupModal = () => (
    <SignupWrapper>
        <ModalRow>
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
                <CaptionDesc color="white" align="center">
                    {localize('Go ahead, try it for yourself.')}
                </CaptionDesc>
            </Content>
            <SignupContent>
                <Signup autofocus />
            </SignupContent>
        </ModalRow>
    </SignupWrapper>
)

export default SignupModal
