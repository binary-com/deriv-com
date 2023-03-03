import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import { Desktop, Flex, Mobile } from 'components/containers'
import { QueryImage } from 'components/elements'
import device from 'themes/device'
import desktop_bg from 'images/common/who-we-are/about_us_bg_desktop.png'
import mobile_bg from 'images/common/who-we-are/about_us_bg_mobile.png'

type ParentWrapperProps = {
    bg_image_desktop: string
    bg_image_mobile: string
}
const ParentWrapper = styled(Flex)<ParentWrapperProps>`
    width: 100%;
    background-image: url(${({ bg_image_desktop }) => bg_image_desktop});
    background-position: center;
    background-size: cover;

    @media ${device.tabletL} {
        background-image: url(${({ bg_image_mobile }) => bg_image_mobile});
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
`
const StyledMobileQueryImage = styled(QueryImage)`
    max-width: 445px;
`

const Hero = ({ hero }: any) => {
    return (
        <ParentWrapper bg_image_desktop={desktop_bg} bg_image_mobile={mobile_bg}>
            <ContentWrapper jc="center">
                <Desktop>
                    <StyledFlex>
                        <StyledQueryImage
                            data={getImage(hero?.hero_image.localFile)}
                            alt="example"
                            width="unset"
                            loading="eager"
                        />
                        <Flex jc="center" p="0 32px" max_width="1440px">
                            <DesktopHeader>{hero?.header}</DesktopHeader>
                        </Flex>
                    </StyledFlex>
                </Desktop>
                <Mobile>
                    <Flex fd="column" ai="center" p="0 16px">
                        <StyledMobileQueryImage
                            data={getImage(hero?.hero_image.localFile)}
                            alt="example"
                            width="unset"
                            loading="eager"
                        />
                        <MobileHeader>{hero?.header}</MobileHeader>
                    </Flex>
                </Mobile>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
