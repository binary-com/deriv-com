import React from 'react'
import { NavLink, StyledLinkMarket } from '../styles/nav-styles'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { Localize, localize } from 'components/localization'
import { TString } from 'types/generics'

export type NavLinkCardTypes = {
    page: string
    to: string
    title: TString
    active?: string
    type?: string
    target?: string
    external?: boolean
    rel?: string
}

const NavLinkCard = ({ page, title, active, ...rest }: NavLinkCardTypes) => {
    const current_page = useActiveLinkState(page)
    return (
        <NavLink className={active}>
            <StyledLinkMarket
                active={current_page === active}
                activeClassName="active"
                aria-label={localize(title)}
                {...rest}
            >
                <Localize translate_text={title} />
            </StyledLinkMarket>
        </NavLink>
    )
}

export default NavLinkCard
