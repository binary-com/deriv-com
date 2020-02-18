import React from 'react'
import { localize, Localize } from 'components/localization'
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
import DerivLaptop from 'images/svg/deriv-laptop.svg'

const Stories = [
    {
        year: '1999',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: false,
                headers: [localize('Regent Markets is born')],
                texts: [
                    {
                        text: (
                            <Localize
                                translate_text="A young entrepreneur collaborates with financial mathematicians to develop the algorithms for the world’s first fixed-odds trading system for retail investors. <0/><0/>The Regent Markets Group is born, funded by Regent Pacific Group Ltd., a company listed on the Hong Kong Stock Exchange."
                                components={[<br key={0} />]}
                            />
                        ),
                    },
                ],
                svg: <RegentMarketLogo />,
                svg_position: 'center',
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
                headers: [localize('First binary option purchased')],
                texts: [
                    {
                        text: localize(
                            'Regent Markets opens its first office in Malta. The first binary option is purchased. ',
                        ),
                    },
                ],

                svg: <FlagMalta />,
                svg_position: 'right',
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
                headers: [localize('BetOnMarkets.com')],
                texts: [
                    {
                        text: localize(
                            'Regent Markets launches BetOnMarkets.com, the first platform to offer binary options to retail traders.',
                        ),
                    },
                ],
                svg: <Betonmarkets />,
                svg_position: 'center',
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
                headers: [localize('A new hub')],
                texts: [
                    {
                        text: localize(
                            'Regent Markets establishes a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia',
                        ),
                    },
                ],
                svg: <IsleOfMan />,
                svg_position: 'right',
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
                headers: [localize('Recognition after recognition')],
                texts: [
                    {
                        text: (
                            <Localize
                                translate_text="The service is recognised as a reliable and secure online trading platform for all levels of traders. BetOnMarkets.com earns the ‘Best Fixed-Odds Financial Trading Provider’ award from Shares Magazine UK in 2007 and 2008.<0 /><0 />The company also earns the Investors Chronicle award for ‘Best Customer Communication Firm’, a recognition for the platform’s ethical and customer-focused trading experience."
                                components={[<br key={0} />]}
                            />
                        ),
                    },
                ],
                svg: <Awards />,
                svg_position: 'center',
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
                headers: [localize('Binary.com')],
                texts: [
                    {
                        text: localize(
                            'BetOnMarkets rebrands to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications.',
                        ),
                    },
                ],
                svg: <LogoBinary />,
                svg_position: 'center',
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
                headers: [localize('Licensed financial product')],
                texts: [
                    {
                        text: localize(
                            'The Malta Financial Services Authority grants Binary.com a Category 3 Investment Services licence. The licence authorises Binary.com to offer our service to clients in the European Union as a financial product.',
                        ),
                    },
                ],
                svg: <Europe />,
                svg_position: 'left',
            },
            {
                left: true,
                headers: [localize('Binary.com Websocket API')],
                texts: [
                    {
                        text: localize(
                            'Third-party developers can now build customised applications and trading interfaces that interact with the Binary.com system, increasing our accessibility. ',
                        ),
                    },
                ],
                svg: <LogoDevelopers />,
                svg_position: 'center',
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
                headers: [localize('Binary Bot'), localize('Tick Trade app')],
                texts: [
                    {
                        text: localize(
                            'Binary.com introduces Binary Bot, an innovative platform that offers a drag-and-drop programming tool, enabling traders to automate their trading strategies without knowing how to code.',
                        ),
                    },
                    {
                        text: localize(
                            'Binary.com brings a new and exciting online trading experience to mobile with the Tick Trade app.',
                        ),
                    },
                ],

                svg: <Laptop />,
                svg_position: 'center',
            },
            {
                left: false,
                headers: [localize('CFDs on MT5 '), localize('Webtrader')],
                texts: [
                    {
                        text: localize(
                            'Binary.com adds Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders. ',
                        ),
                    },
                    {
                        text: localize(
                            'Binary.com makes it possible to monitor multiple trade activities, market movements, and charts with this full-screen trading interface on Binary.com.',
                        ),
                    },
                ],

                svg: <LogoMT5 />,
                svg_position: 'center',
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
                headers: [localize('New office')],
                texts: [
                    {
                        text: localize(
                            'Binary.com opens a third office in Labuan, Malaysia, as part of our business expansion.',
                        ),
                    },
                ],
                svg: <LabuanParaguay />,
                svg_position: 'right',
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
                headers: [localize('Continued expansion ')],
                texts: [
                    {
                        text: localize(
                            'Offices are opened in Dubai and Paraguay to support our growth.',
                        ),
                    },
                ],
                svg: <DubaiParaguay />,
                svg_position: 'left',
            },
        ],
    },
    {
        year: '2020',
        width: '63%',
        bgColor: 'black',
        left: true,
        color: 'white',
        contents: [
            {
                left: true,
                headers: [localize('Deriv.com')],
                texts: [
                    {
                        text: localize(
                            'We celebrate 20 years of innovation and growth! Inspired by our clients who are driven to succeed, we launch Deriv.com. Featuring customisable charts and tools, Deriv is created to be a place where people can trade what they want, how they want. ',
                        ),
                    },
                ],
                svg: <DerivLaptop />,
                svg_position: 'center',
                margin_right: '6rem',
                svg_width: '35.7rem',
            },
        ],
    },
]

export default Stories
