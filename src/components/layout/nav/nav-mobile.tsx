import React from 'react'
import styled from 'styled-components'
import { Wrapper, Line, LogoDescription } from './styles/nav-styles'
import { handleGetTrading, handleLogin } from './util/nav-methods'
import { NavTypes } from './models/nav-types'
import device from 'themes/device'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Button } from 'components/form'
import { Flex } from 'components/containers'
import { OffCanvasMenu, moveOffCanvasMenu } from 'components/elements'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import GetTrading from 'images/svg/layout/get-trading.svg'
import AcademyLogo from 'images/svg/academy-logo.svg'

const HamburgerMenu = styled.img`
    cursor: pointer;
    display: none;
    width: 16px;
    @media (max-width: 1060px) {
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
const LogoLinkMobileMain = styled(LocalizedLink)`
    cursor: pointer;
    display: none;
    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
        margin-left: 2rem;
    }
`
const MobileButton = styled(Button)<{ margin_left: string }>`
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
const MobileRightMain = styled.div`
    margin-left: auto;
    display: none;
    align-items: center;
    @media (max-width: 1060px) {
        display: flex;
    }
`

const NavMobile = ({
    is_ppc,
    is_ppc_redirect,
    is_logged_in,
    hide_signup_login,
    academy_logo,
    no_language,
}: NavTypes) => {
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
                            <img src={GetTrading} alt="logo combined shape" />
                        )}
                    </LogoDescription>
                </Flex>
            </LogoLinkMobileMain>

            <MobileRightMain>
                {!no_language && <LanguageSwitcher short_name="true" is_high_nav />}
                {!hide_signup_login &&
                    (is_logged_in ? (
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
                    ))}
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

export default NavMobile
