import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledNavPartners as StyledNav,
    StyledLink,
    NavWrapperPartners as NavWrapper,
    LogoLink,
    Wrapper,
    NavLeftPartners as NavLeft,
    Line,
} from './nav'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
// import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import LogoCombinedShape from 'images/svg/layout/logo-combined-shape.svg'
import device from 'themes/device'
import { CFDWarning } from 'components/layout'

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
`

const CareerButton = styled(LinkButton)`
    @media ${device.tabletS} {
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

const CareerLogo = styled(LogoLink)`
    /* margin-right: 3.2rem; */
    @media ${device.tabletS} {
        margin-right: 0;
        max-width: 100px;
    }
    @media ${device.mobileL} {
        max-width: 80px;

        & .gatsby-image-wrapper {
            width: 80px;
        }
    }
`

const CareerNavLeft = styled(NavLeft)`
    @media ${device.tabletL} {
        display: flex;
    }
`

const NavCenter = styled.ul`
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: center;
    line-height: 1.2;

    @media (max-width: 1227px) {
        font-size: 14px;
    }
    @media (max-width: 1175px) {
        font-size: 12px;
    }
    @media (max-width: 1116px) {
        font-size: 11px;
    }
    @media (max-width: 991px) {
        display: none;
    }
`
// const Line = styled.div`
//     width: 1px;
//     height: 28px;
//     margin-right: 8px;
//     margin-left: 8px;
//     background-color: var(--color-white);
// `

export const NavLocations = () => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    // const current_page = useActiveLinkState('careers')

    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <Wrapper offset_px_mobile={4}>
                        <CareerNavLeft>
                            <CareerLogo to={'/'} aria-label={'Home'}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={'Deriv'}
                                    width="16.4rem"
                                    height="auto"
                                />
                            </CareerLogo>
                            <Line />
                            <img src={LogoCombinedShape} alt="logo combined shape" />
                        </CareerNavLeft>
                        <NavCenter>
                            <CareerLink
                                to="/careers/"
                                aria-label={'Careers'}
                                partiallyActive={true}
                            >
                                Home
                            </CareerLink>
                            <CareerLink
                                to="/careers/locations/"
                                aria-label={'Locations'}
                                partiallyActive={true}
                            >
                                Locations
                            </CareerLink>
                            <CareerLink
                                to="/careers/besquare/"
                                aria-label={'BeSquare'}
                                partiallyActive={true}
                            >
                                BeSquare
                            </CareerLink>
                        </NavCenter>
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
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
            <CFDWarning />
        </>
    )
}

export default { NavLocations }
