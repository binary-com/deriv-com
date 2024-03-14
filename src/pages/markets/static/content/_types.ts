import React from 'react'
import { TString } from 'types/generics'

export type TSimpleStepContent = {
    header: TString
    text: TString
    icon?: React.ReactElement
}

export type TMarket = {
    src: string
    text: TString
    alt: TString
}

export type TMarketSymbol = {
    text: TString
    src: string
    eu?: boolean
}

type TContent = {
    title: TString
    instruments: React.ReactNode
    id?: string
    title_components?: React.ReactElement[]
    mobile_title?: TString
    details?: React.ReactNode
    col?: number
    tablet_col?: number
    mobile_col?: number
    padding?: string
    gap?: string
    flex?: boolean
    gap_mobile?: string
    mobile_template?: true
    single_markets_list?: {
        col: number
        tablet_col?: number
        mobile_col?: number
    }
}

export type TMarketContent = {
    has_global_accordion?: boolean
    markets_list?: {
        col: number
        tablet_col?: number
        mobile_col?: number
    }
    template?: number
    content: TContent[]
    eu_content?: TString[]
}

export type TMarketInstruments = {
    market_content: TMarketContent
}

export type TNavTab = {
    route_from: string
}

export type TTabButton = {
    selected?: boolean
}

export type TTabList = {
    title: TString
    tab_name: string
    route_to: string
}
