import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledNavPartners as StyledNav,
    StyledLink,
    NavWrapperPartners as NavWrapper,
    Line,
    Wrapper,
    NavLeftPartners as NavLeft,
} from './nav'
import { LocalizedLink } from 'components/localization'
import { Flex } from 'components/containers'
import { QueryImage, moveOffCanvasMenu } from 'components/elements'
import { OffCanvasMenuWrapperCareer } from 'components/elements/off-canvas-menu-career'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
import { CFDWarning } from 'components/layout'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const CareerRight = styled(Flex)`
    width: auto;
    justify-self: flex-end;
    min-width: 120px;
`

const CareerButton = styled(LinkButton)`
    min-width: 130px;
    @media ${device.tabletS} {
        min-width: 102px;
        font-size: 12px;
    }
    @media ${device.mobileL} {
        font-size: 9px;
    }
    @media ${device.mobileM} {
        margin-left: 4px;
    }
`

const CareerLink = styled(StyledLink)`
    @media ${device.mobileM} {
        font-size: 9px;
        padding: 4px;
    }
`

const CareerNavLeft = styled(NavLeft)`
    max-width: 40rem;
    width: 100%;
    justify-content: space-between;

    @media ${device.tabletL} {
        display: flex;
    }
`
export const NavLeftMain = styled.div`
    text-align: left;
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`

const StyledWrapper = styled(Flex)`
    img {
        margin: auto;
        height: 20px;
    }
    @media ${device.laptop} {
        display: none;
    }
`

const HamburgerWrapper = styled(Flex)`
    display: none;
    justify-content: flex-end;
    align-items: center;
    padding: 5px;
    margin: 10px;
    @media ${device.laptop} {
        display: flex;
        max-width: 30px;
    }
`

const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    max-width: ${(props) => props.mw || '16rem'};
    width: 100%;
`

const HamburgerMenu = styled.img`
    cursor: pointer;
    display: none;
    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
    }
`

const CloseMenu = styled.img`
    cursor: pointer;
    display: none;
    @media (max-width: 1060px) {
        display: block;
        cursor: pointer;
    }
`

export const NavCareers = () => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    const current_page = useActiveLinkState('careers')

    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = moveOffCanvasMenu()

    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <Wrapper offset_px_mobile={4}>
                        <NavLeftMain>
                            <LogoLink to={'/'} aria-label={'Home'}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={'Deriv'}
                                    max_width="16.4rem"
                                    width="100%"
                                    height="20px"
                                    margin="auto"
                                />
                            </LogoLink>
                            <StyledWrapper>
                                <Line />
                                <img src={LogoCombinedShape} alt="logo combined shape" />
                            </StyledWrapper>
                        </NavLeftMain>

                        <StyledWrapper>
                            <CareerNavLeft>
                                <CareerLink
                                    active={current_page === 'home'}
                                    activeClassName="active"
                                    to="/careers/"
                                    aria-label={'Careers'}
                                    partiallyActive={true}
                                >
                                    Home
                                </CareerLink>
                                <CareerLink
                                    active={current_page === 'locations'}
                                    activeClassName="active"
                                    to="/careers/locations/"
                                    aria-label={'Locations'}
                                    partiallyActive={true}
                                >
                                    Locations
                                </CareerLink>
                                <CareerLink
                                    activeClassName="active"
                                    to="/besquare/"
                                    aria-label={'BeSquare'}
                                >
                                    BeSquare
                                </CareerLink>
                            </CareerNavLeft>
                        </StyledWrapper>

                        <CareerRight jc="flex-end" ai="center">
                            {has_mounted && (
                                <CareerButton
                                    external="true"
                                    secondary
                                    type="zoho"
                                    to="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ml="2.4rem"
                                >
                                    Apply now
                                </CareerButton>
                            )}

                            <HamburgerWrapper>
                                {is_canvas_menu_open ? (
                                    <CloseMenu
                                        src={Close}
                                        alt="close menu"
                                        onClick={closeOffCanvasMenu}
                                        width="16px"
                                    />
                                ) : (
                                    <HamburgerMenu
                                        src={Hamburger}
                                        alt="hamburger"
                                        onClick={openOffCanvasMenu}
                                        width="16px"
                                    />
                                )}
                            </HamburgerWrapper>
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
                <OffCanvasMenuWrapperCareer
                    is_canvas_menu_open={is_canvas_menu_open}
                    closeOffCanvasMenu={closeOffCanvasMenu}
                />
            </NavWrapper>
            <CFDWarning />
        </>
    )
}

export default { NavCareers }
