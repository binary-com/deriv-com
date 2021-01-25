import { localize } from 'components/localization'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/extended-trading-times.svg'
import FriendlySupport from 'images/svg/friendly-support.svg'
import MinimalCapital from 'images/svg/minimal-capital.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'

export default [
    {
        src: MinimalCapital,
        alt: 'minimal capital',
        text: localize('Minimal capital requirements, limited risk'),
    },
    {
        src: ExtendedTime,
        alt: 'extended trading times',
        text: localize('Extended trading time, up to 18 hours a day'),
    },
    {
        src: Deposit,
        alt: 'deposit and withdrawal',
        text: localize('Fast and secure deposit and withdrawal options'),
    },
    {
        src: ResponsiveWebsite,
        alt: 'responsive website',
        text: localize('Responsive, easy-to-use platforms'),
    },
    {
        src: FriendlySupport,
        alt: 'friendly support',
        text: localize('Smart and friendly support, 7 days a week'),
    },
]
