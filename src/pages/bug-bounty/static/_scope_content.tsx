import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { localize, Localize } from 'components/localization'
import { Header, LocalizedLinkText } from 'components/elements'

const LinkText = styled(LocalizedLinkText)`
    font-size: 14px;

    @media ${device.tabletL} {
        font-size: 12px;
    }
`

export const scope_content = [
    {
        title: <Localize translate_text="Important businesses" />,
        list_icon: 'tick',
        description: '',
        check_list: [
            { content: <Localize translate_text="Our payment site: cashier.deriv.com" /> },
            { content: <Localize translate_text="Our login site: oauth.deriv.com" /> },
            {
                content: (
                    <Localize translate_text="Our WebSockets API: *.binaryws.com api.deriv.com" />
                ),
            },
            {
                content: (
                    <Localize
                        translate_text="Our main trading platform: app.deriv.com<0>*</0>"
                        components={[
                            <Header
                                key={0}
                                type="paragraph-2"
                                as="span"
                                color="red"
                                weight="normal"
                            />,
                        ]}
                    />
                ),
                description: (
                    <Localize
                        translate_text="<0>*</0>This only covers the functionalities handled by Deriv"
                        components={[
                            <Header as="span" color="red" type="small" weight="normal" key={0} />,
                        ]}
                    />
                ),
            },
            {
                content: (
                    <Localize translate_text="Our legacy trading platform: smarttrader.deriv.com" />
                ),
            },
        ],
    },
    {
        title: <Localize translate_text="General businesses" />,
        list_icon: 'tick',
        description: '',
        check_list: [
            {
                content: (
                    <Localize
                        translate_text="Our GitHub repositories: <0>github.com/binary-com</0>"
                        components={[<Header key={0} type="paragraph-2" weight="normal" as="p" />]}
                    />
                ),
            },
            {
                content: (
                    <Localize translate_text="Our CFD trading application by Devexperts: dx.deriv.com" />
                ),
            },
            {
                content: (
                    <Localize
                        translate_text="Deriv P2P: Our peer-to-peer payments app (<0>Android app</0>, <1>iOS app</1>)"
                        components={[
                            <LinkText
                                key={0}
                                to={'https://play.google.com/store/apps/details?id=com.deriv.dp2p'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                            <LinkText
                                key={1}
                                to={'https://apps.apple.com/jm/app/deriv-dp2p/id1506901451'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                        ]}
                    />
                ),
            },
            {
                content: (
                    <Localize
                        translate_text="Deriv GO: Our options trading app (<0>Android app</0>, <1>iOS app</1>)"
                        components={[
                            <LinkText
                                key={0}
                                to={'https://play.google.com/store/apps/details?id=com.deriv.app'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                            <LinkText
                                key={1}
                                to={'https://apps.apple.com/ug/app/deriv-go/id1550561298'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                        ]}
                    />
                ),
            },
            {
                content: (
                    <Localize
                        translate_text="Deriv X: Our CFD trading app by DevExperts (<0>Android app</0>, <1>iOS app</1>)"
                        components={[
                            <LinkText
                                key={0}
                                to={'https://play.google.com/store/apps/details?id=com.deriv.dx'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                            <LinkText
                                key={1}
                                to={'https://apps.apple.com/by/app/deriv-x/id1563337503'}
                                target="_blank"
                                color="blue-9"
                                external
                            />,
                        ]}
                    />
                ),
            },
            {
                content: (
                    <Localize translate_text="Our site for marketing campaigns: trade.deriv.com (third-party)" />
                ),
            },
        ],
    },
    {
        title: localize('Edge businesses'),
        list_icon: 'tick',
        description: '',
        check_list: [
            {
                content: (
                    <Localize translate_text="Our site for static resources: static.deriv.com" />
                ),
            },
            { content: <Localize translate_text="Our tracking site: t.deriv.com" /> },
            {
                content: (
                    <Localize translate_text="Our FIX feed server for Deriv X: fix.deriv.com" />
                ),
            },
            { content: <Localize translate_text="Our internal apps: *.deriv.cloud" /> },
            {
                content: (
                    <Localize translate_text="Our weblog address: https://deriv.com/academy/" />
                ),
            },
        ],
    },
    {
        title: '',
        list_icon: 'X',
        description: localize('The following third-party apps are not covered in this program:'),
        check_list: [
            { content: <Localize translate_text="Our charting site: tradingview.deriv.com" /> },
            {
                content: (
                    <Localize translate_text="Our graduate programme site: besquare.deriv.com" />
                ),
            },
            {
                content: (
                    <Localize translate_text="Our CFD trading platform by MetaQuotes: trade.mql5.com" />
                ),
            },
            { content: <Localize translate_text="Our community site: community.deriv.com" /> },
        ],
    },
]
