import { ReactElement } from 'react'
import { TSmartContent, TString } from 'types/generics'

export type DisclaimerParagraph = {
    text: TString
    components?: ReactElement[]
}

export type DisclaimerParagraphConfig = {
    is_eu: boolean
    is_non_eu: boolean
    is_cpa_plan: boolean
    is_non_eu_or_cpa_plan: boolean
}

export type SmartDisclaimerParagraph = TSmartContent<DisclaimerParagraph, DisclaimerParagraphConfig>
