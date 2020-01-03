import React from 'react'
import styled from 'styled-components'
import { StyledLink } from 'components/elements'
import { localize } from 'components/localization'
import { FlexGridContainer } from 'components/containers'

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

export const DidntFindYourAnswerBanner = () => (
    <DFYAWrapper>
        <DFYASection>
            <StyledLink to="/contact-us" weight="bold" color="black">
                {localize('Didn’t find your answer? Contact us')}
            </StyledLink>
        </DFYASection>
    </DFYAWrapper>
)
