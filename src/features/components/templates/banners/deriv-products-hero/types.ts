import { ReactElement } from 'react'
import { TString } from 'types/generics'

export type DerivProductContentType = {
    main_title: TString[]
    hero: ReactElement
    hero_mobile: ReactElement
    logo: ReactElement
    coming_soon_icon: ReactElement
    mobile_coming_soon_icon: ReactElement
    mobile_logo: ReactElement
    product_water_mark_logo?: ReactElement
    product_water_mark_logo_mobile?: ReactElement
    feature_buttons?: ReactElement[]
}
