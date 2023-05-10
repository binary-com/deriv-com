import { TSmartContent, TString } from 'types/generics'

export type OsApp = {
    icon_src: string
    link: string
    text: TString
    smallText?: TString
}

type OsAppConfig = {
    is_eu: boolean
}

export type SmartOsApp = TSmartContent<OsApp, OsAppConfig>
