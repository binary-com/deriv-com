import { LocalizedLink, localize } from '../localization'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'
import Modal, { useModal } from '../elements/modal'
import SignupModal from '../elements/signup-modal'
import { SharedLinkStyle } from '../localization/localized-link'
import { DERIV_APP_URL } from '../../common/utility'
import Login from 'common/login'

const StyledNav = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    position: fixed;
    width: 100%;
    z-index: 100;
`

const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
    padding: 1.2rem 1rem;
    justify-content: space-between;
`

const NavLeft = styled.div`
    text-align: left;
`

const NavCenter = styled.ul`
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: space-between;
`

const NavRight = styled.div`
    overflow: hidden;
    width: 21.5rem;
    position: relative;
    height: 5rem;
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
    font-weight: bold;
    padding: 1.4rem var(--text-size-s);
    position: absolute;
    left: 0;
    ${props => {
        if (props.movable_button) {
            return `
            left: 9rem;
            min-width:12.4rem;
            border: 0.2rem solid var(--color-red)
            `
        }
    }}
`
const NavRightContainer = styled.div`
    position: absolute;
    left: 13rem;
    transition: left 0.5s ease-out;
    ${props => {
        if (props.enable_move) {
            return 'left: 0rem;'
        }
    }}
`

const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

const Nav = () => {
    const [show_modal, toggleModal, closeModal] = useModal()
    const [show_button, showButton, hideButton] = moveButton()

    useEffect(() => {
        document.addEventListener('scroll', () =>
            handleScroll(showButton, hideButton),
        )
        return () => {
            document.removeEventListener('scroll', () =>
                handleScroll(showButton, hideButton),
            )
        }
    }, [])

    const handleLogin = () => {
        window.open(Login.loginUrl(), '_blank')
    }

    const handleTraderLink = () => {
        window.open(DERIV_APP_URL, '_blank')
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
                        >
                            {localize('About us')}
                        </StyledLink>
                    </NavLink>
                    <NavLink>
                        <StyledLink
                            activeClassName="active"
                            to="/help-centre/"
                            aria-label={localize('Help centre')}
                        >
                            {localize('Help centre')}
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
