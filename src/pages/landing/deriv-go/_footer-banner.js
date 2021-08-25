import React, { useEffect, useState, useCallback } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { ButtonWrapper, AppButton } from './_deriv-go-banner'
import { Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device.js'
import BannerBg from 'images/common/deriv-go/banner.png'
import BannerMobileBg from 'images/common/deriv-go/banner-m.png'
import { deriv_go_playstore_url, deriv_go_huaweiappgallery_url } from 'common/constants'
// svgs
import AppStoreLogo from 'images/svg/deriv-go/app-store.svg'
import HuaweiAppGallery from 'images/svg/deriv-go/huawei-app.svg'
import GooglePlayLogo from 'images/svg/deriv-go/google-play.svg'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        footer_banner: file(relativePath: { eq: "deriv-go/footer-banner.png" }) {
            ...fadeIn
        }
        footer_banner_m: file(relativePath: { eq: "deriv-go/footer-banner-mobile.png" }) {
            ...fadeIn
        }
    }
`

const StyledContainer = styled(Container)`
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 80px;
    @media ${device.tabletL} {
        flex-direction: column;
        height: auto;
        padding-bottom: 40px;
    }
`

const BackgroundWrapper = styled(Flex)`
    background: url(${BannerBg});
    background-repeat: round;
    border-radius: 16px;
    position: relative;
    min-height: 38.3rem;
    align-items: center;
    @media ${device.tabletL} {
        background: url(${BannerMobileBg});
        flex-direction: column-reverse;
        height: 100%;
    }
`

const BannerWrapper = styled(Flex)`
    width: 50%;
    position: relative;
    display: grid;
    justify-content: center;
    @media ${device.tabletL} {
        width: 100%;
        justify-content: center;
    }
`

const BannerImageWrapper = styled(Flex)`
    width: 80%;
    margin-top: 45px;
    @media ${device.tabletL} {
        width: 256px;
        height: 220px;
        margin-top: 80px;
    }
`

const HeaderWrapper = styled(Flex)`
    align-items: center;
    justify-content: cennter;
    width: 424px;
    @media ${device.tabletL} {
        width: 100%;
        margin-top: 60px;
        padding-left: 20px;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
    }
`
const StyledSubTitle = styled(Header)`
    margin-top: 5px;
    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }
`
const AppLogo = styled.img`
    width: 136px;
    height: 40px;
`

const FooterBanner = () => {
    const data = useStaticQuery(query)
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = useCallback(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }, [setMobile])

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    return (
        <StyledContainer>
            <BackgroundWrapper>
                <BannerWrapper>
                    <BannerImageWrapper>
                        <QueryImage
                            data={data[is_mobile ? 'footer_banner_m' : 'footer_banner']}
                            alt="footer banner"
                        />
                    </BannerImageWrapper>
                </BannerWrapper>
                <HeaderWrapper>
                    <div>
                        <StyledHeader color="white" type="heading-3">
                            {localize('Start trading on the go')}
                        </StyledHeader>
                        <StyledSubTitle color="white" type="subtitle-2" weight="normal">
                            {localize(
                                'Download the app today and trade multipliers anytime, anywhere you want.',
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
                                <AppLogo
                                    width="136px"
                                    height="40px"
                                    src={HuaweiAppGallery}
                                    alt=""
                                />
                            </AppButton>
                        </ButtonWrapper>
                    </div>
                </HeaderWrapper>
            </BackgroundWrapper>
        </StyledContainer>
    )
}

export default FooterBanner
