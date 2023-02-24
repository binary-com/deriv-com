import React, { ReactElement } from 'react'
import * as icons from 'components/elements/symbols'
import { Localize } from 'components/localization'

export type MarketSymbol = {
    src?: string
    text?: ReactElement
    eu?: boolean
}
export const americas: MarketSymbol[] = [
    {
        src: icons.STOCKSUS500,
        text: <Localize translate_text="_t_US 500_t_" />,
    },
    {
        src: icons.STOCKSUSTECH100,
        text: <Localize translate_text="_t_US Tech 100_t_" />,
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: <Localize translate_text="_t_Wall Street 30_t_" />,
    },
]

export const asia_oceania: MarketSymbol[] = [
    {
        src: icons.STOCKSAUS200,
        text: <Localize translate_text="_t_Australia 200_t_" />,
    },
    {
        src: icons.STOCKSHONGKONG50,
        text: <Localize translate_text="_t_Hong Kong 50_t_" />,
    },
    {
        src: icons.STOCKSJAPAN225,
        text: <Localize translate_text="_t_Japan 225_t_" />,
    },
]

export const continuous_indices: MarketSymbol[] = [
    {
        src: icons.INDEX10S1NEW,
        text: <Localize translate_text="_t_Volatility 10 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX25S1NEW,
        text: <Localize translate_text="_t_Volatility 25 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX50S1NEW,
        text: <Localize translate_text="_t_Volatility 50 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX75S1NEW,
        text: <Localize translate_text="_t_Volatility 75 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX100S1NEW,
        text: <Localize translate_text="_t_Volatility 100 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX10NEW,
        text: <Localize translate_text="_t_Volatility 10 Index_t_" />,
    },
    {
        src: icons.INDEX25NEW,
        text: <Localize translate_text="_t_Volatility 25 Index_t_" />,
    },
    {
        src: icons.INDEX50NEW,
        text: <Localize translate_text="_t_Volatility 50 Index_t_" />,
    },
    {
        src: icons.INDEX75NEW,
        text: <Localize translate_text="_t_Volatility 75 Index_t_" />,
    },
    {
        src: icons.INDEX100NEW,
        text: <Localize translate_text="_t_Volatility 100 Index_t_" />,
    },
]

// export const volatility_indices: MarketSymbol[] = continuous_indices

export const volatility_indices: MarketSymbol[] = [
    {
        src: icons.INDEX10S1NEW,
        text: <Localize translate_text="_t_Volatility 10 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX25S1NEW,
        text: <Localize translate_text="_t_Volatility 25 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX50S1NEW,
        text: <Localize translate_text="_t_Volatility 50 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX75S1NEW,
        text: <Localize translate_text="_t_Volatility 75 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX100S1NEW,
        text: <Localize translate_text="_t_Volatility 100 (1s) Index_t_" />,
    },
    {
        src: icons.VINDEX2001S,
        text: <Localize translate_text="_t_Volatility 200 (1s) Index_t_" />,
    },
    {
        src: icons.VINDEX3001S,
        text: <Localize translate_text="_t_Volatility 300 (1s) Index_t_" />,
    },
    {
        src: icons.INDEX10NEW,
        text: <Localize translate_text="_t_Volatility 10 Index_t_" />,
    },
    {
        src: icons.INDEX25NEW,
        text: <Localize translate_text="_t_Volatility 25 Index_t_" />,
    },
    {
        src: icons.INDEX50NEW,
        text: <Localize translate_text="_t_Volatility 50 Index_t_" />,
    },
    {
        src: icons.INDEX75NEW,
        text: <Localize translate_text="_t_Volatility 75 Index_t_" />,
    },
    {
        src: icons.INDEX100NEW,
        text: <Localize translate_text="_t_Volatility 100 Index_t_" />,
    },
]

export const volatility_indices_eu: MarketSymbol[] = [
    {
        src: icons.VINDEX2001S,
        text: <Localize translate_text="_t_Volatility 200 (1s) Index_t_" />,
    },
    {
        src: icons.VINDEX3001S,
        text: <Localize translate_text="_t_Volatility 300 (1s) Index_t_" />,
    },
]

export const crash_boom: MarketSymbol[] = [
    {
        src: icons.BOOM1000NEW,
        text: <Localize translate_text="_t_Boom 1000 Index_t_" />,
    },
    {
        src: icons.BOOM500NEW,
        text: <Localize translate_text="_t_Boom 500 Index_t_" />,
    },
    {
        src: icons.VBOOMIC300,
        text: <Localize translate_text="_t_Boom 300 Index _t_" />,
    },
    {
        src: icons.CRASH1000NEW,
        text: <Localize translate_text="_t_Crash 1000 Index_t_" />,
    },
    {
        src: icons.CRASH500NEW,
        text: <Localize translate_text="_t_Crash 500 Index_t_" />,
    },
    {
        src: icons.VCRASHIC300,
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
]
export const crash_boom_multipliers: MarketSymbol[] = [
    {
        src: icons.BOOM1000NEW,
        text: <Localize translate_text="_t_Boom 1000 Index_t_" />,
    },
    {
        src: icons.BOOM500NEW,
        text: <Localize translate_text="_t_Boom 500 Index_t_" />,
    },
    {
        src: icons.CRASH1000NEW,
        text: <Localize translate_text="_t_Crash 1000 Index_t_" />,
    },
    {
        src: icons.CRASH500NEW,
        text: <Localize translate_text="_t_Crash 500 Index_t_" />,
    },
]

export const crash_boom_eu: MarketSymbol[] = [
    {
        src: icons.VCRASHIC300,
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
    {
        src: icons.VBOOMIC300,
        text: <Localize translate_text="_t_Boom 300 Index_t_" />,
    },
]

export const daily_reset_indices: MarketSymbol[] = [
    {
        src: icons.MARKETBEARNEW,
        text: <Localize translate_text="_t_Bear Market Index_t_" />,
    },
    {
        src: icons.MARKETBULLNEW,
        text: <Localize translate_text="_t_Bull Market Index_t_" />,
    },
]

export const europe: MarketSymbol[] = [
    {
        src: icons.STOCKSNETHERLANDS25,
        text: <Localize translate_text="_t_Netherlands 25_t_" />,
    },
    {
        src: icons.STOCKSEUROPE50,
        text: <Localize translate_text="_t_Europe 50_t_" />,
    },
    {
        src: icons.STOCKSFRANCE40,
        text: <Localize translate_text="_t_France 40_t_" />,
    },
    {
        src: icons.STOCKSGERMANY40,
        text: <Localize translate_text="_t_Germany 40_t_" />,
    },
    {
        src: icons.STOCKSSWISS20,
        text: <Localize translate_text="_t_Swiss 20_t_" />,
    },
    {
        src: icons.STOCKSUK100,
        text: <Localize translate_text="_t_UK 100_t_" />,
    },
]

export const exotic_pairs: MarketSymbol[] = [
    {
        src: icons.AUDSGD,
        text: <Localize translate_text="_t_AUD/SGD_t_" />,
    },
    {
        src: icons.EURHKD,
        text: <Localize translate_text="_t_EUR/HKD_t_" />,
    },
    {
        src: icons.EURILS,
        text: <Localize translate_text="_t_EUR/ILS_t_" />,
    },
    {
        src: icons.EURMXN,
        text: <Localize translate_text="_t_EUR/MXN_t_" />,
    },
    {
        src: icons.EURSGD,
        text: <Localize translate_text="_t_EUR/SGD_t_" />,
    },
    {
        src: icons.EURZAR,
        text: <Localize translate_text="_t_EUR/ZAR_t_" />,
    },
    // {
    //     src: icons.EURTRY,
    //     text: <Localize translate_text="_t_EUR/TRY_t_" />,
    // },

    {
        src: icons.GBPSGD,
        text: <Localize translate_text="_t_GBP/SGD_t_" />,
    },
    {
        src: icons.HKDJPY,
        text: <Localize translate_text="_t_HKD/JPY_t_" />,
    },
    {
        src: icons.NZDCHF,
        text: <Localize translate_text="_t_NZD/CHF_t_" />,
    },
    // {
    //     src: icons.GBPTRY,
    //     text: <Localize translate_text="_t_GBP/TRY_t_" />,
    // },
    {
        src: icons.NZDSGD,
        text: <Localize translate_text="_t_NZD/SGD_t_" />,
    },
    {
        src: icons.SGDJPY,
        text: <Localize translate_text="_t_SGD/JPY_t_" />,
    },
    {
        src: icons.USDHKD,
        text: <Localize translate_text="_t_USD/HKD_t_" />,
    },
    {
        src: icons.USDILS,
        text: <Localize translate_text="_t_USD/ILS_t_" />,
    },
    {
        src: icons.USDRUB,
        text: <Localize translate_text="_t_USD/RUB_t_" />,
    },
    {
        src: icons.USDSGD,
        text: <Localize translate_text="_t_USD/SGD_t_" />,
    },
    {
        src: icons.USDTHB,
        text: <Localize translate_text="_t_USD/THB_t_" />,
    },
    // {
    //     src: icons.USDTRY,
    //     text: <Localize translate_text="_t_USD/TRY_t_" />,
    // },
]

export const major_pairs: MarketSymbol[] = [
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: icons.AUDUSD,
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: icons.EURAUD,
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: icons.EURCAD,
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: icons.EURCHF,
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: icons.EURGBP,
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: icons.EURJPY,
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: icons.GBPAUD,
        text: <Localize translate_text="_t_GBP/AUD_t_" />,
    },
    {
        src: icons.GBPJPY,
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: icons.GBPUSD,
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: icons.USDCAD,
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: icons.USDCHF,
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: icons.USDJPY,
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]

export const metals: MarketSymbol[] = [
    {
        src: icons.ALUMINIUMUSD,
        text: <Localize translate_text="_t_Aluminium/USD_t_" />,
    },
    {
        src: icons.COPPERUSD,
        text: <Localize translate_text="_t_Copper/USD_t_" />,
    },
    {
        src: icons.GOLDEUR,
        text: <Localize translate_text="_t_Gold/EUR_t_" />,
    },
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="_t_Gold/USD_t_" />,
    },
    {
        src: icons.LEADUSD,
        text: <Localize translate_text="_t_Lead/USD_t_" />,
    },
    {
        src: icons.NICKELUSD,
        text: <Localize translate_text="_t_Nickel/USD_t_" />,
    },
    {
        src: icons.PALLADIUMUSD,
        text: <Localize translate_text="_t_Palladium/USD_t_" />,
    },
    {
        src: icons.PLATINUMUSD,
        text: <Localize translate_text="_t_Platinum/USD_t_" />,
    },
    {
        src: icons.SILVEREUR,
        text: <Localize translate_text="_t_Silver/EUR_t_" />,
    },
    {
        src: icons.SILVERUSD,
        text: <Localize translate_text="_t_Silver/USD_t_" />,
    },
    {
        src: icons.ZINCUSD,
        text: <Localize translate_text="_t_Zinc/USD_t_" />,
    },
]
export const metals_options: MarketSymbol[] = [
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="_t_Gold/USD_t_" />,
    },
    {
        src: icons.PALLADIUMUSD,
        text: <Localize translate_text="_t_Palladium/USD_t_" />,
    },
    {
        src: icons.PLATINUMUSD,
        text: <Localize translate_text="_t_Platinum/USD_t_" />,
    },
    {
        src: icons.SILVERUSD,
        text: <Localize translate_text="_t_Silver/USD_t_" />,
    },
]

export const range_break: MarketSymbol[] = [
    {
        src: icons.RANGEBREAK100New,
        text: <Localize translate_text="_t_Range Break 100 Index_t_" />,
    },
    {
        src: icons.RANGEBREAK200New,
        text: <Localize translate_text="_t_Range Break 200 Index_t_" />,
    },
]

export const micro_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: icons.AUDUSD,
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: icons.EURAUD,
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: icons.EURCAD,
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: icons.EURCHF,
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: icons.EURGBP,
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: icons.EURJPY,
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: icons.GBPJPY,
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: icons.GBPUSD,
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: icons.NZDUSD,
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: icons.USDCAD,
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: icons.USDCHF,
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: icons.USDJPY,
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]

export const smart_gold_index: MarketSymbol[] = [
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="_t_Smart Gold Index_t_" />,
    },
]

export const minor_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: icons.CADCHF,
        text: <Localize translate_text="_t_CAD/CHF_t_" />,
    },
    {
        src: icons.CADJPY,
        text: <Localize translate_text="_t_CAD/JPY_t_" />,
    },
    {
        src: icons.CHFJPY,
        text: <Localize translate_text="_t_CHF/JPY_t_" />,
    },
    {
        src: icons.EURNOK,
        text: <Localize translate_text="_t_EUR/NOK_t_" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: icons.EURLPN,
        text: <Localize translate_text="_t_EUR/PLN_t_" />,
    },
    {
        src: icons.EURSEK,
        text: <Localize translate_text="_t_EUR/SEK_t_" />,
    },
    {
        src: icons.GBPCAD,
        text: <Localize translate_text="_t_GBP/CAD_t_" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: icons.GBPNOK,
        text: <Localize translate_text="_t_GBP/NOK_t_" />,
    },
    {
        src: icons.GBPNZD,
        text: <Localize translate_text="_t_GBP/NZD_t_" />,
    },
    {
        src: icons.GBPSEK,
        text: <Localize translate_text="_t_GBP/SEK_t_" />,
    },
    {
        src: icons.NZDCAD,
        text: <Localize translate_text="_t_NZD/CAD_t_" />,
    },
    {
        src: icons.NZDJPY,
        text: <Localize translate_text="_t_NZD/JPY_t_" />,
    },
    {
        src: icons.NZDUSD,
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: icons.USDCNH,
        text: <Localize translate_text="_t_USD/CNH_t_" />,
    },
    {
        src: icons.USDMXN,
        text: <Localize translate_text="_t_USD/MXN_t_" />,
    },
    {
        src: icons.USDNOK,
        text: <Localize translate_text="_t_USD/NOK_t_" />,
    },
    {
        src: icons.USDPLN,
        text: <Localize translate_text="_t_USD/PLN_t_" />,
    },
    {
        src: icons.USDSEK,
        text: <Localize translate_text="_t_USD/SEK_t_" />,
    },
    {
        src: icons.USDZAR,
        text: <Localize translate_text="_t_USD/ZAR_t_" />,
    },
]
export const minor_options_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: icons.GBPCAD,
        text: <Localize translate_text="_t_GBP/CAD_t_" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: icons.GBPNOK,
        text: <Localize translate_text="_t_GBP/NOK_t_" />,
    },
    {
        src: icons.GBPNZD,
        text: <Localize translate_text="_t_GBP/NZD_t_" />,
    },
    {
        src: icons.NZDJPY,
        text: <Localize translate_text="_t_NZD/JPY_t_" />,
    },
    {
        src: icons.NZDUSD,
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: icons.USDMXN,
        text: <Localize translate_text="_t_USD/MXN_t_" />,
    },
    {
        src: icons.USDNOK,
        text: <Localize translate_text="_t_USD/NOK_t_" />,
    },
    {
        src: icons.USDPLN,
        text: <Localize translate_text="_t_USD/PLN_t_" />,
    },
    {
        src: icons.USDSEK,
        text: <Localize translate_text="_t_USD/SEK_t_" />,
    },
]

export const stocks_american_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSUS500,
        text: <Localize translate_text="_t_US 500_t_" />,
    },
    {
        src: icons.STOCKSUSTECH100,
        text: <Localize translate_text="_t_US Tech 100_t_" />,
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: <Localize translate_text="_t_Wall Street 30_t_" />,
    },
]

export const stocks_asian_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSAUS200,
        text: <Localize translate_text="_t_Australia 200_t_" />,
    },
    {
        src: icons.STOCKSJAPAN225,
        text: <Localize translate_text="_t_Japan 225_t_" />,
    },
]

export const stocks_european_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSEUROPE50,
        text: <Localize translate_text="_t_Euro 50_t_" />,
        eu: true,
    },
    {
        src: icons.STOCKSFRANCE40,
        text: <Localize translate_text="_t_France 40_t_" />,
        eu: true,
    },
    {
        src: icons.STOCKSGERMANY40,
        text: <Localize translate_text="_t_Germany 40_t_" />,
        eu: true,
    },
    {
        src: icons.STOCKSNETHERLANDS25,
        text: <Localize translate_text="_t_Netherlands 25_t_" />,
        eu: false,
    },
    {
        src: icons.STOCKSSPAIN35,
        text: <Localize translate_text="_t_Spain 35_t_" />,
        eu: true,
    },
    {
        src: icons.STOCKSUK100,
        text: <Localize translate_text="_t_UK 100_t_" />,
        eu: true,
    },
]

export const american_stocks: MarketSymbol[] = [
    {
        src: icons.STOCKSADIDASSALOMON,
        text: <Localize translate_text="_t_Adidas Salomon_t_" />,
    },
    {
        src: icons.STOCKSADVANCEDMICRODEVICES,
        text: <Localize translate_text="_t_Advanced Micro Devices Inc_t_" />,
    },
    {
        src: icons.STOCKSAIRBNB,
        text: <Localize translate_text="_t_Airbnb_t_" />,
    },
    {
        src: icons.STOCKSAIRBUSSE,
        text: <Localize translate_text="_t_Airbus SE_t_" />,
    },
    {
        src: icons.STOCKSAIRFRANCE,
        text: <Localize translate_text="_t_Air France KLM SA_t_" />,
    },
    {
        src: icons.STOCKSALIBABAGROUP,
        text: <Localize translate_text="_t_Alibaba Group Holding Ltd_t_" />,
    },
    {
        src: icons.STOCKSALPHABET,
        text: <Localize translate_text="_t_Alphabet Inc Class C_t_" />,
    },
    {
        src: icons.STOCKSAMAZON,
        text: <Localize translate_text="_t_Amazon.com Inc_t_" />,
    },
    {
        src: icons.STOCKSAIRLINESGROUP,
        text: <Localize translate_text="_t_American Airlines Group Inc_t_" />,
    },
    {
        src: icons.STOCKSAMERICANINTERNATIONAL,
        text: <Localize translate_text="_t_American International Group_t_" />,
    },
    {
        src: icons.STOCKSAPPLE,
        text: <Localize translate_text="_t_Apple_t_" />,
    },
    {
        src: icons.STOCKSBANKOFAMERICA,
        text: <Localize translate_text="_t_Bank of America_t_" />,
    },

    {
        src: icons.STOCKSBAYERAG,
        text: <Localize translate_text="_t_Bayer AG_t_" />,
    },
    {
        src: icons.STOCKSBIOGEN,
        text: <Localize translate_text="_t_Biogen Inc_t_" />,
    },

    {
        src: icons.STOCKSBMW,
        text: <Localize translate_text="_t_BMW_t_" />,
    },
    {
        src: icons.STOCKSBOEING,
        text: <Localize translate_text="_t_Boeing_t_" />,
    },
    {
        src: icons.STOCKSCISCO,
        text: <Localize translate_text="_t_Cisco Systems_t_" />,
    },
    {
        src: icons.STOCKSCITIGROUP,
        text: <Localize translate_text="_t_Citigroup_t_" />,
    },
    {
        src: icons.STOCKSCOCACOLA,
        text: <Localize translate_text="_t_Coca-Cola_t_" />,
    },
    {
        src: icons.STOCKSCONTINENTAL,
        text: <Localize translate_text="_t_Continental AG_t_" />,
    },
    {
        src: icons.STOCKSDELTAAIRLINES,
        text: <Localize translate_text="_t_Delta Air Lines_t_" />,
    },
    {
        src: icons.STOCKSDEUTSCHEBANK,
        text: <Localize translate_text="_t_Deutsche Bank AG_t_" />,
    },
    {
        src: icons.STOCKSLUFTHANSA,
        text: <Localize translate_text="_t_Deutsche Lufthansa AG_t_" />,
    },
    {
        src: icons.STOCKSEBAY,
        text: <Localize translate_text="_t_eBay Inc_t_" />,
    },
    {
        src: icons.STOCKSFACEBOOK,
        text: <Localize translate_text="_t_Facebook Inc_t_" />,
    },
    {
        src: icons.STOCKSFEDEX,
        text: <Localize translate_text="_t_Fedex_t_" />,
    },
    {
        src: icons.STOCKSFOX,
        text: <Localize translate_text="_t_Fox Corp Class B_t_" />,
    },
    {
        src: icons.STOCKSGENERALMOTORSCOMP,
        text: <Localize translate_text="_t_General Motors Company_t_" />,
    },
    {
        src: icons.STOCKSGOLDMANSACHS,
        text: <Localize translate_text="_t_Goldman Sachs Group_t_" />,
    },
    {
        src: icons.STOCKSHOME,
        text: <Localize translate_text="_t_Home Depot Inc_t_" />,
    },
    {
        src: icons.STOCKSHPINC,
        text: <Localize translate_text="_t_HP Inc_t_" />,
    },
    {
        src: icons.STOCKSIBM,
        text: <Localize translate_text="_t_IBM_t_" />,
    },
    {
        src: icons.STOCKSINTEL,
        text: <Localize translate_text="_t_Intel_t_" />,
    },
    {
        src: icons.STOCKSJOHNSONJOHNSON,
        text: <Localize translate_text="_t_Johnson & Johnson_t_" />,
    },
    {
        src: icons.STOCKSJPMORGANCHASE,
        text: <Localize translate_text="_t_JP Morgan Chase_t_" />,
    },
    {
        src: icons.STOCKSMASTERCARDINC,
        text: <Localize translate_text="_t_Mastercard Inc_t_" />,
    },
    {
        src: icons.STOCKSMCDONALDS,
        text: <Localize translate_text="_t_McDonalds_t_" />,
    },
    {
        src: icons.STOCKSMICROSOFT,
        text: <Localize translate_text="_t_Microsoft Corporation_t_" />,
    },
    {
        src: icons.STOCKSMODERNA,
        text: <Localize translate_text="_t_Moderna Inc_t_" />,
    },
    {
        src: icons.STOCKSNETFLIX,
        text: <Localize translate_text="_t_Netflix Inc_t_" />,
    },
    {
        src: icons.STOCKSNIKE,
        text: <Localize translate_text="_t_Nike_t_" />,
    },
    {
        src: icons.STOCKSNVIDIA,
        text: <Localize translate_text="_t_NVIDIA Corp_t_" />,
    },
    {
        src: icons.STOCKSPAYPAL,
        text: <Localize translate_text="_t_Paypal_t_" />,
    },
    {
        src: icons.STOCKSPEPSICO,
        text: <Localize translate_text="_t_PepsiCo Inc_t_" />,
    },
    {
        src: icons.STOCKSPFIZER,
        text: <Localize translate_text="_t_Pfizer_t_" />,
    },
    {
        src: icons.STOCKSPORSCHE,
        text: <Localize translate_text="_t_Porsche Automobil Holding SE_t_" />,
    },
    {
        src: icons.STOCKSPROCTERGAMBLE,
        text: <Localize translate_text="_t_Procter & Gamble_t_" />,
    },
    {
        src: icons.STOCKSPUMA,
        text: <Localize translate_text="_t_Puma SE_t_" />,
    },
    {
        src: icons.STOCKSSALESFORCE,
        text: <Localize translate_text="_t_Salesforce.com Inc_t_" />,
    },
    {
        src: icons.STOCKSSONY,
        text: <Localize translate_text="_t_Sony Group Corp_t_" />,
    },
    {
        src: icons.STOCKSTESLA,
        text: <Localize translate_text="_t_Tesla Inc_t_" />,
    },
    {
        src: icons.STOCKSTEVAPHARMACEUTICAL,
        text: <Localize translate_text="_t_Teva Pharmaceutical Inds_t_" />,
    },
    {
        src: icons.STOCKSUBER,
        text: <Localize translate_text="_t_Uber Technologies Inc_t_" />,
    },
    {
        src: icons.STOCKSVISA,
        text: <Localize translate_text="_t_Visa_t_" />,
    },
    {
        src: icons.STOCKSWALMART,
        text: <Localize translate_text="_t_Wal-Mart Stores Inc_t_" />,
    },
    {
        src: icons.STOCKSWALTDISNEY,
        text: <Localize translate_text="_t_Walt Disney Company_t_" />,
    },
    {
        src: icons.STOCKSZOOM,
        text: <Localize translate_text="_t_Zoom Video Communications Inc_t_" />,
    },
]

export const cryptocurrencies_trade_type: MarketSymbol[] = [
    {
        src: icons.BTCUSD,
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: icons.ETHUSD,
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
]

export const cryptocurrencies_cfds: MarketSymbol[] = [
    {
        src: icons.ALGORAND,
        text: <Localize translate_text="_t_ALG/USD_t_" />,
    },
    {
        src: icons.ADAUSD,
        text: <Localize translate_text="_t_ADA/USD_t_" />,
    },
    {
        src: icons.AVALANCHE,
        text: <Localize translate_text="_t_AVA/USD_t_" />,
    },

    {
        src: icons.BAT,
        text: <Localize translate_text="_t_BAT/USD_t_" />,
    },
    {
        src: icons.BCHNEW,
        text: <Localize translate_text="_t_BCH/USD_t_" />,
    },
    {
        src: icons.BNBUSD,
        text: <Localize translate_text="_t_BNB/USD_t_" />,
    },

    {
        src: icons.BTCUSD,
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: icons.BTCETH,
        text: <Localize translate_text="_t_BTC/ETH_t_" />,
    },
    {
        src: icons.BTCLTC,
        text: <Localize translate_text="_t_BTC/LTC_t_" />,
    },
    {
        src: icons.DOGUSD,
        text: <Localize translate_text="_t_DOG/USD_t_" />,
    },
    {
        src: icons.DOTUSD,
        text: <Localize translate_text="_t_DOT/USD_t_" />,
    },
    {
        src: icons.DSHUSD1,
        text: <Localize translate_text="_t_DSH/USD_t_" />,
    },
    {
        src: icons.EOSUSD1,
        text: <Localize translate_text="_t_EOS/USD_t_" />,
    },
    {
        src: icons.ETCUSD,
        text: <Localize translate_text="_t_ETC/USD_t_" />,
    },
    {
        src: icons.ETHUSD,
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
    {
        src: icons.FILUSD,
        text: <Localize translate_text="_t_FIL/USD_t_" />,
    },
    {
        src: icons.IOTUSD,
        text: <Localize translate_text="_t_IOT/USD_t_" />,
    },
    {
        src: icons.LNKUSD,
        text: <Localize translate_text="_t_LNK/USD_t_" />,
    },
    {
        src: icons.LTCUSD,
        text: <Localize translate_text="_t_LTC/USD_t_" />,
    },
    {
        src: icons.MKRUSD,
        text: <Localize translate_text="_t_MKR/USD_t_" />,
    },
    {
        src: icons.MTCUSD,
        text: <Localize translate_text="_t_MTC/USD_t_" />,
    },
    {
        src: icons.NEOUSD,
        text: <Localize translate_text="_t_NEO/USD_t_" />,
    },
    {
        src: icons.OMGUSD,
        text: <Localize translate_text="_t_OMG/USD_t_" />,
    },
    {
        src: icons.SOLUSD,
        text: <Localize translate_text="_t_SOL/USD_t_" />,
    },
    {
        src: icons.TRXUSD,
        text: <Localize translate_text="_t_TRX/USD_t_" />,
    },
    {
        src: icons.UNIUSD,
        text: <Localize translate_text="_t_UNI/USD_t_" />,
    },
    {
        src: icons.XMRUSD,
        text: <Localize translate_text="_t_XMR/USD_t_" />,
    },
    {
        src: icons.XLMUSD,
        text: <Localize translate_text="_t_XLM/USD_t_" />,
    },
    {
        src: icons.XRPUSD1,
        text: <Localize translate_text="_t_XRP/USD_t_" />,
    },
    {
        src: icons.XTZUSD,
        text: <Localize translate_text="_t_XTZ/USD_t_" />,
    },
    {
        src: icons.ZECUSD,
        text: <Localize translate_text="_t_ZEC/USD_t_" />,
    },
]
export const cryptocurrencies_multipliers: MarketSymbol[] = [
    {
        src: icons.BTCUSD,
        text: <Localize translate_text="_t_BTC/USD_t_" />,
    },
    {
        src: icons.ETHUSD,
        text: <Localize translate_text="_t_ETH/USD_t_" />,
    },
]
export const jump_indices: MarketSymbol[] = [
    {
        src: icons.JUMP10NEW,
        text: <Localize translate_text="_t_Jump 10 Index_t_" />,
    },
    {
        src: icons.JUMP25NEW,
        text: <Localize translate_text="_t_Jump 25 Index_t_" />,
    },
    {
        src: icons.JUMP50NEW,
        text: <Localize translate_text="_t_Jump 50 Index_t_" />,
    },
    {
        src: icons.JUMP75NEW,
        text: <Localize translate_text="_t_Jump 75 Index_t_" />,
    },
    {
        src: icons.JUMP100NEW,
        text: <Localize translate_text="_t_Jump 100 Index_t_" />,
    },
]

export const energy: MarketSymbol[] = [
    {
        src: icons.POUNDBRENT,
        text: <Localize translate_text="_t_Brent crude oil_t_" />,
    },
    {
        src: icons.USDBRENT,
        text: <Localize translate_text="_t_West Texas Intermediate_t_" />,
    },
]

export const energy_options: MarketSymbol[] = [
    {
        src: icons.USDBRENT,
        text: <Localize translate_text="_t_Oil/USD_t_" />,
    },
]
export const volatility_indices_trade_type_eu: MarketSymbol[] = [
    {
        src: icons.VOLATILITY200EU,
        text: <Localize translate_text="_t_Volatility 200 Index_t_" />,
    },
    {
        src: icons.VOLATILITY300EU,
        text: <Localize translate_text="_t_Volatility 300 Index_t_" />,
    },
]

export const crash_boom_trade_type_eu: MarketSymbol[] = [
    {
        src: icons.CRASH300EU,
        text: <Localize translate_text="_t_Crash 300 Index_t_" />,
    },
    {
        src: icons.BOOM300EU,
        text: <Localize translate_text="_t_Boom 300 Index _t_" />,
    },
]

export const swap_free_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="_t_AUD/CAD_t_" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="_t_AUD/CHF_t_" />,
    },
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="_t_AUD/JPY_t_" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="_t_AUD/NZD_t_" />,
    },
    {
        src: icons.AUDUSD,
        text: <Localize translate_text="_t_AUD/USD_t_" />,
    },
    {
        src: icons.EURAUD,
        text: <Localize translate_text="_t_EUR/AUD_t_" />,
    },
    {
        src: icons.EURCAD,
        text: <Localize translate_text="_t_EUR/CAD_t_" />,
    },
    {
        src: icons.EURCHF,
        text: <Localize translate_text="_t_EUR/CHF_t_" />,
    },
    {
        src: icons.EURGBP,
        text: <Localize translate_text="_t_EUR/GBP_t_" />,
    },
    {
        src: icons.EURJPY,
        text: <Localize translate_text="_t_EUR/JPY_t_" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="_t_EUR/NZD_t_" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="_t_EUR/USD_t_" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="_t_GBP/CHF_t_" />,
    },
    {
        src: icons.GBPJPY,
        text: <Localize translate_text="_t_GBP/JPY_t_" />,
    },
    {
        src: icons.GBPUSD,
        text: <Localize translate_text="_t_GBP/USD_t_" />,
    },
    {
        src: icons.NZDUSD,
        text: <Localize translate_text="_t_NZD/USD_t_" />,
    },
    {
        src: icons.USDCAD,
        text: <Localize translate_text="_t_USD/CAD_t_" />,
    },
    {
        src: icons.USDCHF,
        text: <Localize translate_text="_t_USD/CHF_t_" />,
    },
    {
        src: icons.USDJPY,
        text: <Localize translate_text="_t_USD/JPY_t_" />,
    },
]

export const basket_indices_cfds: MarketSymbol[] = [
    {
        src: icons.AUDBASKET,
        text: <Localize translate_text="_t_AUD Basket_t_" />,
    },
    {
        src: icons.EURBASKET,
        text: <Localize translate_text="_t_EUR Basket_t_" />,
    },
    {
        src: icons.GBPBASKET,
        text: <Localize translate_text="_t_GBP Basket_t_" />,
    },
    {
        src: icons.USDBASKET,
        text: <Localize translate_text="_t_USD Basket_t_" />,
    },
]

export const basket_indices_commodities: MarketSymbol[] = [
    {
        src: icons.GOLDBASKET,
        text: <Localize translate_text="_t_Gold Basket_t_" />,
    },
]

export const step_indices = [
    {
        src: icons.STEPINDICES,
        text: <Localize translate_text="_t_Step Index_t_" />,
    },
]

export const derived_fx: MarketSymbol[] = [
    {
        src: icons.GBPUSD10,
        text: <Localize translate_text="_t_GBP/USD DFX10 Index_t_" />,
    },
    {
        src: icons.EURUSD10,
        text: <Localize translate_text="_t_EUR/USD DFX10 Index_t_" />,
    },
    {
        src: icons.AUDUSD10,
        text: <Localize translate_text="_t_AUD/USD DFX10 Index_t_" />,
    },
    {
        src: icons.USDJPY10,
        text: <Localize translate_text="_t_USD/JPY DFX10 Index_t_" />,
    },
    {
        src: icons.USDCHF10,
        text: <Localize translate_text="_t_USD/CHF DFX10 Index_t_" />,
    },
    {
        src: icons.GBPUSD20,
        text: <Localize translate_text="_t_GBP/USD DFX20 Index_t_" />,
    },
    {
        src: icons.EURUSD20,
        text: <Localize translate_text="_t_EUR/USD DFX20 Index_t_" />,
    },
    {
        src: icons.AUDUSD20,
        text: <Localize translate_text="_t_AUD/USD DFX20 Index_t_" />,
    },
    {
        src: icons.USDJPY20,
        text: <Localize translate_text="_t_USD/JPY DFX20 Index_t_" />,
    },
    {
        src: icons.USDCHF20,
        text: <Localize translate_text="_t_USD/CHF DFX20 Index_t_" />,
    },
]
