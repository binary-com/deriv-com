import React from 'react'
import styled, { css } from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'
import { Header, Text } from './topography'

const SignupWrapper = styled.article`
    background-color: var(--color-grey-1);
    width: 50vw;
    max-width: 80rem;
    border-radius: 6px;
    overflow: auto;
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
        <Row>
            <Content inverse>
                <HeaderWrapper
                    as="h4"
                    weight="normal"
                    color="white"
                    align="center"
                >
                    The ultimate trading experience is just a few clicks away.
                </HeaderWrapper>
                <CaptionDesc color="white">
                    Go ahead, try it for yourself.
                </CaptionDesc>
            </Content>
            <Content>
                <Signup />
            </Content>
        </Row>
    </SignupWrapper>
)

export default SignupModal
