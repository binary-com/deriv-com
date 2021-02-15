import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import AvailableTrades from '../helper/_available-trades'
import { WhyTrade } from '../sections/_why-trade'
import commodities from '../../static/content/_commodities'
import { commodities_margin } from '../../static/content/_margin'
import { commodities_options } from '../../static/content/_digital-options'
import Margin from '../sub-markets/_margin'
import DigitalOptions from '../sub-markets/_digital-options'
import { Localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const Commodities = ({ simple_step_content }) => {
    simple_step_content[1].text = (
        <Localize translate_text="Open a real account, make a deposit, and start trading commodities and other markets. " />
    )
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade commodities on Deriv" />}
                text={
                    <Localize translate_text="Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted." />
                }
            >
                {commodities.map((content, index) => (
                    <div
                        key={index}
                        text={content.text}
                        icon={<img src={content.src} alt={content.alt} />}
                    />
                ))}
            </WhyTrade>
            <AvailableTrades
                Margin={<Margin market_content={commodities_margin} />}
                DigitalOptions={
                    <DigitalOptions
                        market_name={'commodities'}
                        options_list={commodities_options}
                    />
                }
                name="Commodity"
                display_title={<Localize translate_text="Commodity trades available on Deriv" />}
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading commodities on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="commodities" />
        </>
    )
}
Commodities.propTypes = {
    simple_step_content: PropTypes.array,
}
export default Commodities
