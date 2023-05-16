import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type AcuityFeaturesTypes = {
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
