import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Desktop } from 'components/containers'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'

const Section = styled(SectionContainer)`
    display: flex;
    padding: 2rem 12rem 8rem;
    justify-content: center;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const StyledLinkButton = styled(LinkButton)`
    display: inline-flex;
    align-items: center;
    padding: 10px 16px;
    height: 40px;
    border: unset;
    width: auto;
    margin: auto;
`

const Accounts = () => {
    return (
        <Desktop>
            <Section>
                {/* TODO: Update link once available in deriv app */}
                <StyledLinkButton
                    external
                    type="derivx"
                    secondary
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                >
                    {localize('Go to Deriv X dashboard')}
                </StyledLinkButton>
            </Section>
        </Desktop>
    )
}

export default Accounts
