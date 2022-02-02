import React, { ReactElement } from 'react'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/markets/friendly-support.svg'
import MetalAndOil from 'images/svg/markets/precious-metals-and-oils.svg'
import NoCommission from 'images/svg/markets/no-commission.svg'
import ResponsiveWebsite from 'images/svg/markets/responsive-website.svg'
import VariableSpreads from 'images/svg/markets/variable-spreads.svg'

export type CommoditiesContent = {
    src: string
    text: ReactElement
}
const commodities: CommoditiesContent[] = [
    {
        src: VariableSpreads,
        text: <Localize translate_text="Competitive fixed and variable spreads" />,
    },
    {
        src: NoCommission,
        text: <Localize translate_text="No commission on any commodity contract" />,
    },
    {
        src: MetalAndOil,
        text: <Localize translate_text="All four precious metals and crude oil available" />,
    },
    {
        src: ResponsiveWebsite,
        text: <Localize translate_text="Easy-to-use platforms, superior chart technology" />,
    },
    {
        src: FriendlySupport,
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]

export default commodities
