import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Desktop, Mobile } from 'components/containers'
import { QueryImage } from 'components/elements'
import device from 'themes/device'
import { localize } from 'components/localization'
import desktop_bg from 'images/common/about/about_us_bg_desktop.png'
import mobile_bg from 'images/common/about/about_us_bg_mobile.png'

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

const MobileHeader = styled.h1`
    color: var(--color-white);
    text-align: center;
    margin-top: 40px;
    font-size: 84px;
    line-height: 94px;
    font-weight: bold;

    @media ${device.tabletS} {
        max-width: 300px;
        width: 100%;
    }
    @media ${device.mobileL} {
        max-width: 210px;
        font-size: 64px;
        line-height: 1.25;
    }
`

const DesktopHeader = styled.h1`
    color: white;
    font-weight: bold;
    margin: 120px auto;
    letter-spacing: 1px;
    font-size: 200px;
    z-index: 3;
    line-height: inherit;
    text-align: center;

    @media (max-width: 1200px) {
        font-size: 140px;
    }
`

const StyledFlex = styled(Flex)`
    min-height: 400px;
    position: relative;
`

const StyledQueryImage = styled(QueryImage)`
    max-width: 591px;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const StyledMobileQueryImage = styled(QueryImage)`
    max-width: 445px;
`
const Hero = () => {
    const data = useStaticQuery(query)
    const title = localize('Who we are')

    return (
        <ParentWrapper bg_image_desktop={desktop_bg} bg_image_mobile={mobile_bg}>
            <ContentWrapper jc="center">
                <Desktop>
                    <StyledFlex>
                        <StyledQueryImage
                            data={data['about_us_logo']}
                            alt="example"
                            width="unset"
                            loading="eager"
                        />
                        <Flex jc="center" p="0 32px" max_width="1440px">
                            <DesktopHeader>{title}</DesktopHeader>
                        </Flex>
                    </StyledFlex>
                </Desktop>
                <Mobile>
                    <Flex fd="column" ai="center" p="0 16px">
                        <StyledMobileQueryImage
                            data={data['about_us_logo']}
                            alt="example"
                            width="unset"
                        />
                        <MobileHeader>{title}</MobileHeader>
                    </Flex>
                </Mobile>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
