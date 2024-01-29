import { ReactElement } from 'react'
import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

export interface PlatformItem {
    icon?: string
    title: TString
    description: TString
    url: LinkUrlType
    image?: ReactElement | ((config: Partial<PlatformItemConfig>) => ReactElement)
    image_caption?: {
        text: TString
        components: ReactElement[]
    }
}

interface PlatformItemConfig {
    is_eu: boolean
}

export type SmartPlatformItem = TSmartContent<PlatformItem, PlatformItemConfig>
