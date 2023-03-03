// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
import React from 'react'
import { useQueryParam, StringParam } from 'use-query-params'
import NavDesktop from './components/nav-desktop'
import NavMarketDesktop from './components/markets/nav-market-desktop'
import NavMobile from './components/nav-mobile'
import NavTemplate from './components/nav-template'
import { PartnerWrapper, PartnerNavigationBarWrapper } from './styles/nav-styles'

const NavMarkets = () => {
    const [platform] = useQueryParam('platform', StringParam)

    return (
        <NavTemplate transparent_background={platform === 'derivgo'}>
            {platform !== 'derivgo' && platform !== '' ? (
                <PartnerWrapper>
                    <NavDesktop />
                    <NavMobile />
                    <PartnerNavigationBarWrapper id="markets-list">
                        <NavMarketDesktop />
                    </PartnerNavigationBarWrapper>
                </PartnerWrapper>
            ) : (
                <></>
            )}
        </NavTemplate>
    )
}

export default NavMarkets
