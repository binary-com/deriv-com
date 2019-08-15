import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import LetterSVG from 'images/svg/letter.svg'
import { FlexGridContainer } from 'components/containers/container'

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
    p {
        font-size: 3rem;
        font-weight: bold;
    }
    svg {
        margin-right: 0;
        padding-right: 2.4rem;
    }
`
const DidntFindYourAnswer = () => (
    <DFYAWrapper>
        <DFYASection>
            <LetterSVG />
            <p>{localize('Didn’t find your answer?')}</p>
        </DFYASection>
    </DFYAWrapper>
)

export default DidntFindYourAnswer
