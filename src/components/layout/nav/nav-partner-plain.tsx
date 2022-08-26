import React from 'react'
import styled from 'styled-components'
import { CFDWarning } from '../layout'
import { Wrapper, PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'
import { StyledLogoLink } from './components/partner/nav-partner-desktop'
import { Container } from 'components/containers'
import { LanguageSwitcher } from 'components/localization'
import LogoPartner from 'images/svg/layout/logo-partners.svg'

const StyledWrapper = styled(Wrapper)`
    justify-content: space-between;
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 30rem;
`

const LanguageWrapper = styled(Container)`
    & > div {
        margin-left: auto;
    }
`

const NavPartnersPlain = () => {
    return (
        <>
            <PartnerWrapper>
                <PartnerNavigationBarWrapper>
                    <StyledWrapper>
                        <LeftSide>
                            <StyledLogoLink to="/partners/" aria-label="Partners">
                                <img src={LogoPartner} alt="deriv logo" />
                            </StyledLogoLink>
                        </LeftSide>
                        <LanguageWrapper>
                            <LanguageSwitcher has_short_name />
                        </LanguageWrapper>
                    </StyledWrapper>
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
            <CFDWarning />
        </>
    )
}

export default NavPartnersPlain
