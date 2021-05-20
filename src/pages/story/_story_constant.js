import React from 'react'
import { Localize } from 'components/localization'

const Stories = [
    {
        year: '1999',
        bgColor: 'white',
        left: false,
        contents: [
            {
                left: false,
                headers: [{ header: <Localize translate_text="Regent Markets is born" /> }],
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
                image: 'regent_market_logo',
                image_alt: <Localize translate_text="Regent Market" />,
                image_position: 'center',
                image_width: '28.2rem',
                image_mobile_width: '25.9rem',
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
                headers: [{ header: <Localize translate_text="First binary option purchased" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Regent Markets opens its first office in Malta. The first binary option is purchased." />
                        ),
                    },
                ],

                image: 'flag_malta',
                image_alt: <Localize translate_text="Malta Flag" />,
                image_position: 'right',
                image_width: '11.4rem',
                image_mobile_width: '10.3rem',
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
                headers: [{ header: <Localize translate_text="BetOnMarkets.com" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Regent Markets launches BetOnMarkets.com, the first platform to offer binary options to retail traders." />
                        ),
                    },
                ],
                image: 'bet_on_markets_logo',
                image_alt: <Localize translate_text="Bet on Markets" />,
                image_position: 'center',
                image_width: '28.2rem',
                image_mobile_width: '24rem',
                asset_height: '8rem',
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
                headers: [{ header: <Localize translate_text="A new hub" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Regent Markets establishes a second office, a tech hub in Cyberjaya, the Silicon Valley of Malaysia." />
                        ),
                    },
                ],
                image: 'isle_of_man_flag',
                image_alt: <Localize translate_text="Isle of Man Flag" />,
                image_position: 'right',
                image_width: '11.4rem',
                image_mobile_width: '11.1rem',
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
                headers: [{ header: <Localize translate_text="Recognition after recognition" /> }],
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
                image: 'awards',
                image_alt: <Localize translate_text="Awards" />,
                image_position: 'center',
                image_width: '25.2rem',
                image_mobile_width: '23.7rem',
                asset_height: '20.6rem',
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
                headers: [{ header: <Localize translate_text="Binary.com" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="BetOnMarkets rebrands to Binary.com. The rebrand comes with enhanced features, a new range of trade types, and a variety of charting applications." />
                        ),
                    },
                ],
                image: 'logo_binary',
                image_alt: <Localize translate_text="Binary Logo" />,
                image_position: 'center',
                image_width: '15.6rem',
                image_mobile_width: '15.1rem',
                asset_height: '14rem',
                content_width: '38.6rem',
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
                headers: [{ header: <Localize translate_text="Licensed investment services" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="The Malta Financial Services Authority (MFSA) grants Binary.com a Category 3 Investment Services licence. This licence authorises Binary.com to offer investment services to clients in the European Union." />
                        ),
                    },
                ],
                image: 'eu_flag',
                image_alt: <Localize translate_text="EU Flag" />,
                image_position: 'left',
                image_width: '11.4rem',
                image_mobile_width: '11.4rem',
                content_width: '38.3rem',
            },
            {
                left: true,
                headers: [{ header: <Localize translate_text="Binary.com Websocket API" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Third-party developers can now build customised applications and trading interfaces that interact with the Binary.com system, increasing our accessibility." />
                        ),
                    },
                ],
                image: 'logo_developers',
                image_alt: <Localize translate_text="Binary Developers" />,
                image_position: 'center',
                image_width: '21.4rem',
                image_mobile_width: '21.5rem',
                content_width: '38.6rem',
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
                    { header: <Localize translate_text="Binary Bot" /> },
                    { header: <Localize translate_text="Tick Trade app" />, margin_top: '2.4rem' },
                ],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Binary.com introduces Binary Bot, an innovative platform that offers a drag-and-drop programming tool, enabling traders to automate their trading strategies without knowing how to code." />
                        ),
                    },
                    {
                        text: (
                            <Localize translate_text="Binary.com brings a new and exciting online trading experience to mobile with the Tick Trade app." />
                        ),
                    },
                ],

                image: 'laptop',
                image_alt: <Localize translate_text="Binary Trading" />,
                image_position: 'center',
                image_width: '25rem',
                image_mobile_width: '18.8rem',
                asset_height: '14rem',
            },
            {
                left: false,
                headers: [
                    { header: <Localize translate_text="CFDs on MT5" /> },
                    { header: <Localize translate_text="Webtrader" />, margin_top: '2.4rem' },
                ],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Binary.com adds Contracts for Difference (CFDs), the most popular form of derivative trading for retail traders." />
                        ),
                    },
                    {
                        text: (
                            <Localize translate_text="Binary.com makes it possible to monitor multiple trade activities, market movements, and charts with this full-screen trading interface on Binary.com." />
                        ),
                    },
                ],

                image: 'logo_mt5',
                image_alt: <Localize translate_text="MT5 Logo" />,
                image_position: 'center',
                image_width: '28.2rem',
                image_mobile_width: '19.4rem',
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
                headers: [{ header: <Localize translate_text="New office" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Binary.com opens a third office in Labuan, Malaysia, as part of our business expansion." />
                        ),
                    },
                ],
                image: 'flag_labuan',
                image_alt: <Localize translate_text="Labuan Flag" />,
                image_position: 'right',
                image_width: '11.4rem',
                image_mobile_width: '11.1rem',
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
                headers: [{ header: <Localize translate_text="Continued expansion" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Offices are opened in Dubai and Paraguay to support our growth." />
                        ),
                    },
                ],
                image: 'dubai_paraguay_flags',
                image_alt: <Localize translate_text="Dubai and Paraguay Flag" />,
                image_position: 'left',
                margin_bottom: '6rem',
                image_width: '19.2rem',
                image_mobile_width: '19rem',
            },
        ],
    },
    {
        year: '2020',
        bgColor: 'white',
        left: true,
        contents: [
            {
                left: true,
                headers: [{ header: <Localize translate_text="Deriv.com" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="We celebrate 20 years of innovation and growth! Inspired by our clients who are driven to succeed, we launch Deriv.com. Featuring customisable charts and tools, Deriv is created to be a place where people can trade what they want, how they want." />
                        ),
                    },
                ],
                image: 'deriv_laptop',
                image_alt: <Localize translate_text="Deriv Trading" />,
                image_position: 'center',
                margin_right: '6rem',
                margin_left: '-0.7rem',
                margin_bottom: '4rem',
                outer_image_width: '35.7rem',
                content_width: '40rem',
                image_width: '30.4rem',
                image_mobile_width: '27.9rem',
                asset_height: '26rem',
            },
            {
                left: false,
                headers: [{ header: <Localize translate_text="Rapid growth" /> }],
                texts: [
                    {
                        text: (
                            <Localize translate_text="Continuing its global expansion, Deriv.com opens offices in Cyprus and Rwanda. It also strengthens its Malaysian presence with 2 new offices in Ipoh and Melaka." />
                        ),
                    },
                ],

                image: 'location_flags',
                image_alt: <Localize translate_text="Locations flag" />,
                image_position: 'left',
                image_width: '34.8rem',
                image_mobile_width: '328px',
                margin_bottom: '6rem',
            },
        ],
    },
]

export default Stories
