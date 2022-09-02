// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import NavDesktop from './components/nav-desktop'
import NavMarketDesktop from './components/markets/nav-markets-desktop'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'

const NavMarkets = () => {
    return (
        <>
            <PartnerWrapper>
                <NavDesktop />
                <PartnerNavigationBarWrapper>
                    <NavMarketDesktop />
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
        </>
    )
}

export default NavMarkets
