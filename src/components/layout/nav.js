import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize } from '../localization'
import Button from '../form/button'
import Container, { GridContainer } from '../containers/container'
import Modal, { useModal } from '../elements/modal'
import SignupModal from '../elements/signup-modal'
import OffCanvasMenu, { moveOffCanvasMenu } from '../elements/off-canvas-menu'
import { SharedLinkStyle } from '../localization/localized-link'
import BetaBanner from './beta'
import { deriv_app_url } from 'common/utility'
import Login from 'common/login'
import device from 'themes/device'
import { Text } from 'components/elements/typography.js'
// Icons
import LogoBeta from 'images/svg/logo-beta.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'

const NavWrapper = styled.div`
    width: 100%;
    position: fixed;
    z-index: 100;
`

const NavDropdown = styled.div`
    width: 100%;
    position: absolute;
    top: -18rem;
    z-index: -1;
    background-color: #ffffff;
    height: 17.8rem;
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.35s ease-in-out;

    &.is-nav-open {
        top: 7.2rem;
        opacity: 1;
    }
    @media ${device.tabletL} {
        display: none;
    }
`

const NavDropdownGrid = styled(GridContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    height: 100%;
    align-items: center;
`

const PlatformItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 2.4rem 1.6rem;
    transition: background-color 0.25s;
    border-radius: 0.8rem;
    min-height: 13.1rem;
    align-items: start;
    cursor: pointer;

    &:hover {
        background-color: var(--color-grey-6);
    }
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
`

const NavLeft = styled.div`
    text-align: left;
    @media ${device.tabletL} {
        svg {
            width: 50%;
        }
    }
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
    overflow: hidden;
    width: 21.4rem;
    position: relative;
    height: 5rem;
    top: 10%;

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
const NavButton = styled(Button)`
    position: absolute;
    border: 2px solid var(--color-red);
    left: 0;
    ${props => {
        if (props.movable_button) {
            return `
            left: 9rem;
            min-width:12.4rem;
            `
        }
    }}
`
const NavRightContainer = styled.div`
    position: absolute;
    left: 13.8rem;
    transition: left 0.5s ease-out;
    ${props => {
        if (props.enable_move) {
            return 'left: 0rem;'
        }
    }}
`
const HamburgerMenu = styled(Hamburger)`
    cursor: pointer;
    display: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pionter;
    }
`

const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

const Nav = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const [show_button, showButton, hideButton] = moveButton()
    const buttonHandleScroll = () => handleScroll(showButton, hideButton)
    const [
        is_canvas_menu_open,
        openOffCanvasMenu,
        closeOffCanvasMenu,
    ] = moveOffCanvasMenu()

    useEffect(() => {
        document.addEventListener('scroll', buttonHandleScroll, {
            passive: true,
        })
        return () => {
            document.removeEventListener('scroll', buttonHandleScroll)
        }
    }, [])

    const handleLogin = () => {
        window.open(Login.loginUrl(), '_blank')
    }

    const handleTraderLink = () => {
        window.open(deriv_app_url, '_blank')
    }
    const handleMenuClick = () => {
        is_canvas_menu_open ? closeOffCanvasMenu() : openOffCanvasMenu()
    }
    const handlePlatformsClick = () => {
        const switcher = document.getElementById('switcher')
        switcher.classList.toggle('is-nav-open')
    }
    return (
        <NavWrapper>
            <BetaBanner />
            <StyledNav>
                <NavDropdown id="switcher">
                    <NavDropdownGrid>
                        <PlatformItem>
                            <DTrader />
                            <div
                                onClick={() => {
                                    handlePlatformsClick()
                                    handleTraderLink()
                                }}
                            >
                                <Text secondary color="black-3" weight="bold">
                                    {localize('DTrader')}
                                </Text>
                                <Text color="black-3">
                                    {localize(
                                        'Everything you need to trade the markets you want',
                                    )}
                                </Text>
                            </div>
                        </PlatformItem>
                        <PlatformItem>
                            <DBot />
                            <div onClick={() => {
                                handlePlatformsClick()
                                handleTraderLink()
                                }}
                            >
                                <Text secondary color="black-3" weight="bold">
                                    {localize('DBot')}
                                </Text>
                                <Text color="black-3">
                                    {localize(
                                        'A powerful robot builder to automate your trading strategies',
                                    )}
                                </Text>
                            </div>
                        </PlatformItem>
                        <PlatformItem>
                            <DMT5 />
                            <div onClick={() => {
                                handlePlatformsClick()
                                handleTraderLink()
                                }}
                            >
                                <Text secondary color="black-3" weight="bold">
                                    {localize('DMT5')}
                                </Text>
                                <Text color="black-3">
                                    {localize(
                                        'An all-in-one platform for FX and CFD trading',
                                    )}
                                </Text>
                            </div>
                        </PlatformItem>
                    </NavDropdownGrid>
                </NavDropdown>
                <Wrapper>
                    <NavLeft>
                        <LogoLink to="/" aria-label={localize('Home')}>
                            <LogoBeta />
                        </LogoLink>
                    </NavLeft>
                    <NavCenter>
                        <NavLink margin>
                            <StyledButton
                                onClick={handlePlatformsClick}
                                aria-label={localize('Trade')}
                                activeClassName="active"
                            >
                                {localize('Trade')}
                            </StyledButton>
                        </NavLink>
                        <NavLink margin>
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
                    <NavRight>
                        <NavRightContainer enable_move={show_button}>
                            <NavButton onClick={handleLogin} primary>
                                <span>{localize('Login')}</span>
                            </NavButton>
                            <NavButton
                                secondary
                                movable_button
                                onClick={toggleModal}
                            >
                                <span>{localize('Try for free')}</span>
                            </NavButton>
                        </NavRightContainer>
                    </NavRight>
                    <HamburgerMenu onClick={handleMenuClick} />
                    <OffCanvasMenu
                        is_canvas_menu_open={is_canvas_menu_open}
                        closeOffCanvasMenu={closeOffCanvasMenu}
                    />
                </Wrapper>
                <Modal
                    toggle={toggleModal}
                    is_open={show_modal}
                    closeModal={closeModal}
                >
                    <SignupModal autofocus />
                </Modal>
            </StyledNav>
        </NavWrapper>
    )
}

export default Nav

function moveButton(is_visible = false) {
    const [show_button, setShowButton] = useState(is_visible)
    const showButton = () => setShowButton(!show_button)
    const hideButton = () => setShowButton(false)

    return [show_button, showButton, hideButton]
}
