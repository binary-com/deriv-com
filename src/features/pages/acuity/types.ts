import { ReactElement } from 'react'
import { TFlexDirection } from '../../types'
import { TString } from 'types/generics'

export type TAcuityFeatures = {
    id: number
    description: TString
    image: ReactElement
    direction: TFlexDirection
    info_title?: TString
    button?: ReactElement | ((config: Partial<SystemUrlItemConfig>) => ReactElement)
}

interface SystemUrlItemConfig {
    is_eu: boolean
}
