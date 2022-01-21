import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device.js'
import { localize } from 'components/localization'
import desktop_bg from 'images/common/about/about_us_bg_desktop.png'
import mobile_bg from 'images/common/about/about_us_bg_mobile.png'
import { getWindowWidth } from 'common/utility'

const query = graphql`
    query {
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
    background-color: #10212f;
    background-image: url(${(props) => props.bg_image_desktop});
    background-position: center;
    background-size: cover;

    @media ${device.tabletL} {
        background-image: url(${(props) => props.bg_image_mobile});
    }
`
const ContentWrapper = styled(Flex)`
    height: auto;
    margin: 180px 0;

    @media ${device.tabletL} {
        margin: 180px 0 145px;
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;
    margin: 0 31px;

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

const StyledH1 = styled.h1`
    height: 100%;
    width: 100%;
    color: white;
    font-weight: bold;
    margin-top: 10%;
    display: flex;
    justify-content: center;
    letter-spacing: 1px;
    font-size: 200px;
    z-index: 3;
    line-height: inherit;
    @media (max-width: 1200px) {
        margin-top: 10%;
        font-size: 170px;
    }
`

const StyledFlex = styled(Flex)`
    min-height: 400px;
    width: 1150px;
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 591px;
    z-index: 2;
    position: absolute;
`
const StyledMobileQueryImage = styled(QueryImage)`
    max-width: 445px;
`
const Hero = () => {
    const data = useStaticQuery(query)
    const title =
        getWindowWidth() > 576 ? (
            localize('Who we are')
        ) : (
            <>
                {localize('Who')}
                <br></br>
                {localize('we are')}
            </>
        )

    return (
        <ParentWrapper bg_image_desktop={desktop_bg} bg_image_mobile={mobile_bg}>
            <ContentWrapper jc="center">
                <DesktopWrapper>
                    <StyledFlex>
                        <StyledQueryImage
                            data={data['about_us_logo']}
                            alt="example"
                            width="unset"
                        />
                        <StyledH1>{title}</StyledH1>
                    </StyledFlex>
                </DesktopWrapper>
                <MobileWrapper>
                    <Flex fd="column">
                        <StyledMobileQueryImage
                            data={data['about_us_logo']}
                            alt="example"
                            width="unset"
                        />
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
