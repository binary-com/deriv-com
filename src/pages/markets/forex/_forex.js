import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import forex_content from '../static/content/_forex'
import { forex_margin } from '../static/content/_margin'
import Margin from '../components/_margin'
import DigitalOptions from './_digital-options.js'
import Multipliers from './_multipliers.js'
import { Localize } from 'components/localization'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../_other-markets.js'))

const Forex = ({ simple_step_content }) => (
    <>
        <WhyTrade
            header={<Localize translate_text="Why trade forex on Deriv" />}
            text={
                <Localize translate_text="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events." />
            }
        >
            {forex_content.map((content, index) => (
                <div
                    key={index}
                    text={content.text}
                    icon={<img src={content.src} alt={content.alt} />}
                />
            ))}
        </WhyTrade>
        <AvailableTrades
            Margin={<Margin market_content={forex_margin} />}
            DigitalOptions={DigitalOptions}
            Multipliers={Multipliers}
            name="Forex"
            display_title={<Localize translate_text="Forex trades available on Deriv" />}
        />
        <SimpleSteps
            header={<Localize translate_text="Start trading forex on Deriv in 3 simple steps" />}
            content={simple_step_content}
            sign_up
        />
        <OtherMarkets except="forex" />
    </>
)

Forex.propTypes = {
    simple_step_content: PropTypes.array,
}
export default Forex
