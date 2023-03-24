import React from 'react'
import styled, { css } from 'styled-components'
import { TWhoWeAreBanner } from '../_types'
import { Localize } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { useIsRtl } from 'components/hooks/use-isrtl'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px 120px;
    flex-wrap: nowrap;

    @media ${device.tablet} {
        padding: 0 40px 40px;
    }
    @media ${device.mobileL} {
        padding: 0 16px 40px;
    }
`
type TStyledFlex = { is_rtl: boolean; bg_image: string }
const StyledFlex = styled(Flex)<TStyledFlex>`
    border-radius: 10px;
    background-image: url(${({ bg_image }) => bg_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @media ${device.laptopM} {
        width: 100%;
    }
    @media (max-width: 610px) {
        ${({ is_rtl, bg_image }) =>
            is_rtl
                ? css`
                      background-image: url(${bg_image});
                      background-position-x: right;
                  `
                : css`
                      background-image: url(${bg_image});
                      background-position-x: left;
                  `};
        height: 546px;
    }
    @media (max-width: 359px) {
        background-position-x: -40px;
    }
`
const PictureFlex = styled(Flex)`
    width: 373px;
    margin: 32px 0 32px 100px;

    @media ${device.laptop} {
        margin: 32px 0 32px 50px;
    }
    @media ${device.tablet} {
        margin: 40px 0 0 29px;
        width: 250px;
    }
    @media (max-width: 359px) {
        margin: 10px 10px 0 29px;
    }
`
const StyledHeader = styled(Header)`
    line-height: 40px;

    @media ${device.laptop} {
        line-height: 34px;
    }
    @media ${device.tabletL} {
        font-size: 30px;
    }
    @media ${device.tablet} {
        font-size: 28px;
    }
`
const StyledHeader2 = styled(Header)`
    color: var(--color-white);
    margin: 12px 0 8px;

    @media ${device.tablet} {
        margin: 6px 0 10px;
        font-size: 11px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0;
    }
`
const StyledLinkButton = styled(LinkButton)`
    @media ${device.tablet} {
        padding: 8px 16px;
    }
`

const WhoWeAreBanner = ({ banner }: TWhoWeAreBanner) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const bg_image = is_mobile_or_tablet
        ? banner?.bg_mobile.localFile.childImageSharp.gatsbyImageData.images.fallback.src
        : banner?.bg_desktop.localFile.childImageSharp.gatsbyImageData.images.fallback.src
    const bg_image_rtl = is_mobile_or_tablet
        ? banner?.bg_mobile_rtl.localFile.childImageSharp.gatsbyImageData.images.fallback.src
        : banner?.bg_desktop_rtl.localFile.childImageSharp.gatsbyImageData.images.fallback.src
    const is_rtl = useIsRtl()
    return (
        <StyledSectionContainer>
            <StyledFlex
                is_rtl={is_rtl}
                bg_image={is_rtl ? bg_image_rtl : bg_image}
                direction="column"
                height="auto"
                min_height="288px"
                width="1200px"
            >
                <PictureFlex jc="start" ai="start" direction="column">
                    <StyledHeader as="h3" width="100%" type="unset" size="32px" color="white">
                        <Localize translate_text={banner?.header} cms />
                    </StyledHeader>
                    <StyledHeader2
                        width="100%"
                        type="sub-paragraph"
                        as="p"
                        size="16px"
                        weight="400px"
                    >
                        <Localize translate_text={banner?.sub_header} cms />
                    </StyledHeader2>
                    <StyledLinkButton secondary to={banner?.link_url}>
                        <Localize translate_text={banner?.link_name} cms />
                    </StyledLinkButton>
                </PictureFlex>
            </StyledFlex>
        </StyledSectionContainer>
    )
}

export default WhoWeAreBanner
