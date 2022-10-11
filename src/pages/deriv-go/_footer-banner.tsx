import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Flex, Container, Desktop, Mobile } from 'components/containers'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device'
import { Button } from 'components/form'
import BannerBg from 'images/common/deriv-go/banner.png'
import BannerMobileBg from 'images/common/deriv-go/banner-m.png'
import { isBrowser } from 'common/utility'
import { mobileOSDetect } from 'common/os-detect'
import { deriv_go_playstore_url, deriv_go_ios_url } from 'common/constants'

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
        qr_code: file(relativePath: { eq: "deriv-go/deriv_go_all_appstores.png" }) {
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
const ButtonDerivGO = styled(Button)`
    padding: 1.5rem 1.6rem;
    height: 40px;
    white-space: nowrap;
    margin: 20px 0;
    margin-right: 25px;
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
    margin-top: 16px;
    @media ${device.tabletL} {
        margin-top: 8px;
        text-align: center;
    }
`

const handleExternalLink = () => {
    let link = deriv_go_playstore_url
    if (mobileOSDetect() === 'Android') {
        link = deriv_go_playstore_url
    }
    if (mobileOSDetect() === 'iOS') {
        link = deriv_go_ios_url
    }
    window.open(link, '_blank')
}

const FooterBanner = () => {
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
                        alt="Trading forex and synthetic indices on Deriv GO"
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
                    <StyledHeader as="h3" color="white" type="heading-3">
                        {localize('Start trading on the go')}
                    </StyledHeader>
                    <StyledSubTitle color="white" type="subtitle-2" weight="lighter">
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
                        <Desktop>
                            <QueryImage
                                data={data['qr_code']}
                                alt={'play store'}
                                width="108px"
                                height="108px"
                            />
                            <StyledSubTitle color="white" type="subtitle-2" weight="lighter">
                                {localize('Scan the QR code to download Deriv GO')}
                            </StyledSubTitle>
                        </Desktop>
                        <Mobile>
                            <ButtonDerivGO secondary onClick={handleExternalLink}>
                                {localize('Download Deriv GO')}
                            </ButtonDerivGO>
                        </Mobile>
                    </Flex>
                </Flex>
            </BackgroundWrapper>
        </Container>
    )
}

export default FooterBanner
