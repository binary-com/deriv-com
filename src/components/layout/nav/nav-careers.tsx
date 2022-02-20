import React, { useContext } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {
    StyledNavPartners as StyledNav,
    StyledLink,
    NavWrapperPartners as NavWrapper,
    LogoLink,
    Wrapper,
    NavLeftPartners as NavLeft,
} from './styles/nav-styles'
import CFDWarning from './components/cfd-warning'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
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

type NavCareersProps = {
    is_besquare?: boolean
}

const NavCareers = ({ is_besquare }: NavCareersProps) => {
    const data = useStaticQuery(query)
    const { has_mounted } = useContext(LocationContext)
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

    const links = [
        { id: 1, title: 'HOME', active: 'home', to: '/careers/', aria_label: 'Careers' },
        {
            id: 2,
            title: 'LOCATIONS',
            active: 'locations',
            to: '/careers/locations/',
            aria_label: 'Locations',
        },
        {
            id: 3,
            title: 'BESQUARE',
            active: 'besquare',
            to: '/careers/besquare/',
            aria_label: 'BeSquare',
        },
    ]

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

                            {links.map((item) => {
                                return (
                                    <CareerLink
                                        key={item.id}
                                        active={current_page === item.active}
                                        activeClassName="active"
                                        to={item.to}
                                        aria-label={item.aria_label}
                                        partiallyActive
                                    >
                                        {item.title}
                                    </CareerLink>
                                )
                            })}
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

export default NavCareers
