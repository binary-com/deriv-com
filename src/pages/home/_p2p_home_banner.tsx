import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { QueryImage, ImageWrapper, Header } from 'components/elements'
import { Desktop, Mobile, Flex } from 'components/containers'
import { LocalizedLink, Localize } from 'components/localization'
import device, { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { p2p_playstore_url, p2p_applestore_url, p2p_huawei_appgallery_url } from 'common/constants'
import i18next from 'components/localization/config'
const query = graphql`
    query {
        p2p_home_banner: file(relativePath: { eq: "home/p2p_home_banner.png" }) {
            ...fadeIn
        }
        deriv_p2p_logo: file(relativePath: { eq: "home/deriv_p2p_logo.png" }) {
            ...fadeIn
        }
        deriv_p2p_mobile_logo: file(relativePath: { eq: "home/deriv_p2p_mobile_logo.png" }) {
            ...fadeIn
        }
        p2p_qr_code: file(relativePath: { eq: "home/p2p_qr_code.png" }) {
            ...fadeIn
        }
        p2p_mobile_banner: file(relativePath: { eq: "home/p2p_mobile_banner.png" }) {
            ...fadeIn
        }
        p2p_apple_store: file(relativePath: { eq: "home/p2p_apple_store.png" }) {
            ...fadeIn
        }
        p2p_google_play: file(relativePath: { eq: "home/p2p_google_play.png" }) {
            ...fadeIn
        }
        p2p_app_gallery: file(relativePath: { eq: "home/p2p_app_gallery.png" }) {
            ...fadeIn
        }
    }
`
const BackgroundWrapper = styled.section`
    inline-size: 100%;
    background: #e6e9e9;
    position: relative;
    block-size: 400px;

    @media ${device.tabletL} {
        inline-size: 100%;
        background: #f2f3f4;
        margin-block-end: 40px;
        max-block-size: fit-content;
    }
    @media ${device.laptopM} {
        inline-size: 100%;
        block-size: 100%;
        min-block-size: 400px;
    }
`
const Wrapper = styled(Flex)`
    justify-content: space-between;
    background-color: transparent;
    block-size: unset;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media ${device.laptopL} {
        display: flex;
        justify-content: center;
    }
`
const ImgWrapper = styled.div<{ is_rtl: boolean }>`
    block-size: 400px;
    transform: ${(props) => (props.is_rtl ? 'scaleX(-1)' : 'scaleX(1)')};

    .gatsby-image-wrapper {
        inline-size: 100%;
        block-size: 100%;
    }
    ${ImageWrapper} {
        inline-size: 100%;
        block-size: 100%;
    }
    @media ${device.mobileL} {
        inline-size: 100%;
        min-block-size: 172px;
        max-inline-size: 750px;
        block-size: 200px;
    }
    @media ${device.mobileM} {
        margin-block-start: 32px;
        block-size: 200px;
    }
`
const InformationWrapper = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    gap: 24px;
    position: relative;
    margin-inline-end: 80px;

    @media ${device.laptopL} {
        margin-inline-end: 30px;
        gap: 0;
    }
`
const ContentWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 16px;
    margin-block-start: 50px;
    inline-size: 428px;
    block-size: 314px;

    @media ${device.laptopM} {
        inline-size: 385px;
    }

    @media ${device.tabletL} {
        block-size: fit-content;
        margin-top: 0;
        padding-inline-start: 16px;
    }
`
const StyledHeaders = styled(Header)`
    color: #333333;
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    align-items: center;
    max-inline-size: 400px;

    @media ${device.laptopL} {
        inline-size: 100%;
        font-size: 32px;
        line-height: 40px;
    }

    @media ${device.tabletL} {
        margin-block-start: 36px;
        font-size: 28px;
        line-height: 34px;
        max-inline-size: 41rem;
        letter-spacing: 0.1rem;
    }

    @media ${device.mobileL} {
        font-size: 28px;
        line-height: 34px;
    }
`
const HeroContent = styled(Flex)`
    flex-direction: column;
    justify-content: flex-start;
    block-size: unset;

    @media ${device.tabletL} {
        max-inline-size: 42rem;
    }

    ${Header} {
        max-inline-size: 400px;
        display: flex;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #333333;
    }

    @media ${device.laptopL} {
        ${Header} {
            font-size: 20px;
        }
    }

    @media ${device.tabletL} {
        ${Header} {
            font-size: 20px;
            max-inline-size: 42rem;
            inline-size: 328px;
        }
    }

    @media ${device.mobileL} {
        ${Header} {
            font-size: 18px;
            line-height: 26px;
        }
    }

    @media ${device.mobileS} {
        ${Header} {
            max-inline-size: 98%;
        }
    }
`
const P2pLogoContainer = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    gap: 4.8px;
    inline-size: 186.67px;
    block-size: 24px;

    @media ${device.tabletL} {
        display: inline-block;
        block-size: 24px;
        inline-size: auto;
        max-inline-size: 42rem;
        gap: 8px;
        margin-block-start: 47px;
    }
`
const StyledButton = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 8px;
    block-size: 30px;
    border-radius: 4px;
    flex-grow: 0;

    @media ${device.tabletL} {
        justify-content: flex-start;
        gap: 6px;
        inline-size: 100%;
        block-size: 24px;
        max-inline-size: 42rem;
        margin-block-end: 0;
    }
`
const LearnMore = styled(LocalizedLink)`
    inline-size: 150px;
    block-size: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ff444f;
    text-decoration-color: transparent;

    @media ${device.tabletL} {
        inline-size: 100px;
        block-size: 24px;
        font-size: 16px;
        line-height: 24px;
    }

    @media ${device.laptopM} {
        font-size: 16px;
    }
`
const QRCodeP2p = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 8px;
    inline-size: 208px;
    block-size: 256px;
    background: #ffffff;
    border-radius: 8px;
    margin-inline-end: 60px;
    margin-block-start: 61px;

    @media ${device.laptopM} {
        margin-inline-end: 0;
        block-size: 200px;
        inline-size: 162px;
        padding: 0;

        .gatsby-image-wrapper {
            max-inline-size: 120px;
            max-block-size: 120px;
        }
    }

    .gatsby-image-wrapper {
        inline-size: 160px;
        block-size: 160px;
    }
`
const StyledLabel = styled(Flex)`
    inline-size: 175px;
    block-size: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #333333;

    @media ${device.laptopM} {
        min-inline-size: 113px;
    }
`
const StyledBadge = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 32px;
    margin-block-end: 36px;

    @media ${device.tabletL} {
        margin-block-start: 36px;
        margin-block-end: 60px;
        gap: 22px;
        block-size: 96px;
        inline-size: 338px;
        padding-inline-start: 17px;
    }

    @media ${device.mobileM} {
        margin-block-start: 38px;
        margin-block-end: 34px;
        gap: 22px;
        padding-inline-start: 0;
        inline-size: 340px;
        block-size: 96px;
    }
`
const StyledTopBadge = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    inline-size: 100%;
    block-size: 40px;

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const StyledBottomBadge = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    gap: 32px;
    inline-size: 328px;
    block-size: 40px;
    margin-block-start: 8px;
`
const AppStoreTopBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-inline-end: 15px;

    @media ${device.tabletL} {
        padding-block: 6px;
        padding-inline: 8px;
        block-size: 40px;
    }
`
const AppStoreBottomBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-block: 6px;
    padding-inline: 8px;
    gap: 8px;
    inline-size: 164px;
    block-size: 40px;
`
const P2PHomeBanner = () => {
    const data = useStaticQuery(query)
    const [is_tabletL] = useBrowserResize(size.tabletL)
    const background = is_tabletL ? data['p2p_mobile_banner'] : data['p2p_home_banner']
    const is_rtl = i18next.dir(i18next.language) === 'rtl'
    return (
        <BackgroundWrapper>
            <Wrapper>
                <ImgWrapper is_rtl={is_rtl}>
                    <QueryImage data={background} alt={'Deriv’s P2P mobile app'} />
                </ImgWrapper>
                <InformationWrapper height="unset" direction="column">
                    <ContentWrapper>
                        <P2pLogoContainer>
                            <Desktop>
                                <QueryImage data={data['deriv_p2p_logo']} alt="p2p logo" />
                            </Desktop>
                            <Mobile max-width="tabletL">
                                <QueryImage data={data['deriv_p2p_mobile_logo']} alt="p2p logo" />
                            </Mobile>
                        </P2pLogoContainer>
                        <StyledHeaders as="h1" weight={500}>
                            <Localize translate_text="Hassle-free deposits and withdrawals" />
                        </StyledHeaders>
                        <HeroContent>
                            <Header as="h2">
                                {
                                    <Localize translate_text="Connect with fellow traders and transfer money in minutes." />
                                }
                            </Header>
                        </HeroContent>
                        <StyledButton to="/p2p/">
                            <LearnMore to="/p2p/">
                                <Localize translate_text="Learn more >" />
                            </LearnMore>
                        </StyledButton>
                        <Mobile>
                            <StyledBadge>
                                <StyledTopBadge>
                                    <AppStoreTopBadge
                                        external="true"
                                        to={p2p_applestore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_apple_store']}
                                            alt="p2p apple store"
                                        />
                                    </AppStoreTopBadge>
                                    <AppStoreTopBadge
                                        external="true"
                                        to={p2p_playstore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_google_play']}
                                            alt="p2p google play"
                                        />
                                    </AppStoreTopBadge>
                                </StyledTopBadge>
                                <StyledBottomBadge>
                                    <AppStoreBottomBadge
                                        external="true"
                                        to={p2p_huawei_appgallery_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_app_gallery']}
                                            alt="p2p app gallery"
                                        />
                                    </AppStoreBottomBadge>
                                </StyledBottomBadge>
                            </StyledBadge>
                        </Mobile>
                        <Desktop min-width="mobileL">
                            <StyledBadge>
                                <StyledTopBadge>
                                    <AppStoreTopBadge
                                        external="true"
                                        to={p2p_applestore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_apple_store']}
                                            alt="p2p apple store"
                                        />
                                    </AppStoreTopBadge>
                                    <AppStoreTopBadge
                                        external="true"
                                        to={p2p_playstore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_google_play']}
                                            alt="p2p google play"
                                        />
                                    </AppStoreTopBadge>
                                    <AppStoreTopBadge
                                        external="true"
                                        to={p2p_huawei_appgallery_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={data['p2p_app_gallery']}
                                            alt="p2p app gallery"
                                        />
                                    </AppStoreTopBadge>
                                </StyledTopBadge>
                            </StyledBadge>
                        </Desktop>
                    </ContentWrapper>

                    <Desktop min-width="mobileL">
                        <QRCodeP2p>
                            <QueryImage
                                data={data['p2p_qr_code']}
                                alt={'play store'}
                                width="120px"
                                height="120px"
                            />
                            <StyledLabel>
                                <Localize translate_text="Scan to download Deriv P2P" />
                            </StyledLabel>
                        </QRCodeP2p>
                    </Desktop>
                </InformationWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}
export default P2PHomeBanner
