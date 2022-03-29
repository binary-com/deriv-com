import React from 'react'
import NavTemplate from './components/nav-template'
import { LogoLink, Line } from './styles/nav-styles'
import { Flex } from 'components/containers'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import GetTrading from 'images/svg/layout/get-trading.svg'
import { Header } from 'components/elements'

type NavStaticProps = {
    is_ppc: boolean
    nav_label: string
}

const NavStatic = ({ is_ppc, nav_label }: NavStaticProps) => (
    <NavTemplate is_ppc={is_ppc} nav_height="10.4rem" nav_height_mobile="10.4rem" static_position>
        <LogoLink max_width="31rem" to="/" aria-label="Home">
            <Flex ai="center">
                <img src={LogoOnly} alt="deriv logo" width={160} height={27} />
                <Line />
                {nav_label ? (
                    <Flex ai="center" max_width="31rem">
                        <Header as="p" type="sub-section-title" color="white" weight="normal">
                            {nav_label}
                        </Header>
                    </Flex>
                ) : (
                    <img src={GetTrading} alt="get trading" width={120} height={17} />
                )}
            </Flex>
        </LogoLink>
    </NavTemplate>
)

export default NavStatic
