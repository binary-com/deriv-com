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
        src: icons.INDEX200S1,
        text: <Localize translate_text="Volatility 200 (1s) Index" />,
    },
    {
        src: icons.INDEX300S1,
        text: <Localize translate_text="Volatility 300 (1s) Index" />,
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

export const volatility_indices_eu = [
    {
        src: icons.VINDEXIC200,
        text: <Localize translate_text="Volatility 200 (1s) Index" />,
    },
    {
        src: icons.VINDEXIC300,
        text: <Localize translate_text="Volatility 300 (1s) Index" />,
    },
]

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
        src: icons.BOOM300,
        text: <Localize translate_text="Boom 300 Index" />,
    },
    {
        src: icons.CRASH1000,
        text: <Localize translate_text="Crash 1000 Index" />,
    },
    {
        src: icons.CRASH500,
        text: <Localize translate_text="Crash 500 Index" />,
    },
    {
        src: icons.CRASH300,
        text: <Localize translate_text="Crash 300 Index" />,
    },
]

export const crash_boom_eu = [
    {
        src: icons.VCRASHIC300,
        text: <Localize translate_text="Crash 300 Index" />,
    },
    {
        src: icons.VBOOMIC300,
        text: <Localize translate_text="Boom 300 Index" />,
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
        src: icons.STOCKSGERMANY40,
        text: <Localize translate_text="Germany 40" />,
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
        src: icons.EURZAR,
        text: <Localize translate_text="EUR/ZAR" />,
    },
    {
        src: icons.GBPSGD,
        text: <Localize translate_text="GBP/SGD" />,
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
        src: icons.GOLDEUR,
        text: <Localize translate_text="Gold/EUR" />,
    },
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
        src: icons.SILVEREUR,
        text: <Localize translate_text="Silver/EUR" />,
    },
    {
        src: icons.SILVERUSD,
        text: <Localize translate_text="Silver/USD" />,
    },
]

export const micro_pairs = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="AUD/CAD" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="AUD/CHF" />,
    },
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="AUD/JPY" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="AUD/NZD" />,
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
        src: icons.EURNZD,
        text: <Localize translate_text="EUR/NZD" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="EUR/USD" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="GBP/CHF" />,
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
        src: icons.NZDUSD,
        text: <Localize translate_text="NZD/USD" />,
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
    {
        src: icons.GOLDINDEX,
        text: <Localize translate_text="Gold Index" />,
    },
]

export const smart_gold_index = [
    {
        src: icons.GOLDUSD,
        text: <Localize translate_text="Smart Gold Index" />,
    },
]

export const minor_pairs_cfds = [
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
        src: icons.CADCHF,
        text: <Localize translate_text="CAD/CHF" />,
    },
    {
        src: icons.CADJPY,

        text: <Localize translate_text="CAD/JPY" />,
    },
    {
        src: icons.CHFJPY,
        text: <Localize translate_text="CAD/CHF" />,
    },
    {
        src: icons.EURNOK,
        text: <Localize translate_text="EUR/NOK" />,
    },
    {
        src: icons.EURNZD,
        text: <Localize translate_text="EUR/NZD" />,
    },
    {
        src: icons.EURPLN,
        text: <Localize translate_text="EUR/PLN" />,
    },
    {
        src: icons.EURSEK,
        text: <Localize translate_text="EUR/SEK" />,
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
        src: icons.GBPSEK,
        text: <Localize translate_text="GBP/SEK" />,
    },
    {
        src: icons.NZDCAD,
        text: <Localize translate_text="NZD/CAD" />,
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
        src: icons.USDCNH,
        text: <Localize translate_text="USD/CNH" />,
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
    {
        src: icons.USDZAR,
        text: <Localize translate_text="USD/ZAR" />,
    },
]

export const minor_pairs_options = [
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
        src: icons.STOCKSGERMANY40,
        text: <Localize translate_text="Germany 40" />,
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
        src: icons.STOCKSAIRBUS,
        text: <Localize translate_text="Airbus SE" />,
    },
    {
        src: icons.STOCKSAIRFRANCE,
        text: <Localize translate_text="Air France KLM SA" />,
    },
    {
        src: icons.STOCKSAMD,
        text: <Localize translate_text="Advanced Micro Devices, Inc." />,
    },
    {
        src: icons.STOCKSBAYERAG,
        text: <Localize translate_text="Bayer AG" />,
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
        src: icons.STOCKSCONTINENTALAG,
        text: <Localize translate_text="Continental AG" />,
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
        src: icons.STOCKSDEUTSCHELUFTHANSAAG,
        text: <Localize translate_text="Deutsche Lufthansa AG" />,
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
        src: icons.STOCKSFOXCORPCLASSB,
        text: <Localize translate_text="Fox Corp Class B" />,
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
        src: icons.STOCKSHOMEDEPOTINC,
        text: <Localize translate_text="Home Depot Inc" />,
    },
    {
        src: icons.STOCKSHUGOBOSSAGCOMMONSTOCK,
        text: <Localize translate_text="Hugo Boss AG Common Stock" />,
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
        src: icons.STOCKSNESTLESA,
        text: <Localize translate_text="Nestle SA" />,
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
        src: icons.STOCKSNOVARTISAG,
        text: <Localize translate_text="Novartis AG" />,
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
        src: icons.STOCKSPEPSICOINC,
        text: <Localize translate_text="PepsiCo, Inc." />,
    },
    {
        src: icons.STOCKSPORSCHEAUTOMOBILHOLDINGSE,
        text: <Localize translate_text="Porsche Automobil Holding SE" />,
    },
    {
        src: icons.STOCKSPUMASE,
        text: <Localize translate_text="Puma SE" />,
    },
    {
        src: icons.SONYGROUPCORP,
        text: <Localize translate_text="Sony Group Corp" />,
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

// export const cryptocurrencies_trade_type = [
//     {
//         src: icons.BTC,
//         text: <Localize translate_text="Bitcoin" />,
//     },
//     {
//         src: icons.BCH,
//         text: <Localize translate_text="Bitcoin Cash" />,
//     },
//     {
//         src: icons.ETH,
//         text: <Localize translate_text="Ethereum" />,
//     },
//     {
//         src: icons.LTC,
//         text: <Localize translate_text="Litecoin" />,
//     },
//     {
//         src: icons.EOS,
//         text: <Localize translate_text="EOS" />,
//     },
//     {
//         src: icons.BNB,
//         text: <Localize translate_text="Binance Coin" />,
//     },
//     {
//         src: icons.DASH,
//         text: <Localize translate_text="DASH" />,
//     },
//     {
//         src: icons.XRP,
//         text: <Localize translate_text="Ripple" />,
//     },
//     {
//         src: icons.MNR,
//         text: <Localize translate_text="Monero" />,
//     },
//     {
//         src: icons.ZEC,
//         text: <Localize translate_text="ZCash" />,
//     },
// ]

export const cryptocurrencies_trade_type = [
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/USD" />,
    },
    {
        src: icons.ETH,
        text: <Localize translate_text="ETH/USD" />,
    },
]

// export const cryptocurrencies_cfds = [
//     {
//         src: icons.AVALANCHE,
//         text: <Localize translate_text="Avalanche" />,
//     },
//     {
//         src: icons.ALGORAND,
//         text: <Localize translate_text="Algorand" />,
//     },
//     {
//         src: icons.BAT,
//         text: <Localize translate_text="BAT" />,
//     },
//     {
//         src: icons.BNB,
//         text: <Localize translate_text="Binance coin" />,
//     },
//     {
//         src: icons.BTC,
//         text: <Localize translate_text="Bitcoin" />,
//     },
//     {
//         src: icons.BCH,
//         text: <Localize translate_text="Bitcoin Cash" />,
//     },
//     {
//         src: icons.CARDANO,
//         text: <Localize translate_text="Cardano" />,
//     },
//     {
//         src: icons.CHAINLINK,
//         text: <Localize translate_text="Chainlink" />,
//     },
//     {
//         src: icons.DASH,
//         text: <Localize translate_text="DASH" />,
//     },
//     {
//         src: icons.DOGECOIN,
//         text: <Localize translate_text="Dogecoin" />,
//     },
//     {
//         src: icons.EOS,
//         text: <Localize translate_text="EOS" />,
//     },
//     {
//         src: icons.ETH,
//         text: <Localize translate_text="Ethereum" />,
//     },
//     {
//         src: icons.ETH_CLASSIC,
//         text: <Localize translate_text="Ethereum Classic" />,
//     },
//     {
//         src: icons.FILECOIN,
//         text: <Localize translate_text="Filecoin" />,
//     },
//     {
//         src: icons.IOTA,
//         text: <Localize translate_text="IOTA" />,
//     },
//     {
//         src: icons.LTC,
//         text: <Localize translate_text="Litecoin" />,
//     },
//     {
//         src: icons.MAKER,
//         text: <Localize translate_text="Maker" />,
//     },
//     {
//         src: icons.MNR,
//         text: <Localize translate_text="Monero" />,
//     },
//     {
//         src: icons.NEO,
//         text: <Localize translate_text="Neo" />,
//     },
//     {
//         src: icons.OMICEGO,
//         text: <Localize translate_text="OmiseGo" />,
//     },
//     {
//         src: icons.POLKADOT,
//         text: <Localize translate_text="Polkadot" />,
//     },
//     {
//         src: icons.POLYGON,
//         text: <Localize translate_text="Polygon" />,
//     },
//     {
//         src: icons.XRP,
//         text: <Localize translate_text="Ripple" />,
//     },
//     {
//         src: icons.SOLANA,
//         text: <Localize translate_text="Solana" />,
//     },
//     {
//         src: icons.XLM,
//         text: <Localize translate_text="Stellar Lumens" />,
//     },
//     {
//         src: icons.TERRA,
//         text: <Localize translate_text="Terra" />,
//     },
//     {
//         src: icons.TRX,
//         text: <Localize translate_text="Tron" />,
//     },
//     {
//         src: icons.UNISWAP,
//         text: <Localize translate_text="Uniswap" />,
//     },
//     {
//         src: icons.XTZ,
//         text: <Localize translate_text="XTZ" />,
//     },
//     {
//         src: icons.ZEC,
//         text: <Localize translate_text="ZCash" />,
//     },
// ]

export const cryptocurrencies_cfds = [
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/ETH" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/LTC" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/XAG" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/XAU" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="ADA/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="ALG/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BAT/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="DOG/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="DOT/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="ETC/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="FIL/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="LNK/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="MKR/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="MTC/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="SOL/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="UNI/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="XTZ/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="AVA/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="TER/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BCH/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BNB/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="DSH/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="EOS/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="ETH/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="LTC/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="XMR/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="XRP/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="ZEC/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="IOT/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="NEO/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="OMG/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="TRX/USD" />,
    },
    {
        src: icons.BTC,
        text: <Localize translate_text="XLM/USD" />,
    },
]

export const cryptocurrencies_multipliers = [
    {
        src: icons.BTC,
        text: <Localize translate_text="BTC/USD" />,
    },
    {
        src: icons.ETH,
        text: <Localize translate_text="ETH/USD" />,
    },
]

export const jump_indices = [
    {
        src: icons.JUMP10,
        text: <Localize translate_text="Jump 10 Index" />,
    },
    {
        src: icons.JUMP25,
        text: <Localize translate_text="Jump 25 Index" />,
    },
    {
        src: icons.JUMP50,
        text: <Localize translate_text="Jump 50 Index" />,
    },
    {
        src: icons.JUMP75,
        text: <Localize translate_text="Jump 75 Index" />,
    },
    {
        src: icons.JUMP100,
        text: <Localize translate_text="Jump 100 Index" />,
    },
]

export const energy = [
    {
        src: icons.OILUSD,
        text: <Localize translate_text="Oil/USD" />,
    },
]

export const energy_eu = [
    {
        src: icons.BRENTCRUDEOILUK,
        text: <Localize translate_text="Brent crude oil" />,
    },
    {
        src: icons.WTIOILUS,
        text: <Localize translate_text="West Texas Intermediate" />,
    },
]

export const volatility_indices_trade_type_eu = [
    {
        src: icons.VOLATILITY200EU,
        text: <Localize translate_text="Volatility 200 Index" />,
    },
    {
        src: icons.VOLATILITY300EU,
        text: <Localize translate_text="Volatility 300 Index" />,
    },
]

export const crash_boom_trade_type_eu = [
    {
        src: icons.CRASH300EU,
        text: <Localize translate_text="Crash 300 Index" />,
    },
    {
        src: icons.BOOM300EU,
        text: <Localize translate_text="Boom 300 Index " />,
    },
]

export const swap_free_pairs = [
    {
        src: icons.AUDCAD,
        text: <Localize translate_text="AUD/CAD" />,
    },
    {
        src: icons.AUDCHF,
        text: <Localize translate_text="AUD/CHF" />,
    },
    {
        src: icons.AUDJPY,
        text: <Localize translate_text="AUD/JPY" />,
    },
    {
        src: icons.AUDNZD,
        text: <Localize translate_text="AUD/NZD" />,
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
        src: icons.EURNZD,
        text: <Localize translate_text="EUR/NZD" />,
    },
    {
        src: icons.EURUSD,
        text: <Localize translate_text="EUR/USD" />,
    },
    {
        src: icons.GBPCHF,
        text: <Localize translate_text="GBP/CHF" />,
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
        src: icons.NZDUSD,
        text: <Localize translate_text="NZD/USD" />,
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
