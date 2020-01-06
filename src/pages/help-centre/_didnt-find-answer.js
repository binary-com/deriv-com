import React from 'react'
import styled from 'styled-components'
import { StyledLink } from 'components/elements'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import ContactUsIcon from 'images/svg/contact_us.svg'
import device from 'themes/device'

const DFYAWrapper = styled.section`
    background-color: var(--color-grey-1);
`
const DFYASection = styled(Container)`
    padding: 3.2rem 0;
    justify-content: flex-start;
    align-items: center;

    & > * {
        width: auto;
    }

    @media ${device.tabletL} {
        ${StyledLink} {
            font-size: var(--text-size-sm);
        }
    }
`
const StyledIcon = styled(ContactUsIcon)`
    margin-right: 1.5rem;

    @media ${device.tabletL} {
        width: 30px;
        height: 30px;
    }
`

export const DidntFindYourAnswerBanner = () => (
    <DFYAWrapper>
        <DFYASection>
            <StyledIcon />
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
