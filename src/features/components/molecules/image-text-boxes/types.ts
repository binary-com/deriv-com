import { ReactElement } from 'react'
import { TFlexDirection } from '../../../types'
import { TString } from 'types/generics'

export type TAcuityFeatures = {
    mobileFlexDirection: TFlexDirection
    data: TContentData[]
}
interface TContentData {
    id: number
    direction: TFlexDirection
    image: ReactElement
    title?: TString
    subtitle?: TString
    info_title?: TString
    system_url?: string | ((config: Partial<SystemUrlItemConfig>) => string)
    button_text?: TString
}

interface SystemUrlItemConfig {
    is_eu: boolean
}
