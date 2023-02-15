import React from 'react'
import styled from 'styled-components'
import {
    NavRight,
    LogoLink,
    NavLink,
    StyledLink,
    DesktopWrapper,
    Wrapper,
} from '../../styles/nav-styles'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import { affiliate_signin_url, affiliate_signup_url } from 'common/constants'
import LogoPartner from 'images/svg/layout/logo-partners.svg'
import useRegion from 'components/hooks/use-region'
import { useIsRtl } from 'components/hooks/use-isrtl'

type NavPartnerDesktopProps = {
    hide_login_signup: boolean
}

type StyledNavRightProps = {
    is_rtl: boolean
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

    > a {
        pointer-events: visible;
        cursor: pointer;
    }
`

type NavLinkCardTypes = {
    to: string
    title: string
    active?: string
    type?: string
    target?: string
    external?: boolean
    rel?: string
}

const NavLinkCard = ({ title, active, ...rest }: NavLinkCardTypes) => {
    const current_page = useActiveLinkState('partners')
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

const NavPartnerDesktop = ({ hide_login_signup }: NavPartnerDesktopProps) => {
    const { is_row } = useRegion()
    const is_rtl = useIsRtl()

    return (
        <DesktopWrapper>
            <StyledWrapper hide_login_signup={hide_login_signup}>
                <LeftSide>
                    <StyledLogoLink to="/partners/" aria-label="Partners">
                        <img src={LogoPartner} alt="deriv logo" />
                    </StyledLogoLink>
                </LeftSide>

                <NavigationBar>
                    <NavLinkCard
                        active="affiliate"
                        to="/partners/affiliate-ib/"
                        title={localize('Affiliates and IBs')}
                    />
                    {is_row && (
                        <NavLinkCard
                            active="payment"
                            to="/partners/payment-agent/"
                            title={localize('Payment agents')}
                        />
                    )}

                    <NavLinkCard
                        active="api"
                        to=""
                        title={localize('API')}
                        type="api"
                        target="_blank"
                        external
                        rel="noopener noreferrer"
                    />
                    <NavLinkCard to="/bug-bounty/" title={localize('Bug bounty')} />
                </NavigationBar>

                {!hide_login_signup && (
                    <StyledNavRight is_rtl={is_rtl}>
                        <LinkButton
                            to={affiliate_signin_url}
                            external
                            type="affiliate_sign_in"
                            target="_blank"
                            primary
                            style={{ width: '16rem' }}
                        >
                            {localize('Affiliate & IB log in')}
                        </LinkButton>
                        <LinkSignupButton
                            id="dm-nav-affiliate-signup"
                            to={affiliate_signup_url}
                            external
                            type="affiliate_sign_up"
                            target="_blank"
                            secondary
                            style={{ width: '18rem' }}
                        >
                            {localize('Affiliate & IB sign up')}
                        </LinkSignupButton>
                    </StyledNavRight>
                )}
            </StyledWrapper>
        </DesktopWrapper>
    )
}

export default NavPartnerDesktop
