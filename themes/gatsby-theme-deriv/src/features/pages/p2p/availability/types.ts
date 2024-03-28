import { ReactElement } from 'react'
import { LinkUrlType } from 'features/types'
import { TSmartContent, TString } from 'types/generics'

type Paragraph = {
    text: TString
    components?: ReactElement[]
    link_in_mobile?: true
}

export type PlatformType = {
    header: TString
    icon_src: string
    mobile_icon_src: string
    list: Paragraph[]
    button?: {
        text: TString
        url: LinkUrlType
    }
}

type PlatformConfig = {
    is_eu: boolean
}

export type SmartPlatform = TSmartContent<PlatformType, PlatformConfig>
