import React, { ReactNode, useMemo } from 'react'
import { CardSlider, LiveMarketContent } from '@deriv-com/components'
import {
    MarketForexAudusdIcon,
    MarketForexEurusdIcon,
    MarketForexGbpjpyIcon,
    MarketForexGbpusdIcon,
    MarketForexUsdcadIcon,
    MarketCryptocurrencyAdausdIcon,
    MarketCryptocurrencyBtcusdIcon,
    MarketCryptocurrencyDogusdIcon,
    MarketCryptocurrencyDshusdIcon,
    EnergyWtiOilusIcon,
    MarketCommoditySilverusdIcon,
    MarketCommodityGoldusdIcon,
    MarketCommodityCopperusdIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Markets'
import useLiveData from '../data-provider/useLiveData'
import { MarketName } from '../data-provider/types'
import { percentToDecimal, swiperOption } from '../utils'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { Localize } from 'components/localization'

const IconsMapper = {
    AUDUSD: <MarketForexAudusdIcon />,
    EURUSD: <MarketForexEurusdIcon />,
    GBPJPY: <MarketForexGbpjpyIcon />,
    GBPUSD: <MarketForexGbpusdIcon />,
    USDCAD: <MarketForexUsdcadIcon />,
    ADAUSD: <MarketCryptocurrencyAdausdIcon />,
    BTCUSD: <MarketCryptocurrencyBtcusdIcon />,
    DOGUSD: <MarketCryptocurrencyDogusdIcon />,
    DSHUSD: <MarketCryptocurrencyDshusdIcon />,
    WTI_OIL: <EnergyWtiOilusIcon />,
    XAGUSD: <MarketCommoditySilverusdIcon />,
    XAUUSD: <MarketCommodityGoldusdIcon />,
    XCUUSD: <MarketCommodityCopperusdIcon />,
}

const LiveMarketCard = <T extends MarketName>({
    market,
    children,
}: {
    market: T | T[]
    children: ReactNode
}) => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    const { data } = useLiveData(market)

    const livePriceData: LiveMarketContent[] = useMemo(() => {
        if (!data) return []
        return Object.keys(data).map((key, index) => ({
            id: index,
            instrumentIcon: IconsMapper[key] ?? <MarketForexAudusdIcon />,
            instrument: data[key].sym,
            changePercentage: `${data[key].chng}`,
            status:
                percentToDecimal(data[key].chng) === 0
                    ? 'remain'
                    : percentToDecimal(data[key].chng) > 0
                    ? 'up'
                    : 'down',
            bidPrice: `${data[key].bid}`,
            askPrice: `${data[key].ask}`,
            spread: `${data[key].sprd}`,
            mid: data[key].mid,
            onClickBuyButton: is_logged_in ? handleRedirectToTradersHub : handleSignup,
            onClickSellButton: is_logged_in ? handleRedirectToTradersHub : handleSignup,
            bidContent: <Localize translate_text="_t_Bid_t_" />,
            askContent: <Localize translate_text="_t_Ask_t_" />,
            spreadContent: <Localize translate_text="_t_Spread_t_" />,
            buyContent: <Localize translate_text="_t_Buy_t_" />,
            sellContent: <Localize translate_text="_t_Sell_t_" />,
        }))
    }, [data, is_logged_in, handleSignup])

    return (
        <>
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[296px] mr-800"
                className="w-screen !mr-[calc((-100vw+100%)/2)] lg:w-full lg:!mr-auto"
                cards={livePriceData.slice(0, 4)}
            />
            <div className="flex items-center flex-col">{children}</div>
        </>
    )
}

export default LiveMarketCard
