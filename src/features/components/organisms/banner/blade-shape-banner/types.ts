import { TSmartContent, TString } from 'types/generics'
import type { OsAppType } from 'features/components/molecules/os-app-button'
import type { QRScanBoxType } from 'features/components/molecules/qr-scan-box'

export type InformationType = {
    img_src: string
    heading: TString
}

type OsAppConfig = {
    is_eu: boolean
}

export type SmartOsApp = TSmartContent<OsAppType, OsAppConfig>

export interface BannerType {
    information: InformationType
    scanbox: QRScanBoxType
    os_apps: SmartOsApp[]
}
