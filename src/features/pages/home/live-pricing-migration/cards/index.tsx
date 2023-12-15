import { CardSlider, LiveMarketContent } from '@deriv-com/components'
import {
    MarketForexAudusdIcon,
    MarketForexEurusdIcon,
    MarketForexGbpjpyIcon,
    MarketForexGbpusdIcon,
    MarketForexUsdcadIcon,
} from '@deriv/quill-icons'
import React, { ReactNode, useMemo } from 'react'
import useLiveData from '../data-provider/useLiveData'
import { MarketName } from '../data-provider/types'
import { percentToDecimal, swiperOption } from '../utils'

const IconsMapper = {
    AUDUSD: <MarketForexAudusdIcon />,
    EURUSD: <MarketForexEurusdIcon />,
    GBPJPY: <MarketForexGbpjpyIcon />,
    GBPUSD: <MarketForexGbpusdIcon />,
    USDCAD: <MarketForexUsdcadIcon />,
}

const LiveMarketCard = <T extends MarketName>({
    market,
    children,
}: {
    market: T
    children: ReactNode
}) => {
    const { data } = useLiveData(market)

    const livePriceData: LiveMarketContent[] = useMemo(() => {
        if (!data) return []
        return Object.keys(data).map((key, index) => ({
            id: index,
            instrumentIcon: IconsMapper[key] ?? <MarketForexAudusdIcon />,
            instrument: data[key].sym,
            changePercentage: `${data[key].chng}`,
            status: percentToDecimal(data[key].chng) >= 0 ? 'up' : 'down',
            bidPrice: `${data[key].bid}`,
            askPrice: `${data[key].ask}`,
            spread: `${data[key].sprd}`,
        }))
    }, [data])

    return (
        <>
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                className="w-screen !mr-[calc((-100vw+100%)/2)] lg:w-full lg:!mr-auto"
                cards={livePriceData.slice(0, 4)}
            />
            {children}
        </>
    )
}

export default LiveMarketCard
