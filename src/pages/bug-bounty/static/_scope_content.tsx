import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Header, LocalizedLinkText } from 'components/elements'
import { TString } from 'types/generics'

const LinkText = styled(LocalizedLinkText)`
    font-size: 14px;

    @media ${device.tabletL} {
        font-size: 12px;
    }
`

type TScopeContent = {
    id: number
    title?: TString
    list_icon: string
    description?: TString
    check_list: {
        id: number
        content: {
            text: TString
            components?: React.ReactElement[]
        }
        description?: {
            text: TString
            components?: React.ReactElement[]
        }
    }[]
}

export const scope_content: TScopeContent[] = [
    {
        id: 0,
        title: '_t_Important businesses_t_',
        list_icon: 'tick',
        description: null,
        check_list: [
            { id: 0, content: { text: '_t_Our payment site: cashier.deriv.com_t_' } },
            { id: 1, content: { text: '_t_Our login site: oauth.deriv.com_t_' } },
            { id: 2, content: { text: '_t_Our WebSockets API: *.binaryws.com api.deriv.com_t_' } },
            {
                id: 3,
                content: {
                    text: '_t_Our main trading platform: app.deriv.com<0>*</0>_t_',
                    components: [
                        <Header key={0} type="paragraph-2" as="span" color="red" weight="normal" />,
                    ],
                },
                description: {
                    text: '_t_<0>*</0>This only covers the functionalities handled by Deriv_t_',
                    components: [
                        <Header as="span" color="red" type="small" weight="normal" key={0} />,
                    ],
                },
            },
            {
                id: 4,
                content: { text: '_t_Our legacy trading platform: smarttrader.deriv.com_t_' },
            },
        ],
    },
    {
        id: 1,
        title: '_t_General businesses_t_',
        list_icon: 'tick',
        description: null,
        check_list: [
            {
                id: 0,
                content: {
                    text: '_t_Our GitHub repositories: <0>github.com/binary-com</0>_t_',
                    components: [<Header key={0} type="paragraph-2" weight="normal" as="p" />],
                },
            },
            {
                id: 1,
                content: { text: '_t_Our CFD trading application by Devexperts: dx.deriv.com_t_' },
            },
            {
                id: 2,
                content: {
                    text: '_t_Deriv P2P: Our peer-to-peer payments app (<0>Android app</0>, <1>iOS app</1>)_t_',
                    components: [
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
                    ],
                },
            },
            {
                id: 3,
                content: {
                    text: '_t_Deriv GO: Our options trading app (<0>Android app</0>, <1>iOS app</1>)_t_',
                    components: [
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
                    ],
                },
            },
            {
                id: 4,
                content: {
                    text: '_t_Deriv X: Our CFD trading app by DevExperts (<0>Android app</0>, <1>iOS app</1>)_t_',
                    components: [
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
                    ],
                },
            },
            {
                id: 5,
                content: {
                    text: '_t_Our site for marketing campaigns: trade.deriv.com (third-party)_t_',
                },
            },
        ],
    },
    {
        id: 2,
        title: '_t_Edge businesses_t_',
        list_icon: 'tick',
        description: null,
        check_list: [
            { id: 0, content: { text: '_t_Our site for static resources: static.deriv.com_t_' } },
            { id: 1, content: { text: '_t_Our tracking site: t.deriv.com_t_' } },
            { id: 2, content: { text: '_t_Our FIX feed server for Deriv X: fix.deriv.com_t_' } },
            { id: 3, content: { text: '_t_Our internal apps: *.deriv.cloud_t_' } },
            { id: 4, content: { text: '_t_Our weblog address: https://deriv.com/academy/_t_' } },
        ],
    },
    {
        id: 3,
        title: null,
        list_icon: 'X',
        description: '_t_The following third-party apps are not covered in this program:_t_',
        check_list: [
            { id: 0, content: { text: '_t_Our charting site: tradingview.deriv.com_t_' } },
            { id: 1, content: { text: '_t_Our graduate programme site: besquare.deriv.com_t_' } },
            {
                id: 2,
                content: { text: '_t_Our CFD trading platform by MetaQuotes: trade.mql5.com_t_' },
            },
            { id: 3, content: { text: '_t_Our community site: community.deriv.com_t_' } },
        ],
    },
]
