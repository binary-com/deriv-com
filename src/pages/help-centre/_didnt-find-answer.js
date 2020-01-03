import React from 'react'
import styled from 'styled-components'
import { StyledLink } from 'components/elements'
import { localize } from 'components/localization'
import { FlexGridContainer } from 'components/containers'
import ContactUsIcon from 'images/svg/contact_us.svg'

const DFYAWrapper = styled.section`
    background-color: var(--color-grey-1);
`
const DFYASection = styled(FlexGridContainer)`
    padding: 3.2rem 0;
    justify-content: flex-start;
    align-items: center;

    & > * {
        width: auto;
    }
`

export const DidntFindYourAnswerBanner = () => (
    <DFYAWrapper>
        <DFYASection>
            <ContactUsIcon />
            <StyledLink
                size="var(--text-size-header-1)"
                to="/contact-us"
                weight="bold"
                color="black"
            >
                {localize('Didn’t find your answer? Contact us')}
            </StyledLink>
        </DFYASection>
    </DFYAWrapper>
)
