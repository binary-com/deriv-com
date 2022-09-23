import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Flex, Desktop, Mobile } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Button } from 'components/form'
import { mobileOSDetect } from 'common/os-detect'
import device from 'themes/device'
import {
    derivx_android_url,
    derivx_ios_url,
    derivx_huawei_url,
    derivx_app_url,
} from 'common/constants'

type DHeroProps = {
    background_alt?: string
    background_image_name?: string
    background_svg?: string
    background_svg2?: string
    content?: string | JSX.Element
    d_height?: string
    go_to_live_demo?: boolean
    image_name?: string
    is_mobile?: boolean
    is_ppc?: boolean
    join_us_for_free?: boolean
    laptop_height?: string
    laptopM_height?: string
    Logo?: string
    tabletL_height?: string
    title?: string | JSX.Element
}

const Wrapper = styled(Flex)<DHeroProps>`
    position: relative;
    justify-content: flex-start;
    background-color: var(--color-black);
    height: unset;
    min-height: ${(props) => props.d_height};
    padding: 2rem 12rem;

    @media ${device.desktopS} {
        padding-left: 18%;
    }
    @media ${device.laptopM} {
        height: ${(props) => props.laptopM_height};
        min-height: unset;
    }
    @media ${device.laptop} {
        height: ${(props) => props.laptop_height};
        padding: 2rem 8rem;
    }
    @media ${device.tabletL} {
        height: ${(props) => props.tabletL_height};
        align-items: center;
    }
    @media ${device.tablet} {
        padding: 0 0 40px;
        height: unset;
        flex-direction: column-reverse;
    }
`
const HeroContent = styled(Flex)<DHeroProps>`
    flex-direction: column;
    justify-content: flex-start;
    height: unset;

    /* TODO: remove these selectors and have conditional logics all in HeroHeader instead */
    ${Header} {
        color: var(--color-white);
        display: flex;
        margin-top: 10px;
        line-height: 1.25;
    }

    @media ${device.mobileM} {
        ${Header} {
            font-size: ${({ is_ppc }) => is_ppc && '27.5px'};
        }
    }
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    align-items: center;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        font-size: 24px;
    }
    @media ${device.tablet} {
        font-size: 20px;
        font-weight: normal;
    }
`

const HeroHeader = styled(Header)`
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
    @media (max-width: 1315px) {
        font-size: 4.8rem;
    }
    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
    }
`

const LottieWrapper = styled.div`
    width: 100%;
    max-width: 58rem;
    position: absolute;
    top: 2.3rem;
    right: 12rem;

    @media ${device.laptopM} {
        max-width: 51rem;
    }
    @media ${device.tabletL} {
        max-width: 54rem;
        right: 3rem;
    }
    @media ${device.tablet} {
        position: relative;
    }
    @media ${device.mobileL} {
        max-width: 425px;
        top: 0;
        right: 0;
        margin-bottom: 25px;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 56.2rem;
    z-index: 1;

    @media (max-width: 1376px) {
        max-width: 52rem;
    }
    @media (max-width: 1270px) {
        max-width: 46rem;
    }
    @media ${device.laptopM} {
        max-width: 40rem;
    }
    @media ${device.laptop} {
        max-width: 38rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 450px;
        padding: 0 16px;
        margin-top: 20px;
        align-items: center;
    }
    @media ${device.mobileL} {
        margin-top: 0;
        align-items: unset;
    }
    @media ${device.mobileS} {
        padding: 0 12px;
    }
`

const query = graphql`
    query {
        google_play: file(relativePath: { eq: "deriv-go/google-play.png" }) {
            ...fadeIn
        }
        app_store: file(relativePath: { eq: "deriv-go/app-store.png" }) {
            ...fadeIn
        }
        huawei_app: file(relativePath: { eq: "deriv-go/huawei-app.png" }) {
            ...fadeIn
        }
        deriv_x: file(relativePath: { eq: "deriv-x/hero-laptop.png" }) {
            ...bannerImage
        }
        deriv_x_mobile: file(relativePath: { eq: "deriv-x/hero-laptop-mobile.png" }) {
            ...bannerImage
        }
        qr_code: file(relativePath: { eq: "deriv-x/deriv-x-qr.png" }) {
            ...fadeIn
        }
        web_browser: file(relativePath: { eq: "deriv-go/web-browser.png" }) {
            ...fadeIn
        }
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
const ButtonDp2p = styled(Button)`
    padding: 10px 16px;
    height: 40px;
    width: 25rem;
    white-space: nowrap;
    margin-top: 24px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #ff444f;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
`
const DHero = ({
    title,
    background_alt,
    background_svg,
    background_svg2,
    content,
    image_name,
    is_mobile,
    is_ppc,
    Logo,
    d_height,
    laptopM_height,
    laptop_height,
    tabletL_height,
}: DHeroProps) => {
    const data = useStaticQuery(query)

    const DLogo = styled.img`
        width: 32px !important;
        height: 32px !important;
        margin-right: 1.6rem;
        margin-bottom: 6px;
        @media ${device.tabletS} {
            margin-right: 1rem;
        }
    `
    const HeroBackground = css`
        @media ${device.laptopM} {
            width: 48%;
            max-width: 492px;
            height: initial;
        }
        @media ${device.laptop} {
            width: 50%;
        }
        @media ${device.tabletL} {
            width: 45%;
            max-width: 350px;
        }
        @media ${device.tablet} {
            width: 70%;
        }
        @media ${device.tabletS} {
            width: 80%;
            max-width: 337px;
        }
        @media ${device.mobileL} {
            max-width: 250px;
            min-height: 244px;
        }
        @media ${device.mobileM} {
            max-width: 205px;
            min-height: 0;
        }
    `
    const BackgroundSVG = styled.img`
        ${HeroBackground}
        position: absolute;
        bottom: 0;
        right: 0;

        @media ${device.tablet} {
            top: 170px;
        }
    `
    const BackgroundSVG2 = styled.img`
        ${HeroBackground}
        position: absolute;
        top: 0;
        right: 214px;

        @media ${device.tabletL} {
            right: 120px;
        }
    `
    const handleExternalLink = () => {
        let link = ''

        if (mobileOSDetect() === 'Android') {
            link = derivx_android_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = derivx_ios_url
        }

        window.open(link, '_blank')
    }
    return (
        <Wrapper
            d_height={d_height}
            laptopM_height={laptopM_height}
            laptop_height={laptop_height}
            tabletL_height={tabletL_height}
        >
            {!is_mobile && (
                <>
                    <BackgroundSVG src={background_svg} alt="background svg" />
                    <BackgroundSVG2 src={background_svg2} alt="background svg 2" />
                </>
            )}

            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h4" type="sub-section-title" weight={500}>
                    <DLogo src={Logo} alt="logo" width="32" height="32" />
                    {title}
                </StyledHeader>
                <HeroContent is_ppc={is_ppc}>
                    <HeroHeader as="h1" type="display-title">
                        {content}
                    </HeroHeader>
                </HeroContent>
                <Desktop>
                    <HeroContent>
                        <HeroHeader>
                            <QueryImage
                                data={data['qr_code']}
                                alt={'play store'}
                                width="108px"
                                height="108px"
                            />
                            <Header as="h2" width="50%">
                                {<Localize translate_text="Scan the QR code to download Deriv X" />}
                            </Header>
                        </HeroHeader>
                    </HeroContent>

                    <Flex
                        fd="row"
                        mt="40px"
                        jc="start"
                        height="unset"
                        tablet_fw="wrap"
                        laptopM={{ m: '7px 8px 48px' }}
                    >
                        <AppButton
                            external
                            to={derivx_ios_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <QueryImage data={data['app_store']} alt="app store logo" />
                        </AppButton>
                        <AppButton
                            external
                            to={derivx_android_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <QueryImage data={data['google_play']} alt="google play logo" />
                        </AppButton>

                        <AppButton
                            external
                            to={derivx_huawei_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <QueryImage data={data['huawei_app']} alt="huawei app gallery" />
                        </AppButton>
                        <AppButton
                            external
                            to={derivx_app_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <QueryImage data={data['web_browser']} alt="web browser logo" />
                        </AppButton>
                    </Flex>
                </Desktop>
                <Mobile>
                    <ButtonDp2p secondary onClick={handleExternalLink}>
                        {localize('Download Deriv X app')}
                    </ButtonDp2p>
                </Mobile>
            </InformationWrapper>

            <LottieWrapper>
                <QueryImage
                    data={data[is_mobile ? image_name + '_mobile' : image_name]}
                    alt={background_alt}
                />
            </LottieWrapper>
        </Wrapper>
    )
}

export default DHero
