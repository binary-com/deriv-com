import React from 'react'
import NavTemplate from './components/nav-template'
import { LogoLink } from './styles/nav-styles'
import { Flex } from 'components/containers'
import LogoOnly from 'images/svg/layout/logo-deriv-new.svg'

const NavStatic = () => (
    <NavTemplate
        nav_height="10.4rem"
        nav_height_mobile="10.4rem"
        static_position
        background="white"
        transparent_background
    >
        <LogoLink max_width="31rem" to="/" aria-label="Home">
            <Flex ai="center">
                <img src={LogoOnly} alt="deriv logo" width={160} height={27} />
            </Flex>
        </LogoLink>
    </NavTemplate>
)

export default NavStatic
