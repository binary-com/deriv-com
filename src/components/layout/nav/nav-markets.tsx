// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import NavDesktop from './components/nav-desktop'
import NavMarketDesktop from './components/markets/nav-market-desktop'
import NavMobile from './components/nav-mobile'
import NavTemplate from './components/nav-template'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const NavMarkets = () => {
    const { is_deriv_go = true } = usePlatformQueryParam()
    return (
        <NavTemplate transparent_background={is_deriv_go}>
            {!is_deriv_go && (
                <PartnerWrapper>
                    <NavDesktop />
                    <NavMobile />
                    <PartnerNavigationBarWrapper id="markets-list">
                        <NavMarketDesktop />
                    </PartnerNavigationBarWrapper>
                </PartnerWrapper>
            )}
        </NavTemplate>
    )
}

export default NavMarkets
