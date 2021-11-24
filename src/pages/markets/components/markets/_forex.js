import React from 'react'
import PropTypes from 'prop-types'
import Loadable from '@loadable/component'
import { WhyTrade } from '../sections/_why-trade'
import AvailableTrades from '../helper/_available-trades.js'
import { ForexContent } from '../../static/content/_forex'
import { forex_cfds } from '../../static/content/_cfds'
import { forex_multiplier } from '../../static/content/_multipliers'
import { forex_options } from '../../static/content/_digital-options'
import CFDs from '../sub-markets/_cfds'
import Multipliers from '../sub-markets/_multipliers'
import DigitalOptions from '../sub-markets/_digital-options'
import { Localize, localize } from 'components/localization'
//Lazy-load
const SimpleSteps = Loadable(() => import('components/custom/_simple-steps'))
const OtherMarkets = Loadable(() => import('../sections/_other-markets.js'))

const Forex = ({ simple_step_content }) => {
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade forex on Deriv" />}
                text={
                    <Localize translate_text="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events." />
                }
            >
                <ForexContent />
            </WhyTrade>
            <AvailableTrades
                CFDs={<CFDs market_content={forex_cfds} />}
                DigitalOptions={
                    <DigitalOptions market_name={localize('forex')} options_list={forex_options} />
                }
                Multipliers={<Multipliers market_content={forex_multiplier} />}
                name="Forex"
                display_title={<Localize translate_text="Forex trades available on Deriv" />}
            />
            <SimpleSteps
                header={
                    <Localize translate_text="Start trading forex on Deriv in 3 simple steps" />
                }
                content={simple_step_content}
                sign_up
            />
            <OtherMarkets except="forex" />
        </>
    )
}

Forex.propTypes = {
    simple_step_content: PropTypes.array,
}
export default Forex
