export interface LiveMarketRawData {
    com: { [key in COM]: LiveMarketAssetRawData }
    cry: { [key in CRY]: LiveMarketAssetRawData }
    der: { [key in DER]: LiveMarketAssetRawData }
    etfs: { [key in ETFS]: LiveMarketAssetRawData }
    fx: { [key in FX]: LiveMarketAssetRawData }
    ind: { [key in IND]: LiveMarketAssetRawData }
    stk: { [key in STK]: LiveMarketAssetRawData }
}

export type MarketName = keyof LiveMarketRawData
export type MarketAssetName<T extends MarketName> = keyof LiveMarketRawData[T]

export type STK = 'AAPL' | 'DIS' | 'TSLA'
export type IND = 'US_30' | 'US_100'
export type FX = 'AUDUSD' | 'EURUSD' | 'GBPJPY' | 'GBPUSD' | 'USDCAD'
export type ETFS = 'EEM_US' | 'GDX_US' | 'SPY_US' | 'UNG_US' | 'XLK_US'
export type DER =
    | 'Crash_1000_Index'
    | 'EURUSD_DFX_10_Index'
    | 'Jump_50_Index'
    | 'Range_Break_200_Index'
    | 'Volatility_75_Index'
export type CRY = 'ADAUSD' | 'BTCUSD' | 'DOGUSD' | 'DSHUSD' | 'ETHUSD'
export type COM = 'WTI_OIL' | 'XAGUSD' | 'XAUUSD' | 'XCUUSD' | 'XPDUSD'

export interface LiveMarketAssetRawData {
    ask: number
    bid: number
    chng: string
    code: string
    mid: number
    mkt: string
    ord: number
    reg: string
    sprd: number
    sym: string
}
