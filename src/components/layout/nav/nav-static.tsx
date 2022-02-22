import React from 'react'
import NavTemplate from './components/nav-template'
import { LogoLink, Line } from './styles/nav-styles'
import { Flex } from 'components/containers'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import GetTrading from 'images/svg/layout/get-trading.svg'

type NavStaticProps = {
    is_ppc: boolean
}

const NavStatic = ({ is_ppc }: NavStaticProps) => (
    <NavTemplate is_ppc={is_ppc} nav_height="10.4rem" nav_height_mobile="10.4rem" static_position>
        <LogoLink max_width="31rem" to="/" aria-label="Home">
            <Flex ai="center">
                <img src={LogoOnly} alt="deriv logo" width={160} height={27} />
                <Line />
                <img src={GetTrading} alt="get trading" width={120} height={17} />
            </Flex>
        </LogoLink>
    </NavTemplate>
)

export default NavStatic
