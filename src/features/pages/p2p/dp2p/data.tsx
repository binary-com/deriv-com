import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { SmartP2PItem } from './types'

export const p2p_items: SmartP2PItem[] = [
    {
        id: 0,
        data: {
            header: '_t_Save time_t_',
            description:
                '_t_Exchange in minutes. Less waiting, more trading. Deposit and withdraw in minutes._t_',
            img: (
                <StaticImage
                    src="../../../../images/common/p2p/save_time.png"
                    alt="save time"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
    {
        id: 1,
        data: {
            header: '_t_Works with your local currency_t_',
            description: '_t_Deal with fellow traders at pre-agreed rates._t_',
            img: (
                <StaticImage
                    src="../../../../images/common/p2p/local_currency.png"
                    alt="local currency"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
    {
        id: 2,
        data: {
            header: '_t_Available as web and mobile apps_t_',
            description:
                '_t_Easily make deposits and withdrawals on your desktop and mobile devices._t_',
            img: (
                <StaticImage
                    src="../../../../images/common/p2p/web_and_mobile.png"
                    alt="web and mobile"
                    formats={['avif', 'webp', 'auto']}
                    placeholder="none"
                />
            ),
        },
    },
]
