import { TSmartContent, TString } from 'types/generics'

export type NumberItem = {
    header: TString
    description: TString
}

type NumberItemConfig = {
    is_eu: boolean
}

export type SmartNumberItem = TSmartContent<NumberItem, NumberItemConfig>
