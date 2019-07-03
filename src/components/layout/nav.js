import Link from '../localization/localized-link'
import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'
import { localize } from '../localization/config'

const StyledNav = styled.nav`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const Wrapper = styled(Container)`
    align-items: center;
    padding: 2rem 1rem;
`

const NavLeft = styled.div`
    width: 25%;
    text-align: left;
`

const NavCenter = styled.ul`
    width: 50%;
    text-align: center;
    padding: 0;
`

const NavRight = styled.div`
    width: 25%;
    text-align: right;
`

const NavLink = styled.li`
    list-style-type: none;
    display: inline-block;
    width: 23%;
    text-align: left;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--color-white);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: text-shadow 0.25s;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        transition: width 0.25s;
        height: 0.1rem;
        width: 0;
        background-color: var(--color-red);
        bottom: 0;
    }
    &:hover {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1rem;
        }
    }
    &.active {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1rem;
        }
    }
`

const NavButton = styled(Button)``

const Nav = () => (
    <StyledNav>
        <Wrapper>
            <NavLeft>
                <Link to="/" aria-label="Home">
                    <LogoHeader />
                </Link>
            </NavLeft>
            <NavCenter>
                <NavLink>
                    <StyledLink
                        to="/trade"
                        activeClassName="active"
                        aria-label="Trade"
                    >
                        {localize('Trade')}
                    </StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink
                        to="/about"
                        activeClassName="active"
                        aria-label="About us"
                    >
                        {localize('About us')}
                    </StyledLink>
                </NavLink>
                <NavLink>
                    <StyledLink
                        to="/help-centre"
                        activeClassName="active"
                        aria-label="Help centre"
                    >
                        {localize('Help centre')}
                    </StyledLink>
                </NavLink>
            </NavCenter>
            <NavRight>
                <NavButton type="primary">
                    <span>{localize('Login')}</span>
                </NavButton>
            </NavRight>
        </Wrapper>
    </StyledNav>
)

export default Nav
