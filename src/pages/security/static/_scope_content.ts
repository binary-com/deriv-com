export const scope_content = [
    {
        title: 'Important businesses',
        list_icon: 'tick',
        description: '',
        check_list: [
            { content: 'Our payment site: cashier.deriv.com' },
            { content: 'Our login site: oauth.deriv.com' },
            { content: 'Our WebSockets API: *.binaryws.com api.deriv.com' },
            {
                content: 'Our main trading platform: app.deriv.com<3>*</3>',
                description: '<0>*</0>This only covers the functionalities handled by Deriv',
            },
            { content: 'Our legacy trading platform: smarttrader.deriv.com' },
        ],
    },
    {
        title: 'General businesses',
        list_icon: 'tick',
        description: '',
        check_list: [
            { content: 'Our GitHub repositories: <0>github.com/binary-com</0>' },
            { content: 'Our CFD trading application by Devexperts: dx.deriv.com' },
            {
                content:
                    'Deriv P2P: Our peer-to-peer payments app (<1>Android app</1>, <2>iOS app</2>)',
                link: 'https://play.google.com/store/apps/details?id=com.deriv.dp2p',
                link_2: 'https://apps.apple.com/ug/app/deriv-go/id1550561298',
            },
            {
                content: 'Deriv GO: Our options trading app (<1>Android app</1>, <2>iOS app</2>)',
                link: 'https://play.google.com/store/apps/details?id=com.deriv.dp2p',
                link_2: 'https://apps.apple.com/ug/app/deriv-go/id1550561298',
            },
            {
                content:
                    'Deriv X: Our CFD trading app by DevExperts (<1>Android app</1>, <2>iOS app</2>)',
                link: 'https://play.google.com/store/apps/details?id=com.deriv.dp2p',
                link_2: 'https://apps.apple.com/ug/app/deriv-go/id1550561298',
            },
            { content: 'Our site for marketing campaigns: trade.deriv.com (third-party)' },
        ],
    },
    {
        title: 'Edge businesses',
        list_icon: 'tick',
        description: '',
        check_list: [
            { content: 'Our site for static resources: static.deriv.com' },
            { content: 'Our tracking site: t.deriv.com' },
            { content: 'Our FIX feed server for Deriv X: fix.deriv.com' },
            { content: 'Our internal apps: *.deriv.cloud' },
            { content: 'Our weblog address: https://deriv.com/academy/' },
        ],
    },
    {
        title: '',
        list_icon: 'X',
        description: 'The following third-party apps are not covered in this program:',
        check_list: [
            { content: 'Our charting site: tradingview.deriv.com' },
            { content: 'Our graduate programme site: besquare.deriv.com' },
            { content: 'Our CFD trading platform by MetaQuotes: trade.mql5.com' },
            { content: 'Our community site: community.deriv.com' },
        ],
    },
]
