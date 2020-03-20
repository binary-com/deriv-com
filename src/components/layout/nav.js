// TODO: (discussion) make nav pure component, and move usage of nav to custom
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformsDropdown from '../custom/platforms-dropdown'
import { NavPlatform, NavCompany, NavResources } from 'components/custom/other-platforms.js'
import { useOutsideClick } from 'components/hooks/outside-click'
import { LocalizedLink, localize } from 'components/localization'
import { Button } from 'components/form'
import { Container, Show } from 'components/containers'
import { OffCanvasMenu, OffCanvasMenuPartner, moveOffCanvasMenu, Text } from 'components/elements'
import { SharedLinkStyle } from 'components/localization/localized-link'
import Login from 'common/login'
import Partner from 'common/partner'
import device from 'themes/device'
// Icons
import Logo from 'images/svg/logo-deriv.svg'
import LogoPartner from 'images/svg/logo-partners.svg'
import LogoCareers from 'images/svg/logo-careers.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
import Close from 'images/svg/close-long.svg'
import LogoOnly from 'images/svg/logo-deriv-only.svg'

const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
`
const LogoLink = styled(LocalizedLink)`
    text-decoration: none;

    @media (max-width: 1150px) {
        & svg {
            width: 20rem;
        }
    }
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
    @media ${device.laptopL} {
        width: 90%;
    }
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
    margin-right: 2.4rem;

    &:last-child {
        margin-right: 0;
    }

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

const CloseMenu = styled(Close)`
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
    const button_ref = useRef(null)
    const [show_button, showButton, hideButton] = moveButton()
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)

    // trade
    const trade_ref = useRef(null)
    const link_trade_ref = useRef(null)
    const [is_trade_open, setIsTradeOpen] = useState(false)
    const [has_trade_animation, setHasTradeAnimation] = useState(false)
    const closeTrade = () => setIsTradeOpen(false)
    useOutsideClick(trade_ref, closeTrade, link_trade_ref)
    const handleTradeClick = () => {
        setIsTradeOpen(!is_trade_open)
        setHasTradeAnimation(true)
    }
    // add this when market is ready
    // market
    // const market_ref = useRef(null)
    // const link_market_ref = useRef(null)
    // const [is_market_open, setIsMarketOpen] = useState(false)
    // const [has_market_animation, setHasMarketAnimation] = useState(false)
    // const closeMarket = () => setIsMarketOpen(false)
    // useOutsideClick(market_ref, closeMarket, link_market_ref)
    // const handleMarketClick = () => {
    //     setIsMarketOpen(!is_market_open)
    //     setHasMarketAnimation(true)
    // }

    // company
    const company_ref = useRef(null)
    const link_company_ref = useRef(null)
    const [is_company_open, setIsCompanyOpen] = useState(false)
    const [has_company_animation, setHasCompanyAnimation] = useState(false)
    const closeCompany = () => setIsCompanyOpen(false)
    useOutsideClick(company_ref, closeCompany, link_company_ref)
    const handleCompanyClick = () => {
        setIsCompanyOpen(!is_company_open)
        setHasCompanyAnimation(true)
    }

    // resources
    const resources_ref = useRef(null)
    const link_resources_ref = useRef(null)
    const [is_resources_open, setIsResourcesOpen] = useState(false)
    const [has_resources_animation, setHasResourcesAnimation] = useState(false)
    const closeResources = () => setIsResourcesOpen(false)
    useOutsideClick(resources_ref, closeResources, link_resources_ref)
    const handleResourcesClick = () => {
        setIsResourcesOpen(!is_resources_open)
        setHasResourcesAnimation(true)
    }

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

        return () => {
            document.removeEventListener('scroll', buttonHandleScroll)
        }
    }, [])

    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <NavWrapper>
            <StyledNav>
                <Show.Desktop>
                    <PlatformsDropdown
                        forward_ref={trade_ref}
                        is_open={is_trade_open}
                        has_animation={has_trade_animation}
                        Content={NavPlatform}
                        title={localize('Trading platforms')}
                        description={localize(
                            'Be in full control of your trading with our new and improved platforms.',
                        )}
                    />
                    {/* TODO: add this when market is ready */}
                    {/* <PlatformsDropdown
                        forward_ref={market_ref}
                        is_open={is_market_open}
                        has_animation={has_market_animation}
                        Content={NavMarket}
                        title={localize('Markets')}
                        description={localize(
                            'Enjoy our wide range of assets on financial and synthetic markets. ',
                        )}
                    /> */}
                    <PlatformsDropdown
                        forward_ref={company_ref}
                        is_open={is_company_open}
                        has_animation={has_company_animation}
                        Content={NavCompany}
                        title={localize('About us')}
                        description={localize(
                            "Get to know our leadership team, learn about our history, and see why we're different.",
                        )}
                    />
                    <PlatformsDropdown
                        forward_ref={resources_ref}
                        is_open={is_resources_open}
                        has_animation={has_resources_animation}
                        Content={NavResources}
                        title={localize('Resouces')}
                        description={localize(
                            'Help yourself to various resources that can help you get the best out of your trading experience.',
                        )}
                    />
                </Show.Desktop>

                <Wrapper>
                    <NavLeft>
                        <LogoLink to="/" aria-label={localize('Home')}>
                            <Logo />
                        </LogoLink>
                    </NavLeft>
                    <NavCenter>
                        <NavLink onClick={handleTradeClick}>
                            <StyledButton
                                aria-label={localize('Trade')}
                                active={is_trade_open}
                                ref={link_trade_ref}
                            >
                                {localize('Trade')}
                            </StyledButton>
                        </NavLink>
                        {/* TODO: add this when market is ready */}
                        {/* <NavLink onClick={handleMarketClick}>
                            <StyledButton
                                aria-label={localize('Markets')}
                                active={is_market_open}
                                ref={link_market_ref}
                            >
                                {localize('Markets')}
                            </StyledButton>
                        </NavLink> */}
                        <NavLink onClick={handleCompanyClick}>
                            <StyledButton
                                aria-label={localize('About us')}
                                active={is_company_open}
                                ref={link_company_ref}
                            >
                                {localize('About us')}
                            </StyledButton>
                        </NavLink>
                        <NavLink onClick={handleResourcesClick}>
                            <StyledButton
                                aria-label={localize('Resources')}
                                active={is_resources_open}
                                ref={link_resources_ref}
                            >
                                {localize('Resources')}
                            </StyledButton>
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
                    {is_canvas_menu_open ? (
                        <CloseMenu onClick={closeOffCanvasMenu} width="16px" />
                    ) : (
                        <HamburgerMenu onClick={openOffCanvasMenu} width="16px" />
                    )}
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

    @media (max-width: 1150px) {
        margin-left: 7.3rem;
    }
`

const StyledNavRight = styled(NavRight)`
    margin-left: auto;
`

const StyledNavWrapper = styled(Wrapper)`
    justify-content: flex-start;

    @media ${device.tabletL} {
        justify-content: space-between;
    }
`

// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
export const NavPartners = ({ no_login_signup }) => {
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
                    <StyledNavWrapper>
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
                                >
                                    {localize('Affiliate & IB')}
                                </StyledLink>
                            </NavLink>
                            <NavLink>
                                <StyledLink
                                    activeClassName="active"
                                    to="/partners/payment-agent/"
                                    aria-label={localize('Payment agent')}
                                >
                                    {localize('Payment agent')}
                                </StyledLink>
                            </NavLink>
                        </StyledNavCenter>
                        {!no_login_signup ? (
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
                        ) : null}

                        {is_canvas_menu_open ? (
                            <CloseMenu onClick={closeOffCanvasMenu} width="16px" />
                        ) : (
                            <HamburgerMenu onClick={openOffCanvasMenu} width="16px" />
                        )}
                        <LogoLinkMobile to="/" aria-label={localize('Home')}>
                            <LogoOnly width="115px" />
                        </LogoLinkMobile>
                        {!no_login_signup && (
                            <MobileLogin OnClick={Partner.redirectToLogin} primary>
                                <span>{localize('Affiliate & IB Log in')}</span>
                            </MobileLogin>
                        )}
                        <OffCanvasMenuPartner
                            is_canvas_menu_open={is_canvas_menu_open}
                            closeOffCanvasMenu={closeOffCanvasMenu}
                        />
                    </StyledNavWrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

const CareerRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const NavCareers = () => {
    return (
        <>
            <NavWrapper>
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
                            <LogoLink to="/careers" aria-label={localize('Careers')}>
                                <LogoCareers />
                            </LogoLink>
                        </NavLeft>
                        <CareerRight>
                            <StyledLink
                                activeClassName="active"
                                to="/careers/teams/"
                                aria-label={localize('Teams')}
                                partiallyActive={true}
                            >
                                Teams
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/careers/locations/"
                                aria-label={localize('Locations')}
                                partiallyActive={true}
                            >
                                Locations
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/careers/jobs/"
                                aria-label={localize('All jobs')}
                                partiallyActive={true}
                            >
                                All jobs
                            </StyledLink>
                        </CareerRight>
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

NavPartners.propTypes = {
    no_login_signup: PropTypes.bool,
}
