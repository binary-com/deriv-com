import React from 'react'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import NoCommission from 'images/svg/no-commission.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'

export default [
    {
        src: VariableSpreads,
        alt: 'variable spreads',
        text: <Localize translate_text="Competitive fixed and variable spreads" />,
    },
    {
        src: NoCommission,
        alt: 'no commission',
        text: <Localize translate_text="No commission on any commodity contract" />,
    },
    {
        src: MetalAndOil,
        alt: 'precious metals and oils',
        text: <Localize translate_text="All four precious metals and crude oil available" />,
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: <Localize translate_text="Easy-to-use platforms, superior chart technology" />,
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: <Localize translate_text="Smart and friendly support, 7 days a week" />,
    },
]
