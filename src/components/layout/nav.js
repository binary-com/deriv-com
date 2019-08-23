import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize } from '../localization'
import Button from '../form/button'
import Container from '../containers/container'
import Modal, { useModal } from '../elements/modal'
import SignupModal from '../elements/signup-modal'
import { SharedLinkStyle } from '../localization/localized-link'
import { deriv_app_url } from 'common/utility'
import Login from 'common/login'
import device from 'themes/device'
// Icons
import LogoHeader from 'images/svg/logo-header.svg'
import Hamburger from 'images/svg/hamburger_menu.svg'

const StyledNav = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    position: fixed;
    width: 100%;
    z-index: 100;
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
    left: 14rem;
    transition: left 0.5s ease-out;
    ${props => {
        if (props.enable_move) {
            return 'left: 0rem;'
        }
    }}
`
const HamburgerMenu = styled(Hamburger)`
    display: none;
    @media ${device.tabletL} {
        display: block;
    }
`
const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

const Nav = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const [show_button, showButton, hideButton] = moveButton()

    useEffect(() => {
        let did_unmount = false
        document.addEventListener('scroll', () => {
            if (!did_unmount) handleScroll(showButton, hideButton)
        })
        return () => {
            did_unmount = true
            document.removeEventListener('scroll', () =>
                handleScroll(showButton, hideButton),
            )
        }
    }, [])

    const handleLogin = () => {
        window.open(Login.loginUrl(), '_blank')
    }

    const handleTraderLink = () => {
        window.open(deriv_app_url, '_blank')
    }
    return (
        <StyledNav>
            <Wrapper>
                <NavLeft>
                    <LocalizedLink to="/" aria-label={localize('Home')}>
                        <LogoHeader />
                    </LocalizedLink>
                </NavLeft>
                <NavCenter>
                    <NavLink>
                        <StyledButton
                            onClick={handleTraderLink}
                            aria-label={localize('Trade')}
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
                <HamburgerMenu />
            </Wrapper>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                is_blurred={true}
                closeModal={closeModal}
            >
                <SignupModal />
            </Modal>
        </StyledNav>
    )
}

export default Nav

function moveButton(is_visible = false) {
    const [show_button, setShowButton] = useState(is_visible)
    const showButton = () => setShowButton(!show_button)
    const hideButton = () => setShowButton(false)

    return [show_button, showButton, hideButton]
}
