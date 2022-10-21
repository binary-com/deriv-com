import React from 'react'
import styled from 'styled-components'
import MainNav from './components/partner/main-nav'
import { StyledLogoLink } from './components/partner/nav-partner-desktop'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { Container } from 'components/containers'
import device from 'themes/device'
import LogoBugBounty from 'images/svg/layout/logo-bug-bounty.svg'
import { CFDWarning } from 'components/layout'

const Wrapper = styled(Container)`
    height: 7.2rem;
    padding: 1.2rem 0;
`
const SubmissionButton = styled(LinkButton)`
    color: var(--color-white);
    font-size: 14px;
    width: 16rem;

    @media ${device.tabletL} {
        padding: 8px 16px 7px;
        font-size: 12px;
        width: auto;
    }
`
const Logo = styled.img`
    max-width: 30rem;
    @media ${device.tabletL} {
        width: 170px;
        margin-right: 10px;
    }
`

const NavSecurity = () => {
    return (
        <>
            <PartnerWrapper>
                <MainNav is_security />
                <PartnerNavigationBarWrapper>
                    <Wrapper jc="space-between">
                        <StyledLogoLink to="/" aria-label="Bug bounty">
                            <Logo src={LogoBugBounty} alt="logo bug bounty" />
                        </StyledLogoLink>

                        <SubmissionButton
                            external
                            tertiary
                            to="https://hackerone.com/binary"
                            target="_blank"
                        >
                            {localize('Submit a report')}
                        </SubmissionButton>
                    </Wrapper>
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
            <CFDWarning />
        </>
    )
}

export default NavSecurity
