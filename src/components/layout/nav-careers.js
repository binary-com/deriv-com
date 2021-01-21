import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledNav, StyledLink, NavWrapper, LogoLink, Wrapper, NavLeft } from './nav'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
import device from 'themes/device'

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
    margin-right: 3.2rem;

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

export const NavCareers = () => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <Wrapper>
                        <CareerNavLeft>
                            <CareerLogo to={'/'} aria-label={'Home'}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={'Deriv'}
                                    width="16.4rem"
                                    height="auto"
                                />
                            </CareerLogo>
                            <CareerLink
                                activeClassName="active"
                                to="/careers"
                                aria-label={'Careers'}
                                partiallyActive={true}
                            >
                                HOME
                            </CareerLink>
                            <CareerLink
                                activeClassName="active"
                                to="/careers/locations/"
                                aria-label={'Locations'}
                                partiallyActive={true}
                            >
                                LOCATIONS
                            </CareerLink>
                            <CareerLink
                                activeClassName="active"
                                to="/"
                                is_besquare_link
                                external="true"
                                aria-label={'BeSquare'}
                            >
                                BESQUARE
                            </CareerLink>
                        </CareerNavLeft>
                        <CareerRight jc="flex-end" ai="center">
                            {has_mounted && (
                                <CareerButton
                                    external
                                    secondary
                                    is_zoho_link
                                    to="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ml="2.4rem"
                                >
                                    Explore jobs
                                </CareerButton>
                            )}
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

export default { NavCareers }
