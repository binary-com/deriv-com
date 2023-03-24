import React from 'react'
import styled from 'styled-components'
import { getImage } from 'gatsby-plugin-image'
import { THero } from '../_types'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'
import { Desktop, Flex, Mobile } from 'components/containers'
import { QueryImage } from 'components/elements'
import device from 'themes/device'

type ParentWrapperProps = {
    bg_image: string
}
const ParentWrapper = styled(Flex)<ParentWrapperProps>`
    width: 100%;
    background-image: url(${({ bg_image }) => bg_image});
    background-position: center;
    background-size: cover;
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

const Hero = ({ hero }: THero) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const bg_image = is_mobile_or_tablet
        ? hero?.bg_mobile.localFile.childImageSharp.gatsbyImageData.images.fallback.src
        : hero?.bg_desktop.localFile.childImageSharp.gatsbyImageData.images.fallback.src

    return (
        <ParentWrapper bg_image={bg_image}>
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
                            <DesktopHeader>
                                <Localize translate_text={hero?.header} cms />
                            </DesktopHeader>
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
                        <MobileHeader>
                            <Localize translate_text={hero?.header} cms />
                        </MobileHeader>
                    </Flex>
                </Mobile>
            </ContentWrapper>
        </ParentWrapper>
    )
}

export default Hero
