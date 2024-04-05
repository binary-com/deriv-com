import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { localize } from 'components/localization'

export const EUlistData = [
    {
        id: 1,
        text: '_t_You can set limits to your trading in your account settings. Limits may be strengthened at any time._t_',
    },
    {
        id: 2,
        text: '_t_Customer Support can only remove or weaken your trading limits after 24 hours of receiving the request._t_',
    },
    {
        id: 3,
        text: '_t_You can also completely exclude yourself from trading for a specified period in your account settings. The minimum period of self-exclusion is 6 months. You have the option to extend it to a total of 5 years immediately without any cooling-off period._t_',
    },
    {
        id: 4,
        text: '_t_When you’ve set your self-exclusion period, we will refund your account balance to you._t_',
    },
    {
        id: 5,
        text: '_t_If you don’t ask for a removal of self-exclusion after the expiry, it is not removed automatically._t_',
    },
    {
        id: 6,
        text: '_t_If you wish to resume trading when your self-exclusion expires and once you have made a request to remove self-exclusion, there will be a cooling-off period of 24 hours before you are allowed access to our site._t_',
    },
]

export const ROWlistData = [
    {
        id: 1,
        text: '_t_You have full control over your trading limits. You can set, remove, increase, or decrease limits on your stake amount, losses incurred, and duration of trading sessions at any time._t_',
    },
    {
        id: 2,
        text: '_t_If you wish to bar yourself from trading on our site, set self-exclusion limits. There’s a minimum period of 6 months for self-exclusion after which you may extend it to a total of 5 years or resume trading immediately after expiration._t_',
    },
    {
        id: 3,
        text: '_t_When you’ve set your self-exclusion period, we will refund your account balance._t_',
    },
]

export const leftImage = () => {
    return (
        <StaticImage
            src="../../../../images/migration/responsibe-trading/how-trading-limits.jpg"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            alt={localize(
                '_t_Screen showing self-exclusion information for your trading account_t_',
            )}
            className="rounded-1200"
        />
    )
}

export const leftImageEU = () => {
    return (
        <StaticImage
            src="../../../../images/migration/responsibe-trading/how-trading-limits-eu.jpg"
            loading="eager"
            formats={['avif', 'webp', 'auto']}
            alt={localize(
                '_t_Screen showing self-exclusion information for your trading account_t_',
            )}
            className="rounded-1200"
        />
    )
}
