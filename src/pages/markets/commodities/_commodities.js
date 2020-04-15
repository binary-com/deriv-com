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
import NoCommission from 'images/svg/no-commission.svg'
import MetalAndOil from 'images/svg/precious-metals-and-oils.svg'
import VariableSpreads from 'images/svg/variable-spreads.svg'

const Commodities = ({ simple_step_content }) => {
    simple_step_content[1].text =
        'Open a real account, make a deposit, and start trading commodities and other markets.'
    return (
        <>
            <WhyTrade
                header={localize('Why trade commodities on Deriv')}
                text={localize(
                    'Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted.',
                )}
            >
                <div
                    text={localize('Competitive fixed and variable spreads')}
                    icon={<VariableSpreads />}
                />
                <div
                    text={localize('No commission on any commodity contract')}
                    icon={<NoCommission />}
                />
                <div
                    text={localize('All four precious metals and crude oil available ')}
                    icon={<MetalAndOil />}
                />
                <div
                    text={localize('Easy-to-use platforms, superior chart technology')}
                    icon={<ResponsiveWebsite />}
                />
                <div
                    text={localize('Smart and friendly support, 7 days a week')}
                    icon={<FriendlySupport />}
                />
            </WhyTrade>
            <AvailableTrades Margin={Margin} DigitalOptions={DigitalOptions} name="Commodity" />
            <SimpleSteps
                header={localize('Start trading commodities on Deriv in 3 simple steps')}
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
