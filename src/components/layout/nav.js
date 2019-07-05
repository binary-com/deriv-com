import { LocalizedLink, localize } from '../localization'
import React from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'

const StyledNav = styled.nav`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
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
`

const Nav = () => (
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
                <NavLink>
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
                <NavButton primary>
                    <span>{localize('Login')}</span>
                </NavButton>
            </NavRight>
        </Wrapper>
    </StyledNav>
)

export default Nav
