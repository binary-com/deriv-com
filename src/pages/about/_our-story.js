import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import device from 'themes/device'
import DubaiParaguay from 'images/svg/dubai-paraguay.svg'
import FlagMalta from 'images/svg/flag-malta.svg'
import LabuanParaguay from 'images/svg/labuan-paraguay.svg'
import LogoBinary from 'images/svg/logo-binary.svg'
import Awards from 'images/svg/awards.svg'
import Betonmarkets from 'images/svg/Betonmarkets.svg'
import LogoDevelopers from 'images/svg/logo-developpers.svg'
import IsleOfMan from 'images/svg/malaysia-isle-of-man.svg'
import RegentMarketLogo from 'images/svg/regent-markets-logo.svg'
import Europe from 'images/svg/europe.svg'
import Laptop from 'images/svg/laptop.svg'
import LogoMT5 from 'images/svg/logo-mt5.svg'

const StorySection = styled.section`
    width: 100%;
    margin: auto;
    padding: 8rem 0;
    background-color: var(--color-white);
`
const Story = styled.div`
    /* prettier-ignore */
    background-color: var(--color-${props => props.bgColor || 'white'});
    width: 100%;
    margin: auto;
`
const YearWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
    }
`
const ContentWrapper = styled.div`
    width: 38.4rem;
    margin: 2.4rem 2.4rem 4rem 2.4rem;
`
const StyledHeader = styled(Header)`
    border-left: red;
    width: 12rem;
    margin-left: ${props => (props.left ? '-13.3rem' : '14rem')};

    @media ${device.tablet} {
        margin: auto;
        align-items: center;
    }
`
const Splitter = styled.div`
    width: 39.6rem;
    height: 0.1rem;
    border: 1px solid var(--color-grey-19);
    margin: 0.5rem 0 1rem 0;
`

const Stories = [
    {
        year: '1999',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Regent Markets is born')}
                        </Header>
                        <Splitter />
                        <Text>
                            {localize(
                                'A young entrepreneur collaborates with financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system for retail investors.',
                            )}
                        </Text>
                        <Text>
                            {localize(
                                'The Regent Markets Group is born, funded by Regent Pacific Group Ltd., a company listed on the Hong Kong Stock Exchange.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <RegentMarketLogo />,
            },
        ],
    },
    {
        year: '2000',
        bgColor: 'white',
        left: true,
        contents: [
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('First binary option purchased')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Regent Markets opens its first office in Malta. The first binary option is purchased. ',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <FlagMalta />,
            },
        ],
    },
    {
        year: '2001',
        bgColor: 'grey-10',
        left: false,
        contents: [
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('BetOnMarkets.com')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Regent Markets launches BetOnMarkets.com, the first platform to offer binary options to retail traders.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <Betonmarkets />,
            },
        ],
    },
    {
        year: '2004',
        bgColor: 'grey-10',
        left: true,
        contents: [
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('A new hub')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Regent Markets establishes a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <IsleOfMan />,
            },
        ],
    },
    {
        year: '2007',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Recognition after recognition')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'The service is recognised as a reliable and secure online trading platform for all levels of traders. BetOnMarkets.com earns the ‘Best Fixed-Odds Financial Trading Provider’ award from Shares Magazine UK in 2007 and 2008.',
                            )}
                        </Text>
                        <Text>
                            {localize(
                                'The company also earns the Investors Chronicle award for ‘Best Customer Communication Firm’, a recognition for the platform’s ethical and customer-focused trading experience.',
                            )}
                        </Text>
                        <Text>
                            {localize(
                                'The company’s enhancements continue to accumulate various awards over the coming years.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <Awards />,
            },
        ],
    },
    {
        year: '2013',
        bgColor: 'white',
        left: true,
        contents: [
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Binary.com')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'BetOnMarkets rebrands to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <LogoBinary />,
            },
        ],
    },
    {
        year: '2015',
        bgColor: 'grey-10',
        left: false,
        contents: [
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Licensed financial product')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'The Malta Financial Services Authority grants Binary.com a Category 3 Investment Services licence. The licence authorises Binary.com to continue offering to clients in the European Union as a financial product.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <Europe />,
            },
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Binary.com Websocket API')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Third-party developers can now build customised applications and trading interfaces that interact with the Binary.com system, increasing our accessibility. ',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <LogoDevelopers />,
            },
        ],
    },
    {
        year: '2016',
        bgColor: 'white',
        left: true,
        contents: [
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Binary Bot')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Binary.com introduces Binary Bot, an innovative platform that offers a drag-and-drop programming tool, enabling traders to automate their trading strategies without knowing how to code.',
                            )}
                        </Text>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Tick Trade app')}
                        </Header>
                        <Splitter />
                        <Text>
                            {localize(
                                'Binary.com brings a new and exciting online trading experience to mobile with the Tick Trade app.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <Laptop />,
            },
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('CFDs on MT5 ')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Binary.com adds Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders. ',
                            )}
                        </Text>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Webtrader')}
                        </Header>
                        <Splitter />
                        <Text>
                            {localize(
                                'Binary.com makes it possible to monitor multiple trade activities, market movements, and charts with this full-screen trading interface on Binary.com.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <LogoMT5 />,
            },
        ],
    },
    {
        year: '2018',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: true,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('New office')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Binary.com opens a third office in Labuan, Malaysia, as part of our business expansion.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <LabuanParaguay />,
            },
        ],
    },
    {
        year: '2019',
        bgColor: 'white',
        left: true,
        contents: [
            {
                left: false,
                text: (
                    <ContentWrapper>
                        <Header mobile_text_align="center" as="h3">
                            {localize('Continued expansion ')}
                        </Header>
                        <Splitter />

                        <Text>
                            {localize(
                                'Offices are opened in Dubai and Paraguay to support our growth.',
                            )}
                        </Text>
                    </ContentWrapper>
                ),
                svg: <DubaiParaguay />,
            },
        ],
    },
]

export const OurStory = () => {
    return (
        <StorySection>
            <Header font_size="3.6rem" align="center" margin="0 0 13.2rem 0">
                {localize('Our history')}
            </Header>

            {Stories.map((story, idx) => (
                <Story key={idx} bgColor={story.bgColor}>
                    <Container direction="column" justify="space-between">
                        <StyledHeader left={story.left} as="h2" color="red-4" align="center">
                            {story.year}
                        </StyledHeader>

                        {story.contents.map((content, idxa) =>
                            content.left ? (
                                <YearWrapper key={idxa}>
                                    {content.svg}
                                    {content.text}
                                </YearWrapper>
                            ) : (
                                <YearWrapper key={idxa}>
                                    {content.text}
                                    {content.svg}
                                </YearWrapper>
                            ),
                        )}
                    </Container>
                </Story>
            ))}
        </StorySection>
    )
}
