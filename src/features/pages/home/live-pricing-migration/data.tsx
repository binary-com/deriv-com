import React from 'react'
import { LiveMarketContent } from '@deriv-com/components'
import {
    MarketForexEurusdIcon,
    MarketForexGbpusdIcon,
    MarketForexUsdjpyIcon,
    MarketForexAudusdIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Markets'

export const LivePriceData: LiveMarketContent[] = [
    {
        instrumentIcon: <MarketForexEurusdIcon />,
        instrument: 'EUR/USD',
        changePercentage: '+0.11%',
        status: 'up',
        bidPrice: '1.07219',
        askPrice: '1.07223',
        spread: '0.00005',
    },
    {
        instrumentIcon: <MarketForexGbpusdIcon />,
        instrument: 'GBP/USD',
        changePercentage: '+0.11%',
        status: 'down',
        bidPrice: '1.24112',
        askPrice: '1.24502',
        spread: '0.0001',
    },
    {
        instrumentIcon: <MarketForexUsdjpyIcon />,
        instrument: 'USD/JPY',
        changePercentage: '+0.11%',
        status: 'remain',
        bidPrice: '0.24234',
        askPrice: '0.24265',
        spread: '0.00005',
    },
    {
        instrumentIcon: <MarketForexAudusdIcon />,
        instrument: 'AUD/USD',
        changePercentage: '0.00%',
        status: 'closed',
        bidPrice: '0.66118',
        askPrice: '0.66243',
        spread: '0.00005',
    },
]

export const swiperOption = {
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
}
