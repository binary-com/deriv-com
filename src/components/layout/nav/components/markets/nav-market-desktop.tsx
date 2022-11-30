import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { NavLink, StyledLinkMarket, MarketWrapper, Wrapper } from '../../styles/nav-styles'
import device from 'themes/device'
import { localize } from 'components/localization'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'

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
type NavLinkCardTypes = {
    to: string
    title: ReactElement
    active?: string
    type?: string
    target?: string
    external?: string
    rel?: string
}

const NavLinkCard = ({ title, active, ...rest }: NavLinkCardTypes) => {
    const current_page = useActiveLinkState('markets')
    return (
        <NavLink className={active}>
            <StyledLinkMarket
                active={current_page === active}
                activeClassName="active"
                aria-label={title}
                {...rest}
            >
                {title}
            </StyledLinkMarket>
        </NavLink>
    )
}

const NavMarketDesktop = () => {
    return (
        <MarketWrapper>
            <StyledWrapper>
                <NavigationBar>
                    <NavLinkCard active="forex" to="/markets/forex/" title={localize('Forex')} />
                    <NavLinkCard
                        active="derived"
                        to="/markets/synthetic/"
                        title={localize('Derived')}
                    />
                    <NavLinkCard
                        active="stock"
                        to="/markets/stock/"
                        title={localize('Stocks & indices')}
                    />
                    <NavLinkCard
                        active="cryptocurrencies"
                        to="/markets/cryptocurrencies/"
                        title={localize('Cryptocurrencies')}
                    />
                    <NavLinkCard
                        active="commodities"
                        to="/markets/commodities/"
                        title={localize('Commodities')}
                    />
                </NavigationBar>
            </StyledWrapper>
        </MarketWrapper>
    )
}

export default NavMarketDesktop
