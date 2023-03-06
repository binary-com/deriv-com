import React from 'react'
import styled from 'styled-components'
import { NavLink, StyledLinkMarket, MarketWrapper, Wrapper } from '../../styles/nav-styles'
import NavLinkCard, { NavLinkCardTypes } from '../nav-link-card'
import device from 'themes/device'
import { Localize, localize } from 'components/localization'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { TString } from 'types/generics'

const StyledWrapper = styled(Wrapper)`
    justify-content: center;

    @media ${device.tabletL} {
        justify-content: flex-start;
    }
`
const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    line-height: 1.2;
    margin-left: 13.3rem;
    white-space: nowrap;

    @media (max-width: 1300px) {
        font-size: 12px;
        margin-left: 0;
    }
`

const nav_links: Omit<NavLinkCardTypes, 'page'>[] = [
    {
        active: 'forex',
        to: '/markets/forex/',
        title: '_t_Forex_t_',
    },
    {
        active: 'derived',
        to: '/markets/synthetic/',
        title: '_t_Derived_t_',
    },
    {
        active: 'stock',
        to: '/markets/stock/',
        title: '_t_Stocks & indices_t_',
    },
    {
        active: 'cryptocurrencies',
        to: '/markets/cryptocurrencies/',
        title: '_t_Cryptocurrencies_t_',
    },
    {
        active: 'commodities',
        to: '/markets/commodities/',
        title: '_t_Commodities_t_',
    },
]

const NavMarketDesktop = () => {
    return (
        <MarketWrapper>
            <StyledWrapper>
                <NavigationBar>
                    {nav_links.map((navLink) => (
                        <NavLinkCard
                            key={navLink.title}
                            page="markets"
                            active={navLink.active}
                            to={navLink.to}
                            title={navLink.title}
                        />
                    ))}
                </NavigationBar>
            </StyledWrapper>
        </MarketWrapper>
    )
}

export default NavMarketDesktop
