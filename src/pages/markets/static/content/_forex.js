import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Leverage from 'images/svg/leverage.svg'

export default [
    {
        src: Leverage,
        alt: 'leverage',
        text: localize('High leverage, tight spreads'),
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: localize('Responsive, easy-to-use platforms'),
    },
    {
        src: AdvancedCharting,
        alt: 'advanced charting widgets',
        text: localize('Advanced charting widgets'),
    },
    {
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: localize('Convenient deposit and withdrawal methods'),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: localize('Smart and friendly support, 7 days a week'),
    },
]
