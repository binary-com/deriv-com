import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import NavTemplate from './components/nav-template'
import { LogoLink, StyledLink, Wrapper } from './styles/nav-styles'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context.js'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
import { besquare_signup_url } from 'common/constants'
import { localize } from 'components/localization'

type NavCareersProps = {
    is_besquare?: boolean
}

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`
const NavWrapper = styled.div`
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
const StyledLogoLink = styled(LogoLink)`
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
const RightSection = styled(Flex)`
    width: auto;
    justify-self: flex-end;
`
const StyledLinkButton = styled(LinkButton)`
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
const NavLink = styled(StyledLink)`
    @media ${device.mobileM} {
        font-size: 9px;
        padding: 4px;
    }
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const links = [
    { id: 1, active: 'home', title: localize('HOME'), aria_label: 'Careers', to: '/careers/' },
    {
        id: 2,
        active: 'locations',
        title: localize('LOCATIONS'),
        aria_label: 'Locations',
        to: '/careers/locations/',
    },
    {
        id: 3,
        active: 'besquare',
        title: localize('BESQUARE'),
        aria_label: 'BeSquare',
        to: '/careers/besquare/',
    },
]

const NavCareers = ({ is_besquare }: NavCareersProps) => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    const current_page = useActiveLinkState('careers')

    return (
        <NavTemplate>
            <NavWrapper>
                <Wrapper offset_px_mobile={4}>
                    <LeftSection>
                        <StyledLogoLink to="/" aria-label="Home">
                            <QueryImage
                                data={data['deriv']}
                                alt="Deriv"
                                width="16.4rem"
                                height="auto"
                                loading="eager"
                            />
                        </StyledLogoLink>

                        {links.map((item) => (
                            <NavLink
                                key={item.id}
                                active={current_page === item.active}
                                activeClassName="active"
                                to={item.to}
                                partiallyActive
                                aria-label={item.aria_label}
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </LeftSection>

                    <RightSection jc="flex-end" ai="center">
                        {has_mounted && (
                            <StyledLinkButton
                                external="true"
                                secondary
                                target="_blank"
                                rel="noopener noreferrer"
                                ml="2.4rem"
                                to={is_besquare ? besquare_signup_url : '/'}
                                type={is_besquare && 'zoho'}
                            >
                                {is_besquare ? 'Apply now' : 'Explore jobs'}
                            </StyledLinkButton>
                        )}
                    </RightSection>
                </Wrapper>
            </NavWrapper>
        </NavTemplate>
    )
}

export default NavCareers
