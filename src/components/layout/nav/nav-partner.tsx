// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import { CFDWarning } from '../layout'
import MainNav from './components/partner/main-nav'
import NavPartnerMobile from './components/partner/nav-partner-mobile'
import NavPartnerDesktop from './components/partner/nav-partner-desktop'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'

type NavPartnersProps = {
    hide_login_signup: boolean
}

const NavPartners = ({ hide_login_signup }: NavPartnersProps) => {
    return (
        <>
            <PartnerWrapper>
                <MainNav />
                <PartnerNavigationBarWrapper>
                    <NavPartnerDesktop hide_login_signup={hide_login_signup} />
                    <NavPartnerMobile hide_login_signup={hide_login_signup} />
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
            <CFDWarning />
        </>
    )
}

export default NavPartners
