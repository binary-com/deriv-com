import React from 'react'
import PropTypes from 'prop-types'
import OtherMarkets from '../_other-markets.js'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import SimpleSteps from 'components/custom/_simple-steps'
import { localize, Localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/extended-trading-times.svg'
import MinimalCapital from 'images/svg/minimal-capital.svg'

const StockIndices = ({ simple_step_content }) => {
    simple_step_content[1].text = localize(
        'Open a real account, make a deposit, and start trading stock indices and other markets.',
    )
    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="Why trade stock indices on Deriv" />}
                text={
                    <Localize translate_text="Profit from the price movements in a broad market or sector without owning underlying assets. Sourced from over-the-counter (OTC) markets, our stock indices offer competitively priced asset baskets and allow you to trade outside the regular hours of major stock markets." />
                }
            >
                <div
                    text={<Localize translate_text="Minimal capital requirements, limited risk" />}
                    icon={<MinimalCapital />}
                ></div>
                <div
                    text={<Localize translate_text="Extended trading time, up to 18 hours a day" />}
                    icon={<ExtendedTime />}
                ></div>
                <div
                    text={
                        <Localize translate_text="Fast and secure deposit and withdrawal options" />
                    }
                    icon={<Deposit />}
                ></div>
                <div
                    text={<Localize translate_text="Responsive, easy-to-use platforms" />}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={<Localize translate_text="Smart and friendly support, 7 days a week" />}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
                name="Stock indices"
                display_title={
                    <Localize translate_text="Stock indices trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading stock indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}
StockIndices.propTypes = {
    simple_step_content: PropTypes.array,
}
export default StockIndices
