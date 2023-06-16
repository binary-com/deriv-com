import { ReactElement } from 'react'
import { TFlexDirection } from 'features/types'
import { TString } from 'types/generics'

export type DerivCfdContentType = {
    main_title: TString
    secondary_title: TString
    sub_title: TString
    hero: ReactElement
    hero_mobile: ReactElement
    logo: ReactElement
    mobile_logo: ReactElement
}
