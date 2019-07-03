import React from 'react'
import styled from 'styled-components'
import Row from '../containers/row'
import Signup from '../form/signup'

const SignupWrapper = styled.div`
    background-color: var(--color-grey-1);
    width: 50vw;
    border-radius: 6px;
`

const LeftContent = styled.div`
    background: var(--color-black);
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
`

const RightContent = styled.div`
    justify-content: center;
    align-items: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    display: flex;
    flex-direction: column;
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
            <LeftContent>
                <CaptionTitle>
                    The ultimate trading experience is just a few clicks away.
                </CaptionTitle>
                <CaptionDesc>Go ahead, try it for yourself.</CaptionDesc>
            </LeftContent>
            <RightContent>
                <Signup />
            </RightContent>
        </Row>
    </SignupWrapper>
)

export default SignupModal
