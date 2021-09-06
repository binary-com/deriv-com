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
    @media ${device.tabletL} {
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
        padding-top: 40px;
    }
    @media ${device.mobileL} {
        align-items: flex-start;
        width: 100%;
        padding-top: 20px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
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
    @media ${device.mobileL} {
        flex-wrap: wrap;
        height: fit-content;
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
    width: 48%;
    position: relative;
    align-items: center;
    margin-left: 55px;
    @media ${device.tabletL} {
        width: 100%;
        justify-content: center;
        height: fit-content;
        padding-bottom: 40px;
        margin-left: 0;
    }
    @media ${device.mobileL} {
        padding-bottom: 10px;
        width: 100%;
        height: fit-content;
    }
`

const BannerImageWrapper = styled.div`
    width: 100%;
    position: relative;
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
                        <QueryImage
                            data={data[is_mobile ? 'hero_mobile' : 'hero']}
                            alt="hero phone image"
                        />
                    </BannerImageWrapper>
                </BannerWrapper>
            </StyledContainer>
        </MainWrapper>
    )
}

export { ButtonWrapper, AppButton }

export default Banner
