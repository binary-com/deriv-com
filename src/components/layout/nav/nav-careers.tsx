import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import NavTemplate from './components/nav-template'
import { LogoLink, StyledLink, HamburgerMenu, CloseIcon } from './styles/nav-styles'
import { Flex, Desktop, Mobile } from 'components/containers'
import { QueryImage, OffCanvasMenuWrapperCareer, useMoveOffCanvasMenu } from 'components/elements'
import Hamburger from 'images/svg/layout/hamburger_menu.svg'
import Close from 'images/svg/layout/close-long.svg'
import { LinkButton } from 'components/form'
import { LocationContext } from 'components/layout/location-context'
import { useActiveLinkState } from 'components/hooks/use-active-link-state'
import device from 'themes/device'
import { besquare_signup_url, zoho_career_url } from 'common/constants'

type NavCareersProps = {
    is_besquare?: boolean
}
const MainWrapper = styled(Flex)`
    padding: 1.2rem 0;
    height: 72px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-left: 16px;

    @media ${device.tabletL} {
        height: 48px;
        width: 95%;
    }
`
const LogoSection = styled.div`
    display: flex;
    align-items: center;
    max-width: 156px;
    width: 100%;

    @media ${device.tabletL} {
        max-width: none;
        margin: 4px 0 4px 10px;
    }
`
const HeaderSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    font-size: 16px;
`
const NavWrapper = styled.div`
    padding: 0 120px;

    .fresnel-between-start-tabletL {
        display: none;
    }

    @media ${device.tabletL} {
        .fresnel-between-start-tabletL {
            display: flex;
            width: 100%;
            align-items: center;
        }

        padding: 0;
    }
`
const StyledLogoLink = styled(LogoLink)`
    margin-right: 3.2rem;
    width: 16.4rem;

    @media ${device.tabletS} {
        margin-right: 0;
        max-width: 100px;
    }

    @media ${device.tabletL} {
        & .gatsby-image-wrapper {
            width: 115px;
        }
    }
`
const RightSection = styled(Flex)`
    width: auto;
    justify-self: flex-end;
`
const StyledLinkButton = styled(LinkButton)`
    @media ${device.tabletL} {
        font-size: 14px;
        margin-right: 16px;
        width: 120px;
        height: 40px;
        padding: 13px 16px;
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
    { active: 'home', title: 'Home', aria_label: 'Careers', to: '/careers/' },
    {
        active: 'locations',
        title: 'Locations',
        aria_label: 'Locations',
        to: '/careers/locations/',
    },
    {
        active: 'besquare',
        title: 'BeSquare',
        aria_label: 'BeSquare',
        to: '/careers/besquare/',
    },
]

const NavCareers = ({ is_besquare }: NavCareersProps) => {
    const data = useStaticQuery(query)
    const { has_mounted } = React.useContext(LocationContext)
    const current_page = useActiveLinkState('careers')
    const [is_canvas_menu_open, openOffCanvasMenu, closeOffCanvasMenu] = useMoveOffCanvasMenu()

    return (
        <NavTemplate>
            <NavWrapper>
                <MainWrapper>
                    <Mobile>
                        {is_canvas_menu_open ? (
                            <CloseIcon src={Close} alt="close icon" onClick={closeOffCanvasMenu} />
                        ) : (
                            <HamburgerMenu
                                src={Hamburger}
                                alt="hamburger menu"
                                onClick={openOffCanvasMenu}
                            />
                        )}
                    </Mobile>

                    <LogoSection>
                        <StyledLogoLink to="/" aria-label="Home">
                            <QueryImage
                                data={data['deriv']}
                                alt="Deriv"
                                height="auto"
                                loading="eager"
                            />
                        </StyledLogoLink>
                    </LogoSection>
                    <Desktop>
                        <HeaderSection>
                            {links.map(({ to, active, aria_label, title }) => (
                                <NavLink
                                    key={to}
                                    active={current_page === active}
                                    activeClassName="active"
                                    to={to}
                                    partiallyActive
                                    aria-label={aria_label}
                                >
                                    {title}
                                </NavLink>
                            ))}
                        </HeaderSection>
                    </Desktop>

                    <RightSection jc="flex-end" ai="center">
                        {has_mounted && (
                            <StyledLinkButton
                                secondary
                                rel="noopener noreferrer"
                                ml="2.4rem"
                                to={is_besquare ? besquare_signup_url : zoho_career_url}
                            >
                                {is_besquare ? 'Apply now' : 'Explore jobs'}
                            </StyledLinkButton>
                        )}
                    </RightSection>
                    <OffCanvasMenuWrapperCareer
                        is_canvas_menu_open={is_canvas_menu_open}
                        closeOffCanvasMenu={closeOffCanvasMenu}
                    />
                </MainWrapper>
            </NavWrapper>
        </NavTemplate>
    )
}

export default NavCareers
