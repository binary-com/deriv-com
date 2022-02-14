import React from 'react'
import styled from 'styled-components'
import { LogoLink, Line } from './styles/nav-styles'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import { CFDWarning } from 'components/layout'

const StaticWrapper = styled.nav`
    background: var(--color-black);
    display: flex;
    height: 10.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

type NavStaticProps = {
    is_ppc: boolean
}

const NavStatic = (props: NavStaticProps) => (
    <>
        <StaticWrapper>
            <LogoLink mw="31rem" to="/" aria-label={localize('Home')}>
                <Flex ai="center">
                    <img src={LogoOnly} alt="logo only nav static" width={160} height={27} />
                    <Line />
                    <img
                        src={LogoCombinedShape}
                        alt="logo combined shape nav static"
                        width={120}
                        height={17}
                    />
                </Flex>
            </LogoLink>
        </StaticWrapper>
        <CFDWarning {...props} />
    </>
)

export default NavStatic
