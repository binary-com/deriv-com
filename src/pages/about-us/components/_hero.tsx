import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device.js'
import { localize } from 'components/localization'
import desktop_bg from 'images/common/about/about_us_bg_desktop.png'
import mobile_bg from 'images/common/about/about_us_bg_mobile.png'

const query = graphql`
    query {
        about_us_logo_desktop: file(relativePath: { eq: "about/about_us_logo_desktop.png" }) {
            ...fadeIn
        }
        about_us_logo: file(relativePath: { eq: "about/about_us_logo.png" }) {
            ...fadeIn
        }
    }
`

type ParentWrapperProps = {
    bg_image_desktop: string
    bg_image_mobile: string
}

const ParentWrapper = styled(Flex)<ParentWrapperProps>`
    width: 100%;
    background-image: url(${(props) => props.bg_image_desktop});
    background-position: center;
    background-size: cover;

    @media ${device.tabletL} {
        background-image: url(${(props) => props.bg_image_mobile});
    }
`
const ContentWrapper = styled(Container)`
    height: auto;
    margin: 180px 0;

    @media ${device.tabletL} {
        margin: 168px 0 145px;
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: flex;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 84px;
        line-height: 94px;
    }
    @media ${device.tabletS} {
        white-space: pre;
    }
`

const StyledHeaderDesktopAbout = styled(Header)`
    height: 100%;
    margin: 170px auto 70px;
    letter-spacing: 1px;
    font-size: 200px;
    z-index: 3;
    line-height: inherit;
    @media (max-width: 1330px) {
        font-size: 170px;
    }
`

const StyledFlex = styled(Flex)`
    min-height: 400px;
    min-width: 1000px;
`

const StyledQueryImage = styled(QueryImage)`
    z-index: 2;
    position: absolute;
`

const Hero = () => {
    const data = useStaticQuery(query)

    return (
        <ParentWrapper bg_image_desktop={desktop_bg} bg_image_mobile={mobile_bg}>
            <ContentWrapper>
                <DesktopWrapper>
                    <StyledFlex>
                        <StyledQueryImage
                            data={data['about_us_logo_desktop']}
                            alt="example"
                            width="100%"
                        />
                        <StyledHeaderDesktopAbout
                            as="h1"
                            color="white"
                            align="center"
                            type="main-landing-title"
                            width="100%"
                            padding="0"
                        >
                            {localize('Who we are')}
                        </StyledHeaderDesktopAbout>
                    </StyledFlex>
                </DesktopWrapper>
                <MobileWrapper>
                    <Flex fd="column">
                        <QueryImage data={data['about_us_logo']} alt="example" />
                        <StyledHeader as="h1" color="white" align="center" mt="40px" type="unset">
                            {localize('Who \nwe are')}
                        </StyledHeader>
                    </Flex>
                </MobileWrapper>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
