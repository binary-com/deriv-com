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
    background-image: url(${(props) => props.bg_image_desktop});
    background-position: center;
    background-size: cover;

    @media ${device.tabletL} {
        background-image: url(${(props) => props.bg_image_mobile});
    }
`
const ContentWrapper = styled(Container)`
    height: auto;
    margin: 180px;

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
        font-size: 72px;
        line-height: 94px;
    }
`

const StyledHeaderDesktopAbout = styled(Header)`
    position: absolute;
    height: 195.52px;
    top: 90px;
    font-size: 210px;
    letter-spacing: 8px;
    z-index: 3;
`

const StyledHeaderDesktopUs = styled(Header)`
    position: absolute;
    height: 195.52px;
    top: 90px;
    font-size: 210px;
    letter-spacing: 8px;
    z-index: 1;
    margin-right: -770px;
`

const StyledFlex = styled(Flex)`
    height: 400px;
    width: 1000px;
`

const FlexHeader = styled(Flex)`
    position: absolute;
    height: 195.52px;
    font-size: 210px;
    letter-spacing: 8px;
`

const StyledQueryImage = styled(QueryImage)`
    z-index: 2;
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
                        <FlexHeader>
                            <StyledHeaderDesktopAbout color="white" align="center">
                                {localize('About us')}
                            </StyledHeaderDesktopAbout>
                        </FlexHeader>
                    </StyledFlex>
                </DesktopWrapper>
                <MobileWrapper>
                    <Flex fd="column">
                        <QueryImage data={data['about_us_logo']} alt="example" />
                        <StyledHeader color="white" align="center" mt="40px">
                            {localize('About us')}
                        </StyledHeader>
                    </Flex>
                </MobileWrapper>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
