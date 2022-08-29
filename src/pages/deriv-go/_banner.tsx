import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container, Desktop, Mobile } from 'components/containers'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device'
import { Button } from 'components/form'
import DerivGoBg from 'images/common/deriv-go/hero-bg.png'
import { mobileOSDetect } from 'common/os-detect'
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
        qr_code: file(relativePath: { eq: "deriv-go/deriv_go_all_appstores.png" }) {
            ...fadeIn
        }
        web_browser: file(relativePath: { eq: "deriv-go/web-browser.png" }) {
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
const ButtonDerivGO = styled(Button)`
    padding: 1.5rem 1.6rem;
    height: 59px;
    width: 90vw;
    white-space: nowrap;
    margin-top: 24px;
    margin-bottom: 40px;
`
const HeroContent = styled(Flex)`
    flex-direction: row-reverse;
    justify-content: flex-start;
    height: unset;
    width: 349px;
    margin-top: 28px;

    ${Header} {
        font-size: 20px;
        font-weight: 200;
        width: 230px;
        padding-left: 15px;
        color: var(--color-white);
        display: flex;
        align-items: center;
        max-width: 100%;
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 16px;
            max-width: 100%;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 20px;
            line-height: 25px;
            margin-top: 16px;
        }
    }
    @media ${device.mobileS} {
        ${Header} {
            max-width: 98%;
        }
    }
`

const Banner = () => {
    const data = useStaticQuery(query)
    const [is_mobile, setMobile] = useState(false)

    useEffect(() => {
        const handleResizeWindow = () =>
            setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
        handleResizeWindow()
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [is_mobile])

    const handleExternalLink = () => {
        let link = deriv_go_playstore_url
        if (is_mobile) {
            if (mobileOSDetect() === 'Android') {
                link = deriv_go_playstore_url
            }
            if (mobileOSDetect() === 'iOS') {
                link = deriv_go_ios_url
            }
        }
        window.open(link, '_blank')
    }
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
                        <Mobile>
                            <Header size="18px" color="white" weight="200" mt="10px">
                                {localize(
                                    'Download the app now and start trading whenever, wherever you want. ',
                                )}
                            </Header>
                        </Mobile>
                        <Desktop>
                            <HeroContent>
                                <Header as="h2">
                                    {
                                        <Localize translate_text="Scan the QR code to download Deriv GO" />
                                    }
                                </Header>
                                <QueryImage
                                    data={data['qr_code']}
                                    alt={'play store'}
                                    width="108px"
                                    height="108px"
                                />
                            </HeroContent>
                            <Flex
                                fd="row"
                                mt="40px"
                                jc="start"
                                tablet_fw="wrap"
                                laptopM={{ m: '7px 8px 48px' }}
                            >
                                <AppButton
                                    external
                                    to={deriv_go_ios_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage data={data['app_store']} alt="app store logo" />
                                </AppButton>
                                <AppButton
                                    external
                                    to={deriv_go_playstore_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage data={data['google_play']} alt="google play logo" />
                                </AppButton>
                                <AppButton
                                    external
                                    to={deriv_go_huaweiappgallery_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <QueryImage
                                        data={data['huawei_app']}
                                        alt="huawei app gallery"
                                    />
                                </AppButton>
                            </Flex>
                        </Desktop>
                    </div>
                </Flex>
                <Mobile>
                    <ButtonDerivGO secondary onClick={handleExternalLink}>
                        {localize('Download Deriv GO')}
                    </ButtonDerivGO>
                </Mobile>
                <BannerWrapper>
                    <QueryImage
                        data={data[is_mobile ? 'hero_mobile' : 'hero']}
                        alt="Deriv GO trading app on mobile"
                        className="bannerimg-wrapper"
                        loading="eager"
                    />
                </BannerWrapper>
            </Container>
        </MainWrapper>
    )
}

export default Banner
