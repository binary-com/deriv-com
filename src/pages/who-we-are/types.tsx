import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type EmployerAwardsType = {
    id: number
    title: TString
    text_with_link: {
        text: TString
        components?: ReactElement[]
    }
    sub_text?: TString
}
