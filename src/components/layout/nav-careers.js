import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledNav, StyledLink, NavWrapper, LogoLink, Wrapper, NavLeft } from './nav'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/utility'
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

const CareerLogo = styled(LogoLink)`
    margin-right: 3.2rem;

    @media ${device.mobileL} {
        margin-right: 0;
        max-width: 100px;
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
                            <CareerLogo to={'/'} aria-label={localize('Home')}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={localize('Deriv')}
                                    width="16.4rem"
                                    height="auto"
                                />
                            </CareerLogo>
                            <StyledLink
                                activeClassName="active"
                                to="/careers"
                                aria-label={localize('Careers home')}
                                partiallyActive={true}
                            >
                                HOME
                            </StyledLink>
                            <StyledLink
                                activeClassName="active"
                                to="/careers/locations/"
                                aria-label={localize('Locations')}
                                partiallyActive={true}
                            >
                                LOCATIONS
                            </StyledLink>
                        </CareerNavLeft>
                        <CareerRight jc="flex-end" ai="center">
                            {has_mounted && (
                                <LinkButton
                                    external
                                    secondary
                                    to={zoho_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    ml="2.4rem"
                                >
                                    Explore jobs
                                </LinkButton>
                            )}
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

export default { NavCareers }
