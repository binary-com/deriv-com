import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
    NavRight,
    Wrapper,
    DesktopWrapper,
    LogoLinkMobile,
    MobileWrapper,
    LogoLink,
    NavLink,
    NavWrapperPartners,
    StyledNavPartners,
    NavLeftPartners,
    StyledLink,
} from './styles/nav-styles'
import { handleScroll, moveButton } from './util/nav-methods'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { LinkButton } from 'components/form'
import { Container, Flex } from 'components/containers'
import { OffCanvasMenuPartner, moveOffCanvasMenu, Text } from 'components/elements'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
import { affiliate_signin_url, affiliate_signup_url } from 'common/constants'
import { getBaseRef } from 'common/utility'
// Icons
import LogoPartner from 'images/svg/layout/logo-partners.svg'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import { CFDWarning } from 'components/layout'

const LinkSignupButton = styled(LinkButton)`
    opacity: 0;
    margin-left: 1.6rem;
    margin-right: 10px;
`
const HamburgerMenuPartners = styled.img`
    cursor: pointer;
    display: none;
    @media (max-width: 991px) {
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
const StyledNavRight = styled(NavRight)<any>`
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

const Home = () => {
    const links = [
        { id: 1, title: 'Deriv website', to: '/' },
        { id: 2, title: 'Who we are', to: '/who-we-are/' },
        { id: 3, title: 'Contact us', to: '/contact_us/' },
    ]

    return (
        <DerivHomeWrapper>
            <HomeContainer justify="space-between">
                <StyledContainer justify="flex-start">
                    {links.map((item) => {
                        return (
                            <HomeLink key={item.id} to={item.to}>
                                <Text color="grey-19" size="var(--text-size-xxs)">
                                    {localize(item.title)}
                                </Text>
                            </HomeLink>
                        )
                    })}
                </StyledContainer>

                <DesktopLS>
                    <LSContainer>
                        <LanguageSwitcher short_name="true" />
                    </LSContainer>
                </DesktopLS>
            </HomeContainer>
        </DerivHomeWrapper>
    )
}

type NavPartnersProps = {
    no_login_signup?: boolean
}

// Note: When using layout component for partners page, please add type='partners' and padding_top='10rem'
const NavPartners = ({ no_login_signup }: NavPartnersProps) => {
    const nav_ref = useRef(null)
    const button_ref = useRef(null)
    const [show_button, showButton, hideButton] = moveButton()
    const [mounted, setMounted] = useState(false)
    const [has_scrolled, setHasScrolled] = useState(false)
    const current_page = useActiveLinkState('partners')

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
            <NavWrapperPartners ref={nav_ref}>
                <Home />
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
                                        <DesktopWrapper>
                                            <span>{localize('Affiliate & IB log in')}</span>
                                        </DesktopWrapper>
                                        <MobileWrapper>
                                            <span>{localize('Log in')}</span>
                                        </MobileWrapper>
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

export default NavPartners
