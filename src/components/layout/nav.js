// TODO: (discussion) make nav pure component, and move usage of nav to custom
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformsDropdown from '../custom/platforms-dropdown'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Button, LinkButton } from 'components/form'
import { Container, Flex, SectionContainer } from 'components/containers'
import {
    OffCanvasMenu,
    OffCanvasMenuPartner,
    moveOffCanvasMenu,
    Text,
    QueryImage,
} from 'components/elements'
import {
    DesktopWrapper as DesktopShow,
    MobileWrapper as MobileShow,
} from 'components/containers/wrapper'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { SharedLinkStyle } from 'components/localization/localized-link'
import Login from 'common/login'
import device from 'themes/device'
import { affiliate_signin_url, affiliate_signup_url, deriv_app_url } from 'common/constants'
import {
    isLoggedIn,
    getLanguage,
    getDerivAppLocalizedURL,
    redirectToTradingPlatform,
    getBaseRef,
} from 'common/utility'
// Icons
import Logo from 'images/svg/layout/logo-deriv.svg'
import LogoPartner from 'images/svg/layout/logo-partners.svg'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import AcademyLogo from 'images/svg/academy-logo.svg'
import { CFDWarning } from 'components/layout'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

export const DesktopWrapper = styled.div`
    display: block;
    @media ${(props) => props.media || device.tabletL} {
        display: none;
    }
`

export const MobileWrapper = styled.div`
    display: none;
    @media ${(props) => props.media || device.tabletL} {
        display: block;
    }
`

const LanguageSwitcherNavDesktop = ({ no_language }) =>
    !no_language && <LanguageSwitcher short_name="true" is_high_nav />

// TODO: Proper refactor of shared nav sub components between the various nav bars
export const NavWrapperMain = styled.div`
    background-color: ${(props) => (props.is_transparent ? 'transparent' : 'var(--color-black)')};
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
`
export const NavWrapperPartners = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;

    .fresnel-between-start-tabletL {
        display: none;
    }
    @media ${device.tabletL} {
        .fresnel-between-start-tabletL {
            display: flex;
            width: 100%;
            align-items: center;
        }
    }
`

const InterimNav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background: var(--color-black);
`
export const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    max-width: ${(props) => props.mw || '16rem'};
    width: 100%;

    @media ${device.tabletS} {
        & svg,
        .gatsby-image-wrapper {
            width: 10rem;
        }
    }
    @media ${device.mobileL} {
        & svg,
        .gatsby-image-wrapper {
            width: 12rem;
        }
    }
`

export const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);
`

export const StyledNavMain = styled.nav`
    height: 7.2rem;
    width: 100%;
    position: relative;
    z-index: 1;
    @media ${device.bp1060} {
        height: auto;
    }
`

export const StyledNavPartners = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    width: 100%;
    position: relative;
    z-index: 1;
    @media ${device.tabletL} {
        height: auto;
    }
`

export const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
    padding: 1.2rem 0;
    justify-content: space-between;
    height: 7.2rem;
    @media ${device.laptopL} {
        width: ${({ width }) => width ?? '90%'};
    }
    @media ${device.laptop} {
        font-size: var(--text-size-xxs);
    }
    @media ${device.mobileM} {
        ${({ offset_px_mobile }) =>
            offset_px_mobile && `width: calc(100% - ${offset_px_mobile}px)`};
    }
`

Wrapper.propTypes = {
    offset_px_mobile: PropTypes.number,
}

export const NavLeftMain = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`

export const NavLeftPartners = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;

    @media (max-width: 991px) {
        display: none;
    }
`

const StaticWrapper = styled.nav`
    background: var(--color-black);
    display: flex;
    height: 10.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
const NavRight = styled.div`
    display: inline-flex;
    align-items: center;
    text-align: right;
    opacity: ${(props) => (props.mounted ? '1' : '0')};
    padding: 0;
    justify-content: center;
    transition: ${(props) => {
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
        ${(props) => {
            const ref_base = getBaseRef(props.button_ref)

            if (props.hide_signup_login) {
                return 0
            } else if (props.move && !props.hide_signup_login) {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 1
                }
                return 0
            } else {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 0

                    const calculation = ref_base.offsetWidth + 2
                    return `${calculation}px`
                }
                return '300px'
            }
        }}
    );

    > a {
        pointer-events: ${(props) => (props.move ? 'visible' : 'none')};
        cursor: ${(props) => (props.move ? 'pointer' : 'default')};
    }
    @media (max-width: 991px) {
        display: none;
    }
`
const NavGetTrading = styled.div`
    display: inline-flex;
    text-align: right;
    align-items: center;
    justify-content: center;
    padding: 0;
`
const NavLink = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    text-align: center;
    margin-right: 2.4rem;

    &:last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 1rem;
    }

    ${(props) => {
        if (props.margin) return 'margin: 0 4rem;'
    }}
`
export const StyledLink = styled(LocalizedLink)`
    ${SharedLinkStyle}
`
const StyledButton = styled.span`
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

const LinkSignupButton = styled(LinkButton)`
    opacity: 0;
    margin-left: 1.6rem;
    margin-right: 10px;
`

const HamburgerMenu = styled.img`
    cursor: pointer;
    display: none;
    width: 16px;
    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
    }
`
const HamburgerMenuPartners = styled.img`
    cursor: pointer;
    display: none;

    @media (max-width: 991px) {
        display: block;
        cursor: pointer;
    }
`

const CloseMenu = styled.img`
    cursor: pointer;
    display: none;
    width: 16px;

    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
    }
`
const CloseMenuPartners = styled.img`
    cursor: pointer;
    display: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const LogoLinkMobileMain = styled(LocalizedLink)`
    cursor: pointer;
    display: none;

    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
        margin-left: 2rem;
    }
`
const LogoLinkMobile = styled(LocalizedLink)`
    cursor: pointer;
    display: none;

    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
        margin-left: 2rem;
    }
`

const NowrapButton = styled(Button)`
    white-space: nowrap;
`

const MobileButton = styled(Button)`
    display: none;
    font-size: 14px;
    margin-left: ${({ margin_left }) => margin_left ?? '1.6rem'};
    @media (max-width: 1060px) {
        display: block;
    }
    @media ${device.mobileL} {
        font-size: 12px;
    }
`
const LinkMobileLogin = styled(LinkButton)`
    display: none;
    font-size: 14px;
    @media ${device.tabletL} {
        display: block;
        margin-left: auto;
    }
    @media ${device.mobileL} {
        font-size: var(--text-size-xxs);
        margin-left: 10px;
    }
`
const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

const MobileRightMain = styled.div`
    display: none;

    @media (max-width: 1060px) {
        display: flex;
        margin-left: auto;
        align-items: center;
    }
`
const LogoDescription = styled(Flex)`
    @media (max-width: 525px) {
        display: none;
    }
`

const handleLogin = () => {
    redirectToTradingPlatform()
    Login.redirectToLogin()
}

const handleGetTrading = () => {
    const sub_url = redirectToTradingPlatform()

    let trading_url_localized = getDerivAppLocalizedURL(
        `${deriv_app_url}/${sub_url}`,
        getLanguage(),
    )
    window.location.href = trading_url_localized
}

export const NavMobile = ({
    is_ppc,
    is_ppc_redirect,
    is_logged_in,
    hide_signup_login,
    academy_logo,
    no_language,
}) => {
    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = moveOffCanvasMenu()

    return (
        <Wrapper width="95%">
            {is_canvas_menu_open ? (
                <CloseMenu src={Close} alt="close menu" onClick={closeOffCanvasMenu} />
            ) : (
                <HamburgerMenu src={Hamburger} alt="hamburger" onClick={openOffCanvasMenu} />
            )}

            <LogoLinkMobileMain to="/" aria-label={localize('Home')}>
                <Flex>
                    <img src={LogoOnly} alt="logo only" width={115} />
                    <LogoDescription ai="center">
                        <Line />
                        {academy_logo ? (
                            <img src={AcademyLogo} alt="Academy" />
                        ) : (
                            <img src={LogoCombinedShape} alt="logo combined shape" />
                        )}
                    </LogoDescription>
                </Flex>
            </LogoLinkMobileMain>
            <MobileRightMain>
                {!no_language && <LanguageSwitcher short_name="true" is_high_nav />}
                {!hide_signup_login && (
                    <>
                        {is_logged_in ? (
                            <MobileButton margin_left="0.8rem" onClick={handleGetTrading} primary>
                                <span>{localize('Get Trading')}</span>
                            </MobileButton>
                        ) : (
                            <MobileButton
                                id="dm-mobile-nav-login-button"
                                margin_left="0.8rem"
                                onClick={handleLogin}
                                primary
                            >
                                <span>{localize('Log in')}</span>
                            </MobileButton>
                        )}
                    </>
                )}
            </MobileRightMain>
            <OffCanvasMenu
                is_canvas_menu_open={is_canvas_menu_open}
                closeOffCanvasMenu={closeOffCanvasMenu}
                is_ppc={is_ppc}
                is_ppc_redirect={is_ppc_redirect}
            />
        </Wrapper>
    )
}

export const NavDesktop = ({
    base,
    is_ppc,
    is_ppc_redirect,
    is_logged_in,
    hide_signup_login,
    academy_logo,
    no_language,
}) => {
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

        return () => {
            document.removeEventListener('scroll', buttonHandleScroll)
        }
    }, [])

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
                            loading="eager"
                        />
                    </LogoLink>
                    <Line />
                    {academy_logo ? (
                        <img src={AcademyLogo} alt="Academy" />
                    ) : (
                        <img src={LogoCombinedShape} alt="logo combined shape" />
                    )}
                </NavLeftMain>
                <NavCenter ref={navigation_bar_ref}>
                    <NavLink onClick={(e) => handleLinkClick('trade', e.target)}>
                        <StyledButton aria-label={localize('Trade')} active={checkActive('trade')}>
                            {localize('Trade')}
                        </StyledButton>
                    </NavLink>
                    <NavLink onClick={(e) => handleLinkClick('markets', e.target)}>
                        <StyledButton
                            aria-label={localize('Markets')}
                            active={checkActive('markets')}
                        >
                            {localize('Markets')}
                        </StyledButton>
                    </NavLink>
                    <NavLink onClick={(e) => handleLinkClick('about', e.target)}>
                        <StyledButton
                            aria-label={localize('About us')}
                            active={checkActive('about')}
                        >
                            {localize('About us')}
                        </StyledButton>
                    </NavLink>
                    <NavLink onClick={(e) => handleLinkClick('resources', e.target)}>
                        <StyledButton
                            aria-label={localize('Resources')}
                            active={checkActive('resources')}
                        >
                            {localize('Resources')}
                        </StyledButton>
                    </NavLink>
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

export const Nav = ({
    base,
    is_nav_transparent,
    is_ppc_redirect,
    is_ppc,
    hide_signup_login,
    academy_logo,
    no_language,
}) => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [is_transparent, setTransparent] = useState(is_nav_transparent)

    const handleTransparentNavScroll = useCallback(() => {
        const currentScrollPos = window.scrollY
        setTransparent(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 20) ||
                currentScrollPos < 10,
        )
        setPrevScrollPos(currentScrollPos)
    }, [])

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        window.addEventListener('scroll', handleTransparentNavScroll, { passive: true })

        let checkCookieChange = setInterval(() => {
            setLoggedIn(isLoggedIn())
        }, 800)

        return () => {
            clearInterval(checkCookieChange)
            window.removeEventListener('scroll', handleTransparentNavScroll)
        }
    }, [])

    return (
        <>
            <NavWrapperMain is_transparent={is_transparent}>
                <StyledNavMain>
                    <DesktopShow media={device.bp1060}>
                        <NavDesktop
                            no_language={no_language}
                            academy_logo={academy_logo}
                            base={base}
                            is_ppc={is_ppc}
                            is_ppc_redirect={is_ppc_redirect}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </DesktopShow>
                    <MobileShow media={device.bp1060}>
                        <NavMobile
                            no_language={no_language}
                            academy_logo={academy_logo}
                            is_ppc={is_ppc}
                            is_logged_in={is_logged_in}
                            hide_signup_login={hide_signup_login}
                        />
                    </MobileShow>
                </StyledNavMain>
            </NavWrapperMain>
            <CFDWarning />
        </>
    )
}

Nav.propTypes = {
    academy_logo: PropTypes.bool,
    base: PropTypes.string,
    hide_signup_login: PropTypes.bool,
    is_nav_transparent: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    no_language: PropTypes.bool,
}

NavDesktop.propTypes = {
    academy_logo: PropTypes.bool,
    base: PropTypes.string,
    hide_signup_login: PropTypes.bool,
    is_logged_in: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    no_language: PropTypes.bool,
}

LanguageSwitcherNavDesktop.propTypes = {
    no_language: PropTypes.bool,
}

NavMobile.propTypes = {
    academy_logo: PropTypes.bool,
    hide_signup_login: PropTypes.bool,
    is_logged_in: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    no_language: PropTypes.bool,
}

const Auto = styled(Flex)`
    @media ${device.mobileM} {
        width: 100%;
    }
`

const LeftButton = styled(LinkButton)`
    margin-left: 0.8rem;

    @media ${device.mobileL} {
        padding: 1rem;
    }
`

const StyledLogo = styled(LogoLink)`
    max-width: 31rem;

    @media ${device.mobileL} {
        display: none;
    }
    @media (max-width: 340px) {
        & svg {
            width: 11rem;
        }
    }
`

const NavInterimContainer = styled.div`
    position: relative;
`

export const NavInterim = ({ interim_type }) => (
    <InterimNav>
        <NavInterimContainer>
            <Container jc="space-between" p="2.4rem 0">
                <Flex ai="center" jc="flex-start">
                    <DesktopShow media={device.bp1060}>
                        <StyledLogo to={`/interim/${interim_type}`} aria-label={localize('Home')}>
                            <Flex ai="center">
                                <img src={Logo} alt="logo" width="190" height="27" />
                                <img
                                    src={LogoCombinedShape}
                                    alt="logo combined shape desktop"
                                    width="120"
                                    height="17"
                                />
                            </Flex>
                        </StyledLogo>
                    </DesktopShow>
                    <MobileShow media={device.bp1060}>
                        <LogoLinkMobile
                            to={`/interim/${interim_type}`}
                            aria-label={localize('Home')}
                        >
                            <Flex>
                                <img src={LogoOnly} alt="logo only 2" width="115" height="27" />
                                <LogoDescription ai="center">
                                    <Line />
                                    <img
                                        src={LogoCombinedShape}
                                        alt="logo combined shape mobile"
                                        width="120"
                                        height="17"
                                    />
                                </LogoDescription>
                            </Flex>
                        </LogoLinkMobile>
                    </MobileShow>
                </Flex>
                <Auto jc="flex-end" ai="center">
                    <LanguageSwitcher short_name="true" />
                    <LeftButton secondary to="/">
                        {localize('Explore Deriv.com')}
                    </LeftButton>
                </Auto>
            </Container>
        </NavInterimContainer>
        <CFDWarning />
    </InterimNav>
)

export const NavStatic = ({ is_ppc }) => (
    <>
        <StaticWrapper>
            <LogoLink mw="31rem" to="/" aria-label={localize('Home')}>
                <Flex ai="center">
                    <img src={LogoOnly} alt="logo only nav static" width={160} height={27} />
                    <Line />
                    <img
                        src={LogoCombinedShape}
                        alt="logo combined shape nav static"
                        width={120}
                        height={17}
                    />
                </Flex>
            </LogoLink>
        </StaticWrapper>
        <CFDWarning is_ppc={is_ppc} />
    </>
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

const StyledNavCenter = styled.ul`
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: center;
    line-height: 1.2;
    margin-left: 13.3rem;
    white-space: nowrap;

    @media (max-width: 1300px) {
        font-size: 12px;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledNavRight = styled(NavRight)`
    margin-left: auto;
    transform: translateX(
        ${(props) => {
            const ref_base = getBaseRef(props.button_ref)
            if (props.move) {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 1
                }
                return '50px'
            } else {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 0

                    const calculation = ref_base.offsetWidth + 50
                    return `${calculation}px`
                }
                return '225px'
            }
        }}
    );

    > a {
        pointer-events: visible;
        cursor: pointer;
    }
    > a:last-child {
        pointer-events: ${(props) => (props.move ? 'visible' : 'none')};
        cursor: ${(props) => (props.move ? 'pointer' : 'default')};
        opacity: ${(props) => (props.move ? 1 : 0)};
    }
`

const StyledNavWrapper = styled(Wrapper)`
    justify-content: flex-start;

    @media ${device.tabletL} {
        justify-content: ${(props) => (props.no_login_signup ? 'flex-start' : 'space-between')};
    }

    ${LogoLinkMobile} {
        margin: 0 2.4rem;
    }
`

const Mobile = styled(MobileWrapper)`
    width: 100%;
`

const ResLogo = styled.img`
    width: 115px;
    @media ${device.mobileM} {
        width: 98px;
    }
    @media (max-width: 336px) {
        width: 82px;
    }
`

const NavLogoLink = styled(LogoLink)`
    @media (max-width: 1300px) {
        & svg,
        .gatsby-image-wrapper {
            width: 25rem;
        }
    }
    @media (max-width: 1150px) {
        & svg,
        .gatsby-image-wrapper {
            width: 23rem;
        }
    }
    @media (max-width: 1105px) {
        & svg,
        .gatsby-image-wrapper {
            width: 23rem;
        }
    }
`

const LSContainer = styled(Container)`
    text-align: right;
    margin-left: 200px;
`

const DesktopLS = styled(DesktopWrapper)`
    z-index: 2;
`

const StyledContainer = styled(Container)`
    margin: 0;
`

// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
export const NavPartners = ({ no_login_signup }) => {
    const nav_ref = useRef(null)
    const button_ref = useRef(null)
    const [show_button, showButton, hideButton] = moveButton()
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)
    const current_page = useActiveLinkState('partners')

    const buttonHandleScroll = useCallback(() => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }, [])

    useEffect(() => {
        setMounted(true)
        if (!no_login_signup) {
            document.addEventListener('scroll', buttonHandleScroll, {
                passive: true,
            })

            return () => {
                document.removeEventListener('scroll', buttonHandleScroll)
            }
        }
    }, [])

    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = moveOffCanvasMenu()
    return (
        <>
            <NavWrapperPartners ref={nav_ref}>
                <DerivHomeWrapper>
                    <HomeContainer justify="space-between">
                        <StyledContainer justify="flex-start">
                            <HomeLink to="/">
                                <Text color="grey-19" size="var(--text-size-xxs)">
                                    {localize('Deriv website')}
                                </Text>
                            </HomeLink>
                            <HomeLink to="/who-we-are/">
                                <Text color="grey-19" size="var(--text-size-xxs)">
                                    {localize('Who we are')}
                                </Text>
                            </HomeLink>
                            <HomeLink to="/contact_us/">
                                <Text color="grey-19" size="var(--text-size-xxs)">
                                    {localize('Contact us')}
                                </Text>
                            </HomeLink>
                        </StyledContainer>
                        <DesktopLS>
                            <LSContainer>
                                <LanguageSwitcher short_name="true" />
                            </LSContainer>
                        </DesktopLS>
                    </HomeContainer>
                </DerivHomeWrapper>
                <StyledNavPartners>
                    <StyledNavWrapper no_login_signup>
                        <NavLeftPartners>
                            <NavLogoLink to="/partners/" aria-label={localize('Partners')}>
                                <img src={LogoPartner} alt="logo partner" />
                            </NavLogoLink>
                        </NavLeftPartners>
                        <StyledNavCenter>
                            <NavLink>
                                <StyledLink
                                    active={current_page === 'affiliate'}
                                    activeClassName="active"
                                    to="/partners/affiliate-ib/"
                                    aria-label={localize('Affiliates and IBs')}
                                >
                                    {localize('Affiliates and IBs')}
                                </StyledLink>
                            </NavLink>
                            <NavLink>
                                <StyledLink
                                    active={current_page === 'payment'}
                                    activeClassName="active"
                                    to="/partners/payment-agent/"
                                    aria-label={localize('Payment agents')}
                                >
                                    {localize('Payment agents')}
                                </StyledLink>
                            </NavLink>
                            <NavLink>
                                <StyledLink
                                    active={current_page === 'api'}
                                    activeClassName="active"
                                    to=""
                                    type="api"
                                    target="_blank"
                                    external="true"
                                    rel="noopener noreferrer"
                                    aria-label={localize('API')}
                                >
                                    {localize('API')}
                                </StyledLink>
                            </NavLink>
                        </StyledNavCenter>
                        {!no_login_signup && (
                            <StyledNavRight
                                move={show_button}
                                button_ref={button_ref}
                                mounted={mounted}
                                has_scrolled={has_scrolled}
                            >
                                <LinkButton
                                    to={affiliate_signin_url}
                                    external="true"
                                    type="affiliate_sign_in"
                                    target="_blank"
                                    primary
                                    style={{ width: '16rem' }}
                                >
                                    <span>{localize('Affiliate & IB log in')}</span>
                                </LinkButton>
                                <LinkSignupButton
                                    id="dm-nav-affiliate-signup"
                                    to={affiliate_signup_url}
                                    external="true"
                                    type="affiliate_sign_up"
                                    target="_blank"
                                    ref={button_ref}
                                    secondary="true"
                                    style={{ width: '18rem' }}
                                >
                                    <span>{localize('Affiliate & IB sign up')}</span>
                                </LinkSignupButton>
                            </StyledNavRight>
                        )}

                        {is_canvas_menu_open ? (
                            <CloseMenuPartners
                                src={Close}
                                alt="close menu 2"
                                onClick={closeOffCanvasMenu}
                                width="16px"
                            />
                        ) : (
                            <HamburgerMenuPartners
                                src={Hamburger}
                                alt="hamburger menu2"
                                onClick={openOffCanvasMenu}
                                width="16px"
                            />
                        )}

                        <Mobile>
                            <Flex ai="center">
                                <LogoLinkMobile to="/partners/" aria-label={localize('Home')}>
                                    <ResLogo src={LogoOnly} alt="reslogo" />
                                </LogoLinkMobile>
                                <Flex ml="auto" ai="center" width="auto">
                                    <LanguageSwitcher short_name="true" is_high_nav />
                                </Flex>
                                {!no_login_signup && (
                                    <LinkMobileLogin
                                        to={affiliate_signin_url}
                                        type="affiliate_sign_in"
                                        external="true"
                                        target="_blank"
                                        primary
                                    >
                                        <DesktopShow media={device.bp1060}>
                                            <span>{localize('Affiliate & IB log in')}</span>
                                        </DesktopShow>
                                        <MobileShow media={device.bp1060}>
                                            <span>{localize('Log in')}</span>
                                        </MobileShow>
                                    </LinkMobileLogin>
                                )}
                            </Flex>
                        </Mobile>
                        <OffCanvasMenuPartner
                            is_canvas_menu_open={is_canvas_menu_open}
                            closeOffCanvasMenu={closeOffCanvasMenu}
                        />
                    </StyledNavWrapper>
                </StyledNavPartners>
            </NavWrapperPartners>
            <CFDWarning />
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
    is_ppc: PropTypes.bool,
    is_static: PropTypes.bool,
}

NavPartners.propTypes = {
    no_login_signup: PropTypes.bool,
}

NavInterim.propTypes = {
    interim_type: PropTypes.string,
}

const Section = styled(SectionContainer)`
    background-color: ${(props) => (props.background ? 'transparent' : 'var(--color-black)')};
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 0;
    padding: 4px 1%;
    height: 7.2rem;
    @media ${device.tabletL} {
        padding: 4px;
        height: 64px;
    }
    @media ${device.mobileL} {
        padding: 4px 0;
    }
`

export const NavSticky = ({ is_ppc, hide_signup_login, no_language }) => {
    const [is_logged_in, setLoggedIn] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const handleScrollBG = useCallback(() => {
        const currentScrollPos = window.pageYOffset
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
                currentScrollPos < 10,
        )
        setPrevScrollPos(currentScrollPos)
    }, [])

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        window.addEventListener('scroll', handleScrollBG)

        let checkCookieChange = setInterval(() => {
            setLoggedIn(isLoggedIn())
        }, 800)

        return () => {
            clearInterval(checkCookieChange)
            window.removeEventListener('scroll', handleScrollBG)
        }
    }, [])

    return (
        <>
            <Section background={visible}>
                <DesktopShow media={device.bp1060}>
                    <NavDesktop
                        no_language={no_language}
                        is_ppc={is_ppc}
                        is_logged_in={is_logged_in}
                        hide_signup_login={hide_signup_login}
                    />
                </DesktopShow>
                <MobileShow media={device.bp1060}>
                    <NavMobile
                        no_language={no_language}
                        is_ppc={is_ppc}
                        is_logged_in={is_logged_in}
                        hide_signup_login={hide_signup_login}
                    />
                </MobileShow>
            </Section>
            <CFDWarning no_eu_banner={true} />
        </>
    )
}

NavSticky.propTypes = {
    academy_logo: PropTypes.bool,
    base: PropTypes.string,
    hide_signup_login: PropTypes.bool,
    is_ppc: PropTypes.bool,
    is_ppc_redirect: PropTypes.bool,
    no_language: PropTypes.bool,
}
