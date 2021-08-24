import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device from 'themes/device.js'
import DerivGoBg from 'images/common/deriv-go/hero-bg.png'
import DerivGoMobileBg from 'images/common/deriv-go/hero-mobile-bg.png'
import { deriv_go_playstore_url, deriv_go_huaweiappgallery_url } from 'common/constants'
// svgs
import AppStoreLogo from 'images/svg/deriv-go/app-store.svg'
import HuaweiAppGallery from 'images/svg/deriv-go/huawei-app.svg'
import GooglePlayLogo from 'images/svg/deriv-go/google-play.svg'

const query = graphql`
    query {
        deriv_go_banner1: file(relativePath: { eq: "deriv-go/iphone-12.png" }) {
            ...fadeIn
        }
        deriv_go_banner2: file(relativePath: { eq: "deriv-go/android-oneplus.png" }) {
            ...fadeIn
        }
        deriv_go_banner1_m: file(relativePath: { eq: "deriv-go/iphone-12-m.png" }) {
            ...fadeIn
        }
        deriv_go_banner2_m: file(relativePath: { eq: "deriv-go/android-oneplus-m.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    background: url(${DerivGoBg});
    background-position: center;
    height: 79rem;
    @media ${device.tabletL} {
        background: url(${DerivGoMobileBg});
        height: 100%;
        padding: 6rem 0;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const HeaderWrapper = styled(Flex)`
    align-items: center;
    width: 53%;
    height: 100%;
    @media ${device.desktopL} {
        height: 40rem;
    }
    @media ${device.tabletL} {
        align-items: flex-start;
        width: 100%;
        height: 412px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        width: 326px;
    }
`
const StyledSubTitle = styled(Header)`
    margin-top: 24px;
    @media ${device.tabletL} {
        max-width: 326px;
        margin-top: 8px;
    }
`
const ButtonWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 40px;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        max-height: 98px;
        margin: 7px 8px;
    }
`
const AppButton = styled(LocalizedLink)`
    border: none;
    margin-right: 8px;
    background: none;
    padding: 0;
    @media ${device.tabletL} {
        margin-bottom: 7px;
    }
`
const AppLogo = styled.img`
    width: 170px;
    height: 50px;
    @media ${device.tabletL} {
        width: 156px;
        height: 46px;
    }
`

const BannerWrapper = styled(Flex)`
    height: 100%;
    width: 47%;
    position: relative;
    display: grid;
    align-items: center;
    justify-content: center;
    @media ${device.tabletL} {
        width: 100%;
        justify-content: center;
        height: fit-content;
    }
`

const Iphone12Wrapper = styled(Flex)`
    width: 313px;
    height: 493px;
    position: relative;
    right: 33.4%;
    @media ${device.laptopM} {
        width: 213px;
        height: 393px;
    }
    @media ${device.tabletL} {
        width: 169px;
        height: 267px;
        right: 53%;
    }
`

const AndroidWrapper = styled(Flex)`
    width: 346.4px;
    height: 474px;
    position: absolute;
    top: 0.01px;
    bottom: 0;
    right: -90px;
    @media ${device.laptopM} {
        width: 246px;
        height: 374px;
    }
    @media ${device.tabletL} {
        width: 187px;
        height: 256px;
        left: 0.28px;
        top: 0.49%;
    }
`
const BannerImageWrapper = styled.div`
    width: 100%;
    position: relative;
`

const Banner = () => {
    const data = useStaticQuery(query)

    return (
        <MainWrapper>
            <StyledContainer>
                <HeaderWrapper>
                    <div>
                        <StyledHeader color="white" width="64rem" type="heading-1">
                            {localize('Trade forex, synthetics, and cryptocurrencies on the go')}
                        </StyledHeader>
                        <StyledSubTitle color="white" type="subtitle-1" weight="normal">
                            {localize(
                                'Download the app now and start trading whenever, wherever you want.',
                            )}
                        </StyledSubTitle>
                        <ButtonWrapper>
                            <AppButton
                                external="true"
                                to={deriv_go_playstore_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppLogo src={GooglePlayLogo} alt="" />
                            </AppButton>
                            <AppButton
                                external="true"
                                to=""
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppLogo src={AppStoreLogo} alt="" />
                            </AppButton>
                            <AppButton
                                external="true"
                                to={deriv_go_huaweiappgallery_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AppLogo src={HuaweiAppGallery} alt="" />
                            </AppButton>
                        </ButtonWrapper>
                    </div>
                </HeaderWrapper>

                <BannerWrapper>
                    <BannerImageWrapper>
                        <AndroidWrapper>
                            <QueryImage
                                data={data['deriv_go_banner2']}
                                alt="iphone 12"
                                width="100%"
                            />
                        </AndroidWrapper>
                        <Iphone12Wrapper>
                            <QueryImage
                                data={data['deriv_go_banner1']}
                                alt="android oneplus"
                                width="100%"
                            />
                        </Iphone12Wrapper>
                    </BannerImageWrapper>
                </BannerWrapper>
            </StyledContainer>
        </MainWrapper>
    )
}

export default Banner
