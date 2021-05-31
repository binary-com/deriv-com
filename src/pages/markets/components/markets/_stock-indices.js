import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import stock_content from '../../static/content/_stock'
import { stock_margin } from '../../static/content/_margin'
import { stock_options } from '../../static/content/_digital-options'
import Margin from '../sub-markets/_margin'
import DigitalOptions from '../sub-markets/_digital-options'
import { localize, Localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const StockIndices = ({ simple_step_content }) => {
    simple_step_content[1].text = localize(
        'Open a real account, make a deposit, and start trading stocks, indices and other markets.',
    )
    return (
        <div>
            <WhyTrade
                header={<Localize translate_text="Why trade stocks & indices on Deriv" />}
                text={
                    <Localize translate_text="Trade global stocks of your favourite household brands and international stock market indices on Deriv. Our stocks & indices offer competitively priced equities and asset baskets that you can trade outside the regular hours of major stock markets." />
                }
            >
                {stock_content.map((content, index) => (
                    <div
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                Margin={<Margin market_content={stock_margin} />}
                DigitalOptions={
                    <DigitalOptions market_name={'stocks & indices'} options_list={stock_options} />
                }
                name="Stocks & indices"
                display_title={
                    <Localize translate_text="Stocks & indices trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading stocks & indices on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="stock_indices" />
        </div>
    )
}
StockIndices.propTypes = {
    simple_step_content: PropTypes.objects,
}
export default StockIndices
