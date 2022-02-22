// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import styled from 'styled-components'
import { CFDWarning } from '../layout'
import MainNav from './components/partner/main-nav'
import NavPartnerMobile from './components/partner/nav-partner-mobile'
import NavPartnerDesktop from './components/partner/nav-partner-desktop'
import device from 'themes/device'

type NavPartnersProps = {
    hide_login_signup?: boolean
}

const NavigationBarWrapper = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    width: 100%;
    position: relative;
    z-index: 1;
    @media ${device.tabletL} {
        height: auto;
    }
`

const Wrapper = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;

    .fresnel-between-start-tabletL {
        display: none;
    }
    @media ${device.tabletL} {
        .fresnel-between-start-tabletL {
            display: flex;
            width: 100%;
            align-items: center;
        }
    }
`

const NavPartners = ({ hide_login_signup }: NavPartnersProps) => {
    return (
        <>
            <Wrapper>
                <MainNav />
                <NavigationBarWrapper>
                    <NavPartnerDesktop hide_login_signup={hide_login_signup} />
                    <NavPartnerMobile hide_login_signup={hide_login_signup} />
                </NavigationBarWrapper>
            </Wrapper>
            <CFDWarning />
        </>
    )
}

export default NavPartners
