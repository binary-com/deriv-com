import React from 'react'
import styled from 'styled-components'
import { localize, LocalizedLink } from 'components/localization'
import LetterSVG from 'images/svg/letter.svg'
import { FlexGridContainer } from 'components/containers/container'
import device from 'themes/device'

const DFYAWrapper = styled.section`
    background-color: var(--color-grey-1);
`
const DFYASection = styled(FlexGridContainer)`
    padding: 3.2rem 0;
    justify-content: flex-start;
    & > * {
        width: auto;
        cursor: pointer;
    }
`
const StyledLink = styled(LocalizedLink)`
    font-size: 3rem;
    color: var(--color-black-3);
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
        margin-right: 2.4rem;
    }
    :hover {
        text-decoration: underline;
        color: var(--color-red);
    }

    &::after {
        content: '>';
        display: inline-block;
        margin-left: 0.4rem;
        font-weight: 300;
        text-decoration: none;
        color: var(--color-red);
    }

    @media ${device.tabletL} {
        font-size: 2rem;
    }
`
const DidntFindYourAnswer = () => (
    <DFYAWrapper>
        <DFYASection>
            <StyledLink to="#">
                <LetterSVG />
                {localize('Didn’t find your answer?')}
            </StyledLink>
        </DFYASection>
    </DFYAWrapper>
)

export default DidntFindYourAnswer
