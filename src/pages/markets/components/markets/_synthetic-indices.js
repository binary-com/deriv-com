import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades'
import synthetic_content from '../../static/content/_synthetic'
import { synthetic_margin } from '../../static/content/_margin'
import { synthetic_multiplier } from '../../static/content/_multipliers'
import { synthetic_options } from '../../static/content/_digital-options'
import Margin from '../sub-markets/_margin'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { Localize } from 'components/localization'
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const StockIndices = ({ simple_step_content }) => (
    <div>
        <WhyTrade
            header={<Localize translate_text="Why trade synthetic indices on Deriv" />}
            text={
                <Localize translate_text="Our synthetic indices are based on a cryptographically secure random number generator audited for fairness by an independent third party. These indices are engineered to simulate real-world market movement and are unaffected by natural events and disruptions. Synthetic indices are available 24/7, have constant volatility, fixed generation intervals, and are free of market and liquidity risks." />
            }
        >
            {synthetic_content.map((content, index) => (
                <div
                    key={index}
                    text={content.text}
                    icon={<img src={content.src} alt={content.alt} />}
                />
            ))}
        </WhyTrade>
        <AvailableTrades
            Margin={<Margin market_content={synthetic_margin} />}
            DigitalOptions={
                <DigitalOptions
                    market_name={'synthetic indices'}
                    options_list={synthetic_options}
                />
            }
            Multipliers={<Multipliers market_content={synthetic_multiplier} />}
            name="Synthetic indices"
            display_title={
                <Localize translate_text="Synthetic indices trades available on Deriv" />
            }
        />
        <SimpleSteps
            header={
                <Localize translate_text="Start trading synthetic indices on Deriv in 3 simple steps" />
            }
            content={simple_step_content}
            sign_up
        />
        <OtherMarkets except="Synthetic_Indices" />
    </div>
)
StockIndices.propTypes = {
    simple_step_content: PropTypes.array,
}
export default StockIndices
