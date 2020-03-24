import React from 'react'
import { WhyTrade } from './_why-trade'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Leverage from 'images/svg/leverage.svg'

const Forex = () => {
    return (
        <WhyTrade header={localize('Why trade forex on Deriv')}>
            <div text={localize('High leverage, tight spreads')} icon={<Leverage />}></div>
            <div
                text={localize('Responsive, easy-to-use platforms')}
                icon={<ResponsiveWebsite />}
            ></div>
            <div text={localize('Advanced charting widgets')} icon={<AdvancedCharting />}></div>
            <div
                text={localize('Convenient deposit and withdrawal methods')}
                icon={<Deposit />}
            ></div>
            <div
                text={localize('Friendly support, 7 days a week')}
                icon={<FriendlySupport />}
            ></div>
        </WhyTrade>
    )
}

export default Forex
