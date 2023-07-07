import React from 'react'
import WhyTradeOptions, {
    WhyTradeOptionsType,
} from 'features/components/templates/why-trade-options'
import flexiblePayment from 'images/svg/digital-options/flexible-payment.svg'
import favouriteMarket from 'images/svg/digital-options/favourite-markets.svg'
import instantAccess from 'images/svg/digital-options/instant-access.svg'
import platforms from 'images/svg/digital-options/platforms.svg'
import tradeTypes from 'images/svg/digital-options/trade-types.svg'

const data: WhyTradeOptionsType = {
    heading: '_t_Why trade options on Deriv_t_',
    heading2: "_t_Don't have a Deriv account yet?_t_",
    button: {
        url: {
            type: 'internal',
            to: '/',
        },
        text: '_t_Create free demo account_t_',
    },
    items: [
        {
            icon_src: flexiblePayment,
            heading: '_t_Flexible payout options_t_',
            description:
                '_t_Know your potential profit with fixed payouts, or maximise potential profit with variable payouts if your predictions are right._t_',
        },
        {
            icon_src: favouriteMarket,
            heading: '_t_All favourite markets and more_t_',
            description:
                '_t_Trade on all popular markets plus our proprietary synthetics that are available 24/7._t_',
        },
        {
            icon_src: instantAccess,
            heading: '_t_Instant access_t_',
            description:
                '_t_Open an account now and gain access to the world of trading. No need to wait — you can begin trading in minutes._t_',
        },
        {
            icon_src: platforms,
            heading: '_t_User-friendly platforms with powerful chart widgets_t_',
            description:
                '_t_Trade on secure, intuitive, and easy to use platforms with powerful chart technology._t_',
        },
        {
            icon_src: tradeTypes,
            heading: '_t_Flexible trade types with minimal capital requirements_t_',
            description:
                '_t_Deposit as little as 5 USD to start trading and customise your trades to suit your strategy._t_',
        },
    ],
}

const WhyTrade = () => {
    return <WhyTradeOptions data={data} />
}

export default WhyTrade
