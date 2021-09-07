import React, { useState, useCallback, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device.js'
import DerivGoBg from 'images/common/deriv-go/hero-bg.png'
import DerivGoMobileBg from 'images/common/deriv-go/hero-mobile-bg.png'
import { deriv_go_playstore_url, deriv_go_huaweiappgallery_url } from 'common/constants'
// svgs
import AppStoreLogo from 'images/svg/deriv-go/app-store.svg'
import HuaweiAppGallery from 'images/svg/deriv-go/huawei-app.svg'
import GooglePlayLogo from 'images/svg/deriv-go/google-play.svg'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        hero: file(relativePath: { eq: "deriv-go/hero.png" }) {
            ...fadeIn
        }
        hero_mobile: file(relativePath: { eq: "deriv-go/hero-mobile.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    background: url(${DerivGoBg}) right bottom 50%;
    background-size: cover;
    height: 79rem;
    @media ${device.tablet} {
        background: url(${DerivGoMobileBg}) bottom 35% center;
        height: 100%;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const HeaderWrapper = styled(Flex)`
    @media ${device.tablet} {
        width: 100%;
        height: 412px;
        padding-top: 40px;
    }
    @media ${device.mobileL} {
        padding-top: 20px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        width: 326px;
    }
    @media ${device.mobileL} {
        display: flex;
        justify-content: center;
        width: auto;
    }
`
const StyledSubTitle = styled(Header)`
    margin-top: 24px;
    @media ${device.tablet} {
        max-width: 326px;
        margin-top: 8px;
    }
`
const ButtonWrapper = styled(Flex)`
    @media ${device.tablet} {
        max-height: 98px;
        margin: 7px 8px;
    }
    @media ${device.mobileS} {
        flex-wrap: wrap;
        height: fit-content;
    }
`
const AppButton = styled(LocalizedLink)`
    border: none;
    margin-right: 8px;
    background: none;
    padding: 0;
    @media ${device.tablet} {
        margin-bottom: 7px;
    }
`
const AppLogo = styled.img`
    width: 170px;
    height: 50px;
    @media ${device.tablet} {
        width: 156px;
        height: 46px;
    }
`

const BannerWrapper = styled(Flex)`
    height: 100%;
    width: 48%;
    position: relative;
    align-items: center;
    margin-left: 55px;

    & .bannerimg-wrapper {
        width: 100%;
        position: relative;
        @media ${device.tablet} {
            padding-bottom: 40px;
        }
    }
    @media ${device.tablet} {
        width: 100%;
        justify-content: center;
        height: fit-content;
        margin: 0;
    }
    @media ${device.mobileS} {
        width: 100%;
        height: fit-content;
        margin-top: 36px;
    }
`

const Banner = () => {
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
        <MainWrapper>
            <StyledContainer>
                <HeaderWrapper ai="center" width="53%" height="100%" tablet_ai="start">
                    <div>
                        <StyledHeader color="white" width="64rem" type="heading-1">
                            {localize('Trade forex, synthetics, and cryptocurrencies on the go')}
                        </StyledHeader>
                        <StyledSubTitle color="white" type="subtitle-1" weight="normal">
                            {localize(
                                'Download the app now and start trading whenever, wherever you want.',
                            )}
                        </StyledSubTitle>
                        <ButtonWrapper fd="row" mt="40px" jc="start" tablet_fw="wrap">
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
                    <QueryImage
                        data={data[is_mobile ? 'hero_mobile' : 'hero']}
                        alt="hero phone image"
                        className="bannerimg-wrapper"
                    />
                </BannerWrapper>
            </StyledContainer>
        </MainWrapper>
    )
}

export { ButtonWrapper, AppButton }

export default Banner
