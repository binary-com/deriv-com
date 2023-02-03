import React from 'react'
import Favourite from 'images/svg/trade-types/favourite.svg'
import Instant from 'images/svg/trade-types/instant.svg'
import UserFriendly from 'images/svg/trade-types/user-friendly.svg'
import Flexible from 'images/svg/trade-types/flexible.svg'
import { Localize } from 'components/localization'

type OptionsContentElement = {
    src: string
    alt: string
    item_title: React.ReactNode
    text: React.ReactNode
}

export const digital_options: OptionsContentElement[] = [
    {
        src: Favourite,
        alt: 'favourite markets icon',
        item_title: <Localize translate_text="All favourite markets and more" />,
        text: (
            <Localize translate_text="Trade on all popular markets plus our proprietary synthetics that are available 24/7." />
        ),
    },
    {
        src: Instant,
        alt: 'instant access icon',
        item_title: <Localize translate_text="Instant access" />,
        text: (
            <Localize translate_text="Open an account now and gain access to the world of trading. No need to wait — you can begin trading in minutes." />
        ),
    },
    {
        src: UserFriendly,
        alt: 'user friendly icon',
        item_title: (
            <Localize translate_text="User-friendly platforms with powerful chart widgets" />
        ),
        text: (
            <Localize translate_text="Trade on secure, intuitive, and easy to use platforms with powerful chart technology." />
        ),
    },
    {
        src: Flexible,
        alt: 'flexible icon',
        item_title: (
            <Localize translate_text="Flexible trade types with minimal capital requirements" />
        ),
        text: (
            <Localize translate_text="Deposit as little as 5 USD to start trading and customise your trades to suit your strategy." />
        ),
    },
]
