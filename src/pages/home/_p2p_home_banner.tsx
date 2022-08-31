import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { QueryImage, ImageWrapper, Header } from 'components/elements'
import { Desktop, Mobile, Flex } from 'components/containers'
import { LocalizedLink, Localize } from 'components/localization'
import device, { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { p2p_playstore_url, p2p_applestore_url, p2p_huawei_appgallery_url } from 'common/constants'

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
    width: 100%;
    background: #e6e9e9;
    position: relative;
    height: 400px;

    @media ${device.tabletL} {
        width: 100%;
        background: #f2f3f4;
        margin-bottom: 40px;
        max-height: fit-content;
    }
    @media ${device.laptopM} {
        width: 100%;
        height: 100%;
        min-height: 400px;
    }
`
const Wrapper = styled(Flex)`
    justify-content: space-between;
    background-color: transparent;
    height: unset;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media ${device.laptopL} {
        display: flex;
        justify-content: center;
    }
`
const ImgWrapper = styled.div`
    height: 400px;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }
    ${ImageWrapper} {
        width: 100%;
        height: 100%;
    }

    @media ${device.mobileL} {
        width: 100%;
        min-height: 172px;
        max-width: 750px;
        height: 200px;
    }

    @media ${device.mobileM} {
        margin-top: 32px;
        height: 200px;
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
    margin-right: 80px;

    @media ${device.laptopL} {
        margin-right: 30px;
        gap: 0;
    }
`
const ContentWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 16px;
    margin-top: 50px;
    width: 428px;
    height: 314px;

    @media ${device.laptopM} {
        width: 385px;
    }

    @media ${device.tabletL} {
        height: fit-content;
        margin-top: 0;
        padding-left: 16px;
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
    max-width: 400px;

    @media ${device.laptopL} {
        width: 100%;
        font-size: 32px;
        line-height: 40px;
    }

    @media ${device.tabletL} {
        margin-top: 36px;
        font-size: 28px;
        line-height: 34px;
        max-width: 41rem;
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
    height: unset;

    @media ${device.tabletL} {
        max-width: 42rem;
    }

    ${Header} {
        max-width: 400px;
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
            max-width: 42rem;
            width: 328px;
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
            max-width: 98%;
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
    width: 186.67px;
    height: 24px;

    @media ${device.tabletL} {
        display: inline-block;
        height: 24px;
        width: auto;
        max-width: 42rem;
        gap: 8px;
        margin-top: 47px;
    }
`
const StyledButton = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 8px;
    height: 30px;
    border-radius: 4px;
    flex-grow: 0;

    @media ${device.tabletL} {
        justify-content: flex-start;
        gap: 6px;
        width: 100%;
        height: 24px;
        max-width: 42rem;
        margin-bottom: 0;
    }
`
const LearnMore = styled(LocalizedLink)`
    width: 120px;
    height: 30px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ff444f;
    text-decoration-color: transparent;

    @media ${device.tabletL} {
        width: 100px;
        height: 24px;
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
    width: 208px;
    height: 256px;
    background: #ffffff;
    border-radius: 8px;
    margin-right: 60px;
    margin-top: 61px;

    @media ${device.laptopM} {
        margin-right: 0;
        height: 200px;
        width: 162px;
        padding: 0;

        .gatsby-image-wrapper {
            max-width: 120px;
            max-height: 120px;
        }
    }

    .gatsby-image-wrapper {
        width: 160px;
        height: 160px;
    }
`
const StyledLabel = styled(Flex)`
    width: 175px;
    height: 40px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #333333;

    @media ${device.laptopM} {
        min-width: 113px;
    }
`
const StyledBadge = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 32px;
    margin-bottom: 36px;

    @media ${device.tabletL} {
        margin-top: 36px;
        margin-bottom: 60px;
        gap: 22px;
        height: 96px;
        width: 338px;
        padding-left: 17px;
    }

    @media ${device.mobileM} {
        margin-top: 38px;
        margin-bottom: 34px;
        gap: 22px;
        padding-left: 0;
        width: 340px;
        height: 96px;
    }
`
const StyledTopBadge = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    width: 100%;
    height: 40px;

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
    width: 328px;
    height: 40px;
    margin-top: 8px;
`
const AppStoreTopBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding-right: 15px;

    @media ${device.tabletL} {
        padding: 6px 8px;
        height: 40px;
    }
`
const AppStoreBottomBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 6px 8px;
    gap: 8px;
    width: 164px;
    height: 40px;
`
const P2PHomeBanner = () => {
    const data = useStaticQuery(query)
    const [is_tabletL] = useBrowserResize(size.tabletL)
    const background = is_tabletL ? data['p2p_mobile_banner'] : data['p2p_home_banner']

    return (
        <BackgroundWrapper>
            <Wrapper>
                <ImgWrapper>
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
                                        external
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
                                        external
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
                                        external
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
                                        external
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
                                        external
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
                                        external
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
