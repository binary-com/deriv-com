import { TSmartContent, TString } from 'types/generics'

export type ConnectivityTypeItemType = {
    title: TString
    description: TString
    icon_src: string
    alt: TString
}

type ConnectivityTypeConfig = {
    is_eu: boolean
}

export type SmartConnectivityTypeItemType = TSmartContent<
    ConnectivityTypeItemType,
    ConnectivityTypeConfig
>
