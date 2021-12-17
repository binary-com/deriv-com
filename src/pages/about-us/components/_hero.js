import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device.js'
import desktop_bg from 'images/common/about/about_us_bg_desktop.png'
import mobile_bg from 'images/common/about/about_us_bg_mobile.png'

const query = graphql`
    query {
        about_us_content_desktop: file(relativePath: { eq: "about/about_us_content.png" }) {
            ...fadeIn
        }
        about_us_logo_mobile: file(relativePath: { eq: "about/about_us_logo.png" }) {
            ...fadeIn
        }
    }
`

const ParentWrapper = styled(Flex)`
    background-image: url(${(props) => props.bg_image_desktop});
    background-position: center;
    background-size: cover;

    @media ${device.tabletL} {
        background-image: url(${(props) => props.bg_image_mobile});
    }
`
const ContentWrapper = styled(Container)`
    height: auto;
    margin: 120px 0;

    @media ${device.tabletL} {
        margin: 145px 0;
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

const Hero = () => {
    const data = useStaticQuery(query)

    return (
        <ParentWrapper bg_image_desktop={desktop_bg} bg_image_mobile={mobile_bg}>
            <ContentWrapper>
                <DesktopWrapper>
                    <Flex>
                        <QueryImage data={data['about_us_content_desktop']} alt="example" />
                    </Flex>
                </DesktopWrapper>
                <MobileWrapper>
                    <Flex fd="column">
                        <QueryImage data={data['about_us_logo_mobile']} alt="example" />
                        <StyledHeader color="white" align="center" mt="40px">
                            About us
                        </StyledHeader>
                    </Flex>
                </MobileWrapper>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
