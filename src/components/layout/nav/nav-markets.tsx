// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import NavDesktop from './components/nav-desktop'
import NavMarketDesktop from './components/markets/nav-market-desktop'
import NavMobile from './components/nav-mobile'
import NavTemplate from './components/nav-template'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'

const NavMarkets = () => {
    return (
        <NavTemplate>
            <PartnerWrapper>
                <NavDesktop />
                <NavMobile />
                <PartnerNavigationBarWrapper id="available-card">
                    <NavMarketDesktop />
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
        </NavTemplate>
    )
}

export default NavMarkets
