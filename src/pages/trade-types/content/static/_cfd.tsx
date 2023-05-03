import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
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

const why_trade_images = {
    high_leverage: (
        <StaticImage
            src="../../../images/svg/markets/tight.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    all_markets: (
        <StaticImage
            src="../../../images/svg/markets/favourite.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    long_or_short: (
        <StaticImage
            src="../../../images/svg/markets/go-long.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    support: (
        <StaticImage
            src="../../../images/svg/markets/smart.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    access: (
        <StaticImage
            src="../../../images/svg/markets/instant.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
    swap_free: (
        <StaticImage
            src="../../../images/svg/markets/swap-free.svg"
            alt=""
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            quality={50}
            objectFit="contain"
            placeholder="none"
        />
    ),
}

export const why_trade = [
    {
        title: '_t_High leverage, tight spreads_t_',
        title_eu: '_t_Tight spreads_t_',
        text: '_t_Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms._t_',
        text_eu: '_t_Take advantage of tight spreads on Deriv’s CFD trading platforms._t_',
        image: why_trade_images['high_leverage'],
    },
    {
        title: '_t_All your favourite markets_t_',
        text: '_t_Trade on financial markets plus our proprietary synthetic indices that are available 24/7._t_',
        text_eu:
            '_t_Trade on all popular markets plus our proprietary synthetic indices that are available 24/7._t_',
        image: why_trade_images['all_markets'],
    },
    {
        title: '_t_Go long or short_t_',
        text: '_t_Open long or short positions based on your predictions of the market price movements._t_',
        image: why_trade_images['long_or_short'],
    },
    {
        title: '_t_Expert and friendly support_t_',
        text: '_t_Get expert, friendly support when you need it._t_',
        image: why_trade_images['support'],
    },
    {
        title: '_t_Instant access_t_',
        text: '_t_Open an account and start trading in minutes._t_',
        image: why_trade_images['access'],
    },
    {
        title: '_t_Swap-free MT5 account_t_',
        text: '_t_Leave your trades open overnight with no additional charges._t_',
        image: why_trade_images['swap_free'],
    },
]
