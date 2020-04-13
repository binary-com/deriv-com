import React from 'react'
import PropTypes from 'prop-types'
import OtherMarkets from '../_other-markets.js'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import SimpleSteps from 'common/_simple-steps'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import ExtendedTime from 'images/svg/extended-trading-times.svg'
import MinimalCapital from 'images/svg/minimal-capital.svg'

// const what_trade_sub_header = [
//     {
//         text: localize(
//             'Stock indices track the performance of the broad stock market or a particular market sector. Trading stock indices allows you to profit from the price movements in a market without buying the underlying assets',
//         ),
//     },
//     {
//         text: localize(
//             'At Deriv, our stock indices are sourced from over-the-counter (OTC) markets. So you get competitively priced asset baskets and can trade outside regular hours of major stock markets.',
//         ),
//     },
// ]

const StockIndices = ({ simple_step_content }) => {
    simple_step_content[1].text =
        'Open a real account, make a deposit, and start trading stock indices and other markets. '
    // const learn_more_section = useRef(null)

    return (
        <div>
            <WhyTrade
                header={localize('Why trade stock indices on Deriv')}
                text={localize(
                    'Profit from the price movements in a broad market or sector without owning underlying assets. Sourced from over-the-counter (OTC) markets, our stock indices offer competitively priced asset baskets and allow you to trade outside the regular hours of major stock markets.',
                )}
            >
                <div
                    text={localize('Minimal capital requirements, limited risk')}
                    icon={<MinimalCapital />}
                ></div>
                <div
                    text={localize('Extended trading time, up to 18 hours a day')}
                    icon={<ExtendedTime />}
                ></div>
                <div
                    text={localize('Fast and secure deposit and withdrawal options')}
                    icon={<Deposit />}
                ></div>
                <div
                    text={localize('Responsive, easy-to-use platforms')}
                    icon={<ResponsiveWebsite />}
                ></div>
                <div
                    text={localize('Smart and friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                ></div>
            </WhyTrade>
            {/* <WhatTrade
                sub_header={what_trade_sub_header}
                header={localize('What are stock indices?')}
                // learn_more_section={learn_more_section}
            /> */}

            <AvailableTrades Margin={Margin} DigitalOptions={DigitalOptions} name="Stock indices" />
            <SimpleSteps
                header={localize('Start trading stock indices on Deriv in 3 simple steps')}
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}
StockIndices.propTypes = {
    simple_step_content: PropTypes.object,
}
export default StockIndices
