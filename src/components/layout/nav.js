// TODO: (discussion) make nav pure component, and move usage of nav to custom
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformsDropdown from '../custom/platforms-dropdown'
import { LocalizedLink, localize } from 'components/localization'
import { Button } from 'components/form'
import { Container } from 'components/containers'
import { OffCanvasMenu, moveOffCanvasMenu, Text } from 'components/elements'
import { SharedLinkStyle } from 'components/localization/localized-link'
import Login from 'common/login'
import Partner from 'common/partner'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/logo-deriv.svg'
import LogoPartner from 'images/svg/logo-partners.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
import LogoOnly from 'images/svg/logo-deriv-only.svg'

const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
`
const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
`

const StyledNav = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    width: 100%;
    position: relative;
    @media ${device.tabletL} {
        height: auto;
    }
`
const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
    padding: 1.2rem 0;
    justify-content: space-between;
    height: 7.2rem;
    overflow: hidden;
    @media ${device.laptop} {
        font-size: var(--text-size-xxs);
    }
`
const NavLeft = styled.div`
    text-align: left;
    @media ${device.tabletL} {
        display: none;
    }
`

const StaticWrapper = styled.nav`
    background: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10.4rem;
`

const NavCenter = styled.ul`
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: space-between;
    @media ${device.tabletL} {
        display: none;
    }
`
const NavRight = styled.div`
    display: inline-flex;
    text-align: right;
    overflow: hidden;
    padding: 0;
    justify-content: center;
    transition: ${props => {
        if (props.move) {
            return 'all 0.25s'
        } else {
            if (props.has_scrolled) {
                return 'all 0.25s'
            }
            return 'none'
        }
    }};
    transform: translateX(
        ${props => {
            if (props.move) {
                return 0
            } else {
                if (props.button_ref.current && props.mounted) {
                    const calculation = props.button_ref.current.offsetWidth + 2
                    return `${calculation}px`
                }
                return '350px'
            }
        }}
    );
    @media ${device.tabletL} {
        display: none;
    }
`
const NavLink = styled.li`
    list-style-type: none;
    display: inline-block;
    text-align: left;
    ${props => {
        if (props.margin) return 'margin: 0 4rem;'
    }}
`
const StyledLink = styled(LocalizedLink)`
    ${SharedLinkStyle}
`
const StyledButton = styled.a`
    ${SharedLinkStyle}
    cursor: pointer;
    user-select: none;
`

const SignupButton = styled(Button)`
    margin-left: 1.6rem;
`

const HamburgerMenu = styled(Hamburger)`
    cursor: pointer;
    display: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const LogoLinkMobile = styled(LocalizedLink)`
    cursor: pointer;
    display: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const MobileLogin = styled(Button)`
    display: none;
    font-size: 14px;
    @media ${device.tabletL} {
        display: block;
    }
`
const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

export const Nav = () => {
    const nav_ref = useRef(null)
    const button_ref = useRef(null)
    const [is_platforms_open, setIsPlatformsOpen] = useState(false)
    const [has_animation, setHasAnimation] = useState(false)
    const [show_button, showButton, hideButton] = moveButton()
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)

    const buttonHandleScroll = () => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }
    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = moveOffCanvasMenu()
    useEffect(() => {
        setMounted(true)
        document.addEventListener('scroll', buttonHandleScroll, {
            passive: true,
        })
        const handleClickOutside = e => {
            if (!nav_ref.current.contains(e.target)) {
                setIsPlatformsOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('scroll', buttonHandleScroll)
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])
    const handleLogin = () => {
        Login.redirectToLogin()
    }
    const handleMenuClick = () => {
        is_canvas_menu_open ? closeOffCanvasMenu() : openOffCanvasMenu()
    }
    const handlePlatformsClick = () => {
        setIsPlatformsOpen(!is_platforms_open)
        setHasAnimation(true)
    }
    const handleNormalLink = () => {
        setHasAnimation(false)
    }

    return (
        <NavWrapper ref={nav_ref}>
            <StyledNav>
                <PlatformsDropdown is_open={is_platforms_open} has_animation={has_animation} />
                <Wrapper>
                    <NavLeft>
                        <LogoLink to="/" aria-label={localize('Home')}>
                            <Logo />
                        </LogoLink>
                    </NavLeft>
                    <NavCenter>
                        <NavLink onClick={handlePlatformsClick}>
                            <StyledButton aria-label={localize('Trade')} activeClassName="active">
                                {localize('Trade')}
                            </StyledButton>
                        </NavLink>
                        <NavLink onClick={handleNormalLink} margin>
                            <StyledLink
                                activeClassName="active"
                                to="/about/"
                                aria-label={localize('About us')}
                                partiallyActive={true}
                            >
                                {localize('About us')}
                            </StyledLink>
                        </NavLink>
                        <NavLink>
                            <StyledLink
                                activeClassName="active"
                                to="/help-centre/"
                                aria-label={localize('Help Centre')}
                                partiallyActive={true}
                            >
                                {localize('Help Centre')}
                            </StyledLink>
                        </NavLink>
                    </NavCenter>
                    <NavRight
                        move={show_button}
                        button_ref={button_ref}
                        mounted={mounted}
                        has_scrolled={has_scrolled}
                    >
                        <Button onClick={handleLogin} primary>
                            <span>{localize('Log in')}</span>
                        </Button>
                        <LocalizedLink to="/signup/">
                            <SignupButton ref={button_ref} secondary="true">
                                <span>{localize('Create demo account')}</span>
                            </SignupButton>
                        </LocalizedLink>
                    </NavRight>
                    <HamburgerMenu onClick={handleMenuClick} width="16px" />
                    <LogoLinkMobile to="/" aria-label={localize('Home')}>
                        <LogoOnly width="115px" />
                    </LogoLinkMobile>
                    <MobileLogin onClick={handleLogin} primary>
                        <span>{localize('Log in')}</span>
                    </MobileLogin>
                    <OffCanvasMenu
                        is_canvas_menu_open={is_canvas_menu_open}
                        closeOffCanvasMenu={closeOffCanvasMenu}
                    />
                </Wrapper>
            </StyledNav>
        </NavWrapper>
    )
}

export const NavStatic = () => (
    <StaticWrapper>
        <StyledLink to="/">
            <Logo />
        </StyledLink>
    </StaticWrapper>
)

const DerivHomeWrapper = styled.div`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 3rem;
`

const HomeLink = styled(LocalizedLink)`
    margin-right: 3.2rem;
    text-decoration: none;
`

const HomeContainer = styled(Container)`
    height: 100%;
`

const StyledNavCenter = styled(NavCenter)`
    margin-left: 13.3rem;
`

const StyledNavRight = styled(NavRight)`
    margin-left: auto;
`

// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
export const NavPartners = () => {
    const nav_ref = useRef(null)
    const button_ref = useRef(null)
    const [show_button, showButton, hideButton] = moveButton()
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)

    const buttonHandleScroll = () => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }
    useEffect(() => {
        setMounted(true)
        document.addEventListener('scroll', buttonHandleScroll, {
            passive: true,
        })
        return () => {
            document.removeEventListener('scroll', buttonHandleScroll)
        }
    }, [])
    return (
        <>
            <NavWrapper ref={nav_ref}>
                <DerivHomeWrapper>
                    <HomeContainer justify="flex-start">
                        <HomeLink to="/">
                            <Text color="grey-19" size="var(--text-size-xxs)">
                                {localize('Deriv homepage')}
                            </Text>
                        </HomeLink>
                        <HomeLink to="/about">
                            <Text color="grey-19" size="var(--text-size-xxs)">
                                {localize('About us')}
                            </Text>
                        </HomeLink>
                        <HomeLink to="/contact-us">
                            <Text color="grey-19" size="var(--text-size-xxs)">
                                {localize('Contact us')}
                            </Text>
                        </HomeLink>
                    </HomeContainer>
                </DerivHomeWrapper>
                <StyledNav>
                    <Wrapper>
                        <NavLeft>
                            <LogoLink to="/partners" aria-label={localize('Partners')}>
                                <LogoPartner />
                            </LogoLink>
                        </NavLeft>
                        <StyledNavCenter>
                            <NavLink>
                                <StyledLink
                                    activeClassName="active"
                                    to="/partners/"
                                    aria-label={localize('Affiliate & IB')}
                                    partiallyActive={true}
                                >
                                    {localize('Affiliate & IB')}
                                </StyledLink>
                            </NavLink>
                        </StyledNavCenter>
                        <StyledNavRight
                            move={show_button}
                            button_ref={button_ref}
                            mounted={mounted}
                            has_scrolled={has_scrolled}
                        >
                            <Button onClick={Partner.redirectToLogin} primary>
                                <span>{localize('Affiliate & IB log in')}</span>
                            </Button>
                            <SignupButton
                                onClick={Partner.redirectToSignup}
                                ref={button_ref}
                                secondary="true"
                            >
                                <span>{localize('Affiliate & IB sign up')}</span>
                            </SignupButton>
                        </StyledNavRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

function moveButton(is_visible = false) {
    const [show_button, setShowButton] = useState(is_visible)
    const showButton = () => setShowButton(!show_button)
    const hideButton = () => setShowButton(false)
    return [show_button, showButton, hideButton]
}

NavStatic.propTypes = {
    is_static: PropTypes.bool,
}
