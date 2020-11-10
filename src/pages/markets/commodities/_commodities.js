import React from 'react'
import PropTypes from 'prop-types'
import OtherMarkets from '../_other-markets.js'
import { WhyTrade } from '../_why-trade'
import AvailableTrades from '../_available-trades.js'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
import SimpleSteps from 'components/custom/_simple-steps'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/friendly-support.svg'
import ResponsiveWebsite from 'images/svg/responsive-website.svg'
import NoCommission from 'images/svg/no-commission.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'

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
                <div
                    text={<Localize translate_text="Competitive fixed and variable spreads" />}
                    icon={<img src={VariableSpreads} alt="variable spreads" />}
                />
                <div
                    text={<Localize translate_text="No commission on any commodity contract" />}
                    icon={<img src={NoCommission} alt="no commission" />}
                />
                <div
                    text={
                        <Localize translate_text="All four precious metals and crude oil available" />
                    }
                    icon={<img src={MetalAndOil} alt="precious metals and oils" />}
                />
                <div
                    text={
                        <Localize translate_text="Easy-to-use platforms, superior chart technology" />
                    }
                    icon={<img src={ResponsiveWebsite} alt="responsive website" />}
                />
                <div
                    text={<Localize translate_text="Smart and friendly support, 7 days a week" />}
                    icon={<img src={FriendlySupport} alt="friendly support" />}
                />
            </WhyTrade>
            <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
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
