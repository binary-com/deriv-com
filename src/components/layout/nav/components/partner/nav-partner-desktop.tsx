import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {
    NavRight,
    LogoLink,
    NavLink,
    StyledLink,
    DesktopWrapper,
    Wrapper,
} from '../../styles/nav-styles'
import { handleScroll, useMoveButton } from '../../util/nav-methods'
import NavLinkCard, { NavLinkCardTypes } from '../nav-link-card'
import { Localize, localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { affiliate_signin_url, affiliate_signup_url } from 'common/constants'
import { getBaseRef } from 'common/utility'
import LogoPartner from 'images/svg/layout/logo-partners.svg'
import useRegion from 'components/hooks/use-region'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

type NavPartnerDesktopProps = {
    hide_login_signup: boolean
}

type StyledNavRightProps = {
    is_rtl: boolean
    mounted: boolean
    move: boolean
}

const StyledWrapper = styled(Wrapper)<NavPartnerDesktopProps>`
    justify-content: ${({ hide_login_signup }) =>
        hide_login_signup ? 'flex-start' : 'space-between'};
`
const LeftSide = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 30rem;
`
export const StyledLogoLink = styled(LogoLink)`
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
const NavigationBar = styled.ul`
    display: flex;
    justify-content: center;
    padding: 0;
    line-height: 1.2;
    margin-left: 13.3rem;
    white-space: nowrap;

    @media (max-width: 1300px) {
        font-size: 12px;
    }
`
const LinkSignupButton = styled(LinkButton)`
    opacity: 0;
    margin-left: 1.6rem;
    margin-right: 10px;
`

const StyledNavRight = styled(NavRight)<StyledNavRightProps>`
    margin-left: auto;
    transform: translateX(
        ${({ is_rtl, mounted, move, button_ref }) => {
            const ref_base = getBaseRef(button_ref)
            if (move) {
                if (ref_base && mounted) {
                    ref_base.style.opacity = 1
                }
                return '0'
            } else {
                if (ref_base && mounted) {
                    ref_base.style.opacity = 0
                    const calculation = ref_base.offsetWidth + 50
                    return is_rtl ? `${-calculation}px` : `${calculation}px`
                }
                return is_rtl ? '-225px' : '225px'
            }
        }}
    );

    > a {
        pointer-events: visible;
        cursor: pointer;
    }
    > a:last-child {
        pointer-events: ${({ move }) => (move ? 'visible' : 'none')};
        cursor: ${({ move }) => (move ? 'pointer' : 'default')};
        opacity: ${({ move }) => (move ? 1 : 0)};
    }
`

const nav_links: Omit<NavLinkCardTypes, 'page'>[] = [
    { active: 'affiliate', to: '/partners/affiliate-ib/', title: '_t_Affiliates and IBs_t_' },
    { active: 'payment', to: '/partners/payment-agent/', title: '_t_Payment agents_t_' },
    {
        active: 'api',
        to: '',
        title: '_t_API_t_',
        type: 'api',
        target: '_blank',
        external: true,
        rel: 'noopener noreferrer',
    },
    { to: '/bug-bounty/', title: '_t_Bug bounty_t_' },
]

const NavPartnerDesktop = ({ hide_login_signup }: NavPartnerDesktopProps) => {
    const { is_row } = useRegion()
    const button_ref = useRef<HTMLButtonElement | null>(null)
    const [show_button, showButton, hideButton] = useMoveButton()
    const [is_mounted] = usePageLoaded()
    const [has_scrolled, setHasScrolled] = useState(false)

    const is_rtl = useIsRtl()
    const buttonHandleScroll = () => {
        setHasScrolled(true)
        handleScroll(showButton, hideButton)
    }

    useEffect(() => {
        if (!hide_login_signup) {
            document.addEventListener('scroll', buttonHandleScroll, { passive: true })
            return () => document.removeEventListener('scroll', buttonHandleScroll)
        }
    }, [])

    return (
        <DesktopWrapper>
            <StyledWrapper hide_login_signup={hide_login_signup}>
                <LeftSide>
                    <StyledLogoLink to="/partners/" aria-label="Partners">
                        <img src={LogoPartner} alt="deriv logo" />
                    </StyledLogoLink>
                </LeftSide>

                <NavigationBar>
                    {nav_links.map(({ title, type, target, active, rel, external, to }) => {
                        return external ? (
                            <NavLinkCard
                                key={title}
                                page="partners"
                                active={active}
                                to={to}
                                title={title}
                                type={type}
                                target={target}
                                external
                                rel={rel}
                            />
                        ) : to == '/partners/payment-agent/' ? (
                            is_row && (
                                <NavLinkCard
                                    key={title}
                                    page="partners"
                                    active={active}
                                    to={to}
                                    title={title}
                                />
                            )
                        ) : (
                            <NavLinkCard
                                key={title}
                                page="partners"
                                active={active}
                                to={to}
                                title={title}
                            />
                        )
                    })}
                </NavigationBar>

                {!hide_login_signup && (
                    <StyledNavRight
                        move={show_button}
                        button_ref={button_ref}
                        mounted={is_mounted}
                        has_scrolled={has_scrolled}
                        is_rtl={is_rtl}
                    >
                        <LinkButton
                            to={affiliate_signin_url}
                            external
                            type="affiliate_sign_in"
                            target="_blank"
                            primary
                            style={{ width: '16rem' }}
                        >
                            <Localize translate_text="_t_Affiliate & IB log in_t_" />
                        </LinkButton>
                        <LinkSignupButton
                            id="dm-nav-affiliate-signup"
                            to={affiliate_signup_url}
                            external
                            type="affiliate_sign_up"
                            target="_blank"
                            ref={button_ref}
                            secondary
                            style={{ width: '18rem' }}
                        >
                            <Localize translate_text="_t_Affiliate & IB sign up_t_" />
                        </LinkSignupButton>
                    </StyledNavRight>
                )}
            </StyledWrapper>
        </DesktopWrapper>
    )
}

export default NavPartnerDesktop
