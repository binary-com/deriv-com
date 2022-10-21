import React, { ReactElement } from 'react'
import styled from 'styled-components'
import type { ImageDataLike } from 'gatsby-plugin-image'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'

const BannerWrapper = styled(Flex)`
    overflow: hidden;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);
    padding: 80px 120px;
    height: 100%;

    @media ${device.tabletL} {
        height: unset;
        padding: 40px 16px;
    }
`
const MainWrapper = styled(Flex)`
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    position: relative;
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const TextWrapper = styled(Flex)`
    width: 588px;
    margin-right: 126px;
    justify-content: start;

    @media ${device.laptopM} {
        margin-right: 60px;
    }

    @media ${device.tabletL} {
        height: unset;
        width: 100%;
        max-width: 58.8rem;
        justify-content: center;
        align-items: center;
        margin-right: 0;
    }
`
const TextDiv = styled(Flex)`
    position: relative;
    text-align: left;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 2;

    @media ${device.tabletL} {
        max-width: 100%;
        text-align: center;
        justify-content: center;
        margin-bottom: 24px;
    }
`
const DesktopImageWrapper = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileImageWrapper = styled(Container)`
    display: none;
    @media ${device.tabletL} {
        width: 100%;
        display: flex;
    }
`
const ImageWrapper = styled(Flex)`
    width: 486px;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 300px;
        height: unset;
        align-items: center;
    }
    @media ${device.mobileL} {
        max-width: unset;
    }
`
const BtnDiv = styled(Flex)`
    justify-content: start;
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    line-height: 20px;
    width: auto;
    border: unset;

    @media ${device.mobileL} {
        white-space: nowrap;
    }
`
const StyledHeader = styled(Header)`
    font-size: 48px;
    line-height: 1.25;
    @media ${device.tabletL} {
        font-size: 32px;
        margin-bottom: 8px;
    }
`
const StyledHeaderSmall = styled(Header)`
    font-size: 24px;
    line-height: 1.5;
    max-width: 584px;
    margin: 0 auto 24px 0;
    @media ${device.laptopM} {
        max-width: unset;
    }

    @media ${device.tabletL} {
        font-size: 20px;
    }
`

const BackgroundPattern = styled.img`
    position: absolute;
    top: -298px;
    left: -8%;
    z-index: 1;
    width: 558px;

    @media ${device.tabletL} {
        display: none;
    }
`

type FooterBannerProps = {
    background_pattern: string
    is_ppc: boolean
    title: ReactElement
    small_title: ReactElement
    data: { stocks_banner; stocks_banner_eu: ImageDataLike }
}

const FooterBanner = ({
    background_pattern,
    data,
    is_ppc,
    small_title,
    title,
}: FooterBannerProps) => {
    const { is_eu } = useCountryRule()
    const stocks_display = is_eu ? 'stocks_banner_eu' : 'stocks_banner'

    return (
        <BannerWrapper>
            <MainWrapper>
                <TextWrapper>
                    <TextDiv>
                        <StyledHeader color="white" type="section-title" mb="8px">
                            {title}
                        </StyledHeader>
                        <StyledHeaderSmall
                            color="white"
                            type="sub-section-title"
                            weight="normal"
                            size="2.4rem"
                            mb="24px"
                        >
                            {small_title}
                        </StyledHeaderSmall>
                        <BtnDiv>
                            <StyledLinkButton
                                id="dm-footerbanner-signup-1"
                                type="submit"
                                secondary
                                to={is_ppc ? '/landing/signup/' : '/signup/'}
                            >
                                {localize('Create a demo account')}
                            </StyledLinkButton>
                        </BtnDiv>
                    </TextDiv>
                </TextWrapper>
                <ImageWrapper>
                    <Flex>
                        <DesktopImageWrapper>
                            <QueryImage
                                data={data[stocks_display]}
                                alt="deriv platform"
                                width="100%"
                            />
                        </DesktopImageWrapper>
                        <MobileImageWrapper>
                            <QueryImage
                                data={data[stocks_display]}
                                alt="deriv platform"
                                width="100%"
                            />
                        </MobileImageWrapper>
                    </Flex>
                </ImageWrapper>
                <BackgroundPattern src={background_pattern} alt="background pattern" />
            </MainWrapper>
        </BannerWrapper>
    )
}

export default FooterBanner
