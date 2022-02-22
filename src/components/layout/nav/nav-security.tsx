import React, { useRef } from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { LinkButton } from 'components/form'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import { getBaseRef } from 'common/utility'
import LogoBugBounty from 'images/svg/layout/logo-bug-bounty.svg'
import { CFDWarning } from 'components/layout'

export const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    max-width: ${(props) => props.mw || '16rem'};
    width: 100%;

    @media ${device.tabletS} {
        & svg,
        .gatsby-image-wrapper {
            width: 10rem;
        }
    }
    @media ${device.mobileL} {
        & svg,
        .gatsby-image-wrapper {
            width: 12rem;
        }
    }
`
export const MobileWrapper = styled.div<any>`
    display: none;
    @media ${(props) => props.media || device.tabletL} {
        display: block;
    }
`
const NavRight = styled.div<any>`
    display: inline-flex;
    align-items: center;
    text-align: right;
    opacity: ${(props) => (props.mounted ? '1' : '0')};
    padding: 0;
    justify-content: center;
    transition: ${(props) => {
        if (props.move) {
            return 'all 0.25s'
        } else {
            if (props.has_scrolled) {
                return 'all 0.25s'
            }
            return 'none'
        }
    }};
    transform: translateX(
        ${(props) => {
            const ref_base = getBaseRef(props.button_ref)

            if (props.hide_signup_login) {
                return 0
            } else if (props.move && !props.hide_signup_login) {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 1
                }
                return 0
            } else {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 0

                    const calculation = ref_base.offsetWidth + 2
                    return `${calculation}px`
                }
                return '300px'
            }
        }}
    );

    > a {
        pointer-events: ${(props) => (props.move ? 'visible' : 'none')};
        cursor: ${(props) => (props.move ? 'pointer' : 'default')};
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledNavRight = styled(NavRight)<any>`
    margin-left: auto;
    transform: translateX(
        ${(props) => {
            const ref_base = getBaseRef(props.button_ref)
            if (props.move) {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 1
                }
                return '50px'
            } else {
                if (ref_base && props.mounted) {
                    ref_base.style.opacity = 0

                    const calculation = ref_base.offsetWidth + 50
                    return `${calculation}px`
                }
                return '225px'
            }
        }}
    );

    > a {
        pointer-events: visible;
        cursor: pointer;
    }
    > a:last-child {
        pointer-events: ${(props) => (props.move ? 'visible' : 'none')};
        cursor: ${(props) => (props.move ? 'pointer' : 'default')};
        opacity: ${(props) => (props.move ? 1 : 0)};
    }
`
const LogoLinkMobile = styled(LocalizedLink)`
    cursor: pointer;
    display: none;

    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
        margin-left: 2rem;
    }
`
export const Wrapper = styled(Container)`
    font-size: var(--text-size-s);
    padding: 1.2rem 0;
    justify-content: space-between;
    height: 7.2rem;
    @media ${device.laptopL} {
        width: ${({ width }) => width ?? '90%'};
    }
    @media ${device.laptop} {
        font-size: var(--text-size-xxs);
    }
    @media ${device.mobileM} {
        ${({ offset_px_mobile }) =>
            offset_px_mobile && `width: calc(100% - ${offset_px_mobile}px)`};
    }
`
export const NavWrapperPartners = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;

    .fresnel-between-start-tabletL {
        display: none;
    }
    @media ${device.tabletL} {
        .fresnel-between-start-tabletL {
            display: flex;
            width: 100%;
            align-items: center;
        }
    }
`
const DerivHomeWrapper = styled.div`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    height: 3.6rem;
`

const HomeLink = styled(LocalizedLink)`
    margin-right: 3.2rem;
    text-decoration: none;
`

const HomeContainer = styled(Container)`
    height: 100%;
`
export const StyledNavPartners = styled.nav`
    background-color: var(--color-black);
    height: 7.2rem;
    width: 100%;
    position: relative;
    z-index: 1;
    @media ${device.tabletL} {
        height: auto;
    }
`
const StyledContainer = styled(Container)`
    margin: 0;
`
const StyledNavWrapper = styled(Wrapper)`
    justify-content: flex-start;

    @media ${device.tabletL} {
        justify-content: ${(props) => (props.no_login_signup ? 'flex-start' : 'space-between')};
    }
`

const StyledNavWrapperPartner = styled(StyledNavWrapper)`
    ${LogoLinkMobile} {
        margin: 0 2.4rem;
    }
`
export const NavLeftMain = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`

export const NavLeftPartners = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;

    @media (max-width: 991px) {
        display: none;
    }
`
const LogoLinkMobileSecurity = styled(LogoLinkMobile)`
    margin: unset;
`
const Mobile = styled(MobileWrapper)`
    width: 100%;
`

const ResLogo = styled.img`
    width: 115px;
    @media ${device.mobileM} {
        width: 98px;
    }
    @media (max-width: 336px) {
        width: 82px;
    }
`

const SecurityLogoInMobile = styled.img`
    width: 170px;
    margin-right: 10px;
`
const SecurityNavRight = styled(StyledNavRight)`
    transform: unset;

    > a:last-child {
        opacity: 1;
        color: var(--color-white);
        pointer-events: visible;
        cursor: pointer;
    }
`
const NavLogoLink = styled(LogoLink)`
    @media (max-width: 1300px) {
        & svg,
        .gatsby-image-wrapper {
            width: 25rem;
        }
    }
    @media (max-width: 1150px) {
        & svg,
        .gatsby-image-wrapper {
            width: 23rem;
        }
    }
    @media (max-width: 1105px) {
        & svg,
        .gatsby-image-wrapper {
            width: 23rem;
        }
    }
`

// Note: When using layout component for security page, please add type='security' and padding_top='10rem'
const NavSecurity = () => {
    const button_ref = useRef(null)

    return (
        <>
            <NavWrapperPartners>
                <DerivHomeWrapper>
                    <HomeContainer justify="space-between">
                        <StyledContainer justify="flex-start">
                            <HomeLink to="/">
                                <Header weight="normal" color="grey-19" type="paragraph-2">
                                    {localize('Go to Deriv.com')}
                                </Header>
                            </HomeLink>
                            <HomeLink to="/story/">
                                <Header weight="normal" color="grey-19" type="paragraph-2">
                                    {localize('About us')}
                                </Header>
                            </HomeLink>
                            <HomeLink to="/contact_us/">
                                <Header weight="normal" color="grey-19" type="paragraph-2">
                                    {localize('Contact us')}
                                </Header>
                            </HomeLink>
                        </StyledContainer>

                        <Flex ml="auto" ai="center" width="auto">
                            <LanguageSwitcher short_name="true" security />
                        </Flex>
                    </HomeContainer>
                </DerivHomeWrapper>

                <StyledNavPartners>
                    <StyledNavWrapper>
                        <NavLeftPartners>
                            <NavLogoLink to="/" aria-label={localize('Bug bounty')}>
                                <img src={LogoBugBounty} alt="logo bug bounty" />
                            </NavLogoLink>
                        </NavLeftPartners>
                        <SecurityNavRight button_ref={button_ref} mounted={true}>
                            <LinkButton
                                to={'mailto:security@deriv.com'}
                                is_mail_link
                                external="true"
                                target="_blank"
                                tertiary
                                style={{ width: '16rem' }}
                            >
                                <span>{localize('Submit a report')}</span>
                            </LinkButton>
                        </SecurityNavRight>

                        <Mobile>
                            <Flex ai="center" jc="space-between">
                                <LogoLinkMobileSecurity to="/" aria-label={localize('Bug bounty')}>
                                    <SecurityLogoInMobile
                                        src={LogoBugBounty}
                                        alt="logo bug bounty"
                                    />
                                </LogoLinkMobileSecurity>

                                <LinkButton
                                    to={'mailto:security@deriv.com'}
                                    is_mail_link
                                    external="true"
                                    target="_blank"
                                    tertiary
                                    style={{
                                        color: 'var(--color-white)',
                                        fontSize: '12px',
                                        padding: '8px 16px 7px',
                                    }}
                                >
                                    <span>{localize('Submit a report')}</span>
                                </LinkButton>
                            </Flex>
                        </Mobile>
                    </StyledNavWrapper>
                </StyledNavPartners>
            </NavWrapperPartners>
            <CFDWarning />
        </>
    )
}

export default NavSecurity
