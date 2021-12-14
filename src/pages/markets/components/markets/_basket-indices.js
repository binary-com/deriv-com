import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades.js'
import basket from '../../static/content/_basket'
import { basket_cfds } from '../../static/content/_cfds'
import { basket_multiplier } from '../../static/content/_multipliers'
import { basket_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { Localize, localize } from 'components/localization'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const BasketIndices = ({ simple_step_content }) => {
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade basket indices on Deriv" />}
                text={
                    <Localize translate_text="Trade your favourite currency against a basket of major currencies and benefit from reduced risk and volatility." />
                }
            >
                {basket.map((content, index) => (
                    <div key={index} text={content.text} icon={<img src={content.src} alt="" />} />
                ))}
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_content={basket_cfds} />}
                DigitalOptions={
                    <DigitalOptions
                        market_name={localize('basket')}
                        options_list={basket_options}
                    />
                }
                Multipliers={<Multipliers market_content={basket_multiplier} />}
                name="Forex"
                display_title={
                    <Localize translate_text="Basket indices trades available on Deriv" />
                }
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading forex on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="commodities" />
        </>
    )
}

BasketIndices.propTypes = {
    simple_step_content: PropTypes.array,
}
export default BasketIndices
