import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import NoCommission from 'images/svg/no-commission.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'

export default [
    {
        src: VariableSpreads,
        alt: 'variable spreads',
        text: localize('Competitive fixed and variable spreads'),
    },
    {
        src: NoCommission,
        alt: 'no commission',
        text: localize('No commission on any commodity contract'),
    },
    {
        src: MetalAndOil,
        alt: 'precious metals and oils',
        text: localize('All four precious metals and crude oil available'),
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: localize('Easy-to-use platforms, superior chart technology'),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: localize('Smart and friendly support, 7 days a week'),
    },
]
