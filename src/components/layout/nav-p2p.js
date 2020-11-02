import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { StyledNav, NavWrapper, LogoLink, Wrapper, NavLeft } from './nav'
import { localize } from 'components/localization'
import { QueryImage } from 'components/elements'
import device from 'themes/device'
import LogoCombinedShape from 'images/svg/logo-combined-shape.svg'

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
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
    }
`

const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);
`

export const NavP2P = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <NavWrapper>
                <StyledNav>
                    <Wrapper>
                        <P2PNavLeft>
                            <StyledLogoLink to={'/'} aria-label={localize('Home')}>
                                <QueryImage
                                    data={data['deriv']}
                                    alt={localize('Deriv')}
                                    max_width="16.4rem"
                                    width="100%"
                                    height="auto"
                                />
                            </StyledLogoLink>
                            <Line />
                            <LogoCombinedShape />
                        </P2PNavLeft>
                    </Wrapper>
                </StyledNav>
            </NavWrapper>
        </>
    )
}

export default { NavP2P }
