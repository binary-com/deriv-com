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
import { SizeMixin, MarginMixin, PaddingMixin, BorderRadiusMixin } from 'themes/mixins'

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
    ${SizeMixin({ width: '100%', height: '400px' })}
    background: #e6e9e9;
    position: relative;

    @media ${device.tabletL} {
        ${SizeMixin({ width: '100%', max_height: 'fit-content' })}
        ${MarginMixin({ bottom: '40px' })}
        background: #f2f3f4;
    }
    @media ${device.laptopM} {
        ${SizeMixin({ width: '100%', height: '100%', min_height: '400px' })}
    }
`
const Wrapper = styled(Flex)`
    justify-content: space-between;
    background-color: transparent;
    ${SizeMixin({ height: 'unset' })}

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
    ${SizeMixin({ height: '400px' })}
    transform: ${(props) => (props.is_rtl ? 'scaleX(-1)' : 'scaleX(1)')};

    .gatsby-image-wrapper {
        ${SizeMixin({ width: '100%', height: '100%' })}
    }
    ${ImageWrapper} {
        ${SizeMixin({ width: '100%', height: '100%' })}
    }
    @media ${device.mobileL} {
        ${SizeMixin({ width: '100%', height: '200px', min_height: '172px', min_width: '750px' })}
    }
    @media ${device.mobileM} {
        ${MarginMixin({ top: '32px' })}
        ${SizeMixin({ height: '200px' })}
    }
`
const InformationWrapper = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    ${PaddingMixin({ all: '0' })}
    gap: 24px;
    position: relative;
    margin-inline-end: 80px;

    @media ${device.laptopL} {
        ${MarginMixin({ end: '30px' })}
        gap: 0;
    }
`
const ContentWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${PaddingMixin({ all: '0' })}
    gap: 16px;
    ${MarginMixin({ top: '50px' })}
    ${SizeMixin({ width: '428px', height: '314px' })}

    @media ${device.laptopM} {
        ${SizeMixin({ width: '385px' })}
    }

    @media ${device.tabletL} {
        ${SizeMixin({ height: 'fit-content' })}
        ${MarginMixin({ top: '0' })}
        ${PaddingMixin({ start: '16px' })}
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
    ${SizeMixin({ max_width: '400px' })}

    @media ${device.laptopL} {
        ${SizeMixin({ width: '100%' })}
        font-size: 32px;
        line-height: 40px;
    }

    @media ${device.tabletL} {
        ${MarginMixin({ top: '36px' })}
        font-size: 28px;
        line-height: 34px;
        ${SizeMixin({ max_width: '41rem' })}
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
    ${SizeMixin({ height: 'unset' })}

    @media ${device.tabletL} {
        ${SizeMixin({ max_width: '42rem' })}
    }

    ${Header} {
        ${SizeMixin({ max_width: '400px' })}
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
            ${SizeMixin({ width: '328px', max_width: '42rem' })}
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
            ${SizeMixin({ max_width: '98%' })}
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
    ${SizeMixin({ width: '186.67px', height: '24px' })}

    @media ${device.tabletL} {
        display: inline-block;
        gap: 8px;
        ${MarginMixin({ top: '47px' })}
        ${SizeMixin({ width: 'auto', height: '24px', max_width: '42rem' })}
    }
`
const StyledButton = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${PaddingMixin({ all: '0' })}
    gap: 8px;
    ${SizeMixin({ height: '30px' })}
    ${BorderRadiusMixin({ all: '4px' })}
    flex-grow: 0;

    @media ${device.tabletL} {
        justify-content: flex-start;
        gap: 6px;
        ${SizeMixin({ width: '100%', height: '24px', max_width: '42rem' })}
        ${MarginMixin({ bottom: '0' })}
    }
`
const LearnMore = styled(LocalizedLink)`
    ${SizeMixin({ width: '150px', height: '30px' })}
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #ff444f;
    text-decoration-color: transparent;

    @media ${device.tabletL} {
        ${SizeMixin({ width: '100px', height: '24px' })}
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
    ${PaddingMixin({ all: '24px' })}
    gap: 8px;
    ${SizeMixin({ width: '208px', height: '256px' })}
    background: #ffffff;
    ${BorderRadiusMixin({ all: '8px' })}
    ${MarginMixin({ end: '60px', top: '61px' })}

    @media ${device.laptopM} {
        ${MarginMixin({ end: '0' })}
        ${SizeMixin({ width: '162px', height: '200px' })}
        ${PaddingMixin({ all: '0' })}

        .gatsby-image-wrapper {
            ${SizeMixin({ max_width: '120px', max_height: '120px' })}
        }
    }

    .gatsby-image-wrapper {
        ${SizeMixin({ width: '160px', height: '160px' })}
    }
`
const StyledLabel = styled(Flex)`
    ${SizeMixin({ width: '175px', height: '40px' })}
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #333333;

    @media ${device.laptopM} {
        ${SizeMixin({ min_width: '113px' })}
    }
`
const StyledBadge = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${PaddingMixin({ all: '0' })}
    gap: 32px;
    ${MarginMixin({ bottom: '36px' })}

    @media ${device.tabletL} {
        ${MarginMixin({ top: '36px', bottom: '60px' })}
        gap: 22px;
        ${SizeMixin({ width: '338px', height: '96px' })}
        ${PaddingMixin({ start: '17px' })}
    }

    @media ${device.mobileM} {
        ${MarginMixin({ top: '38px', bottom: '34px' })}
        gap: 22px;
        ${PaddingMixin({ start: '0' })}
        ${SizeMixin({ width: '340px', height: '96px' })}
    }
`
const StyledTopBadge = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    ${PaddingMixin({ all: '0' })}
    ${SizeMixin({ width: '100%', height: '40px' })}

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const StyledBottomBadge = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    ${PaddingMixin({ all: '0' })}
    gap: 32px;
    ${SizeMixin({ width: '328px', height: '40px' })}
    ${MarginMixin({ top: '8px' })}
`
const AppStoreTopBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    ${PaddingMixin({ end: '15px' })}

    @media ${device.tabletL} {
        ${PaddingMixin({ all: '6px 8px' })}
        ${SizeMixin({ height: '40px' })}
    }
`
const AppStoreBottomBadge = styled(LocalizedLink)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${PaddingMixin({ all: '6px 8px' })}
    gap: 8px;
    ${SizeMixin({ width: '164px', height: '40px' })}
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
