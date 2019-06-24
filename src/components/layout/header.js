import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Localize from '../containers/localize'
import LogoHeader from '../../images/svg/logo-header.svg'

const StyledHeader = styled.header`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
`

const NavLeft = styled.div`
    width: 25%;
    text-align: left;
`

const NavCenter = styled.div`
    width: 50%;
    text-align: center;
`

const NavRight = styled.div`
    width: 25%;
    text-align: right;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: var(--color-white);
    text-decoration: none;
    padding: 1rem;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.25s;
    margin: 0 0.3rem;

    &:hover {
        border-bottom: 1px solid var(--color-red);
    }
    &.active {
        border-bottom: 1px solid var(--color-red);
    }
`

const NavButton = styled.button`
    border-radius: 6px;
    border: 2px solid var(--color-red);
    color: var(--color-red);
    background-color: transparent;
    padding: 0.6rem 1.2rem;
    font-size: 100%;

    &:hover {
        background-color: var(--color-red);
        color: var(--color-white);
        transition: background-color 0.2s, color 0.2s;
        cursor: pointer;
    }
`

const Header = () => (
    <StyledHeader>
        <Wrapper>
            <NavLeft>
                <Link to="/" aria-label="Home">
                    <LogoHeader />
                </Link>
            </NavLeft>
            <NavCenter>
                <StyledLink
                    to="/trade"
                    activeClassName="active"
                    aria-label="Trade"
                >
                    <Localize translate="Trade" />
                </StyledLink>
                <StyledLink
                    to="/about"
                    activeClassName="active"
                    aria-label="About us"
                >
                    <Localize translate="About us" />
                </StyledLink>
                <StyledLink
                    to="/help-centre"
                    activeClassName="active"
                    aria-label="Help centres"
                >
                    <Localize translate="Help centre" />
                </StyledLink>
            </NavCenter>
            <NavRight>
                <NavButton>
                    <Localize translate="Login" />
                </NavButton>
            </NavRight>
        </Wrapper>
    </StyledHeader>
)

export default Header
