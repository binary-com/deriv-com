import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'

export type MarketSymbol = {
    src: string
    text: ReactElement
}

export const americas: MarketSymbol[] = [
    {
        src: 'STOCKSUS500',
        text: <Localize translate_text="_t_US 500_t_" />,
    },
    {
        src: 'STOCKSUSTECH100',
        text: <Localize translate_text="_t_US Tech 100_t_" />,
    },
    {
        src: 'STOCKSWALLSTREET30',
        text: <Localize translate_text="_t_Wall Street 30_t_" />,
    },
]
export const asia_oceania: MarketSymbol[] = [
    {
        src: 'STOCKSAUS200',
        text: <Localize translate_text="_t_Australia 200_t_" />,
    },
    {
        src: 'STOCKSHONGKONG50',
        text: <Localize translate_text="_t_Hong Kong 50_t_" />,
    },
    {
        src: 'STOCKSJAPAN225',
        text: <Localize translate_text="_t_Japan 225_t_" />,
    },
]
export const continuous_indices: MarketSymbol[] = [
    {
        src: 'INDEX10S1NEW',
        text: <Localize translate_text="_t_Volatility 10 (1s) Index_t_" />,
    },
    {
        src: 'INDEX25S1NEW',
        text: <Localize translate_text="_t_Volatility 25 (1s) Index_t_" />,
    },
    {
        src: 'INDEX50S1NEW',
        text: <Localize translate_text="_t_Volatility 50 (1s) Index_t_" />,
    },
    {
        src: 'INDEX75S1NEW',
        text: <Localize translate_text="_t_Volatility 75 (1s) Index_t_" />,
    },
    {
        src: 'INDEX100S1NEW',
        text: <Localize translate_text="_t_Volatility 100 (1s) Index_t_" />,
    },
    {
        src: 'INDEX10NEW',
        text: <Localize translate_text="_t_Volatility 10 Index_t_" />,
    },
    {
        src: 'INDEX25NEW',
        text: <Localize translate_text="_t_Volatility 25 Index_t_" />,
    },
    {
        src: 'INDEX50NEW',
        text: <Localize translate_text="_t_Volatility 50 Index_t_" />,
    },
    {
        src: 'INDEX75NEW',
        text: <Localize translate_text="_t_Volatility 75 Index_t_" />,
    },
    {
        src: 'INDEX100NEW',
        text: <Localize translate_text="_t_Volatility 100 Index_t_" />,
    },
] // export const volatility_indices: MarketSymbol[] = continuous_indices

export const volatility_indices: MarketSymbol[] = [
    {
        src: 'INDEX10S1NEW',
        text: <Localize translate_text="_t_Volatility 10 (1s) Index_t_" />,
    },
    {
        src: 'INDEX25S1NEW',
        text: <Localize translate_text="_t_Volatility 25 (1s) Index_t_" />,
    },
    {
        src: 'INDEX50S1NEW',
        text: <Localize translate_text="_t_Volatility 50 (1s) Index_t_" />,
    },
    {
        src: 'INDEX75S1NEW',
        text: <Localize translate_text="_t_Volatility 75 (1s) Index_t_" />,
    },
    {
        src: 'INDEX100S1NEW',
        text: <Localize translate_text="_t_Volatility 100 (1s) Index_t_" />,
    },
    {
        src: 'INDEX10NEW',
        text: <Localize translate_text="_t_Volatility 10 Index_t_" />,
    },
    {
        src: 'INDEX25NEW',
        text: <Localize translate_text="_t_Volatility 25 Index_t_" />,
    },
    {
        src: 'INDEX50NEW',
        text: <Localize translate_text="_t_Volatility 50 Index_t_" />,
    },
    {
        src: 'INDEX75NEW',
        text: <Localize translate_text="_t_Volatility 75 Index_t_" />,
    },
    {
        src: 'INDEX100NEW',
        text: <Localize translate_text="_t_Volatility 100 Index_t_" />,
    },
]
export const volatility_indices_eu: MarketSymbol[] = []
export const crash_boom: MarketSymbol[] = [
    {
        src: 'BOOM1000NEW',
        text: <Localize translate_text="_t_Boom 1000 Index_t_" />,
    },
    {
        src: 'BOOM500NEW',
        text: <Localize translate_text="_t_Boom 500 Index_t_" />,
    },
    {
        src: 'VBOOMIC300',
        text: <Localize translate_text="_t_Boom 300 Index _t_" />,
    },
    {
        src: 'CRASH1000NEW',
        text: <Localize translate_text="_t_Crash 1000 Index_t_" />,
    },
    {
        src: 'CRASH500NEW',
        text: <Localize translate_text="_t_Crash 500 Index_t_" />,
    },
    {
        src: 'VCRASHIC300',
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
]
export const crash_boom_multipliers: MarketSymbol[] = [
    {
        src: 'BOOM1000NEW',
        text: <Localize translate_text="_t_Boom 1000 Index_t_" />,
    },
    {
        src: 'BOOM500NEW',
        text: <Localize translate_text="_t_Boom 500 Index_t_" />,
    },
    {
        src: 'CRASH1000NEW',
        text: <Localize translate_text="_t_Crash 1000 Index_t_" />,
    },
    {
        src: 'CRASH500NEW',
        text: <Localize translate_text="_t_Crash 500 Index_t_" />,
    },
]
export const crash_boom_eu: MarketSymbol[] = [
    {
        src: 'VCRASHIC300',
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
    {
        src: 'VBOOMIC300',
        text: <Localize translate_text="_t_Boom 300 Index_t_" />,
    },
]
export const daily_reset_indices: MarketSymbol[] = [
    {
        src: 'MARKETBEARNEW',
        text: <Localize translate_text="_t_Bear Market Index_t_" />,
    },
    {
        src: 'MARKETBULLNEW',
        text: <Localize translate_text="_t_Bull Market Index_t_" />,
    },
]
export const europe: MarketSymbol[] = [
    {
        src: 'STOCKSNETHERLANDS25',
        text: <Localize translate_text="_t_Netherlands 25_t_" />,
    },
    {
        src: 'STOCKSEUROPE50',
        text: <Localize translate_text="_t_Europe 50_t_" />,
    },
    {
        src: 'STOCKSFRANCE40',
        text: <Localize translate_text="_t_France 40_t_" />,
    },
    {
        src: 'STOCKSGERMANY40',
        text: <Localize translate_text="_t_Germany 40_t_" />,
    },
    {
        src: 'STOCKSSWISS20',
        text: <Localize translate_text="_t_Swiss 20_t_" />,
    },
    {
        src: 'STOCKSUK100',
        text: <Localize translate_text="_t_UK 100_t_" />,
    },
]
export const exotic_pairs: MarketSymbol[] = [
    {
        src: 'AUDSGD',
        text: <Localize translate_text="_t_AUD/SGD_t_" />,
    },
    {
        src: 'EURHKD',
        text: <Localize translate_text="_t_EUR/HKD_t_" />,
    },
    {
        src: 'EURILS',
        text: <Localize translate_text="_t_EUR/ILS_t_" />,
    },
    {
        src: 'EURMXN',
        text: <Localize translate_text="_t_EUR/MXN_t_" />,
    },
    {
        src: 'EURSGD',
        text: <Localize translate_text="_t_EUR/SGD_t_" />,
    },
    {
        src: 'EURZAR',
        text: <Localize translate_text="_t_EUR/ZAR_t_" />,
    }, // {
    //     src: icons.EURTRY,
    //     text: <Localize translate_text="EUR/TRY" />,
    // },
    {
        src: 'GBPSGD',
        text: <Localize translate_text="_t_GBP/SGD_t_" />,
    },
    {
        src: 'HKDJPY',
        text: <Localize translate_text="_t_HKD/JPY_t_" />,
    },
    {
        src: 'NZDCHF',
        text: <Localize translate_text="_t_NZD/CHF_t_" />,
    }, // {
    //     src: icons.GBPTRY,
    //     text: <Localize translate_text="GBP/TRY" />,
    // },
    {
        src: 'NZDSGD',
        text: <Localize translate_text="_t_NZD/SGD_t_" />,
    },
    {
        src: 'SGDJPY',
        text: <Localize translate_text="_t_SGD/JPY_t_" />,
    },
    {
        src: 'USDHKD',
        text: <Localize translate_text="_t_USD/HKD_t_" />,
    },
    {
        src: 'USDILS',
        text: <Localize translate_text="_t_USD/ILS_t_" />,
    },
    {
        src: 'USDRUB',
        text: <Localize translate_text="_t_USD/RUB_t_" />,
    },
    {
        src: 'USDSGD',
        text: <Localize translate_text="_t_USD/SGD_t_" />,
    },
    {
        src: 'USDTHB',
        text: <Localize translate_text="_t_USD/THB_t_" />,
    }, // {
    //     src: icons.USDTRY,
    //     text: <Localize translate_text="USD/TRY" />,
    // },
]
export const major_pairs: MarketSymbol[] = [
    {
        src: 'AUDJPY',
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: 'AUDUSD',
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: 'EURAUD',
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: 'EURCAD',
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: 'EURCHF',
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: 'EURGBP',
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: 'EURJPY',
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: 'EURUSD',
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: 'GBPAUD',
        text: <Localize translate_text="_t_GBP/AUD_t_" />,
    },
    {
        src: 'GBPJPY',
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: 'GBPUSD',
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: 'USDCAD',
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: 'USDCHF',
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: 'USDJPY',
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]
export const metals: MarketSymbol[] = [
    {
        src: 'ALUMINIUMUSD',
        text: <Localize translate_text="_t_Aluminium/USD_t_" />,
    },
    {
        src: 'COPPERUSD',
        text: <Localize translate_text="_t_Copper/USD_t_" />,
    },
    {
        src: 'GOLDEUR',
        text: <Localize translate_text="_t_Gold/EUR_t_" />,
    },
    {
        src: 'GOLDUSD',
        text: <Localize translate_text="_t_Gold/USD_t_" />,
    },
    {
        src: 'LEADUSD',
        text: <Localize translate_text="_t_Lead/USD_t_" />,
    },
    {
        src: 'NICKELUSD',
        text: <Localize translate_text="_t_Nickel/USD_t_" />,
    },
    {
        src: 'PALLADIUMUSD',
        text: <Localize translate_text="_t_Palladium/USD_t_" />,
    },
    {
        src: 'PLATINUMUSD',
        text: <Localize translate_text="_t_Platinum/USD_t_" />,
    },
    {
        src: 'SILVEREUR',
        text: <Localize translate_text="_t_Silver/EUR_t_" />,
    },
    {
        src: 'SILVERUSD',
        text: <Localize translate_text="_t_Silver/USD_t_" />,
    },
    {
        src: 'ZINCUSD',
        text: <Localize translate_text="_t_Zinc/USD_t_" />,
    },
]
export const metals_options: MarketSymbol[] = [
    {
        src: 'GOLDUSD',
        text: <Localize translate_text="_t_Gold/USD_t_" />,
    },
    {
        src: 'PALLADIUMUSD',
        text: <Localize translate_text="_t_Palladium/USD_t_" />,
    },
    {
        src: 'PLATINUMUSD',
        text: <Localize translate_text="_t_Platinum/USD_t_" />,
    },
    {
        src: 'SILVEREUR',
        text: <Localize translate_text="_t_Silver/EUR_t_" />,
    },
]
export const range_break: MarketSymbol[] = [
    {
        src: 'RANGEBREAK100New',
        text: <Localize translate_text="_t_Range Break 100 Index_t_" />,
    },
    {
        src: 'RANGEBREAK200New',
        text: <Localize translate_text="_t_Range Break 200 Index_t_" />,
    },
]
export const micro_pairs: MarketSymbol[] = [
    {
        src: 'AUDCAD',
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: 'AUDCHF',
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: 'AUDJPY',
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: 'AUDNZD',
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: 'AUDUSD',
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: 'EURAUD',
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: 'EURCAD',
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: 'EURCHF',
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: 'EURGBP',
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: 'EURJPY',
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: 'EURNZD',
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: 'EURUSD',
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: 'GBPCHF',
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: 'GBPJPY',
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: 'GBPUSD',
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: 'NZDUSD',
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: 'USDCAD',
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: 'USDCHF',
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: 'USDJPY',
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]
export const smart_gold_index: MarketSymbol[] = [
    {
        src: 'GOLDUSD',
        text: <Localize translate_text="_t_Smart Gold Index_t_" />,
    },
]
export const minor_pairs: MarketSymbol[] = [
    {
        src: 'AUDCAD',
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: 'AUDCHF',
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: 'AUDNZD',
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: 'CADCHF',
        text: <Localize translate_text="_t_CAD/CHF_t_" />,
    },
    {
        src: 'CADJPY',
        text: <Localize translate_text="_t_CAD/JPY_t_" />,
    },
    {
        src: 'CHFJPY',
        text: <Localize translate_text="_t_CHF/JPY_t_" />,
    },
    {
        src: 'EURNOK',
        text: <Localize translate_text="_t_EUR/NOK_t_" />,
    },
    {
        src: 'EURNZD',
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: 'EURLPN',
        text: <Localize translate_text="_t_EUR/PLN_t_" />,
    },
    {
        src: 'EURSEK',
        text: <Localize translate_text="_t_EUR/SEK_t_" />,
    },
    {
        src: 'GBPCAD',
        text: <Localize translate_text="_t_GBP/CAD_t_" />,
    },
    {
        src: 'GBPCHF',
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: 'GBPNOK',
        text: <Localize translate_text="_t_GBP/NOK_t_" />,
    },
    {
        src: 'GBPNZD',
        text: <Localize translate_text="_t_GBP/NZD_t_" />,
    },
    {
        src: 'GBPSEK',
        text: <Localize translate_text="_t_GBP/SEK_t_" />,
    },
    {
        src: 'NZDCAD',
        text: <Localize translate_text="_t_NZD/CAD_t_" />,
    },
    {
        src: 'NZDJPY',
        text: <Localize translate_text="_t_NZD/JPY_t_" />,
    },
    {
        src: 'NZDUSD',
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: 'USDCNH',
        text: <Localize translate_text="_t_USD/CNH_t_" />,
    },
    {
        src: 'USDMXN',
        text: <Localize translate_text="_t_USD/MXN_t_" />,
    },
    {
        src: 'USDNOK',
        text: <Localize translate_text="_t_USD/NOK_t_" />,
    },
    {
        src: 'USDPLN',
        text: <Localize translate_text="_t_USD/PLN_t_" />,
    },
    {
        src: 'USDSEK',
        text: <Localize translate_text="_t_USD/SEK_t_" />,
    },
    {
        src: 'USDZAR',
        text: <Localize translate_text="_t_USD/ZAR_t_" />,
    },
]
export const minor_options_pairs: MarketSymbol[] = [
    {
        src: 'AUDCAD',
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: 'AUDCHF',
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: 'AUDNZD',
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: 'EURNZD',
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: 'GBPCAD',
        text: <Localize translate_text="_t_GBP/CAD_t_" />,
    },
    {
        src: 'GBPCHF',
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: 'GBPNOK',
        text: <Localize translate_text="_t_GBP/NOK_t_" />,
    },
    {
        src: 'GBPNZD',
        text: <Localize translate_text="_t_GBP/NZD_t_" />,
    },
    {
        src: 'NZDJPY',
        text: <Localize translate_text="_t_NZD/JPY_t_" />,
    },
    {
        src: 'NZDUSD',
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: 'USDMXN',
        text: <Localize translate_text="_t_USD/MXN_t_" />,
    },
    {
        src: 'USDNOK',
        text: <Localize translate_text="_t_USD/NOK_t_" />,
    },
    {
        src: 'USDPLN',
        text: <Localize translate_text="_t_USD/PLN_t_" />,
    },
    {
        src: 'USDSEK',
        text: <Localize translate_text="_t_USD/SEK_t_" />,
    },
]
export const stocks_american_indices: MarketSymbol[] = [
    {
        src: 'STOCKSUS500',
        text: <Localize translate_text="_t_US 500_t_" />,
    },
    {
        src: 'STOCKSUSTECH100',
        text: <Localize translate_text="_t_US Tech 100_t_" />,
    },
    {
        src: 'STOCKSWALLSTREET30',
        text: <Localize translate_text="_t_Wall Street 30_t_" />,
    },
]
export const stocks_asian_indices: MarketSymbol[] = [
    {
        src: 'STOCKSAUS200',
        text: <Localize translate_text="_t_Australia 200_t_" />,
    },
    {
        src: 'STOCKSJAPAN225',
        text: <Localize translate_text="_t_Japan 225_t_" />,
    },
]
export const stocks_european_indices: MarketSymbol[] = [
    {
        src: 'STOCKSNETHERLANDS25',
        text: <Localize translate_text="_t_Netherlands 25_t_" />,
    },
    {
        src: 'STOCKSEUROPE50',
        text: <Localize translate_text="_t_Europe 50_t_" />,
    },
    {
        src: 'STOCKSFRANCE40',
        text: <Localize translate_text="_t_France 40_t_" />,
    },
    {
        src: 'STOCKSGERMANY40',
        text: <Localize translate_text="_t_Germany 40_t_" />,
    },
    {
        src: 'STOCKSUK100',
        text: <Localize translate_text="_t_UK 100_t_" />,
    },
    {
        src: 'STOCKSSPAIN35',
        text: <Localize translate_text="_t_Spain 35_t_" />,
    },
]
export const american_stocks: MarketSymbol[] = [
    {
        src: 'STOCKSADIDASSALOMON',
        text: <Localize translate_text="_t_Adidas Salomon_t_" />,
    },
    {
        src: 'STOCKSADVANCEDMICRODEVICES',
        text: <Localize translate_text="_t_Advanced Micro Devices Inc_t_" />,
    },
    {
        src: 'STOCKSAIRBNB',
        text: <Localize translate_text="_t_Airbnb_t_" />,
    },
    {
        src: 'STOCKSAIRBUSSE',
        text: <Localize translate_text="_t_Airbus SE_t_" />,
    },
    {
        src: 'STOCKSAIRFRANCE',
        text: <Localize translate_text="_t_Air France KLM SA_t_" />,
    },
    {
        src: 'STOCKSALIBABAGROUP',
        text: <Localize translate_text="_t_Alibaba Group Holding Ltd_t_" />,
    },
    {
        src: 'STOCKSALPHABET',
        text: <Localize translate_text="_t_Alphabet Inc Class C_t_" />,
    },
    {
        src: 'STOCKSAMAZON',
        text: <Localize translate_text="_t_Amazon.com Inc_t_" />,
    },
    {
        src: 'STOCKSAIRLINESGROUP',
        text: <Localize translate_text="_t_American Airlines Group Inc_t_" />,
    },
    {
        src: 'STOCKSAMERICANINTERNATIONAL',
        text: <Localize translate_text="_t_American International Group_t_" />,
    },
    {
        src: 'STOCKSAPPLE',
        text: <Localize translate_text="_t_Apple_t_" />,
    },
    {
        src: 'STOCKSBANKOFAMERICA',
        text: <Localize translate_text="_t_Bank of America_t_" />,
    },
    {
        src: 'STOCKSBAYERAG',
        text: <Localize translate_text="_t_Bayer AG_t_" />,
    },
    {
        src: 'STOCKSBIOGEN',
        text: <Localize translate_text="_t_Biogen Inc_t_" />,
    },
    {
        src: 'STOCKSBMW',
        text: <Localize translate_text="_t_BMW_t_" />,
    },
    {
        src: 'STOCKSBOEING',
        text: <Localize translate_text="_t_Boeing_t_" />,
    },
    {
        src: 'STOCKSCISCO',
        text: <Localize translate_text="_t_Cisco Systems_t_" />,
    },
    {
        src: 'STOCKSCITIGROUP',
        text: <Localize translate_text="_t_Citigroup_t_" />,
    },
    {
        src: 'STOCKSCOCACOLA',
        text: <Localize translate_text="_t_Coca-Cola_t_" />,
    },
    {
        src: 'STOCKSCONTINENTAL',
        text: <Localize translate_text="_t_Continental AG_t_" />,
    },
    {
        src: 'STOCKSDELTAAIRLINES',
        text: <Localize translate_text="_t_Delta Air Lines_t_" />,
    },
    {
        src: 'STOCKSDEUTSCHEBANK',
        text: <Localize translate_text="_t_Deutsche Bank AG_t_" />,
    },
    {
        src: 'STOCKSLUFTHANSA',
        text: <Localize translate_text="_t_Deutsche Lufthansa AG_t_" />,
    },
    {
        src: 'STOCKSEBAY',
        text: <Localize translate_text="_t_eBay Inc_t_" />,
    },
    {
        src: 'STOCKSFACEBOOK',
        text: <Localize translate_text="_t_Facebook Inc_t_" />,
    },
    {
        src: 'STOCKSFEDEX',
        text: <Localize translate_text="_t_Fedex_t_" />,
    },
    {
        src: 'STOCKSFOX',
        text: <Localize translate_text="_t_Fox Corp Class B_t_" />,
    },
    {
        src: 'STOCKSGENERALMOTORSCOMP',
        text: <Localize translate_text="_t_General Motors Company_t_" />,
    },
    {
        src: 'STOCKSGOLDMANSACHS',
        text: <Localize translate_text="_t_Goldman Sachs Group_t_" />,
    },
    {
        src: 'STOCKSHOME',
        text: <Localize translate_text="_t_Home Depot Inc_t_" />,
    },
    {
        src: 'STOCKSHPINC',
        text: <Localize translate_text="_t_HP Inc_t_" />,
    },
    {
        src: 'STOCKSHUGOBOSS',
        text: <Localize translate_text="_t_Hugo Boss AG Common Stock_t_" />,
    },
    {
        src: 'STOCKSIBM',
        text: <Localize translate_text="_t_IBM_t_" />,
    },
    {
        src: 'STOCKSINTEL',
        text: <Localize translate_text="_t_Intel_t_" />,
    },
    {
        src: 'STOCKSJOHNSONJOHNSON',
        text: <Localize translate_text="_t_Johnson & Johnson_t_" />,
    },
    {
        src: 'STOCKSJPMORGANCHASE',
        text: <Localize translate_text="_t_JP Morgan Chase_t_" />,
    },
    {
        src: 'STOCKSMASTERCARDINC',
        text: <Localize translate_text="_t_Mastercard Inc_t_" />,
    },
    {
        src: 'STOCKSMCDONALDS',
        text: <Localize translate_text="_t_McDonald's_t_" />,
    },
    {
        src: 'STOCKSMICROSOFT',
        text: <Localize translate_text="_t_Microsoft Corporation_t_" />,
    },
    {
        src: 'STOCKSMODERNA',
        text: <Localize translate_text="_t_Moderna Inc_t_" />,
    },
    {
        src: 'STOCKSNESTLE',
        text: <Localize translate_text="_t_Nestle SA_t_" />,
    },
    {
        src: 'STOCKSNETFLIX',
        text: <Localize translate_text="_t_Netflix Inc_t_" />,
    },
    {
        src: 'STOCKSNIKE',
        text: <Localize translate_text="_t_Nike_t_" />,
    },
    {
        src: 'STOCKSNOVARTIS',
        text: <Localize translate_text="_t_Novartis AG_t_" />,
    },
    {
        src: 'STOCKSNVIDIA',
        text: <Localize translate_text="_t_NVIDIA Corp_t_" />,
    },
    {
        src: 'STOCKSPAYPAL',
        text: <Localize translate_text="_t_Paypal_t_" />,
    },
    {
        src: 'STOCKSPEPSICO',
        text: <Localize translate_text="_t_PepsiCo Inc_t_" />,
    },
    {
        src: 'STOCKSPFIZER',
        text: <Localize translate_text="_t_Pfizer_t_" />,
    },
    {
        src: 'STOCKSPORSCHE',
        text: <Localize translate_text="_t_Porsche Automobil Holding SE_t_" />,
    },
    {
        src: 'STOCKSPROCTERGAMBLE',
        text: <Localize translate_text="_t_Procter & Gamble_t_" />,
    },
    {
        src: 'STOCKSPUMA',
        text: <Localize translate_text="_t_Puma SE_t_" />,
    },
    {
        src: 'STOCKSSALESFORCE',
        text: <Localize translate_text="_t_Salesforce.com Inc_t_" />,
    },
    {
        src: 'STOCKSSONY',
        text: <Localize translate_text="_t_Sony Group Corp_t_" />,
    },
    {
        src: 'STOCKSTESLA',
        text: <Localize translate_text="_t_Tesla Inc_t_" />,
    },
    {
        src: 'STOCKSTEVAPHARMACEUTICAL',
        text: <Localize translate_text="_t_Teva Pharmaceutical Inds_t_" />,
    },
    {
        src: 'STOCKSUBER',
        text: <Localize translate_text="_t_Uber Technologies Inc_t_" />,
    },
    {
        src: 'STOCKSVISA',
        text: <Localize translate_text="_t_Visa_t_" />,
    },
    {
        src: 'STOCKSWALMART',
        text: <Localize translate_text="_t_Walmart Inc_t_" />,
    },
    {
        src: 'STOCKSWALTDISNEY',
        text: <Localize translate_text="_t_Walt Disney Company_t_" />,
    },
    {
        src: 'STOCKSZOOM',
        text: <Localize translate_text="_t_Zoom Video Communications Inc_t_" />,
    },
]
export const cryptocurrencies_trade_type: MarketSymbol[] = [
    {
        src: 'BTCUSD',
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: 'ETHUSD',
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
]
export const cryptocurrencies_cfds: MarketSymbol[] = [
    {
        src: 'ALGORAND',
        text: <Localize translate_text="_t_ALG/USD_t_" />,
    },
    {
        src: 'ADAUSD',
        text: <Localize translate_text="_t_ADA/USD_t_" />,
    },
    {
        src: 'AVALANCHE',
        text: <Localize translate_text="_t_AVA/USD_t_" />,
    },
    {
        src: 'BAT',
        text: <Localize translate_text="_t_BAT/USD_t_" />,
    },
    {
        src: 'BCH',
        text: <Localize translate_text="_t_BCH/USD_t_" />,
    },
    {
        src: 'BNBUSD',
        text: <Localize translate_text="_t_BNB/USD_t_" />,
    },
    {
        src: 'BTC',
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: 'BTCETH',
        text: <Localize translate_text="_t_BTC/ETH_t_" />,
    },
    {
        src: 'BTCLTC',
        text: <Localize translate_text="_t_BTC/LTC_t_" />,
    },
    {
        src: 'DOGUSD',
        text: <Localize translate_text="_t_DOG/USD_t_" />,
    },
    {
        src: 'DOTUSD',
        text: <Localize translate_text="_t_DOT/USD_t_" />,
    },
    {
        src: 'DSHUSD1',
        text: <Localize translate_text="_t_DSH/USD_t_" />,
    },
    {
        src: 'EOSUSD1',
        text: <Localize translate_text="_t_EOS/USD_t_" />,
    },
    {
        src: 'ETCUSD',
        text: <Localize translate_text="_t_ETC/USD_t_" />,
    },
    {
        src: 'ETHUSD',
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
    {
        src: 'FILUSD',
        text: <Localize translate_text="_t_FIL/USD_t_" />,
    },
    {
        src: 'IOTUSD',
        text: <Localize translate_text="_t_IOT/USD_t_" />,
    },
    {
        src: 'LNKUSD',
        text: <Localize translate_text="_t_LNK/USD_t_" />,
    },
    {
        src: 'LTCUSD',
        text: <Localize translate_text="_t_LTC/USD_t_" />,
    },
    {
        src: 'MKRUSD',
        text: <Localize translate_text="_t_MKR/USD_t_" />,
    },
    {
        src: 'MTCUSD',
        text: <Localize translate_text="_t_MTC/USD_t_" />,
    },
    {
        src: 'NEOUSD',
        text: <Localize translate_text="_t_NEO/USD_t_" />,
    },
    {
        src: 'OMGUSD',
        text: <Localize translate_text="_t_OMG/USD_t_" />,
    },
    {
        src: 'SOLUSD',
        text: <Localize translate_text="_t_SOL/USD_t_" />,
    },
    {
        src: 'TRXUSD',
        text: <Localize translate_text="_t_TRX/USD_t_" />,
    },
    {
        src: 'UNIUSD',
        text: <Localize translate_text="_t_UNI/USD_t_" />,
    },
    {
        src: 'XMRUSD',
        text: <Localize translate_text="_t_XMR/USD_t_" />,
    },
    {
        src: 'XLMUSD',
        text: <Localize translate_text="_t_XLM/USD_t_" />,
    },
    {
        src: 'XRPUSD1',
        text: <Localize translate_text="_t_XRP/USD_t_" />,
    },
    {
        src: 'XTZUSD',
        text: <Localize translate_text="_t_XTZ/USD_t_" />,
    },
    {
        src: 'ZECUSD',
        text: <Localize translate_text="_t_ZEC/USD_t_" />,
    },
]
export const cryptocurrencies_multipliers: MarketSymbol[] = [
    {
        src: 'BTCUSD',
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: 'ETHUSD',
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
]
export const jump_indices: MarketSymbol[] = [
    {
        src: 'JUMP10NEW',
        text: <Localize translate_text="_t_Jump 10 Index_t_" />,
    },
    {
        src: 'JUMP25NEW',
        text: <Localize translate_text="_t_Jump 25 Index_t_" />,
    },
    {
        src: 'JUMP50NEW',
        text: <Localize translate_text="_t_Jump 50 Index_t_" />,
    },
    {
        src: 'JUMP75NEW',
        text: <Localize translate_text="_t_Jump 75 Index_t_" />,
    },
    {
        src: 'JUMP100NEW',
        text: <Localize translate_text="_t_Jump 100 Index_t_" />,
    },
]
export const energy: MarketSymbol[] = [
    {
        src: 'POUNDBRENT',
        text: <Localize translate_text="_t_Brent crude oil_t_" />,
    },
    {
        src: 'USDBRENT',
        text: <Localize translate_text="_t_West Texas Intermediate_t_" />,
    },
]
export const energy_options: MarketSymbol[] = [
    {
        src: 'USDBRENT',
        text: <Localize translate_text="_t_Oil/USD_t_" />,
    },
]
export const volatility_indices_trade_type_eu: MarketSymbol[] = [
    {
        src: 'VOLATILITY200EU',
        text: <Localize translate_text="_t_Volatility 200 Index_t_" />,
    },
    {
        src: 'VOLATILITY300EU',
        text: <Localize translate_text="_t_Volatility 300 Index_t_" />,
    },
]
export const crash_boom_trade_type_eu: MarketSymbol[] = [
    {
        src: 'CRASH300EU',
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
    {
        src: 'BOOM300EU',
        text: <Localize translate_text="_t_Boom 300 Index _t_" />,
    },
]
export const swap_free_pairs: MarketSymbol[] = [
    {
        src: 'AUDCAD',
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: 'AUDCHF',
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: 'AUDJPY',
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: 'AUDNZD',
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: 'AUDUSD',
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: 'EURAUD',
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: 'EURCAD',
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: 'EURCHF',
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: 'EURGBP',
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: 'EURJPY',
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: 'EURNZD',
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: 'EURUSD',
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: 'GBPCHF',
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: 'GBPJPY',
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: 'GBPUSD',
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: 'NZDUSD',
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: 'USDCAD',
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: 'USDCHF',
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: 'USDJPY',
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]
export const basket_indices_cfds: MarketSymbol[] = [
    {
        src: 'AUDBASKET',
        text: <Localize translate_text="_t_AUD Basket_t_" />,
    },
    {
        src: 'EURBASKET',
        text: <Localize translate_text="_t_EUR Basket_t_" />,
    },
    {
        src: 'GBPBASKET',
        text: <Localize translate_text="_t_GBP Basket_t_" />,
    },
    {
        src: 'USDBASKET',
        text: <Localize translate_text="_t_USD Basket_t_" />,
    },
]
export const basket_indices_commodities: MarketSymbol[] = [
    {
        src: 'GOLDBASKET',
        text: <Localize translate_text="_t_Gold Basket_t_" />,
    },
]
export const step_indices = [
    {
        src: 'STEPINDICES',
        text: <Localize translate_text="_t_Step Index_t_" />,
    },
]
