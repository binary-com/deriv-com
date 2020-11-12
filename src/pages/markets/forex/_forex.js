import React from 'react'
import PropTypes from 'prop-types'
import { WhyTrade } from '../_why-trade'
import OtherMarkets from '../_other-markets.js'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import Multipliers from './_multipliers.js'
import SimpleSteps from 'components/custom/_simple-steps'
import { Localize } from 'components/localization'
//SVG
import FriendlySupport from 'images/svg/friendly-support.svg'
import Deposit from 'images/svg/deposit-and-withdrawal.svg'
import AdvancedCharting from 'images/svg/advanced-charting-widgets.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import Leverage from 'images/svg/leverage.svg'

const Forex = ({ simple_step_content }) => {
    return (
        <>
            <WhyTrade
                header={<Localize translate_text="Why trade forex on Deriv" />}
                text={
                    <Localize translate_text="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events." />
                }
            >
                <div
                    text={<Localize translate_text="High leverage, tight spreads" />}
                    icon={<img src={Leverage} alt="leverage" />}
                ></div>
                <div
                    text={<Localize translate_text="Responsive, easy-to-use platforms" />}
                    icon={<img src={ResponsiveWebsite} alt="responsive website" />}
                ></div>
                <div
                    text={<Localize translate_text="Advanced charting widgets" />}
                    icon={<img src={AdvancedCharting} alt="advanced charting widgets" />}
                ></div>
                <div
                    text={<Localize translate_text="Convenient deposit and withdrawal methods" />}
                    icon={<img src={Deposit} alt="deposit and withdrawal" />}
                ></div>
                <div
                    text={<Localize translate_text="Smart and friendly support, 7 days a week" />}
                    icon={<img src={FriendlySupport} alt="friendly support" />}
                ></div>
            </WhyTrade>
            <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
                Multipliers={Multipliers}
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
