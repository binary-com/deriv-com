import React from 'react'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/markets/forex/smart.svg'
import Tight from 'images/svg/markets/forex/tight.svg'
import Favourite from 'images/svg/markets/forex/favourite.svg'
import Golong from 'images/svg/markets/forex/go-long.svg'
import Instant from 'images/svg/markets/forex/instant.svg'

type cfd_content = {
    src: string
    text: React.ReactNode
    item_title: React.ReactNode
    item_title_eu?: React.ReactNode
    text_eu?: React.ReactNode
    alt: string
}

export const cfd_content: cfd_content[] = [
    {
        src: Tight,
        alt: 'High leverage, tight spreads',
        item_title_eu: <Localize translate_text="Tight spreads" />,
        item_title: <Localize translate_text="High leverage, tight spreads" />,
        text: (
            <Localize translate_text="Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms." />
        ),
        text_eu: (
            <Localize translate_text="Take advantage of tight spreads on Deriv’s CFD trading platforms." />
        ),
    },
    {
        src: Favourite,
        alt: 'All your favourite markets',
        item_title: <Localize translate_text="All your favourite markets" />,
        item_title_eu: <Localize translate_text="All your favourite markets" />,

        text: (
            <Localize translate_text="Trade on financial markets plus our proprietary synthetics that are available 24/7." />
        ),
        text_eu: (
            <Localize translate_text="Trade on financial markets plus our proprietary synthetics that are available 24/7." />
        ),
    },
    {
        src: Golong,
        alt: 'Easy deposits and withdrawals',
        item_title: <Localize translate_text="Go long or short" />,
        item_title_eu: <Localize translate_text="Go long or short" />,

        text: (
            <Localize translate_text="Open long or short positions based on your predictions of the market price movements." />
        ),
        text_eu: (
            <Localize translate_text="Open long or short positions based on your predictions of the market price movements." />
        ),
    },
    {
        src: FriendlySupport,
        alt: 'Expert and friendly support',
        item_title: <Localize translate_text="Expert and friendly support" />,
        item_title_eu: <Localize translate_text="Expert and friendly support" />,
        text: <Localize translate_text="Get expert, friendly support when you need it." />,
        text_eu: <Localize translate_text="Get expert, friendly support when you need it." />,
    },
    {
        src: Instant,
        alt: 'Instant access',
        item_title: <Localize translate_text="Instant access" />,
        item_title_eu: <Localize translate_text="Instant access" />,
        text: <Localize translate_text="Open an account and start trading in minutes." />,
        text_eu: <Localize translate_text="Open an account and start trading in minutes." />,
    },
]
