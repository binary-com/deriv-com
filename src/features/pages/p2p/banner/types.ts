import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export type OsApp = {
    icon_src: string
    text: TString
    url: LinkUrlType
    smallText?: TString
}

type OsAppConfig = {
    is_eu: boolean
}

export type SmartOsApp = TSmartContent<OsApp, OsAppConfig>
