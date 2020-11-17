import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledNav, NavWrapper, LogoLink, Wrapper, NavLeft } from './nav'
import { localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import { Show } from 'components/containers'
import device from 'themes/device'
import LogoCombinedShape from 'images/svg/logo-combined-shape.svg'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const StyledWrapper = styled(Wrapper)`
    @media ${device.tabletL} {
        justify-content: center;
    }
`

const StyledLogoLink = styled(LogoLink)`
    @media ${device.tabletS} {
        & svg,
        .gatsby-image-wrapper {
            width: 100%;
        }
    }
`

const P2PNavLeft = styled(NavLeft)`
    @media ${device.tabletL} {
        display: flex;
        width: 180px;
    }
`

const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        height: 16px;
        margin-left: 5px;
        margin-right: 4px;
    }
`

export const NavP2P = ({ nav_type }) => {
    const data = useStaticQuery(query)

    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <StyledWrapper>
                        <P2PNavLeft>
                            <StyledLogoLink
                                to={nav_type === 'p2p-v1' ? '/p2p/v1' : '/p2p/v2'}
                                aria-label={localize('Home')}
                            >
                                <QueryImage
                                    data={data['deriv']}
                                    alt={localize('Deriv')}
                                    max_width="16.4rem"
                                    width="100%"
                                    height="auto"
                                />
                            </StyledLogoLink>
                            <Line />
                            <Show.Desktop min_width="992">
                                <img src={LogoCombinedShape} alt="get trading" />
                            </Show.Desktop>
                            <Show.Mobile>
                                <img src={LogoCombinedShape} alt="get trading" width="71px" />
                            </Show.Mobile>
                        </P2PNavLeft>
                    </StyledWrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

NavP2P.propTypes = {
    nav_type: PropTypes.string,
}

export default { NavP2P }
