import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { NavLink, StyledLink } from '../../styles/nav-styles'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import LogoPartner from 'images/svg/layout/logo-conference.svg'
import { LocalizedLink } from 'components/localization'

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
`
const LeftSide = styled.div`
    width: 100%;
    padding: 22px 0 22px 120px;
    font-size: 16px;
    color: var(--color-white);
`
export const StyledLogoLink = styled(LocalizedLink)`
    width: 28px;
    height: 28px;
    padding-right: 20px;
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
    const current_page = useActiveLinkState('conference')
    return (
        <NavLink>
            <StyledLink
                active={current_page === active}
                activeClassName="active"
                aria-label={title}
                {...rest}
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
                Conferencia de Alidos da Deriv 2022
            </LeftSide>

            <NavigationBar>
                <NavLinkCard active="venue" to="/conference/venue/" title={'The Venue'} />

                <NavLinkCard active="spealers" to="/conference/speakers/" title={'Speakers'} />

                <NavLinkCard active="schedule" to="/conference/schedule/" title={'The Schedule'} />
            </NavigationBar>
        </StyledWrapper>
    )
}

export default NavConferenceDesktop
