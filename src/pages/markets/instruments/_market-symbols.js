import React from 'react'
import * as icons from 'components/elements/symbols'
import { Localize } from 'components/localization'

// TODO: move this file to static/content
export const americas = [
    {
        src: icons.OTCUS,
        text: <Localize translate_text="US Index" />,
    },
    {
        src: icons.OTCUSTECH,
        text: <Localize translate_text="US Tech Index" />,
    },
    {
        src: icons.OTCWALLSTREET,
        text: <Localize translate_text="Wall Street Index" />,
    },
]

export const asia_oceania = [
    {
        src: icons.OTCAUSTRALIAN,
        text: <Localize translate_text="Australian Index" />,
    },
    {
        src: icons.OTCHONGKONG,
        text: <Localize translate_text="Hong Kong Index" />,
    },
    {
        src: icons.OTCJAPANESE,
        text: <Localize translate_text="Japanese Index" />,
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
        src: icons.OTCDUTCH,
        text: <Localize translate_text="Dutch Index" />,
    },
    {
        src: icons.EURO50INDEX,
        text: <Localize translate_text="Euro 50 Index" />,
    },
    {
        src: icons.OTCFRENCH,
        text: <Localize translate_text="French Index" />,
    },
    {
        src: icons.OTCGERMAN,
        text: <Localize translate_text="German Index" />,
    },
    {
        src: icons.OTCSWISS,
        text: <Localize translate_text="Swiss Index" />,
    },
    {
        src: icons.OTCUK,
        text: <Localize translate_text="UK Index" />,
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
