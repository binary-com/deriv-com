import React from 'react'
import styled from 'styled-components'
import {
    DesktopWrapper,
    MobileWrapper,
    LogoLinkMobile,
    Line,
    LogoLink,
    LogoDescription,
} from './styles/nav-styles'
import { localize, LanguageSwitcher } from 'components/localization'
import { LinkButton } from 'components/form'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import Logo from 'images/svg/layout/logo-deriv.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import { CFDWarning } from 'components/layout'

const InterimNav = styled.nav`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    background: var(--color-black);
`
const Auto = styled(Flex)`
    @media ${device.mobileM} {
        width: 100%;
    }
`
const LeftButton = styled(LinkButton)`
    margin-left: 0.8rem;
    @media ${device.mobileL} {
        padding: 1rem;
    }
`
const StyledLogo = styled(LogoLink)`
    max-width: 31rem;
    @media ${device.mobileL} {
        display: none;
    }
    @media (max-width: 340px) {
        & svg {
            width: 11rem;
        }
    }
`
const NavInterimContainer = styled.div`
    position: relative;
`

type NavInterimProps = {
    interim_type: string
}

const NavInterim = ({ interim_type }: NavInterimProps) => (
    <InterimNav>
        <NavInterimContainer>
            <Container jc="space-between" p="2.4rem 0">
                <Flex ai="center" jc="flex-start">
                    <DesktopWrapper>
                        <StyledLogo to={`/interim/${interim_type}`} aria-label={localize('Home')}>
                            <Flex ai="center">
                                <img src={Logo} alt="logo" width="190" height="27" />
                                <img
                                    src={LogoCombinedShape}
                                    alt="logo combined shape desktop"
                                    width="120"
                                    height="17"
                                />
                            </Flex>
                        </StyledLogo>
                    </DesktopWrapper>

                    <MobileWrapper>
                        <LogoLinkMobile
                            to={`/interim/${interim_type}`}
                            aria-label={localize('Home')}
                        >
                            <Flex>
                                <img src={LogoOnly} alt="logo only 2" width="115" height="27" />
                                <LogoDescription ai="center">
                                    <Line />
                                    <img
                                        src={LogoCombinedShape}
                                        alt="logo combined shape mobile"
                                        width="120"
                                        height="17"
                                    />
                                </LogoDescription>
                            </Flex>
                        </LogoLinkMobile>
                    </MobileWrapper>
                </Flex>

                <Auto jc="flex-end" ai="center">
                    <LanguageSwitcher short_name="true" />
                    <LeftButton secondary to="/">
                        {localize('Explore Deriv.com')}
                    </LeftButton>
                </Auto>
            </Container>
        </NavInterimContainer>
        <CFDWarning />
    </InterimNav>
)

export default NavInterim
