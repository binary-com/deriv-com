import Favourite from 'images/svg/trade-types/favourite.svg'
import Instant from 'images/svg/trade-types/instant.svg'
import UserFriendly from 'images/svg/trade-types/user-friendly.svg'
import Flexible from 'images/svg/trade-types/flexible.svg'
import { TString } from 'types/generics'

type OptionsContentElement = {
    src: string
    alt: TString
    item_title: TString
    text: TString
}

export const digital_options: OptionsContentElement[] = [
    {
        src: Favourite,
        alt: '_t_favourite markets icon_t_',
        item_title: '_t_All favourite markets and more_t_',
        text: '_t_Trade on all popular markets plus our proprietary synthetics that are available 24/7._t_',
    },
    {
        src: Flexible,
        alt: '_t_instant access icon_t_',
        item_title: '_t_Instant access_t_',
        text: '_t_Open an account now and gain access to the world of trading. No need to wait — you can begin trading in minutes._t_',
    },
    {
        src: Instant,
        alt: '_t_user friendly icon_t_',
        item_title: '_t_User-friendly platforms with powerful chart widgets_t_',
        text: '_t_Trade on secure, intuitive, and easy to use platforms with powerful chart technology._t_',
    },
    {
        src: UserFriendly,
        alt: '_t_flexible icon_t_',
        item_title: '_t_Flexible trade types with minimal capital requirements_t_',
        text: '_t_Deposit as little as 5 USD to start trading and customise your trades to suit your strategy._t_',
    },
]
