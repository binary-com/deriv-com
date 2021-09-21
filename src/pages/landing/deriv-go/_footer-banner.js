import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device.js'
import BannerBg from 'images/common/deriv-go/banner.png'
import BannerMobileBg from 'images/common/deriv-go/banner-m.png'
import {
    deriv_go_playstore_url,
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
} from 'common/constants'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        footer_banner: file(relativePath: { eq: "deriv-go/footer-banner.png" }) {
            ...fadeIn
        }
        footer_banner_m: file(relativePath: { eq: "deriv-go/footer-banner-mobile.png" }) {
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
const BackgroundWrapper = styled(Flex)`
    background: url(${BannerBg});
    background-repeat: round;
    border-radius: 12px;
    position: relative;
    min-height: 38.3rem;

    @media ${device.tabletL} {
        background: url(${BannerMobileBg});
        flex-direction: column-reverse;
    }
`

const BannerWrapper = styled(Flex)`
    width: 50%;
    align-self: flex-end;

    & .footerimg-wrapper {
        width: 80%;
        @media ${device.tabletL} {
            padding-top: 120px;
            width: 65%;
        }
        @media ${device.mobileL} {
            width: 250px;
            height: 321px;
            padding-top: 106px;
        }
    }
    @media ${device.tabletL} {
        width: 100%;
        justify-content: center;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
`

const StyledSubTitle = styled(Header)`
    margin-top: 5px;
    @media ${device.tabletL} {
        margin-top: 8px;
        text-align: center;
    }
`

const AppButton = styled(LocalizedLink)`
    margin-right: 8px;
    padding: 0;

    img {
        border-radius: 7px;
    }
    @media ${device.tabletL} {
        margin-bottom: 8px;
        width: 136px;
        height: 40px;
    }
`

const FooterBanner = () => {
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
        <Container
            pt="60px"
            pb="80px"
            tablet_direction="column"
            tabletL={{ height: 'auto', pb: '30px' }}
        >
            <BackgroundWrapper ai="center">
                <BannerWrapper jc="start">
                    <QueryImage
                        data={data[is_mobile ? 'footer_banner_m' : 'footer_banner']}
                        alt="footer banner"
                        className="footerimg-wrapper"
                    />
                </BannerWrapper>
                <Flex
                    fd="column"
                    ai="center"
                    jc="center"
                    width="424px"
                    tabletL={{ max_width: '100%', mt: '40px' }}
                >
                    <StyledHeader color="white" type="heading-3">
                        {localize('Start trading on the go')}
                    </StyledHeader>
                    <StyledSubTitle color="white" type="subtitle-2" weight="normal">
                        {localize(
                            'Download the app today and trade multipliers anytime, anywhere you want.',
                        )}
                    </StyledSubTitle>
                    <Flex
                        mt="40px"
                        jc="start"
                        tablet_fw="wrap"
                        tablet_jc="center"
                        tabletL={{ m: '24px 8px 0 32px' }}
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
                </Flex>
            </BackgroundWrapper>
        </Container>
    )
}

export default FooterBanner
