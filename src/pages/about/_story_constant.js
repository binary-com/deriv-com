import React from 'react'
import { localize, Localize } from 'components/localization'

const Stories = [
    {
        year: '1999',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: false,
                headers: [{ header: localize('Regent Markets is born') }],
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
                image: 'regent-market-logo.png',
                image_position: 'center',
                image_width: '28.2rem',
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
                headers: [{ header: localize('First binary option purchased') }],
                texts: [
                    {
                        text: localize(
                            'Regent Markets opens its first office in Malta. The first binary option is purchased. ',
                        ),
                    },
                ],

                image: 'flag-malta.png',
                image_position: 'right',
                image_width: '11.4rem',
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
                headers: [{ header: localize('BetOnMarkets.com') }],
                texts: [
                    {
                        text: localize(
                            'Regent Markets launches BetOnMarkets.com, the first platform to offer binary options to retail traders.',
                        ),
                    },
                ],
                image: 'bet-on-markets-logo.png',
                image_position: 'center',
                image_width: '28.2rem',
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
                headers: [{ header: localize('A new hub') }],
                texts: [
                    {
                        text: localize(
                            'Regent Markets establishes a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia.',
                        ),
                    },
                ],
                image: 'isle-of-man-flag.png',
                image_position: 'right',
                image_width: '11.4rem',
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
                headers: [{ header: localize('Recognition after recognition') }],
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
                image: 'awards.png',
                image_position: 'center',
                image_width: '25.2rem',
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
                headers: [{ header: localize('Binary.com') }],
                texts: [
                    {
                        text: localize(
                            'BetOnMarkets rebrands to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications.',
                        ),
                    },
                ],
                image: 'logo-binary.png',
                image_position: 'center',
                image_width: '15.6rem',
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
                headers: [{ header: localize('Licensed financial product') }],
                texts: [
                    {
                        text: localize(
                            'The Malta Financial Services Authority grants Binary.com a Category 3 Investment Services licence. The licence authorises Binary.com to offer our service to clients in the European Union as a financial product.',
                        ),
                    },
                ],
                image: 'eu-flag.png',
                image_position: 'left',
                image_width: '11.4rem',
            },
            {
                left: true,
                headers: [{ header: localize('Binary.com Websocket API') }],
                texts: [
                    {
                        text: localize(
                            'Third-party developers can now build customised applications and trading interfaces that interact with the Binary.com system, increasing our accessibility. ',
                        ),
                    },
                ],
                image: 'logo-developers.png',
                image_position: 'center',
                image_width: '21.4rem',
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
                headers: [
                    { header: localize('Binary Bot') },
                    { header: localize('Tick Trade app'), margin_top: '2.4rem' },
                ],
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

                image: 'laptop.png',
                image_position: 'center',
                image_width: '25rem',
            },
            {
                left: false,
                headers: [
                    { header: localize('CFDs on MT5 ') },
                    { header: localize('Webtrader'), margin_top: '2.4rem' },
                ],
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

                image: 'logo-mt5.png',
                image_position: 'center',
                image_width: '28.2rem',
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
                headers: [{ header: localize('New office') }],
                texts: [
                    {
                        text: localize(
                            'Binary.com opens a third office in Labuan, Malaysia, as part of our business expansion.',
                        ),
                    },
                ],
                image: 'flag-labuan.png',
                image_position: 'right',
                image_width: '11.4rem',
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
                headers: [{ header: localize('Continued expansion ') }],
                texts: [
                    {
                        text: localize(
                            'Offices are opened in Dubai and Paraguay to support our growth.',
                        ),
                    },
                ],
                image: 'dubay-paraguay-flags.png',
                image_position: 'left',
                margin_bottom: '6rem',
                image_width: '19.2rem',
            },
        ],
    },
    {
        year: '2020',
        bgColor: 'black',
        left: true,
        color: 'white',
        contents: [
            {
                left: true,
                headers: [{ header: localize('Deriv.com') }],
                texts: [
                    {
                        text: localize(
                            'We celebrate 20 years of innovation and growth! Inspired by our clients who are driven to succeed, we launch Deriv.com. Featuring customisable charts and tools, Deriv is created to be a place where people can trade what they want, how they want. ',
                        ),
                    },
                ],
                image: 'deriv-laptop.png',
                image_position: 'center',
                margin_right: '6rem',
                margin_left: '-0.4rem',
                margin_bottom: '6rem',
                outer_image_width: '35.7rem',
                content_width: '41rem',
                image_width: '30.4rem',
            },
        ],
    },
]

export default Stories
