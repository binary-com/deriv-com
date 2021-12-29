import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { PlatformSelector, Platform, PlatformDetails } from './_platform_selector'
import { localize } from 'components/localization'
import { Carousel, Header, QueryImage, StyledLink, Text } from 'components/elements'
import { Container, SectionContainer } from 'components/containers'
import {
    deriv_api_url,
    deriv_app_url,
    deriv_bot_app_url,
    deriv_mt5_app_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    derivx_android_url,
    derivx_app_url,
    derivx_ios_url,
    dmt5_android_url,
    dmt5_linux_url,
    dmt5_macos_url,
    smarttrader_url,
} from 'common/constants'
import device from 'themes/device.js'
//SVG
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/api-logo.svg'
import Browser from 'images/svg/app-download/web-browser.svg'
import AppStore from 'images/svg/app-download/app-store.svg'
import GooglePlay from 'images/svg/app-download/google-play.svg'
import Linux from 'images/svg/app-download/linux.svg'
import APK from 'images/svg/app-download/apk.svg'

const platforms: Platform[] = [
    {
        title: 'DMT5',
        icon: DMT5Icon,
        description: 'The all-in-one FX & CFD trading platform.',
        learn_more_link: '/dmt5/',
        download_links: {
            Browser: deriv_mt5_app_url,
            AppStore: dmt5_macos_url,
            Linux: dmt5_linux_url,
            GooglePlay: dmt5_android_url,
        },
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        description: 'Our flagship app for trading options, multipliers & spreads.',
        learn_more_link: '/dtrader/',
        download_links: {
            Browser: deriv_app_url,
        },
    },
    {
        title: 'Deriv X',
        icon: DerivXIcon,
        description: 'The multi-asset trading platform to fit your style.',
        learn_more_link: '/derivx/',
        download_links: {
            Browser: derivx_app_url,
            AppStore: derivx_ios_url,
            GooglePlay: derivx_android_url,
        },
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        description: 'Automate your trading. No coding required.',
        learn_more_link: '/dbot/',
        download_links: {
            Browser: deriv_bot_app_url,
        },
    },
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        description: 'Our best trading experience on your mobile.',
        learn_more_link: '/landing/deriv-go/',
        download_links: {
            AppStore: deriv_go_ios_url,
            GooglePlay: deriv_go_playstore_url,
            // APK: deriv_go_playstore_url,
        },
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        description: 'Our legacy options trading platform.',
        learn_more_link: smarttrader_url,
        download_links: {
            Browser: smarttrader_url,
        },
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        description: 'Our legacy automated trading platform.',
        learn_more_link: 'https://bot.binary.com/',
        download_links: {
            Browser: 'https://bot.binary.com/',
        },
    },
    {
        title: 'API',
        icon: APIIcon,
        description: 'Build your own apps with our API.',
        learn_more_link: deriv_api_url,
        download_links: {
            Browser: deriv_api_url,
        },
    },
]

const query = graphql`
    query {
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api.png" }) {
            ...fadeIn
        }
    }
`

const StyledSection = styled(SectionContainer)`
    background: #f9fbff;
    height: 1065px;
    max-height: 1065px;
    @media ${device.tabletL} {
        height: 960px;
    }
    @media ${device.tabletS} {
        height: 840px;
    }
`

const ContentWrapper = styled(Container)`
    width: 100%;

    h2 {
        text-align: center;
    }
`

const MainContent = styled(Container)`
    height: 100%;
    width: 100%;
    padding-right: 0;

    @media ${device.tablet} {
        padding: 1rem;
        padding-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const SelectorContainer = styled.div`
    grid-column: 1;
    grid-row: 1 / 7;
    align-self: start;
    padding: 0 3rem;

    @media ${device.tablet} {
        display: none;
    }
`

const PlatformImageWrapper = styled.div`
    grid-column: 2;
    grid-row: 2 / 5;
    justify-content: end;
    display: flex;
    margin: auto 3rem;

    @media ${device.laptop} {
        padding: 2rem;
    }
    @media ${device.tablet} {
        margin: auto;
        width: 100%;
        align-self: center;
        justify-content: center;
        align-items: center;
        img {
            max-height: 300px;
        }
    }
    @media ${device.tabletS} {
        height: 250px;
        img {
            max-height: 250px;
        }
    }
    @media ${device.mobileL} {
        height: 200px;
        img {
            max-height: 200px;
        }
    }
    @media ${device.mobileM} {
        height: 180px;
        img {
            max-height: 160px;
        }
    }
`

const PlatformDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    @media ${device.tablet} {
        width: 100%;
    }
`

const DesktopContainer = styled.div`
    height: 100%;
    width: 100%;
    padding-right: 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 440px 1fr;
    justify-items: stretch;
    @media ${device.laptopM} {
        grid-template-columns: 35vw 1fr;
    }
    @media ${device.tablet} {
        display: none;
    }
`

const MobileContainer = styled.div`
    display: none;
    @media ${device.tablet} {
        display: flex;
        max-width: 100vw;
        flex-direction: column;
        margin-top: 2rem;
    }
`

const CarouselItemWrapper = styled.div`
    width: 100%;
    padding: 1.8rem;
`

const DownloadLinks = styled.div`
    grid-column: 2;
    grid-row: 5 / 6;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 3.8rem;
    padding: 0 2rem;
    @media ${device.tablet} {
        margin: 3.2rem 3.8rem;
        padding: auto;
    }
    @media ${device.mobileL} {
        padding: 0;
        margin: 3rem 0;
    }
`

const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`

const getIcon = (platformType: string): string => {
    if (platformType === 'Browser') return Browser
    else if (platformType === 'AppStore') return AppStore
    else if (platformType === 'GooglePlay') return GooglePlay
    else if (platformType === 'Linux') return Linux
    else if (platformType === 'APK') return APK
}

const OurPlatforms = (): React.ReactElement => {
    const [selectedIndex, setSelectedIndex] = React.useState(3)

    const images = useStaticQuery(query)

    const settings = {
        options: {
            loop: false,
            align: 'center',
            containScroll: 'trimSnaps',
        },
        container_style: {
            width: '100%',
            margin: '0 auto',
        },
        slide_style: {
            width: '100vw',
            height: 'auto',
            paddingRight: '1.6rem',
            position: 'relative',
        },
        navigation_style: {
            bottom_offset: '420px',
            nav_color: '--color-red',
        },
        slide_inner_width: '100vw',
        navigation_css: css`
            position: relative;
            width: 100%;
            height: 8px;
            @media ${device.tablet} {
                bottom: 270px;
            }
            @media (max-width: 692px) {
                bottom: 315px;
            }
            @media (max-width: 410px) {
                bottom: 315px;
            }
        `,
    }
    return (
        <StyledSection>
            <ContentWrapper direction="column">
                <Header as="h2" size="4.8rem" type="heading-1" weight="700">
                    {localize('Our platforms')}
                </Header>
                <Text size="2.4rem" tablet={{ m: '1.6rem', align: 'center' }}>
                    {localize(
                        'Choose from 8 powerful platforms — each designed with your needs in mind',
                    )}
                </Text>
                <MainContent>
                    <DesktopContainer>
                        <SelectorContainer>
                            <PlatformSelector
                                platforms={platforms}
                                selected_index={selectedIndex}
                                selectIndex={setSelectedIndex}
                            />
                        </SelectorContainer>
                        <PlatformImageWrapper>
                            <QueryImage
                                data={images[Object.keys(images)[selectedIndex]]}
                                alt={Object.keys(images)[selectedIndex]}
                            />
                        </PlatformImageWrapper>
                        <DownloadLinks>
                            {Object.keys(platforms[selectedIndex].download_links).map(
                                (platformType, index) => (
                                    <DownloadLink
                                        key={index}
                                        to={platforms[selectedIndex].download_links[platformType]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={getIcon(platformType)} alt={platformType} />
                                    </DownloadLink>
                                ),
                            )}
                        </DownloadLinks>
                    </DesktopContainer>
                    <MobileContainer>
                        <Carousel {...settings}>
                            {platforms.map((platform, index) => (
                                <CarouselItemWrapper key={index}>
                                    <PlatformImageWrapper>
                                        <QueryImage
                                            data={images[Object.keys(images)[index]]}
                                            alt={Object.keys(images)[index]}
                                        />
                                    </PlatformImageWrapper>
                                    <PlatformDetailsWrapper>
                                        <PlatformDetails
                                            title={platform.title}
                                            icon={platform.icon}
                                            description={platform.description}
                                            learn_more_link={platform.learn_more_link}
                                        />
                                    </PlatformDetailsWrapper>
                                    <DownloadLinks>
                                        {Object.keys(platform.download_links).map(
                                            (platformType, index) => (
                                                <DownloadLink
                                                    key={index}
                                                    to={platform.download_links[platformType]}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <img
                                                        src={getIcon(platformType)}
                                                        alt={platformType}
                                                    />
                                                </DownloadLink>
                                            ),
                                        )}
                                    </DownloadLinks>
                                </CarouselItemWrapper>
                            ))}
                        </Carousel>
                    </MobileContainer>
                </MainContent>
            </ContentWrapper>
        </StyledSection>
    )
}

export default OurPlatforms
