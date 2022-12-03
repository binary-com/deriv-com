// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import NavDesktop from './components/nav-desktop'
import NavMarketDesktop from './components/markets/nav-market-desktop'
import NavMobile from './components/nav-mobile'
import NavTemplate from './components/nav-template'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'
import useAuthCheck from 'components/hooks/use-auth-check'

const NavMarkets = () => {
    const [is_logged_in] = useAuthCheck()

    return (
        <NavTemplate>
            <PartnerWrapper>
                <NavDesktop is_logged_in={is_logged_in} />
                <NavMobile is_logged_in={is_logged_in} />
                <PartnerNavigationBarWrapper>
                    <NavMarketDesktop />
                </PartnerNavigationBarWrapper>
            </PartnerWrapper>
        </NavTemplate>
    )
}

export default NavMarkets
