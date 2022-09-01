import React from 'react'
import styled from 'styled-components'
import { Wrapper, MobileWrapper, HamburgerMenu, CloseIcon } from '../../styles/nav-styles'
import { localize, LanguageSwitcher, LocalizedLink } from 'components/localization'
import { LinkButton } from 'components/form'
import { Flex } from 'components/containers'
import { OffCanvasMenuPartner, useMoveOffCanvasMenu } from 'components/elements'
import device from 'themes/device'
import { affiliate_signin_url } from 'common/constants'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'

type NavPartnerMobileProps = {
    hide_login_signup: boolean
}

const Mobile = styled(MobileWrapper)`
    width: 100%;
`
const LogoLink = styled(LocalizedLink)`
    cursor: pointer;
    margin-left: 2rem;
`
const Logo = styled.img`
    width: 115px;
    @media ${device.mobileM} {
        width: 98px;
    }
    @media (max-width: 336px) {
        width: 82px;
    }
`
const LoginLink = styled(LinkButton)`
    font-size: 14px;
    margin-left: 10px;
    @media ${device.mobileL} {
        font-size: var(--text-size-xxs);
    }
`

const NavPartnerMobile = ({ hide_login_signup }: NavPartnerMobileProps) => {
    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = useMoveOffCanvasMenu()

    return (
        <Mobile>
            <Wrapper width="90%">
                {is_canvas_menu_open ? (
                    <CloseIcon src={Close} alt="close icon" onClick={closeOffCanvasMenu} />
                ) : (
                    <HamburgerMenu
                        src={Hamburger}
                        alt="hamburger menu"
                        onClick={openOffCanvasMenu}
                    />
                )}

                <LogoLink to="/partners/" aria-label="Home">
                    <Logo src={LogoOnly} alt="deriv logo" />
                </LogoLink>

                <Flex ml="auto" ai="center" width="auto">
                    <LanguageSwitcher has_short_name is_high_nav />
                </Flex>

                {!hide_login_signup && (
                    <LoginLink
                        external
                        primary
                        to={affiliate_signin_url}
                        type="affiliate_sign_in"
                        target="_blank"
                    >
                        {localize('Log in')}
                    </LoginLink>
                )}

                <OffCanvasMenuPartner
                    is_canvas_menu_open={is_canvas_menu_open}
                    closeOffCanvasMenu={closeOffCanvasMenu}
                />
            </Wrapper>
        </Mobile>
    )
}

export default NavPartnerMobile
