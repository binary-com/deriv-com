import React, { useCallback, useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PlatformsDropdown from '../../custom/platforms-dropdown'
import { handleGetTrading, handleLogin, handleScroll, moveButton } from './util/nav-methods'
import { Line, LogoLink, NavLink, NavRight, Wrapper } from './styles/nav-styles'
import { NavTypes } from './models/nav-types'
import device from 'themes/device'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Button } from 'components/form'
import { QueryImage } from 'components/elements'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { SharedLinkStyle } from 'components/localization/localized-link'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import AcademyLogo from 'images/svg/academy-logo.svg'

const NowrapButton = styled(Button)`
    white-space: nowrap;
`
const NavGetTrading = styled.div`
    display: inline-flex;
    text-align: right;
    align-items: center;
    justify-content: center;
    padding: 0;
`
const StyledButton = styled.span<{ active: boolean }>`
    ${SharedLinkStyle};
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    @media ${device.laptopM} {
        padding: 0.5rem 0.8rem;
    }
`
const SignupButton = styled(Button)`
    margin-left: 1.6rem;
    opacity: 0;
`
const NavCenter = styled.ul`
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: center;
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
const NavLeftMain = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const LanguageSwitcherNavDesktop = ({ no_language }: { no_language: boolean }) =>
    !no_language && <LanguageSwitcher short_name="true" is_high_nav />

const NavDesktop = ({
    base,
    is_ppc,
    is_ppc_redirect,
    is_logged_in,
    hide_signup_login,
    academy_logo,
    no_language,
}: NavTypes) => {
    const data = useStaticQuery(query)
    const button_ref = useRef(null)
    const navigation_bar_ref = useRef(null)
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)
    const [active_dropdown, setActiveDropdown] = useState('')
    const [active_link_ref, setActiveLinkRef] = useState(null)
    const [active_dropdown_ref, setActiveDropdownRef] = useState(null)
    const [show_button, showButton, hideButton] = moveButton()
    const current_page = useActiveLinkState('main')

    const signup_url = is_ppc_redirect ? '/landing/signup/' : '/signup/'

    const buttonHandleScroll = useCallback(() => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }, [])

    const checkActive = (link_name) => link_name === active_dropdown || link_name === current_page

    const handleLinkClick = (dropdown, target) => {
        setActiveDropdown(dropdown)
        if (!target) return
        setActiveLinkRef(target)
    }

    const setDropdownRef = (new_ref) => setActiveDropdownRef(new_ref)

    useOutsideClick(navigation_bar_ref, () => setActiveDropdown(''), active_dropdown_ref)

    useEffect(() => {
        setMounted(true)
        document.addEventListener('scroll', buttonHandleScroll, { passive: true })
        return () => document.removeEventListener('scroll', buttonHandleScroll)
    }, [])

    const tabs = [
        {
            id: 1,
            title: 'Trade',
            active: checkActive('trade'),
            onClick: (e) => handleLinkClick('trade', e.target),
        },
        {
            id: 2,
            title: 'Markets',
            active: checkActive('markets'),
            onClick: (e) => handleLinkClick('markets', e.target),
        },
        {
            id: 3,
            title: 'About us',
            active: checkActive('about'),
            onClick: (e) => handleLinkClick('about', e.target),
        },
        {
            id: 4,
            title: 'Resources',
            active: checkActive('resources'),
            onClick: (e) => handleLinkClick('resources', e.target),
        },
    ]

    return (
        <>
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
                <NavLeftMain>
                    <LogoLink
                        to={!is_ppc_redirect ? base || '/' : '/landing'}
                        aria-label={localize('Home')}
                    >
                        <QueryImage
                            data={data['deriv']}
                            alt={localize('Deriv')}
                            max_width="16.4rem"
                            width="100%"
                            height="auto"
                        />
                    </LogoLink>
                    <Line />
                    {academy_logo ? (
                        <img src={AcademyLogo} alt={'Academy'} />
                    ) : (
                        <img src={LogoCombinedShape} alt={'logo combined shape'} />
                    )}
                </NavLeftMain>

                <NavCenter ref={navigation_bar_ref}>
                    {tabs.map((item) => {
                        return (
                            <NavLink key={`tab-${item.id}`} onClick={item.onClick}>
                                <StyledButton
                                    aria-label={localize(item.title)}
                                    active={item.active}
                                >
                                    {localize(item.title)}
                                </StyledButton>
                            </NavLink>
                        )
                    })}
                </NavCenter>

                {is_logged_in ? (
                    <NavGetTrading>
                        <LanguageSwitcherNavDesktop no_language={no_language} />

                        <NowrapButton onClick={handleGetTrading} primary>
                            <span>{localize('Get Trading')}</span>
                        </NowrapButton>
                    </NavGetTrading>
                ) : (
                    <NavRight
                        move={show_button}
                        hide_signup_login={hide_signup_login}
                        button_ref={button_ref}
                        mounted={mounted}
                        has_scrolled={has_scrolled}
                    >
                        <LanguageSwitcherNavDesktop no_language={no_language} />

                        {!hide_signup_login && (
                            <NowrapButton id="dm-nav-login-button" onClick={handleLogin} primary>
                                <span>{localize('Log in')}</span>
                            </NowrapButton>
                        )}
                        <LocalizedLink id="dm-signup" to={signup_url}>
                            {!hide_signup_login && (
                                <SignupButton id="dm-nav-signup" ref={button_ref} secondary="true">
                                    <span>{localize('Create free demo account')}</span>
                                </SignupButton>
                            )}
                        </LocalizedLink>
                    </NavRight>
                )}
            </Wrapper>
        </>
    )
}

export default NavDesktop
