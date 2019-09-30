import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import LogoBeta from 'images/svg/logo-beta.svg'

const StyledWrapper = styled.nav`
    background: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10.4rem;
`

const NavStatic = () => (
    <StyledWrapper>
        <Link to="/">
            <LogoBeta />
        </Link>
    </StyledWrapper>
)

export default NavStatic
