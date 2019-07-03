import React from 'react'
import styled, { css } from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'

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

const CaptionTitle = styled.h3`
    font-size: 2.4rem;
    line-height: 1.25;
    max-width: 25rem;
`
const CaptionDesc = styled.p`
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 1.6rem;
`

const SignupModal = () => (
    <SignupWrapper>
        <Row>
            <Content inverse>
                <CaptionTitle>
                    The ultimate trading experience is just a few clicks away.
                </CaptionTitle>
                <CaptionDesc>Go ahead, try it for yourself.</CaptionDesc>
            </Content>
            <Content>
                <Signup />
            </Content>
        </Row>
    </SignupWrapper>
)

export default SignupModal
