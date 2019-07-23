import { LocalizedLink, localize } from '../localization'
import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'
import Modal from '../elements/modal'
import SignupModal from '../elements/signup-modal'
import { SharedLinkStyle } from '../localization/localized-link'

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

class Nav extends React.Component {
    state = {
        enable_move: false,
        show_modal: false,
        active_tab: '',
    }

    toggleModal = e => {
        e.stopPropagation()
        this.setState({
            show_modal: !this.state.show_modal,
        })
    }

    closeModal = () => {
        this.setState({
            show_modal: false,
        })
    }
    handleScroll = () => {
        window.scrollY > 400
            ? this.setState({ enable_move: true })
            : this.setState({ enable_move: false })
    }
    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, false)
    }
    render() {
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
                            <StyledLink
                                activeClassName="active"
                                to="https://deriv.app"
                                external_link
                                aria-label={localize('Trade')}
                            >
                                {localize('Trade')}
                            </StyledLink>
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
                        <NavRightContainer enable_move={this.state.enable_move}>
                            <NavButton primary>
                                <span>{localize('Login')}</span>
                            </NavButton>
                            <NavButton
                                secondary
                                movable_button
                                onClick={this.toggleModal}
                            >
                                <span>{localize('Try for free')}</span>
                            </NavButton>
                        </NavRightContainer>
                    </NavRight>
                </Wrapper>
                <Modal
                    toggle={this.toggleModal}
                    is_open={this.state.show_modal}
                    is_blurred={true}
                    closeModal={this.closeModal}
                >
                    <SignupModal />
                </Modal>
            </StyledNav>
        )
    }
}

export default Nav
