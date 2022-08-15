import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Desktop, Mobile } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Background } from 'components/elements/background-image'
import { Button } from 'components/form'
import device, { size } from 'themes/device'
import { mobileOSDetect } from 'common/os-detect'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import {
    p2p_playstore_url,
    p2p_applestore_url,
    p2p_huawei_appgallery_url,
    deriv_dp2p_app_url,
} from 'common/constants'

const BackgroundWrapper = styled(Background)`
    height: 100%;
    width: 100%;
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
`
const Wrapper = styled(Container)`
    justify-content: space-between;
    background-color: transparent;
    height: unset;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
`
const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 576px;
    max-height: 700px;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    ${ImageWrapper} {
        width: 100%;
        height: 100%;

        picture > img {
            object-fit: contain !important;
        }
    }

    @media ${device.tabletL} {
        max-width: 313px;
        max-height: 380px;
    }
    @media ${device.mobileL} {
        max-width: 240px;
        max-height: 292px;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 60.5rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 42rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 350px;
    }
    @media ${device.mobileM} {
        padding: 0;
    }
`

const HeroContent = styled(Flex)`
    flex-direction: row-reverse;
    justify-content: flex-start;
    height: unset;
    width: 349px;

    ${Header} {
        font-size: 20px;
        font-weight: 200;
        width: 230px;
        padding-left: 15px;
        color: var(--color-white);
        display: flex;
        align-items: center;
        max-width: 78%;
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 20px;
            max-width: 100%;
        }
    }
    @media ${device.mobileM} {
        ${Header} {
            font-size: 19px;
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
const ButtonDerivP2P = styled(Button)`
    padding: 1.5rem 1.6rem;
    height: 64px;
    white-space: nowrap;
    margin-top: 24px;
    margin-bottom: 40px;
    width: 100%;
    font-size: 20px;

    @media ${device.tabletL} {
        font-size: 20px;
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    line-height: 10rem;
    font-weight: 600;
    display: flex;
    font-size: 8rem;

    @media ${device.laptopM} {
        width: 100%;
        font-size: 6rem;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        margin-top: 2rem;
        font-size: 40px;
        line-height: 6rem;
    }
    @media ${device.mobileL} {
        line-height: 50px;
    }

    :nth-child(3) {
        font-size: 18px;
        font-weight: 200;
        line-height: 24px;
    }
`

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "p2p/p2p_hero_background.png" }) {
            ...fadeIn
        }
        p2p_hero_background_mobile: file(
            relativePath: { eq: "p2p/p2p_hero_background_mobile.png" }
        ) {
            ...fadeIn
        }
        p2p_hero_img: file(relativePath: { eq: "p2p/p2p_hero_img.png" }) {
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
        web_browser: file(relativePath: { eq: "deriv-go/web-browser.png" }) {
            ...fadeIn
        }
        qr_code: file(relativePath: { eq: "p2p/p2p_all_appstores.png" }) {
            ...fadeIn
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    const [is_tabletL] = useBrowserResize(size.tabletL)
    const background = is_tabletL ? data['p2p_hero_background_mobile'] : data['p2p_hero_background']

    const handleExternalLink = () => {
        let link = ''
        if (mobileOSDetect() === 'Android') {
            link = p2p_playstore_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = p2p_applestore_url
        }

        window.open(link, '_blank')
    }
    return (
        <BackgroundWrapper data={background}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={500}>
                        {localize('Hassle-free deposits and withdrawals')}
                    </StyledHeader>
                    <Header size="18px" color="white" weight="200" pr="100px">
                        {localize(
                            'Use your local currency to make deposits into and withdrawals from your Deriv account.',
                        )}
                    </Header>
                    <Desktop>
                        <HeroContent mt="15px">
                            <Header as="h2">
                                {
                                    <Localize translate_text="Scan the QR code to download Deriv P2P" />
                                }
                            </Header>

                            <QueryImage
                                data={data['qr_code']}
                                alt={'play store'}
                                width="108px"
                                height="108px"
                            />
                        </HeroContent>
                    </Desktop>

                    <Mobile>
                        <ButtonDerivP2P secondary onClick={handleExternalLink}>
                            {localize('Try Deriv P2P now')}
                        </ButtonDerivP2P>
                    </Mobile>
                    <Desktop>
                        <Flex
                            fd="row"
                            mt="20px"
                            jc="start"
                            width="100%"
                            tablet_fw="wrap"
                            laptopM={{ m: '7px 8px 48px' }}
                        >
                            <AppButton
                                external
                                to={p2p_applestore_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['app_store']} alt="app store logo" />
                            </AppButton>
                            <AppButton
                                external
                                to={p2p_playstore_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['google_play']} alt="google play logo" />
                            </AppButton>

                            <AppButton
                                external
                                to={p2p_huawei_appgallery_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['huawei_app']} alt="huawei app gallery" />
                            </AppButton>
                            <AppButton
                                external
                                to={deriv_dp2p_app_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <QueryImage data={data['web_browser']} alt="web browser logo" />
                            </AppButton>
                        </Flex>
                    </Desktop>
                </InformationWrapper>

                <ImgWrapper>
                    <QueryImage
                        data={data['p2p_hero_img']}
                        alt={'Deriv’s P2P mobile app'}
                        height={'700px'}
                        width={'576px'}
                    />
                </ImgWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

export default Hero
