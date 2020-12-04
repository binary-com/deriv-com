// TODO: (discussion) make nav pure component, and move usage of nav to custom
import React, { useState, useEffect, useRef } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PlatformsDropdown from '../custom/platforms-dropdown'
import {
    NavPlatform,
    NavCompany,
    NavResources,
    NavMarket,
} from 'components/custom/other-platforms.js'
import { useOutsideClick } from 'components/hooks/outside-click'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Button, LinkButton } from 'components/form'
import { Container, Show, Flex } from 'components/containers'
import {
    OffCanvasMenu,
    OffCanvasMenuPartner,
    moveOffCanvasMenu,
    Text,
    QueryImage,
} from 'components/elements'
import { SharedLinkStyle } from 'components/localization/localized-link'
import Login from 'common/login'
import device from 'themes/device'
import { affiliate_signin_url, affiliate_signup_url } from 'common/utility'
// Icons
import Logo from 'images/svg/logo-deriv.svg'
import LogoPartner from 'images/svg/logo-partners.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
import Close from 'images/svg/close-long.svg'
import LogoOnly from 'images/svg/logo-deriv-only.svg'
import LogoCombinedShape from 'images/svg/logo-combined-shape.svg'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

export const NavWrapper = styled.div`
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

const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);
`

export const StyledNav = styled.nav`
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
        width: 90%;
    }
    @media ${device.laptop} {
        font-size: var(--text-size-xxs);
    }
`
export const NavLeft = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;

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
    justify-content: center;
    line-height: 1.2;

    @media (max-width: 1210px) {
        font-size: 14px;
    }
    @media (max-width: 1175px) {
        font-size: 12px;
    }
    @media (max-width: 1105px) {
        font-size: 11px;
    }
    @media ${device.tabletL} {
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
            if (props.move) {
                if (props.button_ref.current && props.mounted) {
                    props.button_ref.current.style.opacity = 1
                }
                return 0
            } else {
                if (props.button_ref.current && props.mounted) {
                    props.button_ref.current.style.opacity = 0

                    const calculation = props.button_ref.current.offsetWidth + 2
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
    @media ${device.tabletL} {
        display: none;
    }
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
        margin-right: 1.6rem;
    }

    ${(props) => {
        if (props.margin) return 'margin: 0 4rem;'
    }}
`
export const StyledLink = styled(LocalizedLink)`
    ${SharedLinkStyle}
`
const StyledButton = styled.span`
    ${SharedLinkStyle}
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
`

const SignupButton = styled(Button)`
    margin-left: 1.6rem;
    opacity: 0;
`

const LinkSignupButton = styled(LinkButton)`
    opacity: 0;
    margin-left: 1.6rem;
`

const HamburgerMenu = styled.img`
    cursor: pointer;
    display: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const CloseMenu = styled.img`
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
        margin-left: 2rem;
    }
`

const LoginButton = styled(Button)`
    white-space: nowrap;
`

const MobileLogin = styled(Button)`
    display: none;
    font-size: 14px;
    margin-left: 1.6rem;
    @media ${device.tabletL} {
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
    }
`
const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

const MobileRight = styled.div`
    margin-left: auto;
    display: none;
    align-items: center;

    @media ${device.tabletL} {
        display: flex;
    }
`
const LogoDescription = styled(Flex)`
    @media (max-width: 525px) {
        display: none;
    }
`

const handleLogin = () => {
    Login.redirectToLogin()
}

const NavMobile = () => {
    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = moveOffCanvasMenu()

    return (
        <Wrapper>
            {is_canvas_menu_open ? (
                <CloseMenu src={Close} alt="close menu" onClick={closeOffCanvasMenu} width="16px" />
            ) : (
                <HamburgerMenu
                    src={Hamburger}
                    alt="hamburger"
                    onClick={openOffCanvasMenu}
                    width="16px"
                />
            )}

            <LogoLinkMobile to="/" aria-label={localize('Home')}>
                <Flex>
                    <img src={LogoOnly} alt="logo only" width="115px" />
                    <LogoDescription ai="center">
                        <Line />
                        <img src={LogoCombinedShape} alt="logo combined shape 2" />
                    </LogoDescription>
                </Flex>
            </LogoLinkMobile>
            <MobileRight>
                <LanguageSwitcher short_name="true" is_high_nav />
                <MobileLogin onClick={handleLogin} primary>
                    <span>{localize('Log in')}</span>
                </MobileLogin>
            </MobileRight>
            <OffCanvasMenu
                is_canvas_menu_open={is_canvas_menu_open}
                closeOffCanvasMenu={closeOffCanvasMenu}
            />
        </Wrapper>
    )
}

const NavDesktop = ({ base }) => {
    const data = useStaticQuery(query)
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
        setHasTradeAnimation(true)
        setIsTradeOpen(!is_trade_open)
    }

    // market
    const market_ref = useRef(null)
    const link_market_ref = useRef(null)
    const [is_market_open, setIsMarketOpen] = useState(false)
    const [has_market_animation, setHasMarketAnimation] = useState(false)
    const closeMarket = () => setIsMarketOpen(false)
    useOutsideClick(market_ref, closeMarket, link_market_ref)
    const handleMarketClick = () => {
        setHasMarketAnimation(true)
        setIsMarketOpen(!is_market_open)
    }

    // company
    const company_ref = useRef(null)
    const link_company_ref = useRef(null)
    const [is_company_open, setIsCompanyOpen] = useState(false)
    const [has_company_animation, setHasCompanyAnimation] = useState(false)
    const closeCompany = () => setIsCompanyOpen(false)
    useOutsideClick(company_ref, closeCompany, link_company_ref)
    const handleCompanyClick = () => {
        setHasCompanyAnimation(true)
        setIsCompanyOpen(!is_company_open)
    }

    // resources
    const resources_ref = useRef(null)
    const link_resources_ref = useRef(null)
    const [is_resources_open, setIsResourcesOpen] = useState(false)
    const [has_resources_animation, setHasResourcesAnimation] = useState(false)
    const closeResources = () => setIsResourcesOpen(false)
    useOutsideClick(resources_ref, closeResources, link_resources_ref)
    const handleResourcesClick = () => {
        setHasResourcesAnimation(true)
        setIsResourcesOpen(!is_resources_open)
    }

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
        <div>
            <PlatformsDropdown
                forward_ref={trade_ref}
                link_ref={link_trade_ref}
                is_open={is_trade_open}
                has_animation={has_trade_animation}
                Content={() => <NavPlatform onClick={handleTradeClick} />}
                title={localize('Trading platforms')}
                description={localize(
                    'Be in full control of your trading with our new and improved platforms.',
                )}
            />
            <PlatformsDropdown
                forward_ref={market_ref}
                link_ref={link_market_ref}
                is_open={is_market_open}
                has_animation={has_market_animation}
                Content={() => <NavMarket onClick={handleMarketClick} />}
                title={localize('Markets')}
                description={localize(
                    'Enjoy our wide range of assets on financial and synthetic markets.',
                )}
            />
            <PlatformsDropdown
                forward_ref={company_ref}
                link_ref={link_company_ref}
                is_open={is_company_open}
                has_animation={has_company_animation}
                Content={() => <NavCompany onClick={handleCompanyClick} />}
                title={localize('About us')}
                description={localize(
                    "Get to know our leadership team, learn about our history, and see why we're different.",
                )}
            />
            <PlatformsDropdown
                forward_ref={resources_ref}
                link_ref={link_resources_ref}
                is_open={is_resources_open}
                has_animation={has_resources_animation}
                Content={() => <NavResources onClick={handleResourcesClick} />}
                title={localize('Resources')}
                description={localize(
                    'Help yourself to various resources that can help you get the best out of your trading experience.',
                )}
            />

            <Wrapper>
                <NavLeft>
                    <LogoLink to={base || '/'} aria-label={localize('Home')}>
                        <QueryImage
                            data={data['deriv']}
                            alt={localize('Deriv')}
                            max_width="16.4rem"
                            width="100%"
                            height="auto"
                        />
                    </LogoLink>
                    <Line />
                    <img src={LogoCombinedShape} alt="logo combined shape" />
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
                    <NavLink onClick={handleMarketClick}>
                        <StyledButton
                            aria-label={localize('Markets')}
                            active={is_market_open}
                            ref={link_market_ref}
                        >
                            {localize('Markets')}
                        </StyledButton>
                    </NavLink>
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
                    <LanguageSwitcher short_name="true" is_high_nav />
                    <LoginButton onClick={handleLogin} primary>
                        <span>{localize('Log in')}</span>
                    </LoginButton>
                    <LocalizedLink to="/signup/">
                        <SignupButton ref={button_ref} secondary="true">
                            <span>{localize('Create free demo account')}</span>
                        </SignupButton>
                    </LocalizedLink>
                </NavRight>
            </Wrapper>
        </div>
    )
}

export const Nav = ({ base }) => {
    return (
        <NavWrapper>
            <StyledNav>
                <Show.Desktop>
                    <NavDesktop base={base} />
                </Show.Desktop>
                <Show.Mobile>
                    <NavMobile />
                </Show.Mobile>
            </StyledNav>
        </NavWrapper>
    )
}

Nav.propTypes = {
    base: PropTypes.string,
}

NavDesktop.propTypes = {
    base: PropTypes.string,
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
export const NavInterim = ({ interim_type }) => (
    <InterimNav>
        <Container jc="space-between" p="2.4rem 0">
            <Flex ai="center" jc="flex-start">
                <Show.Desktop>
                    <StyledLogo to={`/interim/${interim_type}`} aria-label={localize('Home')}>
                        <Flex ai="center">
                            <img src={Logo} alt="logo" width="190px" height="27px" />
                            <img
                                src={LogoCombinedShape}
                                alt="logo combined shape desktop"
                                width="120"
                                height="17"
                            />
                        </Flex>
                    </StyledLogo>
                </Show.Desktop>
                <Show.Mobile>
                    <LogoLinkMobile to={`/interim/${interim_type}`} aria-label={localize('Home')}>
                        <Flex>
                            <img src={LogoOnly} alt="logo only 2" width="115px" height="27px" />
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
                </Show.Mobile>
            </Flex>
            <Auto jc="flex-end" ai="center">
                <LanguageSwitcher short_name="true" />
                <LeftButton secondary to="/">
                    {localize('Explore Deriv.com')}
                </LeftButton>
            </Auto>
        </Container>
    </InterimNav>
)

export const NavStatic = () => (
    <StaticWrapper>
        <LogoLink mw="31rem" to="/" aria-label={localize('Home')}>
            <Flex ai="center">
                <img src={LogoOnly} alt="logo only nav static" width="160px" height="27px" />
                <Line />
                <img
                    src={LogoCombinedShape}
                    alt="logo combined shape nav static"
                    width="120"
                    height="17"
                />
            </Flex>
        </LogoLink>
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
    white-space: nowrap;

    @media (max-width: 1300px) {
        margin-left: 9.3rem;
        font-size: 12px !important;
    }
    @media (max-width: 1080px) {
        margin-left: 7.3rem;
    }
`

const StyledNavRight = styled(NavRight)`
    margin-left: auto;
    transform: translateX(
        ${(props) => {
            if (props.move) {
                if (props.button_ref.current && props.mounted) {
                    props.button_ref.current.style.opacity = 1
                }
                return '50px'
            } else {
                if (props.button_ref.current && props.mounted) {
                    props.button_ref.current.style.opacity = 0

                    const calculation = props.button_ref.current.offsetWidth + 50
                    return `${calculation}px`
                }
                return '300px'
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

const Mobile = styled(Show.Mobile)`
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
                                {localize('Deriv website')}
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
                    <StyledNavWrapper no_login_signup>
                        <NavLeft>
                            <NavLogoLink to="/partners/" aria-label={localize('Partners')}>
                                <img src={LogoPartner} alt="logo partner" />
                            </NavLogoLink>
                        </NavLeft>
                        <StyledNavCenter>
                            <NavLink>
                                <StyledLink
                                    activeClassName="active"
                                    to="/partners/affiliate-ib/"
                                    aria-label={localize('Affiliates and IBs')}
                                >
                                    {localize('Affiliates and IBs')}
                                </StyledLink>
                            </NavLink>
                            <NavLink>
                                <StyledLink
                                    activeClassName="active"
                                    to="/partners/payment-agent/"
                                    aria-label={localize('Payment agents')}
                                >
                                    {localize('Payment agents')}
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
                                <LanguageSwitcher short_name="true" is_high_nav />
                                <LinkButton
                                    to={affiliate_signin_url}
                                    external="true"
                                    is_affiliate_sign_in_link
                                    target="_blank"
                                    primary
                                    style={{ width: '14rem' }}
                                >
                                    <span>{localize('Affiliate & IB log in')}</span>
                                </LinkButton>
                                <LinkSignupButton
                                    to={affiliate_signup_url}
                                    external="true"
                                    is_affiliate_link
                                    target="_blank"
                                    ref={button_ref}
                                    secondary="true"
                                    style={{ width: '14rem' }}
                                >
                                    <span>{localize('Affiliate & IB sign up')}</span>
                                </LinkSignupButton>
                            </StyledNavRight>
                        ) : (
                            <NavRight
                                move={show_button}
                                button_ref={button_ref}
                                mounted={mounted}
                                has_scrolled={has_scrolled}
                            >
                                <LanguageSwitcher short_name="true" is_high_nav />
                            </NavRight>
                        )}

                        {is_canvas_menu_open ? (
                            <CloseMenu
                                src={Close}
                                alt="close menu 2"
                                onClick={closeOffCanvasMenu}
                                width="16px"
                            />
                        ) : (
                            <HamburgerMenu
                                src={Hamburger}
                                alt="hamburger menu2"
                                onClick={openOffCanvasMenu}
                                width="16px"
                            />
                        )}

                        <Mobile>
                            <Flex ai="center">
                                <LogoLinkMobile to="/" aria-label={localize('Home')}>
                                    <ResLogo src={LogoOnly} alt="reslogo" />
                                </LogoLinkMobile>
                                <Flex ml="auto" ai="center" width="auto">
                                    <LanguageSwitcher short_name="true" is_high_nav />
                                </Flex>
                                {!no_login_signup && (
                                    <LinkMobileLogin
                                        to={affiliate_signin_url}
                                        external="true"
                                        is_affiliate_link
                                        target="_blank"
                                        primary
                                    >
                                        <span>{localize('Affiliate & IB Log in')}</span>
                                    </LinkMobileLogin>
                                )}
                            </Flex>
                        </Mobile>
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

NavInterim.propTypes = {
    interim_type: PropTypes.string,
}
