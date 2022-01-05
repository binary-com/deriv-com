import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledNavPartners as StyledNav,
    StyledLink,
    NavWrapperPartners as NavWrapper,
    LogoLink,
    Wrapper,
    NavLeftPartners as NavLeft,
} from './nav'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
import { CFDWarning } from 'components/layout'
import { besquare_signup_url } from 'common/constants'

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

export const NavCareers = ({ is_besquare }) => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    const current_page = useActiveLinkState('careers')
    const button_component = is_besquare ? (
        <CareerButton
            external="true"
            secondary
            to={besquare_signup_url}
            target="_blank"
            rel="noopener noreferrer"
            ml="2.4rem"
        >
            Apply now
        </CareerButton>
    ) : (
        <CareerButton
            external="true"
            secondary
            type="zoho"
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            ml="2.4rem"
        >
            Explore jobs
        </CareerButton>
    )

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
                                    loading="eager"
                                />
                            </CareerLogo>
                            <CareerLink
                                active={current_page === 'home'}
                                activeClassName="active"
                                to="/careers/"
                                aria-label={'Careers'}
                                partiallyActive={true}
                            >
                                HOME
                            </CareerLink>
                            <CareerLink
                                active={current_page === 'locations'}
                                activeClassName="active"
                                to="/careers/locations/"
                                aria-label={'Locations'}
                                partiallyActive={true}
                            >
                                LOCATIONS
                            </CareerLink>
                            <CareerLink
                                active={current_page === 'besquare'}
                                activeClassName="active"
                                to="/careers/besquare/"
                                aria-label={'BeSquare'}
                                partiallyActive={true}
                            >
                                BESQUARE
                            </CareerLink>
                        </CareerNavLeft>
                        <CareerRight jc="flex-end" ai="center">
                            {has_mounted && button_component}
                        </CareerRight>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
            <CFDWarning />
        </>
    )
}

NavCareers.propTypes = {
    is_besquare: PropTypes.bool,
}

export default { NavCareers }
