import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { NavLink, StyledLink } from '../../styles/nav-styles'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import LogoPartner from 'images/svg/layout/logo-conference.svg'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { Header } from 'components/elements'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    width: 100%;
    z-index: 100;
    background-color: var(--color-black);

    @media ${device.tabletS} {
        justify-content: flex-start;
    }
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    padding: 22px 22px 22px 120px;
    font-size: 16px;
    color: var(--color-white);

    @media ${device.tabletL} {
        padding: 0 22px;
    }
`
export const StyledLogoLink = styled(LocalizedLink)`
    width: 28px;
    height: 28px;
    margin-right: 20px;
`
const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    padding: 22px 120px 22px 0;
    line-height: 1.2;
    margin-left: 13.3rem;
    white-space: nowrap;

    @media (max-width: 1300px) {
        font-size: 12px;
        margin-left: 0;
        padding: 22px 20px;
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

const NavLinkCard = ({ title, active, ...props }: NavLinkCardTypes) => {
    const current_page = useActiveLinkState('conference')
    return (
        <NavLink>
            <StyledLink
                active={current_page === active}
                activeClassName="active"
                aria-label={title}
                {...props}
            >
                {title}
            </StyledLink>
        </NavLink>
    )
}

const NavConferenceDesktop = () => {
    return (
        <StyledWrapper>
            <LeftSide>
                <StyledLogoLink to="/conference/" aria-label="Conference">
                    <img src={LogoPartner} alt="deriv logo" />
                </StyledLogoLink>
                <Header as="header" type="paragraph-1" color="white">
                    {localize('Deriv Affiliate Conference 2022')}
                </Header>
            </LeftSide>

            <NavigationBar>
                <NavLinkCard
                    active="schedule"
                    to="/conference/schedule/"
                    title={localize('Schedule')}
                />
            </NavigationBar>
        </StyledWrapper>
    )
}

export default NavConferenceDesktop
