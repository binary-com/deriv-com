import { LocalizedLink, localize } from '../localization'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import LogoHeader from '../../images/svg/logo-header.svg'
import Button from '../form/button'
import Container from '../containers/container'

const StyledNav = styled.nav`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    height: 7.2rem;
    position: fixed;
    width: 100%;
    z-index: 100;
`

const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
    padding: 1.2rem 1rem;
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
    ${props => {
        if (props.hide)
            return `
        margin-left: 1rem;
        min-width:16.2rem;
        `
    }}
`
const NavButtonContainer = styled.div`
    display: flex;
    overflow: hidden;
    margin-left: 17rem;

    ${props => {
        console.log(props.show)
        return props.show ? 'margin-left: 0' : 'maragin-left: 17rem'
    }}
`

const Nav = () => {
    let show = false
    const handleScroll = () => {
        window.scrollY > 72 ? (show = true) : (show = false)
        console.log(show)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, false)
    })
    console.log(show)
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
                    {show && <NavButtonContainer show={show}>
                        <NavButton primary>
                            <span>{localize('Login')}</span>
                        </NavButton>
                        <NavButton primary>
                            <span>{localize('Try 1 month free')}</span>
                        </NavButton>
                    </NavButtonContainer>}
                </NavRight>
            </Wrapper>
        </StyledNav>
    )
}

export default Nav
