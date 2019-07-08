import React from 'react'
import styled, { css } from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'
import { Header, Text } from './topography'
import { localize } from '../localization'

const SignupWrapper = styled.article`
    background-color: var(--color-grey-1);
    max-width: 80rem;
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

const HeaderWrapper = styled(Header)`
    max-width: 80%;
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
                <CaptionDesc color="white">
                    {localize('Go ahead, try it for yourself.')}
                </CaptionDesc>
            </Content>
            <Content>
                <Signup />
            </Content>
        </ModalRow>
    </SignupWrapper>
)

export default SignupModal
