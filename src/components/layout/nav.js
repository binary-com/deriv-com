import { LocalizedLink, localize } from '../localization'
import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'

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
    color: var(--color-white);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: text-shadow 0.25s;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        transition: width 0.25s;
        height: 0.2rem;
        width: 0;
        background-color: var(--color-red);
        bottom: 0;
    }
    &:hover {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1.6rem;
        }
    }
    &.active {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1.6rem;
        }
    }
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
        if(props.enable_move) {
            return 'left: 0rem;'
        }
    }}
`

class Nav extends React.Component {
    state = {
        enable_move: false,
    }
    handleScroll = () => {
        window.scrollY > 120
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
                                to="/trade/"
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
                            <NavButton secondary movable_button>
                                <span>{localize('Try for free')}</span>
                            </NavButton>
                        </NavRightContainer>
                    </NavRight>
                </Wrapper>
            </StyledNav>
        )
    }
}

export default Nav
