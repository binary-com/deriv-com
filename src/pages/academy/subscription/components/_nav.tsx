import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import AcademyLogo from 'images/svg/academy/academy-logo.svg'
import { QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import device from 'themes/device.js'

const Nav = styled.nav`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    padding: 0;
    height: 72px;
    display: flex;
    align-items: center;
    @media ${device.tabletL} {
        height: 48px;
    }
`

const ContentContainer = styled(Container)`
    justify-content: space-between;

    @media ${device.tabletL} {
        justify-content: center;
    }
`

const LogoWrapper = styled(Flex)`
    margin: auto;
    align-items: center;
    width: 323px;
    @media ${device.tabletL} {
        width: 190px;
        height: 16;
    }
`

const ImgWrapper = styled.img`
    width: 140px;
    height: 20px;

    @media ${device.tabletL} {
        width: 84px;
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
    }
`

export const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    width: 100%;
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const AcademyNav = () => {
    const data = useStaticQuery(query)
    return (
        <Nav>
            <ContentContainer>
                <LogoWrapper>
                    <LogoLink to="/academy/" aria-label={localize('Academy')}>
                        <QueryImage
                            data={data['deriv']}
                            alt={localize('Deriv')}
                            max_width="16.4rem"
                            width="100%"
                            height="auto"
                        />
                    </LogoLink>
                    <Line />
                    <LogoLink to="/academy/" aria-label={localize('Academy')}>
                        <ImgWrapper src={AcademyLogo} />
                    </LogoLink>
                </LogoWrapper>
            </ContentContainer>
        </Nav>
    )
}

export default AcademyNav
