import React from 'react'
import * as icons from 'components/elements/symbols'
import { Localize } from 'components/localization'

// TODO: move this file to static/content
export const americas = [
    {
        src: icons.STOCKSUS500,
        text: <Localize translate_text="US 500" />,
    },
    {
        src: icons.STOCKSUSTECH100,
        text: <Localize translate_text="US Tech 100" />,
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: <Localize translate_text="Wall Street 30" />,
    },
]

export const asia_oceania = [
    {
        src: icons.STOCKSAUS200,
        text: <Localize translate_text="Australia 200" />,
    },
    {
        src: icons.STOCKSHONGKONG50,
        text: <Localize translate_text="Hong Kong 50" />,
    },
    {
        src: icons.STOCKSJAPAN225,
        text: <Localize translate_text="Japan 225" />,
    },
]

export const continuous_indices = [
    {
        src: icons.INDEX10S1,
        text: <Localize translate_text="Volatility 10 (1s) Index" />,
    },
    {
        src: icons.INDEX25S1,
        text: <Localize translate_text="Volatility 25 (1s) Index" />,
    },
    {
        src: icons.INDEX50S1,
        text: <Localize translate_text="Volatility 50 (1s) Index" />,
    },
    {
        src: icons.INDEX75S1,
        text: <Localize translate_text="Volatility 75 (1s) Index" />,
    },
    {
        src: icons.INDEX100S1,
        text: <Localize translate_text="Volatility 100 (1s) Index" />,
    },
    {
        src: icons.INDEX10,
        text: <Localize translate_text="Volatility 10 Index" />,
    },
    {
        src: icons.INDEX25,
        text: <Localize translate_text="Volatility 25 Index" />,
    },
    {
        src: icons.INDEX50,
        text: <Localize translate_text="Volatility 50 Index" />,
    },
    {
        src: icons.INDEX75,
        text: <Localize translate_text="Volatility 75 Index" />,
    },
    {
        src: icons.INDEX100,
        text: <Localize translate_text="Volatility 100 Index" />,
    },
]

export const volatility_indices = continuous_indices

export const crash_boom = [
    {
        src: icons.BOOM1000,
        text: <Localize translate_text="Boom 1000 Index" />,
    },
    {
        src: icons.BOOM500,
        text: <Localize translate_text="Boom 500 Index" />,
    },
    {
        src: icons.CRASH1000,
        text: <Localize translate_text="Crash 1000 Index" />,
    },
    {
        src: icons.CRASH500,
        text: <Localize translate_text="Crash 500 Index" />,
    },
]

export const daily_reset_indices = [
    {
        src: icons.MARKETBEAR,
        text: <Localize translate_text="Bear Market Index" />,
    },
    {
        src: icons.MARKETBULL,
        text: <Localize translate_text="Bull Market Index" />,
    },
]

export const europe = [
    {
        src: icons.STOCKSNETHERLAND25,
        text: <Localize translate_text="Netherland 25" />,
    },
    {
        src: icons.STOCKSEUROPE50,
        text: <Localize translate_text="Europe 50" />,
    },
    {
        src: icons.STOCKSFRANCE40,
        text: <Localize translate_text="France 40" />,
    },
    {
        src: icons.STOCKSGERMANY30,
        text: <Localize translate_text="Germany 30" />,
    },
    {
        src: icons.STOCKSSWISS20,
        text: <Localize translate_text="Swiss 20" />,
    },
    {
        src: icons.STOCKSUK100,
        text: <Localize translate_text="UK 100" />,
    },
]

export const exotic_pairs = [
    {
        src: icons.AUDSGD,
        text: <Localize translate_text="AUD/SGD" />,
    },
    {
        src: icons.CHFJPY,
        text: <Localize translate_text="CHF/JPY" />,
    },
    {
        src: icons.EURHKD,
        text: <Localize translate_text="EUR/HKD" />,
    },
    {
        src: icons.EURILS,
        text: <Localize translate_text="EUR/ILS" />,
    },
    {
        src: icons.EURMXN,
        text: <Localize translate_text="EUR/MXN" />,
    },
    {
        src: icons.EURSGD,
        text: <Localize translate_text="EUR/SGD" />,
    },
    {
        src: icons.EURTRY,
        text: <Localize translate_text="EUR/TRY" />,
    },
    {
        src: icons.EURZAR,
        text: <Localize translate_text="EUR/ZAR" />,
    },
    {
        src: icons.GBPSGD,
        text: <Localize translate_text="GBP/SGD" />,
    },
    {
        src: icons.GBPTRY,
        text: <Localize translate_text="GBP/TRY" />,
    },
    {
        src: icons.HKDJPY,
        text: <Localize translate_text="HKD/JPY" />,
    },
    {
        src: icons.NZDCHF,
        text: <Localize translate_text="NZD/CHF" />,
    },
    {
        src: icons.NZDSGD,
        text: <Localize translate_text="NZD/SGD" />,
    },
    {
        src: icons.SGDJPY,
        text: <Localize translate_text="SGD/JPY" />,
    },
    {
        src: icons.USDHKD,
        text: <Localize translate_text="USD/HKD" />,
    },
    {
        src: icons.USDILS,
        text: <Localize translate_text="USD/ILS" />,
    },
    {
        src: icons.USDRUB,
        text: <Localize translate_text="USD/RUB" />,
    },
    {
        src: icons.USDSGD,
        text: <Localize translate_text="USD/SGD" />,
    },
    {
        src: icons.USDTHB,
        text: <Localize translate_text="USD/THB" />,
    },
    {
        src: icons.USDTRY,
        text: <Localize translate_text="USD/TRY" />,
    },
]

export const major_pairs = [
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="AUD/JPY" />,
    },
    {
        src: icons.AUDUSD,
        text: <Localize translate_text="AUD/USD" />,
    },
    {
        src: icons.EURAUD,
        text: <Localize translate_text="EUR/AUD" />,
    },
    {
        src: icons.EURCAD,
        text: <Localize translate_text="EUR/CAD" />,
    },
    {
        src: icons.EURCHF,
        text: <Localize translate_text="EUR/CHF" />,
    },
    {
        src: icons.EURGBP,
        text: <Localize translate_text="EUR/GBP" />,
    },
    {
        src: icons.EURJPY,
        text: <Localize translate_text="EUR/JPY" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="EUR/USD" />,
    },
    {
        src: icons.GBPAUD,
        text: <Localize translate_text="GBP/AUD" />,
    },
    {
        src: icons.GBPJPY,
        text: <Localize translate_text="GBP/JPY" />,
    },
    {
        src: icons.GBPUSD,
        text: <Localize translate_text="GBP/USD" />,
    },
    {
        src: icons.USDCAD,
        text: <Localize translate_text="USD/CAD" />,
    },
    {
        src: icons.USDCHF,
        text: <Localize translate_text="USD/CHF" />,
    },
    {
        src: icons.USDJPY,
        text: <Localize translate_text="USD/JPY" />,
    },
]

export const metals = [
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="Gold/USD" />,
    },
    {
        src: icons.PALLADIUMUSD,
        text: <Localize translate_text="Palladium/USD" />,
    },
    {
        src: icons.PLATINUMUSD,
        text: <Localize translate_text="Platinum/USD" />,
    },
    {
        src: icons.SILVERUSD,
        text: <Localize translate_text="Silver/USD" />,
    },
]

export const range_break = [
    {
        src: icons.RANGEBREAK100,
        text: <Localize translate_text="Range Break 100 Index" />,
    },
    {
        src: icons.RANGEBREAK200,
        text: <Localize translate_text="Range Break 200 Index" />,
    },
]

export const smart_fx = [
    {
        src: icons.AUDINDEX,
        text: <Localize translate_text="AUD Index" />,
    },
    {
        src: icons.EURINDEX,
        text: <Localize translate_text="EUR Index" />,
    },
    {
        src: icons.GBPINDEX,
        text: <Localize translate_text="GBP Index" />,
    },
    {
        src: icons.USDINDEX,
        text: <Localize translate_text="USD Index" />,
    },
]

export const smart_gold_index = [
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="Smart Gold Index" />,
    },
]

export const minor_pairs = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="AUD/CAD" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="AUD/CHF" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="AUD/NZD" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="EUR/NZD" />,
    },
    {
        src: icons.GBPCAD,
        text: <Localize translate_text="GBP/CAD" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="GBP/CHF" />,
    },
    {
        src: icons.GBPNOK,
        text: <Localize translate_text="GBP/NOK" />,
    },
    {
        src: icons.GBPNZD,
        text: <Localize translate_text="GBP/NZD" />,
    },
    {
        src: icons.NZDJPY,
        text: <Localize translate_text="NZD/JPY" />,
    },
    {
        src: icons.NZDUSD,
        text: <Localize translate_text="NZD/USD" />,
    },
    {
        src: icons.USDMXN,
        text: <Localize translate_text="USD/MXN" />,
    },
    {
        src: icons.USDNOK,
        text: <Localize translate_text="USD/NOK" />,
    },
    {
        src: icons.USDPLN,
        text: <Localize translate_text="USD/PLN" />,
    },
    {
        src: icons.USDSEK,
        text: <Localize translate_text="USD/SEK" />,
    },
]

export const stocks_american_indices = [
    {
        src: icons.STOCKSUS500,
        text: <Localize translate_text="US 500" />,
    },
    {
        src: icons.STOCKSUSTECH100,
        text: <Localize translate_text="US Tech 100" />,
    },
    {
        src: icons.STOCKSWALLSTREET30,
        text: <Localize translate_text="Wall Street 30" />,
    },
]

export const stocks_asian_indices = [
    {
        src: icons.STOCKSAUS200,
        text: <Localize translate_text="Australia 200" />,
    },
    {
        src: icons.STOCKSJAPAN225,
        text: <Localize translate_text="Japan 225" />,
    },
]

export const stocks_european_indices = [
    {
        src: icons.STOCKSNETHERLAND25,
        text: <Localize translate_text="Netherland 25" />,
    },
    {
        src: icons.STOCKSEUROPE50,
        text: <Localize translate_text="Europe 50" />,
    },
    {
        src: icons.STOCKSFRANCE40,
        text: <Localize translate_text="France 40" />,
    },
    {
        src: icons.STOCKSGERMANY30,
        text: <Localize translate_text="Germany 30" />,
    },
    {
        src: icons.STOCKSUK100,
        text: <Localize translate_text="UK 100" />,
    },
    {
        src: icons.STOCKSSPAIN35,
        text: <Localize translate_text="Spain 35" />,
    },
]

export const american_stocks = [
    {
        src: icons.STOCKSAIRLINESGROUP,
        text: <Localize translate_text="American Airlines Group Inc" />,
    },
    {
        src: icons.STOCKSAPPLE,
        text: <Localize translate_text="Apple" />,
    },
    {
        src: icons.STOCKSADIDASSALOMON,
        text: <Localize translate_text="Adidas Salomon" />,
    },
    {
        src: icons.STOCKSAMERICANINTERNATIONAL,
        text: <Localize translate_text="American International Group" />,
    },
    {
        src: icons.STOCKSAMAZON,
        text: <Localize translate_text="Amazon.com Inc" />,
    },
    {
        src: icons.STOCKSBOEING,
        text: <Localize translate_text="Boeing" />,
    },
    {
        src: icons.STOCKSALIBABAGROUP,
        text: <Localize translate_text="Alibaba Group Holding Ltd" />,
    },
    {
        src: icons.STOCKSBANKOFAMERICA,
        text: <Localize translate_text="Bank of America" />,
    },
    {
        src: icons.STOCKSBAYERAG,
        text: <Localize translate_text="Bayer AG" />,
    },
    {
        src: icons.STOCKSBMW,
        text: <Localize translate_text="BMW" />,
    },
    {
        src: icons.STOCKSCITIGROUP,
        text: <Localize translate_text="Citigroup" />,
    },
    {
        src: icons.STOCKSSALESFORCE,
        text: <Localize translate_text="Salesforce.com Inc" />,
    },
    {
        src: icons.STOCKSCISCO,
        text: <Localize translate_text="Cisco Systems" />,
    },
    {
        src: icons.STOCKSDELTAAIRLINES,
        text: <Localize translate_text="Delta Air Lines" />,
    },
    {
        src: icons.STOCKSDEUTSCHEBANK,
        text: <Localize translate_text="Deutsche Bank AG" />,
    },
    {
        src: icons.STOCKSWALTDISNEY,
        text: <Localize translate_text="Walt Disney Company" />,
    },
    {
        src: icons.STOCKSEBAY,
        text: <Localize translate_text="eBay Inc" />,
    },
    {
        src: icons.STOCKSFACEBOOK,
        text: <Localize translate_text="Facebook Inc" />,
    },
    {
        src: icons.STOCKSFEDEX,
        text: <Localize translate_text="Fedex" />,
    },
    {
        src: icons.STOCKSGENERALMOTORSCOMP,
        text: <Localize translate_text="General Motors Company" />,
    },
    {
        src: icons.STOCKSALPHABET,
        text: <Localize translate_text="Alphabet Inc Class C" />,
    },
    {
        src: icons.STOCKSGOLDMANSACHS,
        text: <Localize translate_text="Goldman Sachs Group" />,
    },
    {
        src: icons.STOCKSHPINC,
        text: <Localize translate_text="HP Inc" />,
    },
    {
        src: icons.STOCKSIBM,
        text: <Localize translate_text="IBM" />,
    },
    {
        src: icons.STOCKSINTEL,
        text: <Localize translate_text="Intel" />,
    },
    {
        src: icons.STOCKSJOHNSONJOHNSON,
        text: <Localize translate_text="Jonhson & Johnson" />,
    },
    {
        src: icons.STOCKSJPMORGANCHASE,
        text: <Localize translate_text="JP Morgan Chase" />,
    },
    {
        src: icons.STOCKSCOCACOLA,
        text: <Localize translate_text="Coca-Cola" />,
    },
    {
        src: icons.STOCKSMASTERCARDINC,
        text: <Localize translate_text="Mastercard Inc" />,
    },
    {
        src: icons.STOCKSMCDONALDS,
        text: <Localize translate_text="McDonalds" />,
    },
    {
        src: icons.STOCKSMICROSOFT,
        text: <Localize translate_text="Microsoft Corporation" />,
    },
    {
        src: icons.STOCKSNETFLIX,
        text: <Localize translate_text="Netflix Inc" />,
    },
    {
        src: icons.STOCKSNIKE,
        text: <Localize translate_text="Nike" />,
    },
    {
        src: icons.STOCKSNVIDIA,
        text: <Localize translate_text="NVIDIA Corp" />,
    },
    {
        src: icons.STOCKSPFIZER,
        text: <Localize translate_text="Pfizer" />,
    },
    {
        src: icons.STOCKSPROCTERGAMBLE,
        text: <Localize translate_text="Procter & Gamble" />,
    },
    {
        src: icons.STOCKSPAYPAL,
        text: <Localize translate_text="Paypal" />,
    },
    {
        src: icons.STOCKSTEVAPHARMACEUTICAL,
        text: <Localize translate_text="Teva Pharmaceutical Inds" />,
    },
    {
        src: icons.STOCKSTESLA,
        text: <Localize translate_text="Tesla Inc" />,
    },
    {
        src: icons.STOCKSTWITTER,
        text: <Localize translate_text="Twitter" />,
    },
    {
        src: icons.STOCKSUBER,
        text: <Localize translate_text="Uber Technologies Inc" />,
    },
    {
        src: icons.STOCKSVISA,
        text: <Localize translate_text="Visa" />,
    },
    {
        src: icons.STOCKSWALMART,
        text: <Localize translate_text="Wal-Mart Stores Inc" />,
    },

    {
        src: icons.STOCKSZOOM,
        text: <Localize translate_text="Zoom Video Communications Inc" />,
    },
    {
        src: icons.STOCKSAIRBNB,
        text: <Localize translate_text="Airbnb" />,
    },

    {
        src: icons.STOCKSBIOGEN,
        text: <Localize translate_text="Biogen Inc" />,
    },
    {
        src: icons.STOCKSMODERNA,
        text: <Localize translate_text="Moderna Inc" />,
    },
]
