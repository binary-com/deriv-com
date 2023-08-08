import { TSmartContent, TString } from 'types/generics'
import { LinkUrlType } from 'features/types'

export type InformationType = {
    icon: string
    heading: TString
}
export type OsAppType = {
    icon: string
    text: string
    url: LinkUrlType
    smallText?: TString
}
export type ExtraInfoType = {
    where: TString
    icon: string
}
export type QRScanBoxType = {
    icon: string
    heading_one: TString
    heading_two: TString
    heading_three?: TString
}
type OsAppConfig = {
    is_eu: boolean
}
export type SmartOsApp = TSmartContent<OsAppType, OsAppConfig>

export type BannerType = {
    information: InformationType
    scan_box: QRScanBoxType
    extra_info?: ExtraInfoType
    os_apps: SmartOsApp[]
}
export type RoadmapType = {
    paragraph: TString
    frame: string
    link: string
}
