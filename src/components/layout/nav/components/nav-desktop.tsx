import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PlatformsDropdown from '../../../custom/platforms-dropdown'
import { DesktopWrapper, NavLink, Wrapper } from '../styles/nav-styles'
import LogoSection from './logo-section'
import RightSection from './right-section'
import device from 'themes/device'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { Localize } from 'components/localization'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { SharedLinkStyle } from 'components/localization/localized-link'

type NavDesktopProps = {
    base?: string
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    is_logged_in: boolean
    hide_signup_login?: boolean
    hide_language_switcher?: boolean
    hide_get_trading?: boolean
}

type TabProps = {
    active: boolean
}

type ActiveDropdownTypes = 'trade' | 'markets' | 'about' | 'resources' | ''

const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0;
    line-height: 1.2;

    @media (max-width: 1227px) {
        font-size: 14px;
    }
    @media (max-width: 1175px) {
        font-size: 12px;
    }
    @media (max-width: 1116px) {
        font-size: 11px;
    }
    @media (max-width: 991px) {
        display: none;
    }
`
const Tab = styled.span<TabProps>`
    ${SharedLinkStyle};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    @media ${device.laptopM} {
        padding: 0.5rem 0.8rem;
    }
`

const links = [
    { active: 'trade', title: <Localize translate_text="Trade" /> },
    { active: 'markets', title: <Localize translate_text="Markets" /> },
    { active: 'about', title: <Localize translate_text="About us" /> },
    { active: 'resources', title: <Localize translate_text="Resources" /> },
]

const NavDesktop = ({
    base,
    is_ppc,
    is_ppc_redirect,
    is_logged_in,
    hide_signup_login,
    hide_language_switcher,
    hide_get_trading,
}: NavDesktopProps) => {
    const navigation_bar_ref = useRef(null)
    const current_page = useActiveLinkState('main')
    const [active_dropdown_ref, setActiveDropdownRef] = useState(null)
    const [active_dropdown, setActiveDropdown] = useState<ActiveDropdownTypes>('')
    const [active_link_ref, setActiveLinkRef] = useState(null)

    const checkActive = (tab_name: string) =>
        tab_name === active_dropdown || tab_name === current_page

    const handleTabClick = (dropdown, target) => {
        setActiveDropdown(dropdown)
        if (!target) return
        setActiveLinkRef(target)
    }

    const setDropdownRef = (new_ref) => setActiveDropdownRef(new_ref)

    useOutsideClick(navigation_bar_ref, () => setActiveDropdown(''), active_dropdown_ref)

    return (
        <DesktopWrapper>
            {active_dropdown && (
                <PlatformsDropdown
                    active_dropdown={active_dropdown}
                    key={active_dropdown}
                    current_ref={active_link_ref}
                    parent={active_dropdown}
                    is_ppc={is_ppc}
                    is_ppc_redirect={is_ppc_redirect}
                    setActiveDropdown={setDropdownRef}
                />
            )}

            <Wrapper>
                <LogoSection
                    base={base}
                    is_ppc_redirect={is_ppc_redirect}
                    hide_get_trading={hide_get_trading}
                />

                <NavigationBar ref={navigation_bar_ref}>
                    {links.map(({ active, title }) => (
                        <NavLink
                            key={active}
                            isOpen={active === active_dropdown}
                            onClick={(e) => handleTabClick(active, e.target)}
                        >
                            <Tab aria-label={title} active={checkActive(active)}>
                                {title}
                            </Tab>
                        </NavLink>
                    ))}
                </NavigationBar>

                <RightSection
                    hide_language_switcher={hide_language_switcher}
                    hide_signup_login={hide_signup_login}
                    is_logged_in={is_logged_in}
                    is_ppc_redirect={is_ppc_redirect}
                />
            </Wrapper>
        </DesktopWrapper>
    )
}

export default NavDesktop
