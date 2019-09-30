import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize } from '../localization'
import Button from '../form/button'
import Container from '../containers/container'
import Modal, { useModal } from '../elements/modal'
import SignupModal from '../elements/signup-modal'
import OffCanvasMenu, { moveOffCanvasMenu } from '../elements/off-canvas-menu'
import PlatformsDropdown from '../elements/platforms-dropdown'
import { SharedLinkStyle } from '../localization/localized-link'
import BetaBanner from './beta'
import Login from 'common/login'
import device from 'themes/device'
// Icons
import LogoBeta from 'images/svg/logo-beta.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'
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
    const nav_ref = useRef(null)
    useEffect(() => {
        const handleClickOutside = e => {
            if (!nav_ref.current.contains(e.target)) {
                const switcher = document.getElementById('switcher')
                switcher.classList.remove('is-nav-open')
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    })
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
    const handleMenuClick = () => {
        is_canvas_menu_open ? closeOffCanvasMenu() : openOffCanvasMenu()
    }
    const handlePlatformsClick = () => {
        const switcher = document.getElementById('switcher')
        switcher.classList.toggle('is-nav-open')
    }
    return (
        <NavWrapper ref={nav_ref}>
            <BetaBanner />
            <StyledNav>
                <PlatformsDropdown />
                <Wrapper>
                    <NavLeft>
                        <LogoLink to="/" aria-label={localize('Home')}>
                            <LogoBeta />
                        </LogoLink>
                    </NavLeft>
                    <NavCenter>
                        <NavLink onClick={handlePlatformsClick}>
                            <StyledButton
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
