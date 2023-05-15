import { TSmartContent } from 'types/generics'
import type { OsAppType } from 'features/components/molecules/os-app-button'

type OsAppConfig = {
    is_eu: boolean
}

export type SmartOsApp = TSmartContent<OsAppType, OsAppConfig>
