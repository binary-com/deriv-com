import { ReactElement } from 'react'
import { TString } from 'types/generics'

export interface InstrumentalContentProps {
    id: number
    instrumental_content_text: {
        text: TString
        components: ReactElement[]
    }
}
