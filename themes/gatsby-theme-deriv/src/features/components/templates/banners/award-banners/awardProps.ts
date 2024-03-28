import { ReactElement } from 'react'
import { TString } from 'types/generics'

export interface AwardImagesProps {
    id: number
    image: ReactElement
}

export interface AwardProps {
    title: TString
    subtitle?: TString
}
