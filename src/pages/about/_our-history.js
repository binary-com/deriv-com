import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Carousel from './_carousel'
import Show from 'components/containers/show'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        regent_market: file(relativePath: { eq: "regent-market.png" }) {
            ...fadeIn
        }
        isleofman: file(relativePath: { eq: "isleofman.png" }) {
            ...fadeIn
        }
        platform: file(relativePath: { eq: "platform.png" }) {
            ...fadeIn
        }
        hub: file(relativePath: { eq: "hub.png" }) {
            ...fadeIn
        }
        our_history_awards: file(relativePath: { eq: "our-history-awards.png" }) {
            ...fadeIn
        }
        binary: file(relativePath: { eq: "binary.png" }) {
            ...fadeIn
        }
        eu: file(relativePath: { eq: "eu.png" }) {
            ...fadeIn
        }
        api: file(relativePath: { eq: "api.png" }) {
            ...fadeIn
        }
        binary_bot: file(relativePath: { eq: "binary-bot.png" }) {
            ...fadeIn
        }
        tickapp: file(relativePath: { eq: "tickapp.png" }) {
            ...fadeIn
        }
        mt5: file(relativePath: { eq: "mt-5.png" }) {
            ...fadeIn
        }
        webtrader: file(relativePath: { eq: "webtrader.png" }) {
            ...fadeIn
        }
        labuan: file(relativePath: { eq: "labuan.png" }) {
            ...fadeIn
        }
        two_offices: file(relativePath: { eq: "two-offices.png" }) {
            ...fadeIn
        }
        deriv: file(relativePath: { eq: "deriv.png" }) {
            ...fadeIn
        }
    }
`

const Slide = styled.div`
    max-width: 38.4rem;
    margin-bottom: 4.8rem;
`
const StyledeHeader = styled(Header)`
    line-height: 1.25;
`

const StorySection = styled.section`
    width: 100%;
    margin: auto;
    background-color: var(--color-white);
    padding: 8rem 0 8rem;
    position: relative;

    @media ${device.tablet} {
        > ${Header} {
            margin-bottom: 2rem;
        }
    }

    > :last-child {
        margin-bottom: 0;
    }
`

export const OurHistory = () => {
    const data = useStaticQuery(query)
    const slides = [
        {
            header: '1999',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('1999')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('Regent Markets is born')}
                    </Text>
                    <Text>
                        {localize(
                            'A young entrepreneur collaborates with financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system for retail investors. The Regent Markets Group is born, funded by Regent Pacific Group Ltd, a company listed on the Hong Kong Stock Exchange. ',
                        )}
                    </Text>
                </Slide>
            ),
            image: (
                <QueryImage
                    data={data['regent_market']}
                    alt={localize('Regent Market')}
                    width="26.3rem"
                />
            ),
        },
        {
            header: '2000',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2000')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('First binary options purchased')}
                    </Text>
                    <Text>
                        {localize(
                            'Regent Markets opens its first office in Isle of man. The first binary option is purchased. ',
                        )}
                    </Text>
                </Slide>
            ),
            top: '285',
            image: (
                <QueryImage data={data['isleofman']} alt={localize('Isleofman')} width="38.4rem" />
            ),
        },
        {
            header: '2001',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2001')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('BetOnMarkets.com')}
                    </Text>
                    <Text>
                        {localize(
                            'Regent Markets launches BetOnMarkets.com, the first platform to offer binary options to retail traders.',
                        )}
                    </Text>
                </Slide>
            ),
            top: '274',
            image: (
                <QueryImage data={data['platform']} alt={localize('Platform')} width="38.3rem" />
            ),
        },
        {
            header: '2004',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2004')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('A new hub')}
                    </Text>
                    <Text>
                        {localize(
                            'Regent Markets establishes a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia.',
                        )}
                    </Text>
                </Slide>
            ),
            image: <QueryImage data={data['hub']} alt={localize('Hub')} width="38.5rem" />,
        },
        {
            header: '2007',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2007')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('Recognition after recognition')}
                    </Text>
                    <Text mb="1.5rem">
                        {localize(
                            'The service is recognised as a reliable and secure online trading platform for all levels of traders. BetOnMarkets.com earns the ‘Best Fixed-Odds Financial Trading Provider’ award from Shares Magazine UK in 2007 and 2008.',
                        )}
                    </Text>
                    <Text>
                        {localize(
                            'The company also earns the Investors Chronicle award for ‘Best Customer Communication Firm’, a recognition for the platform’s ethical and customer-focused trading experience. ',
                        )}
                    </Text>
                </Slide>
            ),
            image: (
                <QueryImage
                    data={data['our_history_awards']}
                    alt={localize('our-history-awards')}
                    width="38.4rem"
                />
            ),
        },

        {
            header: '2014',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2014')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('Binary.com')}
                    </Text>
                    <Text>
                        {localize(
                            'BetOnMarkets rebrands to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications. ',
                        )}
                    </Text>
                </Slide>
            ),
            image: <QueryImage data={data['binary']} alt={localize('Binary')} width="38.3rem" />,
        },
        {
            header: '2015',
            inner_slides: [
                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2015')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('Binary.com Websocket API')}
                            </Text>
                            <Text>
                                {localize(
                                    'Third-party developers can now build customised applications and trading interfaces that interact with the Binary.com system, increasing our accessibility. ',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: <QueryImage data={data['eu']} alt={localize('EU')} width="38.3rem" />,
                },
                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2015')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('Licensed financial product')}
                            </Text>
                            <Text>
                                {localize(
                                    'The Malta Financial Services Authority grants Binary.com a Category 3 Investment Services licence. The licence authorises Binary.com to offer our service to clients in the European Union as a financial product.',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: <QueryImage data={data['api']} alt={localize('API')} width="38.5rem" />,
                },
            ],
        },
        {
            header: '2016',
            inner_slides: [
                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2016')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('Binary Bot')}
                            </Text>
                            <Text>
                                {localize(
                                    'Binary.com introduces Binary Bot, an innovative platform that offers a drag-and-drop programming tool, enabling traders to automate their trading strategies without knowing how to code. ',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: (
                        <QueryImage
                            data={data['binary_bot']}
                            alt={localize('Binary Bot')}
                            width="38.3rem"
                        />
                    ),
                },
                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2016')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('Tick Trade app')}
                            </Text>
                            <Text>
                                {localize(
                                    'Binary.com brings a new and exciting online trading experience to mobile with the Tick Trade app.',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: (
                        <QueryImage
                            data={data['tickapp']}
                            alt={localize('Tickapp')}
                            width="38.5rem"
                        />
                    ),
                },

                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2016')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('CFDs on MT5 ')}
                            </Text>
                            <Text>
                                {localize(
                                    'Binary.com adds Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders. ',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: <QueryImage data={data['mt5']} alt={localize('mt5')} width="38.5rem" />,
                },
                {
                    body: (
                        <Slide>
                            <StyledeHeader as="h2" color="red-4">
                                {localize('2016')}
                            </StyledeHeader>
                            <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                                {localize('Webtrader ')}
                            </Text>
                            <Text>
                                {localize(
                                    'Binary.com makes it possible to monitor multiple trade activities, market movements, and charts with this full-screen trading interface on Binary.com. ',
                                )}
                            </Text>
                        </Slide>
                    ),
                    image: (
                        <QueryImage
                            data={data['webtrader']}
                            alt={localize('Webtrader')}
                            width="38.5rem"
                        />
                    ),
                },
            ],
        },
        {
            header: '2018',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2018')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('New office')}
                    </Text>
                    <Text>
                        {localize(
                            'Binary.com opens a third office in Labuan, Malaysia, as part of our business expansion. ',
                        )}
                    </Text>
                </Slide>
            ),
            image: <QueryImage data={data['labuan']} alt={localize('Labuan')} width="38.3rem" />,
        },
        {
            header: '2019',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2019')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('Continued expansion ')}
                    </Text>
                    <Text>
                        {localize(
                            'Offices are opened in Dubai and Paraguay to support our growth.',
                        )}
                    </Text>
                </Slide>
            ),
            image: (
                <QueryImage
                    data={data['two_offices']}
                    alt={localize('Two Offices')}
                    width="38.4rem"
                />
            ),
        },
        {
            header: '2020',
            body: (
                <Slide>
                    <StyledeHeader as="h2" color="red-4">
                        {localize('2020')}
                    </StyledeHeader>
                    <Text mb="0.8rem" weight="bold" size="var(--text-size-m)">
                        {localize('Deriv.com')}
                    </Text>
                    <Text>
                        {localize(
                            'We celebrate 20 years of innovation and growth! Inspired by our clients who are driven to succeed, we launch Deriv.com. Featuring customisable charts and tools, Deriv.com is created to be a place where people can trade what they want, how they want. ',
                        )}
                    </Text>
                </Slide>
            ),
            image: <QueryImage data={data['deriv']} alt={localize('Deriv')} width="38.5rem" />,
        },
    ]

    return (
        <StorySection>
            <Show.Mobile>
                <Header size="4.5rem" align="center" mb="2rem">
                    {localize('Our history')}
                </Header>
            </Show.Mobile>
            <Show.Desktop>
                <Header size="3.6rem" align="center" mb="5rem">
                    {localize('Our history')}
                </Header>
            </Show.Desktop>

            <Carousel slides={slides} />
        </StorySection>
    )
}

OurHistory.propTypes = {
    is_mobile_menu: PropTypes.bool,
}
