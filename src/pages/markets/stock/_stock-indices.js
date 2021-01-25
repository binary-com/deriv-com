import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades'
import stock_content from '../static/content/_stock'
import { stock_margin } from '../static/content/_margin'
import Margin from '../components/_margin'
import DigitalOptions from './_digital-options.js'
import { localize, Localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../_other-markets.js'))

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
