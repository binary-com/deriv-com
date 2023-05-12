import { TSmartContent, TString } from 'types/generics'

export type StepItem = {
    header: TString
    description: TString
    icon_src: string
    mobile_icon_src: string
    note?: TString
}

type StepItemConfig = {
    is_eu: boolean
}

export type SmartStepItem = TSmartContent<StepItem, StepItemConfig>
