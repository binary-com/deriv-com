import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { PlatformSelector, Platform, PlatformDetails } from './_platform_selector'
import { localize } from 'components/localization'
import { Header, NavigationDots, QueryImage, StyledLink, Text } from 'components/elements'
import { Container, SectionContainer } from 'components/containers'
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

const platforms: Array<Platform> = [
    {
        title: 'DTrader',
        icon: DTraderIcon,
        description: 'Our flagship app for trading options, multipliers & spreads.',
        learn_more_link: '/dtrader/',
        download_links: {
            Browser: 'https://app.deriv.com/',
        },
    },
    {
        title: 'DMT5',
        icon: DMT5Icon,
        description: 'The all-in-one FX & CFD trading platform.',
        learn_more_link: '/dmt5/',
        download_links: {
            Browser: 'https://app.deriv.com/dmt5',
            AppStore:
                'https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg',
            GooglePlay:
                'https://download.mql5.com/cdn/mobile/mt5/android?server=Deriv-Demo,Deriv-Server',
            Linux: 'https://www.metatrader5.com/en/terminal/help/start_advanced/install_linux',
        },
    },
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        description: 'Our best trading experience on your mobile.',
        learn_more_link: '#',
        download_links: {
            GooglePlay: 'https://play.google.com/store/apps/details?id=com.deriv.app&hl=en&gl=US',
            AppStore: 'https://apps.apple.com/ug/app/deriv-go/id1550561298',
            APK: '#',
        },
    },
    {
        title: 'DerivX',
        icon: DerivXIcon,
        description: 'The multi-asset trading platform to fit your style.',
        learn_more_link: '/derivx/',
        download_links: {
            GooglePlay: 'https://play.google.com/store/apps/details?id=com.deriv.dx&hl=en&gl=US',
            AppStore: 'https://apps.apple.com/cg/app/deriv-x/id1563337503',
            Browser: 'https://app.deriv.com/derivx',
        },
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        description: 'Automate your trading. No coding required.',
        learn_more_link: '/dbot/',
        download_links: {
            Browser: 'https://app.deriv.com/bot',
        },
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        description: 'Our legacy automated trading platform.',
        learn_more_link: 'https://bot.deriv.com/',
        download_links: {
            Browser: 'https://bot.binary.com/',
        },
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        description: 'Our legacy options trading platform.',
        learn_more_link: 'https://smarttrader.deriv.com/en/trading.html',
        download_links: {
            Browser: 'https://smarttrader.deriv.com/',
        },
    },
    {
        title: 'API',
        icon: APIIcon,
        description: 'Build your own apps with our API.',
        learn_more_link: '#',
        download_links: {
            Browser: 'https://api.deriv.com/',
        },
    },
]

const query = graphql`
    query {
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
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
    @media ${device.tabletL} {
        height: 840px;
    }
`

const ContentWrapper = styled(Container)`
    width: 100%;

    h2 {
        text-align: center;
    }
`

const SubTitle = styled(Text)`
    @media ${device.tablet} {
        margin: 1.6rem;
        text-align: center;
    }
`

const MainContent = styled(Container)`
    height: 100%;
    width: 100%;
    padding: 5rem;
    padding-right: 0;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 35vw 1fr;

    @media ${device.tablet} {
        padding: 1rem;
        padding-top: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

const SelectorContainer = styled.div`
    grid-column: 1;
    grid-row: 1 / 7;
    align-self: start;
    padding-right: 3rem;

    @media ${device.tablet} {
        display: none;
    }
`

const PlatformImageWrapper = styled.div`
    grid-column: 2;
    grid-row: 2 / 5;
    width: 60vw;
    display: flex;
    align-items: flex-end;
    margin-right: 3rem;

    @media ${device.tablet} {
        width: 90vw;
        margin-right: 0;
        height: 300px;
        align-self: center;
        justify-content: center;
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
        height: 160px;
    }
`

const PlatformDetailsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
    width: 100vw;
`

const MobileContainer = styled.div`
    max-width: 100vw;
    @media ${device.desktop} {
        display: none;
    }
    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }
`

const DownloadLinks = styled.div`
    grid-column: 2;
    grid-row: 5 / 6;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 3.2rem 3.8rem;
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
    // const {
    //     platforms_dtrader,
    //     platforms_mt5,
    //     platforms_smarttrader,
    //     platforms_dbot,
    //     platforms_binary_bot,
    //     platforms_deriv_go,
    //     platforms_derivx,
    //     platforms_api,
    // }

    const [selectedIndex, setSelectedIndex] = React.useState(3)

    const images = useStaticQuery(query)
    return (
        <StyledSection>
            <ContentWrapper direction="column">
                <Header as="h2" size="4.8rem" type="heading-1" weight="700">
                    {localize('Our platforms')}
                </Header>
                <SubTitle size="2.4rem">
                    {localize(
                        'Choose from 8 powerful platforms — each designed with your needs in mind',
                    )}
                </SubTitle>
                <MainContent>
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
                    <MobileContainer>
                        <NavigationDots
                            count={platforms.length}
                            selected_index={selectedIndex}
                            selected_color="--color-red-1"
                            unselected_color="--color-grey-34"
                            onNavigate={setSelectedIndex}
                        />
                        <PlatformDetailsWrapper>
                            <PlatformDetails
                                title={platforms[selectedIndex].title}
                                icon={platforms[selectedIndex].icon}
                                description={platforms[selectedIndex].description}
                                learn_more_link={platforms[selectedIndex].learn_more_link}
                            />
                        </PlatformDetailsWrapper>
                    </MobileContainer>
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
                </MainContent>
            </ContentWrapper>
        </StyledSection>
    )
}

export default OurPlatforms
