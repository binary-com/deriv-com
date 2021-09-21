import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device.js'
import DerivGoBg from 'images/common/deriv-go/hero-bg.png'
import DerivGoMobileBg from 'images/common/deriv-go/hero-mobile-bg.png'
import {
    deriv_go_playstore_url,
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
} from 'common/constants'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        hero: file(relativePath: { eq: "deriv-go/hero.png" }) {
            ...fadeIn
        }
        hero_mobile: file(relativePath: { eq: "deriv-go/hero-mobile.png" }) {
            ...fadeIn
        }
        google_play: file(relativePath: { eq: "deriv-go/google-play.png" }) {
            ...fadeIn
        }
        app_store: file(relativePath: { eq: "deriv-go/app-store.png" }) {
            ...fadeIn
        }
        huawei_app: file(relativePath: { eq: "deriv-go/huawei-app.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    background: url(${DerivGoBg}) right bottom 30%;
    background-size: cover;
    height: 79rem;
    @media ${device.laptopM} {
        height: 100%;
    }
    @media ${device.tabletL} {
        background: url(${DerivGoMobileBg}) bottom 35% center;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        width: auto;
    }
`
const StyledSubTitle = styled(Header)`
    margin-top: 24px;
    @media ${device.laptopM} {
        margin-top: 8px;
    }
`

const AppButton = styled(LocalizedLink)`
    margin-right: 8px;
    padding: 0;
    border: none;

    img {
        border-radius: 7px;
    }
    @media ${device.tabletL} {
        margin-bottom: 8px;
        width: 156px;
        height: 46px;
    }
    @media ${device.mobileL} {
        width: 150px;
        height: 40px;
    }
`

const BannerWrapper = styled(Flex)`
    width: 48%;
    position: relative;
    align-items: center;
    margin-left: 55px;

    & .bannerimg-wrapper {
        width: 100%;
        position: relative;
        @media ${device.laptopM} {
            margin-bottom: 40px;
        }
    }
    @media ${device.laptopM} {
        align-items: flex-end;
    }
    @media ${device.mobileL} {
        width: 100%;
        justify-content: center;
        margin: 0;
    }
`

const Banner = () => {
    const data = useStaticQuery(query)
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () =>
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)

    useEffect(() => {
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    return (
        <MainWrapper>
            <Container laptop_direction="column">
                <Flex
                    jc="center"
                    ai="center"
                    max_width="53%"
                    height="100%"
                    laptopM={{ max_width: '100%', pt: '40px' }}
                >
                    <div>
                        <StyledHeader as="h1" color="white" width="64rem" type="heading-1">
                            {localize('Trade forex, synthetics, and cryptocurrencies on the go')}
                        </StyledHeader>
                        <StyledSubTitle color="white" type="subtitle-1" weight="normal">
                            {localize(
                                'Download the app now and start trading whenever, wherever you want.',
                            )}
                        </StyledSubTitle>
                        <Flex
                            fd="row"
                            mt="40px"
                            jc="start"
                            tablet_fw="wrap"
                            laptopM={{ m: '7px 8px 48px' }}
                        >
                            <AppButton
                                external="true"
                                to={deriv_go_playstore_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['google_play']} alt="google play logo" />
                            </AppButton>
                            <AppButton
                                external="true"
                                to={deriv_go_ios_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['app_store']} alt="app store logo" />
                            </AppButton>
                            <AppButton
                                external="true"
                                to={deriv_go_huaweiappgallery_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['huawei_app']} alt="huawei app gallery" />
                            </AppButton>
                        </Flex>
                    </div>
                </Flex>
                <BannerWrapper>
                    <QueryImage
                        data={data[is_mobile ? 'hero_mobile' : 'hero']}
                        alt="hero phone image"
                        className="bannerimg-wrapper"
                    />
                </BannerWrapper>
            </Container>
        </MainWrapper>
    )
}

export default Banner
