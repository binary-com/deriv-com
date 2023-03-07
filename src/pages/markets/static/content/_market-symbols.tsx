import React, { ReactElement } from 'react'
import * as icons from 'components/elements/symbols'
import { TString } from 'types/generics'

export type MarketSymbol = {
    src?: string
    text?: TString
    eu?: boolean
}
export const americas: MarketSymbol[] = [
    {
        src: icons.STOCKSUS500,
        text: '_t_US 500_t_',
    },
    {
        src: icons.STOCKSUSTECH100,
        text: '_t_US Tech 100_t_',
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: '_t_Wall Street 30_t_',
    },
]

export const asia_oceania: MarketSymbol[] = [
    {
        src: icons.STOCKSAUS200,
        text: '_t_Australia 200_t_',
    },
    {
        src: icons.STOCKSHONGKONG50,
        text: '_t_Hong Kong 50_t_',
    },
    {
        src: icons.STOCKSJAPAN225,
        text: '_t_Japan 225_t_',
    },
]

export const continuous_indices: MarketSymbol[] = [
    {
        src: icons.INDEX10S1NEW,
        text: '_t_Volatility 10 (1s) Index_t_',
    },
    {
        src: icons.INDEX25S1NEW,
        text: '_t_Volatility 25 (1s) Index_t_',
    },
    {
        src: icons.INDEX50S1NEW,
        text: '_t_Volatility 50 (1s) Index_t_',
    },
    {
        src: icons.INDEX75S1NEW,
        text: '_t_Volatility 75 (1s) Index_t_',
    },
    {
        src: icons.INDEX100S1NEW,
        text: '_t_Volatility 100 (1s) Index_t_',
    },
    {
        src: icons.INDEX10NEW,
        text: '_t_Volatility 10 Index_t_',
    },
    {
        src: icons.INDEX25NEW,
        text: '_t_Volatility 25 Index_t_',
    },
    {
        src: icons.INDEX50NEW,
        text: '_t_Volatility 50 Index_t_',
    },
    {
        src: icons.INDEX75NEW,
        text: '_t_Volatility 75 Index_t_',
    },
    {
        src: icons.INDEX100NEW,
        text: '_t_Volatility 100 Index_t_',
    },
]

// export const volatility_indices: MarketSymbol[] = continuous_indices

export const volatility_indices: MarketSymbol[] = [
    {
        src: icons.INDEX10S1NEW,
        text: '_t_Volatility 10 (1s) Index_t_',
    },
    {
        src: icons.INDEX25S1NEW,
        text: '_t_Volatility 25 (1s) Index_t_',
    },
    {
        src: icons.INDEX50S1NEW,
        text: '_t_Volatility 50 (1s) Index_t_',
    },
    {
        src: icons.INDEX75S1NEW,
        text: '_t_Volatility 75 (1s) Index_t_',
    },
    {
        src: icons.INDEX100S1NEW,
        text: '_t_Volatility 100 (1s) Index_t_',
    },
    {
        src: icons.VINDEX2001S,
        text: '_t_Volatility 200 (1s) Index_t_',
    },
    {
        src: icons.VINDEX3001S,
        text: '_t_Volatility 300 (1s) Index_t_',
    },
    {
        src: icons.INDEX10NEW,
        text: '_t_Volatility 10 Index_t_',
    },
    {
        src: icons.INDEX25NEW,
        text: '_t_Volatility 25 Index_t_',
    },
    {
        src: icons.INDEX50NEW,
        text: '_t_Volatility 50 Index_t_',
    },
    {
        src: icons.INDEX75NEW,
        text: '_t_Volatility 75 Index_t_',
    },
    {
        src: icons.INDEX100NEW,
        text: '_t_Volatility 100 Index_t_',
    },
]

export const volatility_indices_eu: MarketSymbol[] = [
    {
        src: icons.VINDEX2001S,
        text: '_t_Volatility 200 (1s) Index_t_',
    },
    {
        src: icons.VINDEX3001S,
        text: '_t_Volatility 300 (1s) Index_t_',
    },
]

export const crash_boom: MarketSymbol[] = [
    {
        src: icons.BOOM1000NEW,
        text: '_t_Boom 1000 Index_t_',
    },
    {
        src: icons.BOOM500NEW,
        text: '_t_Boom 500 Index_t_',
    },
    {
        src: icons.VBOOMIC300,
        text: '_t_Boom 300 Index _t_',
    },
    {
        src: icons.CRASH1000NEW,
        text: '_t_Crash 1000 Index_t_',
    },
    {
        src: icons.CRASH500NEW,
        text: '_t_Crash 500 Index_t_',
    },
    {
        src: icons.VCRASHIC300,
        text: '_t_Crash 300 Index_t_',
    },
]
export const crash_boom_multipliers: MarketSymbol[] = [
    {
        src: icons.BOOM1000NEW,
        text: '_t_Boom 1000 Index_t_',
    },
    {
        src: icons.BOOM500NEW,
        text: '_t_Boom 500 Index_t_',
    },
    {
        src: icons.CRASH1000NEW,
        text: '_t_Crash 1000 Index_t_',
    },
    {
        src: icons.CRASH500NEW,
        text: '_t_Crash 500 Index_t_',
    },
]

export const crash_boom_eu: MarketSymbol[] = [
    {
        src: icons.VCRASHIC300,
        text: '_t_Crash 300 Index_t_',
    },
    {
        src: icons.VBOOMIC300,
        text: '_t_Boom 300 Index_t_',
    },
]

export const daily_reset_indices: MarketSymbol[] = [
    {
        src: icons.MARKETBEARNEW,
        text: '_t_Bear Market Index_t_',
    },
    {
        src: icons.MARKETBULLNEW,
        text: '_t_Bull Market Index_t_',
    },
]

export const europe: MarketSymbol[] = [
    {
        src: icons.STOCKSNETHERLANDS25,
        text: '_t_Netherlands 25_t_',
    },
    {
        src: icons.STOCKSEUROPE50,
        text: '_t_Europe 50_t_',
    },
    {
        src: icons.STOCKSFRANCE40,
        text: '_t_France 40_t_',
    },
    {
        src: icons.STOCKSGERMANY40,
        text: '_t_Germany 40_t_',
    },
    {
        src: icons.STOCKSSWISS20,
        text: '_t_Swiss 20_t_',
    },
    {
        src: icons.STOCKSUK100,
        text: '_t_UK 100_t_',
    },
]

export const exotic_pairs: MarketSymbol[] = [
    {
        src: icons.AUDSGD,
        text: '_t_AUD/SGD_t_',
    },
    {
        src: icons.EURHKD,
        text: '_t_EUR/HKD_t_',
    },
    {
        src: icons.EURILS,
        text: '_t_EUR/ILS_t_',
    },
    {
        src: icons.EURMXN,
        text: '_t_EUR/MXN_t_',
    },
    {
        src: icons.EURSGD,
        text: '_t_EUR/SGD_t_',
    },
    {
        src: icons.EURZAR,
        text: '_t_EUR/ZAR_t_',
    },
    // {
    //     src: icons.EURTRY,
    //     text: "_t_EUR/TRY_t_",
    // },

    {
        src: icons.GBPSGD,
        text: '_t_GBP/SGD_t_',
    },
    {
        src: icons.HKDJPY,
        text: '_t_HKD/JPY_t_',
    },
    {
        src: icons.NZDCHF,
        text: '_t_NZD/CHF_t_',
    },
    // {
    //     src: icons.GBPTRY,
    //     text: "_t_GBP/TRY_t_",
    // },
    {
        src: icons.NZDSGD,
        text: '_t_NZD/SGD_t_',
    },
    {
        src: icons.SGDJPY,
        text: '_t_SGD/JPY_t_',
    },
    {
        src: icons.USDHKD,
        text: '_t_USD/HKD_t_',
    },
    {
        src: icons.USDILS,
        text: '_t_USD/ILS_t_',
    },
    {
        src: icons.USDRUB,
        text: '_t_USD/RUB_t_',
    },
    {
        src: icons.USDSGD,
        text: '_t_USD/SGD_t_',
    },
    {
        src: icons.USDTHB,
        text: '_t_USD/THB_t_',
    },
    // {
    //     src: icons.USDTRY,
    //     text: "_t_USD/TRY_t_",
    // },
]

export const major_pairs: MarketSymbol[] = [
    {
        src: icons.AUDJPY,
        text: '_t_AUD/JPY_t_',
    },
    {
        src: icons.AUDUSD,
        text: '_t_AUD/USD_t_',
    },
    {
        src: icons.EURAUD,
        text: '_t_EUR/AUD_t_',
    },
    {
        src: icons.EURCAD,
        text: '_t_EUR/CAD_t_',
    },
    {
        src: icons.EURCHF,
        text: '_t_EUR/CHF_t_',
    },
    {
        src: icons.EURGBP,
        text: '_t_EUR/GBP_t_',
    },
    {
        src: icons.EURJPY,
        text: '_t_EUR/JPY_t_',
    },
    {
        src: icons.EURUSD,
        text: '_t_EUR/USD_t_',
    },
    {
        src: icons.GBPAUD,
        text: '_t_GBP/AUD_t_',
    },
    {
        src: icons.GBPJPY,
        text: '_t_GBP/JPY_t_',
    },
    {
        src: icons.GBPUSD,
        text: '_t_GBP/USD_t_',
    },
    {
        src: icons.USDCAD,
        text: '_t_USD/CAD_t_',
    },
    {
        src: icons.USDCHF,
        text: '_t_USD/CHF_t_',
    },
    {
        src: icons.USDJPY,
        text: '_t_USD/JPY_t_',
    },
]

export const metals: MarketSymbol[] = [
    {
        src: icons.ALUMINIUMUSD,
        text: '_t_Aluminium/USD_t_',
    },
    {
        src: icons.COPPERUSD,
        text: '_t_Copper/USD_t_',
    },
    {
        src: icons.GOLDEUR,
        text: '_t_Gold/EUR_t_',
    },
    {
        src: icons.GOLDUSD,
        text: '_t_Gold/USD_t_',
    },
    {
        src: icons.LEADUSD,
        text: '_t_Lead/USD_t_',
    },
    {
        src: icons.NICKELUSD,
        text: '_t_Nickel/USD_t_',
    },
    {
        src: icons.PALLADIUMUSD,
        text: '_t_Palladium/USD_t_',
    },
    {
        src: icons.PLATINUMUSD,
        text: '_t_Platinum/USD_t_',
    },
    {
        src: icons.SILVEREUR,
        text: '_t_Silver/EUR_t_',
    },
    {
        src: icons.SILVERUSD,
        text: '_t_Silver/USD_t_',
    },
    {
        src: icons.ZINCUSD,
        text: '_t_Zinc/USD_t_',
    },
]
export const metals_options: MarketSymbol[] = [
    {
        src: icons.GOLDUSD,
        text: '_t_Gold/USD_t_',
    },
    {
        src: icons.PALLADIUMUSD,
        text: '_t_Palladium/USD_t_',
    },
    {
        src: icons.PLATINUMUSD,
        text: '_t_Platinum/USD_t_',
    },
    {
        src: icons.SILVERUSD,
        text: '_t_Silver/USD_t_',
    },
]

export const range_break: MarketSymbol[] = [
    {
        src: icons.RANGEBREAK100New,
        text: '_t_Range Break 100 Index_t_',
    },
    {
        src: icons.RANGEBREAK200New,
        text: '_t_Range Break 200 Index_t_',
    },
]

export const micro_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: '_t_AUD/CAD_t_',
    },
    {
        src: icons.AUDCHF,
        text: '_t_AUD/CHF_t_',
    },
    {
        src: icons.AUDJPY,
        text: '_t_AUD/JPY_t_',
    },
    {
        src: icons.AUDNZD,
        text: '_t_AUD/NZD_t_',
    },
    {
        src: icons.AUDUSD,
        text: '_t_AUD/USD_t_',
    },
    {
        src: icons.EURAUD,
        text: '_t_EUR/AUD_t_',
    },
    {
        src: icons.EURCAD,
        text: '_t_EUR/CAD_t_',
    },
    {
        src: icons.EURCHF,
        text: '_t_EUR/CHF_t_',
    },
    {
        src: icons.EURGBP,
        text: '_t_EUR/GBP_t_',
    },
    {
        src: icons.EURJPY,
        text: '_t_EUR/JPY_t_',
    },
    {
        src: icons.EURNZD,
        text: '_t_EUR/NZD_t_',
    },
    {
        src: icons.EURUSD,
        text: '_t_EUR/USD_t_',
    },
    {
        src: icons.GBPCHF,
        text: '_t_GBP/CHF_t_',
    },
    {
        src: icons.GBPJPY,
        text: '_t_GBP/JPY_t_',
    },
    {
        src: icons.GBPUSD,
        text: '_t_GBP/USD_t_',
    },
    {
        src: icons.NZDUSD,
        text: '_t_NZD/USD_t_',
    },
    {
        src: icons.USDCAD,
        text: '_t_USD/CAD_t_',
    },
    {
        src: icons.USDCHF,
        text: '_t_USD/CHF_t_',
    },
    {
        src: icons.USDJPY,
        text: '_t_USD/JPY_t_',
    },
]

export const smart_gold_index: MarketSymbol[] = [
    {
        src: icons.GOLDUSD,
        text: '_t_Smart Gold Index_t_',
    },
]

export const minor_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: '_t_AUD/CAD_t_',
    },
    {
        src: icons.AUDCHF,
        text: '_t_AUD/CHF_t_',
    },
    {
        src: icons.AUDNZD,
        text: '_t_AUD/NZD_t_',
    },
    {
        src: icons.CADCHF,
        text: '_t_CAD/CHF_t_',
    },
    {
        src: icons.CADJPY,
        text: '_t_CAD/JPY_t_',
    },
    {
        src: icons.CHFJPY,
        text: '_t_CHF/JPY_t_',
    },
    {
        src: icons.EURNOK,
        text: '_t_EUR/NOK_t_',
    },
    {
        src: icons.EURNZD,
        text: '_t_EUR/NZD_t_',
    },
    {
        src: icons.EURLPN,
        text: '_t_EUR/PLN_t_',
    },
    {
        src: icons.EURSEK,
        text: '_t_EUR/SEK_t_',
    },
    {
        src: icons.GBPCAD,
        text: '_t_GBP/CAD_t_',
    },
    {
        src: icons.GBPCHF,
        text: '_t_GBP/CHF_t_',
    },
    {
        src: icons.GBPNOK,
        text: '_t_GBP/NOK_t_',
    },
    {
        src: icons.GBPNZD,
        text: '_t_GBP/NZD_t_',
    },
    {
        src: icons.GBPSEK,
        text: '_t_GBP/SEK_t_',
    },
    {
        src: icons.NZDCAD,
        text: '_t_NZD/CAD_t_',
    },
    {
        src: icons.NZDJPY,
        text: '_t_NZD/JPY_t_',
    },
    {
        src: icons.NZDUSD,
        text: '_t_NZD/USD_t_',
    },
    {
        src: icons.USDCNH,
        text: '_t_USD/CNH_t_',
    },
    {
        src: icons.USDMXN,
        text: '_t_USD/MXN_t_',
    },
    {
        src: icons.USDNOK,
        text: '_t_USD/NOK_t_',
    },
    {
        src: icons.USDPLN,
        text: '_t_USD/PLN_t_',
    },
    {
        src: icons.USDSEK,
        text: '_t_USD/SEK_t_',
    },
    {
        src: icons.USDZAR,
        text: '_t_USD/ZAR_t_',
    },
]
export const minor_options_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: '_t_AUD/CAD_t_',
    },
    {
        src: icons.AUDCHF,
        text: '_t_AUD/CHF_t_',
    },
    {
        src: icons.AUDNZD,
        text: '_t_AUD/NZD_t_',
    },
    {
        src: icons.EURNZD,
        text: '_t_EUR/NZD_t_',
    },
    {
        src: icons.GBPCAD,
        text: '_t_GBP/CAD_t_',
    },
    {
        src: icons.GBPCHF,
        text: '_t_GBP/CHF_t_',
    },
    {
        src: icons.GBPNOK,
        text: '_t_GBP/NOK_t_',
    },
    {
        src: icons.GBPNZD,
        text: '_t_GBP/NZD_t_',
    },
    {
        src: icons.NZDJPY,
        text: '_t_NZD/JPY_t_',
    },
    {
        src: icons.NZDUSD,
        text: '_t_NZD/USD_t_',
    },
    {
        src: icons.USDMXN,
        text: '_t_USD/MXN_t_',
    },
    {
        src: icons.USDNOK,
        text: '_t_USD/NOK_t_',
    },
    {
        src: icons.USDPLN,
        text: '_t_USD/PLN_t_',
    },
    {
        src: icons.USDSEK,
        text: '_t_USD/SEK_t_',
    },
]

export const stocks_american_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSUS500,
        text: '_t_US 500_t_',
    },
    {
        src: icons.STOCKSUSTECH100,
        text: '_t_US Tech 100_t_',
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: '_t_Wall Street 30_t_',
    },
]

export const stocks_asian_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSAUS200,
        text: '_t_Australia 200_t_',
    },
    {
        src: icons.STOCKSJAPAN225,
        text: '_t_Japan 225_t_',
    },
]

export const stocks_european_indices: MarketSymbol[] = [
    {
        src: icons.STOCKSEUROPE50,
        text: '_t_Euro 50_t_',
        eu: true,
    },
    {
        src: icons.STOCKSFRANCE40,
        text: '_t_France 40_t_',
        eu: true,
    },
    {
        src: icons.STOCKSGERMANY40,
        text: '_t_Germany 40_t_',
        eu: true,
    },
    {
        src: icons.STOCKSNETHERLANDS25,
        text: '_t_Netherlands 25_t_',
        eu: false,
    },
    {
        src: icons.STOCKSSPAIN35,
        text: '_t_Spain 35_t_',
        eu: true,
    },
    {
        src: icons.STOCKSUK100,
        text: '_t_UK 100_t_',
        eu: true,
    },
]

export const american_stocks: MarketSymbol[] = [
    {
        src: icons.STOCKSADIDASSALOMON,
        text: '_t_Adidas Salomon_t_',
    },
    {
        src: icons.STOCKSADVANCEDMICRODEVICES,
        text: '_t_Advanced Micro Devices Inc_t_',
    },
    {
        src: icons.STOCKSAIRBNB,
        text: '_t_Airbnb_t_',
    },
    {
        src: icons.STOCKSAIRBUSSE,
        text: '_t_Airbus SE_t_',
    },
    {
        src: icons.STOCKSAIRFRANCE,
        text: '_t_Air France KLM SA_t_',
    },
    {
        src: icons.STOCKSALIBABAGROUP,
        text: '_t_Alibaba Group Holding Ltd_t_',
    },
    {
        src: icons.STOCKSALPHABET,
        text: '_t_Alphabet Inc Class C_t_',
    },
    {
        src: icons.STOCKSAMAZON,
        text: '_t_Amazon.com Inc_t_',
    },
    {
        src: icons.STOCKSAIRLINESGROUP,
        text: '_t_American Airlines Group Inc_t_',
    },
    {
        src: icons.STOCKSAMERICANINTERNATIONAL,
        text: '_t_American International Group_t_',
    },
    {
        src: icons.STOCKSAPPLE,
        text: '_t_Apple_t_',
    },
    {
        src: icons.STOCKSBANKOFAMERICA,
        text: '_t_Bank of America_t_',
    },

    {
        src: icons.STOCKSBAYERAG,
        text: '_t_Bayer AG_t_',
    },
    {
        src: icons.STOCKSBIOGEN,
        text: '_t_Biogen Inc_t_',
    },

    {
        src: icons.STOCKSBMW,
        text: '_t_BMW_t_',
    },
    {
        src: icons.STOCKSBOEING,
        text: '_t_Boeing_t_',
    },
    {
        src: icons.STOCKSCISCO,
        text: '_t_Cisco Systems_t_',
    },
    {
        src: icons.STOCKSCITIGROUP,
        text: '_t_Citigroup_t_',
    },
    {
        src: icons.STOCKSCOCACOLA,
        text: '_t_Coca-Cola_t_',
    },
    {
        src: icons.STOCKSCONTINENTAL,
        text: '_t_Continental AG_t_',
    },
    {
        src: icons.STOCKSDELTAAIRLINES,
        text: '_t_Delta Air Lines_t_',
    },
    {
        src: icons.STOCKSDEUTSCHEBANK,
        text: '_t_Deutsche Bank AG_t_',
    },
    {
        src: icons.STOCKSLUFTHANSA,
        text: '_t_Deutsche Lufthansa AG_t_',
    },
    {
        src: icons.STOCKSEBAY,
        text: '_t_eBay Inc_t_',
    },
    {
        src: icons.STOCKSFACEBOOK,
        text: '_t_Facebook Inc_t_',
    },
    {
        src: icons.STOCKSFEDEX,
        text: '_t_Fedex_t_',
    },
    {
        src: icons.STOCKSFOX,
        text: '_t_Fox Corp Class B_t_',
    },
    {
        src: icons.STOCKSGENERALMOTORSCOMP,
        text: '_t_General Motors Company_t_',
    },
    {
        src: icons.STOCKSGOLDMANSACHS,
        text: '_t_Goldman Sachs Group_t_',
    },
    {
        src: icons.STOCKSHOME,
        text: '_t_Home Depot Inc_t_',
    },
    {
        src: icons.STOCKSHPINC,
        text: '_t_HP Inc_t_',
    },
    {
        src: icons.STOCKSIBM,
        text: '_t_IBM_t_',
    },
    {
        src: icons.STOCKSINTEL,
        text: '_t_Intel_t_',
    },
    {
        src: icons.STOCKSJOHNSONJOHNSON,
        text: '_t_Johnson & Johnson_t_',
    },
    {
        src: icons.STOCKSJPMORGANCHASE,
        text: '_t_JP Morgan Chase_t_',
    },
    {
        src: icons.STOCKSMASTERCARDINC,
        text: '_t_Mastercard Inc_t_',
    },
    {
        src: icons.STOCKSMCDONALDS,
        text: '_t_McDonalds_t_',
    },
    {
        src: icons.STOCKSMICROSOFT,
        text: '_t_Microsoft Corporation_t_',
    },
    {
        src: icons.STOCKSMODERNA,
        text: '_t_Moderna Inc_t_',
    },
    {
        src: icons.STOCKSNETFLIX,
        text: '_t_Netflix Inc_t_',
    },
    {
        src: icons.STOCKSNIKE,
        text: '_t_Nike_t_',
    },
    {
        src: icons.STOCKSNVIDIA,
        text: '_t_NVIDIA Corp_t_',
    },
    {
        src: icons.STOCKSPAYPAL,
        text: '_t_Paypal_t_',
    },
    {
        src: icons.STOCKSPEPSICO,
        text: '_t_PepsiCo Inc_t_',
    },
    {
        src: icons.STOCKSPFIZER,
        text: '_t_Pfizer_t_',
    },
    {
        src: icons.STOCKSPORSCHE,
        text: '_t_Porsche Automobil Holding SE_t_',
    },
    {
        src: icons.STOCKSPROCTERGAMBLE,
        text: '_t_Procter & Gamble_t_',
    },
    {
        src: icons.STOCKSPUMA,
        text: '_t_Puma SE_t_',
    },
    {
        src: icons.STOCKSSALESFORCE,
        text: '_t_Salesforce.com Inc_t_',
    },
    {
        src: icons.STOCKSSONY,
        text: '_t_Sony Group Corp_t_',
    },
    {
        src: icons.STOCKSTESLA,
        text: '_t_Tesla Inc_t_',
    },
    {
        src: icons.STOCKSTEVAPHARMACEUTICAL,
        text: '_t_Teva Pharmaceutical Inds_t_',
    },
    {
        src: icons.STOCKSUBER,
        text: '_t_Uber Technologies Inc_t_',
    },
    {
        src: icons.STOCKSVISA,
        text: '_t_Visa_t_',
    },
    {
        src: icons.STOCKSWALMART,
        text: '_t_Wal-Mart Stores Inc_t_',
    },
    {
        src: icons.STOCKSWALTDISNEY,
        text: '_t_Walt Disney Company_t_',
    },
    {
        src: icons.STOCKSZOOM,
        text: '_t_Zoom Video Communications Inc_t_',
    },
]

export const cryptocurrencies_trade_type: MarketSymbol[] = [
    {
        src: icons.BTCUSD,
        text: '_t_BTC/USD_t_',
    },
    {
        src: icons.ETHUSD,
        text: '_t_ETH/USD_t_',
    },
]

export const cryptocurrencies_cfds: MarketSymbol[] = [
    {
        src: icons.ALGORAND,
        text: '_t_ALG/USD_t_',
    },
    {
        src: icons.ADAUSD,
        text: '_t_ADA/USD_t_',
    },
    {
        src: icons.AVALANCHE,
        text: '_t_AVA/USD_t_',
    },

    {
        src: icons.BAT,
        text: '_t_BAT/USD_t_',
    },
    {
        src: icons.BCHNEW,
        text: '_t_BCH/USD_t_',
    },
    {
        src: icons.BNBUSD,
        text: '_t_BNB/USD_t_',
    },

    {
        src: icons.BTCUSD,
        text: '_t_BTC/USD_t_',
    },
    {
        src: icons.BTCETH,
        text: '_t_BTC/ETH_t_',
    },
    {
        src: icons.BTCLTC,
        text: '_t_BTC/LTC_t_',
    },
    {
        src: icons.DOGUSD,
        text: '_t_DOG/USD_t_',
    },
    {
        src: icons.DOTUSD,
        text: '_t_DOT/USD_t_',
    },
    {
        src: icons.DSHUSD1,
        text: '_t_DSH/USD_t_',
    },
    {
        src: icons.EOSUSD1,
        text: '_t_EOS/USD_t_',
    },
    {
        src: icons.ETCUSD,
        text: '_t_ETC/USD_t_',
    },
    {
        src: icons.ETHUSD,
        text: '_t_ETH/USD_t_',
    },
    {
        src: icons.FILUSD,
        text: '_t_FIL/USD_t_',
    },
    {
        src: icons.IOTUSD,
        text: '_t_IOT/USD_t_',
    },
    {
        src: icons.LNKUSD,
        text: '_t_LNK/USD_t_',
    },
    {
        src: icons.LTCUSD,
        text: '_t_LTC/USD_t_',
    },
    {
        src: icons.MKRUSD,
        text: '_t_MKR/USD_t_',
    },
    {
        src: icons.MTCUSD,
        text: '_t_MTC/USD_t_',
    },
    {
        src: icons.NEOUSD,
        text: '_t_NEO/USD_t_',
    },
    {
        src: icons.OMGUSD,
        text: '_t_OMG/USD_t_',
    },
    {
        src: icons.SOLUSD,
        text: '_t_SOL/USD_t_',
    },
    {
        src: icons.TRXUSD,
        text: '_t_TRX/USD_t_',
    },
    {
        src: icons.UNIUSD,
        text: '_t_UNI/USD_t_',
    },
    {
        src: icons.XMRUSD,
        text: '_t_XMR/USD_t_',
    },
    {
        src: icons.XLMUSD,
        text: '_t_XLM/USD_t_',
    },
    {
        src: icons.XRPUSD1,
        text: '_t_XRP/USD_t_',
    },
    {
        src: icons.XTZUSD,
        text: '_t_XTZ/USD_t_',
    },
    {
        src: icons.ZECUSD,
        text: '_t_ZEC/USD_t_',
    },
]
export const cryptocurrencies_multipliers: MarketSymbol[] = [
    {
        src: icons.BTCUSD,
        text: '_t_BTC/USD_t_',
    },
    {
        src: icons.ETHUSD,
        text: '_t_ETH/USD_t_',
    },
]
export const jump_indices: MarketSymbol[] = [
    {
        src: icons.JUMP10NEW,
        text: '_t_Jump 10 Index_t_',
    },
    {
        src: icons.JUMP25NEW,
        text: '_t_Jump 25 Index_t_',
    },
    {
        src: icons.JUMP50NEW,
        text: '_t_Jump 50 Index_t_',
    },
    {
        src: icons.JUMP75NEW,
        text: '_t_Jump 75 Index_t_',
    },
    {
        src: icons.JUMP100NEW,
        text: '_t_Jump 100 Index_t_',
    },
]

export const energy: MarketSymbol[] = [
    {
        src: icons.POUNDBRENT,
        text: '_t_Brent crude oil_t_',
    },
    {
        src: icons.USDBRENT,
        text: '_t_West Texas Intermediate_t_',
    },
]

export const energy_options: MarketSymbol[] = [
    {
        src: icons.USDBRENT,
        text: '_t_Oil/USD_t_',
    },
]
export const volatility_indices_trade_type_eu: MarketSymbol[] = [
    {
        src: icons.VOLATILITY200EU,
        text: '_t_Volatility 200 Index_t_',
    },
    {
        src: icons.VOLATILITY300EU,
        text: '_t_Volatility 300 Index_t_',
    },
]

export const crash_boom_trade_type_eu: MarketSymbol[] = [
    {
        src: icons.CRASH300EU,
        text: '_t_Crash 300 Index_t_',
    },
    {
        src: icons.BOOM300EU,
        text: '_t_Boom 300 Index _t_',
    },
]

export const swap_free_pairs: MarketSymbol[] = [
    {
        src: icons.AUDCAD,
        text: '_t_AUD/CAD_t_',
    },
    {
        src: icons.AUDCHF,
        text: '_t_AUD/CHF_t_',
    },
    {
        src: icons.AUDJPY,
        text: '_t_AUD/JPY_t_',
    },
    {
        src: icons.AUDNZD,
        text: '_t_AUD/NZD_t_',
    },
    {
        src: icons.AUDUSD,
        text: '_t_AUD/USD_t_',
    },
    {
        src: icons.EURAUD,
        text: '_t_EUR/AUD_t_',
    },
    {
        src: icons.EURCAD,
        text: '_t_EUR/CAD_t_',
    },
    {
        src: icons.EURCHF,
        text: '_t_EUR/CHF_t_',
    },
    {
        src: icons.EURGBP,
        text: '_t_EUR/GBP_t_',
    },
    {
        src: icons.EURJPY,
        text: '_t_EUR/JPY_t_',
    },
    {
        src: icons.EURNZD,
        text: '_t_EUR/NZD_t_',
    },
    {
        src: icons.EURUSD,
        text: '_t_EUR/USD_t_',
    },
    {
        src: icons.GBPCHF,
        text: '_t_GBP/CHF_t_',
    },
    {
        src: icons.GBPJPY,
        text: '_t_GBP/JPY_t_',
    },
    {
        src: icons.GBPUSD,
        text: '_t_GBP/USD_t_',
    },
    {
        src: icons.NZDUSD,
        text: '_t_NZD/USD_t_',
    },
    {
        src: icons.USDCAD,
        text: '_t_USD/CAD_t_',
    },
    {
        src: icons.USDCHF,
        text: '_t_USD/CHF_t_',
    },
    {
        src: icons.USDJPY,
        text: '_t_USD/JPY_t_',
    },
]

export const basket_indices_cfds: MarketSymbol[] = [
    {
        src: icons.AUDBASKET,
        text: '_t_AUD Basket_t_',
    },
    {
        src: icons.EURBASKET,
        text: '_t_EUR Basket_t_',
    },
    {
        src: icons.GBPBASKET,
        text: '_t_GBP Basket_t_',
    },
    {
        src: icons.USDBASKET,
        text: '_t_USD Basket_t_',
    },
]

export const basket_indices_commodities: MarketSymbol[] = [
    {
        src: icons.GOLDBASKET,
        text: '_t_Gold Basket_t_',
    },
]

export const step_indices = [
    {
        src: icons.STEPINDICES,
        text: '_t_Step Index_t_',
    },
]

export const derived_fx: MarketSymbol[] = [
    {
        src: icons.GBPUSD10,
        text: '_t_GBP/USD DFX10 Index_t_',
    },
    {
        src: icons.EURUSD10,
        text: '_t_EUR/USD DFX10 Index_t_',
    },
    {
        src: icons.AUDUSD10,
        text: '_t_AUD/USD DFX10 Index_t_',
    },
    {
        src: icons.USDJPY10,
        text: '_t_USD/JPY DFX10 Index_t_',
    },
    {
        src: icons.USDCHF10,
        text: '_t_USD/CHF DFX10 Index_t_',
    },
    {
        src: icons.GBPUSD20,
        text: '_t_GBP/USD DFX20 Index_t_',
    },
    {
        src: icons.EURUSD20,
        text: '_t_EUR/USD DFX20 Index_t_',
    },
    {
        src: icons.AUDUSD20,
        text: '_t_AUD/USD DFX20 Index_t_',
    },
    {
        src: icons.USDJPY20,
        text: '_t_USD/JPY DFX20 Index_t_',
    },
    {
        src: icons.USDCHF20,
        text: '_t_USD/CHF DFX20 Index_t_',
    },
]
