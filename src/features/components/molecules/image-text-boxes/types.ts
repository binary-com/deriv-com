import { ReactElement } from 'react'
import { TFlexDirection } from 'features/types'
import { TString } from 'types/generics'

export type AcuityFeaturesTypes = {
    mobile_flex_direction: TFlexDirection
    data: ContentDataTypes[]
}
interface ContentDataTypes {
    id: number
    image: ReactElement
    title?: TString
    subtitle?: TString
    info_title?: TString
    system_url?: string | ((config: SystemUrlItemConfig) => string)
    button_text?: TString
}

interface SystemUrlItemConfig {
    is_eu: boolean
}
