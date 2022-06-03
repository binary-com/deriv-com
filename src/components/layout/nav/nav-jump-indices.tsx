import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import NavTemplate from './components/nav-template'
import { LocalizedLink } from 'components/localization'
import GetTrading from 'images/svg/layout/get-trading.svg'
import { QueryImage } from 'components/elements'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'

const ContentContainer = styled(Container)`
    justify-content: space-between;
    height: 100%;
    @media ${device.tabletL} {
        justify-content: center;
    }
`
const LogoWrapper = styled(Flex)`
    align-items: center;
    width: 293px;
    @media ${device.tabletL} {
        width: 176px;
    }
`
const ImgWrapper = styled.img`
    width: 120px;
    height: 16px;
    @media ${device.tabletL} {
        width: 75px;
        height: 10px;
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
const LogoLink = styled(LocalizedLink)`
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

const NavJumpIndice = () => {
    const data = useStaticQuery(query)

    return (
        <NavTemplate nav_height_mobile="48px">
            <ContentContainer>
                <LogoWrapper>
                    <LogoLink to="/" aria-label="Home">
                        <QueryImage
                            data={data['deriv']}
                            alt="deriv logo"
                            max_width="16.4rem"
                            width="100%"
                            height="auto"
                        />
                    </LogoLink>
                    <Line />
                    <ImgWrapper src={GetTrading} alt="get trading" />
                </LogoWrapper>
            </ContentContainer>
        </NavTemplate>
    )
}

export default NavJumpIndice
