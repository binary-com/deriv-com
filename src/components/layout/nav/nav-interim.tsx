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
import NavTemplate from './components/nav-template'
import { localize, LanguageSwitcher } from 'components/localization'
import { LinkButton } from 'components/form'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import Logo from 'images/svg/layout/logo-deriv.svg'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import GetTrading from 'images/svg/layout/get-trading.svg'

type NavInterimProps = {
    interim_type?: 'affiliate' | 'dbot' | 'deriv' | 'dmt5' | 'faq'
    landing_type?: boolean
}

const LogoWrapper = styled(LogoLink)`
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
const StyledLinkButton = styled(LinkButton)`
    margin-left: 0.8rem;
    @media ${device.mobileL} {
        padding: 1rem;
    }
`
const RightSection = styled(Flex)`
    @media ${device.mobileM} {
        width: 100%;
    }
`

const NavInterim = ({ interim_type, landing_type }: NavInterimProps) => (
    <NavTemplate>
        <Container jc="space-between" p="2.4rem 0">
            <Flex ai="center" jc="flex-start">
                <DesktopWrapper>
                    <LogoWrapper
                        to={interim_type ? `/interim/${interim_type}/` : `/landing/`}
                        aria-label="Home"
                    >
                        <Flex ai="center">
                            <img src={Logo} alt="deriv logo" width="190" height="27" />
                            <img src={GetTrading} alt="get trading" width="120" height="17" />
                        </Flex>
                    </LogoWrapper>
                </DesktopWrapper>

                <MobileWrapper>
                    <LogoLinkMobile
                        to={interim_type ? `/interim/${interim_type}/` : `/landing/`}
                        aria-label="Home"
                    >
                        <Flex ai="center">
                            <img src={LogoOnly} alt="deriv logo" width="115" height="19.4" />
                            <LogoDescription ai="center">
                                <Line />
                                <img src={GetTrading} alt="get trading" width="120" height="17" />
                            </LogoDescription>
                        </Flex>
                    </LogoLinkMobile>
                </MobileWrapper>
            </Flex>

            <RightSection jc="flex-end" ai="center">
                {!landing_type && <LanguageSwitcher has_short_name />}
                {!landing_type && (
                    <StyledLinkButton secondary to="/">
                        {localize('Explore Deriv.com')}
                    </StyledLinkButton>
                )}
            </RightSection>
        </Container>
    </NavTemplate>
)

export default NavInterim
